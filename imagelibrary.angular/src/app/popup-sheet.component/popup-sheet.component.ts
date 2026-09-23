import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { map, Observable, startWith } from 'rxjs';
import { MatDivider, MatListModule } from '@angular/material/list';
import { MatFormField, MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { FileDropZoneComponent } from '../components/file-drop-zone.component';
import { ChipsAutocomplete } from '../tag-chip-grid-component/tag-chip-grid-component';
import { Tag } from '../models/tag.model';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ChecklistComponent } from '../checklist-component/checklist-component';
import { FormsModule } from '@angular/forms';
import { ImageService } from '../services/image.service';
import { TagService } from '../services/tag.service';
import { Image } from '../models/image.model';
import { MatAnchor } from '@angular/material/button';

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
  ) {}
  private _bottomSheetRef = inject<MatBottomSheetRef<PopupSheetComponent>>(MatBottomSheetRef);
  images: File[] = [];
  newTags: string[] = [];

  onSubmit(): void {
    console.log('onSubmit fired, images:', this.images, 'form:', this.imageForm.value);

    if (this.images.length > 1) {
      this.images.forEach((image) => {
        this.imageService.upload(image, image.name, '', image.type).subscribe({
          next: (res) => console.log('Uploaded', res),
          error: (err) => console.error('Upload failed', err),
        });
      });

      this.newTags.forEach((tag) => {
        this.tagService.upload(tag).subscribe({
          next: (res) => console.log('Tag uploaded', res),
          error: (err) => console.error('Tag upload failed', err),
        });
      });
    } else if (this.images.length == 1) {
      this.imageService
        .upload(
          this.images[0],
          this.imageForm.value.name!,
          this.imageForm.value.description!,
          this.images[0].type,
        )
        .subscribe({
          next: (res) => console.log('Uploaded', res),
          error: (err) => console.error('Upload failed', err),
        });
    }
  }

  OnTagAdded(tags: string[]): void {
    this.newTags = tags;
  }
  imageForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  onFilesSelected(files: File[]): void {
    // e.g. upload to your backend
    this.images = files;
    console.log('Accepted files:', files);
  }

  onFilesRejected(files: File[]): void {
    console.warn('Rejected (not an image):', files);
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
