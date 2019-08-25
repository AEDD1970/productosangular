import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TypeProduct, TypeProductService } from '../models/typeproduct';
import { Observable } from 'rxjs';
import { Product, ProductService } from '../models/producto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private httpClient: HttpClient) { }

  obtenerTodosProductos(): Observable<ProductService> {
    return this.httpClient.get<ProductService>("https://stunning-great-basin-88024.herokuapp.com/products")

  }
  obtenerTodosType(): Observable<TypeProductService> {
    return this.httpClient.get<TypeProductService>("https://stunning-great-basin-88024.herokuapp.com/type_product")

  }

  obtenerTodosTypeCollar(): Observable<ProductService>{
    return this.httpClient.get<ProductService>("https://stunning-great-basin-88024.herokuapp.com/products/show_typec/1")
  }
  obtenerTodosTypePpulsera(): Observable<ProductService>{
    return this.httpClient.get<ProductService>("https://stunning-great-basin-88024.herokuapp.com/products/show_typec/2")
  }

  obtenerTodosTypeAnillo(): Observable<ProductService>{
    return this.httpClient.get<ProductService>("https://stunning-great-basin-88024.herokuapp.com/products/show_typec/3")
  }

  agregarProductos(persona: any) {
    let json = JSON.stringify(persona);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<Product>("https://stunning-great-basin-88024.herokuapp.com/products", json, { headers: headers });

  }

  agregarTypes(type:any){
    let json = JSON.stringify(type);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("https://stunning-great-basin-88024.herokuapp.com/type_product", json, { headers: headers });

  }

  eliminarProductos(identificador): Observable<ProductService> {
    return this.httpClient.delete<ProductService>("https://stunning-great-basin-88024.herokuapp.com/products/" + identificador)

  }

}