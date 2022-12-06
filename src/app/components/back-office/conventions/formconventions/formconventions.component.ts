import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Conventions } from 'src/app/core/models/conventions';
import { Universite } from 'src/app/core/models/universite';
import { ConventionsService } from 'src/app/core/services/conventions.service';
import { UniversiteService } from 'src/app/core/services/universite.service';

@Component({
  selector: 'app-formconventions',
  templateUrl: './formconventions.component.html',
  styleUrls: ['./formconventions.component.css']
})
export class FormconventionsComponent implements OnInit {
  conventions: Conventions;
  public action : String;
  listuniv : any;
  universite : Universite;
  public length : number;
  private id : any;
  

 constructor(private router : Router, 
   private cnvServ : ConventionsService,
   private currentRoute : ActivatedRoute,
   private unvServ : UniversiteService
  
   ) { }

 ngOnInit(): void {

  this.unvServ.getAlluniversities().subscribe(
    (data)=>{this.listuniv= data},
    ()=>{},
    ()=>{this.length = this.listuniv.length},
  );
  
   this.conventions = new Conventions();
   this.id =this.currentRoute.snapshot.params['id'];
   console.log(this.id)
   if(this.id!=null){
     this.action="update";
     this.cnvServ.getConventionsById(this.id).subscribe(
       (object : Conventions)=> this.conventions =object
     )
     
     

   }
   else
   {
     this.action="Add";
     this.conventions =new Conventions();
   }
 }  
 Back() {
   this.router.navigate(['backoffice/universite'])
 }

 add(){

   
    this.unvServ.affect(this.universite,this.conventions.idc).subscribe(
      ()=>{} 
      )}
 
 save(){
  
    
   if (this.action=='Add')
   {
    
     this.cnvServ.addConventions(this.conventions).subscribe(
       ()=>{
         this.router.navigate(['backoffice/conventions'])
       }
     )
   }else{
     this.cnvServ.updateConventions(this.conventions, this.id).subscribe(
       ()=>{
         this.router.navigate(['backoffice/conventions'])
       }
     )
   }
  }
}



