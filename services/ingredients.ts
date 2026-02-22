import { Ingridient } from '@/generated/prisma/client';
import { axiosInstatnce } from './axios-instance';
import { ApiRoutes } from './constants';

export const getIngredients = async (): Promise<Ingridient[]> => {
    return (await axiosInstatnce.get<Ingridient[]>(ApiRoutes.INGREDIENTS)).data;
};
