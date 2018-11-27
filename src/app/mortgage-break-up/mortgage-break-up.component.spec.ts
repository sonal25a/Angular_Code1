import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageBreakUpComponent } from './mortgage-break-up.component';

describe('MortgageBreakUpComponent', () => {
  let component: MortgageBreakUpComponent;
  let fixture: ComponentFixture<MortgageBreakUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageBreakUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageBreakUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
