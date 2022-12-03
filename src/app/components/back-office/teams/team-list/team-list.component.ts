import { Component, OnInit } from '@angular/core';
import {Team} from "../../../../core/models/team";
import {TeamService} from "../../../../core/services/team.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  public teams: Team[];
  public teamsList: Team[];
  public length: number;
  public page = 1;
  public pageSize=2;
  searchText: any;
  constructor(private teamService: TeamService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getEquipesall();
  }


  getEquipesall(){
    this.teamService.getAllTeamsPage({page:this.page-1, size:this.pageSize}).subscribe(
      (data:Team[]) => {
        // @ts-ignore
        this.teamsList=data['content'];
        console.log(this.teamsList);
        // @ts-ignore
        this.length=data['totalElements'];
      },
      () => { console.log('error') },
      () => {

      }
    );
    this.teamService.getAllTeams().subscribe(
      (data: Team[])=>{
        this.teams = data;
      }
    )
  }
  onSearchByName() {
    if (!this.searchText) {
      this.getEquipesall()
    } else {
      this.teamService.searchByNameEquipe({page:this.page-1, size:this.pageSize}, this.searchText).subscribe(
        (data:Team[]) => {
          // @ts-ignore
          this.teamsList = data['content'];
        }
      )
    }

  }

  deleteTeam(team: Team) {
    let i = this.teamsList.indexOf(team);
    if(confirm("Are you sure to delete "+team.nomEquipe)) {
      this.teamService.deleteTeam(team.idEquipe).subscribe(
        ()=> {
          this.teamsList.splice(i, 1)
          this.toastr.success('team '+team.nomEquipe+' deleted succesfully', 'Success')
        }, error => (err: string) => {
          console.log("err" + err);
          this.toastr.error('something went wrong !','Error');
        }
      )
    }
  }

  getCount(niveau: any) {
    return this.teams.filter(o => o.niveau === niveau).length;
  }

}

