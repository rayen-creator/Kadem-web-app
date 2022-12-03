import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TeamDetails} from "../../../../core/models/teamDetails";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {TeamService} from "../../../../core/services/team.service";
import {TeamDetailsService} from "../../../../core/services/teamDetails.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent implements OnInit {
  detailsForm: FormGroup;
  id: number;
  ide: number;
  list:TeamDetails[];
  editMode = false;
  mode:String;
  pattern="^[ a-zA-Z0-9][a-zA-Z0-9 ]*$";
  constructor(private route: ActivatedRoute, private teamService: TeamService, private detailsService: TeamDetailsService, private router: Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.detailsService.getAllDetails().subscribe(
      (data:TeamDetails[])=>{
        this.list=data;
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            console.log(params)
            this.editMode = params['id'] != null;
            if (this.editMode) {
              this.mode = "Update"
            } else {
              this.ide = +params['ide']
              this.mode = "Add"
            }
            this.initForm()
            console.log(this.detailsForm)
          },
          () => { console.log('error') },
          () => {  }
        )
      }
    )
  }
  private initForm() {
    let detailsSalle = '';
    let detailsThematique = '';
    let detailsDescription = '';

    if(this.editMode) {
      const details = this.list.find(u => u.idDetailEquipe == this.id)!
      detailsSalle = details.salle
      detailsThematique = details.thematique
      detailsDescription = details.description

    }
    this.detailsForm = new FormGroup({
      'salle': new FormControl(detailsSalle,[ Validators.required,Validators.pattern(this.pattern)]),
      'thematique': new FormControl(detailsThematique, Validators.required),
      'description': new FormControl(detailsDescription, Validators.required),

    })
  }

  Back() {
    this.router.navigate(['/backoffice/teams'])
  }

  onSubmit() {
    if (this.editMode) {
      this.detailsService.updateDetails(this.id, this.detailsForm.value).subscribe(()=> {
        this.toastr.success('detail '+this.id+' updated succesfully', 'Success')
      }, error => (err: string) => {
        console.log("err" + err);
        this.toastr.error('something went wrong !','Error');
      })
    } else {
      this.teamService.addDetails(this.detailsForm.value,this.ide).subscribe(()=> {
        this.toastr.success('detail added succesfully', 'Success')
      }, error => (err: string) => {
        console.log("err" + err);
        this.toastr.error('something went wrong !','Error');
      })
    }
    this.router.navigate(['/backoffice/teams/details'])
  }
}
