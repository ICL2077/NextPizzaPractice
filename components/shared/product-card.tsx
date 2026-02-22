'use client';

import { Settings2, ShoppingCart } from 'lucide-react';
import React from 'react';
import { Button, Dialog } from '../ui';
import { DialogTitle, DialogTrigger } from '../ui/dialog';
import { ProductCardDialog } from './product-card-dialog';
import Link from 'next/link';
import { variantType } from './products';

interface Props {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    variants: variantType[];
}

export const ProductCard: React.FC<Props> = ({ id, title, price, imageUrl, variants }) => {
    return (
        <>
            <Dialog>
                <Link href={``}>
                    <div
                        key={id}
                        className="bg-white w-71.25 h-fit rounded-2xl overflow-hidden p-1">
                        <div className="relative flex items-center justify-center bg-orange-300/50 rounded-2xl w-full h-65">
                            <DialogTrigger asChild>
                                <Settings2 color="#ff8000" className="absolute right-3 top-3" />
                            </DialogTrigger>

                            <DialogTitle>
                                <img
                                    className="transition duration-300 hover:w-52.5 hover:h-52.5 z-0"
                                    width={200}
                                    height={200}
                                    src={imageUrl}
                                    alt={'product-img'}
                                />
                            </DialogTitle>
                        </div>

                        <div className="p-2 flex flex-col">
                            <h3 className="font-extrabold text-xl py-3">{title}</h3>
                            <p className="text-gray-400">
                                Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты,
                                соус альфредо, чеснок
                            </p>
                            <div className="flex flex-row items-center justify-between py-3">
                                <h3 className="">от {price} руб.</h3>
                                <Button variant={'outline'} className="flex items-center gap-2">
                                    <ShoppingCart color="#ff8000" />
                                    Добавить
                                </Button>
                            </div>
                        </div>
                    </div>
                </Link>

                <ProductCardDialog title={title} id={id} variants={variants} />
            </Dialog>
        </>
    );
};
