import { Component, Input } from '@angular/core';
import { Product } from 'src/shared/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent {
  @Input() product: any;
  @Input() callback: any;
  @Input() type: any;

  public actionOnProduct = () => {
    this.callback(this.product, this.type)
  }
}
