import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyTicketComponent } from './buy-ticket.component';
import { StepperModule } from 'src/app/components/stepper/stepper.module';
import { TicketSeatComponent } from './ticket-seat/ticket-seat.component';
import { TicketTypeComponent } from './ticket-type/ticket-type.component';
import { SeatItemComponent } from './ticket-seat/seat-item/seat-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TicketPaymentComponent } from './ticket-payment/ticket-payment.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';



@NgModule({
  declarations: [BuyTicketComponent, TicketSeatComponent, TicketTypeComponent, SeatItemComponent, TicketPaymentComponent, ConfirmOrderComponent],
  imports: [
    CommonModule,
    StepperModule,
    FontAwesomeModule,
    FormsModule,
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    BuyTicketComponent,
    TicketSeatComponent,
    TicketTypeComponent,
    TicketPaymentComponent,
    ConfirmOrderComponent
  ]
})
export class BuyTicketModule { }
