import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conventions } from 'src/app/core/models/conventions';
import { Universite } from 'src/app/core/models/universite';
import { UniversiteService } from 'src/app/core/services/universite.service';




@Component({
  selector: 'app-formuniversite',
  templateUrl: './formuniversite.component.html',
  styleUrls: ['./formuniversite.component.css']
})

export class FormuniversiteComponent implements OnInit {
   universite : Universite;
   public action : String;
   listcnv : Conventions[];
   conventions : Conventions;


  constructor(private router : Router, 
    private univServ : UniversiteService,
    private currentRoute : ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.universite = new Universite();
    let id =this.currentRoute.snapshot.params['id'];
    if(id!=null){
      this.action="update";
      this.univServ.getUniversiteById(id).subscribe(
        (object : Universite)=> this.universite =object
      )
      
      

    }
    else
    {
      this.action="Add";
      this.universite =new Universite();
    }
  }
  Back() {
    this.router.navigate(['backoffice/universite'])
  }
  
  save(){
    if (this.action=='Add')
    {
      this.univServ.addUniversite(this.universite).subscribe(
        ()=>{
          this.router.navigate(['backoffice/universite'])
        }
      )
    }else{
      this.univServ.updateuniversite(this.universite).subscribe(
        ()=>{
          this.router.navigate(['backoffice/universite'])
        }
      )
    }
   }
    

}
