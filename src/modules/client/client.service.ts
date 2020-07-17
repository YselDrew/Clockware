import { Client } from './client.model';
import { NotFound } from '../../common/exceptions';
import { sequelize } from '../../database';
import { Transaction } from 'sequelize';

class ClientService {
  public async findMany(): Promise<Client[]> {
    return Client.findAll();
  }

  public async findOneById(id: number): Promise<Client> {
    const client: Client = await Client.findOne({ where: { id } });
    if (!client) {
      throw new NotFound(`There is no client with id ${id}`);
    }
    return client;
  }

  public async createOne(newClient: Client): Promise<Client> {
    const createdClient: Client = await Client.create(newClient);
    return createdClient;
  }

  public async updateOne(id: number, updates: Client): Promise<Client> {
    return sequelize.transaction(async (transaction: Transaction) => {
      const client: Client = await Client.findOne({ where: { id }, transaction });
      if (!client) {
        throw new NotFound(`There is no client with id ${id}`);
      }
      const [updatedRow, [updatedClient]] = await Client.update(updates, {
        returning: true,
        where: { id },
        transaction,
      });
      return updatedClient;
    });
  }

  public async deleteOne(id: number): Promise<number> {
    return sequelize.transaction(async (transaction: Transaction) => {
      const client: Client = await Client.findOne({ where: { id }, transaction });
      if (!client) {
        throw new NotFound(`There is no client with id ${id}`);
      }
      await Client.destroy({ where: { id }, transaction });
      return id;
    });
  }
}

export const clientService = new ClientService();
