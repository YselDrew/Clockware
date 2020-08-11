import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './client-signup.component.html',
  styleUrls: ['./client-signup.component.css'],
})
export class ClientSignupComponent {
  constructor(private router: Router) {}
  cancel() {
    this.router.navigate(['/']);
  }
}
