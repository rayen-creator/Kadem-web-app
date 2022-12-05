import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';

const routes: Routes = [
  {
    path: '', component: BackOfficeComponent, children: [
      
      { path: 'departement', loadChildren: () => import('./departement/departement.module').then(m => m.DepartementModule) },
      { path: 'teams', loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule) },
      { path: 'clubs', loadChildren: () => import('./clubs/clubs.module').then(m => m.ClubsModule) },
      {
        path: 'contrat',
        loadChildren: () =>
          import('./contrat/contrat.module').then((m) => m.ContratModule),
      },
      {path:'profesor',loadChildren: () => import('./profesor/profesor.module').then(m => m.ProfesorModule)},
      {path:'class',loadChildren: () => import('./class/class.module').then(m => m.ClassModule)}


    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackOfficeRoutingModule { }
