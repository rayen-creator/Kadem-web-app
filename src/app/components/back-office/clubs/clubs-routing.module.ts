import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClubListComponent} from "./club-list/club-list.component";
import {ClubFormComponent} from "./club-form/club-form.component";

const routes: Routes = [
  { path: '', component: ClubListComponent },
  {path:'new', component: ClubFormComponent},
  {path:'update/:id', component: ClubFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubsRoutingModule { }
