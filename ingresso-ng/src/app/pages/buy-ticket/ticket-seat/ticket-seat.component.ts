import { Component, OnInit } from '@angular/core';
import { Ingresso } from 'src/app/models/ingresso';
import { SalaService } from 'src/app/services/sala/sala.service';
import { Sala } from 'src/app/models/sala';
import Popper from 'popper.js';
import { Tipo_Ingresso } from 'src/app/models/tipo_ingresso';
import { TipoIngressoService } from 'src/app/services/tipo_ingresso/tipo-ingresso.service';
import { SessaoService } from 'src/app/services/sessao/sessao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sessao } from 'src/app/models/sessao';
import { iSelectedSeat } from 'src/app/interfaces/iSelectedSeat';
import { trigger, transition, style, animate } from '@angular/animations';
import { Pedido } from 'src/app/models/pedido';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

(window as any).Popper = Popper;
declare var $: any;
@Component({
  selector: 'app-ticket-seat',
  templateUrl: './ticket-seat.component.html',
  styleUrls: ['./ticket-seat.component.css'],
  animations: [
    trigger(
      'showCanvas', [
        transition(':enter', [
          style({
            opacity: 0,
            minHeight: '0px',
            maxHeight: '0px'
          }),
          animate('1s', style({
            opacity: 1,
            minHeight: '20rem',
            maxHeight: '999999rem'
          }))
        ])
      ]
    )
  ]
})
export class TicketSeatComponent implements OnInit {

  public tickets: Ingresso[] = [];
  public room: Sala;
  public seatsPosition: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  public ticketTypes: Tipo_Ingresso[] = [];
  public session: Sessao;
  public unavailableSeats: string[] = [];
  public order: Pedido;

  constructor(
    private salaService: SalaService,
    private ticketTypeService: TipoIngressoService,
    private sessionService: SessaoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {

    if (history.state.data) {
      this.order = history.state.data;
      this.tickets = this.order.ingressos;
    }

    this.loadTicketType()

    this.activatedRoute.parent.params.subscribe(param => {
      this.loadSession(param['sessionId']);
    })

  }

  loadSession(id: number) {
    this.sessionService.get(id).subscribe(data => {
      this.session = data;
      this.loadRoom();
      this.loadUnavailableSeat();
    })
  }

  loadRoom() {
    this.salaService.get(this.session.sala_id.id).subscribe(data => {
      this.room = data;
    });
  }

  loadTicketType() {
    this.ticketTypeService.list().subscribe(type => {
      this.ticketTypes = type;
    })
  }

  loadUnavailableSeat() {
    this.sessionService.getUnavailableSeat(this.session).subscribe(data => {
      this.unavailableSeats = data;
    })
  }
  
  onSelectSeat(selectedSeat: iSelectedSeat) {
    selectedSeat.selected ? this.addTicket(selectedSeat) : this.removeTicket(selectedSeat);
  }

  removeTicket(selectedSeat: iSelectedSeat) {
    this.tickets = this.tickets.filter(ticket => ticket.poltrona != selectedSeat.ticket.poltrona);
  }

  addTicket(selectedSeat: iSelectedSeat) {
    let index = this.tickets.findIndex(ticket => ticket.poltrona == selectedSeat.ticket.poltrona);
    if (index > -1) {
      this.tickets[index].tipo_ingresso = selectedSeat.ticket.tipo_ingresso
    } else {
      this.tickets.push(selectedSeat.ticket);
    }
  }

  checkIsAvailable(position: string) {
    return !this.unavailableSeats.includes(position);
  }

  checkIsSelected(position: string) {
    return this.tickets.find(ticket => ticket.poltrona == position);
  }

  getRow() {
    return this.seatsPosition.slice(0, this.room.quantidade_fileira);
  }

  getSeats() {
    return [...Array(this.room.quantidade_assento).keys()];
  }

  getTotalPrice() {
    let total = 0;
    this.tickets.forEach(ticket => {
      total += ticket.tipo_ingresso.preco;
    })

    return total;
  }

  onSubmit() {
    this.buildTickets();

    this.router.navigate(['../payment'], {state: {data: this.order}, relativeTo: this.activatedRoute})
  }

  buildTickets() {
    this.tickets = this.tickets.map(ticket => {
      ticket.sessao = this.session;
      return ticket;
    });

    let order = new Pedido();

    order.ingressos = this.tickets;
    order.usuario = this.authenticationService.getCurrentUser();
    order.dataPedido = new Date();
    order.totalPagamento = this.getTotalPrice();
    console.log(order);

    this.order = order;
  }
}
