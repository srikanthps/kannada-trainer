import React, { useState, useMemo } from 'react';
import { KANNADA_ALPHABETS } from '../data/alphabets';
import { AlphabetCharacter, AlphabetCategory } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Volume2, ArrowRight, BookOpen, Layers, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface AlphabetGridProps {
  onSelectChar: (char: AlphabetCharacter) => void;
  selectedChar: AlphabetCharacter | null;
  fontSize?: 'normal' | 'large' | 'xl' | 'xxl' | 'max';
}

export const AlphabetGrid: React.FC<AlphabetGridProps> = ({ onSelectChar, selectedChar, fontSize = 'large' }) => {
  const { referenceLanguage, getTranslatedChar, translateSubCategory, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<AlphabetCategory>('vowel');
  const [searchQuery, setSearchQuery] = useState('');
  const [speakerSupported] = useState('speechSynthesis' in window);

  // Dynamic font sizing classes based on selected visual comfort scale
  const getCharSizeClass = () => {
    switch (fontSize) {
      case 'normal': return 'text-3xl sm:text-4xl';
      case 'large': return 'text-4xl sm:text-5xl';
      case 'xl': return 'text-4xl sm:text-5xl';
      case 'xxl': return 'text-4xl sm:text-5xl';
      case 'max': return 'text-4xl sm:text-5xl';
      default: return 'text-4xl sm:text-5xl';
    }
  };

  const getEnglishSizeClass = () => {
    switch (fontSize) {
      case 'normal': return 'text-xs';
      case 'large': return 'text-sm';
      case 'xl': return 'text-sm font-semibold';
      case 'xxl': return 'text-base font-semibold';
      case 'max': return 'text-base font-bold';
      default: return 'text-sm';
    }
  };

  const getSubCategorySizeClass = () => {
    switch (fontSize) {
      case 'normal': return 'text-[9px] text-[#2D2926]/50';
      case 'large': return 'text-[11px] text-[#2D2926]/60 font-medium';
      case 'xl': return 'text-xs md:text-sm text-[#2D2926]/75 font-semibold';
      case 'xxl': return 'text-xs md:text-sm text-[#2D2926]/80 font-bold';
      case 'max': return 'text-sm md:text-base text-[#2D2926]/90 font-extrabold border-t border-[#2D2926]/10 pt-1 mt-1';
      default: return 'text-[11px] text-[#2D2926]/60 font-medium';
    }
  };

  const getBadgeSizeClass = () => {
    switch (fontSize) {
      case 'normal': return 'text-[9px] px-1.5 py-0.5';
      case 'large': return 'text-[10px] px-2 py-0.5';
      case 'xl': return 'text-xs px-2.5 py-1 font-bold';
      case 'xxl': return 'text-sm px-3 py-1 font-bold';
      case 'max': return 'text-sm px-3 py-1 font-bold';
      default: return 'text-[10px] px-2 py-0.5';
    }
  };

  const getDetailCharSizeClass = () => {
    switch (fontSize) {
      case 'normal': return 'text-7xl';
      case 'large': return 'text-8xl';
      case 'xl': return 'text-8xl';
      case 'xxl': return 'text-9xl';
      case 'max': return 'text-[7.5rem]';
      default: return 'text-8xl';
    }
  };

  const getGridColsClass = () => {
    switch (fontSize) {
      case 'normal':
        return 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6';
      case 'large':
        return 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5';
      case 'xl':
        return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4';
      case 'xxl':
        return 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3';
      case 'max':
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
      default:
        return 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5';
    }
  };

  // Filter letters based on active category tab and search query
  const filteredAlphabets = useMemo(() => {
    return KANNADA_ALPHABETS.map((item: AlphabetCharacter) => getTranslatedChar(item)).filter((char: AlphabetCharacter) => {
      const matchesTab = char.category === activeTab;
      const matchesSearch = 
        char.kannadaChar.includes(searchQuery) ||
        char.englishSymbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (char.subCategory && char.subCategory.toLowerCase().includes(searchQuery.toLowerCase())) ||
        char.pronunciationHint.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery, getTranslatedChar]);

  // Voice player using browser speech synthesis
  const speakChar = (char: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(char);
      utterance.lang = 'kn-IN'; // Kannada language code
      utterance.rate = 0.8; // slightly slower for better learning
      window.speechSynthesis.speak(utterance);
    }
  };

  const getSubCatBadgeColor = (subCat?: string) => {
    if (!subCat) return 'bg-[#F5EFEB] text-[#2D2926] border border-[#2D2926]/20';
    if (subCat.includes('Short') || subCat.includes('ह्रस्व')) return 'bg-[#7B241C]/5 text-[#7B241C] border border-[#7B241C]/30';
    if (subCat.includes('Long') || subCat.includes('दीर्घ')) return 'bg-[#C85A17]/5 text-[#C85A17] border border-[#C85A17]/30';
    if (subCat.includes('Diphthong') || subCat.includes('संयुक्त')) return 'bg-[#F4A261]/10 text-[#72522C] border border-[#F4A261]/40';
    if (subCat.includes('Digit') || subCat.includes('ಅಂಕ') || subCat.includes('अंक')) return 'bg-emerald-500/10 text-emerald-850 border border-emerald-500/30';
    return 'bg-[#F5EFEB] text-[#2D2926]/80 border border-[#2D2926]/20';
  };

  const displaySelectedChar = useMemo(() => {
    return selectedChar ? getTranslatedChar(selectedChar) : null;
  }, [selectedChar, getTranslatedChar]);

  return (
    <div id="alphabet-grid-section" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* List/Grid section */}
      <div id="alphabet-explorer-column" className="lg:col-span-2 space-y-6">
        {/* Navigation Tabs and Search */}
        <div id="explorer-toolbar" className="bg-white p-6 border-2 border-[#2D2926] space-y-5 shadow-[4px_4px_0px_0px_rgba(45,41,38,1)]">
          <div id="category-tabs" className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
            {[
              { id: 'vowel', label: t('swarasTab'), count: 13, desc: t('swarasDesc') },
              { id: 'yogavaaha', label: t('yogavaahasTab'), count: 2, desc: t('yogavaahasDesc') },
              { id: 'consonant', label: t('vyanjanasTab'), count: 34, desc: t('vyanjanasDesc') },
              { id: 'digit', label: t('digitsTab'), count: 10, desc: t('digitsDesc') },
            ].map((tab) => (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                onClick={() => {
                  setActiveTab(tab.id as AlphabetCategory);
                  setSearchQuery('');
                }}
                className={`w-full text-left p-3.5 border transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#7B241C] text-white border-[#2D2926]'
                    : 'bg-[#FDFBF7] hover:bg-[#F5EFEB] text-[#2D2926] border-[#2D2926]/30'
                }`}
              >
                <div className="font-serif italic text-base">{tab.label}</div>
                <div className="flex justify-between items-center mt-1">
                  <span className={`text-[10px] font-mono tracking-wider ${activeTab === tab.id ? 'text-white/80' : 'text-[#2D2926]/60'}`}>
                    {tab.desc}
                  </span>
                  <span className={`text-[9px] px-1.5 py-0.5 font-bold font-mono ${
                    activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-[#F5EFEB] text-[#2D2926]'
                  }`}>
                    {tab.count}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div id="search-container" className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2D2926]/50">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              id="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full pl-10 pr-4 py-2.5 border-2 border-[#2D2926] rounded-none text-sm bg-[#FDFBF7] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#7B241C] focus:border-[#7B241C] font-serif placeholder-[#2D2926]/40"
            />
          </div>
        </div>

        {/* Characters Grid */}
        <div id="char-grid-wrapper" className={`grid ${getGridColsClass()} gap-3.5`}>
          {filteredAlphabets.length > 0 ? (
            filteredAlphabets.map((item, index) => (
              <motion.button
                key={item.id}
                id={`char-card-${item.id}`}
                onClick={() => {
                  onSelectChar(item);
                  speakChar(item.kannadaChar);
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.12, delay: Math.min(index * 0.015, 0.15) }}
                className={`p-4 border text-center transition-all cursor-pointer relative flex flex-col justify-between items-center min-h-[160px] overflow-hidden break-words ${
                  selectedChar?.id === item.id
                    ? 'border-[#7B241C] bg-[#7B241C]/5 shadow-[3px_3px_0px_0px_#7B241C]'
                    : 'border-[#2D2926]/20 bg-white hover:border-[#7B241C]/60 hover:shadow-[3px_3px_0px_0px_rgba(45,41,38,0.15)]'
                }`}
              >
                {/* Visual Indicators */}
                <div className="w-full flex justify-between items-center text-xs text-[#2D2926]/40 font-mono scale-90 select-none pb-1 border-b border-[#2D2926]/5">
                  <span>{item.category === 'vowel' ? 'V' : item.category === 'yogavaaha' ? 'Y' : item.category === 'digit' ? 'D' : 'C'}</span>
                  <span>{acousticSymbol(item)}</span>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center py-2">
                  <div className={`${getCharSizeClass()} font-kannada font-bold text-[#2D2926] leading-none transition-all duration-150`}>
                    {item.kannadaChar}
                  </div>

                  <div className={`${getEnglishSizeClass()} text-[#2D2926]/80 mt-1 font-mono transition-all duration-150`}>
                    {item.englishSymbol}
                  </div>
                </div>

                <div className={`w-full mt-1 ${getSubCategorySizeClass()} line-clamp-1 italic font-serif transition-all duration-150 text-center text-[#2D2926]/60 border-t border-[#2D2926]/5 pt-1.5`}>
                  {item.subCategory?.split(' ')[0]}
                </div>
              </motion.button>
            ))
          ) : (
            <div id="no-search-results" className="col-span-full py-16 text-center text-[#2D2926]/70 bg-white border-2 border-dashed border-[#2D2926]/30">
              <BookOpen className="h-10 w-10 mx-auto text-[#2D2926]/30 mb-3" />
              <p className="font-serif italic text-base">{t('noResults')}</p>
              <p className="text-xs text-[#2D2926]/50 mt-1.5 font-mono">{t('noResultsHint')}</p>
            </div>
          )}
        </div>
      </div>

      {/* Details Side Panel */}
      <div id="alphabet-details-column" className="lg:col-span-1">
        <AnimatePresence mode="wait">
          {displaySelectedChar ? (
            <motion.div
              key={displaySelectedChar.id}
              id="selected-char-details-card"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="bg-white border-2 border-[#2D2926] shadow-[6px_6px_0px_0px_rgba(45,41,38,1)] overflow-hidden sticky top-6"
            >
              <div className="bg-[#F5EFEB]/50 p-6 border-b border-[#2D2926]/20 relative">
                <div className="flex justify-between items-start">
                  <span className={`${getBadgeSizeClass()} font-bold uppercase tracking-widest font-mono transition-all duration-150 ${getSubCatBadgeColor(displaySelectedChar.subCategory)}`}>
                    {translateSubCategory(displaySelectedChar.subCategory || displaySelectedChar.category)}
                  </span>
                  
                  {speakerSupported && (
                    <button
                      id="pronunciation-audio-btn"
                      onClick={() => speakChar(displaySelectedChar.kannadaChar)}
                      title="Listen Pronunciation"
                      className="p-2.5 bg-white text-[#7B241C] border border-[#2D2926]/30 hover:border-[#7B241C] active:scale-95 transition-all shadow-sm"
                    >
                      <Volume2 className="h-4 w-4" />
                    </button>
                  )}
                </div>

                <div className="text-center py-5">
                  <span className={`${getDetailCharSizeClass()} font-kannada font-bold text-[#2D2926] block select-all leading-tight transition-all duration-150`}>
                    {displaySelectedChar.kannadaChar}
                  </span>
                  <span className="text-xl font-mono text-[#7B241C] mt-1.5 block font-bold">
                    [ {displaySelectedChar.englishSymbol} ]
                  </span>
                </div>
              </div>

              <div id="card-body" className="p-6 space-y-6">
                {/* Pronunciation Guide */}
                <div className="space-y-2">
                  <h4 className="text-xs uppercase text-[#2D2926]/50 font-bold tracking-[0.2em] flex items-center gap-2 font-mono">
                    <Layers className="h-3 w-3" /> {t('articulationLabel')}
                  </h4>
                  <p className="text-sm text-[#2D2926]/95 leading-relaxed bg-[#F5EFEB]/30 p-3.5 border border-[#2D2926]/15 font-serif italic">
                    {displaySelectedChar.pronunciationHint}
                  </p>
                </div>

                {/* Word Examples */}
                <div className="space-y-3.5">
                  <h4 className="text-xs uppercase text-[#2D2926]/50 font-bold tracking-[0.2em] flex items-center gap-2 font-mono">
                    <BookOpen className="h-3 w-3" /> {t('examplesLabel')}
                  </h4>
                  
                  <div className="space-y-3">
                    {displaySelectedChar.examples.map((ex, index) => (
                      <div
                        key={index}
                        id={`example-word-card-${index}`}
                        className="p-3 bg-[#FDFBF7] hover:bg-[#F5EFEB]/40 transition-all border border-[#2D2926]/20 flex items-center justify-between"
                      >
                        <div>
                          <div className="text-2xl font-kannada font-bold text-[#2D2926] flex items-baseline gap-2">
                            <span className="text-xs font-mono text-[#7B241C]">#0{index + 1}</span>
                            <span>{ex.kannadaWord}</span>
                          </div>
                          <div className="text-[10px] text-[#2D2926]/50 mt-1 font-mono">
                            {t('usesSoundLabel')}: <span className="underline font-bold text-[#2D2926]/80">{displaySelectedChar.kannadaChar}</span>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-sm font-bold text-[#7B241C] font-mono flex items-center gap-1 justify-end">
                            {ex.transliteration} <ArrowRight className="h-3 w-3 inline text-[#2D2926]/40" />
                          </div>
                          <div className="text-xs text-[#2D2926]/80 font-serif italic mt-0.5">
                            {ex.englishMeaning}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Success Indicator */}
                <div className="pt-2 border-t border-[#2D2926]/10 flex items-center gap-2.5 text-xs text-emerald-800 font-mono">
                  <CheckCircle className="h-4 w-4 text-emerald-700" />
                  <span>{t('readyNextLabel')}</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <div id="no-char-selected" className="bg-[#F5EFEB]/30 border-2 border-dashed border-[#2D2926]/20 p-8 text-center text-[#2D2926]/60 h-[400px] flex flex-col justify-center items-center">
              <span className="text-5xl mb-4 opacity-75">✒️</span>
              <p className="font-serif italic text-lg text-[#2D2926]">{t('selectCharTitle')}</p>
              <p className="text-xs text-[#2D2926]/50 mt-2 max-w-[220px] mx-auto font-mono">
                {t('selectCharDesc')}
              </p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Helper to provide nice acoustic symbol flags
function acousticSymbol(item: AlphabetCharacter): string {
  if (item.category === 'digit') {
    return '#';
  }
  if (item.category === 'vowel') {
    return item.subCategory?.includes('Short') ? 'S' : item.subCategory?.includes('Long') ? 'L' : 'D';
  }
  if (item.acousticClass === 'alpaprana') return 'α'; // Alpaprana
  if (item.acousticClass === 'mahaprana') return 'Α'; // Mahaprana
  if (item.acousticClass === 'anunasika') return 'N'; // Nasal / Anunasika
  if (item.acousticClass === 'yogavaaha') return 'Y';
  return '⁃';
}
