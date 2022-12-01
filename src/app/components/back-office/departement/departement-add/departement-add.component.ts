import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CanComponentLeave } from 'src/app/core/helpers/unsaved-changes.guard';
import { Departement } from 'src/app/core/models/departement';
import { DepartementService } from 'src/app/core/services/departement.service';

@Component({
  selector: 'app-departement-add',
  templateUrl: './departement-add.component.html',
  styleUrls: ['./departement-add.component.css']
})
export class DepartementAddComponent implements OnInit,CanComponentLeave {
  Departements: Departement[];
  id: number;
  editmode: boolean;
  dep: Departement;
  added :boolean;
  constructor(private depService: DepartementService,
    private router: Router,
    private ActiveRoute: ActivatedRoute,
    private toastr: ToastrService) { }
  

  ngOnInit(): void {
    this.added=false;
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

  canLeave(): boolean {
    if ((this.dep.nomDepart !=null) && (this.added==false)){
      return confirm('You have unsaved changes are you sure you wanne leave this page ?');
    }
    return true;

  }

  onSubmit() {
    console.log("editmode :" + this.editmode)
    if (Object.keys(this.dep).length != 0){
      if (this.editmode) {
        this.depService.updateDep(this.id, this.dep).subscribe({
          next: () => {
            this.added=true;

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
            this.added=true;
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
