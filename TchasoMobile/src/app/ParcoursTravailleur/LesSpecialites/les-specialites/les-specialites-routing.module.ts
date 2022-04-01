import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LesSpecialitesPage } from './les-specialites.page';

const routes: Routes = [
  {
    path: '',
    component: LesSpecialitesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LesSpecialitesPageRoutingModule {}
