import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { catchError, forkJoin, map, of } from 'rxjs';
import { ImageService } from '../services/image.service';
import { Image } from '../models/image.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { OverlayModule, ConnectedPosition } from '@angular/cdk/overlay';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PopupSheetComponent } from '../popup-sheet.component/popup-sheet.component';

interface DisplayImage extends Image {
  imageUrl: string;
  height: number;
}

@Component({
  selector: 'app-image-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    OverlayModule,
  ],
  templateUrl: './image-list.component.html',
})
export class ImageListComponent implements OnInit, OnDestroy {
  constructor(public imageService: ImageService) {}
  readonly dialog = inject(MatDialog);

  openDialog(image: DisplayImage): void {
    // the grid only has thumbnails, so fetch the full-size picture
    this.imageService.getImageUrl(image.id).subscribe((fullUrl) => {
      const ref = this.dialog.open(ImageDialog, {
        data: { imageUrl: fullUrl, name: image.name },
        maxWidth: '95vw',
        maxHeight: '95vh',
      });
      ref.afterClosed().subscribe(() => URL.revokeObjectURL(fullUrl));
    });
  }
  DeletePicture(arg0: string, arg1: string) {
    this.imageService.deleteImage(arg0).subscribe({});
    this.images.update((current) => current.filter((image) => image.imageUrl !== arg1));
  }

  DownloadPicture(arg0: string, arg1: string) {
    this.imageService.getImageUrl(arg0).subscribe((imageUrl) => {
      const a = document.createElement('a');
      a.href = imageUrl;
      a.download = arg1;
      a.click();
    });
  }

  openId = signal<string | null>(null);
  positions: ConnectedPosition[] = [
    { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top', offsetY: 8 },
    { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom', offsetY: -8 }, // fallback: open upward
  ];
  OpenPicture(event: PointerEvent) {
    console.log(event);
  }
  images = signal<DisplayImage[]>([]);
  loading = signal(true);
  error: string | null = null;

  ngOnInit(): void {
    this.imageService.getAll().subscribe({
      next: (data) => {
        if (data.length === 0) {
          this.loading.set(false);
          return;
        }

        const withUrls$ = data.map((image) =>
          this.imageService.getThumbnailUrl(image.id).pipe(
            map((imageUrl) => ({ ...image, imageUrl, height: this.randomHeight() })),
            catchError(() => of(null)), // a failed image becomes null instead of killing the batch
          ),
        );

        forkJoin(withUrls$).subscribe({
          next: (results) => {
            this.images.set(results.filter((r): r is DisplayImage => r !== null));
            this.loading.set(false);
          },
          error: () => {
            this.error = 'Failed to load image content.';
            this.loading.set(false);
          },
        });
      },
      error: () => {
        this.error = 'Failed to load images.';
        this.loading.set(false);
      },
    });
  }

  addImages(newImages: Image[]): void {
    newImages.forEach((image) => {
      this.imageService.getThumbnailUrl(image.id).subscribe((imageUrl) => {
        this.images.update((current) => [
          { ...image, imageUrl, height: this.randomHeight() },
          ...current, // newest first
        ]);
      });
    });
  }

  private randomHeight(): number {
    return Math.floor(Math.random() * (400 - 150 + 1)) + 150;
  }

  ngOnDestroy(): void {
    this.images().forEach((image) => URL.revokeObjectURL(image.imageUrl));
  }
  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(imageId: string, imageName: string, imageDescription: string): void {
    const ref = this._bottomSheet.open(PopupSheetComponent);
    ref.instance.SetEdit(imageId, imageName, imageDescription);
  }
}

@Component({
  selector: 'app-image-dialog',
  standalone: true,
  template: `<img [src]="data.imageUrl" [alt]="data.name" (click)="dialogRef.close()" />`,
  styles: [
    `
      img {
        display: block;
        max-width: 95vw;
        max-height: 90vh;
        object-fit: contain;
        cursor: zoom-out;
      }
    `,
  ],
})
export class ImageDialog {
  readonly data = inject<{ imageUrl: string; name: string }>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<ImageDialog>);
}
