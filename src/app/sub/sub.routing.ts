import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';

let routes: Routes = [
  {
    path: '',
    component: IntroComponent,
    children: [
      {
        path: 'details',
        component: HomeAccountComponent,
      },
    ],
  },
];

export const SUB_ROUTING = RouterModule.forChild(routes);
