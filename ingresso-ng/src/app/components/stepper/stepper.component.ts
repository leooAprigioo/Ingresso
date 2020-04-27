import { Component, OnInit, Input } from '@angular/core';
import { Step } from 'src/app/models/step';
import { trigger, transition, animate, style, group, query, animateChild } from '@angular/animations';
import { Ingresso } from 'src/app/models/ingresso';
import { RouteConfigLoadEnd, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  animations: [
    trigger('changeStep', [
      transition('* <=> *', [
          style({
            transform: 'translateX(300px)',
            opacity: 0,
            height: '100px'
          }),
          animate('50ms', style({height: 'auto'})),
          animate('125ms linear', style({transform: 'translateX(0px)', opacity: 1})),
          animateChild()
      ])
    ])
  ]
})
export class StepperComponent implements OnInit {

  @Input() steps: Step[];
  @Input() data: any;

  public ticket: Ingresso;
  public state: {data: any}
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.loadData();
    
    this.orderByPosition()
  }

  orderByPosition() {
    this.steps.sort(this.order)
  }

  order(a: Step, b: Step) {
    return a.position - b.position;
  }

  loadData() {
    if (!history.state.data) {
      this.state = {data: this.data}
      history.replaceState(this.state, '');
    }

  }

  changeStep(step: Step) {
    
    if (history.state.data) {
      this.router.navigate(['buy-ticket', step.route], {state: {data: history.state.data} }) 
    } else {
      this.router.navigate(['buy-ticket', step.route], {state: this.state})
    }

  }

  checkIsActive(step: Step) {
    let urls = "";
    this.activatedRoute.url.subscribe(url => {
      url.forEach(_ => {
        urls += '/' + _.path
      })
    })
    return this.router.isActive(urls + '/' + step.route, true)
  }

}
