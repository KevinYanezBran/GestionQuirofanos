// src/app/home/home.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

// Importa CameraComponent
import { CameraComponent } from '../components/camera.component';
declarations: [HomePage, CameraComponent]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    CameraComponent  // Declara CameraComponent aquí para que sea reconocido en HomePage
  ]
})
export class HomePageModule {}
