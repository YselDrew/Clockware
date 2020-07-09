import { QueryInterface } from 'sequelize';
import { Employee } from '../modules/employee/employee.model';

const employees = require('../../data/employees');

employees.forEach((city) => {
  city.createdAt = new Date();
  city.updatedAt = new Date();
});

export async function up(query: QueryInterface) {
  return query.bulkInsert(Employee.tableName, employees);
}

export async function down(query: QueryInterface) {
  query.bulkDelete(Employee.tableName, null, {});
}
