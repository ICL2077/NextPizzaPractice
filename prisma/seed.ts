import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

import { hashSync } from 'bcrypt';
import { breakfasts, categories, ingridients } from './constants';

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function up() {
    await prisma.user.createMany({
        data: [
            {
                email: 'alice@prisma.io',
                fullName: 'Alice test',
                password: hashSync('123fuckingPassword', 10),
                verified: new Date(),
                role: 'USER',
            },
            {
                email: 'bob@prisma.io',
                fullName: 'Bob admin test',
                password: hashSync('321fuckingPassword', 10),
                verified: new Date(),
                role: 'ADMIN',
            },
        ],
    });

    await prisma.category.createMany({
        data: categories,
    });

    await prisma.product.createMany({
        data: breakfasts,
    });

    await prisma.ingridient.createMany({
        data: ingridients,
    });

    const pizza1 = await prisma.product.create({
        data: {
            title: 'Пепперони',
            imageUrl:
                'https://media.dodostatic.net/image/r:760x760/0198bf39dda97082912be8d1f3f2b233.avif',
            categoryId: 1,
            ingridients: {
                connect: ingridients.slice(0, 3),
            },
        },
    });

    const pizza2 = await prisma.product.create({
        data: {
            title: 'Сырная',
            imageUrl:
                'https://media.dodostatic.net/image/r:292x292/0198bf40eb1171aabe90b1b3ce07c0c5.avif',
            categoryId: 1,
            ingridients: {
                connect: ingridients.slice(2, 4),
            },
        },
    });

    const pizza3 = await prisma.product.create({
        data: {
            title: 'Бургер-пицца',
            imageUrl:
                'https://media.dodostatic.net/image/r:292x292/0199b77856ec79a986a2d582c2678fff.avif',
            categoryId: 1,
            ingridients: {
                connect: ingridients.slice(1, 5),
            },
        },
    });

    // варианты для пиццы
    await prisma.productVariant.createMany({
        data: [
            // Пепперони
            {
                productId: pizza1.id,

                name: '30 см',
                imageUrl: '',
                price: 300,

                size: 30,
                pizzaType: 1,
            },
            {
                productId: pizza1.id,

                name: '35 см',
                imageUrl: '',
                price: 450,

                size: 35,
                pizzaType: 2,
            },

            // Сырная
            {
                productId: pizza2.id,

                name: '30 см',
                imageUrl: '',
                price: 250,

                size: 30,
                pizzaType: 1,
            },
            {
                productId: pizza2.id,

                name: '35 см',
                imageUrl: '',
                price: 250,

                size: 35,
                pizzaType: 1,
            },
            {
                productId: pizza2.id,

                name: '30 см',
                imageUrl: '',
                price: 250,

                size: 30,
                pizzaType: 2,
            },
            {
                productId: pizza2.id,

                name: '35 см',
                imageUrl: '',
                price: 250,

                size: 35,
                pizzaType: 2,
            },

            // Бургер пицца
            {
                productId: pizza3.id,

                name: '30 см',
                imageUrl: '',
                price: 250,

                size: 30,
                pizzaType: 1,
            },
            {
                productId: pizza3.id,

                name: '35 см',
                imageUrl: '',
                price: 250,

                size: 35,
                pizzaType: 1,
            },
            {
                productId: pizza3.id,

                name: '30 см',
                imageUrl: '',
                price: 250,

                size: 30,
                pizzaType: 2,
            },
        ],
    });

    // остальные продукты
    await prisma.productVariant.createMany({
        data: [
            {
                productId: 1,
                price: 300,
            },
            {
                productId: 2,
                price: 389,
            },
            {
                productId: 3,
                price: 400,
            },
        ],
    });

    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                token: 'StringToken1',
            },
            {
                userId: 2,
                token: 'StringToken2',
            },
        ],
    });

    await prisma.cartItem.create({
        data: {
            cartId: 1,
            productVariantId: 1,
            quantity: 1,
            ingridients: {
                connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
            },
        },
    });
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Ingridient" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ProductVariant" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.log(e);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
