import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { UniversiteComponent } from './universite.component';
import { ListuniversiteComponent } from './listuniversite/listuniversite.component';
import { FormuniversiteComponent } from './formuniversite/formuniversite.component';
import { FormsModule } from '@angular/forms';
import { UniversitiesComponent } from './universities/universities.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ParentComponent } from './parent/parent.component';


@NgModule({
  declarations: [
    UniversiteComponent,
    ListuniversiteComponent,
    FormuniversiteComponent,
    UniversitiesComponent,
    ParentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UniversiteRoutingModule,
    Ng2SearchPipeModule,
    
    


  ]
})
export class UniversiteModule { }
