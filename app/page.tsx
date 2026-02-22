import { Title } from '@/components/ui';
import { TopBar, Container, Products } from '../components/shared';
import { Filters } from '@/components/shared';

const productsArr = [
    {
        id: 1,
        categoryId: 0,
        title: 'Пиццы',
        items: [
            {
                id: 1,
                title: 'Сырный ципленок',
                variants: [
                    {
                        id: 1,
                        type: 'Маленькая',
                        size: 30,
                        price: 300,
                        weight: 200,
                        imageUrl:
                            'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif',
                        imageThinUrl:
                            'https://media.dodostatic.net/image/r:760x760/0198bf576c45725cac227fd81cd6abfd.avif',
                    },
                    {
                        id: 2,
                        type: 'Средняя',
                        size: 40,
                        price: 400,
                        weight: 300,
                        imageUrl:
                            'https://media.dodostatic.net/image/r:760x760/0198bf574bf879bdb7fbad84b39cd3e2.avif',
                        imageThinUrl:
                            'https://media.dodostatic.net/image/r:760x760/0198bf576c45725cac227fd81cd6abfd.avif',
                    },
                    {
                        id: 3,
                        type: 'Большая',
                        size: 50,
                        price: 550,
                        weight: 400,
                        imageUrl:
                            'https://media.dodostatic.net/image/r:760x760/0198bf574bf879bdb7fbad84b39cd3e2.avif',
                        imageThinUrl:
                            'https://media.dodostatic.net/image/r:760x760/0198bf576c45725cac227fd81cd6abfd.avif',
                    },
                ],
            },
            {
                id: 2,
                title: 'Чизбургер пицца',
                variants: [
                    {
                        id: 1,
                        type: 'Маленькая',
                        size: 30,
                        price: 300,
                        weight: 200,
                        imageUrl:
                            'https://media.dodostatic.net/image/r:292x292/0198bf40eb1171aabe90b1b3ce07c0c5.avif',
                        imageThinUrl:
                            'https://media.dodostatic.net/image/r:760x760/019a10a0ead476fa8b2a69b9af466c31.avif',
                    },
                    {
                        id: 2,
                        type: 'Средняя',
                        size: 40,
                        price: 400,
                        weight: 400,
                        imageUrl:
                            'https://media.dodostatic.net/image/r:760x760/019a10a0e54870b0ae63dca748223369.avif',
                        imageThinUrl:
                            'https://media.dodostatic.net/image/r:760x760/019a10a0ead476fa8b2a69b9af466c31.avif',
                    },
                    {
                        id: 3,
                        type: 'Большая',
                        size: 50,
                        price: 550,
                        weight: 500,
                        imageUrl:
                            'https://media.dodostatic.net/image/r:760x760/019a10a0e54870b0ae63dca748223369.avif',
                        imageThinUrl:
                            'https://media.dodostatic.net/image/r:760x760/019a10a0ead476fa8b2a69b9af466c31.avif',
                    },
                ],
            },
            {
                id: 3,
                title: 'Пепперони фреш',
                variants: [
                    {
                        id: 1,
                        type: 'Маленькая',
                        size: 30,
                        price: 300,
                        weight: 250,
                        imageUrl:
                            'https://media.dodostatic.net/image/r:292x292/0199b77856ec79a986a2d582c2678fff.avif',
                        imageThinUrl:
                            'https://media.dodostatic.net/image/r:760x760/0198bf3fd6af726a867a1446960cbba9.avif',
                    },
                    {
                        id: 2,
                        type: 'Средняя',
                        size: 40,
                        price: 400,
                        weight: 300,
                        imageUrl:
                            'https://media.dodostatic.net/image/r:760x760/019ac604bad37209b1ec496bbdd98560.avif',
                        imageThinUrl:
                            'https://media.dodostatic.net/image/r:760x760/0198bf3fd6af726a867a1446960cbba9.avif',
                    },
                    {
                        id: 3,
                        type: 'Большая',
                        size: 50,
                        price: 550,
                        weight: 500,
                        imageUrl:
                            'https://media.dodostatic.net/image/r:760x760/019ac604bad37209b1ec496bbdd98560.avif',
                        imageThinUrl:
                            'https://media.dodostatic.net/image/r:760x760/0198bf3fd6af726a867a1446960cbba9.avif',
                    },
                ],
            },
        ],
    },

    {
        id: 2,
        categoryId: 1,
        title: 'Завтрак',
        items: [
            {
                id: 1,
                title: 'Сырный ципленок',
                variants: [
                    {
                        id: 1,
                        type: 'Маленькая',
                        size: 30,
                        price: 300,
                        weight: 200,
                        imageUrl:
                            'https://media.dodostatic.net/image/r:292x292/0198bf57bc517218ab93c762f4b0193e.avif',
                        imageThinUrl:
                            'https://media.dodostatic.net/image/r:760x760/0198bf576c45725cac227fd81cd6abfd.avif',
                    },
                    {
                        id: 2,
                        type: 'Средняя',
                        size: 40,
                        price: 400,
                        weight: 300,
                        imageUrl:
                            'https://media.dodostatic.net/image/r:760x760/0198bf574bf879bdb7fbad84b39cd3e2.avif',
                        imageThinUrl:
                            'https://media.dodostatic.net/image/r:760x760/0198bf576c45725cac227fd81cd6abfd.avif',
                    },
                    {
                        id: 3,
                        type: 'Большая',
                        size: 50,
                        price: 550,
                        weight: 400,
                        imageUrl:
                            'https://media.dodostatic.net/image/r:760x760/0198bf574bf879bdb7fbad84b39cd3e2.avif',
                        imageThinUrl:
                            'https://media.dodostatic.net/image/r:760x760/0198bf576c45725cac227fd81cd6abfd.avif',
                    },
                ],
            },
            {
                id: 2,
                title: 'Чизбургер пицца',
                variants: [
                    {
                        id: 1,
                        type: 'Маленькая',
                        size: 30,
                        price: 300,
                        weight: 200,
                        imageUrl:
                            'https://media.dodostatic.net/image/r:292x292/0198bf40eb1171aabe90b1b3ce07c0c5.avif',
                        imageThinUrl:
                            'https://media.dodostatic.net/image/r:760x760/019a10a0ead476fa8b2a69b9af466c31.avif',
                    },
                    {
                        id: 2,
                        type: 'Средняя',
                        size: 40,
                        price: 400,
                        weight: 400,
                        imageUrl:
                            'https://media.dodostatic.net/image/r:760x760/019a10a0e54870b0ae63dca748223369.avif',
                        imageThinUrl:
                            'https://media.dodostatic.net/image/r:760x760/019a10a0ead476fa8b2a69b9af466c31.avif',
                    },
                    {
                        id: 3,
                        type: 'Большая',
                        size: 50,
                        price: 550,
                        weight: 500,
                        imageUrl:
                            'https://media.dodostatic.net/image/r:760x760/019a10a0e54870b0ae63dca748223369.avif',
                        imageThinUrl:
                            'https://media.dodostatic.net/image/r:760x760/019a10a0ead476fa8b2a69b9af466c31.avif',
                    },
                ],
            },
            {
                id: 3,
                title: 'Пепперони фреш',
                variants: [
                    {
                        id: 1,
                        type: 'Маленькая',
                        size: 30,
                        price: 300,
                        weight: 250,
                        imageUrl:
                            'https://media.dodostatic.net/image/r:292x292/0199b77856ec79a986a2d582c2678fff.avif',
                        imageThinUrl:
                            'https://media.dodostatic.net/image/r:760x760/0198bf3fd6af726a867a1446960cbba9.avif',
                    },
                    {
                        id: 2,
                        type: 'Средняя',
                        size: 40,
                        price: 400,
                        weight: 300,
                        imageUrl:
                            'https://media.dodostatic.net/image/r:760x760/019ac604bad37209b1ec496bbdd98560.avif',
                        imageThinUrl:
                            'https://media.dodostatic.net/image/r:760x760/0198bf3fd6af726a867a1446960cbba9.avif',
                    },
                    {
                        id: 3,
                        type: 'Большая',
                        size: 50,
                        price: 550,
                        weight: 500,
                        imageUrl:
                            'https://media.dodostatic.net/image/r:760x760/019ac604bad37209b1ec496bbdd98560.avif',
                        imageThinUrl:
                            'https://media.dodostatic.net/image/r:760x760/0198bf3fd6af726a867a1446960cbba9.avif',
                    },
                ],
            },
        ],
    },
];

const HomePage = () => {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold pb-3" />
            </Container>
            <TopBar />
            <Container className="flex flex-row py-5 gap-15 overflow-hidden">
                {/*Фильтры*/}
                <Filters />

                {/*Список товаров*/}
                <div className="flex flex-1 bg-gray-50 flex-col p-5 gap-5 rounded-sm">
                    <h3 className="text-3xl mb-5">Список товаров</h3>
                    {productsArr.map((products) => (
                        <Products
                            key={products.id}
                            products={products.items}
                            title={products.title}
                            categoryId={products.categoryId}
                        />
                    ))}
                </div>
            </Container>
        </>
    );
};

export default HomePage;
