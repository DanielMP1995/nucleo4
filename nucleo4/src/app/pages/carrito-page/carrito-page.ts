import { Component, inject } from '@angular/core';
import { FirebaseDataService } from '../../services/firebase-data-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrito-page',
  imports: [RouterLink],
  templateUrl: './carrito-page.html',
  styleUrls: ['./carrito-page.css'],
})
export class CarritoPage {
  private servicio = inject(FirebaseDataService);

  carrito = this.servicio.getServicios();
  carritoArray = Object.entries(this.carrito).map(([id, datos]: any) => ({
    id: id,
    nombre: datos.nombre,
    ciudad: datos.ciudad,
    precio: datos.precio   
  }));

  eliminar(id: string) {
    this.servicio.eliminarServicio(id);
    this.carritoArray = this.carritoArray.filter(item => item.id !== id);
    alert('Servicio eliminado: ' + id);
  }
verTotal() {
  const total = this.carritoArray.reduce((suma, item) => suma + (parseFloat(item.precio) || 0), 0);
  alert('El total es: ' + total + ' USD');
}
}
  

