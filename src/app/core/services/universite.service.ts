import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Universite } from '../models/universite';
import {HttpClient} from "@angular/common/http";
import { Conventions } from '../models/conventions';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  public url= environment.defaultUrl+'/Universite'

  constructor(private http : HttpClient) { }

  getAlluniversities() {
    return this.http.get<Universite[]>(this.url+'/all')
  }
  addUniversite(universite:Universite) {
    return this.http.post(this.url+'/addUniversity',universite)
    
  }

  updateuniversite(newunivrsite: Universite) {
    return this.http.put(this.url+'/updateUniversity/'+newunivrsite.idUniv,newunivrsite)
  }

  getUniversiteById(id:number){
    return this.http.get<Universite>(this.url+'/University/'+id)
  }
  deleteUniversite(id:number){
    return this.http.delete(this.url+'/deleteU/'+id)
  }

  getCnveByUnv(id:number){
    return this.http.get<Conventions>(this.url+'/cnvByUni/'+id)
  }

  //http://localhost:8086/SpringMVC/Universite/affect/1/1

  affect(universite : Universite,idc:number) {
    return this.http.post(this.url+'/affect/'+universite.idUniv+'/'+idc,universite)
  }

}
