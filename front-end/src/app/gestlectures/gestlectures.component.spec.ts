import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestLecturesComponent } from './guestlectures.component';

describe('guestlecturescomponent', () => {
  let component: GuestlecturesComponent;
  let fixture: ComponentFixture<GuestlecturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestlecturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestlecturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

