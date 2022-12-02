import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/core/models/etudiant';
import { EtudiantService } from 'src/app/core/services/etudiant.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.css']
})
export class FormEtudiantComponent implements OnInit {
  etudiant : Etudiant;
  public action: string;
  constructor(private router: Router,
    private etudServ: EtudiantService,
    private currentRoute: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
      this.etudiant = new Etudiant();
      let id= this.currentRoute.snapshot.params['id'];
    if(id!=null){
      //update
      this.action="Update";
      //this.product= this.productService.getProductByID(id);
      this.etudServ.getEtudiantById(id).subscribe(
        (object: Etudiant)=> this.etudiant=object
      )
      
      console.log(this.etudiant)
      console.log(id)
    }else
    { this.action="Add";
      this.etudiant = new Etudiant();}
    }
    Back() {
      this.router.navigate(['backoffice/etudiants'])
    }
  
  save(){
    if(this.action=='Add')
    { 
    this.etudServ.addEtudiant(this.etudiant).subscribe(
      ()=>{ 
        this.toastr.success('student has been added !','Success')
        this.router.navigate(['backoffice/etudiants'])}
    )
   }else {
    this.etudServ.updateEtudiant(this.etudiant).subscribe(
      ()=>{
        this.toastr.success('student has been updated !','Success')
        this.router.navigate(['backoffice/etudiants'])}
    )
  }
  } 
   


}
