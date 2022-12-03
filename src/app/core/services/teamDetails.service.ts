import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {TeamDetails} from "../models/teamDetails";

@Injectable()
export class TeamDetailsService {

  public url= environment.defaultUrl+'/detailEquipe'

  constructor(private http:HttpClient) {}

  getAllDetails() {
    return this.http.get<TeamDetails[]>(this.url)
  }
  addDetails(details:TeamDetails) {
    return this.http.post(this.url+'/add',details)
    console.log(details)
  }

  updateDetails(id:number, newDetails: TeamDetails) {
    return this.http.put(this.url+'/update/'+id,newDetails)
  }

  getDetailsById(id:number){
    return this.http.get<TeamDetails>(this.url+'/display/'+id)
  }
  deleteDetails(id:number){
    return this.http.delete(this.url+'/delete/'+id)
  }

}
