import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleQuirofanoPage } from './detalle-quirofano.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleQuirofanoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleQuirofanoPageRoutingModule {}
