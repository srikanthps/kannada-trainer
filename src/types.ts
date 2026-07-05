export interface WordExample {
  kannadaWord: string;
  transliteration: string;
  englishMeaning: string;
}

export type AlphabetCategory = 'vowel' | 'yogavaaha' | 'consonant' | 'digit';

export interface AlphabetCharacter {
  id: string;
  kannadaChar: string;
  englishSymbol: string;
  category: AlphabetCategory;
  subCategory?: string; // 'hrasva' | 'deergha' | 'guttural' | 'palatal' | 'retroflex' | 'dental' | 'labial' | 'unstructured'
  pronunciationHint: string; // E.g., "Short 'a' as in 'cup' or 'alive'"
  examples: WordExample[];
  acousticClass?: 'alpaprana' | 'mahaprana' | 'anunasika' | 'avargiya' | 'yogavaaha'; // for pattern recognition
}

export interface KagunithaMatra {
  vowelChar: string; // ಅ, ಆ, ಇ...
  matraSign: string; // ಾ, ಿ, ೀ
  matraName: string; // Tala-kattu, Deergha, Gudisu...
  sampleForm: string; // ಕ, ಕಾ, ಕಿ...
  transliteration: string; // ka, kaa, ki...
}

export interface QuizQuestion {
  id: string;
  type: 'identify-char' | 'identify-word-char' | 'match-transliteration' | 'vowel-duration';
  text: string;
  character?: AlphabetCharacter;
  word?: WordExample;
  options: string[];
  correctAnswer: string;
}
