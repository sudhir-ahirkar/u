import { AuthenticationGuard } from 'src/app/framework/guards/authentication.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SttComponent } from './stt.component';

const routes: Routes = [
    {
      path: 'stt-information',
      component: SttComponent,
      data: { title: 'Stt' },
      // canActivate: [AuthenticationGuard],
      
    }
  ];
 
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SttRoutingModule { }