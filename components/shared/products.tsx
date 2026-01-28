'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';
import { Title } from '../ui';
import { useInView } from 'react-intersection-observer';
import { useCategoryStore } from '@/app/store/category';

export interface variantType {
    id: number;
    type: string;
    imageUrl: string;
    imageThinUrl: string;
    weight: number;
    size: number;
    price: number;
}

interface productType {
    id: number;
    title: string;
    variants: variantType[];
}

interface Props {
    title: string;
    categoryId: number;
    products: productType[];
    className?: string;
}

export const Products: React.FC<Props> = ({ className, categoryId, title, products }) => {
    const changeCat = useCategoryStore((state) => state.dispatch);

    const { ref, inView } = useInView({
        threshold: 1,
    });

    React.useEffect(() => {
        if (inView) {
            changeCat({ type: 'Default', arg: categoryId });
        }
    }, [inView, categoryId, changeCat]);

    return (
        <div
            id={title}
            ref={ref}
            className={cn('flex flex-col bg-white w-full h-fit rounded-2xl', className)}>
            <Title className="p-5" text={title} />
            <div className="grid grid-cols-3 p-5 gap-5">
                {products.map((itm) => (
                    <ProductCard
                        id={itm.id}
                        imageUrl={itm.variants[0].imageUrl}
                        title={itm.title}
                        price={itm.variants[0].price}
                        variants={itm.variants}
                        key={itm.id}
                    />
                ))}
            </div>
        </div>
    );
};
