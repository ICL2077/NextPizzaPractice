'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button, Input, Slider } from '../ui';
import { FieldGroup, Field, FieldLabel } from '../ui/field';
import { RussianRuble } from 'lucide-react';
import { CheckboxGroups } from './checkbox-groups';
import { useFilters, useIngredients, useFiltersQuery } from '@/hooks';

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    const {
        filters,
        toggleIngr,
        addIngr,
        removeIngr,

        toggleType,

        toggleSize,

        setPrices,
        handlePrices,
    } = useFilters();

    const { ingredients, loading } = useIngredients();

    const items = ingredients.map((itm) => ({ id: itm.id, name: itm.name, value: itm.name }));

    const { applyChanges, isChanged } = useFiltersQuery(filters);

    return (
        <div className={cn('flex flex-col gap-3 w-62.5 rounded-sm py-5', className)}>
            <h1 className="font-extrabold text-3xl mb-5 ">Фильтрация</h1>
            <div className="flex flex-col ">
                {/* Верхние чекбоксы */}
                <CheckboxGroups
                    className="border-b border-gray-100"
                    title={'Размеры'}
                    name={'sizes'}
                    sortChecks={true}
                    limit={3}
                    onToggleId={toggleSize}
                    itemsSet={filters.sizeSet}
                    items={[
                        { id: 1, name: '20 см', value: '20' },
                        { id: 2, name: '25 см', value: '25' },
                        { id: 3, name: '30 см', value: '30' },
                        { id: 4, name: '35 см', value: '35' },
                        { id: 5, name: '40 см', value: '40' },
                        { id: 6, name: '45 см', value: '45' },
                        { id: 7, name: '50 см', value: '50' },
                    ]}
                />

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
                                        value={String(filters.prices.priceFrom || 0)}
                                        onChange={(e) =>
                                            handlePrices('priceFrom', Number(e.target.value))
                                        }
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
                                        value={String(filters.prices.priceTo || 1000)}
                                        onChange={(e) =>
                                            handlePrices('priceTo', Number(e.target.value))
                                        }
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

                        <Slider
                            className={'pt-5'}
                            value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
                            max={1000}
                            step={10}
                            onValueChange={([priceFrom, priceTo]) =>
                                setPrices({ priceFrom, priceTo })
                            }
                        />
                    </div>
                </div>

                {/* чекбоксы ингридиентов */}
                <CheckboxGroups
                    className="border-b border-gray-100"
                    title={'Ингридиенты'}
                    name={'ingredients'}
                    limit={3}
                    loading={loading}
                    items={items}
                    itemsSet={filters.ingrSet}
                    onRemove={removeIngr}
                    onAddId={addIngr}
                    onToggleId={toggleIngr}
                    sortChecks={true}
                    addAllBtn={true}
                />

                {/* чекбоксы типов теста */}
                <CheckboxGroups
                    className="border-b border-gray-100"
                    title={'Типы теста'}
                    name={'types'}
                    limit={2}
                    onToggleId={toggleType}
                    itemsSet={filters.typeSet}
                    items={[
                        { id: 1, name: 'традиционное', value: 'traditional' },
                        { id: 2, name: 'тонкое', value: 'thin' },
                    ]}
                />
            </div>

            {isChanged && (
                <Button onClick={() => applyChanges(false)} variant={'default'}>
                    Применить
                </Button>
            )}
        </div>
    );
};
