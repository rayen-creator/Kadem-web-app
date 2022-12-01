import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Departement } from '../models/departement';
@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = environment.defaultUrl;
  }

  addDepartement(dep: Departement) {
    return this.httpClient.post(this.url +'/departement/add', dep);
  }
  getAlldepartements(){
    return this.httpClient.get<Departement[]>(this.url+'/departement');
  }
  updateDep(id:number,dep:Departement){
    return this.httpClient.put(this.url+'/departement/update/'+id,dep)
  }
  DeleteDep(id:number){
    return this.httpClient.delete(this.url+'/departement/delete/'+id);
  }
}
