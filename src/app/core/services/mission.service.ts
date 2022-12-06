import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mission } from '../models/Mission';
const baseUrl = `${environment.defaultUrl}/controllerMission`;
@Injectable({
  providedIn: 'root',
})
export class MissionService {
  constructor(private http: HttpClient) {}

  DisplayMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${baseUrl}/DisplayMissions`);
  }
  addMission(Mission: Mission) {
    return this.http.post(`${baseUrl}/ajouterMission`, Mission);
  }
  deleteMissionById(idcontrat: number) {
    return this.http.delete(`${baseUrl}/deleteMission/${idcontrat}`);
  }
  updateMission(Mission: Mission) {
    return this.http.put(`${baseUrl}/updateMissionById`, Mission);
  }
  displayMissionByID(id: number) {
    return this.http.get(`${baseUrl}/DisplayMissionById/${id}`);
  }
  DisplayMissionByContrat(idc: number): Observable<Mission[]> {
    return this.http.get<Mission[]>(
      `${baseUrl}/DisplayMissionByContrat/${idc}`
    );
  }
  assignMissionToContrat(idContrat: number, idMission: number) {
    return this.http.get(
      `${baseUrl}/assignMissionToContrat/${idContrat}/${idMission}`
    );
  }
}
