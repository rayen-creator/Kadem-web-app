import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Club} from "../models/club";


@Injectable()
export class ClubService {

  public url= environment.defaultUrl+'/club'

  constructor(private http:HttpClient) {}

  getAllClubs() {
    return this.http.get<Club[]>(this.url)
  }
  addClub(club:Club) {
    return this.http.post(this.url+'/add',club)
    console.log(club)
  }

  updateClub(id:number, newClub: Club) {
    return this.http.put(this.url+'/update/'+id,newClub)
  }

  getClubById(id:number){
    return this.http.get<Club>(this.url+'/display/'+id)
  }
  deleteClub(id:number){
    return this.http.delete(this.url+'/delete/'+id)
  }

}
