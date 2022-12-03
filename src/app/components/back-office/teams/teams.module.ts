import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamFormComponent } from './team-form/team-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DetailsFormComponent } from './details-form/details-form.component';
import { DetailsListComponent } from './details-list/details-list.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { TeamComponent } from './team/team.component';
import { DetailComponent } from './detail/detail.component';
import {TeamService} from "../../../core/services/team.service";
import {TeamDetailsService} from "../../../core/services/teamDetails.service";



@NgModule({
  declarations: [
    TeamsComponent,
    TeamListComponent,
    TeamFormComponent,
    DetailsFormComponent,
    DetailsListComponent,
    TeamComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    FormsModule,
    NgbModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  providers: [
    TeamService,
    TeamDetailsService
  ]
})
export class TeamsModule { }
