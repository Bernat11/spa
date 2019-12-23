import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoworkingsService {

  private httpClient:HttpClient;

  constructor(httpClient:HttpClient) {
    this.httpClient = httpClient;
    this.getCoworkings();
  }

  getCoworkings():Observable<Object>{
    return this.httpClient.get(`http://localhost:8070/api/v1/coworkings`);
  }

  getCoworking( id: string ):Observable<Object>{
    return this.httpClient.get(`http://localhost:8070/api/v1/coworkings/${id}`);
  }
}

export interface Coworking{
  name: string;
  description: string;
  district: string;
  imagePath: string[];
  price: number;
  id?: number;
};
