import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class ReservationFormService {
  private api = environment.API_URL;

  private defaultSearchOptions = new BehaviorSubject<any>({});
  currentSearchOptions = this.defaultSearchOptions.asObservable();

  constructor(private http: HttpClient) {}

  getClockSizes() {
    return this.http.get(`${this.api}/clockSizes`);
  }

  getCities() {
    return this.http.get(`${this.api}/cities`);
  }

  updateSearchOptions(options: any) {
    this.defaultSearchOptions.next(options);
  }
}
