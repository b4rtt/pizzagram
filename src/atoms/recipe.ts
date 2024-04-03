import { atom } from 'jotai';

type Recipe = {
  type: string;
  grams: number;
  yeast: 'fresh' | 'dry';
  count: number;
};

export const recipeAtom = atom<Recipe>({
  type: '',
  grams: 230,
  yeast: 'dry',
  count: 4,
});
