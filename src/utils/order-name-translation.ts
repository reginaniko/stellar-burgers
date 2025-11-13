//import { INGREDIENT_NAME_EN } from './ingredient-translation';

// // connectives / small words
// const REPLACEMENTS: Record<string, string> = {
//   ' бургер ': ' bun ',
//   ' с ': ' with ',
//   ' и ': ' and ',
//   соусом: 'sauce'
// };

// export const translateOrderName = (russianName: string): string => {
//   let english = russianName;

//   // replace ingredient names
//   for (const [ru, en] of Object.entries(INGREDIENT_NAME_EN)) {
//     if (english.includes(ru)) {
//       english = english.replace(ru, en);
//     }
//   }

//   // replace connectives
//   for (const [ru, en] of Object.entries(REPLACEMENTS)) {
//     english = english.replace(new RegExp(ru, 'gi'), en);
//   }

//   // normalize spaces / capitalization
//   return english
//     .replace(/\s+/g, ' ')
//     .replace(/^\s+|\s+$/g, '')
//     .replace(/^./, (m) => m.toUpperCase());
// };

// const BUN_MAP: Record<string, string> = {
//   'Краторный бургер': 'Crater burger',
//   'Флюоресцентный бургер': 'Fluorescent burger',
//   'краторный бургер': 'crater burger',
//   'флюоресцентный бургер': 'fluorescent burger'
// };

// const INGREDIENT_MAP: Record<string, string> = {
//   'с метеоритной говядиной': 'with Meteor Beef',
//   'Метеоритный': 'Meteorite',
//   'с мясом бессмертных моллюсков': 'with Immortal Clam Meat',
//   'с марсианской котлетой': 'with Mars Patty',
//   'и соусом Spicy-X': 'and Spicy-X Sauce',
//   'и антарианским соусом': 'and Antarian Sauce',
//   'и соусом с шипами': 'and Spike Sauce'
// };

// export const translateOrderName = (russianName: string): string => {
//   let english = russianName;

//   // Replace bun
//   for (const [ru, en] of Object.entries(BUN_MAP)) {
//     if (english.includes(ru)) {
//       english = english.replace(ru, en);
//       break;
//     }
//   }

//   // Replace ingredients
//   for (const [ru, en] of Object.entries(INGREDIENT_MAP)) {
//     english = english.replace(ru, en);
//   }

//   return english;
// };

const WORD_MAP: Record<string, string> = {
  бургер: 'burger',
  краторный: 'crater',
  флюоресцентный: 'fluorescent',
  антарианский: 'antarian',
  бессмертный: 'immortal',
  метеоритный: 'meteorite',
  'био-марсианский': 'bio-martian',
  люминесцентный: 'luminescent',
  фалленианский: 'fallenian',
  'альфа-сахаридный': 'alpha-glucosidase',
  астероидный: 'asteroid',
  'экзо-плантаго': 'exo-planetary',
  'традиционный-галактический': 'traditional-galactic',
  минеральный: 'mineral',
  spicy: 'Spicy',
  space: 'Space'
};

const titleCaseEnglishWord = (word: string): string => {
  const hasUpper = /[A-Z]/.test(word);
  if (hasUpper) return word;
  return word.length
    ? word[0].toUpperCase() + word.slice(1).toLowerCase()
    : word;
};

export const translateOrderName = (ruTitle: string): string => {
  if (!ruTitle) return ruTitle;

  let out = ruTitle.replace(/[\p{L}-]+/gu, (token) => {
    const mapped = WORD_MAP[token.toLowerCase()];
    return mapped ?? token;
  });

  out = out.replace(/\s+/g, ' ').trim();
  out = out.replace(/[A-Za-z]+/g, (token) => titleCaseEnglishWord(token));

  return out;
};
