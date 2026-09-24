import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  Output,
  signal,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PreviewFile {
  file: File;
  url: string | null; // object URL, only set for images
}

/**
 * File drag-and-drop zone, modeled on the MDN "File drag and drop" tutorial:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
 *
 * - A <label>/<input type="file"> pair backs the drop zone, so click-to-browse
 *   and drag-and-drop share the same code path.
 * - `dragover`/`drop` are cancelled on the host AND on `window`, so the browser
 *   doesn't navigate away to open the dropped file when it misses the target.
 * - Non-file drags (e.g. dragging a link or text) are left alone.
 *
 * Usage:
 *   <app-file-drop-zone
 *     [accept]="'image/*'"
 *     [multiple]="true"
 *     (
 * )="onFiles($event)">
 *   </app-file-drop-zone>
 */
@Component({
  selector: 'app-file-drop-zone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-drop-zone.component.html',
  styleUrl: './file-drop-zone.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileDropZoneComponent implements OnDestroy {
  /** Forwarded to the underlying <input type="file" accept="..."> */
  @Input() accept = '';
  /** Allow selecting/dropping more than one file */
  @Input() multiple = true;
  /** Only accept files whose MIME type starts with this prefix, e.g. 'image/'. Empty = accept all. */
  @Input() acceptPrefix = '';
  /** Show inline previews for accepted files (images only) */
  @Input() showPreview = true;
  /** Placeholder text shown in the drop zone when it's empty */
  @Input() label = 'Drop images here, or click to upload.';
  /** Text shown on the small "add tile" once at least one preview is present */
  @Input() addMoreLabel = 'Add more';

  /** Emits the accepted files whenever a new drop or selection happens */
  @Output() filesSelected = new EventEmitter<File[]>();
  /** Emits whenever a dragged file is rejected because it didn't match acceptPrefix */
  @Output() filesRejected = new EventEmitter<File[]>();

  readonly isDragOver = signal(false);
  readonly previews = signal<PreviewFile[]>([]);

  constructor(private readonly host: ElementRef<HTMLElement>) {}
  selectedFiles = signal<File[] | null>(null);

  // ---- Drop zone (host element) listeners -------------------------------

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent): void {
    const fileItems = this.getFileItems(event);
    if (fileItems.length === 0) {
      return;
    }
    event.preventDefault();

    const allAccepted = fileItems.every((item) => this.isAcceptedType(item.type));
    event.dataTransfer!.dropEffect = allAccepted ? 'copy' : 'none';
    this.isDragOver.set(allAccepted);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent): void {
    // Ignore bubbling from child elements; only clear when leaving the host itself.
    const related = event.relatedTarget as Node | null;
    if (!related || !this.host.nativeElement.contains(related)) {
      this.isDragOver.set(false);
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent): void {
    const fileItems = this.getFileItems(event);
    if (fileItems.length === 0) {
      return;
    }
    event.preventDefault();
    this.isDragOver.set(false);

    const files = fileItems
      .map((item) => item.getAsFile())
      .filter((file): file is File => file !== null);

    this.handleFiles(files);
  }

  // ---- Window-level listeners: stop the browser opening/downloading -----
  // the file when a drag misses the drop zone (or lands elsewhere on the page).

  @HostListener('window:dragover', ['$event'])
  onWindowDragOver(event: DragEvent): void {
    const fileItems = this.getFileItems(event);
    if (fileItems.length === 0) {
      return;
    }
    event.preventDefault();
    if (!this.host.nativeElement.contains(event.target as Node)) {
      event.dataTransfer!.dropEffect = 'none';
    }
  }

  @HostListener('window:drop', ['$event'])
  onWindowDrop(event: DragEvent): void {
    const fileItems = this.getFileItems(event);
    if (fileItems.length > 0) {
      event.preventDefault();
    }
  }

  // ---- <input type="file"> change (click-to-browse path) ----------------

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files ? Array.from(input.files) : [];
    this.handleFiles(files);
    // Reset so selecting the same file again still fires a change event.
    input.value = '';
  }

  // ---- Shared handling ----------------------------------------------------

  private handleFiles(files: File[]): void {
    const accepted: File[] = [];
    const rejected: File[] = [];

    for (const file of files) {
      (this.isAcceptedType(file.type) ? accepted : rejected).push(file);
    }

    if (rejected.length > 0) {
      this.filesRejected.emit(rejected);
    }

    if (accepted.length === 0) {
      return;
    }

    if (this.showPreview) {
      const newPreviews: PreviewFile[] = accepted.map((file) => ({
        file,
        url: file.type.startsWith('image/') ? URL.createObjectURL(file) : null,
      }));
      this.previews.update((current) => [...current, ...newPreviews]);
    }

    this.filesSelected.emit(this.previews().map((image) => image.file));
  }

  private isAcceptedType(mimeType: string): boolean {
    return !this.acceptPrefix || mimeType.startsWith(this.acceptPrefix);
  }

  private getFileItems(event: DragEvent): DataTransferItem[] {
    const items = event.dataTransfer?.items;
    if (!items) {
      return [];
    }
    return Array.from(items).filter((item) => item.kind === 'file');
  }

  /**
   * Handles clicks on a tile's remove (×) button. Because the button lives
   * inside the <label> that wraps the file input, a plain click would bubble
   * up and open the OS file picker — so we stop that before removing.
   */
  onRemoveClick(event: MouseEvent, index: number): void {
    event.preventDefault();
    event.stopPropagation();

    this.removePreview(index);
  }

  /** Revoke a single preview's object URL and remove it from the list. */
  removePreview(index: number): void {
    this.previews.update((current) => {
      const target = current[index];
      if (target?.url) {
        URL.revokeObjectURL(target.url);
      }

      return current.filter((_, i) => i !== index);
    });
    this.filesSelected.emit(this.previews().map((image) => image.file));
  }

  /** Clear all previews and release their object URLs. */
  clear(): void {
    this.previews().forEach((p) => {
      if (p.url) {
        URL.revokeObjectURL(p.url);
      }
    });
    this.previews.set([]);
    this.filesSelected.emit(this.previews().map((image) => image.file));
  }

  ngOnDestroy(): void {
    // Avoid leaking object URLs if the component is destroyed with previews still held.
    this.previews().forEach((p) => {
      if (p.url) {
        URL.revokeObjectURL(p.url);
      }
    });
  }
}
