import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  idValue;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['id']);
    // this.idValue = this.activatedRoute.snapshot.paramMap.get('id');

    //2eme methode
    // this.activatedRoute.paramMap.subscribe({
    //   next: (p: ParamMap) => {
    //     this.idValue = p.get('id');
    //   },
    // });
    this.activatedRoute.params.subscribe({
      next: (p: ParamMap) => {
        this.idValue = p['id'];
      },
    });
  }
}
