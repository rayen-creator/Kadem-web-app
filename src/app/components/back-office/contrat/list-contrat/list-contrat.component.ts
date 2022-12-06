import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contrat } from 'src/app/core/models/Contrat';
import { Specialite } from 'src/app/core/models/Specialite';
import { ContratService } from 'src/app/core/services/contrat.service';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css'],
})
export class ListContratComponent implements OnInit {
  contrats: Contrat[] = [];
  static = { IA: 0, CLOUD: 0, SECURITE: 0, RESEAUX: 0 };
  p: number = 1;
  constructor(private contratService: ContratService) {}

  ngOnInit(): void {
    this.refreshData();
  }

  delete(idcontrat: number) {
    this.contratService
      .deleteContratService(idcontrat)
      .subscribe(() => this.refreshData());
    this.ngOnInit();
  }
  DoArchive_NotArchive(contrat: Contrat) {
    this.contratService
      .updateContratService({ ...contrat, archive: !contrat.archive }) //modifier l'archive seulement
      .subscribe(() => this.refreshData());
  }
  ///refreshdata
  refreshData() {
    this.contratService.getListContratService().subscribe((result) => {
      console.log(result);

      this.contrats = result as Contrat[];
      this.static.IA = result.filter((r: any) => r.specialite === 'IA').length;
      this.static.CLOUD = result.filter(
        (r: any) => r.specialite === 'CLOUD'
      ).length;
      this.static.RESEAUX = result.filter(
        (r: any) => r.specialite === 'RESEAUX'
      ).length;
      this.static.SECURITE = result.filter(
        (r: any) => r.specialite === 'SECURITE'
      ).length;
    });
  }
}
