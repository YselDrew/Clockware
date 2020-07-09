import { DataTypes, Model, Sequelize } from "sequelize";
import { sequelize } from "../../database";

export class Employee extends Model {
  public static readonly tableName: string = "employees";

  public id: number;
  public firstName: string;
  public lastName: string;
  public cityId: number;
  public rate: number;

  public static prepareInit(seq: Sequelize) {
    this.init(
      {
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

      },
      {
        sequelize,
        tableName: this.tableName,
      }
    );
  }
}

Employee.prepareInit(sequelize);
