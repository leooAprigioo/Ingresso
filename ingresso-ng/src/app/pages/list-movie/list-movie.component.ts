import { Component, OnInit } from '@angular/core';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  faTimes = faTimes;
  faEdit = faEdit;

  constructor() { }

  ngOnInit() {
  }

}
