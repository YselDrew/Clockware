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
