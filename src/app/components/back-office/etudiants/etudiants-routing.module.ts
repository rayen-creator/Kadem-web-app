import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEtudiantComponent } from './detail-etudiant/detail-etudiant.component';
import { EtudiantsComponent } from './etudiants.component';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';

const routes: Routes = [{ path: '', component: ListEtudiantComponent},
  {path:'form',component:FormEtudiantComponent},
  {path:'update/:id', component:FormEtudiantComponent},
  {path:'detail/:id', component:DetailEtudiantComponent}
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantsRoutingModule { }
