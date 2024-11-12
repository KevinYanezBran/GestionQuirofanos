import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleQuirofanoPageRoutingModule } from './detalle-quirofano-routing.module';

import { DetalleQuirofanoPage } from './detalle-quirofano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleQuirofanoPageRoutingModule
  ],
  declarations: [DetalleQuirofanoPage]
})
export class DetalleQuirofanoPageModule {}
