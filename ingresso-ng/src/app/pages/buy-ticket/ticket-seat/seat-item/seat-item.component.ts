import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { Tipo_Ingresso } from 'src/app/models/tipo_ingresso';
import { Ingresso } from 'src/app/models/ingresso';
import { iSelectedSeat } from 'src/app/interfaces/iSelectedSeat';
declare var $: any;
@Component({
  selector: 'app-seat-item',
  templateUrl: './seat-item.component.html',
  styleUrls: ['./seat-item.component.css']
})
export class SeatItemComponent implements OnInit {

  public faSquare = faSquare;

  public selectedType: Tipo_Ingresso;
  @Input() selectedSeat: boolean = false;

  @Input() position: string;
  @Input() ticketType: Tipo_Ingresso[];
  @Input() available: boolean;

  @Output() onSelect: EventEmitter<iSelectedSeat> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.position)
  }

  openModal() {
    if (this.available) {
      $('#seatItemModal' + this.position).modal('show')
    }
  }

  closeModal() {
    $('#seatItemModal' + this.position).modal('hide')
  }

  selectType(type: Tipo_Ingresso) {
    this.selectedType = type;
  }

  selected(selected: boolean) {
    this.selectedSeat = selected;
    this.closeModal();

    let data = {
      selected: selected,
      ticket: this.buildTicket()
    }

    this.onSelect.emit(data);
    console.log(this.selectedSeat)
    console.log(this.position);
    console.log(this.selectedType)
  }

  buildTicket(): Ingresso {
    let ticket = new Ingresso();

    ticket.tipo_ingresso = this.selectedType;
    ticket.poltrona = this.position;

    return ticket;
  }
}
