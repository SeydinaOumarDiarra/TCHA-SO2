import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorbeilComponent } from './corbeil.component';

describe('CorbeilComponent', () => {
  let component: CorbeilComponent;
  let fixture: ComponentFixture<CorbeilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorbeilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorbeilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
