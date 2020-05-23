import { Injectable, Input, NgZone } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, finalize } from 'rxjs/operators';
import { BaseUrl } from 'src/app/framework/constants/url-constants';

const authHeaderString = 'X-Authorization';
const contentTypeHeaderString = 'application/json';

const signInHttpHeaders = new HttpHeaders({
    'Content-Type': contentTypeHeaderString,
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': authHeaderString,
    'Access-Control-Expose-Headers': authHeaderString,
    'responseType': contentTypeHeaderString,
});

const exposeXAuthHeader = new HttpHeaders({
    'Access-Control-Expose-Headers': authHeaderString,
});


@Injectable()
export class SessionsService {
    constructor(
        private readonly http: HttpClient,
        private readonly router: Router,
        private readonly zone: NgZone,
    ) { }

    signin(data: any): any {
        const body = JSON.stringify(data);
        return this.http.post<any>(BaseUrl.AUTHENTICATE + '/login', body, { headers: signInHttpHeaders, observe: 'response' })
            .pipe(
                tap(resp => {
                    this.resolveSessionParams(resp);
                }));
    }

    signout() {
        // return this.http.get(BaseUrl.AUTHENTICATE + '/logout')
        // .pipe(finalize(() => this.onSignoutTap()));

       return this.onSignoutTap();
    }

    onSignoutTap() {
        localStorage.clear();
        this.zone.run(() => this.router.navigate(['/sessions/signin']));
    }

    resolveSessionParams(resp) {
        const xAuthToken = resp.headers.get(authHeaderString).split(' ');
        const token = xAuthToken[1];
        localStorage.setItem('token', token);
        if (resp.body.heartbeat) {
            localStorage.setItem('session', btoa(JSON.stringify(resp.body)));
        }
    }

}
