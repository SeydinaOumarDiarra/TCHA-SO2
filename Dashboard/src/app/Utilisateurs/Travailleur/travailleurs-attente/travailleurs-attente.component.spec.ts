import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravailleursAttenteComponent } from './travailleurs-attente.component';

describe('TravailleursAttenteComponent', () => {
  let component: TravailleursAttenteComponent;
  let fixture: ComponentFixture<TravailleursAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravailleursAttenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravailleursAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
