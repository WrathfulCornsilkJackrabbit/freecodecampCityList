/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CityHeroUiComponent } from './city-hero-ui.component';

describe('CityHeroUiComponent', () => {
  let component: CityHeroUiComponent;
  let fixture: ComponentFixture<CityHeroUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityHeroUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityHeroUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
