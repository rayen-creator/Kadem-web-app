import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesorRoutingModule } from './profesor-routing.module';
import { ProfesorComponent } from './profesor.component';
import {ListProfesorComponent} from "./list-profesor/list-profesor.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormProfesorComponent } from './form-profesor/form-profesor.component';
import { ProfesorsComponent } from './profesors/profesors.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    ProfesorComponent,
    ListProfesorComponent,
    FormProfesorComponent,
    ProfesorsComponent
  ],
  imports: [
    CommonModule,
    ProfesorRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule

  ]
})
export class ProfesorModule { }
