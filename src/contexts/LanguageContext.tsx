/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { HINDI_ALPHABET_MAP, UI_TRANSLATIONS } from '../data/hindiTranslations';
import { AlphabetCharacter } from '../types';

export type ReferenceLanguage = 'en' | 'hi';

interface LanguageContextProps {
  referenceLanguage: ReferenceLanguage;
  setReferenceLanguage: (lang: ReferenceLanguage) => void;
  t: (key: string) => string;
  getTranslatedChar: (char: AlphabetCharacter) => AlphabetCharacter;
  translateSubCategory: (subCat?: string) => string | undefined;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [referenceLanguage, setReferenceLanguageState] = useState<ReferenceLanguage>(() => {
    const saved = localStorage.getItem('kannada_reference_lang');
    return (saved === 'hi' || saved === 'en') ? saved : 'en';
  });

  const setReferenceLanguage = (lang: ReferenceLanguage) => {
    setReferenceLanguageState(lang);
    localStorage.setItem('kannada_reference_lang', lang);
  };

  const t = (key: string): string => {
    const langDict = UI_TRANSLATIONS[referenceLanguage] || UI_TRANSLATIONS['en'];
    return langDict[key] || UI_TRANSLATIONS['en'][key] || key;
  };

  // Helper to translate subcategory dynamically for general purposes
  const translateSubCategory = (subCat?: string): string | undefined => {
    if (!subCat) return subCat;
    if (referenceLanguage === 'en') return subCat;

    // Direct string match or find first matching character with same subCategory and return its hindiSubCategory
    const foundEntry = Object.values(HINDI_ALPHABET_MAP).find(
      (val) => val.hindiSubCategory && Object.keys(HINDI_ALPHABET_MAP).some(key => {
        // Find if this is the entry
        return HINDI_ALPHABET_MAP[key].hindiSubCategory === val.hindiSubCategory;
      })
    );
    
    // We can also just maintain a direct subcategory translation map for speed & absolute accuracy:
    const subCatMap: Record<string, string> = {
      'Hrasva Swara (Short Vowel)': 'ह्रस्व स्वर (लघु स्वर)',
      'Deergha Swara (Long Vowel)': 'दीर्घ स्वर (लंबा स्वर)',
      'Vatrusuli Swara (Vocalic Swara)': 'ह्रस्व स्वर (ऋ स्वर)',
      'Sandhyakshara (Diphthong)': 'संध्यक्षर (संयुक्त स्वर)',
      'Anusvara (Modifier)': 'अनुस्वार (Anusvara)',
      'Visarga (Modifier)': 'विसर्ग (Visarga)',
      'Ka-Varga (Gutturals)': 'क-वर्ग (कण्ठ्य)',
      'Cha-Varga (Palatals)': 'च-वर्ग (तालव्य)',
      'Ta-Varga (Retroflex)': 'ट-वर्ग (मूर्धन्य)',
      'Tha-Varga (Dentals)': 'त-वर्ग (दंत्य)',
      'Pa-Varga (Labials)': 'प-वर्ग (ओष्ठ्य)',
      'Avargiya (Unstructured)': 'अवर्गीय (Unstructured)'
    };

    return subCatMap[subCat] || subCat;
  };

  const getTranslatedChar = (char: AlphabetCharacter): AlphabetCharacter => {
    if (referenceLanguage === 'en') {
      return char;
    }

    const translated = HINDI_ALPHABET_MAP[char.id];
    if (!translated) {
      return char;
    }

    // Merge translated strings for Hindi literate learner
    return {
      ...char,
      englishSymbol: translated.hindiSymbol, // Overwrite with Devanagari letter for visual symbols
      subCategory: translated.hindiSubCategory,
      pronunciationHint: translated.hindiPronunciationHint,
      examples: char.examples.map((ex, idx) => {
        const transExample = translated.hindiExamples[idx];
        return {
          ...ex,
          englishMeaning: transExample ? transExample.meaning : ex.englishMeaning
        };
      })
    };
  };

  return (
    <LanguageContext.Provider value={{ referenceLanguage, setReferenceLanguage, t, getTranslatedChar, translateSubCategory }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
