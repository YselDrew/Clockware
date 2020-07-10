import { City } from './city.model';
import { NotFound } from '../../common/exceptions';

class CityService {
  public async findMany(): Promise<City[]> {
    return City.findAll();
  }

  public async findOneById(id: number): Promise<City> {
    const city: City = await City.findOne({ where: { id } });
    if (!city) {
      throw new NotFound(`There is no city with id ${id}`);
    }
    return city;
  }
}

export const cityService = new CityService();
