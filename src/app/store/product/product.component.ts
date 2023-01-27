import { Component, Input } from '@angular/core';
import { Product } from 'src/shared/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent {
  @Input() product: any;
  //public product: Product | undefined = undefined;
}
