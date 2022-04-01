import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravailleurPage } from './travailleur.page';

const routes: Routes = [
  {
    path: '',
    component: TravailleurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravailleurPageRoutingModule {}
