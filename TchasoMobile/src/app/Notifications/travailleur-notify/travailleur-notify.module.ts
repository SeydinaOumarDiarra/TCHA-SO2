import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravailleurNotifyPageRoutingModule } from './travailleur-notify-routing.module';

import { TravailleurNotifyPage } from './travailleur-notify.page';
import { ConnectnotifyComponent } from 'src/app/Composants/ComposantTravailleur/connectnotify/connectnotify.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravailleurNotifyPageRoutingModule
  ],
  declarations: [TravailleurNotifyPage, ConnectnotifyComponent]
})
export class TravailleurNotifyPageModule {}
