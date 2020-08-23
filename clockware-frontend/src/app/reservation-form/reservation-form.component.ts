import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ReservationFormService } from './reservation-form.service';

@Component({
  templateUrl: './reservation-form.component.html',
  styleUrls: ['../shared/styles/form.styles.css'],
})
export class ReservationFormComponent implements OnInit {
  makeReservationForm: FormGroup;
  size: FormControl;
  city: FormControl;
  date: FormControl;

  clockSizes: any;
  cities: any;

  loaded = false;

  constructor(
    private router: Router,
    private reservationFormService: ReservationFormService
  ) {}

  ngOnInit() {
    this.size = new FormControl('', Validators.required);
    this.city = new FormControl('', Validators.required);
    this.date = new FormControl('', Validators.required);

    this.makeReservationForm = new FormGroup({
      size: this.size,
      city: this.city,
      date: this.date,
    });

    // FIX: rewrite as one-by-one request
    this.reservationFormService.getClockSizes().subscribe((clockSizes: any) => {
      this.clockSizes = clockSizes;
    });

    this.reservationFormService.getCities().subscribe((cities: any) => {
      this.cities = cities;
    });

    this.loaded = true; // FIX: add inside subscribe
  }

  updateOptions(options: any) {
    this.reservationFormService.updateSearchOptions(options);
  }

  findEmployee(formValues: any) {
    const reservationDetails = {
      clockSizeId: formValues.size,
      cityId: formValues.city,
      time: `${formValues.date}:00.000Z`, // FIX: check how to fix that properly
    };

    this.updateOptions(reservationDetails);
    this.router.navigate(['/employees']);
  }

  cancel() {
    this.router.navigate(['/signup']);
  }
}
