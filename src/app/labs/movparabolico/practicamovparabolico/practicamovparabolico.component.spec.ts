import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticamovparabolicoComponent } from './practicamovparabolico.component';

describe('PracticamovparabolicoComponent', () => {
  let component: PracticamovparabolicoComponent;
  let fixture: ComponentFixture<PracticamovparabolicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticamovparabolicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticamovparabolicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
