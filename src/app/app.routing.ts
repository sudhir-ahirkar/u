import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './framework/guards/authentication.guard';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [],
  },
  {
    path: 'sessions', loadChildren: () => import('./features/sessions/sessions.module').then(m => m.SessionsModule),
    canActivate: [],
   
  },
  {
    path: '**',
    redirectTo: 'sessions/404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
