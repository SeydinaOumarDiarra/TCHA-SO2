import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorbeilSpecialiteComponent } from './corbeil-specialite.component';

describe('CorbeilSpecialiteComponent', () => {
  let component: CorbeilSpecialiteComponent;
  let fixture: ComponentFixture<CorbeilSpecialiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorbeilSpecialiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorbeilSpecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
