import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Entreprise } from 'src/app/core/models/entreprise';
import { EntrepriseService } from 'src/app/core/services/entreprise.service';

@Component({
  selector: 'app-form-entreprise',
  templateUrl: './form-entreprise.component.html',
  styleUrls: ['./form-entreprise.component.css']
})
export class FormEntrepriseComponent implements OnInit {
  editMode = false;
  EntrepriseForm: FormGroup;
  id: number;
  list:Entreprise[];
  entreprise : Entreprise;
  pattern="^[ a-zA-Z0-9][a-zA-Z0-9 ]*$";
  mode:String;
  constructor( private toastr: ToastrService,private  currentRoute: ActivatedRoute, private entpService: EntrepriseService, 

 private router: Router) { }

  ngOnInit(): void {
    this.entpService.getAllEntreprises().subscribe(
      (data:Entreprise[])=>{
       this.list=data;
       this.currentRoute.params.subscribe((params: Params) => {
        this.id = +params['id'];
        console.log(params)
        this.editMode = params['id'] != null;
        if (this.editMode) {
          this.mode = "Update"
        } else {
          this.mode = "Add"
        }
        this.initForm()
        console.log(this.EntrepriseForm)
        },
        () => { console.log('error') },
        () => {  }
      )
    }
  )
}
    
 
 
  private initForm() {
    let nom = '';
    let numFiscal = null;
    let adresse = '';
    let logo = '';


    if(this.mode=='Update') {
      const e = this.list.find(u => u.idEntreprise == this.id)!
      nom = e.nom
      numFiscal = e.numFiscal
      adresse = e.adresse
      logo = e.logo
      console.log()

    }
    this.EntrepriseForm = new FormGroup({
      'nom': new FormControl(nom,[Validators.required,Validators.pattern(this.pattern)]),
      'numFiscal': new FormControl(numFiscal, Validators.required),
      'adresse': new FormControl(adresse, Validators.required),
      'logo': new FormControl(logo, Validators.required),
      })
  }


  onSubmit() {
    console.log(this.EntrepriseForm )
    if(this.editMode)
    { 
      this.entpService.updateEntreprise(this.id,this.EntrepriseForm.value).subscribe(
        ()=>{
          this.toastr.success('Company has been added !','Success')
          this.router.navigate(['backoffice/entreprises'])}
      )
   }else {
    this.entpService.addEntreprise(this.EntrepriseForm.value).subscribe(
      ()=>{ 
        this.toastr.success('Company has been updated !','Success')
        this.router.navigate(['backoffice/entreprises'])}
    )
   
  }
}

Back() {
  this.router.navigate(['backoffice/entreprises'])
}


}
