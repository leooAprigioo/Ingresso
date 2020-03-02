import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-movie-room',
  templateUrl: './edit-movie-room.component.html',
  styleUrls: ['./edit-movie-room.component.css']
})
export class EditMovieRoomComponent implements OnInit {

  @Input() editMode: boolean;
  @Output() submit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
