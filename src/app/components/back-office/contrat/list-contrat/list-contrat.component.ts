import { Component, OnInit } from '@angular/core';
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
  static = { IA: 0, CLOUD: 0, SECURITE: 0, RESEAU: 0 };
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
  refreshData() {
    this.contratService.getListContratService().subscribe((result) => {
      this.contrats = result;
      this.static.IA = result.filter((r: any) => r.specialite === 'IA').length;
      this.static.CLOUD = result.filter(
        (r: any) => r.specialite === 'CLOUD'
      ).length;
      this.static.RESEAU = result.filter(
        (r: any) => r.specialite === 'RESEAU'
      ).length;
      this.static.SECURITE = result.filter(
        (r: any) => r.specialite === 'SECURITE'
      ).length;
    });
  }
}
