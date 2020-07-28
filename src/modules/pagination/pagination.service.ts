interface IpaginationData {
  offset: number;
  actualPage: number;
}

class PaginationService {
  public getOffset(page: number = 1, limit: number = 25, total: number): any {
    let offset: number = (page - 1) * limit;
    let actualPage = page;

    if (total <= offset || page < 1) {
      offset = 0;
      actualPage = 1;
    }

    return {
      offset,
      actualPage,
    };
  }
}

export const paginationService = new PaginationService();
