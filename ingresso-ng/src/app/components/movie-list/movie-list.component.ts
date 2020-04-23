import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Filme } from 'src/app/models/filme';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @ViewChild('movieListElement', { static: false}) movieListElement: ElementRef;
  @ViewChild('posterElement', { static: false}) posterElement: ElementRef;
  @ViewChild('arrowButtonElement', { static: false}) arrowButtonElement: ElementRef;

  moved: number = 0;
  interval : any; 

  @Input() title: string;
  @Input() movies: Filme[];

  speed : number = 15

  faChevronRight = faChevronRight;

  constructor() { }

  ngOnInit() {
  }

  moveSessionDates() {
    const context = this;
    this.interval = setInterval(function(){ 
      if (context.checkToStopMove()) {
        context.moved -= 5;
      }
    }, this.speed);
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
    let posterWidth = this.movies.length * this.posterElement.nativeElement.offsetWidth;
    let arrowButtonWidth = this.arrowButtonElement.nativeElement.offsetWidth;
    let movieListWidth = this.movieListElement.nativeElement.offsetWidth;
    return (movieListWidth - posterWidth - arrowButtonWidth);

    // TODO Calcular o tamanho da lista pelos componentes
  }


}
