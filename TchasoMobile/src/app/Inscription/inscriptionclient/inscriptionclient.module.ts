import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionclientPageRoutingModule } from './inscriptionclient-routing.module';

import { InscriptionclientPage } from './inscriptionclient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionclientPageRoutingModule
  ],
  declarations: [InscriptionclientPage]
})
export class InscriptionclientPageModule {}
