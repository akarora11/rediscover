import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackDailogComponent } from './feedback-dailog.component';

describe('FeedbackDailogComponent', () => {
  let component: FeedbackDailogComponent;
  let fixture: ComponentFixture<FeedbackDailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackDailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
