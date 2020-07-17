import { QueryInterface, DataTypes } from 'sequelize';

import { Client } from '../modules/client/client.model';
import { Employee } from '../modules/employee/employee.model';
import { City } from '../modules/city/city.model';
import { ClockSize } from '../modules/clockSize/clockSize.model';
import { Reservation } from '../modules/reservation/reservation.model';

export async function up(query: QueryInterface) {
  return query.sequelize.transaction(transaction => {
    return Promise.all([
      query.changeColumn(Employee.tableName, 'cityId', {
        type: DataTypes.INTEGER(),
        references: {
          model: City.tableName,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }, { transaction }),
      query.changeColumn(Reservation.tableName, 'clientId', {
        type: DataTypes.INTEGER(),
        references: {
          model: Client.tableName,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }, { transaction }),
      query.changeColumn(Reservation.tableName, 'employeeId', {
        type: DataTypes.INTEGER(),
        references: {
          model: Employee.tableName,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }, { transaction }),
      query.changeColumn(Reservation.tableName, 'cityId', {
        type: DataTypes.INTEGER(),
        references: {
          model: City.tableName,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }, { transaction }),
      query.changeColumn(Reservation.tableName, 'clockSizeId', {
        type: DataTypes.INTEGER(),
        references: {
          model: ClockSize.tableName,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }, { transaction }),
    ])
  })
}

export async function down(query: QueryInterface) {
  return query.sequelize.transaction(transaction => {
    return Promise.all([
      query.changeColumn(Employee.tableName, 'cityId', {
        type: DataTypes.INTEGER(),
        allowNull: false,
      }, { transaction }),
      query.changeColumn(Reservation.tableName, 'clientId', {
        type: DataTypes.INTEGER(),
        allowNull: false,
      }, { transaction }),
      query.changeColumn(Reservation.tableName, 'employeeId', {
        type: DataTypes.INTEGER(),
        allowNull: false,
      }, { transaction }),
      query.changeColumn(Reservation.tableName, 'cityId', {
        type: DataTypes.INTEGER(),
        allowNull: false,
      }, { transaction }),
      query.changeColumn(Reservation.tableName, 'clockSizeId', {
        type: DataTypes.INTEGER(),
        allowNull: false,
      }, { transaction }),
    ])
  })
}
