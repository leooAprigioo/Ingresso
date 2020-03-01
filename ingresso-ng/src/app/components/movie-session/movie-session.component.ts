import { Component, OnInit, ViewChild, ElementRef, OnChanges, Input } from '@angular/core';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Session } from 'src/app/models/Session';

@Component({
  selector: 'app-movie-session',
  templateUrl: './movie-session.component.html',
  styleUrls: ['./movie-session.component.css']
})
export class MovieSessionComponent implements OnInit, OnChanges {

  faChevronRight = faChevronRight;
  moved: number = 0;
  interval : any;

  @Input() sessions: Session[];

  @ViewChild('sessionDatesElement', { static: false}) sessionDatesElement: ElementRef;
  @ViewChild('sessionElement', { static: false}) posterElement: ElementRef;
  @ViewChild('arrowButtonElement', { static: false}) arrowButtonElement: ElementRef;

  ngOnChanges() {
    console.log(this.sessionDatesElement.nativeElement.offsetWidth);
  }

  constructor() { }

  ngOnInit() {
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
  

}
