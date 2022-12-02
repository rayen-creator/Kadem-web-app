import { Injectable } from '@angular/core';
import { Contrat, IContratAjouter } from '../models/Contrat';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8082/SpringMVC/ContartController';
const StudentUrl = 'http://localhost:8082/SpringMVC/controllerEtudiant';
@Injectable({
  providedIn: 'root',
})
export class ContratService {
  constructor(private http: HttpClient) {}

  getListContratService(): Observable<Contrat[]> {
    return this.http.get<Contrat[]>(`${baseUrl}/displayallcontrats`);
  }
  addContratService(Contrat: Contrat) {
    return this.http.post(`${baseUrl}/newContrat`, Contrat);
  }
  deleteContratService(idcontrat: number) {
    return this.http.delete(`${baseUrl}/deleteContrat/${idcontrat}`);
  }
  updateContratService(Contrat: Contrat) {
    return this.http.put(`${baseUrl}/updateContrat`, Contrat);
  }
  getContratById(id: number) {
    return this.http.get(`${baseUrl}/displayContratById/${id}`);
  }
  addcontratToEtudiant(idEtudiant: number, idContrat: number) {
    return this.http.get(
      `${baseUrl}/addcontratToEtudiant/${idEtudiant}/${idContrat}`
    );
  }
  /////student
  DisplayStudents() {
    return this.http.get(`${StudentUrl}/DisplayStudents`);
  }
}
