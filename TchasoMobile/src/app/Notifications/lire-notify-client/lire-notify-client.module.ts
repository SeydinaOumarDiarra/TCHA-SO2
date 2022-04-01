import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LireNotifyClientPageRoutingModule } from './lire-notify-client-routing.module';

import { LireNotifyClientPage } from './lire-notify-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LireNotifyClientPageRoutingModule
  ],
  declarations: [LireNotifyClientPage]
})
export class LireNotifyClientPageModule {}
