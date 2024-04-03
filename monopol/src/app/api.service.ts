import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Property } from './types/property';
import { User } from './types/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getProperties() {
    const { apiUrl } = environment;
    return this.http.get<Property[]>(
      `${apiUrl}/data/houses?sortBy=_createdOn%20desc`
    );
  }

  getRecentProperties(limit?: number) {
    const { apiUrl } = environment;
    let url = `${apiUrl}/data/houses`;
    if (limit) {
      url += `?sortBy=_createdOn%20des&pageSize=${limit}`;
    }
    return this.http.get<Property[]>(url);
  }

  getProperty(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Property>(`${apiUrl}/data/houses/${id}`);
  }

  createProperty(property: Property) {
    const { apiUrl } = environment;
    return this.http.post<Property>(`${apiUrl}/data/houses`, property);
  }

  deleteProperty(id: string) {
    const { apiUrl } = environment;
    return this.http.delete(`${apiUrl}/data/houses/${id}`);
  }

  editProperty(property: Property, id: string) {
    const { apiUrl } = environment;
    const payload = property;

    return this.http.put<Property>(`${apiUrl}/data/houses/${id}`, payload);
  }

  buyProperty(property: Property) {
    const { apiUrl } = environment;
    return this.http.post<Property>(`${apiUrl}/data/buyedProperties`, property);
  }

  getOwnProperties(userId: string) {
    const { apiUrl } = environment;
    return this.http.get<Property[]>(
      `${apiUrl}/data/buyedProperties?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
    );
  }
}
