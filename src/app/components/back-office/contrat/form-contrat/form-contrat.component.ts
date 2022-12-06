import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
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
    idContrat: 0,
    archive: false,
    dateDebutContrat: null!,
    dateFinContrat: null!,
    montantContrat: null!,
    specialite: null!,
    etudiant: null,
  };
  contratForm: NgForm;
  currentDate = Date.now();

  constructor(
    private contratService: ContratService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      if (param['id'] !== undefined) {
        this.editable = true;
        this.contratService.getContratById(+param['id']).subscribe((result) => {
          console.log(result);

          this.contrat = result as Contrat;
        });
      }
    });
  }
  onSubmit() {
    if (!this.editable) {
      this.contratService
        .addContratService(this.contrat)
        .subscribe(() => this.router.navigate(['/backoffice/contrat']));
    } else {
      this.contratService
        .updateContratService(this.contrat)
        .subscribe(() => this.router.navigate(['/backoffice/contrat']));
    }
  }
  compare(_v1: any, _v2: any) {
    return new Date(_v1) > new Date(_v2);
  }
}
