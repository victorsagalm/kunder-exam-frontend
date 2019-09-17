import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(protected http: HttpClient) { }

  getProducts() {
    return this.http.get('https://hack.kunderlabs.com/exam/telecom/api/products/new');
  }
}
