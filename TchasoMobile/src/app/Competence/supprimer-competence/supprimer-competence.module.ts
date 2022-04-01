import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupprimerCompetencePageRoutingModule } from './supprimer-competence-routing.module';

import { SupprimerCompetencePage } from './supprimer-competence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupprimerCompetencePageRoutingModule
  ],
  declarations: [SupprimerCompetencePage]
})
export class SupprimerCompetencePageModule {}
