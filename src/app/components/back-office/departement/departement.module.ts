import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementRoutingModule } from './departement-routing.module';
import { DepartementComponent } from './departement.component';
import { DepartementListComponent } from './departement-list/departement-list.component';
import { DepartementAddComponent } from './departement-add/departement-add.component';
import { FormsModule } from '@angular/forms';
import { ParentListComponent } from './parent-list/parent-list.component';



@NgModule({
  declarations: [
    DepartementComponent,
    DepartementListComponent,
    DepartementAddComponent,
    ParentListComponent,
  ],
  imports: [
    CommonModule,
    DepartementRoutingModule,
    FormsModule,
 
  ]
})
export class DepartementModule { }
