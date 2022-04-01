import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecialitePageRoutingModule } from './specialite-routing.module';

import { SpecialitePage } from './specialite.page';
import { ConnectComponent } from 'src/app/Composants/ComposantConnect/connect/connect.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecialitePageRoutingModule
  ],
  declarations: [SpecialitePage, ConnectComponent]
})
export class SpecialitePageModule {}
