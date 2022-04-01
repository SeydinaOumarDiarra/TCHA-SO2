import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeServicePageRoutingModule } from './liste-service-routing.module';

import { ListeServicePage } from './liste-service.page';
import { ConnectnotifyComponent } from 'src/app/Composants/ComposantTravailleur/connectnotify/connectnotify.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeServicePageRoutingModule
  ],
  declarations: [ListeServicePage, ConnectnotifyComponent]
})
export class ListeServicePageModule {}
