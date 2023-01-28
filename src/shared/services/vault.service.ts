import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class VaultService {

  private _tickets: Array<Ticket> = [];
  constructor() { }

  public get tickets () {
    return this._tickets;
  }

  public addTicket = (product: Product) => {
    console.log('add ticket !!');
    console.log(product);
    this._tickets.push(new Ticket('123', 'ticket unique', 1845126512, false))
  }
}
