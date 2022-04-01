import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LesSpecialitesPageRoutingModule } from './les-specialites-routing.module';

import { LesSpecialitesPage } from './les-specialites.page';
import { ConnectnotifyComponent } from 'src/app/Composants/ComposantTravailleur/connectnotify/connectnotify.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LesSpecialitesPageRoutingModule
  ],
  declarations: [LesSpecialitesPage, ConnectnotifyComponent]
})
export class LesSpecialitesPageModule {}
