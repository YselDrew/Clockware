import { getRepository, getManager } from 'typeorm';
import { NotFound } from '../../common/exceptions';

import { Client } from './client.entity';

class ClientService {
  public async findMany(): Promise<Client[]> {
    return getRepository(Client).find();
  }

  public async findOneById(id: number): Promise<Client> {
    const client: Client | undefined = await getRepository(Client).findOne(id);
    if (!client) {
      throw new NotFound(`There is no client with id ${id}`);
    }
    return client;
  }

  public async createOne(newClient: Client): Promise<Client> {
    const createdClient: Client = await getRepository(Client).create(newClient);
    await getRepository(Client).save(createdClient);
    return createdClient;
  }

  public async updateOne(id: number, updates: Client): Promise<Client> {
    return getManager().transaction(async (transactionalEntityManager) => {
      const client: Client | undefined = await transactionalEntityManager
        .getRepository(Client)
        .findOne(id);
      if (!client) {
        throw new NotFound(`There is no client with id ${id}`);
      }

      await transactionalEntityManager.getRepository(Client).update(id, updates);

      const updatedUser: Client = await transactionalEntityManager
        .getRepository(Client)
        .findOneOrFail(id);
      return updatedUser;
    });
  }

  public async deleteOne(id: number): Promise<number> {
    return getManager().transaction(async (transactionalEntityManager) => {
      const client: Client | undefined = await transactionalEntityManager
        .getRepository(Client)
        .findOne(id);
      if (!client) {
        throw new NotFound(`There is no client with id ${id}`);
      }

      await transactionalEntityManager.getRepository(Client).remove(client);
      return id;
    });
  }
}

export const clientService = new ClientService();
