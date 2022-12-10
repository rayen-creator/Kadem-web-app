import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/core/models/etudiant';
import { EtudiantService } from 'src/app/core/services/etudiant.service';
import { ToastrService } from 'ngx-toastr';
import { Departement } from 'src/app/core/models/departement';
import { DepartementService } from 'src/app/core/services/departement.service';
@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.css']
})
export class FormEtudiantComponent implements OnInit {
  etudiant: Etudiant;
  listdep: Departement[];
  public action: string;
  departemet: Departement;
  constructor(private router: Router,
    private etudServ: EtudiantService,
    private currentRoute: ActivatedRoute,
    private toastr: ToastrService,
    private depServ: DepartementService) { }

  ngOnInit(): void {
    this.depServ.getAlldepartements().subscribe(
      (data) => { this.listdep = data },
      () => { },
      () => { },
    );
    this.etudiant = new Etudiant();
    let id = this.currentRoute.snapshot.params['id'];
    if (id != null) {
      //update
      this.action = "Update";
      //this.product= this.productService.getProductByID(id);
      this.etudServ.getEtudiantById(id).subscribe(
        ((object: Etudiant) => this.etudiant = object))
      // this.depServ.getdepartementById(this.etudiant.departement_id_depart).subscribe(
      // ((object:Departement)=> this.departemet=object))


      // console.log(this.etudiant.departement_id_depart)
      //console.log(this.departemet)
      // 
    } else {
      this.action = "Add";
      this.etudiant = new Etudiant();
    }
  }
  Back() {
    this.router.navigate(['backoffice/etudiants'])
  }

  save() {
    if (this.action == 'Add') {
      this.etudServ.addEtudiant(this.etudiant).subscribe(
        () => {
          this.toastr.success('student has been added !', 'Success')
          this.router.navigate(['backoffice/etudiants'])
        }
      )
    } else {
      this.etudServ.updateEtudiant(this.etudiant).subscribe(
        () => {
          this.toastr.success('student has been updated !', 'Success')
          this.router.navigate(['backoffice/etudiants'])
        }
      )
    }
  }



}
