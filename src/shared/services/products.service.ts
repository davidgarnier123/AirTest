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

  /**
   * @name getAllProducts
   * @description API call to receive products data + pass data in observable
   * @returns void
   */
  public getAllProducts = (): void => {
    this._allProducts = [];
    this._http.get<Product[]>(`${this.apiUrl}/products`).subscribe((result) => {
      result.map((product) => { this._allProducts.push(new Product(product)) });
      this.subjectProducts$.next(this.allProducts);
    })
  }

  /**
   * @name getAllCategories
   * @description API cal to receive categories data + pass in observable
   * @returns void
   */
  public getAllCategories = () => {
    this._allCategories = [];
    this._http.get<Category[]>(`${this.apiUrl}/categories`).subscribe((result) => {
      result.map((category) => { this._allCategories.push(new Category(category)) });
      this.subjectCategories$.next(this.allCategories);
    })
  }

  /**
   * @name allProducts
   * @type getter
   * @returns Array<Product>
   */
  public get allProducts(): Array<Product> {
    return this._allProducts;
  }

  /**
   * @name allCategories
   * @type getter
   * @returns Array<Category>
   */
  public get allCategories(): Array<Category> {
    return this._allCategories;
  }
}
