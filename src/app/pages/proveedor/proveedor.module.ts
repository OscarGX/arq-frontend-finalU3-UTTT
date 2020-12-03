import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedorRoutingModule } from './proveedor-routing.module';
import { ProveedorComponent } from './proveedor.component';
import { ComponentesModule } from '../../components/componentes.module';


@NgModule({
  declarations: [ProveedorComponent],
  imports: [
    CommonModule,
    ProveedorRoutingModule,
    ComponentesModule
  ]
})
export class ProveedorModule { }
