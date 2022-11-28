import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public dep: Departement;
  
  constructor(private depService: DepartementService,
    private router: Router,
    private ActiveRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.ActiveRoute.params.subscribe({
      next: (parms) => {
        this.id = parms['id'];
        if (this.id != null) {
          this.editmode = true;
          this.depService.getAlldepartements().subscribe({
            next: (data) => {
              this.Departements = data;
              this.editmode = false;

            },
            error: (error) => {
              console.log("error : " + error);

            }
          })
        }else{
          this.dep=new Departement();
        }
      },
      error: () => {

      }
    }
    )
  }


 
  onSubmit() {
    if (this.editmode) {
      this.depService.updateDep(this.id, this.dep).subscribe({
        next: () => {

        },
        error: () => {

        }
      })
    } else {
      this.depService.addDepartement(this.dep).subscribe({
        next: () => {

        },
        error: (err) => {
          console.log("Error :" + err);
        }
      })
    }
    this.router.navigate(['/listDepartement'])
  }


}
