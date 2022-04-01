import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTravailleurComponent } from './modifier-travailleur.component';

describe('ModifierTravailleurComponent', () => {
  let component: ModifierTravailleurComponent;
  let fixture: ComponentFixture<ModifierTravailleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierTravailleurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierTravailleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
