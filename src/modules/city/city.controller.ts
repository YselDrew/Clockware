import { Request, Response, NextFunction } from 'express';

import { cityService } from './city.service';
import { City } from '../../entity/City';

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
}

export const cityController = new CityController();
