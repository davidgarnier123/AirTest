import { Component } from '@angular/core';
import { Ticket } from 'src/shared/models/ticket';
import { VaultService } from 'src/shared/services/vault.service'; 
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';

@Component({
  selector: 'app-vault',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.less']
})
export class VaultComponent {

  constructor(public _vaultService: VaultService, public matDialog: MatDialog) {

  }

  public openTicket = (ticket: Ticket) => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.data = ticket;
    dialogConfig.panelClass = ['customDialog'];
    const modalDialog = this.matDialog.open(TicketDetailsComponent, dialogConfig);
  }
}
