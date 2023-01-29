import { Component, OnInit } from '@angular/core';
import { Product } from 'src/shared/models/product';
import { CartService } from 'src/shared/services/cart.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  constructor(public _cartService: CartService, public matDialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  public removeItem = (product: Product) => {
    this._cartService.removeProduct(product);
  }

  public getTotal = () => {
    return this._cartService.total;
  }

  public goToPay = () => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.panelClass = ['customDialog'];
    const modalDialog = this.matDialog.open(PaymentComponent, dialogConfig);
  }

}
