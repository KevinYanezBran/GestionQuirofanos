import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleQuirofanoPage } from './detalle-quirofano.page';

describe('DetalleQuirofanoPage', () => {
  let component: DetalleQuirofanoPage;
  let fixture: ComponentFixture<DetalleQuirofanoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleQuirofanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
