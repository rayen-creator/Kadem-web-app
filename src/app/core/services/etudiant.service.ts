import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  public url= environment.defaultUrl+'/etudiant'

  constructor(private http : HttpClient) { }



  getAllEtudiants() {
    return this.http.get<Etudiant[]>(this.url+'/Display')
  }
  addEtudiant(etudiant:Etudiant) {
    return this.http.post(this.url+'/Add',etudiant)
  }

  affect(etud:Etudiant,idd:number) {
    return this.http.put(this.url+'/affect/'+etud.idEtudiant+'/'+idd,etud)
  }

  updateEtudiant(newEtudiant: Etudiant) {
    return this.http.put(this.url+'/Modify/'+newEtudiant.idEtudiant,newEtudiant)
  }

  getEtudiantById(id:number){
    return this.http.get<Etudiant>(this.url+'/Retrieve/'+id)
  }
  deleteEtudiant(id:number){
    return this.http.delete(this.url+'/Remove/'+id)
  }
}
