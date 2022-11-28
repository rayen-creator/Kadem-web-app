import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementAddComponent } from './departement-add/departement-add.component';
import { DepartementListComponent } from './departement-list/departement-list.component';
import { DepartementComponent } from './departement.component';

const routes: Routes = [
  {path :'',component:DepartementComponent,children:[
    { path: 'listDepartement', component: DepartementListComponent },
    { path: 'addDepartement', component: DepartementAddComponent },
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementRoutingModule { }
