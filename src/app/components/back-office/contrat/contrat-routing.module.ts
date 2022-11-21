import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratComponent } from './contrat.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';

const routes: Routes = [
  {
    path: '',
    component: ContratComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListContratComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContratRoutingModule {}
