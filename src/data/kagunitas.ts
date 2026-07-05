import { KagunithaMatra } from '../types';

export const KANNADA_MATRAS: Omit<KagunithaMatra, 'sampleForm' | 'transliteration'>[] = [
  {
    vowelChar: 'ಅ',
    matraSign: '',
    matraName: 'Tala-kattu'
  },
  {
    vowelChar: 'ಆ',
    matraSign: '\u0CBE', // ಾ
    matraName: 'Deergha'
  },
  {
    vowelChar: 'ಇ',
    matraSign: '\u0CBF', // ಿ
    matraName: 'Gudisu'
  },
  {
    vowelChar: 'ಈ',
    matraSign: '\u0CC0', // ೀ
    matraName: 'Gudisu Deergha'
  },
  {
    vowelChar: 'ಉ',
    matraSign: '\u0CC1', // ು
    matraName: 'Kombu'
  },
  {
    vowelChar: 'ಊ',
    matraSign: '\u0CC2', // ೂ
    matraName: 'Kombu-Ili'
  },
  {
    vowelChar: 'ಋ',
    matraSign: '\u0CC3', // ೃ
    matraName: 'Vatrusuli'
  },
  {
    vowelChar: 'ಎ',
    matraSign: '\u0CC6', // ೆ
    matraName: 'Ettva'
  },
  {
    vowelChar: 'ಏ',
    matraSign: '\u0CC7', // ೇ
    matraName: 'Ettva-Deergha'
  },
  {
    vowelChar: 'ಐ',
    matraSign: '\u0CC8', // ೈ
    matraName: 'Aitva'
  },
  {
    vowelChar: 'ಒ',
    matraSign: '\u0CCA', // ೊ
    matraName: 'Ottva'
  },
  {
    vowelChar: 'ಓ',
    matraSign: '\u0CCB', // ೋ
    matraName: 'Ottva-Deergha'
  },
  {
    vowelChar: 'ಔ',
    matraSign: '\u0CCC', // ೌ
    matraName: 'Autva'
  },
  {
    vowelChar: 'ಂ',
    matraSign: '\u0C82', // ಂ
    matraName: 'Anusvara'
  },
  {
    vowelChar: 'ಃ',
    matraSign: '\u0C83', // ಃ
    matraName: 'Visarga'
  }
];

export interface GeneratedKagunitha {
  vowelChar: string;
  matraSign: string;
  matraName: string;
  combinedChar: string;
  transliteration: string;
  pronouncedAs: string;
}

/**
 * Generates all 15 syllable combinations (Kagunitha) for a given consonant
 * @param consonantChar The root Kannada consonant (e.g. 'ಕ', 'ಖ', 'ಗ')
 * @param englishRoot The English transliteration root (e.g. 'k', 'kh', 'g')
 */
export function generateKagunitha(consonantChar: string, englishRoot: string): GeneratedKagunitha[] {
  // Let's trim off any existing inherent 'a' sound transliteration if present
  let root = englishRoot.toLowerCase();
  if (root.endsWith('a') && root.length > 1) {
    root = root.slice(0, -1);
  } else if (root === 'a') {
    root = '';
  }

  const transliterationMap: Record<string, string> = {
    'ಅ': 'a',
    'ಆ': 'aa',
    'ಇ': 'i',
    'ಈ': 'ee',
    'ಉ': 'u',
    'ಊ': 'oo',
    'ಋ': 'ru',
    'ಎ': 'e',
    'ಏ': 'ee',
    'ಐ': 'ai',
    'ಒ': 'o',
    'ಓ': 'oo',
    'ಔ': 'au',
    'ಂ': 'am',
    'ಃ': 'aha'
  };

  const pronunciationPronounsMap: Record<string, string> = {
    'ಅ': 'u in cup',
    'ಆ': 'a in father',
    'ಇ': 'i in pin',
    'ಈ': 'ee in feel',
    'ಉ': 'u in put',
    'ಊ': 'oo in moon',
    'ಋ': 'ri in ritual',
    'ಎ': 'e in get',
    'ಏ': 'ay in play',
    'ಐ': 'ai in aisle',
    'ಒ': 'o in go (short)',
    'ಓ': 'oa in boat',
    'ಔ': 'ow in cow',
    'ಂ': 'um in humming',
    'ಃ': 'h breath release'
  };

  return KANNADA_MATRAS.map((m) => {
    const combinedChar = consonantChar + m.matraSign;
    const vowelKey = m.vowelChar;
    const vTrans = transliterationMap[vowelKey] || '';
    
    // Suffix rules for transliteration
    let trans = root + vTrans;
    if (vowelKey === 'ಂ') {
      trans = root + 'am';
    } else if (vowelKey === 'ಃ') {
      trans = root + 'aha';
    }

    return {
      vowelChar: m.vowelChar,
      matraSign: m.matraSign,
      matraName: m.matraName,
      combinedChar,
      transliteration: trans,
      pronouncedAs: `${root}+${vTrans} (${pronunciationPronounsMap[vowelKey]})`
    };
  });
}
