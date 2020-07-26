import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
import {ProductosModule} from '../productos/productos.module'

@Injectable()
export class ProductosService {
   public products: ProductosModule;
  constructor(private http: HttpClient) {
  }
  getJSON(): Promise<any> {
    return this.http.get('./assets/json/data.json').toPromise()           
    }
}
