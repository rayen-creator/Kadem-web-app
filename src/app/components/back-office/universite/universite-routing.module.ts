import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormuniversiteComponent } from './formuniversite/formuniversite.component';
import { ListuniversiteComponent } from './listuniversite/listuniversite.component';
import { UniversitiesComponent } from './universities/universities.component';


const routes: Routes = [{ path: '', component: ListuniversiteComponent },
{ path: 'form', component: FormuniversiteComponent },
{ path: 'universities', component: UniversitiesComponent },
{ path: 'update/:id', component: FormuniversiteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
