// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { ImageListComponent } from './components/image-list.component';
import { HomepageComponent } from './homepage/homepageComponent';
import { GalleryComponent } from './gallery/gallery-component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '', component: HomepageComponent },
];
