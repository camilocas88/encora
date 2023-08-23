import { Injectable, NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes, mapToCanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

@Injectable({providedIn: 'root'})
export class AuthGuard {
  canActivate() {
    if (localStorage.getItem('userEmail')) {
      return true;
    }
    return false;

  }
}

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: mapToCanActivate([AuthGuard]),

  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
