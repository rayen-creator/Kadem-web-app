import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantsRoutingModule } from './etudiants-routing.module';
import { EtudiantsComponent } from './etudiants.component';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { FormsModule } from '@angular/forms';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailEtudiantComponent } from './detail-etudiant/detail-etudiant.component';



@NgModule({
  declarations: [
    EtudiantsComponent,
    FormEtudiantComponent,
    ListEtudiantComponent,
    DetailEtudiantComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EtudiantsRoutingModule,
    NgbPaginationModule,
    Ng2SearchPipeModule ,
  ]
})
export class EtudiantsModule { }
