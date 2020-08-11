import { Routes } from '@angular/router';
import { StartingPageComponent } from './starting-page/starting-page.component';
import { ClientSignupComponent } from './client-signup/client-signup.component';

export const appRoutes: Routes = [
  { path: '', component: StartingPageComponent },
  { path: 'signup', component: ClientSignupComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
