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
@NgModule({
  declarations: [
    ContratComponent,
    ListContratComponent,
    FormContratComponent,
    DetailContratComponent,
    AffecterEtudiantComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ContratRoutingModule,
    AutocompleteLibModule,
  ],
})
export class ContratModule {}
