import { Component, OnInit } from '@angular/core';
import {Team} from "../../../../core/models/team";
import {TeamDetails} from "../../../../core/models/teamDetails";
import {TeamService} from "../../../../core/services/team.service";
import {Router} from "@angular/router";
import {TeamDetailsService} from "../../../../core/services/teamDetails.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-details-list',
  templateUrl: './details-list.component.html',
  styleUrls: ['./details-list.component.css']
})
export class DetailsListComponent implements OnInit {
  public details: TeamDetails[];
  public detailsList: TeamDetails[];
  public length: number = 0;
  public page = 1;
  public pageSize = 2;
  searchText: any;

  constructor(private detailService: TeamDetailsService, private router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.detailService.getAllDetails().subscribe(
      (data: TeamDetails[]) => {
        this.details = data;
        console.log(this.details);
      },
      () => {
        console.log('error')
      },
      () => {
        this.detailsList = this.details;
        this.length = this.detailsList.length;
      }
    );
  }

  deleteDetails(details: TeamDetails) {
    let i = this.detailsList.indexOf(details);
    if (confirm("Are you sure to delete " + details.idDetailEquipe)) {
      this.detailService.deleteDetails(details.idDetailEquipe).subscribe(
        () => {
          this.detailsList.splice(i, 1)
          this.toastr.success('Detail ' + details.idDetailEquipe + ' deleted succesfully', 'Success')
        }, error => (err: string) => {
          console.log("err" + err);
          this.toastr.error('something went wrong !', 'Error');
        }
      )

    }

  }
}

