import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { Sessao } from 'src/app/models/sessao';
import { Cielo } from 'src/app/models/cieloApi';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { PagamentoService } from 'src/app/services/pagamento/pagamento.service';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {

  public order: Pedido;
  public informaçõesPagamento: Cielo;
  constructor(
    private orderService: PedidoService,
    private pagamentoService: PagamentoService
  ) { 
    this.informaçõesPagamento = new Cielo();
  }

  ngOnInit() {
    if (history.state.data) {
      this.order = history.state.data;
    }
    this.preencherInformações()
  }

  preencherInformações(){
    this.informaçõesPagamento.ano = this.order.dadosPagamento.ano;
    this.informaçõesPagamento.cvv = this.order.dadosPagamento.cvv;
    this.informaçõesPagamento.finalCartao = this.order.dadosPagamento.finalCartao;
    this.informaçõesPagamento.mes = this.order.dadosPagamento.mes;
    this.informaçõesPagamento.nomePagador = this.order.dadosPagamento.nomePagador;
    this.informaçõesPagamento.parcelas = this.order.dadosPagamento.parcelas;
    this.informaçõesPagamento.valor = this.order.totalPagamento;
  }

  getSession(): Sessao {
    return this.order.ingressos[0].sessao;
  }

  confirm() {
    this.enviarParaCielo();
    this.orderService.newOrder(this.order).subscribe(data => {
    })
  }

  enviarParaCielo(){
    this.pagamentoService.post(this.informaçõesPagamento).subscribe(data => {
      console.log(data);
    })
  }

}
