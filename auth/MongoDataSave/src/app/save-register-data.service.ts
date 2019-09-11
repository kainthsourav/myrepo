import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";

import { HttpClient, HttpRequest, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class SaveRegisterDataService {
   public requestHeaders: HttpHeaders;
  constructor(private http:HttpClient) {
    this.requestHeaders = new HttpHeaders();
    this.requestHeaders.append('Content-Type', 'application/json');
    this.requestHeaders.append('Accept', 'application/json');
   }

  savedata(data)
  {
  
    return this.http.post("http://localhost:3000/register",data,{headers: this.requestHeaders})
    .pipe(map(Response=>Response))
  
  }
}
