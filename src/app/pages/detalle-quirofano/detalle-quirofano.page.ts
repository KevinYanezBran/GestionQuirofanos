import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quirofano, Equipo } from '../../models/quirofano.model';

@Component({
  selector: 'app-detalle-quirofano',
  templateUrl: './detalle-quirofano.page.html',
  styleUrls: ['./detalle-quirofano.page.scss'],
})
export class DetalleQuirofanoPage implements OnInit {
  equipos: Equipo[] = [];
  numeroQuirofano: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const state = history.state;
    if (state && state.quirofano) {
      this.numeroQuirofano = state.quirofano.numero;
      this.equipos = state.quirofano.equipos;
    }
  }
}
