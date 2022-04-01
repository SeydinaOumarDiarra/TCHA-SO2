import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierPwdPage } from './modifier-pwd.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierPwdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierPwdPageRoutingModule {}
