import { useRouter, useSearchParams } from 'next/navigation';
import { filters, ParamsTypes, PriceTypes } from './use-filters';
import React from 'react';
import qs from 'qs';
import { useDebounce } from 'react-use';

interface ReturnValues {
    isChanged: boolean;
    applyChanges: (arg: boolean) => void;
}

export const useFiltersQuery = (filters: filters): ReturnValues => {
    const router = useRouter();
    const url = useSearchParams() as unknown as Map<keyof ParamsTypes, string>;

    const typesSetToArr = Array.from(filters.typeSet);
    const ingrSetToArr = Array.from(filters.ingrSet);
    const sizesSetToArr = Array.from(filters.sizeSet);

    const [pricesDebState, setPricesDebState] = React.useState<PriceTypes>({ ...filters.prices });

    const getChangedStatus = (param: keyof ParamsTypes, array: string[]) => {
        const paramLength = url.get(param)?.split(',').length ?? 0;
        return paramLength !== array.length && (paramLength > 0 || array.length > 0);
    };

    const isChangedIngr = getChangedStatus('ingr', ingrSetToArr);
    const isChangedSizes = getChangedStatus('sizes', sizesSetToArr);
    const isChangedTypes = getChangedStatus('types', typesSetToArr);

    const isChanged = isChangedIngr || isChangedSizes || isChangedTypes;

    useDebounce(
        () => {
            setPricesDebState({ ...filters.prices });
        },
        500,
        [filters.prices],
    );

    const applyChanges = (isPrice: boolean) => {
        if (isPrice) {
            const url = new URLSearchParams(window.location.search);

            const queryPrice = new URLSearchParams(
                qs.stringify(pricesDebState, { arrayFormat: 'comma' }),
            );

            queryPrice.forEach((value, key) => {
                url.set(key, value);
            });

            router.push(`?${url}`, { scroll: false });
        } else {
            const params = {
                ...pricesDebState,
                types: typesSetToArr,
                ingr: ingrSetToArr,
                sizes: sizesSetToArr,
            };

            const queryFilters = qs.stringify(params, { arrayFormat: 'comma' });

            router.push(`?${queryFilters}`, { scroll: false });
        }
    };

    React.useEffect(() => {
        applyChanges(true);
    }, [pricesDebState]);

    return { isChanged, applyChanges };
};
