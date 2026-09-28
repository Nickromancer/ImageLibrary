import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatFormField, MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FileDropZoneComponent } from '../components/file-drop-zone.component';
import { ChipsAutocomplete } from '../tag-chip-grid-component/tag-chip-grid-component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ChecklistComponent } from '../checklist-component/checklist-component';
import { FormsModule } from '@angular/forms';
import { ImageService } from '../services/image.service';
import { TagService } from '../services/tag.service';
import { MatAnchor } from '@angular/material/button';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-popup',
  templateUrl: 'popup-sheet.component.html',
  imports: [
    MatListModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ChipsAutocomplete,
    FileDropZoneComponent,
    ChecklistComponent,
    FormsModule,
    MatAnchor,
  ],
})
export class PopupSheetComponent {
  constructor(
    private imageService: ImageService,
    private tagService: TagService,
    private document: Document,
  ) {}
  private _bottomSheetRef = inject<MatBottomSheetRef<PopupSheetComponent>>(MatBottomSheetRef);
  images: File[] = [];
  newTags: string[] = [];
  tags: string[] = [];

  onSubmit(): void {
    if (this.images.length === 0) return;

    const single: boolean = this.images.length === 1;
    const allTags: string[] = [...new Set([...this.tags, ...this.newTags])];

    const uploads = this.images.map((file) =>
      this.imageService.upload(
        file,
        single ? this.imageForm.value.name! : file.name,
        single ? this.imageForm.value.description! : '_',
        file.type,
        allTags,
      ),
    );

    forkJoin(uploads).subscribe({
      next: (uploaded) => this._bottomSheetRef.dismiss(uploaded),
      error: (err) => console.error('Upload failed', err),
    });
  }

  OnNewTagAdded(tags: string[]): void {
    this.newTags = tags;
  }

  OnTagAdded(tags: string[]): void {
    this.tags = tags;
  }
  imageForm = new FormGroup({
    name: new FormControl({ value: '', disabled: false }, Validators.required),
    description: new FormControl({ value: '', disabled: false }, Validators.required),
  });

  onFilesSelected(files: File[]): void {
    // e.g. upload to your backend
    console.log(files);
    this.images = files;
    console.log('Accepted files:', files);
    if (this.images.length <= 1) {
      this.imageForm.get('name')?.enable();
      this.imageForm.get('name')?.addValidators(Validators.required);
      this.imageForm.get('description')?.enable();
      this.imageForm.get('description')?.addValidators(Validators.required);
    } else {
      this.imageForm.get('name')?.disable();
      this.imageForm.get('name')?.setValidators(null);
      this.imageForm.get('description')?.disable();
      this.imageForm.get('description')?.setValidators(null);
    }
  }

  onFilesRejected(files: File[]): void {
    console.warn('Rejected (not an image):', files);
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
