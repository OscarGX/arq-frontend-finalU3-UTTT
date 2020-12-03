import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ProveedoresComponent } from './proveedores.component';


@NgModule({
  declarations: [ProveedoresComponent],
  imports: [
    CommonModule,
    ProveedoresRoutingModule,
    RouterModule
  ]
})
export class ProveedoresModule { }
