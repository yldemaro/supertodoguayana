import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url='assets/api/api.json'

  constructor(private http : HttpClient) { }


  getProductos(){
    return  this.http.get(this.url);
  }
}
