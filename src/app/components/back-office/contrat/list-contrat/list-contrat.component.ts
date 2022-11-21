import { Component, OnInit } from '@angular/core';
import { ContratService } from 'src/app/core/services/contrat.service';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css'],
})
export class ListContratComponent implements OnInit {
  contrats: any[];
  constructor(private contratService: ContratService) {}

  ngOnInit(): void {
    this.contratService.getListContratService().subscribe((result) => {
      console.log(result);

      this.contrats = result;
    });
  }

  delete(idcontrat: number) {
    this.contratService.deleteContratService(idcontrat).subscribe();
    this.ngOnInit();
  }
}
