import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptiontravailleurSuitePage } from './inscriptiontravailleur-suite.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptiontravailleurSuitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptiontravailleurSuitePageRoutingModule {}
