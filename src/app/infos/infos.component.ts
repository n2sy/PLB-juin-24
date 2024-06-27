import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GestionCandidatsService } from '../service/gestion-candidats.service';
import { Candidat } from '../models/candidat';
import { AuthService } from '../service/auth.service';

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
    private candSer: GestionCandidatsService,
    public authSer: AuthService
  ) {}

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['id']);
    // this.idValue = this.activatedRoute.snapshot.paramMap.get('id');

    //2eme methode
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.candSer.getCandidateByIdAPI(p.get('id')).subscribe({
          next: (response: Candidat) => {
            this.candidat = response;
          },
          error: (err) => {
            console.log(err);
            this.router.navigateByUrl('/not-found');
          },
        });

        // setTimeout(() => {
        //   this.candidat = this.candSer.getCandidateById(p.get('id'));
        // }, 3000);
      },
    });
  }

  deleteCandidate() {
    if (confirm('Etes vous sur de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidateAPI(this.candidat._id).subscribe({
        next: (response) => {
          alert(response['message']);
          this.router.navigateByUrl('/cv');
        },
        error: (err) => {
          console.log('Probleme avec DELETE');
        },
      });
    }
  }
}
