import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SessionsService } from './features/sessions/sessions.service';
import { HomeComponent } from './home/home.component';
import { HttpRequestInterceptorModule } from './framework/service/http-interceptor.service';
import { AuthenticationGuard } from './framework/guards/authentication.guard';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { OverlayContainer } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpRequestInterceptorModule,
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [SessionsService , AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('seq-theme');
  }
}
