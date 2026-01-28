import React from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from '../ui';

interface Props {
    value: string;
    text: string;
    endAdornment?: React.ReactNode;
    className?: string;
    checkedState?: boolean;
    onCheckedChange?: (checked: boolean) => void;
}

export const CheckBoxComp: React.FC<Props> = ({
    className,
    text,
    value,
    endAdornment,
    checkedState,
    onCheckedChange,
}) => {
    return (
        <label htmlFor={`checkbox-${String(value)}`} className="cursor-pointer">
            <div className={cn('cursor-pointer flex flex-row items-center gap-3', className)}>
                <Checkbox
                    value={value}
                    id={`checkbox-${String(value)}`}
                    onCheckedChange={onCheckedChange}
                    checked={checkedState}
                />
                {text}
            </div>
            {endAdornment}
        </label>
    );
};
