import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class VaultService {

  private _tickets: Array<Ticket> = [];
  constructor() { 
  }

  public get tickets () {
    return this._tickets;
  }

  /**
   * @name addTicket
   * @description create fake ticket
   * @param product Product
   * @returns void
   */
  public addTicket = (product: Product): void => {
    // 1 = titre unitaire
    // 3 = abonnements
    // 2 = parking+transport
    if (product.category_id === '3') {
      this._tickets.push(new Ticket('123', product.label, 1680091674, false, 'abo'))
    } else if (product.category_id === '1' || product.category_id === '2') {
      this._tickets.push(new Ticket('123', product.label, 1680091674, false, 'ticket'))
    }
  }
}
