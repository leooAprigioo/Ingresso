import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSessionsAvailableComponent } from './movie-sessions-available.component';

describe('MovieSessionsAvailableComponent', () => {
  let component: MovieSessionsAvailableComponent;
  let fixture: ComponentFixture<MovieSessionsAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSessionsAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSessionsAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
