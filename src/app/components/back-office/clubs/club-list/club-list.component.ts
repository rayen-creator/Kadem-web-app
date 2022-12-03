import { Component, OnInit } from '@angular/core';
import {Club} from "../../../../core/models/club";
import {ClubService} from "../../../../core/services/club.service";
import {ActivatedRoute} from "@angular/router";
import {TeamDetails} from "../../../../core/models/teamDetails";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit {

  public list: Club[];
  public all: Club[];
  public page = 1;
  public pageSize=1;
  public length: number = 0;
  searchText: any;

  constructor(private clubService: ClubService,
              private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.clubService.getAllClubs().subscribe(
      (data:Club[])=> {
        this.all= data;
      },
      ()=>{console.log("error")},
      ()=>{this.length= this.all.length}
    );
  }

  deleteClub(club: Club) {
    let i = this.all.indexOf(club);
    if(confirm("Are you sure to delete "+club.nom)) {
      this.clubService.deleteClub(club.idClub).subscribe(
        ()=>{
          this.all.splice(i,1)
          this.toastr.success('team ' + club.nom + ' deleted succesfully', 'Success')
        }, error => (err: string) => {
          console.log("err" + err);
          this.toastr.error('something went wrong !', 'Error');
        }
      )

  }}

}
