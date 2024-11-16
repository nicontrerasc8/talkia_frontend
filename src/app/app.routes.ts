import {Routes } from '@angular/router';
import {LandingComponent} from './business/landing/landing.component';
import {LoginComponent} from './business/welcome/login/login.component';

export const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home',
    children: [
      { path: '', component:  },
      { path: 'users', component: UsersComponent },
      { path: 'contents', component: ContentAdminComponent },
      { path: 'histories', component: PaymentAdminComponent },
    ]
  },
  {
    path:'',redirectTo:'', pathMatch:'full'
  }
];
