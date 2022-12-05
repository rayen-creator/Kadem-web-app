import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratRoutingModule } from './contrat-routing.module';
import { ContratComponent } from './contrat.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';
import { FormContratComponent } from './form-contrat/form-contrat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailContratComponent } from './detail-contrat/detail-contrat.component';
import { AffecterEtudiantComponent } from './affecter-etudiant/affecter-etudiant.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgApexchartsModule } from "ng-apexcharts";
import { StatisticCardComponent } from './statistic-card/statistic-card.component'
@NgModule({
  declarations: [
    ContratComponent,
    ListContratComponent,
    FormContratComponent,
    DetailContratComponent,
    AffecterEtudiantComponent,
    StatisticCardComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ContratRoutingModule,
    AutocompleteLibModule,
    NgxPaginationModule,
    NgApexchartsModule

  ],
})
export class ContratModule { }
