import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Class} from "../../../../core/models/class";
import {ActivatedRoute, Router} from "@angular/router";
import {ClassService} from "../../../../core/services/classService/class.service";
import {ProfesorService} from "../../../../core/services/profesorService/profesor.service";
import {Profesor} from "../../../../core/models/profesor";

@Component({
  selector: 'app-form-class',
  templateUrl: './form-class.component.html',
  styleUrls: ['./form-class.component.css']
})
export class FormClassComponent implements OnInit {
  public classe: Class;
  public action: string;
  public form: FormGroup;
  public prof:Profesor[];
  public profesor: Profesor;
  constructor(private classService: ClassService,private profesorService: ProfesorService , private router: Router, private localRoute: ActivatedRoute, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    let id = this.localRoute.snapshot.params['id'];
    if (id != null) {
      this.action = "Update class";
      this.classService.getClassByID(id).subscribe(
        (data: Class) => {
          this.classe = data;
          this.classe.professeurs.push(this.profesor);
 

        },
        () => {
          console.log("erreur")
        },
        () => {
          console.log("complete")
        }
      );
    } else {
      this.action = "Add class";
      this.classe = new Class();
    }


    this.form = this.fb.group({
        nom: ['', [Validators.required, Validators.minLength(3)]],
        profesor:['']

      }
    )

    this.profesorService.getAllProfesor().subscribe({
      next : (data:Profesor[])=>{this.prof=data;
      },
      error : (err)=>{
        console.log('error'+err);

      }
    }

    )
  }


  saveClass() {
    if (this.action == 'Add class') {
      this.classService.addClass(this.classe).subscribe(
        () => {
          this.router.navigate(['/backoffice/class/']);
        }
      );
    } else {
      this.classService.update(this.classe).subscribe(
        () => {
          console.log(this.profesor);


 // requette sql
          this.router.navigate(['/backoffice/class/']);

        }
      )

    }

  }


}
