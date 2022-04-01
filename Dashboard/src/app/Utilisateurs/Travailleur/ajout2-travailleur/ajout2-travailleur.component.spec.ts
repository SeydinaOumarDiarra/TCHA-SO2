import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ajout2TravailleurComponent } from './ajout2-travailleur.component';

describe('Ajout2TravailleurComponent', () => {
  let component: Ajout2TravailleurComponent;
  let fixture: ComponentFixture<Ajout2TravailleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ajout2TravailleurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ajout2TravailleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
