import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopupservicePage } from './popupservice.page';

const routes: Routes = [
  {
    path: '',
    component: PopupservicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupservicePageRoutingModule {}
