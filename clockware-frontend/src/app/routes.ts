import { Routes } from '@angular/router';
import { StartingPageComponent } from './starting-page/starting-page.component';
import { ClientSignupComponent } from './client-signup/client-signup.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';

export const appRoutes: Routes = [
  { path: '', component: StartingPageComponent },
  { path: 'signup', component: ClientSignupComponent },
  { path: 'reservation', component: ReservationFormComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
