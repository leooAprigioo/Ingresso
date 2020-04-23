import { Component, OnInit, Input } from '@angular/core';
import { iErrorLabel } from 'src/app/interfaces/iErrorLabel';

@Component({
  selector: 'app-error-label',
  templateUrl: './error-label.component.html',
  styleUrls: ['./error-label.component.css']
})
export class ErrorLabelComponent implements OnInit {

  @Input() errorLabel: iErrorLabel[];

  constructor() { }

  ngOnInit() {
  }

  getErrors() {
    return this.errorLabel.findIndex((value: iErrorLabel) => value.status);
  }

}
