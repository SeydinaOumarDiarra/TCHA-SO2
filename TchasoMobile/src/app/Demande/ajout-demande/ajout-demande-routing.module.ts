import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutDemandePage } from './ajout-demande.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutDemandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutDemandePageRoutingModule {}
