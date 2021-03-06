import { Routes } from '@angular/router';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { BackofficeComponent } from './components/administrator/backoffice/backoffice.component';
import { PaymentComponent } from './components/payment/payment.component';

import { PayComponent } from './components/pay/pay.component';
import { UsersComponent } from './components/users/users.component';

import { LoginComponent } from './components/login/login.component';


export const ROUTES: Routes = [

  // Administrator
  { path: '', component: LoginComponent },
  { path: 'pago', component: PaymentComponent },
  { path: 'administrador', component: AdministratorComponent },
  { path: 'backoffice', component: BackofficeComponent },
  { path : 'reclamos' , component : UsersComponent },
];
