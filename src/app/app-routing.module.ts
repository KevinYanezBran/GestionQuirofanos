import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'quirofanos',
    pathMatch: 'full'
  },
  {
    path: 'quirofanos',
    loadChildren: () => import('./pages/quirofanos/quirofanos.module').then( m => m.QuirofanosPageModule)
  },
  {
    path: 'detalle-quirofano',
    loadChildren: () => import('./pages/detalle-quirofano/detalle-quirofano.module').then( m => m.DetalleQuirofanoPageModule)
  },
  {
    path: 'busqueda-equipos',
    loadChildren: () => import('./pages/busqueda-equipos/busqueda-equipos.module').then( m => m.BusquedaEquiposPageModule)
  },
  {
    path: 'equipos',
    loadChildren: () => import('./pages/equipos/equipos.module').then( m => m.EquiposPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
