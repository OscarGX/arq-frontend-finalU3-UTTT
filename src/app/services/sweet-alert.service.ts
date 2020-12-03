import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  showGenericAlert(title: string, text: string, icon: SweetAlertIcon): void {
    Swal.fire({
      title,
      text,
      icon
    });
  }

  async showConfirmDialog(title: string, text: string, icon: SweetAlertIcon, confirmButtonText: string): Promise<SweetAlertResult<any>> {
    const result = await Swal.fire({
      title,
      text,
      icon,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText
    });
    return result;
  }

  showLoading(title: string, text: string): void {
    Swal.fire({
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      title,
      text,
      willOpen: () => {
        Swal.showLoading();
      }
    });
  }

  hideLoading(): void {
    Swal.close();
  }
}
