import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDateCarouselComponent } from './movie-date-carousel.component';

describe('MovieDateCarouselComponent', () => {
  let component: MovieDateCarouselComponent;
  let fixture: ComponentFixture<MovieDateCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDateCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDateCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
