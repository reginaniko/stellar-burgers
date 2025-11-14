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
