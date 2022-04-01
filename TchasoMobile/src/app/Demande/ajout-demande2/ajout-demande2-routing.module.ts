import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutDemande2Page } from './ajout-demande2.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutDemande2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutDemande2PageRoutingModule {}
