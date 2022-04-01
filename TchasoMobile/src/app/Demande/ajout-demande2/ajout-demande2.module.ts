import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutDemande2PageRoutingModule } from './ajout-demande2-routing.module';

import { AjoutDemande2Page } from './ajout-demande2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutDemande2PageRoutingModule
  ],
  declarations: [AjoutDemande2Page]
})
export class AjoutDemande2PageModule {}
