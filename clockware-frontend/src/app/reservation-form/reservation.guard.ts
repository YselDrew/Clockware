import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { ReservationFormService } from '../reservation-form/reservation-form.service';

@Injectable()
export class ReservationGuard implements CanActivate {
  constructor(
    private router: Router,
    private reservationFormService: ReservationFormService
  ) {}

  options: any;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.reservationFormService.currentSearchOptions.subscribe((options) => {
      this.options = options;
    });

    if (Object.keys(this.options).length) {
      return true;
    }

    this.router.navigate(['/reservation']);
    return false;
  }
}
