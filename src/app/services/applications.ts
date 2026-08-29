import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  private apiUrl = 'https://localhost:7055/api/Applications';

  constructor(private http: HttpClient) {}

  getApplications() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getApplicationById(id: number) {
  return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
