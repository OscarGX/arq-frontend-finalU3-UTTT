import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';
import { ProveedorI, ProveedorResponseI, ProveedoresResponseI, ProveedorDeleteResponseI, ProveedorCreateResponseI } from '../models/proveedores.interface';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  socket: SocketIOClient.Socket;
  // private providers: ProveedorI[] = [];
  private providersSubject$ = new Subject<ProveedorI[]>();
  constructor(private http: HttpClient) {
    this.socket = io(environment.SOCKET_ENDPOINT);
    this.listenProvidersArray();
  }

  private getProviders(): void {
    this.http.get<ProveedoresResponseI>(`${ environment.REST_API_ENDPOINT }/proveedores`).subscribe(data => {
      if (data.ok) {
        this.providersSubject$.next(data.proveedores);
      }
    });
  }

  private listenProvidersArray(): void {
    this.socket.on('all', (data: ProveedorI[]) => {
      this.providersSubject$.next(data);
    });
  }

  getProveedores(): Observable<ProveedorI[]> {
    this.getProviders();
    return this.providersSubject$.asObservable();
  }

  getProveedorById(id: string): Observable<ProveedorCreateResponseI> {
    return this.http.get<ProveedorCreateResponseI>(`${ environment.REST_API_ENDPOINT }/proveedor/${id}`);
  }

  nuevoProveedor(proveedor: ProveedorI): Observable<ProveedorCreateResponseI> {
    return this.http.post<ProveedorCreateResponseI>(`${ environment.REST_API_ENDPOINT }/proveedor`, proveedor);
  }

  editarProveedor(id: string, proveedor: ProveedorI): Observable<ProveedorCreateResponseI> {
    return this.http.put<ProveedorCreateResponseI>(`${ environment.REST_API_ENDPOINT }/proveedor/${id}`, proveedor);
  }

  deleteProveedor(id: string): Observable<ProveedorDeleteResponseI> {
    return this.http.delete<ProveedorDeleteResponseI>(`${ environment.REST_API_ENDPOINT }/proveedor/${ id }`);
  }
}
