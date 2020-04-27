import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyTicketComponent } from './buy-ticket.component';
import { StepperModule } from 'src/app/components/stepper/stepper.module';
import { TicketSeatComponent } from './ticket-seat/ticket-seat.component';
import { TicketTypeComponent } from './ticket-type/ticket-type.component';
import { SeatItemComponent } from './ticket-seat/seat-item/seat-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [BuyTicketComponent, TicketSeatComponent, TicketTypeComponent, SeatItemComponent],
  imports: [
    CommonModule,
    StepperModule,
    FontAwesomeModule

  ],
  exports: [
    BuyTicketComponent,
    TicketSeatComponent,
    TicketTypeComponent,
  ]
})
export class BuyTicketModule { }
