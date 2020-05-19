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
  public order: Pedido

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.buildCreditCardForm();
    this.buildDebitCardForm();

    if (history.state.data) {
      this.order = history.state.data;
      console.log(this.order);
      this.tickets = this.order.ingressos;
    }

  }

  buildCreditCardForm() {
    this.creditCardForm = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', [Validators.required, Validators.maxLength(19), Validators.minLength(16)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
      parcel: ['1', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required]
    });
  }

  buildDebitCardForm() {
    this.debitCardForm = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', [Validators.required, Validators.maxLength(19), Validators.minLength(16)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
      month: ['', Validators.required],
      year: ['', Validators.required]
    });
  }

  submitCreditCard() {
    if (!this.creditCardForm.valid) {
      return false;
    }

    this.buildOrder('credit', this.creditCardForm);
    this.confirmPayment();

  }

  submitDebitCard() {
    if (!this.debitCardForm.valid) {
      return false;
    }

    this.buildOrder('debit', this.debitCardForm);
    this.confirmPayment();

  }

  submitBank() {
    this.buildOrder('bank');
    this.confirmPayment();
  }

  getTotalPrice() {
    let total = 0;
    this.tickets.forEach(ticket => {
      total += ticket.tipo_ingresso.preco;
    })

    return total;
  }

  confirmPayment() {
    this.router.navigate(['../confirm'], {state: {data: this.order}, relativeTo: this.activatedRoute})
  }

  private getLastFourNumbersFromCard(value: string) {
    return parseInt(value.substr(14).replace(/[.]/g, ''), 10);
  }

  private buildOrder(paymentType: string, form?: FormGroup) {
    switch (paymentType) {
      case 'credit':
        this.order.dadosPagamento.finalCartao = this.getLastFourNumbersFromCard(form.controls.number.value)
        this.order.dadosPagamento.nomePagador = form.controls.name.value;
        this.order.dadosPagamento.parcelas = form.controls.parcel.value;
        this.order.dadosPagamento.tipoPagamento = new TipoPagamento(1, 'Crédito')
        this.order.dadosPagamento.cvv = form.controls.cvv.value;
        this.order.dadosPagamento.mes = form.controls.month.value;
        this.order.dadosPagamento.ano = form.controls.year.value;
        break;
      case 'debit':
        this.order.dadosPagamento.finalCartao = this.getLastFourNumbersFromCard(form.controls.number.value)
        this.order.dadosPagamento.nomePagador = form.controls.name.value;
        this.order.dadosPagamento.parcelas = 1;
        this.order.dadosPagamento.tipoPagamento = new TipoPagamento(2, 'Débito');
        break;
      case 'bank':
        this.order.dadosPagamento.tipoPagamento = new TipoPagamento(3, 'Boleto');   
    }
    
  }

}
