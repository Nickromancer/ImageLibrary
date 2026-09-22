import { Component, inject, forwardRef } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { ImageListComponent } from '../components/image-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule, MatFormField, MatLabel, MatInput } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupSheetComponent } from '../popup-sheet.component/popup-sheet.component';

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
    FormsModule,
    ReactiveFormsModule,
  ],
  selector: 'app-gallery-component',
  templateUrl: './gallery-component.html',
})
export class GalleryComponent {
  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheet.open(PopupSheetComponent);
  }
}
