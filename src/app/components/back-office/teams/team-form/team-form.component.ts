import { Component, OnInit } from '@angular/core';
import {Team} from "../../../../core/models/team";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {TeamService} from "../../../../core/services/team.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent implements OnInit {
  teamForm: FormGroup;
  id: number;
  list:Team[];
  editMode = false;
  mode:String;
  pattern="^[ a-zA-Z][a-zA-Z ]*$";


  constructor(private route: ActivatedRoute, private teamService: TeamService, private router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe(
      (data:Team[])=>{
        this.list=data;
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            console.log(params)
            this.editMode = params['id'] != null;
            if (this.editMode) {
              this.mode = "Update"
            } else {
              this.mode = "Add"
            }
            this.initForm()
          console.log(this.teamForm)
          },
          () => { console.log('error') },
          () => {  }
        )
      }
    )
  }

  private initForm() {
    let teamName = '';
    let teamLevel = '';
    let teamImage = '';


    if(this.editMode) {
      const team = this.list.find(u => u.idEquipe == this.id)!
      teamName = team.nomEquipe
      teamLevel = team.niveau
      teamImage = team.image

    }
    this.teamForm = new FormGroup({
      'nomEquipe': new FormControl(teamName,[ Validators.required,Validators.pattern(this.pattern),Validators.minLength(3)]),
      'niveau': new FormControl(teamLevel, Validators.required),
      'image': new FormControl(teamImage, Validators.required),

    })
  }

  Back() {
    this.router.navigate(['/backoffice/teams'])
  }

  onSubmit() {
    if (this.editMode) {
      this.teamService.updateTeam(this.id, this.teamForm.value).subscribe(()=> {
          this.toastr.success('team '+this.teamForm.get('nomEquipe')?.value+' updated succesfully', 'Success')
      }, error => (err: string) => {
        console.log("err" + err);
        this.toastr.error('something went wrong !','Error');
      })
    } else {
      this.teamService.addTeam(this.teamForm.value).subscribe(()=> {
        this.toastr.success('team '+this.teamForm.get('nomEquipe')?.value+' added succesfully', 'Success')
      }, error => (err: string) => {
        console.log("err" + err);
        this.toastr.error('something went wrong !','Error');
      })
    }
    this.router.navigate(['/backoffice/teams'])
  }
}
