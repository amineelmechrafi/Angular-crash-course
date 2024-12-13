import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) {}
  getData(apiUrl:string):Observable<Data[]>{
   return this.http.get<Data[]>(apiUrl);
  }
}
