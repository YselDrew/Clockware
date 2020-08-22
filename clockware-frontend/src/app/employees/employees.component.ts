import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReservationFormService } from '../reservation-form/reservation-form.service';

@Component({
  templateUrl: './employees.component.html',
})
export class EmployeesComponent implements OnInit {
  constructor(
    private router: Router,
    private reservationFormService: ReservationFormService
  ) {}

  options: any;

  ngOnInit() {
    this.reservationFormService.currentSearchOptions.subscribe((options) => {
      this.options = options;
      console.log(this.options);
    });
  }
}
