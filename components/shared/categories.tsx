'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { ChevronDown } from 'lucide-react';
import { additonalCategories, categories, useCategoryStore } from '@/app/store/category';

interface Props {
    className?: string;
}

export const Categories: React.FC<Props> = ({ className }) => {
    {
        /*
            add means additional
            cat means category
        */
    }

    const activeCat = useCategoryStore((state) => state.curCategory);
    const addCat = useCategoryStore((state) => state.addCategory);
    const changeCat = useCategoryStore((state) => state.dispatch);

    return (
        <ul className={cn('flex rounded-sm items-center px-2 py-1 bg-gray-100 w-fit', className)}>
            {categories.map((category, index) => (
                <a key={index} href={`/#${category}`}>
                    <li
                        onClick={() => changeCat({ type: 'Default', arg: index })}
                        className={`cursor-pointer transition duration-300 ${
                            activeCat === index ? 'bg-white text-orange-600' : ''
                        } rounded-lg mx-1.5 px-3 py-2`}
                        key={index}>
                        {category}
                    </li>
                </a>
            ))}
            <Popover>
                <PopoverTrigger>
                    <li
                        className={`${
                            addCat != null ? 'text-orange-500' : ''
                        } bg-white cursor-pointer flex flex-row items-center 'bg-white' rounded-lg p-2`}>
                        {addCat != null ? additonalCategories[addCat] : 'Еще'}
                        <ChevronDown size={16} />
                    </li>
                </PopoverTrigger>
                <PopoverContent>
                    <ul className="flex flex-col gap-2">
                        {additonalCategories.map((cat, index) => (
                            <li
                                onClick={() => changeCat({ type: 'Additional', arg: index })}
                                className={`${
                                    addCat === index ? 'text-orange-500' : ''
                                } text-center cursor-pointer transition duration-200 hover:bg-gray-100 px-3 py-1 rounded-sm`}
                                key={index}>
                                {cat}
                            </li>
                        ))}
                    </ul>
                </PopoverContent>
            </Popover>
        </ul>
    );
};
