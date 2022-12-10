import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntreprisesComponent } from './entreprises.component';
import { FormEntrepriseComponent } from './form-entreprise/form-entreprise.component';
import { ListEntrepriseComponent } from './list-entreprise/list-entreprise.component';

const routes: Routes = [{ path: '', component: ListEntrepriseComponent},
{path:'form',component:FormEntrepriseComponent},
{path:'update/:id', component:FormEntrepriseComponent}
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntreprisesRoutingModule { }
