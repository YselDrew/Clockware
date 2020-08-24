import { Routes } from '@angular/router';

import { StartPageComponent } from './start-page/start-page.component';
import { ClientSignupComponent } from './client-signup/client-signup.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { EmployeesComponent } from './employees/employees.component';
import { Error404Component } from './errors/404.component';

import { AuthGuard } from './client-signup/auth.guard';
import { ReservationGuard } from './reservation-form/reservation.guard';

export const appRoutes: Routes = [
  { path: '', component: StartPageComponent },
  {
    path: 'signup',
    component: ClientSignupComponent,
  },
  {
    path: 'reservation',
    component: ReservationFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    canActivate: [ReservationGuard],
  },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '/404' },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
