import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnsavedChangesGuard } from 'src/app/core/helpers/unsaved-changes.guard';
import { DepartementAddComponent } from './departement-add/departement-add.component';
import { ParentListComponent } from './parent-list/parent-list.component';

const routes: Routes = [
  { path: 'update/:id', component: DepartementAddComponent },
  { path: 'addDepartement', component: DepartementAddComponent ,canDeactivate : [UnsavedChangesGuard]},
  { path:'listDepartement',component:ParentListComponent},
  // {path :'',component:DepartementComponent,children:[
   

  // ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementRoutingModule { }
