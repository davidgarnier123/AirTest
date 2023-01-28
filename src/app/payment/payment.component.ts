import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CartService } from 'src/shared/services/cart.service';
import { VaultService } from 'src/shared/services/vault.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.less']
})
export class PaymentComponent implements OnInit {
  public inProgress: boolean = true;
  
  constructor(public dialogRef: MatDialogRef<PaymentComponent>, private _cartService: CartService, private _vaultService: VaultService) {

  }

  ngOnInit(): void {
    this.fakePayment();
  }

  private fakePayment = () => {
    setTimeout(() => {
      this.inProgress = !this.inProgress;
      this._cartService.cart.map( (product) => {
        this._vaultService.addTicket(product);
      })
      this._cartService.removeAllProducts();
    }, 5000);
  }

  public closeModal = () => {
    this.dialogRef.close();
  }

}
