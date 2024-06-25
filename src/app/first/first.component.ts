import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
})
export class FirstComponent {
  prenom: string = 'Bruno';
  age: number = 40;
  myColor: string = 'pink';
  hd = false;

  clickHandler() {
    alert("J'ai été cliqué");
  }

  mouseenter() {
    console.log('Bouton survolé');
  }
}
