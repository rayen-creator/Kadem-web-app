import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contrat } from 'src/app/core/models/Contrat';
import { Specialite } from 'src/app/core/models/Specialite';
import { ContratService } from 'src/app/core/services/contrat.service';

@Component({
  selector: 'app-form-contrat',
  templateUrl: './form-contrat.component.html',
  styleUrls: ['./form-contrat.component.css'],
})
export class FormContratComponent implements OnInit {
  editable = false;
  contrat: Contrat = {
    id_contrat: 0,
    archive: false,
    dateDebutContrat: new Date(),
    dateFinContrat: new Date(),
    montantContrat: 0,
    specialite: Specialite.IA,
  };

  constructor(
    private contratService: ContratService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      if (param['id'] !== undefined) {
        this.editable = true;
        this.contratService.getContratById(+param['id']).subscribe((result) => {
          this.contrat = result as Contrat;
          console.log(this.contrat);
        });
      }
    });
  }
}
