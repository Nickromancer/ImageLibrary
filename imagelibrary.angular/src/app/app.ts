import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { ImageService } from './services/image.service';
import { Image } from './models/image.model';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  [x: string]: any;
  protected readonly title = signal('imagelibrary.angular');
}
