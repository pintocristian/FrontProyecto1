import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaCalComponent } from './prueba-cal.component';

describe('PruebaCalComponent', () => {
  let component: PruebaCalComponent;
  let fixture: ComponentFixture<PruebaCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
