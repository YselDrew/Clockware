import { Request, Response, NextFunction } from 'express';
import { clockSizeService } from './clockSize.service';
import { ClockSize } from './clockSize.model';

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
      const id: number = parseInt(req.params.id);
      const clockSize: ClockSize = await clockSizeService.findOneById(id);
      res.json(clockSize);
    } catch (e) {
      next(e);
    }
  }
}

export const clockSizeController = new ClockSizeController();
