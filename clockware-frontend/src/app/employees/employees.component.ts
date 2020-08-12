import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './employees.component.html',
})
export class EmployeesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
