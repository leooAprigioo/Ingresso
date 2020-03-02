import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMovieRoomComponent } from './edit-movie-room.component';

describe('EditMovieRoomComponent', () => {
  let component: EditMovieRoomComponent;
  let fixture: ComponentFixture<EditMovieRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMovieRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMovieRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
