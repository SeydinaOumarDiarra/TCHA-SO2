import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorbeilUtilisateurComponent } from './corbeil-utilisateur.component';

describe('CorbeilUtilisateurComponent', () => {
  let component: CorbeilUtilisateurComponent;
  let fixture: ComponentFixture<CorbeilUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorbeilUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorbeilUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
