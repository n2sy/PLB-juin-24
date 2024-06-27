import { Component, inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  langageParDefaut = 'javascript';
  monCommentaire = 'Rien à signaler...';
  showRegister = false;
  showError = false;

  authSer = inject(AuthService);
  router = inject(Router);
  loginHandler(f) {
    this.authSer.seConnecter(f.value).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('access_token', response['token']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        this.showError = true;
        f.reset();
        console.log(err);
      },
    });
  }

  toggleShowRegister() {
    this.showRegister = !this.showRegister;
  }

  registerHandler(f) {
    this.authSer.inscription(f.value).subscribe({
      next: (response) => {
        alert(response['message']);
        f.reset();
        this.toggleShowRegister();
      },
      error: (err) => {
        this.showError = true;
        f.reset();
        console.log(err);
      },
    });
  }
}
