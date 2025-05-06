import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DriverComponent } from './driver/driver.component';
import { DriverListComponent } from './driver/driver-list/driver-list.component';


 export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'driver', component: DriverComponent },
    { path: 'driver-list', component: DriverListComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: 'login' },
  ];

  