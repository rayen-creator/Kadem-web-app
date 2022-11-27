import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratRoutingModule } from './contrat-routing.module';
import { ContratComponent } from './contrat.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';
import { FormContratComponent } from './form-contrat/form-contrat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContratComponent, ListContratComponent, FormContratComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ContratRoutingModule,
  ],
})
export class ContratModule {}
