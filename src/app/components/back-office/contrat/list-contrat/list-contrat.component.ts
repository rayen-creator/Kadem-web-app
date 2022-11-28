import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/core/models/Contrat';
import { ContratService } from 'src/app/core/services/contrat.service';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css'],
})
export class ListContratComponent implements OnInit {
  contrats: any[] = [];
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
    });
  }
}
