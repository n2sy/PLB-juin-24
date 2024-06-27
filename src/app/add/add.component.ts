import { Component, inject } from '@angular/core';
import { GestionCandidatsService } from '../service/gestion-candidats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  candSer = inject(GestionCandidatsService);
  router = inject(Router);

  addNewCandidate(fValue, e) {
    console.log(fValue, e.target[4].files[0]);
    let formdata = new FormData();
    formdata.append('avatar', e.target[4].files[0]);
    this.candSer.uploadAvatar(formdata).subscribe({
      next: (response) => {
        console.log(response);
        fValue.avatar = response['fileName'];
        this.candSer.addCandidateAPI(fValue).subscribe({
          next: (response) => {
            alert(response['message']);
            this.router.navigateByUrl('/cv');
          },
          error: (err) => {
            console.log('Probleme avec POST');
          },
        });
      },
      error: (err) => {
        console.log('Probleme avec upload avatar');
      },
    });
  }
}
