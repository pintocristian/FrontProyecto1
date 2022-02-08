import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PracticaleyhookeComponent } from './practicaleyhooke.component';

describe('PracticaleyhookeComponent', () => {
  let component: PracticaleyhookeComponent;
  let fixture: ComponentFixture<PracticaleyhookeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticaleyhookeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticaleyhookeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
