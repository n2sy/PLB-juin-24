import { Component, EventEmitter, Output } from '@angular/core';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../service/gestion-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
  //providers: [GestionCandidatsService],
})
export class ListeComponent {
  allCands: Candidat[] = [];
  @Output() listeEvent = new EventEmitter<Candidat>();

  constructor(private candSer: GestionCandidatsService) {}

  ngOnInit() {
    this.allCands = this.candSer.getAllCandidates();
  }

  sendCandToCv(cand) {
    this.listeEvent.emit(cand);
  }

  showCandidates() {
    console.log(this.candSer.getAllCandidates());
  }
}
