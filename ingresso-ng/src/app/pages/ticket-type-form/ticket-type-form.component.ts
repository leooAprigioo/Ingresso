import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ticket-type-form',
  templateUrl: './ticket-type-form.component.html',
  styleUrls: ['./ticket-type-form.component.css']
})
export class TicketTypeFormComponent implements OnInit {

  @Input() editMode: boolean;
  @Output() submit = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

}
