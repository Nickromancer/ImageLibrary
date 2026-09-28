import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { catchError, forkJoin, map, of } from 'rxjs';
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

  /** Called by the parent after an upload; fetches only the new thumbnails. */
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
}
