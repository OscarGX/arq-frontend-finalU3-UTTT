import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProveedorEditComponent } from './proveedor-edit.component';

const routes: Routes = [
  { path: '', component: ProveedorEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedorEditRoutingModule { }
