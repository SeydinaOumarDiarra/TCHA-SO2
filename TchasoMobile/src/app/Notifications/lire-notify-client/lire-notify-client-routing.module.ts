import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LireNotifyClientPage } from './lire-notify-client.page';

const routes: Routes = [
  {
    path: '',
    component: LireNotifyClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LireNotifyClientPageRoutingModule {}
