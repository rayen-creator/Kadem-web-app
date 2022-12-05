import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './class.component';
import {ListClassComponent} from "./list-class/list-class.component";
import {FormClassComponent} from "./form-class/form-class.component";

const routes: Routes = [{ path: '', component: ClassComponent ,children:[

    {path:'',component:ListClassComponent},
    {path:'form',component:FormClassComponent},
    {path: 'update/:id', component: FormClassComponent}

  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoutingModule { }
