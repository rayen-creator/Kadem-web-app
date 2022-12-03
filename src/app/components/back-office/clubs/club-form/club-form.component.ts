import { Component, OnInit } from '@angular/core';
import {Club} from "../../../../core/models/club";
import {ActivatedRoute, Router} from "@angular/router";
import {ClubService} from "../../../../core/services/club.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-club-form',
  templateUrl: './club-form.component.html',
  styleUrls: ['./club-form.component.css']
})
export class ClubFormComponent implements OnInit {
  id:any;
  btn:String;
  list: Club[];
  public club: Club;
  constructor(private route:ActivatedRoute,private clubService:ClubService, private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.clubService.getAllClubs().subscribe(
      (data: Club[]) => {
        this.list = data;
        if (this.list.find(u => u.idClub == this.id)! != null) {
          this.club = this.list.find(u => u.idClub == this.id)!;
          this.btn = "update"
        } else {
          this.club = new Club()
          this.btn = "save"
        }
      },
      () => {
        console.log("error")
      },
      () => {
        console.log("complete")
      }
    );
  }

  saveClub(){
    if(this.btn=='save') {
      this.clubService.addClub(this.club).subscribe(
        () => {
          this.toastr.success('club '+this.club.nom+' added succesfully', 'Success')
          this.router.navigate(['backoffice/clubs'])
        }, error => (err: string) => {
          console.log("err" + err);
          this.toastr.error('something went wrong !','Error');
        })

    }else {
      this.clubService.updateClub(this.id,this.club).subscribe(
        ()=>{
          this.toastr.success('club '+this.club.nom+' updated succesfully', 'Success')
          this.router.navigate(['backoffice/clubs'])
        }, error => (err: string) => {
          console.log("err" + err);
          this.toastr.error('something went wrong !','Error');
        }
      )

    }

  }
  Back() {
    this.router.navigate(['backoffice/clubs'])
  }
}
