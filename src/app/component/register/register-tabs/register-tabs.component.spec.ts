import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTabsComponent } from './register-tabs.component';

describe('RegisterTabsComponent', () => {
  let component: RegisterTabsComponent;
  let fixture: ComponentFixture<RegisterTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
