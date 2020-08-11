import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class ReservationFormService {
  private api = environment.API_URL;
  constructor(private http: HttpClient) {}

  getClockSizes() {
    return this.http.get(`${this.api}/clockSizes`);
  }

  getCities() {
    return this.http.get(`${this.api}/cities`);
  }
}
