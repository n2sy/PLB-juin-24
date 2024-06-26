import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionRecruesService {
  private listeRecrues: Candidat[] = [];

  getAllRecrues() {
    return this.listeRecrues;
  }

  addRecrue(newRecrue) {
    if (this.listeRecrues.indexOf(newRecrue) == -1)
      this.listeRecrues.push(newRecrue);
    else alert('Ce candidat a déjà été recrutée');
  }
  constructor() {}

  sayHi() {
    console.log('Je suis le second service');
  }
}
