'use client';

import React from 'react';
import { CheckBoxComp } from './checkboxcomp';
import { Input } from '../ui';
import { Skeleton } from '@/components/ui/skeleton';

interface Props {
    title: string;
    name: string;
    limit: number;
    className?: string;

    sortChecks?: boolean;

    items: { id: number; name: string; value: string }[];

    itemsSet: Set<string>;
    onToggleId: (id: string) => void;
    onAddId?: (id: string) => void;
    onRemove?: (itm: string) => void;

    addAllBtn?: boolean;
    loading?: boolean;
}

export const CheckboxGroups: React.FC<Props> = ({
    className,
    title,
    name,

    limit,
    sortChecks,

    items,

    itemsSet,
    onToggleId,
    onAddId,
    onRemove,

    loading,
    addAllBtn,
}) => {
    const [showAll, setShowAll] = React.useState<boolean>(false);
    const [inptState, setInptState] = React.useState<string>('');

    const handleInptChange = (value: string) => {
        setInptState(value);
    };

    const checkedItms = [
        ...items.filter((itm) => itemsSet.has(String(itm.id))),
        ...items.filter((itm) => !itemsSet.has(String(itm.id))),
    ].slice(0, limit);

    const checkboxArr = showAll
        ? items.filter((itm) => itm.name.toLowerCase().includes(inptState.toLocaleLowerCase()))
        : sortChecks
        ? checkedItms
        : items.slice(0, limit);

    const setToArr = Array.from(itemsSet);

    const handleAddAll = () => {
        if (onRemove && onAddId) {
            if (items.length === setToArr.length) {
                items.map((itm) => {
                    onRemove(String(itm.id));
                });
            } else {
                items.map((itm) => {
                    onAddId(String(itm.id));
                });
            }
        }
    };

    if (loading) {
        return (
            <>
                <h1 className="font-extrabold text-1xl pb-5">{title}</h1>
                <div className="flex flex-col gap-3">
                    {[...new Array(limit)].map((_, index) => (
                        <Skeleton className="w-full h-5 rounded-xl" key={index} />
                    ))}
                    <Skeleton className="w-25 h-5 rounded-sm" />
                </div>
            </>
        );
    }

    return (
        <div className={className}>
            <div className="py-7">
                <h1 className="font-extrabold text-1xl pb-5">{title}:</h1>

                {addAllBtn && (
                    <CheckBoxComp
                        checkedState={items.length === setToArr.length}
                        onCheckedChange={handleAddAll}
                        className="pb-3"
                        value={`all-${name}`}
                        text={`Все ${title}`}
                    />
                )}

                {showAll && (
                    <Input
                        type="text"
                        value={inptState}
                        onChange={(event) => handleInptChange(event.target.value)}
                        className="mb-10"
                        placeholder={`Искать ${title}`}
                    />
                )}

                <div className={`${showAll ? 'overflow-auto h-70' : 'h-fit'} flex flex-col gap-2 `}>
                    <div className="flex flex-col gap-2 flex-1">
                        {checkboxArr.map((itm) => (
                            <CheckBoxComp
                                checkedState={itemsSet.has(String(itm.id))}
                                onCheckedChange={() => onToggleId(String(itm.id))}
                                value={`${itm.id}-${name}-checkbox-group`}
                                key={itm.id}
                                text={itm.name}
                            />
                        ))}
                    </div>

                    {checkedItms.length !== items.length && (
                        <a
                            onClick={() => setShowAll(!showAll)}
                            className="cursor-pointer text-orange-500">
                            {showAll ? '- Свернуть' : '+ Показать еще'}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
