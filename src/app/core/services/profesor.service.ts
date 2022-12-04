import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Profesor} from "../models/profesor";

@Injectable({
  providedIn: 'any'
})
export class ProfesorService {
 public url=environment.defaultUrl+'/professeur'
  constructor(private http:HttpClient) { }

  getAllProfesor(){
    return this.http.get<Profesor[]>(this.url)

  }
  addProfesor(u:Profesor){
    return this.http.post(this.url+'/add',u)

  }
  delete(id:number){
    return this.http.delete(this.url+'/delete/'+id)

  }
  update(u:Profesor){
    return this.http.put(this.url+'/update/'+u.idProfesseur,u)
  }

  getProfesorByID(id:number): any{
    return this.http.get<Profesor>(this.url+'/display/'+id)

  }

}
