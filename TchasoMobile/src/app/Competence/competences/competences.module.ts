import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompetencesPageRoutingModule } from './competences-routing.module';

import { CompetencesPage } from './competences.page';
import { ConnectnotifyComponent } from 'src/app/Composants/ComposantTravailleur/connectnotify/connectnotify.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompetencesPageRoutingModule
  ],
  declarations: [CompetencesPage, ConnectnotifyComponent]
})
export class CompetencesPageModule {}
