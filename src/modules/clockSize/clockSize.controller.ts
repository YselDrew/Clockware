import { Request, Response, NextFunction } from 'express';

import { ClockSize } from './clockSize.entity';
import { clockSizeService } from './clockSize.service';

class ClockSizeController {
  public async findMany(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const clockSizes: ClockSize[] = await clockSizeService.findMany();
      res.json(clockSizes);
    } catch (e) {
      next(e);
    }
  }

  public async findOneById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const clockSize: ClockSize = await clockSizeService.findOneById(id);
      res.json(clockSize);
    } catch (e) {
      next(e);
    }
  }
}

export const clockSizeController = new ClockSizeController();
