import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(protected http: HttpClient) { }

  getProducts(): Observable <any> {
    return this.http.get('https://hack.kunderlabs.com/exam/telecom/api/products/new');
  }
}
