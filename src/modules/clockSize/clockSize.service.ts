import { ClockSize } from './clockSize.model';
import { NotFound } from '../../common/exceptions';

class ClockSizeService {
  public async findMany(): Promise<ClockSize[]> {
    return ClockSize.findAll();
  }

  public async findOneById(id: number): Promise<ClockSize> {
    const clockSize: ClockSize = await ClockSize.findOne({ where: { id } });
    if (!clockSize) {
      throw new NotFound(`There is no clock size with id ${id}`);
    }
    return clockSize;
  }
}

export const clockSizeService = new ClockSizeService();
