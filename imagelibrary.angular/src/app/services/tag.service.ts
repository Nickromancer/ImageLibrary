// src/app/services/image.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Tag } from '../models/tag.model';

@Injectable({ providedIn: 'root' })
export class TagService {
  getAllTagsFromImage(imageId: string): Observable<string[]> {
    return this.http
      .get<Tag[]>(`${this.baseUrl}/${imageId}/image`)
      .pipe(map((tags) => tags.map((t) => t.name)));
  }
  private baseUrl = '/api/tag';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.baseUrl);
  }

  upload(name: string): Observable<Tag> {
    const formData = new FormData();
    formData.append('name', name);

    return this.http.post<Tag>(this.baseUrl, formData);
  }
}
