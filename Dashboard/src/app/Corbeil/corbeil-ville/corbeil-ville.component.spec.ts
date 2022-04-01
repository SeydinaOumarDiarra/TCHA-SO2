import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorbeilVilleComponent } from './corbeil-ville.component';

describe('CorbeilVilleComponent', () => {
  let component: CorbeilVilleComponent;
  let fixture: ComponentFixture<CorbeilVilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorbeilVilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorbeilVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
