import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './reservation-form.component.html',
  styleUrls: ['../shared/styles/form.styles.css'],
})
export class ReservationFormComponent {
  constructor(private router: Router) {}

  cancel() {
    this.router.navigate(['/signup']);
  }
}
