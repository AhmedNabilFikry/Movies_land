import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  let _AuthService = inject(AuthService);
  let _Router = inject(Router);
  if (_AuthService.UserData.getValue() != null) {
    return true;
  }
  else{
    _Router.navigate(['/login']);
    return false ;
  }

};
