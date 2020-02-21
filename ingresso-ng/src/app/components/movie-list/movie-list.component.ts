import { Component, OnInit } from '@angular/core';

import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  faArrowCircleRight = faArrowCircleRight;

  constructor() { }

  ngOnInit() {
  }

}
