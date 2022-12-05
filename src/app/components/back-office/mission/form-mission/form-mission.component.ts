import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrat } from 'src/app/core/models/Contrat';
import { Mission } from 'src/app/core/models/Mission';
import { ContratService } from 'src/app/core/services/contrat.service';
import { MissionService } from 'src/app/core/services/mission.service';

@Component({
  selector: 'app-form-mission',
  templateUrl: './form-mission.component.html',
  styleUrls: ['./form-mission.component.css'],
})
export class FormMissionComponent implements OnInit {
  editable = false;
  contrat: Contrat;
  myForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    technologies: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });
  idParent: number;
  idChild: number;

  constructor(
    private missionService: MissionService,
    private contratService: ContratService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.parent?.params.subscribe((parentParam) => {
      this.idParent = +parentParam['id'];
      this.contratService
        .getContratById(+parentParam['id'])
        .subscribe((res) => (this.contrat = res as Contrat));
      this.route.params.subscribe((param) => {
        if (param['idm'] !== undefined) {
          this.idChild = +param['idm'];
          this.editable = true;
          this.missionService
            .displayMissionByID(+param['idm'])
            .subscribe((result) => {
              let mission = result as Mission;
              this.myForm = new FormGroup({
                title: new FormControl(mission.title, Validators.required),
                duration: new FormControl(
                  mission.duration,
                  Validators.required
                ),
                technologies: new FormControl(
                  mission.technologies,
                  Validators.required
                ),
                description: new FormControl(
                  mission.description,
                  Validators.required
                ),
              });
            });
        }
      });
    });
  }
  onSubmit() {
    if (!this.editable) {
      this.missionService
        .addMission({ ...this.myForm.value, contrat: this.contrat })
        .subscribe(() => this.router.navigateByUrl('backoffice/contrat/' + this.idParent + '/mission'));
    } else {
      this.missionService
        .updateMission({ ...this.myForm.value, contrat: this.contrat, idMission: this.idChild })
        .subscribe(() => this.router.navigateByUrl('backoffice/contrat/' + this.idParent + '/mission'));
    }
  }
}
