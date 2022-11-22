import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Team} from "../models/team";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  public url= environment.defaultUrl+'/equipe'

  constructor(private http:HttpClient) {}

  getAllTeams() {
    return this.http.get<Team[]>(this.url)
  }
  addUser(team:Team) {
    return this.http.post(this.url+'add',team)
  }

  updateUser(id:number, newTeam: Team) {
    return this.http.put(this.url+'update'+id,newTeam)
  }

  getUserById(id:number){
    return this.http.get<Team>(this.url+'display'+id)
  }
  deleteUser(id:number){
    return this.http.delete(this.url+'delete'+id)
  }
}
