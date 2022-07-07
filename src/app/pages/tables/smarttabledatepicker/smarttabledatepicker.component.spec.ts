import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmarttabledatepickerComponent } from './smarttabledatepicker.component';

describe('SmarttabledatepickerComponent', () => {
  let component: SmarttabledatepickerComponent;
  let fixture: ComponentFixture<SmarttabledatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmarttabledatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmarttabledatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
