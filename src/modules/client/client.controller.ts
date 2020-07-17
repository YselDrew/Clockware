import { Request, Response, NextFunction } from 'express';
import { clientService } from './client.service';
import { Client } from './client.model';

class ClientController {
  public async findMany(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const clients: Client[] = await clientService.findMany();
      res.json(clients);
    } catch (e) {
      next(e);
    }
  }

  public async findOneById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id: number = parseInt(req.params.id);
      const client: Client = await clientService.findOneById(id);
      res.json(client);
    } catch (e) {
      next(e);
    }
  }

  public async createOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const createdClient: Client = await clientService.createOne(req.body);
      res.json(createdClient);
    } catch (e) {
      next(e);
    }
  }

  public async updateOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id: number = parseInt(req.params.id);
      const updatedClient: Client = await clientService.updateOne(id, req.body);
      res.json(updatedClient);
    } catch (e) {
      next(e);
    }
  }

  public async deleteOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id: number = parseInt(req.params.id);
      const deletedClientId: number = await clientService.deleteOne(id);
      res.json({ id: deletedClientId });
    } catch (e) {
      next(e);
    }
  }
}

export const clientController = new ClientController();
