import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Collar2Component } from './collar2.component';

describe('Collar2Component', () => {
  let component: Collar2Component;
  let fixture: ComponentFixture<Collar2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Collar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Collar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
