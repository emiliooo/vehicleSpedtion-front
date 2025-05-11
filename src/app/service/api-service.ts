import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'http://localhost:8080/api/auth'; // Adres backendu
  private baseUrlSecond = 'http://localhost:8080/api/secure'; 
  private url = "/api"
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const body = { 
          "username":"Jan",
          "password":"jantestowe"
     };
    return this.http.post(`${this.baseUrl}/login`, body,{ withCredentials: true});
  }

  drivers() {
    return this.http.get(`${this.baseUrlSecond}/drivers`);
  }

  addDriver(driver:any) {
      return this.http.post(`${this.baseUrl}/login`, driver,{ withCredentials: true});
  }

  saveToken(token: string) {
    localStorage.setItem('jwtToken', token);
  }

  getToken() {
    return localStorage.getItem('jwtToken');
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('jwtToken');
  }

  getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.getToken()}`,
    });
  }
}
