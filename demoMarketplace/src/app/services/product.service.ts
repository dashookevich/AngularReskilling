import { Injectable } from '@angular/core';
import { Observable, of  } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient }    from '@angular/common/http';

import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsUrl =  'https://fakestoreapi.com/products';
  
  constructor( private httpClient: HttpClient) { }
 
  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.productsUrl).pipe(
      tap((_) => console.log('fetched props')),
      catchError(this.handleError<Product[]>('getProducts', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
