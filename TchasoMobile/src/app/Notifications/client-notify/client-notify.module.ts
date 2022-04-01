import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientNotifyPageRoutingModule } from './client-notify-routing.module';

import { ClientNotifyPage } from './client-notify.page';
import { ConnectComponent } from 'src/app/Composants/ComposantConnect/connect/connect.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientNotifyPageRoutingModule
  ],
  declarations: [ClientNotifyPage, ConnectComponent]
})
export class ClientNotifyPageModule {}
