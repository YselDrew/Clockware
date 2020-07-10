import { ClockSize } from './clockSize.model';

class ClockSizeService {
    public async findMany(): Promise<ClockSize[]> {
        return ClockSize.findAll();
    }

    public async findOneById(id): Promise<ClockSize> {
        return ClockSize.findOne({ where: { id } });
    }
}

export const clockSizeService = new ClockSizeService();
