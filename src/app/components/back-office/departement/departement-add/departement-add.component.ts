import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customvalidator } from 'src/app/components/auth/utils/customvalidator';
import { Departement } from 'src/app/core/models/departement';
import { DepartementService } from 'src/app/core/services/departement.service';

@Component({
  selector: 'app-departement-add',
  templateUrl: './departement-add.component.html',
  styleUrls: ['./departement-add.component.css']
})
export class DepartementAddComponent implements OnInit {
  Departements: Departement[];
  id: number;
  editmode: boolean;
  dep: Departement;

  constructor(private depService: DepartementService,
    private router: Router,
    private ActiveRoute: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.id = this.ActiveRoute.snapshot.params['id'];
    this.depService.getAlldepartements().subscribe({
      next: (data :Departement[]) => {
        this.Departements = data;
        if (this.Departements.find(d => d.idDepart == this.id)! != null) {
          this.dep = this.Departements.find(d => d.idDepart == this.id)!;
          console.log('this dep :'+this.dep.idDepart)
          this.editmode = true;
        }else{
          this.dep=new Departement();
          this.editmode=false;
        }
      },
      error: (err) => {
        console.log("err : "+err)

      }
    })

  }



  onSubmit() {
    console.log("editmode :" + this.editmode)
    if (Object.keys(this.dep).length != 0){
      if (this.editmode) {
        this.depService.updateDep(this.id, this.dep).subscribe({
          next: () => {
            this.toastr.success('departement has been updated !','Success')

            this.router.navigate(['/backoffice/departement/listDepartement'])

          },
          error: () => {
  
          }
        })
      } else {
        this.depService.addDepartement(this.dep).subscribe({
          next: () => {
            console.log('dep :' + this.dep);
            this.toastr.success('departement has been added successfully !','Success')

            this.router.navigate(['/backoffice/departement/listDepartement'])

  
          },
          error: (err) => {
            console.log("Error :" + err);
          }
        })
      }
    }else{
      this.toastr.error('the form must be filled !','Error')
    }

  }
back(){
  this.router.navigate(['/backoffice/departement/listDepartement'])

}

}
