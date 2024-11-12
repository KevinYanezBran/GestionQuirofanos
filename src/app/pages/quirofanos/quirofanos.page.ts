import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Quirofano } from '../../models/quirofano.model';

@Component({
  selector: 'app-quirofanos',
  templateUrl: './quirofanos.page.html',
  styleUrls: ['./quirofanos.page.scss'],
})
export class QuirofanosPage implements OnInit {
  quirofanos: Quirofano[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.http.get<{ quirofanos: Quirofano[] }>('assets/data/quirofanos.json').subscribe((data) => {
      this.quirofanos = data.quirofanos;
    });
  }

  verEquipos(quirofano: Quirofano) {
    this.router.navigate(['/detalle-quirofano'], { state: { quirofano } });
  }
}
