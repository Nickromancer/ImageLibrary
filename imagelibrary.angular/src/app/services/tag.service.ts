// src/app/services/image.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../models/tag.model';

@Injectable({ providedIn: 'root' })
export class TagService {
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
