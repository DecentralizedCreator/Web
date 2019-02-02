import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGoalsComponent } from './profile-goals.component';

describe('ProfileGoalsComponent', () => {
  let component: ProfileGoalsComponent;
  let fixture: ComponentFixture<ProfileGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
