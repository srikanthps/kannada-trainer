import React, { useState, useEffect, useMemo, useRef } from 'react';
import { KANNADA_ALPHABETS } from '../data/alphabets';
import { generateKagunitha, GeneratedKagunitha } from '../data/kagunitas';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  Volume2,
  Sparkles,
  RefreshCw,
  Layers,
  Check,
  X,
  Timer,
  Play,
  Pause,
  FastForward,
  RotateCcw,
  Sliders,
  Flame,
  ArrowRight,
  BookOpen,
  Eye,
  Settings,
  HelpCircle
} from 'lucide-react';

interface SpeedRecallItem {
  id: string;
  displayChar: string; // The Kannada text (Syllable or Word)
  transliteration: string; // Phonetic pronunciation
  type: 'syllable' | 'word';
  vowelSource?: string; // If syllable, the vowel source (ಅ, ಆ, ಇ...)
  consonantSource?: string; // If syllable, the consonant source (ಕ, ಖ...)
  matraName?: string; // Tala-kattu, Gudisu etc.
  pronouncedAs?: string; // Inherent pronunciation hint
  breakdown: string; // Helpful sound breakdown
  meaning?: string; // English meaning if it's a word
}

export const SpeedRecall: React.FC = () => {
  const { t, referenceLanguage } = useLanguage();

  // Mode selection & Configurations
  const [practiceMode, setPracticeMode] = useState<'single' | 'words'>('single');
  const [wordLength, setWordLength] = useState<number>(3); // 2, 3, 4, 5 Letters
  const [syllableScope, setSyllableScope] = useState<'all' | 'vowels' | 'basic-consonants' | 'k-series' | 't-series' | 'p-series'>('all');

  const syllableScopes = useMemo(() => {
    if (referenceLanguage === 'hi') {
      return [
        { id: 'all', label: 'सभी अक्षर (गुलदस्ता)' },
        { id: 'vowels', label: 'केवल स्वर' },
        { id: 'basic-consonants', label: 'मूल व्यंजन' },
        { id: 'k-series', label: 'क-वर्ग (ಕ ಖ ಗ ಘ)' },
        { id: 't-series', label: 'त/ट-वर्ग (ತ ಥ ದ ಧ / ಟ ಠ)' },
        { id: 'p-series', label: 'प-वर्ग (ಪ ಫ ಬ ಭ ಮ)' }
      ];
    }
    return [
      { id: 'all', label: 'All Syllables' },
      { id: 'vowels', label: 'Vowels Only' },
      { id: 'basic-consonants', label: 'Basic Consonants' },
      { id: 'k-series', label: 'k (ಕ ಖ ಗ ಘ)' },
      { id: 't-series', label: 't/t. (ತ ಥ ದ ಧ / ಟ ಠ)' },
      { id: 'p-series', label: 'p / b (ಪ ಫ ಬ ಭ ಮ)' }
    ];
  }, [referenceLanguage]);

  const getLocalizedBreakdown = (item: SpeedRecallItem | null) => {
    if (!item) return '';
    if (referenceLanguage !== 'hi') return item.breakdown;

    if (item.type === 'word') {
      return item.breakdown
        .replace("Phonetic composition", "ध्वन्यात्मक संरचना")
        .replace("joined by", "के साथ जुड़कर")
        .replace("Combined visual word", "संयुक्त दृश्य शब्द")
        .replace("syllables", "अक्षर")
        .replace("meaning", "अर्थ")
        .replace("Features consonant", "विशेषताएं व्यंजन")
        .replace("doubled consonant", "द्वित्व व्यंजन")
        .replace("and", "और")
        .replace("Starts with the", "शुरुआत")
        .replace("Starts with consonant", "व्यंजन से शुरुआत")
        .replace("consonant", "व्यंजन")
        .replace("vowel sign", "स्वर चिन्ह")
        .replace("vowel", "स्वर")
        .replace("followed by", "के बाद")
        .replace("combined with", "के साथ मिलकर")
        .replace("Formed by joining two simple primary consonants:", "दो सरल प्राथमिक व्यंजनों को मिलाकर बना:")
        .replace("linked to", "से जुड़ा हुआ");
    }

    if (item.consonantSource) {
      return `व्यंजन "${item.consonantSource}" स्वर संकेत "${item.vowelSource}" के साथ मिलकर संयुक्त ध्वनि "(${item.pronouncedAs || item.transliteration})" बनाता है।`;
    } else {
      const isYog = item.matraName?.includes('Yogavaaha');
      const soundType = isYog ? 'योगवाह' : 'स्वर';
      return `प्राथमिक स्वतंत्र ${soundType} ध्वनि: "${item.transliteration}"।`;
    }
  };
  
  // Flashcard Player State
  const [itemsPool, setItemsPool] = useState<SpeedRecallItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [revealed, setRevealed] = useState<boolean>(false);
  const [isLoadingWords, setIsLoadingWords] = useState<boolean>(false);
  
  // Timer state
  const [timeLeft, setTimeLeft] = useState<number>(500); // 500 centiseconds = 5.0 seconds
  const [timerActive, setTimerActive] = useState<boolean>(true);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState<boolean>(false);
  
  // Accessible sizing inside player (for reading from 2 feet or even 5 feet!)
  const [cardScale, setCardScale] = useState<'huge' | 'gigantic' | 'colossal'>('huge');
  
  // Leitner-style tracking for study sessions
  const [answeredCorrect, setAnsweredCorrect] = useState<string[]>([]);
  const [answeredIncorrect, setAnsweredIncorrect] = useState<string[]>([]);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const autoPlayNextRef = useRef<NodeJS.Timeout | null>(null);

  // Generate complete single syllable pool locally
  const localSyllablesPool = useMemo(() => {
    const list: SpeedRecallItem[] = [];

    // 1. Add Swaras (vowels) & Yogavaahas
    const primaryVowels = KANNADA_ALPHABETS.filter(
      (c) => c.category === 'vowel' || c.category === 'yogavaaha'
    );
    primaryVowels.forEach((v) => {
      list.push({
        id: `vowel-${v.id}`,
        displayChar: v.kannadaChar,
        transliteration: v.englishSymbol,
        type: 'syllable',
        vowelSource: v.kannadaChar,
        breakdown: `Primary standalone sound: "${v.englishSymbol}" (${v.pronunciationHint})`,
        matraName: v.category === 'vowel' ? 'Swara (Vowel)' : 'Yogavaaha (Modifier)',
        pronouncedAs: v.pronunciationHint
      });
    });

    // 2. Add all Consonants combined with all Matras (Kagunitha combos)
    const consonantsList = KANNADA_ALPHABETS.filter((c) => c.category === 'consonant');
    consonantsList.forEach((c) => {
      const kagunitha = generateKagunitha(c.kannadaChar, c.englishSymbol);
      kagunitha.forEach((k, idx) => {
        list.push({
          id: `syllable-${c.id}-${idx}`,
          displayChar: k.combinedChar,
          transliteration: k.transliteration,
          type: 'syllable',
          vowelSource: k.vowelChar,
          consonantSource: c.kannadaChar,
          matraName: k.matraName,
          pronouncedAs: k.pronouncedAs,
          breakdown: `Consonant "${c.kannadaChar}" combined with vowel sign "${k.vowelChar}" (${k.pronouncedAs})`
        });
      });
    });

    return list;
  }, []);

  // Fisher-Yates Shuffle helper
  const shuffleArray = <T,>(arr: T[]): T[] => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Build items list according to current controls
  const initializePool = async (forceMode?: 'single' | 'words') => {
    const selectedMode = forceMode || practiceMode;
    
    if (selectedMode === 'single') {
      setIsLoadingWords(false);
      let list = [...localSyllablesPool];

      // Apply sub-filters based on syllableScope
      if (syllableScope === 'vowels') {
        list = list.filter((item) => !item.consonantSource);
      } else if (syllableScope === 'basic-consonants') {
        // Just the purely raw consonants combined with default Tala-kattu (idx 0)
        list = list.filter((item) => item.consonantSource && item.matraName === 'Tala-kattu');
      } else if (syllableScope === 'k-series') {
        list = list.filter((item) => item.consonantSource && ['ಕ', 'ಖ', 'ಗ', 'ಘ', 'ಙ'].includes(item.consonantSource));
      } else if (syllableScope === 't-series') {
        list = list.filter((item) => item.consonantSource && ['ತ', 'ಥ', 'ದ', 'ಧ', 'ನ', 'ಟ', 'ಠ', 'ಡ', 'ಢ', 'ಣ'].includes(item.consonantSource));
      } else if (syllableScope === 'p-series') {
        list = list.filter((item) => item.consonantSource && ['ಪ', 'ಫ', 'ಬ', 'ಭ', 'ಮ'].includes(item.consonantSource));
      }

      const shuffled = shuffleArray(list);
      setItemsPool(shuffled);
      setCurrentIndex(0);
      setRevealed(false);
      setTimeLeft(500);
      setTimerActive(true);
    } else {
      // WORDS MODE: Load specified letter words from server
      setIsLoadingWords(true);
      try {
        const res = await fetch('/api/generate-recall-words', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ length: wordLength })
        });
        
        if (res.ok) {
          const data = await res.json();
          const list: SpeedRecallItem[] = data.words.map((w: any, index: number) => ({
            id: `word-${wordLength}-${index}-${Date.now()}`,
            displayChar: w.kannadaWord,
            transliteration: w.transliteration,
            type: 'word',
            breakdown: w.breakdown,
            meaning: w.englishMeaning
          }));
          
          setItemsPool(shuffleArray(list));
          setCurrentIndex(0);
          setRevealed(false);
          setTimeLeft(500);
          setTimerActive(true);
        }
      } catch (err) {
        console.error('Failed to load words for speed recall:', err);
      } finally {
        setIsLoadingWords(false);
      }
    }
  };

  // Hook into configuration changes to rebuild pool
  useEffect(() => {
    initializePool();
  }, [practiceMode, wordLength, syllableScope]);

  // Active item
  const currentItem = useMemo(() => {
    if (itemsPool.length === 0 || currentIndex >= itemsPool.length) return null;
    return itemsPool[currentIndex];
  }, [itemsPool, currentIndex]);

  // Audio announcer
  const speechAnnounce = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'kn-IN';
      u.rate = 0.72; // moderately slow for perfect reading/learning alignment
      window.speechSynthesis.speak(u);
    }
  };

  // Perform reveal action
  const triggerReveal = () => {
    if (revealed) return;
    setRevealed(true);
    setTimerActive(false);
    
    // Announce the correct sound
    if (currentItem) {
      speechAnnounce(currentItem.displayChar);
    }

    // Auto play scheduling
    if (autoPlayEnabled) {
      if (autoPlayNextRef.current) clearTimeout(autoPlayNextRef.current);
      autoPlayNextRef.current = setTimeout(() => {
         handleNext();
      }, 3500); // Wait 3.5 seconds on answer before going to next card
    }
  };

  // Timer loop
  useEffect(() => {
    if (!timerActive || revealed || !currentItem) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 10) {
          clearInterval(timerRef.current!);
          triggerReveal();
          return 0;
        }
        return prev - 10;
      });
    }, 100);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerActive, revealed, currentItem, autoPlayEnabled]);

  // Auto-play trigger helper
  useEffect(() => {
    // If user changes autoplay toggling during a revealed state, handle properly
    if (!autoPlayEnabled && autoPlayNextRef.current) {
      clearTimeout(autoPlayNextRef.current);
    } else if (autoPlayEnabled && revealed) {
      autoPlayNextRef.current = setTimeout(() => {
        handleNext();
      }, 3500);
    }
    return () => {
      if (autoPlayNextRef.current) clearTimeout(autoPlayNextRef.current);
    };
  }, [autoPlayEnabled]);

  // Handle study status keepers
  const handleAnswer = (correct: boolean) => {
    if (!currentItem) return;
    
    if (correct) {
      setAnsweredCorrect((prev) => [...new Set([...prev, currentItem.id])]);
      setAnsweredIncorrect((prev) => prev.filter(id => id !== currentItem.id));
    } else {
      setAnsweredIncorrect((prev) => [...new Set([...prev, currentItem.id])]);
    }
    
    handleNext();
  };

  // Navigate to next card
  const handleNext = () => {
    if (autoPlayNextRef.current) clearTimeout(autoPlayNextRef.current);
    
    if (currentIndex + 1 >= itemsPool.length) {
      // Reached end of current pool, fetch/reshuffle next batch!
      if (practiceMode === 'words') {
        initializePool();
      } else {
        // Syllable reshuffle
        const reshuffled = shuffleArray(itemsPool);
        setItemsPool(reshuffled);
        setCurrentIndex(0);
        setRevealed(false);
        setTimeLeft(500);
        setTimerActive(true);
      }
    } else {
      setCurrentIndex((prev) => prev + 1);
      setRevealed(false);
      setTimeLeft(500);
      setTimerActive(true);
    }
  };

  // Big Display Fonts
  const getDisplayFontClass = () => {
    switch (cardScale) {
      case 'huge': return 'text-7xl sm:text-8xl md:text-[8rem]';
      case 'gigantic': return 'text-8xl sm:text-[10rem] md:text-[11.5rem]';
      case 'colossal': return 'text-[9rem] sm:text-[12rem] md:text-[14.5rem]';
      default: return 'text-8xl';
    }
  };

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (autoPlayNextRef.current) clearTimeout(autoPlayNextRef.current);
    };
  }, []);

  return (
    <div id="speed-recall-container" className="space-y-6">
      
      {/* 1. Header controls & Explanation */}
      <div id="speed-recall-control-card" className="bg-white p-5 border-2 border-[#2D2926] shadow-[4px_4px_0px_0px_rgba(45,41,38,1)] space-y-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-serif text-[#2D2926] flex items-center gap-2">
              <Flame className="h-5 w-5 text-[#7B241C] animate-pulse" />
              {referenceLanguage === 'hi' ? 'अक्षर और शब्द त्वरित स्मरण प्रशिक्षक' : 'Syllables & Words recall Memorization Trainer'}
            </h3>
            <p className="text-[12px] font-serif text-[#2D2926]/70 italic">
              {referenceLanguage === 'hi' 
                ? 'त्वरित अभ्यास यादृच्छिक रूप से बिना दोहराव वाले अक्षर या शब्द प्रदर्शित करता है। विवरण और उच्चारण प्रकट होने से पहले 5 सेकंड में उन्हें पढ़ने का प्रयास करें!'
                : 'Speed training keeps flashing random, non-repeating characters or words. Try to read them in 5 seconds before the details and pronunciation are revealed!'}
            </p>
          </div>
          
          {/* Practice selection tabs */}
          <div className="flex border-2 border-[#2D2926] p-1 bg-[#F5EFEB]/30 rounded">
            <button
              id="mode-select-single-btn"
              onClick={() => {
                setPracticeMode('single');
                setAnsweredCorrect([]);
                setAnsweredIncorrect([]);
              }}
              className={`px-4 py-1.5 text-xs font-bold font-mono transition-all cursor-pointer uppercase ${
                practiceMode === 'single'
                  ? 'bg-[#7B241C] text-white shadow-sm'
                  : 'text-[#2D2926]/70 hover:text-[#2D2926]'
              }`}
            >
              {referenceLanguage === 'hi' ? 'एकल अक्षर' : 'Single Characters'}
            </button>
            <button
              id="mode-select-words-btn"
              onClick={() => {
                setPracticeMode('words');
                setAnsweredCorrect([]);
                setAnsweredIncorrect([]);
              }}
              className={`px-4 py-1.5 text-xs font-bold font-mono transition-all cursor-pointer uppercase ${
                practiceMode === 'words'
                  ? 'bg-[#7B241C] text-white shadow-sm'
                  : 'text-[#2D2926]/70 hover:text-[#2D2926]'
              }`}
            >
              {referenceLanguage === 'hi' ? 'शब्द फ़्लैशकार्ड' : 'Words Flashcard'}
            </button>
          </div>
        </div>

        {/* Sub settings panel depending on the selected mode */}
        <div className="p-4 bg-[#F5EFEB]/30 border-2 border-[#2D2926]/20 grid grid-cols-1 md:grid-cols-3 gap-4 items-center rounded">
          
          {/* Left Setting: Target Customisations */}
          {practiceMode === 'single' ? (
            <div className="space-y-1.5 md:col-span-2">
              <label htmlFor="syllable-scope" className="text-[10px] font-bold uppercase tracking-widest text-[#2D2926]/60 font-mono block">
                {referenceLanguage === 'hi' ? 'अक्षर उप-श्रेणी चयन' : 'Syllable Sub-Category Selection'}
              </label>
              <div className="flex flex-wrap gap-1.5">
                {syllableScopes.map((scope) => (
                  <button
                    key={scope.id}
                    id={`scope-btn-${scope.id}`}
                    onClick={() => setSyllableScope(scope.id as any)}
                    className={`px-2.5 py-1 text-[11px] font-mono border transition-all cursor-pointer ${
                      syllableScope === scope.id
                        ? 'bg-[#2D2926] text-white border-[#2D2926]'
                        : 'bg-white text-[#2D2926] border-[#2D2926]/20 hover:border-[#2D2926]/40'
                    }`}
                  >
                    {scope.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-1.5 md:col-span-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#2D2926]/60 font-mono block">
                {referenceLanguage === 'hi' ? 'वर्णों की निर्दिष्ट संख्या (अक्षर)' : 'Specified Number of Characters (Aksharas/Visual Letters)'}
              </span>
              <div className="flex items-center gap-1.5">
                {[2, 3, 4, 5].map((len) => (
                  <button
                    key={len}
                    id={`len-btn-${len}`}
                    onClick={() => {
                      setWordLength(len);
                      setAnsweredCorrect([]);
                      setAnsweredIncorrect([]);
                    }}
                    className={`px-4 py-1.5 text-xs font-bold font-mono border-2 transition-all cursor-pointer ${
                      wordLength === len
                        ? 'bg-[#7B241C] text-white border-[#2D2926]'
                        : 'bg-white text-[#2D2926] border-[#2D2926]/30 hover:border-[#2D2926]'
                    }`}
                  >
                    {referenceLanguage === 'hi' ? `${len} अक्षर वाले शब्द` : `${len} Letter Words`}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Right Setting: Handsfree Autoplayer */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-center gap-4 justify-end border-t md:border-t-0 pt-3 md:pt-0 md:border-l border-[#2D2926]/10 md:pl-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="autoplay-checkbox"
                checked={autoPlayEnabled}
                onChange={(e) => setAutoPlayEnabled(e.target.checked)}
                className="w-4.5 h-4.5 border-2 border-[#2D2926] rounded text-[#7B241C] focus:ring-[#7B241C] cursor-pointer"
              />
              <label htmlFor="autoplay-checkbox" className="text-xs font-bold font-mono uppercase tracking-wider text-[#2D2926]/90 cursor-pointer flex items-center gap-1.1">
                {referenceLanguage === 'hi' ? 'ऑटो-प्ले' : 'Auto-Play'} <span className="text-[9px] bg-red-100 text-red-900 border border-red-200 px-1 font-sans rounded select-none animate-pulse">{referenceLanguage === 'hi' ? 'अध्ययन मोड' : 'Study Mode'}</span>
              </label>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-[10px] font-mono uppercase text-[#2D2926]/50">{referenceLanguage === 'hi' ? 'दूरी का आकार:' : 'Distance Sizing:'}</span>
              <select
                id="speedcard-sizer"
                value={cardScale}
                onChange={(e) => setCardScale(e.target.value as any)}
                className="p-1 border border-[#2D2926]/30 bg-white text-[11px] font-mono rounded cursor-pointer"
              >
                <option value="huge">{referenceLanguage === 'hi' ? 'विशाल (2 फीट)' : 'Huge (2 Feet)'}</option>
                <option value="gigantic">{referenceLanguage === 'hi' ? 'अति विशाल (3 फीट)' : 'Gigantic (3 Feet)'}</option>
                <option value="colossal">{referenceLanguage === 'hi' ? 'महा विशाल (5 फीट+)' : 'Colossal (5 Feet+)'}</option>
              </select>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Loading Placeholder */}
      {isLoadingWords ? (
        <div className="bg-white border-2 border-[#2D2926] py-36 text-center space-y-4 shadow-[4px_4px_0px_0px_rgba(45,41,38,1)]">
          <div className="w-12 h-12 border-4 border-[#7B241C] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="font-serif italic text-base font-semibold text-[#2D2926]">
            {referenceLanguage === 'hi' 
              ? `जेमिनी एआई का उपयोग करके ${wordLength}-अक्षरों वाले कन्नड़ शब्द तैयार किए जा रहे हैं...` 
              : `Formulating ${wordLength}-letter Kannada words using Gemini AI...`}
          </p>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#2D2926]/50 block">
            {referenceLanguage === 'hi' ? 'उत्कृष्ट लिप्यंतरण और विवरण एकत्रित कर रहे हैं' : 'Gathering perfect transliterations & breakdowns'}
          </span>
        </div>
      ) : itemsPool.length === 0 ? (
        <div className="bg-white border-2 border-[#2D2926] py-28 text-center space-y-3 shadow-[4px_4px_0px_0px_rgba(45,41,38,1)]">
          <p className="font-serif italic text-base text-[#2D2926]/70">
            {referenceLanguage === 'hi' ? 'इस श्रेणी के अंतर्गत कोई अक्षर नहीं मिले...' : 'No syllables matching this scope category...'}
          </p>
          <button
            onClick={() => initializePool()}
            className="px-4 py-2 bg-[#2D2926] text-white font-mono font-bold text-xs uppercase"
          >
            {referenceLanguage === 'hi' ? 'फ़िल्टर रीसेट करें' : 'Reset filter'}
          </button>
        </div>
      ) : (

        /* 3. Main Speed Card Player */
        <div className="space-y-5">
          
          {/* Progress timer bar */}
          <div className="w-full bg-[#2D2926]/10 h-3 border-2 border-[#2D2926] overflow-hidden relative rounded-sm">
            <motion.div
              initial={{ width: '100%' }}
              animate={{ width: `${(timeLeft / 500) * 100}%` }}
              transition={{ duration: 0.1, ease: 'linear' }}
              className={`h-full transition-colors ${
                timeLeft < 150 ? 'bg-red-600' : timeLeft < 300 ? 'bg-amber-500' : 'bg-[#7B241C]'
              }`}
            />
          </div>

          <div id="recall-card-wrapper" className="grid grid-cols-1 gap-5">
            
            {/* The giant visualization block */}
            <motion.div
              layout
              id="active-speedcard"
              className="bg-white border-2 border-[#2D2926] p-8 min-h-[350px] flex flex-col justify-between items-center relative overflow-hidden shadow-[5px_5px_0px_0px_rgba(45,41,38,1)]"
            >
              {/* Corner Watermark Details */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="text-[10px] font-mono bg-[#2D2926]/5 text-[#2D2926]/70 border border-[#2D2926]/15 px-2.5 py-1 rounded">
                  {referenceLanguage === 'hi' ? `अनुक्रमणिका: ${currentIndex + 1} / ${itemsPool.length}` : `Index: ${currentIndex + 1} / ${itemsPool.length}`}
                </span>
                
                {currentItem?.type === 'word' ? (
                  <span className="text-[10px] font-mono bg-purple-50 text-purple-900 border border-purple-200 px-2 py-1 rounded">
                    {referenceLanguage === 'hi' ? `शब्द (${wordLength} अक्षर)` : `Word (${wordLength} Letters)`}
                  </span>
                ) : (
                  <span className="text-[10px] font-mono bg-orange-50 text-orange-950 border border-orange-200 px-2 py-1 rounded">
                    {currentItem?.matraName || (referenceLanguage === 'hi' ? 'अक्षर' : 'Syllable')}
                  </span>
                )}
              </div>

              <div className="absolute top-4 right-4 flex items-center gap-2">
                <button
                  id="reset-card-session-btn"
                  onClick={() => {
                    setAnsweredCorrect([]);
                    setAnsweredIncorrect([]);
                    initializePool();
                  }}
                  className="p-1.5 border border-[#2D2926]/20 hover:border-[#2D2926] text-[#2D2926]/60 hover:text-[#2D2926] rounded cursor-pointer transition-colors"
                  title={referenceLanguage === 'hi' ? 'सत्र रीसेट करें' : 'Reset score and reshuffle pool'}
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
              </div>

              {/* GIANT KANNADA LETTER/WORD */}
              <div className="flex-grow flex flex-col items-center justify-center py-6 w-full mt-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentItem?.id}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.97, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="text-center font-kannada font-bold select-none text-[#2D2926] hover:text-[#7B241C] leading-[1.05] transition-colors"
                  >
                    <span className={`${getDisplayFontClass()}`}>
                      {currentItem?.displayChar}
                    </span>
                  </motion.div>
                </AnimatePresence>
                
                {/* Reveal countdown indicator or Speaker support prompt */}
                {!revealed && (
                  <div className="mt-4 flex items-center gap-2 text-sm font-mono text-[#7B241C] font-bold tracking-widest animate-pulse border border-[#7B241C]/25 bg-[#7B241C]/5 px-4 py-1.1 rounded">
                    <Timer className="h-4 w-4" /> {referenceLanguage === 'hi' ? `प्रकट होने में ${(timeLeft / 100).toFixed(1)}s` : `REVEALING IN ${(timeLeft / 100).toFixed(1)}s`}
                  </div>
                )}
              </div>

              {/* REVEALED INFO DRAWER */}
              <div className="w-full border-t-2 border-dashed border-[#2D2926]/20 mt-4 pt-6 min-h-[160px]">
                <AnimatePresence mode="wait">
                  {revealed && currentItem ? (
                    <motion.div
                      key="show-details"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4 text-center md:text-left grid grid-cols-1 md:grid-cols-3 items-center gap-4"
                    >
                      {/* Section 1: Sound output/representation */}
                      <div className="space-y-1 md:border-r border-[#2D2926]/10 md:pr-4">
                        <span className="text-[10px] font-bold uppercase font-mono text-[#2D2926]/50 block">
                          {referenceLanguage === 'hi' ? 'ध्वन्यात्मक लिप्यंतरण' : 'Phonology Transliteration'}
                        </span>
                        <div className="flex items-center justify-center md:justify-start gap-2">
                          <h4 className="text-3xl font-mono font-black text-[#7B241C] tracking-tight">
                            {currentItem.transliteration}
                          </h4>
                          <button
                            id="speak-revealed-btn"
                            onClick={() => speechAnnounce(currentItem.displayChar)}
                            className="p-1.5 bg-[#7B241C]/5 border border-[#7B241C]/30 text-[#7B241C] rounded-md hover:bg-[#7B241C] hover:text-white cursor-pointer transition-colors"
                          >
                            <Volume2 className="h-4 w-4" />
                          </button>
                        </div>
                        {currentItem.meaning && (
                          <div className="mt-2 text-sm font-serif italic text-emerald-900 bg-emerald-50 border border-emerald-200 px-2 py-0.5 inline-block">
                            {referenceLanguage === 'hi' ? 'अर्थ' : 'Meaning'}: &quot;{currentItem.meaning}&quot;
                          </div>
                        )}
                      </div>

                      {/* Section 2: Detailed Sound Breakdown */}
                      <div className="md:col-span-2 space-y-1">
                        <span className="text-[10px] font-bold uppercase font-mono text-[#2D2926]/50 block">
                          {referenceLanguage === 'hi' ? 'विस्तृत विच्छेद विवरण' : 'Breakdown explanation'}
                        </span>
                        <p className="text-sm font-serif text-[#2D2926] leading-relaxed italic pr-2">
                          {getLocalizedBreakdown(currentItem)}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <div key="hide-details" className="flex flex-col items-center justify-center text-[#2D2926]/40 py-8 space-y-2">
                      <Eye className="h-7 w-7 text-[#2D2926]/20 shrink-0" />
                      <p className="text-xs font-serif italic">
                        {referenceLanguage === 'hi' ? 'यह कौन सी ध्वनि थी? स्वर संशोधकों के बारे में ध्यान से सोचें!' : 'What was that sound? Think carefully about the vowel modifiers!'}
                      </p>
                      <button
                        id="quick-reveal-prompt-btn"
                        onClick={triggerReveal}
                        className="py-1 px-4 border border-[#2D2926]/30 text-xs text-[#2D2926] hover:bg-[#F5EFEB] transition-all font-mono"
                      >
                        {referenceLanguage === 'hi' ? 'तुरंत प्रकट करें' : 'Reveal Instantly'}
                      </button>
                    </div>
                  )}
                </AnimatePresence>
              </div>

            </motion.div>

            {/* Leitner scoring and progression trackers */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-[#F5EFEB]/30 border-2 border-[#2D2926] p-4 font-mono select-none">
              
              {/* Left Side: Study scoreboard stats */}
              <div className="flex items-center gap-4">
                <span className="text-[10.5px] font-bold text-[#2D2926]/70 uppercase tracking-widest">
                  {referenceLanguage === 'hi' ? 'लीट्नर स्कोर:' : 'Leitner scores:'}
                </span>
                <div className="flex gap-2">
                  <span id="score-correct-badge" className="text-xs bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold border border-emerald-300 px-3 py-1 flex items-center gap-1 leading-none rounded">
                    {referenceLanguage === 'hi' ? 'आ गया' : 'Got It'}: {answeredCorrect.length}
                  </span>
                  <span id="score-incorrect-badge" className="text-xs bg-orange-100 hover:bg-orange-200 text-orange-850 font-bold border border-orange-300 px-3 py-1 flex items-center gap-1 leading-none rounded">
                    {referenceLanguage === 'hi' ? 'संदेह/बचा' : 'Study/Missed'}: {answeredIncorrect.length}
                  </span>
                </div>
              </div>

              {/* Right Side: Scorekeepers / Navigation */}
              {revealed ? (
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    id="score-incorrect-btn"
                    onClick={() => handleAnswer(false)}
                    className="flex-1 sm:flex-initial py-2.5 px-4 bg-orange-600 hover:bg-orange-700 text-white border-2 border-[#2D2926] hover:shadow-[2px_2px_0px_0px_rgba(45,41,38,1)] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 cursor-pointer transition-all"
                  >
                    <X className="h-4 w-4" /> {referenceLanguage === 'hi' ? 'पुनः अभ्यास (गलत जवाब)' : 'study again (incorrect)'}
                  </button>
                  <button
                    id="score-correct-btn"
                    onClick={() => handleAnswer(true)}
                    className="flex-1 sm:flex-initial py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white border-2 border-[#2D2926] hover:shadow-[2px_2px_0px_0px_rgba(45,41,38,1)] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 cursor-pointer transition-all"
                  >
                    <Check className="h-4 w-4" /> {referenceLanguage === 'hi' ? 'याद है (सही जवाब)' : 'got it (correct)'}
                  </button>
                </div>
              ) : (
                <div className="w-full sm:w-auto flex justify-end">
                  <button
                    id="manual-reveal-btn"
                    onClick={triggerReveal}
                    className="w-full sm:w-auto py-2.5 px-6 bg-[#2D2926] text-white hover:bg-[#3d3834] text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    {referenceLanguage === 'hi' ? 'उत्तर प्रकट करें' : 'Reveal Answer'} <FastForward className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}

            </div>

          </div>

        </div>
      )}

      {/* 4. Speed recall study tips list */}
      <div id="study-tips-card" className="bg-[#5C1D16]/5 border border-[#7B241C]/20 p-5 rounded space-y-2">
        <h5 className="text-xs font-bold text-[#7B241C] uppercase tracking-wider font-mono flex items-center gap-1.5">
          <HelpCircle className="h-4 w-4 text-[#7B241C]" /> {referenceLanguage === 'hi' ? 'त्वरित स्मरण अध्ययन युक्तियाँ' : 'Speed Recall Tips'}
        </h5>
        <ul className="text-xs font-serif italic text-[#2D2926]/90 space-y-1.5 list-disc pl-4 leading-relaxed pr-2">
          {referenceLanguage === 'hi' ? (
            <>
              <li>हैंड्स-फ्री लूप वाले अभ्यास को चलाने के लिए <strong>ऑटो-प्ले</strong> चालू करें। दूरी की पहचान को प्रशिक्षित करने के लिए अपनी मेज से 2 से 3 फीट की दूरी पर बैठें।</li>
              <li>एकल अक्षर प्रशिक्षण के लिए, विशेष ध्वन्यात्मक अनुक्रमों को केंद्रित करने के लिए <em>क-वर्ग</em> या <em>प-वर्ग</em> जैसी <strong>अक्षर उप-श्रेणियों</strong> द्वारा फ़िल्टर करें।</li>
              <li>विवरण प्रकट करने से पहले स्क्रीन पर दिखने वाले अक्षरों को कागज पर लिखने का अभ्यास करें। दोहरा अभ्यास संज्ञानात्मक गति को मजबूत करता है।</li>
            </>
          ) : (
            <>
              <li>Enable <strong>Auto-Play</strong> to run an hands-free looped drill. Settle back 2 to 3 feet from your desk to train distance recognition.</li>
              <li>For single character training, filter by <strong>Syllable Sub-Categories</strong> like <em>k-series</em> or <em>p-series</em> to lock in particular phonics sequences.</li>
              <li>Practice writing the flashed characters on paper before revealing. Dual physical/visual recall strengthens cognitive speed.</li>
            </>
          )}
        </ul>
      </div>

    </div>
  );
};
