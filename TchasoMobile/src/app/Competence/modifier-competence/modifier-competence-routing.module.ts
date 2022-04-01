import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierCompetencePage } from './modifier-competence.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierCompetencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierCompetencePageRoutingModule {}
