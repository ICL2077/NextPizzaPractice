import { Product } from '@/generated/prisma/client';
import { axiosInstatnce } from './axios-instance';
import { ApiRoutes } from './constants';

export const search = async (query: string) => {
    return (await axiosInstatnce.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, { params: { query } }))
        .data;
};
