import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirebaseAuthService } from '../../services/firebase-auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css'],
})
export class Registro {
  private firebaseAuth = inject(FirebaseAuthService);
  private router = inject(Router);

  async registrar(formulario: any) {
    const correo = formulario.value.correo;
    const contrasena = formulario.value.contrasena;

    try {
      const usuario = await this.firebaseAuth.registrarUsuario(correo, contrasena);
      alert('Registro exitoso: ' + usuario.user.email);

      // Redirigir a productos
      this.router.navigate(['/login']);
    } catch (error: any) {
      alert('Error en registro: ' + error.message);
    }
  }
}
