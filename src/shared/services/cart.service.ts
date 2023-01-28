import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart : Array<Product> = [];

  constructor() { }

  addProduct = (product: Product) => {
    this._cart.push(product);
  }

  removeProduct = (product: Product) => {
    this._cart = this._cart.filter(p => p.id !== product.id);
  }

  public get cart () {
    return this._cart;
  }

  public get total () {
    let total = 0;
    this.cart.map( (product) => { total += product.price})
    return total;
  }

  public removeAllProducts = () => {
    this._cart = [];
  }
}
