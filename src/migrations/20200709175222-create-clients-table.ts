import { QueryInterface, DataTypes } from "sequelize";
import { Client } from "../modules/client/client.model";

export async function up(query: QueryInterface) {
  return query.createTable(Client.tableName, {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    city: {
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
  return query.dropTable(Client.tableName);
}
