import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffectconventionsComponent } from './affectconventions/affectconventions.component';
import { ConventionsComponent } from './conventions.component';
import { FormconventionsComponent } from './formconventions/formconventions.component';
import { ListconventionsComponent } from './listconventions/listconventions.component';

const routes: Routes = [{ path: '', component: ListconventionsComponent },
{ path: 'form', component: FormconventionsComponent },
{ path: 'affect/:id', component: AffectconventionsComponent },
{ path: 'update/:id', component: FormconventionsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConventionsRoutingModule { }
