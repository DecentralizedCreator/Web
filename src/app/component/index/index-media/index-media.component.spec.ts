import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMediaComponent } from './index-media.component';

describe('IndexMediaComponent', () => {
  let component: IndexMediaComponent;
  let fixture: ComponentFixture<IndexMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
