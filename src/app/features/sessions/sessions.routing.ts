import { Routes } from '@angular/router';
import { SessionsComponent } from './sessions.component';
import { SigninComponent } from './signin/signin.component';

export const SessionsRoutes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },{
    path: '',
    component: SessionsComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent,
      }]
  }
];
