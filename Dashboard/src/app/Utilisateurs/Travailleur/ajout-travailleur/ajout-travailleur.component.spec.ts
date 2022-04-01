import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTravailleurComponent } from './ajout-travailleur.component';

describe('AjoutTravailleurComponent', () => {
  let component: AjoutTravailleurComponent;
  let fixture: ComponentFixture<AjoutTravailleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutTravailleurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutTravailleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
