import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReservationFormService } from '../reservation-form/reservation-form.service';
import { EmployeeService } from './employees.service';

@Component({
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  constructor(
    private router: Router,
    private reservationFormService: ReservationFormService,
    private employeeService: EmployeeService
  ) {}

  reservationDetails: any;
  queryParams: any;

  employees: any;
  pagination: any;

  ngOnInit() {
    this.reservationFormService.currentSearchOptions.subscribe(
      ({ clockSizeId, cityId, time }) => {
        this.reservationDetails = {
          cityId,
          clockSizeId,
          time,
        };
      }
    );

    this.queryParams = {
      time: this.reservationDetails.time,
      cityId: this.reservationDetails.cityId,
      // cityId: 1,
      // time: '2020-08-23T16:31:00.000Z',
      page: 1,
      limit: 9,
    };

    console.log(this.queryParams);

    this.getEmployees();
  }

  updateDetails(id: number) {
    this.reservationDetails.employeeId = id;
    console.log(this.reservationDetails);
  }

  changeDetails() {
    this.router.navigate(['/reservation']);
  }

  nextPage() {
    this.queryParams.page++;
    this.getEmployees();
  }

  previousPage() {
    this.queryParams.page--;
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService
      .getEmployees(this.queryParams)
      .subscribe((employeesData: any) => {
        this.employees = employeesData.data;
        this.pagination = employeesData.pagination;

        this.queryParams.page = this.pagination.page;
        this.queryParams.limit = this.pagination.limit;
      });
  }
}
