import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GestionRecruesService {
  constructor() {}

  sayHi() {
    console.log('Je suis le second service');
  }
}
