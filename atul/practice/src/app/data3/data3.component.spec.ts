import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Data3Component } from './data3.component';

describe('Data3Component', () => {
  let component: Data3Component;
  let fixture: ComponentFixture<Data3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Data3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Data3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
