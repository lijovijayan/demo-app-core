export interface IPagination {
    page: number;
    pageSize: number;
    searchKey: string;
    totalRecords?: number;
    orderBy: IOrderBy[];
}
export interface IOrderBy {
    key: string;
    orderByDesc: boolean;
}
export interface IPaginatedResponse<T> {
    data: T;
    pagination: IPagination;
}
