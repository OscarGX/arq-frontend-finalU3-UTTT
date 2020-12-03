import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesModule } from '../../components/componentes.module';
import { ProveedorEditRoutingModule } from './proveedor-edit-routing.module';
import { ProveedorEditComponent } from './proveedor-edit.component';


@NgModule({
  declarations: [ProveedorEditComponent],
  imports: [
    CommonModule,
    ProveedorEditRoutingModule,
    ComponentesModule
  ]
})
export class ProveedorEditModule { }
