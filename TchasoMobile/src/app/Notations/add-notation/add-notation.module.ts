import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNotationPageRoutingModule } from './add-notation-routing.module';

import { AddNotationPage } from './add-notation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNotationPageRoutingModule
  ],
  declarations: [AddNotationPage]
})
export class AddNotationPageModule {}
