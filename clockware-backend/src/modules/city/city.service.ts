import { getManager, getRepository } from 'typeorm';
import { NotFound } from '../../common/exceptions';

import { City } from './city.entity';

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

  public async createOne(newCity: City): Promise<City> {
    const createdCity: City = await getRepository(City).create(newCity);
    await getRepository(City).save(createdCity);
    return createdCity;
  }

  public async updateOne(id: number, updates: City): Promise<City> {
    return getManager().transaction(async (transactionalEntityManager) => {
      const city: City | undefined = await transactionalEntityManager
        .getRepository(City)
        .findOne(id);
      if (!city) {
        throw new NotFound(`There is no city with id ${id}`);
      }

      await transactionalEntityManager.getRepository(City).update(id, updates);

      const updatedCity: City = await transactionalEntityManager
        .getRepository(City)
        .findOneOrFail(id);
      return updatedCity;
    });
  }

  public async deleteOne(id: number): Promise<number> {
    return getManager().transaction(async (transactionalEntityManager) => {
      const city: City | undefined = await transactionalEntityManager
        .getRepository(City)
        .findOne(id);
      if (!city) {
        throw new NotFound(`There is no city with id ${id}`);
      }

      await transactionalEntityManager.getRepository(City).remove(city);
      return id;
    });
  }
}

export const cityService = new CityService();
