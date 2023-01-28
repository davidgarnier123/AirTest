import { Component } from '@angular/core';
import { CartService } from 'src/shared/services/cart.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  constructor (public _cartService: CartService) {

  }

}
