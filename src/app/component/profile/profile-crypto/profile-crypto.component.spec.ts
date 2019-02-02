import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCryptoComponent } from './profile-crypto.component';

describe('ProfileCryptoComponent', () => {
  let component: ProfileCryptoComponent;
  let fixture: ComponentFixture<ProfileCryptoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCryptoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
