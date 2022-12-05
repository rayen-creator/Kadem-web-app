import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Class} from "../../../../core/models/class";
import {ActivatedRoute, Router} from "@angular/router";
import {ClassService} from "../../../../core/services/class.service";
import {ProfesorService} from "../../../../core/services/profesor.service";
import {Profesor} from "../../../../core/models/profesor";
import {Etudiant} from "../../../../core/models/etudiant";
import {EtudiantService} from "../../../../core/services/etudiant.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-form-class', templateUrl: './form-class.component.html', styleUrls: ['./form-class.component.css']
})
export class FormClassComponent implements OnInit {
  public classe: Class;
  public action: string;
  public form: FormGroup;
  public prof: Profesor[];
  public profesor: Profesor;
  public stud: Etudiant[];
  public student: Etudiant;
  public test: Profesor[];


  constructor(private classService: ClassService, private profesorService: ProfesorService, private studentService: EtudiantService, private router: Router, private localRoute: ActivatedRoute, private fb: FormBuilder, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    let id = this.localRoute.snapshot.params['id'];
    if (id != null) {
      this.action = "Add profesor and students";
      this.classService.getClassByID(id).subscribe((data: Class) => {
        this.classe = data;
      }, () => {
        console.log("error")
      }, () => {
        console.log("complete")
      });
    } else {
      this.action = "Add class";
      this.classe = new Class();
    }


    this.profesorService.getAllProfesor().subscribe({
      next: (data: Profesor[]) => {
        this.prof = data.filter((val) => {
          return !this.classe.professeurs.find((a) => {
            return val.idProfesseur === a.idProfesseur;

          });
        });

      }, error: (err) => {
        console.log('error' + err);

      }, complete: () => {

      }
    })

    this.studentService.getAllEtudiants().subscribe({
      next: (data: Etudiant[]) => {
        this.stud = data.filter((val) => {
          return !this.classe.etudiants.find((a) => {
            return val.idEtudiant === a.idEtudiant;

          });
        });


      }, error: (err) => {
        console.log('error' + err);

      }, complete: () => {


      }
    })

    this.form = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(3)]], profesor: [''], student: ['']

    })

  }


  saveClass() {
    if (this.action == 'Add class') {
      this.classService.addClass(this.classe).subscribe(() => {
        this.router.navigate(['/backoffice/class/']);
        this.toastr.success(this.classe.nom+' added');
      });
    } else {
      this.classe.professeurs.push(this.profesor);
      this.classe.etudiants.push(this.student);
      this.classService.update(this.classe).subscribe(() => {
        // this.router.navigate(['/backoffice/class/']);
        window.location.reload();
        this.toastr.success(this.classe.nom+' updated');
      })

    }

  }


  refresh() {
    window.location.reload();
  }

  back() {
    this.router.navigate(['/backoffice/class/']);

  }
}
