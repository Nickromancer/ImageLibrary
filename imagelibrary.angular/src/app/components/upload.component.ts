import { Component } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-upload',
  standalone: true,
  templateUrl: 'upload.component.html',
})
export class UploadComponent {
  name = '';
  description = '';
  selectedFile: File | null = null;

  constructor(private imageService: ImageService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files?.[0] ?? null;
  }

  onSubmit(): void {
    if (!this.selectedFile) return;

    this.imageService.upload(this.selectedFile, this.name, this.description).subscribe({
      next: (result) => console.log('Uploaded:', result),
      error: (err) => console.error('Upload failed:', err),
    });
  }
}
