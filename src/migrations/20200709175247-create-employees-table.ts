import { QueryInterface, DataTypes } from 'sequelize';
import { Employee } from '../modules/employee/employee.model';

export async function up(query: QueryInterface) {
  return query.createTable(Employee.tableName, {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    cityId: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    rate: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE(),
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE(),
      allowNull: false,
    },
  });
}

export async function down(query: QueryInterface) {
  return query.dropTable(Employee.tableName);
}
