import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipo, Quirofano } from '../../models/quirofano.model';

@Component({
  selector: 'app-busqueda-equipos',
  templateUrl: './busqueda-equipos.page.html',
  styleUrls: ['./busqueda-equipos.page.scss'],
})
export class BusquedaEquiposPage implements OnInit {
  equipos: Equipo[] = [];
  filtro: string = '';
  todosEquipos: Equipo[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<{ quirofanos: Quirofano[] }>('assets/data/quirofanos.json').subscribe((data) => {
      data.quirofanos.forEach((quirofano) => {
        this.todosEquipos.push(...quirofano.equipos);
      });
      this.equipos = [...this.todosEquipos];
    });
  }

  buscar() {
    this.equipos = this.todosEquipos.filter((equipo) =>
      equipo.nombre.toLowerCase().includes(this.filtro.toLowerCase()) ||
      equipo.estado.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }
}
