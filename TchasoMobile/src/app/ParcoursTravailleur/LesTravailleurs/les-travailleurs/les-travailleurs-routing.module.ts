import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LesTravailleursPage } from './les-travailleurs.page';

const routes: Routes = [
  {
    path: '',
    component: LesTravailleursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LesTravailleursPageRoutingModule {}
