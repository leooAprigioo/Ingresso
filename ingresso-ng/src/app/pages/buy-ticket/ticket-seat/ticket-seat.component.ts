import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-seat',
  templateUrl: './ticket-seat.component.html',
  styleUrls: ['./ticket-seat.component.css']
})
export class TicketSeatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(history.state)
  }

}
