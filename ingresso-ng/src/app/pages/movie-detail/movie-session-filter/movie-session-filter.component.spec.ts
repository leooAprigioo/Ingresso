import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSessionFilterComponent } from './movie-session-filter.component';

describe('MovieSessionFilterComponent', () => {
  let component: MovieSessionFilterComponent;
  let fixture: ComponentFixture<MovieSessionFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSessionFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSessionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
