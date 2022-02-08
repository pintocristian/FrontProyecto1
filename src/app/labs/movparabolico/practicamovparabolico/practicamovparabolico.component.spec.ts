import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PracticamovparabolicoComponent } from './practicamovparabolico.component';

describe('PracticamovparabolicoComponent', () => {
  let component: PracticamovparabolicoComponent;
  let fixture: ComponentFixture<PracticamovparabolicoComponent>;

  beforeEach(waitForAsync(() => {
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
