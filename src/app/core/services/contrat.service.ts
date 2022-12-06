import { Injectable } from '@angular/core';
import { Contrat, IContratAjouter } from '../models/Contrat';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = `${environment.defaultUrl}/contrat`;
@Injectable({
  providedIn: 'root',
})
export class ContratService {
  constructor(private http: HttpClient) {}

  getListContratService(): Observable<Contrat[]> {
    return this.http.get<Contrat[]>(`${baseUrl}`);
  }
  addContratService(Contrat: Contrat) {
    return this.http.post(`${baseUrl}/add`, Contrat);
  }
  deleteContratService(idcontrat: number) {
    return this.http.delete(`${baseUrl}/delete/${idcontrat}`);
  }
  updateContratService(Contrat: Contrat) {
    return this.http.put(`${baseUrl}/update`, Contrat);
  }
  getContratById(id: number) {
    return this.http.get(`${baseUrl}/display/${id}`);
  }
  addcontratToEtudiant(idEtudiant: number, idContrat: number) {
    return this.http.get(
      `${baseUrl}/addcontratToEtudiant/${idEtudiant}/${idContrat}`
    );
  }
}
