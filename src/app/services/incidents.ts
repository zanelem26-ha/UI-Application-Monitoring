import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {

  private apiUrl = 'https://localhost:7055/api/Incidents';

  constructor(private http: HttpClient) {}

  getIncidents() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getIncidentsByApplication(applicationId: number) {
  return this.http.get<any[]>(
    `${this.apiUrl}/application/${applicationId}`
  );
  }
}
