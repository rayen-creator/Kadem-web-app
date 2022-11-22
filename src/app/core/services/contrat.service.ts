import { Injectable } from '@angular/core';
import { Contrat } from '../models/Contrat';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = environment.defaultSpringUrl + '/ContartController';
@Injectable({
  providedIn: 'root',
})
export class ContratService {
  constructor(private http: HttpClient) {}
  private extractData(res: any): any {
    let body = res;
    return body || {};
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

  getListContratService(): Observable<Contrat[]> {
    return this.http.get<Contrat[]>(`${baseUrl}/displayallcontrats`);
  }
  addContratService(Contrat: Contrat) {
    return this.http.post(`${baseUrl}/addContrat`, Contrat).pipe(
      map((res) => this.extractData(res)),
      catchError(this.handleError)
    );
  }
  deleteContratService(idcontrat: number) {
    return this.http.delete(`${baseUrl}/removeContrat/${idcontrat}`);
  }
  updateContratService(Contrat: Contrat) {
    return this.http.put(`${baseUrl}/updateContrat`, Contrat);
  }
}
