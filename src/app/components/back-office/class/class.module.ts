import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { ClassComponent } from './class.component';
import { ListClassComponent } from './list-class/list-class.component';
import { FormClassComponent } from './form-class/form-class.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ClassComponent,
    ListClassComponent,
    FormClassComponent
  ],
    imports: [
        CommonModule,
        ClassRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class ClassModule { }
