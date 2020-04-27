import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyTicketComponent } from './buy-ticket.component';
import { StepperModule } from 'src/app/components/stepper/stepper.module';
import { TicketSeatComponent } from './ticket-seat/ticket-seat.component';
import { TicketTypeComponent } from './ticket-type/ticket-type.component';



@NgModule({
  declarations: [BuyTicketComponent, TicketSeatComponent, TicketTypeComponent],
  imports: [
    CommonModule,
    StepperModule
  ],
  exports: [
    BuyTicketComponent,
    TicketSeatComponent,
    TicketTypeComponent
  ]
})
export class BuyTicketModule { }
