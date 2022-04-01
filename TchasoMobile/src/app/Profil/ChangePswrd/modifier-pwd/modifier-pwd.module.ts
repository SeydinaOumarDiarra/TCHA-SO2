import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierPwdPageRoutingModule } from './modifier-pwd-routing.module';

import { ModifierPwdPage } from './modifier-pwd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierPwdPageRoutingModule
  ],
  declarations: [ModifierPwdPage]
})
export class ModifierPwdPageModule {}
