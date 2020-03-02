import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMovieRoomComponent } from './create-movie-room.component';

describe('CreateMovieRoomComponent', () => {
  let component: CreateMovieRoomComponent;
  let fixture: ComponentFixture<CreateMovieRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMovieRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMovieRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
