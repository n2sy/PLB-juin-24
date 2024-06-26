import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {
  id = 5;
  prenom = 'nidhal';

  constructor(private router: Router) {}

  allerAServers() {
    this.router.navigateByUrl('servers');
  }

  allerACV() {
    this.router.navigate(['cv']);
  }
}
