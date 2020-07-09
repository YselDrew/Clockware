import { QueryInterface } from 'sequelize';
import { Client } from '../modules/client/client.model';

const clients = require('../../data/clients');

clients.forEach((city) => {
  city.createdAt = new Date();
  city.updatedAt = new Date();
});

export async function up(query: QueryInterface) {
  return query.bulkInsert(Client.tableName, clients);
}

export async function down(query: QueryInterface) {
  query.bulkDelete(Client.tableName, null, {});
}

