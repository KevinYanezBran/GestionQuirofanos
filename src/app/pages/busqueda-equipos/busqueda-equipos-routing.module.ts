import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusquedaEquiposPage } from './busqueda-equipos.page';

const routes: Routes = [
  {
    path: '',
    component: BusquedaEquiposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusquedaEquiposPageRoutingModule {}
