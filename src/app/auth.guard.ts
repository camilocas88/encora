import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  if (true) {
    return true;
  }


  return false;

};
