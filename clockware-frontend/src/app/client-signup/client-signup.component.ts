import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './client-signup.component.html',
  styleUrls: ['../shared/styles/form.styles.css'],
})
export class ClientSignupComponent implements OnInit {
  newClientForm: FormGroup;

  name: FormControl;
  email: FormControl;
  city: FormControl;

  isDirty = true;

  constructor(private router: Router) {}

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
    const client = {
      name: formValues.name,
      email: formValues.email,
      city: formValues.city,
    };
    this.isDirty = false;
    console.log(client);
  }

  // signUp() {
  //   const client = {
  //     name: this.name,
  //     email: this.email,
  //     city: this.city,
  //   };
  //   console.log(client);
  //   // this.router.navigate(['/reservation']);
  // }

  cancel() {
    this.router.navigate(['/']);
  }
}
