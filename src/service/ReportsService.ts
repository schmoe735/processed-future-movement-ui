import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ReportsService {
  reportUrl = "http://localhost:8080/api/v1/report/daily-summary/"
  constructor(private http: HttpClient) { }

  getDailySummary(clientId: string) {
    return this.http.get(`${this.reportUrl}${clientId}`);
  }

  downloadDailySummary(clientId: string) {
    return this.http.get(`${this.reportUrl}${clientId}?output=csv`, { responseType: 'text' });
  }
}