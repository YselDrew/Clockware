import { sequelize } from '../database';

import { Admin } from './admin/admin.model';
import { Client } from './client/client.model';
import { Employee } from './employee/employee.model';
import { City } from './city/city.model';
import { ClockSize } from './clockSize/clockSize.model';
import { Reservation } from './reservation/reservation.model';

Admin.prepareInit(sequelize);
Client.prepareInit(sequelize);
Employee.prepareInit(sequelize);
City.prepareInit(sequelize);
ClockSize.prepareInit(sequelize);
Reservation.prepareInit(sequelize);

Client.hasMany(Reservation, {
    foreignKey: 'clientId',
    as: 'reservations',
});

Employee.hasMany(Reservation, {
    foreignKey: 'employeeId',
    as: 'reservations',
});
Employee.belongsTo(City, {
    foreignKey: 'cityId',
    as: 'city',
});

City.hasMany(Employee, {
    foreignKey: 'cityId',
    as: 'employees',
});
City.hasMany(Reservation, {
    foreignKey: 'cityId',
    as: 'reservations',
});

ClockSize.hasMany(Reservation, {
    foreignKey: 'clockSizeId',
    as: 'reservations',
});

Reservation.belongsTo(Client, {
    foreignKey: 'clientId',
    as: 'client',
});
Reservation.belongsTo(Employee, {
    foreignKey: 'employeeId',
    as: 'employee',
});
Reservation.belongsTo(City, {
    foreignKey: 'cityId',
    as: 'city',
});
Reservation.belongsTo(ClockSize, {
    foreignKey: 'clockSizeId',
    as: 'clockSize',
});
