import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';

import { AccueilPageRoutingModule } from './accueil-routing.module';

import { AccueilPage } from './accueil.page';
import { ConnectnotifyComponent } from 'src/app/Composants/ComposantTravailleur/connectnotify/connectnotify.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    AccueilPageRoutingModule
  ],
  declarations: [AccueilPage, ConnectnotifyComponent]
})
export class AccueilPageModule {}
