import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Popupservice2PageRoutingModule } from './popupservice2-routing.module';

import { Popupservice2Page } from './popupservice2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Popupservice2PageRoutingModule
  ],
  declarations: [Popupservice2Page]
})
export class Popupservice2PageModule {}
