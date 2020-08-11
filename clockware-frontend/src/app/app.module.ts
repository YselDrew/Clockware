import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StartingPageComponent } from './starting-page/starting-page.component';
import { ClientSignupComponent } from './client-signup/client-signup.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';

import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    StartingPageComponent,
    ClientSignupComponent,
    ReservationFormComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
