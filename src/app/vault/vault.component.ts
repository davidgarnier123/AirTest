import { Component } from '@angular/core';
import { VaultService } from 'src/shared/services/vault.service'; 

@Component({
  selector: 'app-vault',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.less']
})
export class VaultComponent {

  constructor(public _vaultService: VaultService) {

  }
}
