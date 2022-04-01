import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierCompetencePageRoutingModule } from './modifier-competence-routing.module';

import { ModifierCompetencePage } from './modifier-competence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierCompetencePageRoutingModule
  ],
  declarations: [ModifierCompetencePage]
})
export class ModifierCompetencePageModule {}
