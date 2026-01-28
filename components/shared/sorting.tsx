'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowDownUp } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

interface Props {
    className?: string;
}

const sortingArr = [
    { name: 'Цене', type: 'price' },
    { name: 'Рейтингу', type: 'rating' },
    { name: 'Алфавиту', type: 'title' },
];

export const Sorting: React.FC<Props> = ({ className }) => {
    const [activeIndex, setActiveIndex] = React.useState<number>(0);

    return (
        <Popover>
            <PopoverTrigger className="cursor-pointer">
                <div className={cn('p-3 relative bg-white', className)}>
                    <div className=" flex items-center flex-row gap-2">
                        <div className="flex items-center gap-1">
                            <ArrowDownUp size={16} />
                            <span>Сортировка по:</span>
                        </div>
                        <p className="text-orange-500">{sortingArr[activeIndex].name}</p>
                    </div>

                    <PopoverContent className="mt-3">
                        <ul className="flex flex-col gap-3">
                            {sortingArr.map((sort, index) => (
                                <li
                                    onClick={() => setActiveIndex(index)}
                                    className={`${
                                        activeIndex === index ? 'text-orange-500' : ''
                                    } transition duration-300 text-center cursor-pointer rounded-sm py-1 hover:bg-gray-100`}
                                    key={index}>
                                    {sort.name}
                                </li>
                            ))}
                        </ul>
                    </PopoverContent>
                </div>
            </PopoverTrigger>
        </Popover>
    );
};
