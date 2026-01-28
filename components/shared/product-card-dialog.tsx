'use client';

import React from 'react';
import { DialogContent } from '../ui/dialog';
import { arrOfTopics, topicType } from './product-card';
import { CircleCheck } from 'lucide-react';
import { Button } from '../ui';
import { variantType } from './products';

interface Props {
    className?: string;
    title: string;
    variants: variantType[];
    id: number;
}

export const ProductCardDialog: React.FC<Props> = ({ title, variants }) => {
    const [sizeId, setSizeId] = React.useState<number>(0);

    const typesArr = ['традиционное', 'тонкое'];
    const [typeId, setTypeId] = React.useState<number>(0);

    const [addedTopics, setAddedTopics] = React.useState<topicType[]>([]);

    const handleAddTopic = (id: number) => {
        const topicInArr = addedTopics.find((itm) => itm.id === id);

        if (topicInArr) {
            const filteredArr = addedTopics.filter((itm) => itm.id !== topicInArr.id);
            setAddedTopics(filteredArr);
        } else {
            const addedArr = [...addedTopics, arrOfTopics[id - 1]];
            setAddedTopics(addedArr);
        }
    };

    const fullPrice =
        addedTopics.reduce((globalPrice, itm) => (globalPrice += itm.price), 0) +
        variants[sizeId].price;

    return (
        <DialogContent
            className="overflow-hidden  p-0 m-0 sm:max-w-250 h-145"
            showCloseButton={false}>
            <div className=" flex flex-row items-center gap-0">
                {/* Изображение */}
                <div className="flex items-center justify-center w-125 h-full bg-white">
                    <img
                        src={
                            typeId === 0 ? variants[sizeId].imageUrl : variants[sizeId].imageThinUrl
                        }
                        alt="product-img"
                    />
                </div>

                {/* Изменение параметров пиццы */}
                <div className="px-8 py-3 w-125 h-full bg-amber-100">
                    {/* title  */}
                    <div className="flex flex-col gap-1 py-5">
                        <h1 className="font-extrabold text-2xl">{title}</h1>
                        <p className="text-gray-400">
                            {variants[sizeId].size} см, {typesArr[typeId]} тесто,
                            {variants[sizeId].weight} грамм
                        </p>
                    </div>

                    {/* настройка размеров и типа */}
                    <div className="flex flex-col items-center gap-2">
                        <ul className="flex flex-row items-center rounded-2xl w-fit overflow-hidden h-9.75 bg-gray-200">
                            {variants.map((variant, index) => (
                                <li
                                    onClick={() => setSizeId(index)}
                                    className={`${
                                        sizeId === index ? 'bg-white' : ''
                                    } px-3 py-3 rounded-2xl text-center overflow-hidden w-33.75 cursor-pointer`}
                                    key={index}>
                                    {variant.size} см
                                </li>
                            ))}
                        </ul>

                        <ul className="flex flex-row items-center rounded-2xl overflow-hidden h-9.75 bg-gray-200">
                            {typesArr.map((type, index) => (
                                <li
                                    onClick={() => setTypeId(index)}
                                    className={`${
                                        typeId === index ? 'bg-white' : ''
                                    } px-10 py-3 w-51.75 rounded-2xl  text-center overflow-hidden cursor-pointer`}
                                    key={index}>
                                    {type}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <h1 className="font-extrabold  text-sm pt-10 pb-5">Добавте по вкусу</h1>

                    {/* слайдер с добавками */}
                    <div className="flex flex-col items-center">
                        <div className="flex flex-row  gap-3 overflow-auto">
                            {arrOfTopics.map((topic) => (
                                <div
                                    key={topic.id}
                                    onClick={() => handleAddTopic(topic.id)}
                                    className={`${
                                        addedTopics.find((itm) => itm.id === topic.id)
                                            ? 'border border-orange-500'
                                            : ''
                                    } cursor-pointer py-2 flex flex-col items-center bg-white rounded-sm overflow-hidden h-48.25 w-32.5 gap-3`}>
                                    <div className="relative bg-gray-300 overflow-hidden rounded-sm w-27.5 h-27.5">
                                        {addedTopics.find((itm) => itm.id === topic.id) && (
                                            <CircleCheck
                                                className="absolute right-1 top-1"
                                                color="#ff8000"
                                            />
                                        )}
                                    </div>
                                    <h1>{topic.title}</h1>
                                    <p>{topic.price}р</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button className="w-full p-5 text-xl mt-10">
                        Добавить в корзину {fullPrice} руб.
                    </Button>
                </div>
            </div>
        </DialogContent>
    );
};
