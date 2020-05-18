import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Sessao } from 'src/app/models/sessao';
import { Session } from 'protractor';
import { Filme } from 'src/app/models/filme';
import { SessaoService } from 'src/app/services/sessao/sessao.service';

@Component({
  selector: 'app-movie-date-carousel',
  templateUrl: './movie-date-carousel.component.html',
  styleUrls: ['./movie-date-carousel.component.css']
})
export class MovieDateCarouselComponent implements OnInit {

  @Input() movie: Filme;
  public sessions: Sessao[] = []

  faChevronRight = faChevronRight;
  moved: number = 0;
  interval : any;

  @ViewChild('sessionDatesElement', { static: false}) sessionDatesElement: ElementRef;
  @ViewChild('sessionElement', { static: false}) posterElement: ElementRef;
  @ViewChild('arrowButtonElement', { static: false}) arrowButtonElement: ElementRef;

  @Output() onSelected: EventEmitter<Date> = new EventEmitter();

  public activated: boolean[] = []

  constructor(
    private sessionService: SessaoService
  ) { }

  ngOnInit() { 
      this.loadSessionDates();
  }

  loadSessionDates() {
    this.sessionService.getDatesByMovie(this.movie).subscribe(sessions => {
      this.sessions = sessions;
      this.buildActivatedItems();
      this.initFirstDate();
    })
  }

  buildActivatedItems() {
    this.sessions.forEach(s => {
      this.activated.push(false);
    })
  }

  moveSessionDates() {
    const context = this;
    this.interval = setInterval(function(){ 
      if (context.checkToStopMove()) {
        context.moved -= 5;
      }
    }, 25);
  }

  stopMoveSessionDates() {
    clearInterval(this.interval);
  }

  checkToStopMove() {
    if (this.moved >= this.calculateSessionDatesLimit()) {
      return true;
    }
    return false;
  }

  calculateSessionDatesLimit() {
    let sessionDateWidth = this.sessions.length * this.posterElement.nativeElement.offsetWidth;
    let arrowButtonWidth = this.arrowButtonElement.nativeElement.offsetWidth;
    let movieListWidth = this.sessionDatesElement.nativeElement.offsetWidth;
    return (movieListWidth - sessionDateWidth - arrowButtonWidth);
  }

  selectDate(sessionDate: Date, activated: number) {
    this.setActivatedSessionDate(activated);
    this.onSelected.emit(sessionDate);
  }

  setActivatedSessionDate(index: number) {
    this.resetActivated();
    this.activated[index] = true;
  }

  resetActivated() {
    this.activated = this.activated.map(s => s = false)
  }

  initFirstDate() {
    if (this.sessions.length > 0) {
      this.selectDate(this.sessions[0].data_horario_inicio, 0);
    }
  }

  getShortDate(session: Sessao) {
      return session.data_horario_inicio.toLocaleDateString([], {day: '2-digit', month: '2-digit'})
  }

  getDistinctDates() {
    let dates = [];
    this.sessions.forEach(session => {

    });
    return dates;
  }

  getWeekDay(session: Sessao) {
    switch (session.data_horario_inicio.getDay()) {
      case 0:
        return 'Dom';
      case 1:
        return 'Seg';
      case 2:
        return 'Ter';
      case 3:
        return 'Qua';
      case 4:
        return 'Qui';
      case 5:
        return 'Sex';
      case 6:
        return 'Sab'
    }
  }

}
