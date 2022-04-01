import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierInfosPageRoutingModule } from './modifier-infos-routing.module';

import { ModifierInfosPage } from './modifier-infos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierInfosPageRoutingModule
  ],
  declarations: [ModifierInfosPage]
})
export class ModifierInfosPageModule {}
