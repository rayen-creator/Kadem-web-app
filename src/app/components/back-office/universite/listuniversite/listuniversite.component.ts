import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conventions } from 'src/app/core/models/conventions';
import { Universite } from 'src/app/core/models/universite';
import { UniversiteService } from 'src/app/core/services/universite.service';


@Component({
  selector: 'app-listuniversite',
  templateUrl: './listuniversite.component.html',
  styleUrls: ['./listuniversite.component.css']
})
export class ListuniversiteComponent implements OnInit {
  universite : Universite;
  listUniv : Universite[];
  public length : number;
  public page =1;
  public pagesize=15;
  searchText : any;
  id : number;
  conventions : Conventions;

  
  constructor(private univServ : UniversiteService , 
    private router : Router,
    private currentRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.univServ.getAlluniversities().subscribe(
      (data)=>{this.listUniv = data},
      ()=>{},
      ()=>{this.length = this.listUniv.length},
    );
  }

  deleteUniversite(universite:Universite){
    if (confirm("Are you sure to delete"+universite.nomUniv)){
      this.univServ.deleteUniversite(universite.idUniv).subscribe()
      location.reload();
    }
  }  

  Back() {
    this.router.navigate(['backoffice/conventions'])
  }

  new(){

    
  
    let id =this.currentRoute.snapshot.params['id'];
   if(id!=null){
     
     this.univServ.getCnveByUnv(id).subscribe(
       (object : Conventions)=> this.conventions =object
     ),
    
     ()=>{
      this.router.navigate(['backoffice/conventions/'+this.id])
    }
    // this.univServ.getCnveByUnv(this.id).subscribe(
    //   (data : any)=>{this.listcnv = data},
    //   ()=>{},
    //   ()=>{this.length = this.listcnv.length},
   
    // );
  }

}

}
