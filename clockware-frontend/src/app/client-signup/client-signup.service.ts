import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class ClientSignupService {
  private api = environment.API_URL;
  constructor(private http: HttpClient) {}

  postClient(client: any) {
    return this.http.post(`${this.api}/clients`, client);
  }

  addToLocalStorage(client: any) {
    localStorage.setItem('client', JSON.stringify(client));
  }
}
