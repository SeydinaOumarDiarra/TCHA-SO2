import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNotationPage } from './add-notation.page';

const routes: Routes = [
  {
    path: '',
    component: AddNotationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNotationPageRoutingModule {}
