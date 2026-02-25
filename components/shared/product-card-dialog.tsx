'use client';

import React from 'react';
import { DialogContent } from '../ui/dialog';
// import { CircleCheck } from 'lucide-react';
import { Ingridient, ProductVariant } from '@/generated/prisma/client';
import { useSet } from 'react-use';
// import { useIngredientsFilter } from '@/hooks/useIngredientsFilter';

interface Props {
    className?: string;
    title: string;
    variants: ProductVariant[];
    ingridients: Ingridient[];
    id: number;
}

export const ProductCardDialog: React.FC<Props> = ({ title, variants }) => {
    // const { ingredients, checkedIngr, onToggleId, ingrPrice } = useIngredientsFilter();

    const typesArr = ['традиционное', 'тонкое'];
    const [typeId, setTypeId] = React.useState<number>(0);
    const [typeSet, { add: addType }] = useSet(new Set<number>());

    const [sizeId, setSizeId] = React.useState<number>(0);
    const sizesOfImg = [250, 375, 500];
    const sizes = variants
        .filter((variant) => variant.pizzaType === typeId + 1)
        .map((variant) => variant.size);

    React.useEffect(() => {
        if (sizeId >= sizes.length) {
            setSizeId(0);
        }
    }, [typeId]);

    React.useEffect(() => {
        variants.map((variant) => variant.pizzaType && addType(variant.pizzaType));
    }, [variants, addType]);

    return (
        <DialogContent
            className="overflow-hidden  p-0 m-0 sm:max-w-250 h-145"
            showCloseButton={false}>
            <div className=" flex flex-row items-center gap-0">
                {/* Изображение */}
                <div className="flex items-center justify-center w-125 h-full bg-white">
                    <img
                        width={sizesOfImg[sizeId]}
                        height={sizesOfImg[sizeId]}
                        src={variants[typeId].imageUrl ?? ''}
                        alt="product-img"
                    />
                </div>

                {/* Изменение параметров пиццы */}
                <div className="flex flex-col px-8 py-3 w-125 h-full bg-amber-100">
                    {/* title  */}
                    <div className="flex flex-col gap-1 py-5">
                        <h1 className="font-extrabold text-2xl">{title}</h1>
                        <p className="text-gray-400">
                            {variants[sizeId].size} см, {typesArr[typeId]} тесто,
                        </p>
                    </div>

                    {/* настройка размеров и типа */}
                    <div className="flex flex-col items-center gap-2">
                        <ul className="flex flex-row items-center rounded-2xl w-fit overflow-hidden h-9.75 bg-gray-200">
                            {sizes.map((size, index) => (
                                <li
                                    onClick={() => setSizeId(index)}
                                    className={`${
                                        sizeId === index ? 'bg-white' : ''
                                    } px-3 py-3 rounded-2xl text-center overflow-hidden w-33.75 cursor-pointer`}
                                    key={index}>
                                    {size} см
                                </li>
                            ))}
                        </ul>

                        <ul className="flex flex-row items-center rounded-2xl overflow-hidden h-9.75 bg-gray-200">
                            {Array.from(typeSet).map((type, index) => (
                                <li
                                    onClick={() => setTypeId(index)}
                                    className={`${
                                        typeId === index ? 'bg-white' : ''
                                    } px-10 py-3 w-51.75 rounded-2xl  text-center overflow-hidden cursor-pointer`}
                                    key={index}>
                                    {typesArr[index]}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <h1 className="font-extrabold  text-sm pt-5 pb-5">Добавте по вкусу</h1>

                    {/* слайдер с добавками */}
                    {/* <div className="flex flex-1 flex-col items-center">
                        <div className="grid grid-cols-3 gap-3 h-58.5 w-full overflow-auto">
                            {ingredients.map((ingredient) => (
                                <div
                                    key={ingredient.id}
                                    onClick={() => onToggleId(String(ingredient.id))}
                                    className={`${
                                        checkedIngr.has(String(ingredient.id))
                                            ? 'border border-orange-500'
                                            : ''
                                    } cursor-pointer py-2 flex flex-col items-center bg-white rounded-sm overflow-hidden h-48.25 w-32.5 gap-3`}>
                                    <div className="relative bg-gray-300 overflow-hidden rounded-sm w-27.5 h-27.5">
                                        {checkedIngr.has(String(ingredient.id)) && (
                                            <CircleCheck
                                                className="absolute right-1 top-1"
                                                color="#ff8000"
                                            />
                                        )}
                                    </div>
                                    <h1>{ingredient.name}</h1>
                                    <p>{ingredient.price}р</p>
                                </div>
                            ))}
                        </div>
                    </div> 

                    <Button className="w-full p-3 text-xl mt-3">
                        Добавить в корзину {variants[sizeId].price + ingrPrice} руб.
                    </Button>
                    */}
                </div>
            </div>
        </DialogContent>
    );
};
