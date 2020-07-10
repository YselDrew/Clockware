import { Client } from './client.model';

class ClientService {
    public async findMany(): Promise<Client[]> {
        return Client.findAll();
    }

    public async findOneById(id): Promise<Client> {
        return Client.findOne({ where: { id } });
    }
}

export const clientService = new ClientService();
