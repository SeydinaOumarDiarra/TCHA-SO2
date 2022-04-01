import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutCompetencePage } from './ajout-competence.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutCompetencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutCompetencePageRoutingModule {}
