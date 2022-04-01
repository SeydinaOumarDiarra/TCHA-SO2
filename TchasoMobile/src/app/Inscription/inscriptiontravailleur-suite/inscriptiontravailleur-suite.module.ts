import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptiontravailleurSuitePageRoutingModule } from './inscriptiontravailleur-suite-routing.module';

import { InscriptiontravailleurSuitePage } from './inscriptiontravailleur-suite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptiontravailleurSuitePageRoutingModule
  ],
  declarations: [InscriptiontravailleurSuitePage]
})
export class InscriptiontravailleurSuitePageModule {}
