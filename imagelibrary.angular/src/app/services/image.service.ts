// src/app/services/image.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/image.model';

@Injectable({ providedIn: 'root' })
export class ImageService {
  private baseUrl = '/api/image';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Image[]> {
    return this.http.get<Image[]>(this.baseUrl);
  }

  upload(file: File, name: string, description: string): Observable<Image> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('description', description);

    return this.http.post<Image>(this.baseUrl, formData);
  }
}
