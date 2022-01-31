import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticaleyhookeComponent } from './practicaleyhooke.component';

describe('PracticaleyhookeComponent', () => {
  let component: PracticaleyhookeComponent;
  let fixture: ComponentFixture<PracticaleyhookeComponent>;

  beforeEach(async(() => {
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
