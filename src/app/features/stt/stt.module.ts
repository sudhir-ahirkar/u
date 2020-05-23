import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { MaterialModule } from 'src/app/framework/material/material.module';
import { SttRoutingModule } from './stt-routing.module';
import { SttComponent } from './stt.component';

@NgModule({
  declarations: [SttComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SttRoutingModule
  ],
  providers: []
})
export class SttModule { }
