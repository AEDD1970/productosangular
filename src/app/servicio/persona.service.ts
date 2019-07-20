import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Product, ProductService } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private httpClient: HttpClient) { }

  obtenerTodosProductos(): Observable<ProductService> {
    return this.httpClient.get<ProductService>("https://stunning-great-basin-88024.herokuapp.com/products")

  }

  agregarProductos(persona: any) {
    let json = JSON.stringify(persona);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("", json, { headers: headers });

  }

  eliminarProductos(identificador): Observable<ProductService> {
    return this.httpClient.delete<ProductService>("https://stunning-great-basin-88024.herokuapp.com/products/" + identificador)

  }

}
