import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesorRoutingModule } from './profesor-routing.module';
import { ProfesorComponent } from './profesor.component';
import {ListProfesorComponent} from "./list-profesor/list-profesor.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormProfesorComponent } from './form-profesor/form-profesor.component';


@NgModule({
  declarations: [
    ProfesorComponent,
    ListProfesorComponent,
    FormProfesorComponent
  ],
  imports: [
    CommonModule,
    ProfesorRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProfesorModule { }
