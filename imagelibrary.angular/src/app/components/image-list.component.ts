import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService } from '../services/image.service';
import { Image } from '../models/image.model';

@Component({
  selector: 'app-image-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-list.component.html',
})
export class ImageListComponent implements OnInit {
  images = signal<Array<Image & { imageUrl: string }>>([]);
  loading = signal(true);
  error: string | null = null;

  constructor(public imageService: ImageService) {}

  ngOnInit(): void {
    this.imageService.getAll().subscribe({
      next: (data) => {
        this.images.set(
          data.map((image) => ({
            ...image,
            imageUrl: this.toImageUrl(image.imageData, image.contentType),
          })),
        );
        console.log(this.images);
        this.loading.set(false);
      },
      error: () => {
        this.error = 'Failed to load images.';
        this.loading.set(false);
      },
      complete: () => {},
    });
  }

  toImageUrl(imageData: string | number[] | undefined, contentType: string): string {
    if (!imageData) {
      return '';
    }

    if (typeof imageData === 'string') {
      return imageData.startsWith('data:') ? imageData : `data:${contentType};base64,${imageData}`;
    }

    const bytes = new Uint8Array(imageData);
    let binary = '';

    for (let i = 0; i < bytes.length; i += 0x8000) {
      binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
    }

    return `data:${contentType};base64,${btoa(binary)}`;
  }
}
