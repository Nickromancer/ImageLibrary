import { Component } from '@angular/core';
import { ImageListComponent } from '../components/image-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [ImageListComponent, MatIconModule, MatButtonModule],
  selector: 'app-gallery-component',
  templateUrl: './gallery-component.html',
})
export class GalleryComponent {}
