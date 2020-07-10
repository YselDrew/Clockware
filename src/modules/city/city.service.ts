import { City } from './city.model';

class CityService {
    public async findMany(): Promise<City[]> {
        return City.findAll();
    }

    public async findOneById(id): Promise<City> {
        return City.findOne({ where: { id } });
    }
}

export const cityService = new CityService();
