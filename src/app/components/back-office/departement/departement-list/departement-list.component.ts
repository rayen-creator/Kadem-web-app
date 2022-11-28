import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/app/core/models/departement';
import { DepartementService } from 'src/app/core/services/departement.service';

@Component({
  selector: 'app-departement-list',
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.css']
})
export class DepartementListComponent implements OnInit {
  Departements: Departement[];
  constructor(private depService: DepartementService) { }

  ngOnInit(): void {
    this.depService.getAlldepartements().subscribe((data) => {
      this.Departements = data;
    })
  }

}
