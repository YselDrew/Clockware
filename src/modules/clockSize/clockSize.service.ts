import { getRepository } from 'typeorm'
import { NotFound } from '../../common/exceptions';

import { ClockSize } from './clockSize.entity';

class ClockSizeService {
  public async findMany(): Promise<ClockSize[]> {
    return getRepository(ClockSize).find();
  }

  public async findOneById(id: number): Promise<ClockSize> {
    const clockSize: ClockSize | undefined = await getRepository(ClockSize).findOne(id);
    if (!clockSize) {
      throw new NotFound(`There is no clock size with id ${id}`);
    }
    return clockSize;
  }
}

export const clockSizeService = new ClockSizeService();
