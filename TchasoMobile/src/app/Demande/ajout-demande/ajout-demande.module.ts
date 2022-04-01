import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutDemandePageRoutingModule } from './ajout-demande-routing.module';

import { AjoutDemandePage } from './ajout-demande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutDemandePageRoutingModule
  ],
  declarations: [AjoutDemandePage]
})
export class AjoutDemandePageModule {}
