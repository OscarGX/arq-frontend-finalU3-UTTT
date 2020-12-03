// Generated by https://quicktype.io

export interface ProveedorResponseI {
    ok: boolean;
    proveedor?: ProveedorI;
    error?: any;
}

export interface ProveedoresResponseI {
    ok: boolean;
    proveedores?: ProveedorI[];
    error?: any;
}

export interface ProveedorI {
    _id?: string;
    area: string;
    name: string;
    company: string;
    address: string;
    phoneNumber: number;
    email: string;
    __v?: number;
}

export interface ProveedorDeleteResponseI {
    ok: boolean;
    error?: any;
    message?: string;
    proveedor?: ProveedorI;
}

export interface ProveedorCreateResponseI {
    ok: boolean;
    error?: any;
    message?: string;
    proveedor?: ProveedorI;
}