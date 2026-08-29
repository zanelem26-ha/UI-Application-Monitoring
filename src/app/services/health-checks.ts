import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HealthChecksService {

  private apiUrl = 'https://localhost:7055/api/HealthChecks';

  constructor(private http: HttpClient) {}

  getHealthChecksByApplication(applicationId: number) {
    return this.http.get<any[]>(
      `${this.apiUrl}/application/${applicationId}`
    );
  }
}
