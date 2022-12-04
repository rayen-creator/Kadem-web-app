import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratComponent } from './contrat.component';
import { DetailContratComponent } from './detail-contrat/detail-contrat.component';
import { FormContratComponent } from './form-contrat/form-contrat.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';

const routes: Routes = [
  {
    path: '',
    component: ContratComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: ':id/mission',
        loadChildren: () =>
          import('../mission/mission.module').then((m) => m.MissionModule),
      },
      { path: 'list', component: ListContratComponent },
      { path: 'ajouter', component: FormContratComponent },
      { path: 'modifier/:id', component: FormContratComponent },
      { path: 'detailContrat/:id', component: DetailContratComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContratRoutingModule {}
