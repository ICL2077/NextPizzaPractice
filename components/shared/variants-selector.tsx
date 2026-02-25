import React from 'react';
import { cn } from '@/lib/utils';

type Variant = {
    name: string;
    value: string;
    disabled?: boolean;
};

interface Props {
    className?: string;
    items: Variant[];
    onClick?: (arg: Variant['value']) => void;
    selectedValue?: Variant['value'];
}

export const Component: React.FC<Props> = ({ className, items, onClick, selectedValue }) => {
    return (
        <div
            className={cn(
                'flex justify-between rounded-3xl select-none p-1 bg-gray-100',
                className,
            )}>
            {items.map((itm) => (
                <button key={itm.name} onClick={() => onClick?.(itm.value)}>
                    {itm.name}
                </button>
            ))}
        </div>
    );
};
