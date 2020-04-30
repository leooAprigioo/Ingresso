import { Component, OnInit } from '@angular/core';
import Popper from 'popper.js';
import { faSortDown, faExclamation } from '@fortawesome/free-solid-svg-icons'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingresso } from 'src/app/models/ingresso';
import { Pedido } from 'src/app/models/pedido';
import { TipoPagamento } from 'src/app/models/tipo_pagamento';
import { Router, ActivatedRoute } from '@angular/router';

(window as any).Popper = Popper;
declare var $: any;
@Component({
  selector: 'app-ticket-payment',
  templateUrl: './ticket-payment.component.html',
  styleUrls: ['./ticket-payment.component.css']
})
export class TicketPaymentComponent implements OnInit {

  faSortDown = faSortDown;
  faExclamation = faExclamation;

  public creditCardForm: FormGroup;
  public debitCardForm: FormGroup;

  public tickets: Ingresso[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.buildCreditCardForm();
    this.buildDebitCardForm();

    if (history.state.data) {
      this.tickets = history.state.data;
    }

  }

  buildCreditCardForm() {
    this.creditCardForm = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', [Validators.required, Validators.maxLength(19), Validators.minLength(16)]],
      cvc: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
      parcel: ['1', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required]
    });
  }

  buildDebitCardForm() {
    this.debitCardForm = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', [Validators.required, Validators.maxLength(19), Validators.minLength(16)]],
      cvc: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
      month: ['', Validators.required],
      year: ['', Validators.required]
    });
  }

  submitCreditCard() {
    console.log(this.creditCardForm)
    if (!this.creditCardForm.valid) {
      return false;
    }

    let order = this.buildOrder('credit', this.creditCardForm);
    this.confirmPayment(order)

  }

  submitDebitCard() {
    console.log(this.debitCardForm)
    if (!this.debitCardForm.valid) {
      return false;
    }

    let order = this.buildOrder('debit', this.debitCardForm);
    this.confirmPayment(order)

  }

  submitBank() {
    let order = this.buildOrder('bank');
    this.confirmPayment(order)
  }

  getTotalPrice() {
    let total = 0;
    this.tickets.forEach(ticket => {
      total += ticket.tipo_ingresso.preco;
    })

    return total;
  }

  confirmPayment(order: Pedido) {
    this.router.navigate(['../confirm'], {state: {data: order}, relativeTo: this.activatedRoute})
  }

  private getLastFourNumbersFromCard(value: string) {
    return parseInt(value.substr(11), 10);
  }

  private buildOrder(paymentType: string, form?: FormGroup) {
    let order = new Pedido();

    order.ingressos = this.tickets;
    order.dataPedido = new Date();
    order.totalPagamento = this.getTotalPrice();
    console.log(form)
    switch (paymentType) {
      case 'credit':
        order.dadosPagamento.finalCartao = this.getLastFourNumbersFromCard(form.controls.number.value)
        order.dadosPagamento.nomePagador = form.controls.name.value;
        order.dadosPagamento.parcelas = form.controls.parcel.value;
        order.dadosPagamento.tipoPagamento = new TipoPagamento(1, 'Crédito')
        break;
      case 'debit':
        order.dadosPagamento.finalCartao = this.getLastFourNumbersFromCard(form.controls.number.value)
        order.dadosPagamento.nomePagador = form.controls.name.value;
        order.dadosPagamento.parcelas = 1;
        order.dadosPagamento.tipoPagamento = new TipoPagamento(2, 'Débito');
        break;
      case 'bank':
        order.dadosPagamento.tipoPagamento = new TipoPagamento(3, 'Boleto');   
    }

    return order;
    
  }

}
