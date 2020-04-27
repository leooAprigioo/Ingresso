import { Component, OnInit } from '@angular/core';
import { Ingresso } from 'src/app/models/ingresso';
import { SalaService } from 'src/app/services/sala/sala.service';
import { Sala } from 'src/app/models/sala';

@Component({
  selector: 'app-ticket-seat',
  templateUrl: './ticket-seat.component.html',
  styleUrls: ['./ticket-seat.component.css']
})
export class TicketSeatComponent implements OnInit {

  public tickets: Ingresso[]
  public room: Sala;

  constructor(
    private salaService: SalaService
  ) { }

  ngOnInit() {
    if (history.state.data) {
      this.tickets = history.state.data;
      if (this.tickets.length > 0) {
        this.loadRoom()
      }
      console.log(this.tickets)
    }
  }

  loadRoom() {
    this.salaService.get(this.tickets[0].sessao.sala_id.id).subscribe(data => {
      this.room = data;
      console.log(this.room)
    });
  }
}
