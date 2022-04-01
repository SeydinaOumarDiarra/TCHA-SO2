import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeServicePage } from './liste-service.page';

const routes: Routes = [
  {
    path: '',
    component: ListeServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeServicePageRoutingModule {}
