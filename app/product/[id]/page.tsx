import { Container } from '@/components/shared';
import { ProductImage } from '@/components/shared/product-image';
import { Title } from '@/components/ui';
import { prisma } from '@/prisma/prisma-settings';
import { notFound } from 'next/navigation';

interface ProductPageProps {
    params: {
        id: number;
    };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;

    const product = await prisma.product.findFirst({ where: { id: Number(id) } });

    if (!product) {
        return notFound();
    }

    return (
        <Container className="flex my-15">
            <div className="flex flex-1 justify-center">
                <ProductImage src={product.imageUrl} size={30} />

                <div className="w-125 bg-gray-100 p-3">
                    <Title text={product.title} size="md" className="font-extrabold mb-1" />

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi atque
                        temporibus eaque dicta doloremque
                    </p>
                </div>
            </div>
        </Container>
    );
}
