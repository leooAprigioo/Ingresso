import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() editMode: boolean;
  @Output() submit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
