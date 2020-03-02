import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.css']
})
export class SessionFormComponent implements OnInit {

  @Input() editMode: boolean;
  @Output() submit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
