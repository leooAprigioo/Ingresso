import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketSeatComponent } from './ticket-seat.component';

describe('TicketSeatComponent', () => {
  let component: TicketSeatComponent;
  let fixture: ComponentFixture<TicketSeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketSeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
