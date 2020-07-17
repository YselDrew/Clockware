import { DataTypes, Model, Sequelize } from 'sequelize';

export class Client extends Model {
  public static readonly tableName: string = 'clients';

  public id: number;
  public name: string;
  public email: string;
  public city: string;

  public static prepareInit(sequelize: Sequelize) {
    this.init(
      {
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
      },
      {
        sequelize,
        tableName: this.tableName,
      }
    );
  }
}
