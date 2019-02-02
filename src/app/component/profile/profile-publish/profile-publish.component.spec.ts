import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePublishComponent } from './profile-publish.component';

describe('ProfilePublishComponent', () => {
  let component: ProfilePublishComponent;
  let fixture: ComponentFixture<ProfilePublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
