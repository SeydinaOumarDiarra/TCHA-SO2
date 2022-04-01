import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LireNotifyTravailleurPage } from './lire-notify-travailleur.page';

const routes: Routes = [
  {
    path: '',
    component: LireNotifyTravailleurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LireNotifyTravailleurPageRoutingModule {}
