import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilClientPageRoutingModule } from './profil-client-routing.module';

import { ProfilClientPage } from './profil-client.page';
import { ConnectComponent } from 'src/app/Composants/ComposantConnect/connect/connect.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilClientPageRoutingModule
  ],
  declarations: [ProfilClientPage, ConnectComponent]
})
export class ProfilClientPageModule {}
