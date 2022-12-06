import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Conventions } from '../models/conventions';

@Injectable({
  providedIn: 'root'
})
export class ConventionsService {

  public url= environment.defaultUrl+'/Conventions'
  constructor(private http : HttpClient) { }
    getAllConventions() {
      return this.http.get<Conventions[]>(this.url+'/all')
    }
    addConventions(conventions:Conventions) {
      return this.http.post(this.url+'/addConventions',conventions)
      
    }
  
    updateConventions(newconventions: Conventions, idc : number) {
      return this.http.put(this.url+'/updateConventions/'+idc,newconventions)
    }
  
    getConventionsById(id:number){
      return this.http.get<Conventions>(this.url+'/Conventions/'+id)
    }
    deleteConventions(id:number){
      return this.http.delete(this.url+'/delete/'+id)
    }
  }

