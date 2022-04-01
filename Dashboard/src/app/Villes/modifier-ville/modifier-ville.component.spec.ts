import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierVilleComponent } from './modifier-ville.component';

describe('ModifierVilleComponent', () => {
  let component: ModifierVilleComponent;
  let fixture: ComponentFixture<ModifierVilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierVilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
