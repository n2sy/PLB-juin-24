import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
})
export class ListeComponent {
  @Input() allCands: Candidat[] = [];
  @Output() listeEvent = new EventEmitter<Candidat>();

  sendCandToCv(cand) {
    this.listeEvent.emit(cand);
  }
}
