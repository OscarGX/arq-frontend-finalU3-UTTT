import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProveedorFormComponent } from './proveedor-form/proveedor-form.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProveedorFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ProveedorFormComponent
  ]
})
export class ComponentesModule { }
