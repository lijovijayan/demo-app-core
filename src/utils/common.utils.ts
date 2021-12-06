import { IOrderBy } from '@types';

export function getSearchKeyRegexExp(
    searchKey: string,
    name: string = ''
): RegExp | undefined {
    searchKey = searchKey.trim();
    name = name.trim();
    searchKey = searchKey.length > 0 ? searchKey : name;
    if (searchKey.length > 0) {
        return new RegExp('^' + searchKey, 'i');
    }
    return undefined;
}
export function getOrderByObject(_orderBy: IOrderBy[]): Object {
    let orderBy = {};
    _orderBy.forEach((__orderBy) => {
        if (__orderBy.key && typeof __orderBy.orderByDesc === 'boolean') {
            orderBy[__orderBy.key] = __orderBy.orderByDesc ? -1 : 1;
        }
    });
    return orderBy;
}
