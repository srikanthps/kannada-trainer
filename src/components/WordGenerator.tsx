import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Volume2, 
  Sparkles, 
  Shuffle, 
  Eye, 
  EyeOff, 
  BookOpenCheck, 
  SpellCheck,
  Search,
  BookOpen
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { REALISTIC_WORDS_AND_PHRASES, WordItem } from '../data/wordCollection';

export const WordGenerator: React.FC = () => {
  const { referenceLanguage } = useLanguage();
  
  // Current active set of 25 random unique words/phrases
  const [activeWords, setActiveWords] = useState<WordItem[]>([]);
  
  // Search query state
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Filter state ('all', 'words', 'phrases')
  const [filterType, setFilterType] = useState<'all' | 'words' | 'phrases'>('all');

  // Flashcard Reveal Mode
  const [revealMode, setRevealMode] = useState<'always' | 'hidden'>(() => {
    try {
      const saved = localStorage.getItem('kannada_word_reveal_mode');
      return (saved as 'always' | 'hidden') || 'always';
    } catch {
      return 'always';
    }
  });

  // Track individual card reveal states in 'hidden' mode
  const [revealedWords, setRevealedWords] = useState<Record<string, boolean>>({});

  // Reset revealed words when changing reference language, active words, or reveal mode
  useEffect(() => {
    setRevealedWords({});
  }, [referenceLanguage, activeWords, revealMode]);

  // Function to generate 25 random unique entries from the 50 total entries
  const handleShuffleWords = () => {
    const shuffled = [...REALISTIC_WORDS_AND_PHRASES].sort(() => 0.5 - Math.random());
    const selected25 = shuffled.slice(0, 25);
    setActiveWords(selected25);
    setRevealedWords({});
  };

  // Initialize with 25 random unique entries on mount
  useEffect(() => {
    handleShuffleWords();
  }, []);

  // Filter words/phrases based on search input and filter selection
  const filteredWords = useMemo(() => {
    return activeWords.filter(item => {
      // 1. Filter by category
      if (filterType === 'words' && item.complexityTier !== 'Dictionary Word') return false;
      if (filterType === 'phrases' && item.complexityTier !== 'Real-Life Phrase') return false;

      // 2. Filter by search query
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase().trim();
      
      const inKannada = item.kannadaWord.includes(query);
      const inTranslit = item.transliteration.toLowerCase().includes(query) || item.transliterationHi.toLowerCase().includes(query);
      const inMeaning = item.englishMeaning.toLowerCase().includes(query) || item.hindiMeaning.toLowerCase().includes(query);
      const inBreakdown = item.breakdown.toLowerCase().includes(query) || item.breakdownHi.toLowerCase().includes(query);

      return inKannada || inTranslit || inMeaning || inBreakdown;
    });
  }, [activeWords, searchQuery, filterType]);

  // Web Speech synthesis pronunciation launcher
  const speakWord = (word: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'kn-IN'; // Kannada locale code
      utterance.rate = 0.72; // Slightly paced for clear syllable distinction
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleCardClick = (item: WordItem, index: number, wordKey: string, e: React.MouseEvent) => {
    const isRevealed = revealMode === 'always' || !!revealedWords[wordKey];
    if (!isRevealed) {
      e.stopPropagation();
      setRevealedWords(prev => ({ ...prev, [wordKey]: true }));
      speakWord(item.kannadaWord);
    } else {
      speakWord(item.kannadaWord);
    }
  };

  const toggleRevealOnly = (wordKey: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setRevealedWords(prev => ({ ...prev, [wordKey]: !prev[wordKey] }));
  };

  return (
    <div id="word-generator-container" className="space-y-8 max-w-5xl mx-auto">
      
      {/* Intro Header Section */}
      <div id="word-forge-intro" className="bg-white p-6 border-2 border-[#2D2926] space-y-4 shadow-[4px_4px_0px_0px_rgba(45,41,38,1)]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1">
            <h3 className="text-2xl font-serif text-[#2D2926] flex items-center gap-2.5">
              <Sparkles className="h-6 w-6 text-[#7B241C]" />
              {referenceLanguage === 'hi' ? 'कन्नड़ शब्दावली और व्यावहारिक वाक्यांश' : 'Kannada Vocabulary & Everyday Phrases'}
            </h3>
            <p className="text-sm font-serif italic text-[#2D2926]/80 leading-relaxed max-w-3xl">
              {referenceLanguage === 'hi'
                ? 'रोजमर्रा की बातचीत में काम आने वाले व्यावहारिक शब्दों और महत्वपूर्ण वाक्यांशों का अभ्यास करें। हर बार शफ़ल करने पर २५ नवीन वास्तविक और गैर-कृत्रिम प्रविष्टियां प्रदर्शित होंगी।'
                : 'Practice high-utility dictionary words and highly realistic daily conversational sentences. Every shuffle generates a fresh set of 25 genuine, non-artificial entries with zero repetition.'}
            </p>
          </div>
          
          <button
            onClick={handleShuffleWords}
            className="px-4 py-2.5 bg-[#7B241C] text-white border-2 border-[#2D2926] font-mono font-bold text-xs hover:bg-[#661e17] hover:shadow-[2px_2px_0px_0px_rgba(45,41,38,1)] transition-all cursor-pointer flex items-center gap-2 tracking-wider uppercase shrink-0"
          >
            <Shuffle className="h-4 w-4" />
            {referenceLanguage === 'hi' ? 'शफ़ल नए २५ प्रविष्टियां' : 'Shuffle New 25'}
          </button>
        </div>

        {/* Search & Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-3 border-t border-[#2D2926]/10">
          <div className="relative md:col-span-6">
            <Search className="absolute left-3 top-3 h-4 w-4 text-[#2D2926]/40" />
            <input
              type="text"
              placeholder={referenceLanguage === 'hi' ? 'खोजें (e.g. ಮನೆ, Namaskaara, water...)' : 'Search (e.g. ಮನೆ, Namaskaara, water...)'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-[#2D2926] bg-[#FDFBF7] text-xs font-mono text-[#2D2926] focus:outline-none"
            />
          </div>

          <div className="flex bg-white border border-[#2D2926] p-0.5 gap-0.5 select-none md:col-span-6">
            <button
              onClick={() => setFilterType('all')}
              className={`flex-1 py-2 text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
                filterType === 'all'
                  ? 'bg-[#7B241C] text-white'
                  : 'text-[#2D2926]/75 hover:bg-[#F5EFEB]'
              }`}
            >
              {referenceLanguage === 'hi' ? 'सभी (All)' : 'Show All'}
            </button>
            <button
              onClick={() => setFilterType('words')}
              className={`flex-1 py-2 text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
                filterType === 'words'
                  ? 'bg-[#7B241C] text-white'
                  : 'text-[#2D2926]/75 hover:bg-[#F5EFEB]'
              }`}
            >
              📖 {referenceLanguage === 'hi' ? 'शब्द (Words)' : 'Dictionary'}
            </button>
            <button
              onClick={() => setFilterType('phrases')}
              className={`flex-1 py-2 text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
                filterType === 'phrases'
                  ? 'bg-[#7B241C] text-white'
                  : 'text-[#2D2926]/75 hover:bg-[#F5EFEB]'
              }`}
            >
              💬 {referenceLanguage === 'hi' ? 'वाक्यांश (Phrases)' : 'Conversational'}
            </button>
          </div>
        </div>
      </div>

      {/* Flashcard Reveal Mode Panel */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white border-2 border-[#2D2926] p-4 shadow-[2px_2px_0px_0px_rgba(45,41,38,1)]">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-[#7B241C]" />
          <span className="text-xs font-mono font-bold uppercase text-[#2D2926]">
            {referenceLanguage === 'hi' ? 'प्रकट नियंत्रण (Study Cards Mode)' : 'Card Reveal Controls'}
          </span>
        </div>
        
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              setRevealMode('always');
              try { localStorage.setItem('kannada_word_reveal_mode', 'always'); } catch {}
            }}
            className={`px-3 py-1.5 font-mono text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
              revealMode === 'always'
                ? 'bg-[#7B241C] text-white border-[#2D2926]'
                : 'bg-white text-[#2D2926]/60 border-[#2D2926]/20 hover:text-[#2D2926]'
            }`}
          >
            👁️ {referenceLanguage === 'hi' ? 'हमेशा दिखाएं' : 'Show Always'}
          </button>
          <button
            onClick={() => {
              setRevealMode('hidden');
              try { localStorage.setItem('kannada_word_reveal_mode', 'hidden'); } catch {}
              setRevealedWords({});
            }}
            className={`px-3 py-1.5 font-mono text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
              revealMode === 'hidden'
                ? 'bg-[#7B241C] text-white border-[#2D2926]'
                : 'bg-white text-[#2D2926]/60 border-[#2D2926]/20 hover:text-[#2D2926]'
            }`}
          >
            🙈 {referenceLanguage === 'hi' ? 'छिपाएं (क्लिक कर खोलें)' : 'Hide (Reveal on Click)'}
          </button>
        </div>

        {revealMode === 'hidden' && (
          <div className="flex gap-2">
            <button
              onClick={() => {
                const newRevealed: Record<string, boolean> = {};
                filteredWords.forEach((_, idx) => {
                  newRevealed[`word-${idx}`] = true;
                });
                setRevealedWords(newRevealed);
              }}
              className="px-2.5 py-1 text-[10px] font-mono font-bold text-[#7B241C] border border-[#7B241C]/30 bg-[#7B241C]/5 hover:bg-[#7B241C]/10 transition-colors cursor-pointer"
            >
              🔓 {referenceLanguage === 'hi' ? 'सभी प्रकट करें' : 'Reveal All'}
            </button>
            <button
              onClick={() => setRevealedWords({})}
              className="px-2.5 py-1 text-[10px] font-mono font-bold text-[#2D2926]/60 border border-[#2D2926]/20 hover:bg-[#2D2926]/5 transition-colors cursor-pointer"
            >
              🔒 {referenceLanguage === 'hi' ? 'सभी छुपाएं' : 'Hide All'}
            </button>
          </div>
        )}
      </div>

      {/* Main Study Cards Grid */}
      {filteredWords.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredWords.map((item, index) => {
            const wordKey = `word-${index}`;
            const isRevealed = revealMode === 'always' || !!revealedWords[wordKey];

            return (
              <motion.div
                key={`${item.kannadaWord}-${index}`}
                onClick={(e) => handleCardClick(item, index, wordKey, e)}
                whileHover={{ scale: 1.01, y: -2 }}
                className="bg-white border-2 border-[#2D2926] p-5 cursor-pointer hover:border-[#7B241C] hover:shadow-[4px_4px_0px_0px_rgba(123,36,28,0.1)] transition-all flex flex-col justify-between group relative shadow-xs"
              >
                {/* Header Elements */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span className={`text-[9px] font-mono border px-2 py-0.5 font-bold ${
                    item.complexityTier === 'Dictionary Word'
                      ? 'bg-amber-50 text-amber-800 border-amber-200'
                      : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                  }`}>
                    {item.complexityTier === 'Dictionary Word' 
                      ? (referenceLanguage === 'hi' ? 'शब्द' : 'Dictionary')
                      : (referenceLanguage === 'hi' ? 'वाक्यांश' : 'Conversational')
                    }
                  </span>
                  
                  {revealMode === 'hidden' && (
                    <button
                      onClick={(e) => toggleRevealOnly(wordKey, e)}
                      className="p-1 hover:bg-[#2D2926]/5 rounded text-[#2D2926]/60 hover:text-[#7B241C] transition-colors"
                    >
                      {isRevealed ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  )}
                  <Volume2 className="h-4 w-4 text-[#2D2926]/40 group-hover:text-[#7B241C] transition-colors" />
                </div>

                {/* Content Elements */}
                <div className="space-y-4">
                  <div>
                    <h5 className="text-3xl font-serif font-bold text-[#2D2926] leading-snug group-hover:text-[#7B241C] transition-colors select-all">
                      {item.kannadaWord}
                    </h5>
                  </div>

                  {isRevealed ? (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4 pt-2"
                    >
                      {/* Transliteration */}
                      <div className="text-xs font-mono font-bold text-[#7B241C]">
                        [ {referenceLanguage === 'hi' ? item.transliterationHi : item.transliteration} ]
                      </div>

                      {/* Meanings */}
                      <div className="space-y-1">
                        <div className="text-[9px] uppercase tracking-widest text-[#2D2926]/40 font-mono font-bold">
                          {referenceLanguage === 'hi' ? 'अनुवाद (Meaning)' : 'Meaning / Translation'}
                        </div>
                        <p className="text-base font-serif italic text-[#2D2926] leading-snug">
                          {referenceLanguage === 'hi' ? item.hindiMeaning : item.englishMeaning}
                        </p>
                      </div>

                      {/* Linguistic breakdowns */}
                      <div className="pt-3 border-t border-[#2D2926]/10 space-y-1">
                        <div className="text-[9px] uppercase tracking-wider text-[#2D2926]/40 font-mono font-semibold flex items-center gap-1">
                          <SpellCheck className="h-3 w-3" /> 
                          {referenceLanguage === 'hi' ? 'व्याकरण विश्लेषण' : 'Linguistic Commentary'}
                        </div>
                        <p className="text-xs font-serif text-[#2D2926]/75 leading-relaxed italic">
                          {referenceLanguage === 'hi' ? item.breakdownHi : item.breakdown}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="pt-4 border-t border-dashed border-[#2D2926]/20 flex flex-col items-center justify-center py-6 bg-[#FAF6F0]/50 rounded-lg group-hover:bg-[#FAF6F0] transition-colors">
                      <Eye className="h-6 w-6 text-[#7B241C]/50 mb-2 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-mono font-bold text-[#7B241C]/80 group-hover:text-[#7B241C] transition-colors">
                        {referenceLanguage === 'hi' ? '👁️ देखने के लिए क्लिक करें' : '👁️ Click to Reveal Details'}
                      </span>
                      <span className="text-[10px] text-[#2D2926]/40 mt-1">
                        {referenceLanguage === 'hi' ? 'या सुनने के लिए वर्ड कार्ड पर क्लिक करें' : 'or click card to listen and reveal'}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="py-16 text-center bg-white border-2 border-[#2D2926] rounded-xl shadow-[4px_4px_0px_0px_rgba(45,41,38,1)]">
          <p className="text-sm font-serif italic text-[#2D2926]/60">
            {referenceLanguage === 'hi' 
              ? 'खोज मानदंडों से मेल खाने वाली कोई प्रविष्टि नहीं मिली।' 
              : 'No matching words or phrases found in this set.'}
          </p>
        </div>
      )}

      {/* Speech Feedback Footer Indicator */}
      <div className="p-4 bg-white border border-[#2D2926]/10 text-center rounded-xl text-xs text-[#2D2926]/50 font-serif italic flex items-center justify-center gap-2">
        <BookOpenCheck className="h-4 w-4 text-emerald-700/60" />
        {referenceLanguage === 'hi' 
          ? 'ऑडियो सुनने के लिए किसी भी शब्द कार्ड पर क्लिक करें। वेब स्पीच सिंथेसाइज़र (kn-IN) सक्रिय है।' 
          : 'Click any card to activate live native Kannada pronunciation via Web Speech synthesis (kn-IN).'}
      </div>
    </div>
  );
};
