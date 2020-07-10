import { DataTypes, Model, Sequelize } from "sequelize";
import { sequelize } from "../../database";

export class Admin extends Model {
  public static readonly tableName: string = "admins";

  public id: number;
  public login: string;
  public password: string;

  public static prepareInit(seq: Sequelize) {
    this.init(
      {
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
      },
      {
        sequelize,
        tableName: this.tableName,
      }
    );
  }
}

Admin.prepareInit(sequelize);