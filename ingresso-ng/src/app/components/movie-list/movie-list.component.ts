import { Component, OnInit, Input } from '@angular/core';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Filme } from 'src/app/models/filme';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() title: string;
  @Input() movies: Filme[];

  carouselItemSize = 5;

  faChevronRight = faChevronRight;

  constructor() { }

  ngOnInit() {
  }

  getMoviesInSplit() {
    return this.splitMovies()
  }

  splitMovies() {
    let splited = [];
    let index = 0;
    while (index < this.movies.length) {
      splited.push(this.movies.slice(index, index + this.carouselItemSize));
      index += this.carouselItemSize;
    }
    return splited;
  }

}
