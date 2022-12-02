import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Student} from "../../models/student";

@Injectable({
  providedIn: 'any'
})
export class StudentService {
  public url=environment.defaultUrl+'/etudiant'
  constructor(private http:HttpClient) { }

  getAllStudent(){
    return this.http.get<Student[]>(this.url)

  }
  addStudent(u:Student){
    return this.http.post(this.url+'/add',u)

  }
  delete(id:number){
    return this.http.delete(this.url+'/delete/'+id)

  }
  update(u:Student){
    return this.http.put(this.url+'/update/'+u.idEtudiant,u)
  }

  getStudentByID(id:number): any{
    return this.http.get<Student>(this.url+'/display/'+id)

  }

}
