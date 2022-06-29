import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  postUser(data:any){
    return this.http.post("http://localhost:3000/US/",data)
  }
  getUser(){
    return this.http.get("http://localhost:3000/US")
  }
}
