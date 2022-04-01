import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupprimerCompetencePage } from './supprimer-competence.page';

const routes: Routes = [
  {
    path: '',
    component: SupprimerCompetencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupprimerCompetencePageRoutingModule {}
