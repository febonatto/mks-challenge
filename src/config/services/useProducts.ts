import axios, { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { Product } from '../models/Product';
import { api } from '../utils/api';

interface ProductsRequest {
  page: number;
  rows: number;
  sortBy?: 'id' | 'name' | 'price';
  orderBy?: 'ASC' | 'DESC';
}
interface ProductsResponse {
  products: Product[];
  count: number;
}
export function useProducts({
  page,
  rows,
  sortBy = 'id',
  orderBy = 'ASC',
}: ProductsRequest) {
  async function getProducts(): Promise<AxiosResponse<ProductsResponse>> {
    return await api.get(
      `/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`,
    );
  }

  const query = useQuery({
    queryKey: ['products', { page, sortBy, orderBy }],
    queryFn: getProducts,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}
