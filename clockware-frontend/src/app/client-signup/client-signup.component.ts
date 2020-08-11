import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ClientSignupService } from './client-signup.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './client-signup.component.html',
  styleUrls: ['../shared/styles/form.styles.css'],
  providers: [ClientSignupService],
})
export class ClientSignupComponent implements OnInit {
  newClientForm: FormGroup;
  recievedClient: any;

  name: FormControl;
  email: FormControl;
  city: FormControl;

  constructor(
    private router: Router,
    private clientSignupService: ClientSignupService
  ) {}

  ngOnInit() {
    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(25),
      Validators.pattern(/^[A-Za-z]+/),
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i),
    ]);
    this.city = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(/^[A-Za-z]+/),
    ]);

    this.newClientForm = new FormGroup({
      name: this.name,
      email: this.email,
      city: this.city,
    });
  }

  saveClient(formValues) {
    const newClient: any = {
      name: formValues.name,
      email: formValues.email,
      city: formValues.city,
    };
    this.clientSignupService.postClient(newClient).subscribe(
      (client: any) => {
        this.recievedClient = client;
        this.router.navigate(['/reservation']);
        console.log(this.recievedClient);
      },
      (error) => console.log(error)
    );
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
