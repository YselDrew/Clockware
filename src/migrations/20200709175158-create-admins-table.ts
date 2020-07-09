import { QueryInterface, DataTypes } from "sequelize";
import { Admin } from "../modules/admin/admin.model";

export async function up(query: QueryInterface) {
  return query.createTable(Admin.tableName, {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    login: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
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
  return query.dropTable(Admin.tableName);
}
