import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';

const routes: Routes = [
  {
    path: '', component: BackOfficeComponent, children: [
      { path: 'departement', loadChildren: () => import('./departement/departement.module').then(m => m.DepartementModule) },
    { path: 'teams', loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule) },
    { path: 'clubs', loadChildren: () => import('./clubs/clubs.module').then(m => m.ClubsModule) }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
