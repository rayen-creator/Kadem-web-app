import { NgModule , Component} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesorComponent } from './profesor.component';
import {ListProfesorComponent} from "./list-profesor/list-profesor.component";
import {FormProfesorComponent} from "./form-profesor/form-profesor.component";



const routes: Routes = [


      {path: '', component: ProfesorComponent , children :[
          {path: '', component: ListProfesorComponent},
          {path: 'form', component: FormProfesorComponent},
          {path: 'update/:id', component: FormProfesorComponent},

        ]}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }
