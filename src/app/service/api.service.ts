import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private client: HttpClient) { }

  getAllProducts() : Observable<Products[]> {
    return this.client.get<Products[]>(environment.apiUrl + "products");
  }

  getProductById(id:number) : Observable<Products>{
    return this.client.get<Products>(environment.apiUrl + "products/"+id);
  }

  getAllCategories() : Observable<Products[]>{
    return this.client.get<Products[]>(environment.apiUrl + "categories");
  }
}
