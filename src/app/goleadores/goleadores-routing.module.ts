import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoleadoresPage } from './goleadores.page';

const routes: Routes = [
  {
    path: '',
    component: GoleadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoleadoresPageRoutingModule {}
