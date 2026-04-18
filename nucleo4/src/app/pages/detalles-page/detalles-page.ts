import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FirebaseDataService } from '../../services/firebase-data-service';

@Component({
  selector: 'app-detalles-page',
  imports: [FormsModule],
  templateUrl: './detalles-page.html',
  styleUrls: ['./detalles-page.css'],
})
export class DetallesPage {
  private ruta = inject(ActivatedRoute);
  private servicio = inject(FirebaseDataService);

  producto: any = {};
  id = this.ruta.snapshot.paramMap.get('id');

  ngOnInit() {
    if (this.id) {
      const datos: any = this.servicio.getServicioPorId(this.id);
      if (datos) {
        this.producto = {
          id: this.id,
          nombre: datos.nombre,
          ciudad: datos.ciudad,
          precio: datos.precio ?? 0  
        };
      }
    }
  }

  guardar() {
    this.servicio.guardarServicio(this.producto);
    alert('Cambios guardados');
  }

  eliminar() {
    if (this.id) {
      this.servicio.eliminarServicio(this.id);
      alert('Servicio eliminado');
    }
  }
}
