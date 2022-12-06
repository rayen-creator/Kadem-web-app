import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conventions } from 'src/app/core/models/conventions';
import { Universite } from 'src/app/core/models/universite';
import { ConventionsService } from 'src/app/core/services/conventions.service';

@Component({
  selector: 'app-listconventions',
  templateUrl: './listconventions.component.html',
  styleUrls: ['./listconventions.component.css']
})
export class ListconventionsComponent implements OnInit {
  universite : Universite;
  conventions : Conventions;
  listCnv : Conventions[];
  public length : number;
  public page =1;
  public pagesize=15;
  searchText : any;


  constructor(private cnvServ : ConventionsService , 
    private router : Router) { }

  ngOnInit(): void {
    this.cnvServ.getAllConventions().subscribe(
      (data)=>{this.listCnv = data},
      ()=>{},
      ()=>{this.length = this.listCnv.length,console.log(this.listCnv)},
    );
  }

  Back() {
    this.router.navigate(['backoffice/universite'])
  }

  deleteConventions(conventions:Conventions){
    if (confirm("Are you sure to delete"+conventions.name)){
      this.cnvServ.deleteConventions(conventions.idc).subscribe()
      location.reload();
    }
  }  
  }


