'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '../ui';
import { Search } from 'lucide-react';
import OutsideClickHandler from 'react-outside-click-handler';
import Link from 'next/link';
import { Api } from '@/services/api-client';
import { useDebounce } from 'react-use';
import { Product } from '@/generated/prisma/client';
import { Spinner } from '../ui/spinner';

interface Props {
    className?: string;
}

export const SearchBar: React.FC<Props> = ({ className }) => {
    const [popup, setPopup] = React.useState<boolean>(false);
    const [products, setProducts] = React.useState<Product[]>([]);
    const [searchInpt, setSearchInpt] = React.useState<string>('');

    const [loading, setLoading] = React.useState<boolean>(false);

    useDebounce(
        () => {
            setLoading(true);
            Api.products
                .search(searchInpt)
                .then((items) => setProducts(items))
                .then(() => setLoading(false))
                .catch((error) => console.log(error));
        },
        500,
        [searchInpt],
    );

    const handleClickProduct = () => {
        setSearchInpt('');
        setProducts([]);
    };

    return (
        <>
            {popup && <div className="bg-black/50 right-0 left-0 bottom-0 top-0 fixed z-100" />}

            <div className="relative flex-1 flex flex-col">
                <OutsideClickHandler onOutsideClick={() => setPopup(false)}>
                    <div className={cn('relative mx-5 z-200', className)}>
                        <Input
                            onChange={(event) => setSearchInpt(event.target.value)}
                            className="p-5 w-full bg-gray-100"
                            placeholder="Введите название товара"
                            onFocus={() => setPopup(true)}
                            value={searchInpt}
                        />

                        <Spinner
                            className={cn(
                                'transition-all duration-300 absolute right-3 top-3 opacity-0 translate-x-3',
                                loading && 'opacity-50 translate-x-0',
                            )}
                        />

                        <Search
                            className={cn(
                                'transition-all duration-300 absolute right-3 top-3 opacity-50',
                                loading && 'opacity-0 translate-x-3',
                            )}
                            size={16}
                            color="#000000"
                        />
                    </div>
                </OutsideClickHandler>

                {products.length > 0 && (
                    <ul
                        className={cn(
                            'transition-all invisible absolute overflow-hidden place-self-center top-13 border border-gray-200 bg-white z-210 rounded-xl w-full h-fit opacity-0 translate-y-5',
                            popup && 'opacity-100 visible translate-y-0',
                        )}>
                        {products.map((product) => (
                            <Link
                                onClick={handleClickProduct}
                                key={product.id}
                                href={`/product/${product.id}`}>
                                <li className="transition flex flex-row items-center duration-150 hover:bg-gray-100 p-3 border-b border-gray-200">
                                    <img
                                        className="w-7 h-7 mx-5"
                                        src={product.imageUrl}
                                        alt="img"
                                    />
                                    {product.title}
                                </li>
                            </Link>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};
