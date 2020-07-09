import { QueryInterface, DataTypes } from "sequelize";
import { City } from "../modules/city/city.model";

export async function up(query: QueryInterface) {
  return query.createTable(City.tableName, {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
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
  return query.dropTable(City.tableName);
}
