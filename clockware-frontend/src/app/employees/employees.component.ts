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
  private pagination: any;

  private date: string;
  private hours: string;
  private currentEmployee: any;

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
      // cityId: 2,
      // time: '2020-08-23T16:31:00.000Z',
      page: 1,
      limit: 9,
    };

    console.log(this.queryParams);

    this.getEmployees();
    this.formatTime();
  }

  addEmployeeId(id: number) {
    this.reservationDetails.employeeId = id;
    this.currentEmployee = this.employees.find((employee) => {
      return employee.id === id;
    });
  }

  formatTime() {
    const UtcDate = new Date(this.queryParams.time).toUTCString();
    this.date = UtcDate.slice(0, -18);
    this.hours = UtcDate.slice(16, -7);
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
