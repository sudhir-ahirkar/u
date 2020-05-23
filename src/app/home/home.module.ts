import { SidebarComponent } from './sidebar/sidebar.component';
import { TopnavComponent } from './topnav/topnav.component';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../framework/material/material.module';
import { HttpRequestInterceptorModule } from '../framework/service/http-interceptor.service';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        NgHttpLoaderModule.forRoot(),
        HttpRequestInterceptorModule,
        HomeRoutingModule,
    ],
    declarations: [HomeComponent, TopnavComponent, SidebarComponent],
    providers: [],
})
export class HomeModule {}