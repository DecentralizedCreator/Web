import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMetaComponent } from './profile-meta.component';

describe('ProfileMetaComponent', () => {
  let component: ProfileMetaComponent;
  let fixture: ComponentFixture<ProfileMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
