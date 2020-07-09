import { Client } from './client.model';
import { clientService } from './client.service';

class ClientController {
    public async findMany(req, res, next): Promise<void> {
        try {
            const clients: Client[] = await clientService.findMany();
            res.json(clients);
        } catch (e) {
            next(e);
        }
    }
}

export const clientController = new ClientController();
