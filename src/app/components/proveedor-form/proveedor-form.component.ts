import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { ProveedorService } from '../../services/proveedor.service';
import { ProveedorI } from '../../models/proveedores.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-proveedor-form',
  templateUrl: './proveedor-form.component.html',
  styleUrls: ['./proveedor-form.component.scss']
})
export class ProveedorFormComponent implements OnInit, OnDestroy {

  @Input() proveedor = false;
  form: FormGroup;
  areas: string[] = [];
  proveedorObject: ProveedorI;
  private proveedorSubscription$ = new Subscription();

  constructor(private fb: FormBuilder, private swas: SweetAlertService, private ps: ProveedorService, private route: ActivatedRoute,
              private router: Router) {
      this.createForm();
      this.areas =  ['Almacén', 'Tortillería', 'Cocimiento', 'Sistemas'];
   }

  ngOnInit(): void {
    if (this.proveedor) {
      const id = this.route.snapshot.paramMap.get('id');
      this.proveedorSubscription$.add(this.ps.getProveedorById(id).subscribe(data => {
        if (data.ok) {
          this.proveedorObject = data.proveedor;
          this.fillForm();
        }
    }, (err: HttpErrorResponse) => {
      this.router.navigateByUrl('/proveedores');
    }));
    }
  }

  get isFormValid(): boolean {
    return this.form.invalid;
  }

  get isNameValid(): boolean {
    const nameField = this.form.get('name');
    return nameField.invalid && nameField.touched;
  }

  get isCompanyValid(): boolean {
    const companyField = this.form.get('company');
    return companyField.touched && companyField.invalid;
  }

  get isAddressValid(): boolean {
    const addressField = this.form.get('address');
    return addressField.touched && addressField.invalid;
  }

  get isEmailValid(): boolean {
    const emailField = this.form.get('email');
    return emailField.touched && emailField.invalid;
  }
  get isPhoneNumberValid(): boolean {
    const phoneNumberField = this.form.get('phoneNumber');
    return phoneNumberField.touched && phoneNumberField.invalid;
  }

  private createForm(): void {
    this.form = this.fb.group({
      area: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.maxLength(300), Validators.minLength(10)]],
      company: ['', [Validators.required, Validators.minLength(5)]],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  saveData(): void {
    if (this.proveedor && this.form.valid) {
      this.swas.showLoading('Editando', 'Por favor espere mientras se actualiza el proveedor...');
      this.editProvider();
    } else if (this.form.valid) {
      this.swas.showLoading('Registrando', 'Por favor espere mientras se registra el proveedor...');
      this.newProvider();
    }
  }

  private newProvider(): void {
    this.proveedorSubscription$.add(this.ps.nuevoProveedor(this.form.value).subscribe(data => {
      this.swas.hideLoading();
      if (data.ok) {
        this.swas.showGenericAlert('Nice!', data.message, 'success');
      } else if (data.error) {
        this.swas.showGenericAlert('Error', 'Hubo un error al registrar el proveedor, verifique los datos', 'error');
      }
    }));
  }

  private editProvider(): void {

    this.proveedorSubscription$.add(this.ps.editarProveedor(this.proveedorObject._id, this.form.value).subscribe(data => {
      if (data.ok) {
        this.swas.showGenericAlert('Nice', data.message, 'success');
      }
    }, (err: HttpErrorResponse) => {
      if (err.error.message) {
        this.swas.showGenericAlert('Error', err.error.message, 'error');
      } else {
        this.swas.showGenericAlert('Bad Request', 'Hubo un error al editar el proveedor, verifique los datos', 'error');
      }
    }));
  }

  private fillForm(): void {
    this.form.get('area').setValue(this.proveedorObject.area);
    this.form.get('name').setValue(this.proveedorObject.name);
    this.form.get('company').setValue(this.proveedorObject.company);
    this.form.get('address').setValue(this.proveedorObject.address);
    this.form.get('email').setValue(this.proveedorObject.email);
    this.form.get('phoneNumber').setValue(this.proveedorObject.phoneNumber);
  }

  ngOnDestroy(): void {
    this.proveedorSubscription$.unsubscribe();
  }

}
