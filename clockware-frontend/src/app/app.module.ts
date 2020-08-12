import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { appRoutes } from './routes';

import { StartPageComponent } from './start-page/start-page.component';
import { ClientSignupComponent } from './client-signup/client-signup.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { EmployeesComponent } from './employees/employees.component';
import { Error404Component } from './errors/404.component';

import { AuthGuard } from './client-signup/auth.guard';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    StartPageComponent,
    ClientSignupComponent,
    ReservationFormComponent,
    EmployeesComponent,
    Error404Component,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
