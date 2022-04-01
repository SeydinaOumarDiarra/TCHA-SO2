import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilclientPage } from './accueilclient.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilclientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilclientPageRoutingModule {}
