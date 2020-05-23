import { Injectable, NgModule } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class HttpRequestInterceptor implements HttpInterceptor {
    constructor(
        public router: Router,
        ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    request = request.clone({
        headers: request.headers.set('X-Authorization', 'Bearer ' + token)
        .set('Content-Type', 'application/json')
        });
        return next.handle(request).pipe(
            tap(
                (response: HttpEvent<any>) => {
                    console.log(response);
                },
                (err: any) => {
                    
                }
            )
        );
    }
}

@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpRequestInterceptor,
            multi: true
        }
    ]
})
export class HttpRequestInterceptorModule { }