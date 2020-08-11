import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ReservationFormService } from './reservation-form.service';

@Component({
  templateUrl: './reservation-form.component.html',
  styleUrls: ['../shared/styles/form.styles.css'],
  providers: [ReservationFormService],
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
    this.reservationFormService.getClockSizes().subscribe((clockSizes) => {
      this.clockSizes = clockSizes;
    });

    this.reservationFormService.getCities().subscribe((cities) => {
      this.cities = cities;
    });

    this.loaded = true; // FIX: add inside subscribe
  }

  findEmployee(formValues) {
    const reservationDetails = {
      size: formValues.size,
      city: formValues.city,
      date: formValues.date,
    };
    console.log(reservationDetails);
  }

  cancel() {
    this.router.navigate(['/signup']);
  }
}
