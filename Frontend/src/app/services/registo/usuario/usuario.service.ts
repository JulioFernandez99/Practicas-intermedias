import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/enviroment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  http=inject(HttpClient);
  router=inject(Router);

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  apiUrl = environment.apiUrl;

consult_get(url:string){
    const route = this.apiUrl + url;
    return this.http.get(route,{headers:this.headers});
  }

  consult_post(url:string,data:any){
    const route = this.apiUrl + url;
    return this.http.post(route,data,{headers:this.headers});
  }

  consult_put(url:string,data:any){
    const route = this.apiUrl + url;
    return this.http.put(route,data,{headers:this.headers});
  }

  consult_delete(url:string){
    const route = this.apiUrl + url;
    return this.http.delete(route,{headers:this.headers});
  }


  constructor() { }
}

