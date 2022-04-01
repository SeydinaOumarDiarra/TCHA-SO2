import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierInfosPage } from './modifier-infos.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierInfosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierInfosPageRoutingModule {}
