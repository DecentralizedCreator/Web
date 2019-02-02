import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTiersComponent } from './profile-tiers.component';

describe('ProfileTiersComponent', () => {
  let component: ProfileTiersComponent;
  let fixture: ComponentFixture<ProfileTiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
