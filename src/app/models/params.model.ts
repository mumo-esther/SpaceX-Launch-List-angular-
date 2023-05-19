export type Orders = 'asc' | 'desc';

export class Params {
  limit: number;
  offset: number;
  order: Orders;
  sort: 'flight_number';
  [key: string]: string | number;
}

export const DEFAULT_PARAMS: Params = {
  limit: 10,
  offset: 0,
  order: 'asc',
  sort: 'flight_number',
};
