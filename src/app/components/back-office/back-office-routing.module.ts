import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';

const routes: Routes = [
  {
    path: '', component: BackOfficeComponent, children: [
      { path: 'universite', loadChildren: () => import('./universite/universite.module').then(m => m.UniversiteModule) },
      { path: 'conventions', loadChildren: () => import('./conventions/conventions.module').then(m => m.ConventionsModule) }

    ]
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
