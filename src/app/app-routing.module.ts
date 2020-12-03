import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'proveedores', loadChildren: () => import('./pages/proveedores/proveedores.module').then(m => m.ProveedoresModule) },
  { path: 'proveedor', loadChildren: () => import('./pages/proveedor/proveedor.module').then(m => m.ProveedorModule) },
  { path: 'proveedor/:id', loadChildren: () => import('./pages/proveedor-edit/proveedor-edit.module').then(m => m.ProveedorEditModule) },
  { path: '', pathMatch: 'full', redirectTo: 'proveedores' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
