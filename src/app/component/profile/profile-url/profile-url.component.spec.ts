import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUrlComponent } from './profile-url.component';

describe('ProfileUrlComponent', () => {
  let component: ProfileUrlComponent;
  let fixture: ComponentFixture<ProfileUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
