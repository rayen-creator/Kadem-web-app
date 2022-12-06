import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conventions } from 'src/app/core/models/conventions';
import { Universite } from 'src/app/core/models/universite';
import { ConventionsService } from 'src/app/core/services/conventions.service';
import { UniversiteService } from 'src/app/core/services/universite.service';

@Component({
  selector: 'app-affectconventions',
  templateUrl: './affectconventions.component.html',
  styleUrls: ['./affectconventions.component.css']
})
export class AffectconventionsComponent implements OnInit {
  
  conventions: Conventions;
  public action : String;
  listuniv : any;
  universite : Universite;
  public length : number;


  constructor(private currentRoute : ActivatedRoute,
    private router : Router, 
   private cnvServ : ConventionsService,
   private unvServ : UniversiteService) { }

  ngOnInit(): void {
    this.unvServ.getAlluniversities().subscribe(
      (data)=>{this.listuniv= data},
      ()=>{},
      ()=>{});

      this.conventions = new Conventions();
      let id= this.currentRoute.snapshot.params['id'];
      if(id!=null){
      this.cnvServ.getConventionsById(id).subscribe(
        ((object:Conventions)=> this.conventions=object))
      }
    

  }

  add(){

   
    this.unvServ.affect(this.universite,this.conventions.idc).subscribe(
      ()=>{
        this.router.navigate(['backoffice/conventions'])
      } 
      )}
 

}
