import { QueryInterface, DataTypes } from "sequelize";
import { Reservation } from "../modules/reservation/reservation.model";

export async function up(query: QueryInterface) {
  return query.createTable(Reservation.tableName, {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    clientId: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    employeeId: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    cityId: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    clockSizeId: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE(),
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
  return query.dropTable(Reservation.tableName);
}
