import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementRoutingModule } from './departement-routing.module';
import { DepartementComponent } from './departement.component';
import { DepartementListComponent } from './departement-list/departement-list.component';
import { DepartementAddComponent } from './departement-add/departement-add.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DepartementComponent,
    DepartementListComponent,
    DepartementAddComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DepartementRoutingModule,
    FormsModule
  ]
})
export class DepartementModule { }
