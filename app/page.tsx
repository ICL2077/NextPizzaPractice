import { Title } from '@/components/ui';
import { TopBar, Container, Products } from '../components/shared';
import { Filters } from '@/components/shared';
import { prisma } from '@/prisma/prisma-settings';

const HomePage = async () => {
    const categories = await prisma.category.findMany({
        include: {
            products: {
                include: {
                    ingridients: true,
                    variants: true,
                },
            },
        },
    });

    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold pb-3" />
            </Container>
            <TopBar categories={categories.filter((cat) => cat.products.length > 0)} />
            <Container className="flex flex-row py-5 gap-15 overflow-hidden">
                {/*Фильтры*/}
                <Filters />

                {/*Список товаров*/}
                <div className="flex flex-1 bg-gray-50 flex-col p-5 gap-5 rounded-sm">
                    <h3 className="text-3xl mb-5">Список товаров</h3>
                    {categories.map(
                        (category) =>
                            category.products.length > 0 && (
                                <Products
                                    key={category.id}
                                    products={category.products}
                                    title={category.name}
                                    categoryId={category.id}
                                />
                            ),
                    )}
                </div>
            </Container>
        </>
    );
};

export default HomePage;
