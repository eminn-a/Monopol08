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

  getRecentProperties(limit?: number) {
    const { apiUrl } = environment;
    let url = `${apiUrl}/houses`;
    if (limit) {
      url += `?sortBy=_createdOn%20des&pageSize=${limit}`;
    }
    return this.http.get<Property[]>(url);
  }

  getProperty(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Property>(`${apiUrl}/houses/${id}`);
  }

  createProperty(
    place: string,
    street: string,
    m2: string,
    year: string,
    bedrom: string,
    wc: string,
    price: string,
    description: string,
    picture: string
  ) {
    return this.http.post<Property>('/', {
      place,
      street,
      m2,
      year,
      bedrom,
      wc,
      price,
      description,
      picture,
    });
  }
}
