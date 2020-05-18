import { Component, OnInit, ViewChild, ElementRef, OnChanges, Input } from '@angular/core';

import { Sessao } from 'src/app/models/sessao';
import { iSessionRoom } from 'src/app/interfaces/iSessionRoom';
import { iSessionMovieFilter } from 'src/app/interfaces/iSessionMovieFilter';
import { Filme } from 'src/app/models/filme';

@Component({
  selector: 'app-movie-session',
  templateUrl: './movie-session.component.html',
  styleUrls: ['./movie-session.component.css']
})
export class MovieSessionComponent implements OnInit {

  @Input() sessions: Sessao[];
  @Input() movie: Filme;
  public sessionsByDate: iSessionRoom[];
  public filter: iSessionMovieFilter = {is3d: false, is2d: false, isLeg: false, isDub: false};

  constructor() { }

  ngOnInit() {
    // this.loadSessions();
  }

  loadSessions() { }

  filterSessionsByDate(date: Date) {
    return this.sessions.filter(session => session.data_horario_inicio.getDate() === date.getDate() && session.data_horario_inicio.getMonth() === date.getMonth());
  }

  filterSessions(filter: iSessionMovieFilter) {
    this.filter = filter
  }

  changeMovieSessions(date: Date) {

    let rooms = [];

    let byDate = this.filterSessionsByDate(date);

    byDate.forEach(session => {
      if (!rooms.includes(session.sala_id.nome)) {
        rooms.push(session.sala_id.nome);
      }
    });

    this.sessionsByDate = rooms.map(room => {
      return {
        roomName: room,
        sessions: byDate.filter(session => session.sala_id.nome === room)
      }
    });

  }
  
}
