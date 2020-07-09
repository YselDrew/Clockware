import { QueryInterface } from 'sequelize';
import { ClockSize } from '../modules/clockSize/clockSize.model';

const clockSizes = require('../../data/clockSizes');

clockSizes.forEach((city) => {
  city.createdAt = new Date();
  city.updatedAt = new Date();
});

export async function up(query: QueryInterface) {
  return query.bulkInsert(ClockSize.tableName, clockSizes);
}

export async function down(query: QueryInterface) {
  query.bulkDelete(ClockSize.tableName, null, {});
}
