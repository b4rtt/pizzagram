export type Yeast = {
  fresh: number | null;
  dry: number | null;
};

export type Recipe = {
  type: string;
  name: string;
  number: number;
  'grams-per-pizza': number;
  'yeast-type': 'fresh' | 'dry';
  'salt-percentage': number | null;
  'water-share': number | null;
  'sugar-percentage': number | null;
  'oil-percentage': number | null;
  'semolina-percentage': number | null;
  yeast: Yeast;
};

export const recipes: Recipe[] = [
  {
    type: 'neapolitan',
    name: 'Neapolitan',
    number: 4,
    'grams-per-pizza': 230,
    'yeast-type': 'fresh',
    'salt-percentage': 0.0178261,
    'water-share': 65,
    'sugar-percentage': null,
    'oil-percentage': null,
    'semolina-percentage': null,
    yeast: {
      fresh: 0.00119565217391304,
      dry: 0.00043478260869565,
    },
  },
  {
    type: 'new-york',
    name: 'New York',
    number: 4,
    'grams-per-pizza': 230,
    'yeast-type': 'fresh',
    'water-share': 63,
    'salt-percentage': 0.0118478,
    'sugar-percentage': 0.0036,
    'oil-percentage': 0.0177173913,
    'semolina-percentage': null,
    yeast: {
      fresh: 0.005,
      dry: 0.0016667,
    },
  },
  {
    type: 'pan',
    name: 'Homemade Pan',
    number: 3,
    'grams-per-pizza': 230,
    'yeast-type': 'fresh',
    'water-share': 65,
    'salt-percentage': 0.011682893,
    'sugar-percentage': 0.011682893,
    'oil-percentage': 0.0139082058,
    'semolina-percentage': null,
    yeast: {
      fresh: 0.002364394993045897,
      dry: 0.00097357441,
    },
  },
  {
    type: 'sicilian',
    name: 'Sicilian',
    number: 1,
    'grams-per-pizza': 271,
    'yeast-type': 'fresh',
    'oil-percentage': 0.02583,
    'sugar-percentage': 0.01107,
    'semolina-percentage': 0.22,
    'salt-percentage': 0.01107,
    'water-share': 66,
    yeast: {
      fresh: 0.008118081,
      dry: 0.00332103321,
    },
  },
];
