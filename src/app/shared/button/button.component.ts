import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent {

  // text input is the text show in button
  @Input() text: any;
  // callback input is the parent's function triggered when user click on button
  @Input() callback: any;
  // the type of button to draw => 'cart', 'store', 'payment'
  @Input() type: any;
}
