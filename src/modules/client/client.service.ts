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
    return getManager().transaction(async (transactionalEntityManager) => {
      const existedClient: Client | undefined = await transactionalEntityManager
        .getRepository(Client)
        .findOne({ where: { email: newClient.email } });

      if (!existedClient) {
        const createdClient: Client = await transactionalEntityManager
          .getRepository(Client)
          .create(newClient);
        await getRepository(Client).save(createdClient);
        return createdClient;
      }

      return existedClient;
    });
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

      const updatedClient: Client = await transactionalEntityManager
        .getRepository(Client)
        .findOneOrFail(id);
      return updatedClient;
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
