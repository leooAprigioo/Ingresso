import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-room-form',
  templateUrl: './movie-room-form.component.html',
  styleUrls: ['./movie-room-form.component.css']
})
export class MovieRoomFormComponent implements OnInit {

  @Input() editMode: boolean;
  @Output() submit = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
