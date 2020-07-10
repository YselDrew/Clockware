import { Client } from './client.model';
import { NotFound } from '../../common/exceptions'

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
}

export const clientService = new ClientService();
