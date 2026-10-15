import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { catchError, forkJoin, map, of } from 'rxjs';
import { ImageService } from '../services/image.service';
import { Image } from '../models/image.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { OverlayModule, ConnectedPosition } from '@angular/cdk/overlay';

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
    RouterLink,
    MatIconModule,
    MatMenuModule,
    OverlayModule,
  ],
  templateUrl: './image-list.component.html',
})
export class ImageListComponent implements OnInit, OnDestroy {
  DeletePicture(arg0: string, arg1: string) {
    this.imageService.deleteImage(arg0).subscribe({});
    this.images.update((current) => current.filter((image) => image.imageUrl !== arg1));
  }
  constructor(public imageService: ImageService) {}

  DownloadPicture(arg0: string) {
    this.imageService.getImageUrl(arg0).subscribe((imageUrl) => {
      const a = document.createElement('a');
      a.href = imageUrl;
      a.download = arg0;
      a.click();
    });
  }
  // add OverlayModule to imports
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
