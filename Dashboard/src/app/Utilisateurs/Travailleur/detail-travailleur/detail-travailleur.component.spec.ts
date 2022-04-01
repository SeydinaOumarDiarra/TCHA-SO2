import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTravailleurComponent } from './detail-travailleur.component';

describe('DetailTravailleurComponent', () => {
  let component: DetailTravailleurComponent;
  let fixture: ComponentFixture<DetailTravailleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTravailleurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTravailleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
