import { Request, Response, NextFunction } from 'express';

import { cityService } from './city.service';
import { City } from './city.entity';

class CityController {
  public async findMany(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const cities: City[] = await cityService.findMany();
      res.json(cities);
    } catch (e) {
      next(e);
    }
  }

  public async findOneById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const city: City = await cityService.findOneById(id);
      res.json(city);
    } catch (e) {
      next(e);
    }
  }

  public async createOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const createdCity: City = await cityService.createOne(req.body);
      res.json(createdCity);
    } catch (e) {
      next(e);
    }
  }

  public async updateOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const updatedCity: City = await cityService.updateOne(id, req.body);
      res.json(updatedCity);
    } catch (e) {
      next(e);
    }
  }

  public async deleteOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const deletedCityId: number = await cityService.deleteOne(id);
      res.json({ id: deletedCityId });
    } catch (e) {
      next(e);
    }
  }
}

export const cityController = new CityController();
