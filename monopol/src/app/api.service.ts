import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Property } from './types/property';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getProperties() {
    const { apiUrl } = environment;
    return this.http.get<Property[]>(`${apiUrl}/houses`);
  }
  // `/data/laptops?sortBy=_createdOn%20des&pageSize=${number}`
  getRecentProperties(limit?: number) {
    const { apiUrl } = environment;
    let url = `${apiUrl}/houses`;
    if (limit) {
      url += `?sortBy=_createdOn%20des&pageSize=${limit}`;
    }
    return this.http.get<Property[]>(url);
  }
}
