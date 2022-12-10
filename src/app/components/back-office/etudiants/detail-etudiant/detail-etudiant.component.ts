import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Departement } from 'src/app/core/models/departement';
import { Etudiant } from 'src/app/core/models/etudiant';
import { DepartementService } from 'src/app/core/services/departement.service';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-detail-etudiant',
  templateUrl: './detail-etudiant.component.html',
  styleUrls: ['./detail-etudiant.component.css']
})
export class DetailEtudiantComponent implements OnInit {
  
  listdep: Departement[];
  departemet:Departement;
  etudiant : Etudiant;
  constructor( private router: Router,
    private etudServ: EtudiantService,
    private toastr: ToastrService,
    private currentRoute: ActivatedRoute,
    private depServ: DepartementService) { }

  ngOnInit(): void {
    this.depServ.getAlldepartements().subscribe(
      (data)=>{this.listdep = data},
      ()=> {},
      ()=> {},
      );
    this.etudiant = new Etudiant();
      let id= this.currentRoute.snapshot.params['id'];
      if(id!=null){
      this.etudServ.getEtudiantById(id).subscribe(
        ((object:Etudiant)=> this.etudiant=object))
      }
      console.log(this.etudiant)
  }

  save(){
    this.etudServ.affect(this.etudiant,this.departemet.idDepart).subscribe(
      ()=>{
        this.toastr.success('Departement has been assigned !','Success')
        this.router.navigate(['backoffice/etudiants'])} 
      )
  }
  Back() {
    this.router.navigate(['backoffice/etudiants'])
  }
}
