import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Etudiant} from "../models/etudiant";

@Injectable({
  providedIn: 'any'
})
export class EtudiantService {
  public url=environment.defaultUrl+'/etudiant'
  constructor(private http:HttpClient) { }

  getAllEtudiant(){
    return this.http.get<Etudiant[]>(this.url)

  }
  addStudent(u:Etudiant){
    return this.http.post(this.url+'/add',u)

  }
  delete(id:number){
    return this.http.delete(this.url+'/delete/'+id)

  }
  update(u:Etudiant){
    return this.http.put(this.url+'/update/'+u.idEtudiant,u)
  }

  getStudentByID(id:number): any{
    return this.http.get<Etudiant>(this.url+'/display/'+id)

  }

}
