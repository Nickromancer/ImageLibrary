import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { forkJoin, map } from 'rxjs';
import { ImageService } from '../services/image.service';
import { Image } from '../models/image.model';

interface DisplayImage extends Image {
  imageUrl: string;
  height: number;
}

@Component({
  selector: 'app-image-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-list.component.html',
})
export class ImageListComponent implements OnInit, OnDestroy {
  images = signal<DisplayImage[]>([]);
  loading = signal(true);
  error: string | null = null;

  constructor(public imageService: ImageService) {}

  ngOnInit(): void {
    this.imageService.getAll().subscribe({
      next: (data) => {
        if (data.length === 0) {
          this.loading.set(false);
          return;
        }

        const withUrls$ = data.map((image) =>
          this.imageService.getImageUrl(image.id).pipe(
            map((imageUrl) => ({
              ...image,
              imageUrl,
              height: Math.floor(Math.random() * (400 - 150 + 1)) + 150,
            })),
          ),
        );

        forkJoin(withUrls$).subscribe({
          next: (imagesWithUrls) => {
            this.images.set(imagesWithUrls);
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

  ngOnDestroy(): void {
    this.images().forEach((image) => URL.revokeObjectURL(image.imageUrl));
  }
}
