import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contrat } from 'src/app/core/models/Contrat';
import { ContratService } from 'src/app/core/services/contrat.service';

@Component({
  selector: 'app-detail-contrat',
  templateUrl: './detail-contrat.component.html',
  styleUrls: ['./detail-contrat.component.css'],
})
export class DetailContratComponent implements OnInit {
  contrat: Contrat;
  isShowed = false;
  constructor(
    private route: ActivatedRoute,
    private contratService: ContratService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.contratService
        .getContratById(+param['id'])
        .subscribe((r) => (this.contrat = r as Contrat));
    });
  }
  onShow() {
    this.isShowed = !this.isShowed;
  }

  enAffect(etudiant: any) {
    this.contrat = { ...this.contrat, etudiant };
    this.onShow();
  }
}
