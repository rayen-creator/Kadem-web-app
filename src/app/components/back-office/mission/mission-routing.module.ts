import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormMissionComponent } from './form-mission/form-mission.component';
import { ListMissionComponent } from './list-mission/list-mission.component';
import { MissionComponent } from './mission.component';

const routes: Routes = [
  {
    path: '',
    component: MissionComponent,
    children: [
      { path: '', redirectTo: 'listmission', pathMatch: 'full' },
      { path: 'listmission', component: ListMissionComponent },
      { path: 'ajoutermission', component: FormMissionComponent },
      { path: 'modifiermission/:idm', component: FormMissionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissionRoutingModule {}
