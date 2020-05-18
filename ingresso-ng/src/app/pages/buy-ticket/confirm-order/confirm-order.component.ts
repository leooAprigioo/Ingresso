import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { Sessao } from 'src/app/models/sessao';
import { PedidoService } from 'src/app/services/pedido/pedido.service';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {

  public order: Pedido;

  constructor(
    private orderService: PedidoService
  ) { }

  ngOnInit() {
    if (history.state.data) {
      this.order = history.state.data;
    }
  }

  getSession(): Sessao {
    return this.order.ingressos[0].sessao;
  }

  confirm() {
    this.orderService.newOrder(this.order).subscribe(data => {
    })
  }

}
