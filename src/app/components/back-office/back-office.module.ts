import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './back-office.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ClockComponent } from './shared/clock/clock.component';
import { HomeComponent } from './shared/home/home.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    BackOfficeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ClockComponent,
    HomeComponent

  ],
    imports: [
        CommonModule,
        BackOfficeRoutingModule,
        NgApexchartsModule,

    ]
})
export class BackOfficeModule { }
