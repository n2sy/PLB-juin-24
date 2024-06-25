import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  tabCandidats: Candidat[] = [
    new Candidat('bart', 'simpson', 23, 'ingénieur', 'bart.jpeg'),
    new Candidat('homer', 'simpson', 51, 'directeur', 'homer.png'),
    new Candidat('lisa', 'simpson', 28, 'designer', 'lisa.png'),
  ];
  selectedCandidat: Candidat;

  recupererCandidatClicke(cand) {
    this.selectedCandidat = cand;
  }
}
