import {Routes } from '@angular/router';
import {LandingComponent} from './business/landing/landing.component';
import {LoginComponent} from './business/welcome/login/login.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./business/landing/landing.routes').then(m => m.LandingRoutes)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./business/welcome/welcome.routes').then(m => m.WelcomeRoutes)
  },
  {
    path: 'login',
    loadChildren: () => import('./business/welcome/login/login.routes').then(m => m.LoginRoutes)
  },
  {
    path: 'register',
    loadChildren: () => import('./business/welcome/register/register.routes').then(m => m.RegisterRoutes)
  },
  {
    path: 'admin',
    loadChildren: () => import('./business/admin/admin.routes').then(m => m.AdminRoutes)
  },
  {
    path: 'user',
    loadChildren: () => import('./business/user/user.routes').then(m => m.UserRoutes)
  }
];
