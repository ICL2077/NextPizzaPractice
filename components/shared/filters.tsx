'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button, Input, Slider } from '../ui';
import { FieldGroup, Field, FieldLabel } from '../ui/field';
import { CheckBoxComp } from './checkboxcomp';
import { RussianRuble } from 'lucide-react';
import { CheckboxGroups } from './checkbox-groups';

interface Props {
    className?: string;
}

const items = [
    {
        title: 'Сырный соус',
        value: '1',
    },
    {
        title: 'Кетчуп',
        value: '2',
    },
    {
        title: 'Моцарелла',
        value: '3',
    },
    {
        title: 'Огурчики',
        value: '4',
    },
    {
        title: 'Маргарин',
        value: '5',
    },
    {
        title: 'Вертчина',
        value: '6',
    },
];

const defaultItems = items;

export const Filters: React.FC<Props> = ({ className }) => {
    const typesOfBorder = ['традиционное', 'тонкое'];

    const [borderId, setBorderId] = React.useState<number>(0);

    const handleChangeBorder = (index: number) => {
        setBorderId(index);
    };

    return (
        <div className={cn('flex flex-col gap-3 w-62.5 rounded-sm py-5', className)}>
            <h1 className="font-extrabold text-3xl mb-5 ">Фильтрация</h1>
            <div className="flex flex-col ">
                {/* Верхние чекбоксы */}
                <div className="flex flex-col gap-1.5 pb-3 border-b border-gray-100">
                    <CheckBoxComp value="1" text="Можно собирать" />
                    <CheckBoxComp value="2" text="Новинки" />
                </div>

                {/* Определитель цены */}
                <div className="border-b border-gray-100">
                    <div className="py-7">
                        <h1 className="pb-5 font-extrabold text-1xl">Цена от и до:</h1>

                        <FieldGroup className="flex items-center flex-row">
                            <Field>
                                <FieldLabel htmlFor="input-1">Начальная цена</FieldLabel>
                                <div className="relative flex flex-row items-center">
                                    <Input
                                        id="input-1"
                                        type="number"
                                        placeholder="0"
                                        min={0}
                                        max={1000}
                                        defaultValue={0}
                                    />
                                    <RussianRuble
                                        size={20}
                                        color="#868686"
                                        strokeWidth={1.25}
                                        className="absolute right-3 bg-white"
                                    />
                                </div>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="input-2">Конечная цена</FieldLabel>
                                <div className="relative flex flex-row items-center">
                                    <Input
                                        id="input-2"
                                        type="number"
                                        placeholder="0"
                                        min={100}
                                        max={1000}
                                        value={500}
                                        defaultValue={0}
                                    />
                                    <RussianRuble
                                        size={20}
                                        color="#868686"
                                        strokeWidth={1.25}
                                        className="absolute right-3 bg-white"
                                    />
                                </div>
                            </Field>
                        </FieldGroup>

                        <Slider className={'pt-5'} defaultValue={[0, 0]} max={100} step={1} />
                    </div>
                </div>

                {/* чекбоксы ингридиентов */}
                <CheckboxGroups
                    className="border-b border-gray-100"
                    items={items}
                    limit={3}
                    defaultItems={defaultItems}
                />

                {/* чекбоксы типов теста */}
                <div className="">
                    <div className="py-7">
                        <h1 className="font-extrabold text-1xl pb-5">Тип теста</h1>
                        <div className="flex flex-col gap-2">
                            {typesOfBorder.map((borderType, index) => (
                                <CheckBoxComp
                                    onCheckedChange={() => handleChangeBorder(index)}
                                    checkedState={borderId === index && true}
                                    value={`${String(index)}-border-type`}
                                    key={index}
                                    text={borderType}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Button variant={'default'}>Применить</Button>
        </div>
    );
};
