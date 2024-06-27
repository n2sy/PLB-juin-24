import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CvComponent } from './cv/cv.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { InfosComponent } from './infos/infos.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

const myRoutes: Routes = [
  //Version 2
  // { path: '', component: AccueilComponent },
  // {
  //   path: 'cv',
  //   component: CvComponent,
  //   children: [
  //     //  { path: '', component: CvComponent },
  //     { path: 'add', component: AddComponent },
  //     {
  //       path: ':id',
  //       children: [
  //         { path: '', component: InfosComponent },
  //         { path: 'edit', component: EditComponent },
  //       ],
  //     },
  //   ],
  // },
  // { path: 'servers', component: ManageServersComponent },
  // { path: 'accounts', component: HomeAccountComponent },
  // { path: 'not-found', component: NotFoundComponent },
  // { path: '**', redirectTo: 'not-found' },

  //Version 1
  { path: '', component: AccueilComponent },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddComponent },
      {
        path: ':id',
        children: [
          { path: '', component: InfosComponent },
          { path: 'edit', component: EditComponent },
        ],
      },
    ],
  },
  { path: 'servers', component: ManageServersComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'accounts',
    loadChildren: () => import('./sub/sub.module').then((c) => c.SubModule),
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },

  //Version 0
  // { path: '', component: AccueilComponent },
  // { path: 'cv', component: CvComponent },
  // { path: 'cv/add', component: AddComponent },
  // { path: 'cv/:id', component: InfosComponent },
  // { path: 'cv/:id/edit', component: EditComponent },
  // { path: 'servers', component: ManageServersComponent },
  // { path: 'accounts', component: HomeAccountComponent },
  // { path: 'not-found', component: NotFoundComponent },
  // { path: '**', redirectTo: 'not-found' },
];

export const PLB_ROUTING = RouterModule.forRoot(myRoutes);
