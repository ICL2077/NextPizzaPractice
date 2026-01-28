import React from 'react';
import { cn } from '@/lib/utils';
import { Categories } from './categories';
import { Sorting } from './sorting';
import { Container } from './container';

interface Props {
    className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('sticky top-0 py-3 z-100000', className)}>
            <Container className="overflow-hidden border-2 border-gray-100 flex items-center justify-between bg-gray-100  rounded-sm z-10">
                <Categories />
                <Sorting />
            </Container>
        </div>
    );
};
