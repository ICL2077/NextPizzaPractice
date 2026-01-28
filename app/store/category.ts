import { create } from 'zustand';

export const categories = ['Пиццы', 'Завтрак', 'Острые', 'Сладкие', 'Вегетерианские', 'С курицей'];
export const additonalCategories = ['Новинки', 'Для всей семьи'];

type State = {
    curCategory: number | null;
    addCategory: number | null;
};

type Action = {
    type: 'Additional' | 'Default';
    arg: number;
};

type Actions = {
    dispatch: (action: Action) => void;
};

const categoryReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'Additional':
            return { curCategory: null, addCategory: action.arg };
        case 'Default':
            return { curCategory: action.arg, addCategory: null };
        default:
            return state;
    }
};

export const useCategoryStore = create<State & Actions>((set) => ({
    curCategory: null,
    addCategory: null,

    dispatch: (action: Action) => set((state) => categoryReducer(state, action)),
}));
