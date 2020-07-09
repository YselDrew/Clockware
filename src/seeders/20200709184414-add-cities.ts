import { QueryInterface } from 'sequelize';
import { City } from '../modules/city/city.model';

const cities = require('../../data/cities.json');

cities.forEach((city) => {
  city.createdAt = new Date();
  city.updatedAt = new Date();
});

export async function up(query: QueryInterface) {
  return query.bulkInsert(City.tableName, cities);
}

export async function down(query: QueryInterface) {
  query.bulkDelete(City.tableName, null, {});
}

