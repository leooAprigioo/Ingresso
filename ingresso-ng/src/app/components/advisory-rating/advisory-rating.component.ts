import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-advisory-rating',
  templateUrl: './advisory-rating.component.html',
  styleUrls: ['./advisory-rating.component.css']
})
export class AdvisoryRatingComponent implements OnInit {

  @Input() advisoryRating: number;

  advisoryRatingStyle: object = {
    0: {
      style: "green-advisory",
    },
    10: {
      style: "blue-advisory",
    },
    12: {
      style: "yellow-advisory",
    },
    14: {
      style: "orange-advisory",
    },
    16: {
      style: "red-advisory",
    },
    18: {
      style: "black-advisory"
    }
  };

  constructor() { }

  ngOnInit() {
  }

  getAdvisoryRatingStyle() {
    return this.advisoryRatingStyle[this.advisoryRating].style;
  }

}
