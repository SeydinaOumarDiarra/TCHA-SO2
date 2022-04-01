import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravailleurPageRoutingModule } from './travailleur-routing.module';

import { TravailleurPage } from './travailleur.page';
import { ConnectComponent } from 'src/app/Composants/ComposantConnect/connect/connect.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravailleurPageRoutingModule
  ],
  declarations: [TravailleurPage, ConnectComponent]
})
export class TravailleurPageModule {}
