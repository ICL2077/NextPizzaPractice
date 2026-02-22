import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui';
import { ArrowBigRight, ShoppingCart, User } from 'lucide-react';
import { SearchBar } from './searchBar';
import Link from 'next/link';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className="flex items-center justify-between py-8 z-0">
                <Link href={'/'}>
                    <div className="flex items-center gap-3">
                        <Image src={'../../img/logo.svg'} alt={'logo'} width={32} height={32} />
                        <div className="">
                            <h3 className="text-xl uppercase to-black">Tazztiest pizzas</h3>
                            <p className="text-sm opacity-50 lowercase">
                                Самая вкусная пицца! Никаких медведей!
                            </p>
                        </div>
                    </div>
                </Link>

                <SearchBar />

                <div className="flex items-center gap-2">
                    <Button className="flex items-center gap-1.5" variant={'outline'}>
                        <User />
                        Войти
                    </Button>

                    <Button className="group relative gap-1">
                        <b>540 руб.</b>
                        <div className="w-0.5 h-6 bg-white/30 "></div>
                        <div className="flex items-center gap-2 relative transition duration-300 group-hover:opacity-0">
                            <ShoppingCart size={24} strokeWidth={1.5} />
                            <b>0</b>
                        </div>
                        <ArrowBigRight
                            size={20}
                            className="absolute right-5 transition duration-300 opacity-0 -translate-x-8 group-hover:translate-x-0 group-hover:opacity-100"
                        />
                    </Button>
                </div>
            </Container>
        </header>
    );
};
