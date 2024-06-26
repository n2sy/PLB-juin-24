import { Component, inject } from '@angular/core';
import { GestionRecruesService } from '../service/gestion-recrues.service';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-recrues',
  templateUrl: './recrues.component.html',
  styleUrl: './recrues.component.css',
})
export class RecruesComponent {
  tab: Candidat[] = [];
  recSer = inject(GestionRecruesService);

  ngOnInit() {
    this.tab = this.recSer.getAllRecrues();
  }
}
