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
  isNotifShowed = false
  currentDate = new Date();
  toastBody = '';
  TypeToast = '';
  constructor(
    private route: ActivatedRoute,
    private contratService: ContratService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.contratService
        .getContratById(+param['id'])
        .subscribe((r: any) => {
          this.contrat = r as Contrat;
          let dateFin: Date = new Date(r.dateFinContrat);
          console.log(dateFin);

          let difference = dateFin.getTime() - this.currentDate.getTime();
          let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
          console.log(TotalDays);
          if (TotalDays < 0) {
            this.TypeToast = 'danger'
            this.toastBody = `le contract a expirer`;
            this.isNotifShowed = true;
          } else
            if (TotalDays < 3) {
              this.TypeToast = 'warning'
              this.toastBody = `le contract va expirer dans ${TotalDays} jours ! `;
              this.isNotifShowed = true;
              //this.isNotifShowed = false;
            }
        });
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
