import { Component, inject } from '@angular/core';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../service/gestion-candidats.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
  providers: [],
})
export class CvComponent {
  tabCandidats: Candidat[] = [];
  selectedCandidat: Candidat;

  //constructor(private candService: GestionCandidatsService) {}
  candService = inject(GestionCandidatsService);

  ngOnInit() {
    this.candService.showHello();
    this.tabCandidats = this.candService.getAllCandidates();
  }

  recupererCandidatClicke(cand) {
    this.selectedCandidat = cand;
  }

  showCandidates() {
    console.log(this.candService.getAllCandidates());
  }

  addNewCandidate() {
    // this.candService.addCandidate();
  }
}
