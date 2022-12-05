import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Entreprise } from '../models/entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  public url= environment.defaultUrl+'/entreprise'

  constructor(private http : HttpClient) { }

   
  getAllEntreprises() {
    return this.http.get<Entreprise[]>(this.url+'/Display')
  }
  addEntreprise(entreprise:Entreprise) {
    return this.http.post(this.url+'/Add',entreprise)
  }

  updateEntreprise(id: number,newEntreprise: Entreprise) {
    return this.http.put(this.url+'/Modify/'+id,newEntreprise)
  }

  getEntrepriseById(id:number){
    return this.http.get<Entreprise>(this.url+'/Retrieve/'+id)
  }
  deleteEntreprise(id:number){
    return this.http.delete(this.url+'/Remove/'+id)
  }
}
