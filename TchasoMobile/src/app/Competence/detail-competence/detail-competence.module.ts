import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCompetencePageRoutingModule } from './detail-competence-routing.module';

import { DetailCompetencePage } from './detail-competence.page';
import { ConnectnotifyComponent } from 'src/app/Composants/ComposantTravailleur/connectnotify/connectnotify.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCompetencePageRoutingModule
  ],
  declarations: [DetailCompetencePage, ConnectnotifyComponent]
})
export class DetailCompetencePageModule {}
