import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Equipment } from '../models/equipment';
@Injectable({
    providedIn: 'root'
  })
  export class EquipmentDataService {
    private eventsPath = 'equipments';
  
    constructor(private http: HttpClient) { }
  
    getData(): Observable <Equipment[]>{
      return this.http.get<Equipment[]>(`${environment.apiUrl}${this.eventsPath}?populate=%2A`);
    }
  }