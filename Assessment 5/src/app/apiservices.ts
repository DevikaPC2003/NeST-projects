import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservices {
  constructor(private http:HttpClient) {}
  getlist(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}
