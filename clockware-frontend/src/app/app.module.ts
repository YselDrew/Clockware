import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';

import { appRoutes } from './routes';

import { StartPageComponent } from './start-page/start-page.component';
import { ClientSignupComponent } from './client-signup/client-signup.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeThumbnailComponent } from './employees/employee-thumbnail/employee-thumbnail.component';
import { Error404Component } from './errors/404.component';

import { AuthGuard } from './client-signup/auth.guard';
import { ReservationFormService } from './reservation-form/reservation-form.service';
import { EmployeeService } from './employees/employees.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AngularFontAwesomeModule,
  ],
  declarations: [
    AppComponent,
    StartPageComponent,
    ClientSignupComponent,
    ReservationFormComponent,
    EmployeesComponent,
    EmployeeThumbnailComponent,
    Error404Component,
  ],
  providers: [AuthGuard, ReservationFormService, EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
