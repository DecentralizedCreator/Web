import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Email.UsernameComponent } from './email.username.component';

describe('Email.UsernameComponent', () => {
  let component: Email.UsernameComponent;
  let fixture: ComponentFixture<Email.UsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Email.UsernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Email.UsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
