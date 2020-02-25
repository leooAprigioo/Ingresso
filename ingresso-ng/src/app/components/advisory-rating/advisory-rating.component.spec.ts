import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryRatingComponent } from './advisory-rating.component';

describe('AdvisoryRatingComponent', () => {
  let component: AdvisoryRatingComponent;
  let fixture: ComponentFixture<AdvisoryRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisoryRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisoryRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
