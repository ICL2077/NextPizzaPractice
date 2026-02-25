import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
    src: string;
    alt?: string;
    size: number;
    className?: string;
}

export const ProductImage: React.FC<Props> = ({ src, alt, size, className }) => {
    return (
        <div className={cn('flex items-center justify-center flex-1 w-full relative', className)}>
            <img
                src={src}
                alt={alt ?? 'logo'}
                className={cn('left-2 top-2 transition-all z-10 duration-300', {
                    'w-75 h-75': size === 30,
                    'w-100 h-100': size === 35,
                })}
            />

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-100 h-100" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-75 h-75" />
        </div>
    );
};
