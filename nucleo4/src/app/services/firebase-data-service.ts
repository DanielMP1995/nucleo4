import { Injectable } from '@angular/core';
import { onValue, ref, set, remove } from 'firebase/database';
import { db } from '../config/config';

@Injectable({
  providedIn: 'root',
})
export class FirebaseDataService {

  guardarServicio(producto: any) {
    set(ref(db, 'producto/' + producto.id), {
      id: producto.id,
      nombre: producto.nombre,
      ciudad: producto.proveedor.ubicacion.ciudad,
      precio: producto.info.precio 
    });
  }

  getServicios(): any {
    let carrito: any = {};
    const starCountRef = ref(db, 'producto/');
    onValue(starCountRef, (snapshot) => {
      carrito = snapshot.val() || {};
    });
    return carrito;
  }

  getServicioPorId(id: string): any {
    let servicio: any;
    const refServicio = ref(db, 'producto/' + id);
    onValue(refServicio, (snapshot) => {
      servicio = snapshot.val();
    });
    return servicio;
  }

  eliminarServicio(id: string) {
    return remove(ref(db, 'producto/' + id));
  }
}
