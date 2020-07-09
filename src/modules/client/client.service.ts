import { Client } from './client.model';

class ClientService {
    public async findMany(): Promise<Client[]> {
        return Client.findAll();
    }
}

export const clientService = new ClientService();
