import { Component, OnInit } from '@angular/core';
import {ProfesorService} from "../../../../core/services/profesorService/profesor.service";
import {Profesor} from "../../../../core/models/profesor";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-profesor',
  templateUrl: './list-profesor.component.html',
  styleUrls: ['./list-profesor.component.css']
})
export class ListProfesorComponent implements OnInit {
  public choice: string;


  public all: Profesor[];
  public lengthTable: number;
  constructor(private profesorService :ProfesorService,private route: ActivatedRoute,private router:ActivatedRoute) {  }

  ngOnInit(): void {


    this.profesorService.getAllProfesor().subscribe({
      next : (data:Profesor[])=>{this.all=data;
        this.lengthTable=this.all.length;

      },
      error : (err)=>{
        console.log('error'+err);

      }
    }


    );


  }

  Delete(profesor: Profesor) {
   let i = this.all.indexOf(profesor);
    this.profesorService.delete(profesor.idProfesseur).subscribe(
      ()=>{
       this.all.splice(i,1)
      }
    );
  }

  Profile(profesor: Profesor) {

  }


}
