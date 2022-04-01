import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ajout2SpecialiteComponent } from './ajout2-specialite.component';

describe('Ajout2SpecialiteComponent', () => {
  let component: Ajout2SpecialiteComponent;
  let fixture: ComponentFixture<Ajout2SpecialiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ajout2SpecialiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ajout2SpecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
