import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PracticacaidalibreComponent } from './practicacaidalibre.component';

describe('PracticacaidalibreComponent', () => {
  let component: PracticacaidalibreComponent;
  let fixture: ComponentFixture<PracticacaidalibreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticacaidalibreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticacaidalibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
