import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GestionCandidatsService } from '../service/gestion-candidats.service';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  idValue;
  candidat: Candidat;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private candSer: GestionCandidatsService
  ) {}

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['id']);
    // this.idValue = this.activatedRoute.snapshot.paramMap.get('id');

    //2eme methode
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.candidat = this.candSer.getCandidateById(p.get('id'));
        if (!this.candidat) this.router.navigateByUrl('/not-found');

        // setTimeout(() => {
        //   this.candidat = this.candSer.getCandidateById(p.get('id'));
        // }, 3000);
      },
    });
  }
}
