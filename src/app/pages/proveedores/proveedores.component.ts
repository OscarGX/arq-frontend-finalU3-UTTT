import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProveedorI } from 'src/app/models/proveedores.interface';
import { ProveedorService } from '../../services/proveedor.service';
import { SweetAlertService } from '../../services/sweet-alert.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit, OnDestroy {
  proveedores: ProveedorI[] = [];
  isLoading = true;
  proveedoresSubscription$ = new Subscription();

  constructor(private ps: ProveedorService, private swas: SweetAlertService, private router: Router) {
    this.proveedoresSubscription$.add(this.ps.getProveedores().subscribe(data => {
      console.log(data);
      this.proveedores = data;
      this.isLoading = !(this.proveedores.length > 0);
    }));
  }

  ngOnInit(): void {
  }

  eliminarProveedor(id: string, name: string): void {
    this.swas.showConfirmDialog(`¿Está seguro de eliminar a ${name}?`, 'Esta acción no se puede deshacer.', 'warning', 'Si, eliminar')
      .then(data => {
        if (data.isConfirmed) {
          this.swas.showLoading('Eliminando...', 'Por favor, espere mientras se elimina el registro.');
          this.deleteProvider(id);
        }
      });
  }

  private deleteProvider(id: string): void {
    this.proveedoresSubscription$.add(this.ps.deleteProveedor(id).subscribe(data => {
      this.swas.hideLoading();
      if (data.ok) {
        this.swas.showGenericAlert('Nice', data.message, 'success');
      } else if (data.error) {
        this.swas.showGenericAlert('Error', 'Hubo un error al eliminar el registro, verifica los datos.', 'error');
      } else {
        this.swas.showGenericAlert('Bad Request', data.message, 'error');
      }
    }));
  }

  editarProveedor(id: string): void {
    this.router.navigateByUrl(`/proveedor/${id}`);
  }

  ngOnDestroy(): void {
    this.proveedoresSubscription$.unsubscribe();
  }

}
