import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { SessionsService } from '../sessions.service';
import { IUserMessage } from './signin.interface';
import { MatSnackBar, MatButton } from '@angular/material';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    providers: [SessionsService],
})

export class SigninComponent implements OnInit {

    signinForm: FormGroup;

    @ViewChild(MatButton, { static: false }) submitButton: MatButton;

    constructor(private readonly router: Router,
        private readonly sessionsService: SessionsService,
        private readonly builder: FormBuilder,
    ) { }

    ngOnInit() {
        this.initForm();
    }

    signin() {

        // this.signinForm.controls['password'].setValue(btoa(this.signinForm.controls['password'].value));

        // this.sessionsService.signin(this.signinForm.value)
        //     .subscribe((data: HttpResponse<any>) => {
        //         this.router.navigateByUrl('/');
        //         console.log("Signin")
        //     },
        //         (error: any) => {
        //             console.log("login Error")
        //         }
        //     );

            this.router.navigateByUrl('/');
    }

    initForm() {
        this.signinForm = this.builder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

}

