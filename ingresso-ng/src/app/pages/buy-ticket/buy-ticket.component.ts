import { Component, OnInit } from '@angular/core';
import { Step } from 'src/app/models/step';
import { Pedido } from 'src/app/models/pedido';
import { Sessao } from 'src/app/models/sessao';
import { SessaoService } from 'src/app/services/sessao/sessao.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit {

  public steps: Step[] = [];
  public order: Pedido;
  public session: Sessao;

  constructor(
    private sessionService: SessaoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.order = new Pedido();
    this.order.ingressos = [];
    this.buildSteps();

    this.activatedRoute.params.subscribe(param => {
      this.loadSession(param['sessionId']);
    })
  }

  buildSteps() {
    // let typeStep = new Step(1, 'Tipo do ingresso', 'type', null, 'type');
    let seatStep = new Step(1, 'Escolha o lugar', 'seat', null, 'payment');
    let paymentStep = new Step(2, 'Pagamento', 'payment', 'seat', 'confirm');
    let confirmStep = new Step(3, 'Confirmação', 'confirm', 'payment', 'type');

    this.steps.push(seatStep);
    this.steps.push(paymentStep);
    this.steps.push(confirmStep);
    // this.steps.push(typeStep);
  }

  loadSession(id: number) {
    this.sessionService.get(id).subscribe(data => {
      this.session = data;
    })
  }

}
