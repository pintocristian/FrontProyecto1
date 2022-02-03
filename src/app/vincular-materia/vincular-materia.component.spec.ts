import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VincularMateriaComponent } from './vincular-materia.component';

describe('VincularMateriaComponent', () => {
  let component: VincularMateriaComponent;
  let fixture: ComponentFixture<VincularMateriaComponent>;

  beforeEach(async(() => {
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
