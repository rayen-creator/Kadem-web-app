import { Injectable } from '@angular/core';
import { Contrat } from '../models/Contrat';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8082/SpringMVC/ContartController';
@Injectable({
  providedIn: 'root',
})
export class ContratService {
  constructor(private http: HttpClient) {}

  getListContratService(): Observable<Contrat[]> {
    return this.http.get<Contrat[]>(`${baseUrl}/displayallcontrats`);
  }
  addContratService(Contrat: Contrat) {
    return this.http.post(`${baseUrl}/addContrat`, Contrat);
  }
  deleteContratService(idcontrat: number) {
    return this.http.delete(`${baseUrl}/removeContrat/${idcontrat}`);
  }
  updateContratService(Contrat: Contrat) {
    return this.http.put(`${baseUrl}/updateContrat`, Contrat);
  }
}
