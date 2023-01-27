import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Category } from '../models/category';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl: string = 'https://test-feed.airweb.workers.dev';

  private _allProducts: Array<Product> = [];
  private _allCategories: Array<Category> = [];

  public subjectProducts$ = new Subject();
  public subjectCategories$ = new Subject();

  constructor(private _http: HttpClient) {

  }

  public getAllProducts = () => {
    this._allProducts = [];
    this._http.get<Product[]>(`${this.apiUrl}/products`).subscribe((result) => {
      result.map((product) => { this._allProducts.push(new Product(product)) });
      this.subjectProducts$.next(this.allProducts);
    })
  }

  public getAllCategories = () => {
    this._allCategories = [];
    this._http.get<Category[]>(`${this.apiUrl}/categories`).subscribe((result) => {
      result.map((category) => { this._allCategories.push(new Category(category)) });
      this.subjectCategories$.next(this.allCategories);
    })
  }

  public get allProducts() {
    return this._allProducts;
  }

  public get allCategories() {
    return this._allCategories;
  }
}
