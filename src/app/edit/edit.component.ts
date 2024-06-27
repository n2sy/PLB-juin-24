import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionCandidatsService } from '../service/gestion-candidats.service';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  candidateToUpdate: Candidat;
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  candSer = inject(GestionCandidatsService);

  ngOnInit() {
    this.candSer
      .getCandidateByIdAPI(this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe({
        next: (response: Candidat) => {
          this.candidateToUpdate = response;
        },
        error: (err) => {
          console.log(err);
          this.router.navigateByUrl('/not-found');
        },
      });
  }

  editerCandidat() {
    this.candSer.updateCandidateAPI(this.candidateToUpdate).subscribe({
      next: (response) => {
        alert(response['message']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log('Probleme avec PUT');
      },
    });
  }
}
