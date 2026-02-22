import { Ingridient } from '@/generated/prisma/client';
import { Api } from '@/services/api-client';
import React from 'react';

interface ReturnProps {
    ingredients: Ingridient[];
    loading: boolean;
}

export const useIngredients = (): ReturnProps => {
    const [ingredients, setIngredients] = React.useState<Ingridient[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        setLoading(true);
        Api.ingredients
            .getIngredients()
            .then((data) => setIngredients(data))
            .then(() => setLoading(false))
            .catch((error) => alert(error));
    }, []);

    return { ingredients, loading };
};
