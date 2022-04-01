import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Popupservice2Page } from './popupservice2.page';

const routes: Routes = [
  {
    path: '',
    component: Popupservice2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Popupservice2PageRoutingModule {}
