import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LireNotifyTravailleurPageRoutingModule } from './lire-notify-travailleur-routing.module';

import { LireNotifyTravailleurPage } from './lire-notify-travailleur.page';
import { ConnectnotifyComponent } from 'src/app/Composants/ComposantTravailleur/connectnotify/connectnotify.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LireNotifyTravailleurPageRoutingModule
  ],
  declarations: [LireNotifyTravailleurPage, ConnectnotifyComponent]
})
export class LireNotifyTravailleurPageModule {}
