export const breakfasts = [
    {
        categoryId: 2,
        imageUrl:
            'https://media.dodostatic.net/image/r:292x292/019b12cb81437433998b30bbe6f1ad32.avif',
        title: 'Омлет с беконом',
    },
    {
        categoryId: 2,
        imageUrl:
            'https://media.dodostatic.net/image/r:292x292/01981875ae8e75239a409d63775530d8.avif',
        title: 'Хашбраунды',
    },
    {
        categoryId: 2,
        imageUrl:
            'https://media.dodostatic.net/image/r:292x292/01980cba8e9e70dab9df8aa0f577e527.avif',
        title: 'Додстер',
    },
];

export const ingridients = [
    {
        name: 'Моцарелла',
        price: 100,
        imageUrl: 'mocarella-img',
    },
    {
        name: 'Сырный бортик',
        price: 175,
        imageUrl: 'cheese-border-img',
    },
    {
        name: 'Томаты',
        price: 35,
        imageUrl: 'tomatos-img',
    },
    {
        name: 'Перец Холопеньо',
        price: 40,
        imageUrl: 'pepper-img',
    },
    {
        name: 'Огурчики',
        price: 85,
        imageUrl: 'cucumbers-img',
    },
    {
        name: 'Колбаска',
        price: 25,
        imageUrl: 'kolbaska-img',
    },
].map((obj, index) => ({ ...obj, id: index + 1 }));

export const categories = [
    {
        name: 'Пиццы',
    },
    {
        name: 'Завтрак',
    },
    {
        name: 'Напитки',
    },
    {
        name: 'Коктейли',
    },
];
