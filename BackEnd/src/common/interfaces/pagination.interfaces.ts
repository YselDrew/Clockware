export interface IOffset {
  offset: number;
  currentPage: number;
}

export interface IPaginatedData<T> {
  data: T | T[];
  pagination: {
    page: number;
    total: number;
    limit: number;
  };
}
