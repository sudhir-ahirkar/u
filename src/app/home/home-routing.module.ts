import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthenticationGuard } from '../framework/guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'home' },
    children : [
      {
        path: 'worker-information', loadChildren: () => import('../features/workshop/workshop/Workshop.module').then(m => m.workshopModule),
        //canActivate: [AuthenticationGuard],
        data: { title: 'Worker Information', breadcrumb: '', preload: false}
      },
      {
        path: 'stt-information', loadChildren: () => import('../features/stt/Stt.module').then(m => m.SttModule),
        //canActivate: [AuthenticationGuard],
        data: { title: 'Stt Information', breadcrumb: '', preload: false}
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
