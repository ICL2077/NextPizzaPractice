import { useSearchParams } from 'next/navigation';
import React from 'react';
import { useSet } from 'react-use';

export interface PriceTypes {
    priceFrom?: number;
    priceTo?: number;
}

export interface ParamsTypes extends PriceTypes {
    ingr: string;
    types: string;
    sizes: string;
}

export interface filters {
    prices: PriceTypes;
    ingrSet: Set<string>;
    typeSet: Set<string>;
    sizeSet: Set<string>;
}

interface ReturnProps {
    filters: filters;
    toggleIngr: (itm: string) => void;
    addIngr: (itm: string) => void;
    removeIngr: (itm: string) => void;

    toggleType: (itm: string) => void;

    toggleSize: (itm: string) => void;

    setPrices: ({ priceFrom, priceTo }: PriceTypes) => void;
    handlePrices: (name: keyof PriceTypes, value: number) => void;
}

export const useFilters = (): ReturnProps => {
    const queryParams = useSearchParams() as unknown as Map<keyof ParamsTypes, string>;

    const [prices, setPrices] = React.useState<PriceTypes>({
        priceFrom: Number(queryParams.get('priceFrom')) || undefined,
        priceTo: Number(queryParams.get('priceTo')) || undefined,
    });

    const handlePrices = (name: keyof PriceTypes, value: number) => ({
        ...prices,
        [name]: value,
    });

    const [ingrSet, { toggle: toggleIngr, add: addIngr, remove: removeIngr }] = useSet(
        new Set<string>(queryParams.get('ingr')?.split(',') || []),
    );

    const [typeSet, { toggle: toggleType }] = useSet(
        new Set<string>(queryParams.get('types')?.split(',') || []),
    );

    const [sizeSet, { toggle: toggleSize }] = useSet(
        new Set<string>(queryParams.get('sizes')?.split(',') || []),
    );

    const filters = {
        prices,
        ingrSet,
        typeSet,
        sizeSet,
    };

    return {
        filters,
        toggleIngr,
        addIngr,
        removeIngr,

        toggleType,

        toggleSize,

        setPrices,
        handlePrices,
    };
};
