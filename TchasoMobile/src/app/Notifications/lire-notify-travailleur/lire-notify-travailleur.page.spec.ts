import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LireNotifyTravailleurPage } from './lire-notify-travailleur.page';

describe('LireNotifyTravailleurPage', () => {
  let component: LireNotifyTravailleurPage;
  let fixture: ComponentFixture<LireNotifyTravailleurPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LireNotifyTravailleurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LireNotifyTravailleurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
