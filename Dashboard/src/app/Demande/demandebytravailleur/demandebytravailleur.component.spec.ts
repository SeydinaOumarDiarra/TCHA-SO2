import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandebytravailleurComponent } from './demandebytravailleur.component';

describe('DemandebytravailleurComponent', () => {
  let component: DemandebytravailleurComponent;
  let fixture: ComponentFixture<DemandebytravailleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandebytravailleurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandebytravailleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
