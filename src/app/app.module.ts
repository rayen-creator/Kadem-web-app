import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ResetpwdComponent } from './components/auth/resetpwd/resetpwd.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        AppComponent,
        NotfoundpageComponent,
        LoginComponent,
        SignupComponent,
        ResetpwdComponent,


    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    exports: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
