import { WorkshopComponent } from './workshop.component';
import { AuthenticationGuard } from 'src/app/framework/guards/authentication.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
      path: '',
      component: WorkshopComponent,
      data: { title: 'Workshop' },
      // canActivate: [AuthenticationGuard],
      
    }
  ];
 
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class WorkshopRoutingModule { }