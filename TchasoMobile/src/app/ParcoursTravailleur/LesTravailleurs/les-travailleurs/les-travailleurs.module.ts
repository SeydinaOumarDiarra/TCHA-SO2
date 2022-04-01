import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LesTravailleursPageRoutingModule } from './les-travailleurs-routing.module';

import { LesTravailleursPage } from './les-travailleurs.page';
import { ConnectnotifyComponent } from 'src/app/Composants/ComposantTravailleur/connectnotify/connectnotify.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LesTravailleursPageRoutingModule
  ],
  declarations: [LesTravailleursPage, ConnectnotifyComponent]
})
export class LesTravailleursPageModule {}
