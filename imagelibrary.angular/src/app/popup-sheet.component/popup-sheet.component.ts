import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
import { required } from '@angular/forms/signals';

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
  tags: string[] = [];

  onSubmit(): void {
    console.log(
      'onSubmit fired, images:',
      this.images,
      'form:',
      this.imageForm.value,
      'tags: ',
      this.tags,
    );

    if (this.newTags.length > 0) {
      this.newTags.forEach((tag) => {
        this.tagService.upload(tag).subscribe({
          next: (res) => console.log('Tag uploaded', res),
          error: (err) => console.error('Tag upload failed', err),
        });
      });
    }

    if (this.images.length > 1) {
      this.images.forEach((image) => {
        this.imageService.upload(image, image.name, '_', image.type, []).subscribe({
          next: (res) => console.log('Uploaded', res),
          error: (err) => console.error('Upload failed', err),
        });
      });
    } else if (this.images.length == 1) {
      this.imageService
        .upload(
          this.images[0],
          this.imageForm.value.name!,
          this.imageForm.value.description!,
          this.images[0].type,
          this.tags,
        )
        .subscribe({
          next: (res) => console.log('Uploaded', res),
          error: (err) => console.error('Upload failed', err),
        });
    }
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
