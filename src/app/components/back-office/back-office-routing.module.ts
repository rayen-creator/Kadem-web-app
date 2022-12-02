import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';

const routes: Routes = [
  {
    path: '', component: BackOfficeComponent, children: [
      {path:'profesor',loadChildren: () => import('./profesor/profesor.module').then(m => m.ProfesorModule)},
      {path:'class',loadChildren: () => import('./class/class.module').then(m => m.ClassModule)}

    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
