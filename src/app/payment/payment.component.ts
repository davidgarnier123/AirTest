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

  /**
   * @function fakePayment
   * @description simulate payment loading using setTimeout, remove products in cart + add tickets in vault
   * @returns void
   */
  private fakePayment = (): void => {
    setTimeout(() => {
      this.inProgress = !this.inProgress;
      this._cartService.cart.map( (product) => {
        this._vaultService.addTicket(product);
      })
      this._cartService.removeAllProducts();
    }, 5000);
  }

  /**
   * @function closeModal
   * @description close modal itself
   * @returns void
   */
  public closeModal = (): void => {
    this.dialogRef.close();
  }

}
