import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntreprisesRoutingModule } from './entreprises-routing.module';
import { EntreprisesComponent } from './entreprises.component';
import { FormEntrepriseComponent } from './form-entreprise/form-entreprise.component';
import { ListEntrepriseComponent } from './list-entreprise/list-entreprise.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {  NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    EntreprisesComponent,
    FormEntrepriseComponent,
    ListEntrepriseComponent,
    EntrepriseComponent
    
  ],
  imports: [
    CommonModule,
    EntreprisesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    Ng2SearchPipeModule    
  ]
})
export class EntreprisesModule { }
