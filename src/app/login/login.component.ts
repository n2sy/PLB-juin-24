import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  langageParDefaut = 'javascript';
  monCommentaire = 'Rien à signaler...';
  submitHandler(f) {
    console.log(f.value);
  }
}
