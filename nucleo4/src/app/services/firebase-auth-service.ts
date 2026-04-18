import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  private auth: Auth = auth;

  login(correo: string, contrasena: string) {
    return signInWithEmailAndPassword(this.auth, correo, contrasena);
  }

  registrarUsuario(correo: string, contrasena: string) {
    return createUserWithEmailAndPassword(this.auth, correo, contrasena);
  }
}
