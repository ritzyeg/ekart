import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private http: HttpClient){}  //a constructor created to get content from link ,http is alias name for the big link http fn kittan vendi constructor
  getAllProducts(){
    return this.http.get("https://fakestoreapi.com/products")
  }
  getSingleProduct(id:string){
    return this.http.get(`https://fakestoreapi.com/products/${id}`) //api.ts kayinjal app.routes.ts
  }
}

