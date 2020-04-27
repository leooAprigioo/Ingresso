import { Component, OnInit } from '@angular/core';
import { Ingresso } from 'src/app/models/ingresso';
import { TipoIngressoService } from 'src/app/services/tipo_ingresso/tipo-ingresso.service';
import { Tipo_Ingresso } from 'src/app/models/tipo_ingresso';
import { iTicketQuantity } from 'src/app/interfaces/iTicketQuantity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-type',
  templateUrl: './ticket-type.component.html',
  styleUrls: ['./ticket-type.component.css']
})
export class TicketTypeComponent implements OnInit {

  public ticket: Ingresso[];
  public ticketType: Tipo_Ingresso[];
  public selectTickets: iTicketQuantity[] = [];

  constructor(
    private tipoIngressoService: TipoIngressoService,
    private router: Router,
  ) { }

  ngOnInit() {
    if (history.state.data) {
      this.ticket = history.state.data;
      this.buildTickets();
    }

    this.loadTicketType();
    console.log(this.ticket);
    console.log(history.state)
  }

  buildTickets() {
    this.ticket.forEach((ticket, i, self) => {
      this.addQuantity(this.getQuantity(self, ticket.tipo_ingresso), ticket.tipo_ingresso);
    });
  }

  getQuantity(tickets: Ingresso[], type: Tipo_Ingresso) {
    return tickets.filter(ticket => ticket.tipo_ingresso.id == type.id).length;
  }

  loadTicketType() {
    this.tipoIngressoService.list().subscribe(data => {
      this.ticketType = data;
    })
  }

  addQuantity(quantity: number, ticketType: Tipo_Ingresso) {
    let index = this.selectTickets.findIndex(ticket => ticket.id == ticketType.id);
    if (index > -1) {
      this.selectTickets[index].quantity = quantity, 10;
    } else {
      this.selectTickets.push(
        {
          id: ticketType.id,
          quantity: quantity,
          tickets: ticketType
        }
      )
    }
  }

  getTotalPrice() {
    let total = 0;
    this.selectTickets.forEach(ticket => {
      total += (ticket.quantity * ticket.tickets.preco);
    })

    return total;
  }

  submit() {
    let tickets = []

    this.selectTickets.forEach(ticket => {

      for (let i = 1; i <= ticket.quantity; i++) {
        let newTicket = new Ingresso();
        newTicket.data_compra = new Date();
        newTicket.tipo_ingresso = ticket.tickets;
        tickets.push(newTicket)    
      }
    });
  
    history.replaceState({data: tickets}, '');
    this.router.navigate(['/buy-ticket', 'seat'], {state: {data: tickets}})
  
  }

}
