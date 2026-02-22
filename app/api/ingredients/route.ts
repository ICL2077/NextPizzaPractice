import { prisma } from '@/prisma/prisma-settings';
import { NextResponse } from 'next/server';

export async function GET() {
    const ingredients = await prisma.ingridient.findMany();

    return NextResponse.json(ingredients);
}
