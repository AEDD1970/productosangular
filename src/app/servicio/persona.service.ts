import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TypeProduct} from '../models/typeproduct';
import { Observable } from 'rxjs';
import { Product, ProductService } from '../models/producto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private httpClient: HttpClient) { }

  obtenerTodosProductos(): Observable<ProductService> {
    return this.httpClient.get<ProductService>(environment.url_api_prod+"products")

  }

  agregarProductos(persona: any) {
    let json = JSON.stringify(persona);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("https://stunning-great-basin-88024.herokuapp.com/products", json, { headers: headers });

  }

  agregarTypes(type:any){
    let json = JSON.stringify(type);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post("https://stunning-great-basin-88024.herokuapp.com/type_product", json, { headers: headers });

  }

  eliminarProductos(identificador): Observable<ProductService> {
    return this.httpClient.delete<ProductService>("https://stunning-great-basin-88024.herokuapp.com/products/" + identificador)

  }

  obtenerCollar():Observable<ProductService> {
  return this.httpClient.get<ProductService>(environment.url_api+"posts/1")

}
}