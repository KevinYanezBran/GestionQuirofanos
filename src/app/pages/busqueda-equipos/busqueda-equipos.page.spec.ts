import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusquedaEquiposPage } from './busqueda-equipos.page';

describe('BusquedaEquiposPage', () => {
  let component: BusquedaEquiposPage;
  let fixture: ComponentFixture<BusquedaEquiposPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaEquiposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
