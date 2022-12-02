import { Component, OnInit } from '@angular/core';
import {ProfesorService} from "../../../../core/services/profesorService/profesor.service";
import {Profesor} from "../../../../core/models/profesor";
import {Class} from "../../../../core/models/class";
import {ClassService} from "../../../../core/services/classService/class.service";
import {ClassComponent} from "../class.component";
import {Student} from "../../../../core/models/student";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.css']
})
export class ListClassComponent implements OnInit {
  public list: Class[];

  constructor(private classService:ClassService,private router: Router) { }

  ngOnInit(): void {

    this.classService.getAllClass().subscribe({
      next : (data:Class[])=>{this.list=data;
        console.log(this.list)

      },
      error : (err)=>{
        console.log('error'+err);

      }
    }


  );


  }

  Delete(classs: Class) {
    let i = this.list.indexOf(classs);
    this.classService.delete(classs.idClasse).subscribe(
      ()=>{
        this.list.splice(i,1)
      }
    );
  }

  deleteStud(classs: Class, student: Student) {
    let i = classs.etudiants.indexOf(student);
    classs.etudiants.splice(i,1);
    this.classService.update(classs).subscribe(
      () => {}
    );


  }
  deleteProf(classs: Class, profesor: Profesor) {
    let i = classs.professeurs.indexOf(profesor);
    classs.professeurs.splice(i,1);
    this.classService.update(classs).subscribe(
      () => {}
    );


  }



}
