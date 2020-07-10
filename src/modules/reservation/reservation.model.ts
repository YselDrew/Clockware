import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../../database';

export class Reservation extends Model {
  public static readonly tableName: string = 'reservations';

  public id: number;
  public clientId: number;
  public employeeId: number;
  public cityId: number;
  public clockSizeId: number;
  public date: string;

  public static prepareInit(seq: Sequelize) {
    this.init(
      {
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
      },
      {
        sequelize,
        tableName: this.tableName,
      }
    );
  }
}

Reservation.prepareInit(sequelize);
