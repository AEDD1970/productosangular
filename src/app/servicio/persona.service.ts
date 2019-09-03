import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TypeProductService } from '../models/typeproduct';
import { Observable } from 'rxjs';
import { ProductService, ProductApi, Product } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  get url() { return "https://stunning-great-basin-88024.herokuapp.com" }

  constructor(private httpClient: HttpClient) { }

  obtenerTodosProductos(): Observable<ProductService> {
    return this.httpClient.get<ProductService>(this.url + "/products")

  }
  obtenerTodosType(): Observable<TypeProductService> {
    return this.httpClient.get<TypeProductService>(this.url + "/type_product")

  }

  obtenerUnicoCollar(type_product_id): Observable<ProductApi[]> {
    return this.httpClient.get<ProductApi[]>(`${this.url}/products/show_typec/${type_product_id}`)
  }

  obtenerTodosTypeCollar(id): Observable<Product> {
    return this.httpClient.get<Product>(`${this.url}/products/show_uniquess/${id}`)
  }

  agregarProductos(persona: Product) {
    const form = new FormData()
    Object.keys(persona).forEach(input => {
      form.append(input, persona[input])
    })
    return this.httpClient.post<ProductApi>(this.url + "/products", form);


  }

  agregarTypes(type: any) {
    let json = JSON.stringify(type);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(this.url + "/type_product", json, { headers: headers });

  }

  eliminarProductos(identificador): Observable<ProductService> {
    return this.httpClient.delete<ProductService>(this.url + "/products/" + identificador)

  }

}