import { Component, inject, forwardRef } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatDivider, MatListModule } from '@angular/material/list';
import { ImageListComponent } from '../components/image-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule, MatFormField, MatLabel, MatInput } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';
import { from, map, Observable, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChipsAutocompleteExample } from '../tag-chip-grid-component/tag-chip-grid-component';
import { FileDropZoneComponent } from '../components/file-drop-zone.component';

@Component({
  imports: [
    ImageListComponent,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatBottomSheetModule,
    MatDividerModule,
    MatFormField,
    MatFormFieldModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  selector: 'app-gallery-component',
  templateUrl: './gallery-component.html',
})
export class GalleryComponent {
  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}

@Component({
  selector: 'app-popup',
  templateUrl: 'popup.html',
  imports: [
    MatListModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ChipsAutocompleteExample,
    FileDropZoneComponent,
  ],
})
export class BottomSheetOverviewExampleSheet {
  myControl = new FormControl('');
  private _bottomSheetRef =
    inject<MatBottomSheetRef<BottomSheetOverviewExampleSheet>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || '')),
    );
  }

  onFilesSelected(files: File[]): void {
    // e.g. upload to your backend
    console.log('Accepted files:', files);
  }

  onFilesRejected(files: File[]): void {
    console.warn('Rejected (not an image):', files);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) => option.toLowerCase().includes(filterValue));
  }
}
