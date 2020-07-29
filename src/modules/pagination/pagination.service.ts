import { IOffset } from '../../common/interfaces/pagination.interfaces';

class PaginationService {
  public getOffset(page: number = 1, limit: number = 25, total: number): IOffset {
    let offset: number = (page - 1) * limit;
    let currentPage: number = page;

    if (total <= offset || page < 1) {
      offset = 0;
      currentPage = 1;
    }

    return {
      offset,
      currentPage,
    };
  }
}

export const paginationService = new PaginationService();
