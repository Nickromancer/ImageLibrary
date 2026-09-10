// src/app/models/image.model.ts
export interface Image {
  id: string;
  name: string;
  imageData: string | number[];
  description: string;
  contentType: string;
}
