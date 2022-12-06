import { Component, OnInit } from '@angular/core';
import { Universite } from 'src/app/core/models/universite';
import { UniversiteService } from 'src/app/core/services/universite.service';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent implements OnInit {
  universite : Universite;
  listUniv : Universite[];
  length: number;

  constructor(private univServ : UniversiteService) { }

  ngOnInit(): void {
    this.univServ.getAlluniversities().subscribe(
      (data)=>{this.listUniv = data},
      ()=>{},
      ()=>{this.length = this.listUniv.length},
    );
  }


}
