import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class EmployeeService {
  private api = environment.API_URL;
  constructor(private http: HttpClient) {}

  getEmployees(params) {
    return this.http.get(`${this.api}/employees`, {
      params,
    });
  }
}
