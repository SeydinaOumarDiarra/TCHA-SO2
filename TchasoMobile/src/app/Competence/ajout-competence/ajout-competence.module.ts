import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutCompetencePageRoutingModule } from './ajout-competence-routing.module';

import { AjoutCompetencePage } from './ajout-competence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutCompetencePageRoutingModule
  ],
  declarations: [AjoutCompetencePage]
})
export class AjoutCompetencePageModule {}
