import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Class} from "../models/class";

@Injectable({
  providedIn: 'any'
})
export class ClassService {
  public url=environment.defaultUrl+'/classe'
  constructor(private http:HttpClient) { }

  getAllClass(){
    return this.http.get<Class[]>(this.url)

  }
  addClass(u:Class){
    return this.http.post(this.url+'/add',u)

  }
  delete(id:number){
    return this.http.delete(this.url+'/delete/'+id)

  }
  update(u:Class){
    return this.http.put(this.url+'/update/'+u.idClasse,u)
  }

  getClassByID(id:number): any{
    return this.http.get<Class>(this.url+'/display/'+id)

  }

}
