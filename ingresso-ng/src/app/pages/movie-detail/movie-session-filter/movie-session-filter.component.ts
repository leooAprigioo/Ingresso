import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { iSessionMovieFilter } from 'src/app/interfaces/iSessionMovieFilter';

@Component({
  selector: 'app-movie-session-filter',
  templateUrl: './movie-session-filter.component.html',
  styleUrls: ['./movie-session-filter.component.css']
})
export class MovieSessionFilterComponent implements OnInit {

  @Output() onFiltered: EventEmitter<iSessionMovieFilter> = new EventEmitter();
  public sessionMovieFilter: iSessionMovieFilter = {
    is2d: false,
    is3d: false,
    isDub: false,
    isLeg: false
  }

  constructor() { }

  ngOnInit() {
  }

  emitFilter() {
    console.log(this.sessionMovieFilter);
    this.onFiltered.emit(this.sessionMovieFilter);
  }

}
