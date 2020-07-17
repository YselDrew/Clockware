import { DataTypes, Model, Sequelize } from 'sequelize';

export class City extends Model {
  public static readonly tableName: string = 'cities';

  public id: number;
  public name: string;

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
          type: DataTypes.STRING(100),
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
