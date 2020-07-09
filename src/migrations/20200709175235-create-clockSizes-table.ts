import { QueryInterface, DataTypes } from "sequelize";
import { ClockSize } from "../modules/clockSize/clockSize.model";

export async function up(query: QueryInterface) {
  return query.createTable(ClockSize.tableName, {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    size: {
      type: DataTypes.STRING(25),
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
  return query.dropTable(ClockSize.tableName);
}
