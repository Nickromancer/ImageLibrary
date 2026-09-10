import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  email = '';
  password = '';
  error: string | null = null;
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onSubmit(): void {
    this.loading = true;
    this.error = null;

    this.authService.register(this.email, this.password).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/login']); // send them to log in after registering
      },
      error: (err) => {
        this.loading = false;
        this.error = 'Registration failed.';
        console.error(err);
      },
    });
  }
}
