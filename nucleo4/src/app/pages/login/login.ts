import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirebaseAuthService } from '../../services/firebase-auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  private firebaseAuth = inject(FirebaseAuthService);
  private router = inject(Router);

  async Login(formulario: any) {
    const email = formulario.value.email;
    const password = formulario.value.password;

    try {
      const userCredential = await this.firebaseAuth.login(email, password);
      alert('Login exitoso: ' + userCredential.user.email);

      // Redirigir a productos
      this.router.navigate(['/productos']);
    } catch (error: any) {
      alert('Error en login: ' + error.message);
    }
  }
}
