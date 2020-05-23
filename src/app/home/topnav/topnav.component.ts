import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
// import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SessionsService } from 'src/app/features/sessions/sessions.service';
import { BaseUrl } from 'src/app/framework/constants/url-constants';

@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

    username: string;

    constructor(
    public router: Router,
    private readonly sessionService: SessionsService,
    ) { }

    ngOnInit() {

        // this.username = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).userName;
    }

    changePassword() {
        this.router.navigate([`/user-settings/change-password`]);
    }

    onLoggedOut() {
        this.sessionService.signout().subscribe();
    }

}
