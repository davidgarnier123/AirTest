import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Ticket } from 'src/shared/models/ticket';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.less']
})
export class TicketDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public ticket: Ticket) {
  }

  ngOnInit() {
  }
}
