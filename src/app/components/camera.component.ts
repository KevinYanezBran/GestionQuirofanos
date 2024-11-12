// src/app/components/camera.component.ts
import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent {
  capturedImage: string | undefined;

  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera, // Cambiar a CameraSource.Prompt para elegir entre cámara y galería
      });
      this.capturedImage = image.dataUrl;
    } catch (error) {
      console.error('Error al capturar imagen:', error);
    }
  }
}
