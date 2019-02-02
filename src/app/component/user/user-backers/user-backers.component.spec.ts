import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBackersComponent } from './user-backers.component';

describe('UserBackersComponent', () => {
  let component: UserBackersComponent;
  let fixture: ComponentFixture<UserBackersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBackersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBackersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
