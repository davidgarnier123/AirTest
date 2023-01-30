import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart : Array<Product> = [];

  constructor() { }

  /**
   * @name addProduct
   * @description add specific product to cart
   * @param product Product
   * @returns void
   */
  addProduct = (product: Product): void => {
    this._cart.push(product);
  }

  /**
   * @name removeProduct
   * @description remove specific product in cart using his id
   * @param product Product
   * @returns void
   */
  removeProduct = (product: Product): void => {
    this._cart = this._cart.filter(p => p.id !== product.id);
  }

  /**
   * @name cart
   * @type getter
   * @description return the cart
   * @returns Array<Product>
   */
  public get cart (): Array<Product> {
    return this._cart;
  }

  /**
   * @name total
   * @type getter
   * @description return total of products in cart formatted with coma
   * @returns string
   */
  public get total (): string {
    let total = 0;
    this.cart.map( (product) => { total += Number(product.price)})
    return Number(total).toLocaleString();
  }

  /**
   * @name removeAllProducts
   * @description remove products, reset array
   * @returns void
   */
  public removeAllProducts = (): void => {
    this._cart = [];
  }
}
