// src/app/services/image.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Image } from '../models/image.model';

@Injectable({ providedIn: 'root' })
export class ImageService {
  private baseUrl = '/api/image';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Image[]> {
    return this.http.get<Image[]>(this.baseUrl);
  }

  getImageUrl(id: string): Observable<string> {
    return this.http
      .get(`${this.baseUrl}/${id}/content`, { responseType: 'blob' })
      .pipe(map((blob) => URL.createObjectURL(blob)));
  }

  upload(
    file: File,
    name: string,
    description: string,
    contentType: string,
    tags: string[],
  ): Observable<Image> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('contentType', contentType);
    tags.forEach((tag) => formData.append('tags', tag));

    return this.http.post<Image>(this.baseUrl, formData);
  }
}
