import { QueryInterface, DataTypes } from 'sequelize';
import { Employee } from '../modules/employee/employee.model';

export async function up(query: QueryInterface) {
  return query.changeColumn(Employee.tableName, 'rate', {
    type: DataTypes.FLOAT(),
    allowNull: true,
  });
}

export async function down(query: QueryInterface) {
  return query.changeColumn(Employee.tableName, 'rate', {
    type: DataTypes.INTEGER(),
    allowNull: false,
  });
}
