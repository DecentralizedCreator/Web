import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSubsComponent } from './profile-subs.component';

describe('ProfileSubsComponent', () => {
  let component: ProfileSubsComponent;
  let fixture: ComponentFixture<ProfileSubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
