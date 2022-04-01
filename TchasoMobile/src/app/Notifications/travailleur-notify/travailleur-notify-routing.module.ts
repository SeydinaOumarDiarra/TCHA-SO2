import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravailleurNotifyPage } from './travailleur-notify.page';

const routes: Routes = [
  {
    path: '',
    component: TravailleurNotifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravailleurNotifyPageRoutingModule {}
