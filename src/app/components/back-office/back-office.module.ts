import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './back-office.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    BackOfficeComponent,
    HeaderComponent,
    FooterComponent,
 
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule
  ]
})
export class BackOfficeModule { }
