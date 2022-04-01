import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientNotifyPage } from './client-notify.page';

const routes: Routes = [
  {
    path: '',
    component: ClientNotifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientNotifyPageRoutingModule {}
