import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Collar1Component } from './collar1.component';

describe('Collar1Component', () => {
  let component: Collar1Component;
  let fixture: ComponentFixture<Collar1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Collar1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Collar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
