import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Team} from "../models/team";
import {TeamDetails} from "../models/teamDetails";

@Injectable()
export class TeamService {

  public url= environment.defaultUrl+'/equipe'

  constructor(private http:HttpClient) {}

  getAllTeams() {
    return this.http.get<Team[]>(this.url)
  }
  getAllTeamsPage(params: any) {
    return this.http.get<Team[]>(this.url+'/page', {params})
  }
  addTeam(team:Team) {
    return this.http.post(this.url+'/add',team)
    console.log(team)
  }

  updateTeam(id:number, newTeam: Team) {
    return this.http.put(this.url+'/update/'+id,newTeam)
  }

  getTeamById(id:number){
    return this.http.get<Team>(this.url+'/display/'+id)
  }
  deleteTeam(id:number){
    return this.http.delete(this.url+'/delete/'+id)
  }
  addDetails(details:TeamDetails,id:number) {
    return this.http.put(this.url+'/addDetails/'+id,details)
  }
  searchByNameEquipe(request: any, search: any){
    const params = request;
    const nomEquipe = search;
    return this.http.get<Team[]>(this.url+'/search/'+nomEquipe, {params})
  }


}
