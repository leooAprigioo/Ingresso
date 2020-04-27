import { Component, OnInit } from '@angular/core';
import { faChair } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-seat-item',
  templateUrl: './seat-item.component.html',
  styleUrls: ['./seat-item.component.css']
})
export class SeatItemComponent implements OnInit {

  public faChair = faChair;

  constructor() { }

  ngOnInit() {
  }

}
