import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { auth } from '../config/config';

export const loginGuard: CanActivateFn = () => {
  const router = inject(Router);
  const usuario = auth.currentUser;

  if (usuario) {
   
    return true;
  } else {
   
    router.navigate(['/login']);
    return false;
  }
};
