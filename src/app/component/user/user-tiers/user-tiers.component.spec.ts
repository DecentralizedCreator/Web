import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTiersComponent } from './user-tiers.component';

describe('UserTiersComponent', () => {
  let component: UserTiersComponent;
  let fixture: ComponentFixture<UserTiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
