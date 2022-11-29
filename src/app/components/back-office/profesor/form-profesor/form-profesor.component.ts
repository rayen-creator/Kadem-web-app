import { Component, OnInit } from '@angular/core';
import {Profesor} from "../../../../core/models/profesor";
import {ProfesorService} from "../../../../core/services/profesorService/profesor.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-profesor',
  templateUrl: './form-profesor.component.html',
  styleUrls: ['./form-profesor.component.css']
})
export class FormProfesorComponent implements OnInit {
  public prof:Profesor;
  public action:string;
  public form:FormGroup;
  constructor(private profesorService:ProfesorService,private router:Router,private localRoute:ActivatedRoute,private fb:FormBuilder) { }

  ngOnInit(): void {
    let id = this.localRoute.snapshot.params['id'];
    if (id!=null){
      this.action="Update profesor";
      this.profesorService.getProfesorByID(id).subscribe(
        (data:Profesor)=>{this.prof=data},
      () => {console.log("erreur")},
      () => {console.log("complete")}
      );
    }else {
      this.action="Add profesor";
      this.prof = new Profesor();
    }


    this.form=this.fb.group({
      prenomProf:['',[Validators.required,Validators.minLength(5)]],
      nomProf:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]],
      age:['',[Validators.required]],
      phone:['',[Validators.required,Validators.minLength(8)]],
      addresse:['',[Validators.required,Validators.minLength(5)]],
      image:['',[Validators.required,Validators.minLength(5)]]




    }

    )



  }



  saveProduct(){
    if (this.action=='Add profesor'){
      this.profesorService.addProfesor(this.prof).subscribe(
        ()=>{this.router.navigate(['/backoffice/profesor/']);}
      );
    }else {
      this.profesorService.update(this.prof).subscribe(
        ()=>{this.router.navigate(['/backoffice/profesor/']);}

      )

    }

  }




}
