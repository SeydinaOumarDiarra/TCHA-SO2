import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCompetencePage } from './detail-competence.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCompetencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCompetencePageRoutingModule {}
