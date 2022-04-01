import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetatilServiceComponent } from './detatil-service.component';

describe('DetatilServiceComponent', () => {
  let component: DetatilServiceComponent;
  let fixture: ComponentFixture<DetatilServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetatilServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetatilServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
