import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRoomFormComponent } from './movie-room-form.component';

describe('MovieRoomFormComponent', () => {
  let component: MovieRoomFormComponent;
  let fixture: ComponentFixture<MovieRoomFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieRoomFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieRoomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
