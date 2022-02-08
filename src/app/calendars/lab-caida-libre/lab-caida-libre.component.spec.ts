import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LabCaidaLibreComponent } from './lab-caida-libre.component';

describe('LabCaidaLibreComponent', () => {
  let component: LabCaidaLibreComponent;
  let fixture: ComponentFixture<LabCaidaLibreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LabCaidaLibreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabCaidaLibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
