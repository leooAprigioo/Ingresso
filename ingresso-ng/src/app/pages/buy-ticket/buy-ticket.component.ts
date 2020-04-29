import { Component, OnInit } from '@angular/core';
import { Step } from 'src/app/models/step';
import { Ingresso } from 'src/app/models/ingresso';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit {

  public steps: Step[] = [];
  public ticket: Ingresso[] = [];

  constructor() { }

  ngOnInit() {
    this.buildSteps();
  }

  buildSteps() {
    // let typeStep = new Step(1, 'Tipo do ingresso', 'type', null, 'type');
    let seatStep = new Step(1, 'Escolha o lugar', 'seat', null, 'type');
    let paymentStep = new Step(2, 'Pagamento', 'type', null, 'type');
    let confirmStep = new Step(3, 'Confirmação', 'type', null, 'type');

    this.steps.push(seatStep);
    this.steps.push(paymentStep);
    this.steps.push(confirmStep);
    // this.steps.push(typeStep);
  }

}
