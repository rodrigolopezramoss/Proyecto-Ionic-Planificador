import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lunes',
    loadChildren: () => import('./pages/lunes/lunes.module').then( m => m.LunesPageModule)
  },
  {
    path: 'martes',
    loadChildren: () => import('./pages/martes/martes.module').then( m => m.MartesPageModule)
  },
  {
    path: 'miercoles',
    loadChildren: () => import('./pages/miercoles/miercoles.module').then( m => m.MiercolesPageModule)
  },
  {
    path: 'jueves',
    loadChildren: () => import('./pages/jueves/jueves.module').then( m => m.JuevesPageModule)
  },
  {
    path: 'viernes',
    loadChildren: () => import('./pages/viernes/viernes.module').then( m => m.ViernesPageModule)
  },
  {
    path: 'sabado',
    loadChildren: () => import('./pages/sabado/sabado.module').then( m => m.SabadoPageModule)
  },
  {
    path: 'domingo',
    loadChildren: () => import('./pages/domingo/domingo.module').then( m => m.DomingoPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./pages/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./pages/edit/edit.module').then( m => m.EditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
