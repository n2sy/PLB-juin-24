import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../service/gestion-candidats.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() oneCandidat: Candidat;
  @Output() itemEvent = new EventEmitter<Candidat>();

  sendCandToListe() {
    this.itemEvent.emit(this.oneCandidat);
  }
}
