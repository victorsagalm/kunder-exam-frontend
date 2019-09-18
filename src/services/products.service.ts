import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(protected http: HttpClient) { }

  getProducts(): Observable <Product> {
    let result = this.http.get<Product>('https://hack.kunderlabs.com/exam/telecom/api/products/new');
    return result;
  }
}
