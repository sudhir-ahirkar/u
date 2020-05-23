import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SessionsComponent } from './sessions.component';
import { MaterialModule } from 'src/app/framework/material/material.module';
import { SessionsRoutes } from './sessions.routing';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { SigninComponent } from './signin/signin.component';
import { SessionsService } from './sessions.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    NgHttpLoaderModule.forRoot(),
    RouterModule.forChild(SessionsRoutes)
  ],
  declarations: [SessionsComponent, SigninComponent],
  providers: [SessionsService]
})
export class SessionsModule { }
