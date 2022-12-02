import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Class} from "../../../../core/models/class";
import {ActivatedRoute, Router} from "@angular/router";
import {ClassService} from "../../../../core/services/classService/class.service";
import {ProfesorService} from "../../../../core/services/profesorService/profesor.service";
import {Profesor} from "../../../../core/models/profesor";
import {Student} from "../../../../core/models/student";
import {StudentService} from "../../../../core/services/studentService/student.service";

@Component({
  selector: 'app-form-class',
  templateUrl: './form-class.component.html',
  styleUrls: ['./form-class.component.css']
})
export class FormClassComponent implements OnInit {
  public classe: Class;
  public action: string;
  public form: FormGroup;
  public prof: Profesor[];
  public profesor: Profesor;
  public stud: Student[];
  public student: Student;


  constructor(private classService: ClassService, private profesorService: ProfesorService, private studentService: StudentService,
              private router: Router, private localRoute: ActivatedRoute, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    let id = this.localRoute.snapshot.params['id'];
    if (id != null) {
      this.action = "Add profesor and students";
      this.classService.getClassByID(id).subscribe(
        (data: Class) => {
          this.classe = data;
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


    this.profesorService.getAllProfesor().subscribe({
        next: (data: Profesor[]) => {
          this.prof = data;
          this.prof.forEach((i: Profesor) => {
            this.classe.professeurs.forEach((x: Profesor) => {
              if (i != x) {
                let y = this.prof.indexOf(i);
                this.prof.splice(y, 1);

              }
            })
          })

        },
        error: (err) => {
          console.log('error' + err);

        }
      }
    )

    this.studentService.getAllStudent().subscribe({
        next: (data: Student[]) => {
          this.stud = data;
          this.stud.forEach((i: Student) => {
            this.classe.etudiants.forEach((x: Student) => {
              if (i != x) {
                let y = this.stud.indexOf(i);
                this.stud.splice(y, 1);
              }
            })
          })

        },
        error: (err) => {
          console.log('error' + err);

        }
      }
    )

    this.form = this.fb.group({
        nom: ['', [Validators.required, Validators.minLength(3)]],
        profesor: [''],
        student: ['']

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
      this.classe.professeurs.push(this.profesor);
      this.classe.etudiants.push(this.student);
      this.classService.update(this.classe).subscribe(
        () => {
          this.router.navigate(['/backoffice/class/']);

        }
      )

    }

  }


  refresh() {
    window.location.reload();
  }
}
