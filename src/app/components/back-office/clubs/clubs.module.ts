import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubsRoutingModule } from './clubs-routing.module';
import { ClubsComponent } from './clubs.component';
import {FormsModule} from "@angular/forms";
import { ClubListComponent } from './club-list/club-list.component';
import { ClubFormComponent } from './club-form/club-form.component';
import { ClubComponent } from './club/club.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {ClubService} from "../../../core/services/club.service";


@NgModule({
  declarations: [
    ClubsComponent,
    ClubListComponent,
    ClubFormComponent,
    ClubComponent
  ],
  imports: [
    CommonModule,
    ClubsRoutingModule,
    NgbModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
  providers: [
    ClubService
  ]
})
export class ClubsModule { }
