import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConventionsRoutingModule } from './conventions-routing.module';
import { ConventionsComponent } from './conventions.component';
import { FormconventionsComponent } from './formconventions/formconventions.component';
import { ListconventionsComponent } from './listconventions/listconventions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AffectconventionsComponent } from './affectconventions/affectconventions.component';


@NgModule({
  declarations: [
    ConventionsComponent,
    FormconventionsComponent,
    ListconventionsComponent,
    AffectconventionsComponent
  ],
  imports: [
    CommonModule,
    ConventionsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class ConventionsModule { }
