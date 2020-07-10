import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../../database';

export class ClockSize extends Model {
  public static readonly tableName: string = 'clockSizes';

  public id: number;
  public size: string;

  public static prepareInit(seq: Sequelize) {
    this.init(
      {
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
      },
      {
        sequelize,
        tableName: this.tableName,
      }
    );
  }
}

ClockSize.prepareInit(sequelize);
