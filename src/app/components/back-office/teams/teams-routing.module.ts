import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams.component';
import {TeamListComponent} from "./team-list/team-list.component";
import {TeamFormComponent} from "./team-form/team-form.component";
import {DetailsFormComponent} from "./details-form/details-form.component";
import {DetailsListComponent} from "./details-list/details-list.component";

const routes: Routes = [

      {path:'', component: TeamListComponent},
  {path:'details', component: DetailsListComponent},
  {path:'new', component: TeamFormComponent},
  {path:'update/:id', component: TeamFormComponent},
  {path:'details/update/:id', component: DetailsFormComponent},
  {path:'addDetails/:ide', component: DetailsFormComponent}




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
