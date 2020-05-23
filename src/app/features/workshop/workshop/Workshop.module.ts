import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { WorkshopComponent } from './workshop.component';
import { MaterialModule } from 'src/app/framework/material/material.module';
import { WorkshopRoutingModule } from './workshop-routing.module';

@NgModule({
  declarations: [WorkshopComponent],
  imports: [
    CommonModule,
    MaterialModule,
    WorkshopRoutingModule
  ],
  providers: []
})
export class workshopModule { }
