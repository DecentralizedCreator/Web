import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAboutComponent } from './index-about.component';

describe('IndexAboutComponent', () => {
  let component: IndexAboutComponent;
  let fixture: ComponentFixture<IndexAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
