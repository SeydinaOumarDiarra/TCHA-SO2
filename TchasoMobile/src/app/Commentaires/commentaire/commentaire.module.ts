import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentairePageRoutingModule } from './commentaire-routing.module';

import { CommentairePage } from './commentaire.page';
import { ConnectComponent } from 'src/app/Composants/ComposantConnect/connect/connect.component';
import { CommentComponent } from '../comment/comment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommentairePageRoutingModule
  ],
  declarations: [CommentairePage, ConnectComponent, CommentComponent]
})
export class CommentairePageModule {}
