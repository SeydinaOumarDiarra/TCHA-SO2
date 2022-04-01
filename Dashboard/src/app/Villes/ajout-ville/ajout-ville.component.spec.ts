import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutVilleComponent } from './ajout-ville.component';

describe('AjoutVilleComponent', () => {
  let component: AjoutVilleComponent;
  let fixture: ComponentFixture<AjoutVilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutVilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
