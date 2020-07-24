import { getManager, getRepository } from 'typeorm';
import { NotFound } from '../../common/exceptions';

import { City } from '../../entity/City';

class CityService {
  public async findMany(): Promise<City[]> {
    return getRepository(City).find();
  }

  public async findOneById(id: number): Promise<City> {
    const city: City | undefined = await getRepository(City).findOne(id);
    if (!city) {
      throw new NotFound(`There is no city with id ${id}`);
    }
    return city;
  }
}

export const cityService = new CityService();
