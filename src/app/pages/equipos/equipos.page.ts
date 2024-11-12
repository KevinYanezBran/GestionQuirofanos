import { Component } from '@angular/core';
import { Equipo } from '../../models/quirofano.model';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.page.html',
  styleUrls: ['./equipos.page.scss'],
})
export class EquiposPage {
  equipos: Equipo[] = [];
  nuevoEquipo: Equipo = { id: 0, nombre: '', estado: 'Operativo' };
  editando: boolean = false;
  equipoEditado: Equipo | null = null;

  constructor() {}

  agregarEquipo() {
    if (this.nuevoEquipo.nombre.trim()) {
      const nuevoId = this.equipos.length ? Math.max(...this.equipos.map(e => e.id)) + 1 : 1;
      this.equipos.push({ ...this.nuevoEquipo, id: nuevoId });
      this.nuevoEquipo = { id: 0, nombre: '', estado: 'Operativo' };
    }
  }

  editarEquipo(equipo: Equipo) {
    this.equipoEditado = { ...equipo };
    this.editando = true;
  }

  guardarEdicion() {
    if (this.equipos && this.equipoEditado) {
      const index = this.equipos.findIndex(e => e.id === this.equipoEditado!.id);
      if (index !== -1) {
        this.equipos[index] = { ...this.equipoEditado };
      }
    }
    this.cancelarEdicion();
  }

  cancelarEdicion() {
    this.equipoEditado = null;
    this.editando = false;
  }

  eliminarEquipo(id: number) {
    this.equipos = this.equipos.filter(e => e.id !== id);
  }
}
