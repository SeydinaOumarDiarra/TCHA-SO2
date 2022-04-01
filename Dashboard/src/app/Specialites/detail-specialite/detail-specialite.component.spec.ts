import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSpecialiteComponent } from './detail-specialite.component';

describe('DetailSpecialiteComponent', () => {
  let component: DetailSpecialiteComponent;
  let fixture: ComponentFixture<DetailSpecialiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSpecialiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSpecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
