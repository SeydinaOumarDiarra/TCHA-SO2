import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InscriptiontravailleurSuitePage } from './inscriptiontravailleur-suite.page';

describe('InscriptiontravailleurSuitePage', () => {
  let component: InscriptiontravailleurSuitePage;
  let fixture: ComponentFixture<InscriptiontravailleurSuitePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptiontravailleurSuitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InscriptiontravailleurSuitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
