import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketTypeFormComponent } from './ticket-type-form.component';

describe('TicketTypeFormComponent', () => {
  let component: TicketTypeFormComponent;
  let fixture: ComponentFixture<TicketTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
