import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptiontravailleurPageRoutingModule } from './inscriptiontravailleur-routing.module';

import { InscriptiontravailleurPage } from './inscriptiontravailleur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptiontravailleurPageRoutingModule
  ],
  declarations: [InscriptiontravailleurPage]
})
export class InscriptiontravailleurPageModule {}
