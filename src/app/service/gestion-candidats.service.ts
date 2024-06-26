import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';
import { GestionRecruesService } from './gestion-recrues.service';

@Injectable()
export class GestionCandidatsService {
  private candidates: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 23, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 51, 'directeur', 'homer.png'),
    new Candidat(3, 'lisa', 'simpson', 28, 'designer', 'lisa.png'),
  ];

  getAllCandidates() {
    return this.candidates;
  }
  constructor(private recrueService: GestionRecruesService) {}

  addCandidate() {
    this.candidates.push(
      new Candidat(12, 'NEW', 'CANDIDATE', 28, 'designer', 'lisa.png')
    );
  }

  showHello() {
    console.log('Je suis le service');
    this.recrueService.sayHi();
  }
}
