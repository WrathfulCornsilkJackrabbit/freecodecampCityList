/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CityTableUiComponent } from './city-table-ui.component';

describe('CityTableUiComponent', () => {
  let component: CityTableUiComponent;
  let fixture: ComponentFixture<CityTableUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityTableUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityTableUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
