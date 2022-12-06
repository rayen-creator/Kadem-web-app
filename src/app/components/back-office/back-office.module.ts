import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './back-office.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BackOfficeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent

  ],
    imports: [
        CommonModule,
        BackOfficeRoutingModule
    ]
})
export class BackOfficeModule { }
