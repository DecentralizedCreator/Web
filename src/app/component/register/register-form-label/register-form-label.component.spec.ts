import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormLabelComponent } from './register-form-label.component';

describe('RegisterFormLabelComponent', () => {
  let component: RegisterFormLabelComponent;
  let fixture: ComponentFixture<RegisterFormLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
