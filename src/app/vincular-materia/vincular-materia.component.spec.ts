import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VincularMateriaComponent } from './vincular-materia.component';

describe('VincularMateriaComponent', () => {
  let component: VincularMateriaComponent;
  let fixture: ComponentFixture<VincularMateriaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VincularMateriaComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VincularMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
