import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupservicePageRoutingModule } from './popupservice-routing.module';

import { PopupservicePage } from './popupservice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopupservicePageRoutingModule
  ],
  declarations: [PopupservicePage]
})
export class PopupservicePageModule {}
