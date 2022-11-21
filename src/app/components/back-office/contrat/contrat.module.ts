import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratRoutingModule } from './contrat-routing.module';
import { ContratComponent } from './contrat.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';

@NgModule({
  declarations: [ContratComponent, ListContratComponent],
  imports: [CommonModule, ContratRoutingModule],
})
export class ContratModule {}
