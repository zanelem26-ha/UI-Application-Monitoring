import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncidentCommentsService {

  private apiUrl = 'https://localhost:7055/api/IncidentComments';

  constructor(private http: HttpClient) {}

  getIncidentComments() {
    return this.http.get<any[]>(this.apiUrl);
  }
}