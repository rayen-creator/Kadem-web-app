import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionRoutingModule } from './mission-routing.module';
import { MissionComponent } from './mission.component';
import { ListMissionComponent } from './list-mission/list-mission.component';
import { FormMissionComponent } from './form-mission/form-mission.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [MissionComponent, ListMissionComponent, FormMissionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MissionRoutingModule,
    NgxPaginationModule
  ],
})
export class MissionModule { }
