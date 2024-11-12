import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusquedaEquiposPageRoutingModule } from './busqueda-equipos-routing.module';

import { BusquedaEquiposPage } from './busqueda-equipos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusquedaEquiposPageRoutingModule
  ],
  declarations: [BusquedaEquiposPage]
})
export class BusquedaEquiposPageModule {}
