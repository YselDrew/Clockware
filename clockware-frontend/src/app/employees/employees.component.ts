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

  page = 1;
  limit = 9;
  options: any;

  employees: any;

  ngOnInit() {
    this.reservationFormService.currentSearchOptions.subscribe((options) => {
      this.options = {
        cityId: options.cityId,
        time: options.time,
        page: this.page,
        limit: this.limit,
      };
    });

    this.employeeService
      .getEmployees(this.options)
      .subscribe((employees: any) => {
        this.employees = employees.data;
      });
  }

  changeDetails() {
    this.router.navigate(['/reservation']);
  }
}

// const temp = {
//   data: [
//     {
//       id: 3,
//       firstName: 'Darrell',
//       lastName: 'Travis',
//       rate: 3,
//       availableFrom: '2020-07-29T16:43:24.989Z',
//       createdAt: '2020-07-29T10:06:44.104Z',
//       updatedAt: '2020-07-29T14:21:56.957Z',
//       cityId: 1,
//       city: {
//         id: 1,
//         name: 'Dnipro',
//         createdAt: '2020-07-29T10:05:47.624Z',
//         updatedAt: '2020-07-29T10:05:47.624Z',
//       },
//     },
//     {
//       id: 4,
//       firstName: 'James',
//       lastName: 'Willis',
//       rate: 4,
//       availableFrom: '2020-07-29T10:06:44.104Z',
//       createdAt: '2020-07-29T10:06:44.104Z',
//       updatedAt: '2020-07-29T10:06:44.104Z',
//       cityId: 1,
//       city: {
//         id: 1,
//         name: 'Dnipro',
//         createdAt: '2020-07-29T10:05:47.624Z',
//         updatedAt: '2020-07-29T10:05:47.624Z',
//       },
//     },
//     {
//       id: 6,
//       firstName: 'Rod',
//       lastName: 'Cutler',
//       rate: 5,
//       availableFrom: '2020-07-29T10:06:44.104Z',
//       createdAt: '2020-07-29T10:06:44.104Z',
//       updatedAt: '2020-07-29T10:06:44.104Z',
//       cityId: 1,
//       city: {
//         id: 1,
//         name: 'Dnipro',
//         createdAt: '2020-07-29T10:05:47.624Z',
//         updatedAt: '2020-07-29T10:05:47.624Z',
//       },
//     },
//     {
//       id: 8,
//       firstName: 'Hugo',
//       lastName: 'Barrera',
//       rate: 3,
//       availableFrom: '2020-07-29T10:06:44.104Z',
//       createdAt: '2020-07-29T10:06:44.104Z',
//       updatedAt: '2020-07-29T10:06:44.104Z',
//       cityId: 1,
//       city: {
//         id: 1,
//         name: 'Dnipro',
//         createdAt: '2020-07-29T10:05:47.624Z',
//         updatedAt: '2020-07-29T10:05:47.624Z',
//       },
//     },
//     {
//       id: 10,
//       firstName: 'Gilbert',
//       lastName: 'Gordon',
//       rate: 2,
//       availableFrom: '2020-07-29T10:06:44.104Z',
//       createdAt: '2020-07-29T10:06:44.104Z',
//       updatedAt: '2020-07-29T10:06:44.104Z',
//       cityId: 1,
//       city: {
//         id: 1,
//         name: 'Dnipro',
//         createdAt: '2020-07-29T10:05:47.624Z',
//         updatedAt: '2020-07-29T10:05:47.624Z',
//       },
//     },
//     {
//       id: 11,
//       firstName: 'Richard',
//       lastName: 'Wright',
//       rate: 4,
//       availableFrom: '2020-07-29T10:06:44.104Z',
//       createdAt: '2020-07-29T10:06:44.104Z',
//       updatedAt: '2020-07-29T10:06:44.104Z',
//       cityId: 1,
//       city: {
//         id: 1,
//         name: 'Dnipro',
//         createdAt: '2020-07-29T10:05:47.624Z',
//         updatedAt: '2020-07-29T10:05:47.624Z',
//       },
//     },
//     {
//       id: 13,
//       firstName: 'John',
//       lastName: 'Klingensmith',
//       rate: 4,
//       availableFrom: '2020-07-29T10:06:44.104Z',
//       createdAt: '2020-07-29T10:06:44.104Z',
//       updatedAt: '2020-07-29T10:06:44.104Z',
//       cityId: 1,
//       city: {
//         id: 1,
//         name: 'Dnipro',
//         createdAt: '2020-07-29T10:05:47.624Z',
//         updatedAt: '2020-07-29T10:05:47.624Z',
//       },
//     },
//     {
//       id: 14,
//       firstName: 'George',
//       lastName: 'Ironsmith',
//       rate: 5,
//       availableFrom: '2020-07-29T10:06:44.104Z',
//       createdAt: '2020-07-29T10:06:44.104Z',
//       updatedAt: '2020-07-29T10:06:44.104Z',
//       cityId: 1,
//       city: {
//         id: 1,
//         name: 'Dnipro',
//         createdAt: '2020-07-29T10:05:47.624Z',
//         updatedAt: '2020-07-29T10:05:47.624Z',
//       },
//     },
//     {
//       id: 15,
//       firstName: 'Arthur',
//       lastName: 'Trust',
//       rate: 1,
//       availableFrom: '2020-07-29T10:06:44.104Z',
//       createdAt: '2020-07-29T10:06:44.104Z',
//       updatedAt: '2020-07-29T10:06:44.104Z',
//       cityId: 1,
//       city: {
//         id: 1,
//         name: 'Dnipro',
//         createdAt: '2020-07-29T10:05:47.624Z',
//         updatedAt: '2020-07-29T10:05:47.624Z',
//       },
//     },
//   ],
//   pagination: {
//     page: 1,
//     total: 7,
//     limit: 9,
//   },
// };
