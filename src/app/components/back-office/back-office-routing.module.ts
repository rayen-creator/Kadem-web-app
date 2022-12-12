import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {
    path: '', component: BackOfficeComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'departement', loadChildren: () => import('./departement/departement.module').then(m => m.DepartementModule) },
      { path: 'teams', loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule) },
      { path: 'clubs', loadChildren: () => import('./clubs/clubs.module').then(m => m.ClubsModule) },
      { path: 'contrat', loadChildren: () => import('./contrat/contrat.module').then((m) => m.ContratModule) },
      { path: 'profesor', loadChildren: () => import('./profesor/profesor.module').then(m => m.ProfesorModule) },
      { path: 'class', loadChildren: () => import('./class/class.module').then(m => m.ClassModule) },
      { path: 'etudiants', loadChildren: () => import('./etudiants/etudiants.module').then(m => m.EtudiantsModule) },
      { path: 'entreprises', loadChildren: () => import('./entreprises/entreprises.module').then(m => m.EntreprisesModule) },
      { path: 'universite', loadChildren: () => import('./universite/universite.module').then(m => m.UniversiteModule) },
      { path: 'conventions', loadChildren: () => import('./conventions/conventions.module').then(m => m.ConventionsModule) }




    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackOfficeRoutingModule { }
