import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';


@NgModule({
  declarations: [
    TeamsComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule
  ]
})
export class TeamsModule { }
