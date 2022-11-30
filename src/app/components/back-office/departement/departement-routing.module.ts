import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementAddComponent } from './departement-add/departement-add.component';
import { ParentListComponent } from './parent-list/parent-list.component';

const routes: Routes = [
  { path: 'update/:id', component: DepartementAddComponent },
  { path: 'addDepartement', component: DepartementAddComponent },
  { path:'listDepartement',component:ParentListComponent},
  // {path :'',component:DepartementComponent,children:[
   

  // ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementRoutingModule { }
