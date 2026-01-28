'use client';

import React from 'react';
import { CheckBoxComp } from './checkboxcomp';
import { Input } from '../ui';
import { checkBoxType } from '../ui/checkbox';

interface Props {
    items: checkBoxType[];
    defaultItems: checkBoxType[];
    limit: number;
    className?: string;
}

export const CheckboxGroups: React.FC<Props> = ({ className, items, defaultItems, limit }) => {
    const [showAll, setShowAll] = React.useState<boolean>(false);

    const [inptState, setInptState] = React.useState<string>('');

    const handleInptChange = (value: string) => {
        setInptState(value);
    };

    const checkboxArr = showAll
        ? items?.filter((itm) => itm.title.toLowerCase().includes(inptState.toLocaleLowerCase()))
        : defaultItems?.slice(0, limit);

    return (
        <div className={className}>
            <div className="py-7">
                <h1 className="font-extrabold text-1xl pb-5">Ингридиенты:</h1>
                {showAll && (
                    <Input
                        type="text"
                        value={inptState}
                        onChange={(event) => handleInptChange(event?.target.value)}
                        className="mb-10"
                        placeholder="Поиск по ингридиентам"
                    />
                )}
                <div
                    className={`${
                        showAll ? 'overflow-auto h-100 mb-5' : 'h-fit'
                    } flex flex-col gap-2 pb-5`}>
                    {checkboxArr?.map((itm) => (
                        <CheckBoxComp
                            value={`${itm.value}-checkbox-group`}
                            key={Number(itm.value)}
                            text={itm.title}
                        />
                    ))}
                </div>

                {items?.length >= limit && (
                    <a
                        onClick={() => setShowAll(!showAll)}
                        className="cursor-pointer text-orange-500">
                        {showAll ? '- Свернуть' : '+ Показать еще'}
                    </a>
                )}
            </div>
        </div>
    );
};
