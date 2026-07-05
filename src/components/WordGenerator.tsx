import React, { useState, useEffect, useMemo } from 'react';
import { KANNADA_ALPHABETS } from '../data/alphabets';
import { motion } from 'motion/react';
import { 
  Volume2, 
  Sparkles, 
  RefreshCw, 
  BookOpen, 
  Globe, 
  SpellCheck, 
  CheckCircle2, 
  Shuffle, 
  ChevronLeft, 
  ChevronRight, 
  Award,
  Compass,
  ArrowRight,
  BookOpenCheck,
  Eye,
  EyeOff
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getWordAt, TOTAL_FORGE_WORDS, WordItem } from '../data/wordCollection';

export const WordGenerator: React.FC = () => {
  const { referenceLanguage } = useLanguage();
  
  // Tabs/modes: 'progressive' (sequential 10,000), 'random' (100 random), 'filter' (sound/category search)
  const [activeTab, setActiveTab] = useState<'progressive' | 'random' | 'filter'>('progressive');

  // Sequential Progressive State
  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    const saved = localStorage.getItem('kannada_word_forge_index');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [jumpInput, setJumpInput] = useState<string>('');

  // Random Mode State
  const [randomWords, setRandomWords] = useState<WordItem[]>([]);
  
  // Filter Mode State
  const [focusChar, setFocusChar] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [filteredWords, setFilteredWords] = useState<WordItem[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  // Word Hide/Reveal States
  const [revealMode, setRevealMode] = useState<'always' | 'hidden'>(() => {
    const saved = localStorage.getItem('kannada_word_reveal_mode');
    return (saved as 'always' | 'hidden') || 'always';
  });
  const [revealedWords, setRevealedWords] = useState<Record<string, boolean>>({});

  // Reset revealed words when changing tabs, progressive index, or reference language
  useEffect(() => {
    setRevealedWords({});
  }, [currentIndex, activeTab, referenceLanguage]);

  // Load Progressive Words
  const progressiveWords = useMemo(() => {
    const list: WordItem[] = [];
    for (let i = 0; i < 10; i++) {
      const idx = currentIndex + i;
      if (idx < TOTAL_FORGE_WORDS) {
        list.push(getWordAt(idx, referenceLanguage === 'hi' ? 'hi' : 'en'));
      }
    }
    return list;
  }, [currentIndex, referenceLanguage]);

  // Persist index changes
  useEffect(() => {
    localStorage.setItem('kannada_word_forge_index', currentIndex.toString());
  }, [currentIndex]);

  // Generate 100 random words on entering random mode
  const handleGenerateRandom100 = () => {
    const wordsList: WordItem[] = [];
    const usedIndices = new Set<number>();
    
    while (wordsList.length < 100) {
      const randIdx = Math.floor(Math.random() * TOTAL_FORGE_WORDS);
      if (!usedIndices.has(randIdx)) {
        usedIndices.add(randIdx);
        wordsList.push(getWordAt(randIdx, referenceLanguage === 'hi' ? 'hi' : 'en'));
      }
    }
    setRandomWords(wordsList);
  };

  useEffect(() => {
    if (activeTab === 'random' && randomWords.length === 0) {
      handleGenerateRandom100();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, referenceLanguage]);

  // Filter Search handler
  const handleFilterSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      const results: WordItem[] = [];
      const lowerChar = focusChar.trim();
      const refLang = referenceLanguage === 'hi' ? 'hi' : 'en';

      // Scan our massive database
      for (let i = 0; i < TOTAL_FORGE_WORDS; i++) {
        const item = getWordAt(i, refLang);
        let matches = false;

        if (lowerChar) {
          if (item.kannadaWord.includes(lowerChar) || item.transliteration.toLowerCase().includes(lowerChar.toLowerCase())) {
            matches = true;
          }
        } else if (category) {
          // Check categories based on index ranges (nouns, compounds, verbs)
          if (category === 'vowel' && i < 1000) {
            matches = true;
          } else if (category === 'consonant' && i >= 9100) {
            matches = true;
          } else if (category === 'yogavaaha' && i >= 1000 && i < 9100) {
            matches = true; // Use compounds as modifiers study
          }
        }

        if (matches) {
          results.push(item);
          if (results.length >= 12) break; // Limit to a beautiful study batch of 12
        }
      }

      // If no local results, default to first 12 words of the category
      if (results.length === 0) {
        for (let j = 0; j < 12; j++) {
          results.push(getWordAt(j * 10, refLang));
        }
      }

      setFilteredWords(results);
      setIsSearching(false);
    }, 400);
  };

  // Web Speech synthesis pronunciation launcher
  const speakWord = (word: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'kn-IN'; // Kannada locale code
      utterance.rate = 0.72; // slightly paced for clear syllable distinction
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleNext10 = () => {
    if (currentIndex + 10 < TOTAL_FORGE_WORDS) {
      setCurrentIndex((prev) => prev + 10);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const handlePrev10 = () => {
    if (currentIndex - 10 >= 0) {
      setCurrentIndex((prev) => prev - 10);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const handleJumpToLevel = (levelInput: number) => {
    const calculatedIndex = Math.max(0, Math.min(TOTAL_FORGE_WORDS - 10, (levelInput - 1) * 100));
    setCurrentIndex(calculatedIndex);
    setJumpInput('');
  };

  const categories = useMemo(() => {
    if (referenceLanguage === 'hi') {
      return [
        { value: '', label: 'सभी श्रेणियां' },
        { value: 'vowel', label: 'बुनियादी संज्ञा (Nouns)' },
        { value: 'yogavaaha', label: 'विशेषण-संज्ञा योग (Compounds)' },
        { value: 'consonant', label: 'क्रिया काल रूपांतर (Verbs)' },
      ];
    }
    return [
      { value: '', label: 'All Categories' },
      { value: 'vowel', label: 'Basic Nouns & Cases' },
      { value: 'yogavaaha', label: 'Adjective-Noun Compounds' },
      { value: 'consonant', label: 'Verb Conjugations' },
    ];
  }, [referenceLanguage]);

  const renderRevealControls = () => (
    <div className="flex flex-wrap items-center justify-between gap-4 bg-white border-2 border-[#2D2926] p-4 shadow-[2px_2px_0px_0px_rgba(45,41,38,1)]">
      <div className="flex items-center gap-2">
        <Eye className="h-5 w-5 text-[#7B241C]" />
        <span className="text-xs font-mono font-bold uppercase text-[#2D2926]">
          {referenceLanguage === 'hi' ? 'उत्तर प्रदर्शन नियंत्रण (Flashcard Mode)' : 'Flashcard Controls'}
        </span>
      </div>
      
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => {
            setRevealMode('always');
            localStorage.setItem('kannada_word_reveal_mode', 'always');
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
            localStorage.setItem('kannada_word_reveal_mode', 'hidden');
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
              const newRevealed = { ...revealedWords };
              if (activeTab === 'progressive') {
                progressiveWords.forEach((_, idx) => {
                  newRevealed[`progressive-${currentIndex + idx}`] = true;
                });
              } else if (activeTab === 'random') {
                randomWords.forEach((_, idx) => {
                  newRevealed[`random-${idx}`] = true;
                });
              } else if (activeTab === 'filter') {
                filteredWords.forEach((_, idx) => {
                  newRevealed[`filtered-${idx}`] = true;
                });
              }
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
  );

  const progressPercent = Math.round((currentIndex / TOTAL_FORGE_WORDS) * 100);

  return (
    <div id="word-generator-container" className="space-y-8 max-w-5xl mx-auto">
      
      {/* Intro Header Section */}
      <div id="word-forge-intro" className="bg-white p-6 border-2 border-[#2D2926] space-y-4 shadow-[4px_4px_0px_0px_rgba(45,41,38,1)]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1">
            <h3 className="text-2xl font-serif text-[#2D2926] flex items-center gap-2.5">
              <Sparkles className="h-6 w-6 text-[#7B241C]" />
              {referenceLanguage === 'hi' ? 'शब्दावली महा-फोर्ज (10,000 शब्द)' : 'Massive Vocabulary Forge (10,000 Words)'}
            </h3>
            <p className="text-sm font-serif italic text-[#2D2926]/80 leading-relaxed max-w-3xl">
              {referenceLanguage === 'hi'
                ? 'कन्नड़ भाषा के १०,००० सुनियोजित शब्दों का अभ्यास करें। इन्हें बुनियादी संज्ञाओं से लेकर जटिल समासों और विभिन्न क्रिया रूपों के क्रमानुसार वर्गीकृत किया गया है।'
                : 'Explore exactly 10,000 curated Kannada words organized by progressive grammatical complexity. Practice them sequentially to master case endings, compound words, and full verb conjugations.'}
            </p>
          </div>
          <div className="bg-[#7B241C]/5 border border-[#7B241C]/30 px-4 py-2 text-center rounded-lg min-w-[150px] shrink-0">
            <span className="text-[10px] font-mono text-[#7B241C] uppercase block tracking-wider font-bold">
              {referenceLanguage === 'hi' ? 'कुल संचित शब्द' : 'Total Word Corpus'}
            </span>
            <span className="text-2xl font-bold font-mono text-[#7Banned241C] text-[#7B241C]">10,000</span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-[#2D2926]/20 pt-2 gap-2">
          <button
            onClick={() => setActiveTab('progressive')}
            className={`px-4 py-2.5 font-serif font-bold text-sm border-t-2 border-x-2 transition-all ${
              activeTab === 'progressive'
                ? 'border-[#2D2926] bg-[#FAF6F0] text-[#7B241C] -mb-[2px] rounded-t-lg shadow-sm'
                : 'border-transparent text-[#2D2926]/60 hover:text-[#2D2926]'
            }`}
          >
            📚 {referenceLanguage === 'hi' ? 'क्रमशः अभ्यास (Progressive)' : 'Progressive Study'}
          </button>
          <button
            onClick={() => setActiveTab('random')}
            className={`px-4 py-2.5 font-serif font-bold text-sm border-t-2 border-x-2 transition-all ${
              activeTab === 'random'
                ? 'border-[#2D2926] bg-[#FAF6F0] text-[#7B241C] -mb-[2px] rounded-t-lg shadow-sm'
                : 'border-transparent text-[#2D2926]/60 hover:text-[#2D2926]'
            }`}
          >
            🎲 {referenceLanguage === 'hi' ? '100 रैंडम शब्द (Test Mode)' : '100 Random Words'}
          </button>
          <button
            onClick={() => setActiveTab('filter')}
            className={`px-4 py-2.5 font-serif font-bold text-sm border-t-2 border-x-2 transition-all ${
              activeTab === 'filter'
                ? 'border-[#2D2926] bg-[#FAF6F0] text-[#7B241C] -mb-[2px] rounded-t-lg shadow-sm'
                : 'border-transparent text-[#2D2926]/60 hover:text-[#2D2926]'
            }`}
          >
            🔍 {referenceLanguage === 'hi' ? 'ध्वनि/श्रेणी खोज' : 'Sound & Category Filter'}
          </button>
        </div>
      </div>

      {/* Progressive sequential Practice Mode */}
      {activeTab === 'progressive' && (
        <div id="progressive-practice-module" className="space-y-6">
          {/* Progress Banner */}
          <div className="bg-[#FAF6F0] border-2 border-[#2D2926] p-5 shadow-[2px_2px_0px_0px_rgba(45,41,38,1)] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-1.5 flex-1 w-full">
              <div className="flex justify-between text-xs font-mono font-bold text-[#2D2926]/70 uppercase">
                <span>{referenceLanguage === 'hi' ? `वर्तमान अभ्यास सूचकांक: ${currentIndex} से ${currentIndex + 9}` : `Current Index Range: ${currentIndex} to ${currentIndex + 9}`}</span>
                <span>{progressPercent}% {referenceLanguage === 'hi' ? 'पूर्ण' : 'Completed'}</span>
              </div>
              <div className="w-full bg-[#2D2926]/10 h-3 border border-[#2D2926]/20 rounded-full overflow-hidden">
                <div 
                  className="bg-[#7B241C] h-full rounded-full transition-all duration-300" 
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="text-[11px] text-[#2D2926]/60 font-serif italic">
                {referenceLanguage === 'hi' 
                  ? 'आपकी वर्तमान प्रगति स्वचालित रूप से सहेजी गई है। जब भी आप ऐप खोलेंगे, आप यहीं से जारी रख सकते हैं।'
                  : 'Your learning progress is saved automatically. Feel free to close the tab and return to this exact word later!'}
              </p>
            </div>

            {/* Direct Jump Selector */}
            <div className="flex gap-2 items-center w-full md:w-auto shrink-0 pt-2 md:pt-0">
              <div className="space-y-1">
                <label className="text-[9px] font-mono font-bold uppercase text-[#2D2926]/60 block">
                  {referenceLanguage === 'hi' ? 'स्तर पर जाएं (1 - 100)' : 'Jump to Level (1 - 100)'}
                </label>
                <div className="flex gap-1">
                  <input
                    type="number"
                    min="1"
                    max="100"
                    placeholder="e.g. 15"
                    value={jumpInput}
                    onChange={(e) => setJumpInput(e.target.value)}
                    className="w-20 p-2 border border-[#2D2926] bg-[#FDFBF7] text-[#2D2926] font-mono text-xs focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      const val = parseInt(jumpInput, 10);
                      if (!isNaN(val) && val >= 1 && val <= 100) {
                        handleJumpToLevel(val);
                      }
                    }}
                    className="px-3 bg-[#7B241C] text-white border border-[#2D2926] text-xs font-mono font-bold hover:bg-[#661e17]"
                  >
                    {referenceLanguage === 'hi' ? 'जाएं' : 'Jump'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Flashcard Controls */}
          {renderRevealControls()}

          {/* Words Study List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {progressiveWords.map((item, index) => {
              const globalIdx = currentIndex + index;
              const wordKey = `progressive-${globalIdx}`;
              const isRevealed = revealMode === 'always' || !!revealedWords[wordKey];

              const handleCardClick = (e: React.MouseEvent) => {
                if (!isRevealed) {
                  e.stopPropagation();
                  setRevealedWords(prev => ({ ...prev, [wordKey]: true }));
                  speakWord(item.kannadaWord);
                } else {
                  speakWord(item.kannadaWord);
                }
              };

              const toggleRevealOnly = (e: React.MouseEvent) => {
                e.stopPropagation();
                setRevealedWords(prev => ({ ...prev, [wordKey]: !prev[wordKey] }));
              };

              return (
                <motion.div
                  key={globalIdx}
                  onClick={handleCardClick}
                  whileHover={{ scale: 1.01, y: -2 }}
                  className="bg-white border-2 border-[#2D2926] p-5 cursor-pointer hover:border-[#7B241C] hover:shadow-[4px_4px_0px_0px_rgba(123,36,28,0.1)] transition-all flex flex-col justify-between group relative shadow-xs"
                >
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className="text-[9px] font-mono bg-[#7B241C]/5 text-[#7B241C] border border-[#7B241C]/20 px-2 py-0.5 font-bold">
                      #{globalIdx + 1}
                    </span>
                    {revealMode === 'hidden' && (
                      <button
                        onClick={toggleRevealOnly}
                        className="p-1 hover:bg-[#2D2926]/5 rounded text-[#2D2926]/60 hover:text-[#7B241C] transition-colors"
                        title={isRevealed ? (referenceLanguage === 'hi' ? 'छिपाएं' : 'Hide') : (referenceLanguage === 'hi' ? 'दिखाएं' : 'Reveal')}
                      >
                        {isRevealed ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    )}
                    <Volume2 className="h-4 w-4 text-[#2D2926]/40 group-hover:text-[#7B241C] transition-colors" />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[9px] font-mono tracking-widest text-emerald-700 font-bold uppercase block mb-1">
                        {item.complexityTier}
                      </span>
                      <h5 className="text-4xl font-kannada font-bold text-[#2D2926] leading-none group-hover:text-[#7B241C] transition-colors select-all">
                        {item.kannadaWord}
                      </h5>
                    </div>

                    {isRevealed ? (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                      >
                        <div className="text-xs font-mono font-bold text-[#7B241C] mt-2">
                          [ {item.transliteration} ]
                        </div>

                        <div className="space-y-1">
                          <div className="text-[9px] uppercase tracking-widest text-[#2D2926]/40 font-mono font-bold">
                            {referenceLanguage === 'hi' ? 'अर्थ (Meaning)' : 'English Translation'}
                          </div>
                          <p className="text-base font-serif italic text-[#2D2926] leading-snug">
                            {referenceLanguage === 'hi' ? item.hindiMeaning : item.englishMeaning}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-[#2D2926]/10 space-y-1">
                          <div className="text-[9px] uppercase tracking-wider text-[#2D2926]/40 font-mono font-semibold flex items-center gap-1">
                            <SpellCheck className="h-3 w-3" /> {referenceLanguage === 'hi' ? 'व्याकरण विश्लेषण' : 'Morphological Analysis'}
                          </div>
                          <p className="text-xs font-serif text-[#2D2926]/75 leading-relaxed italic">
                            {item.breakdown}
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

          {/* Navigation Controls */}
          <div className="flex justify-between items-center pt-4 border-t border-[#2D2926]/10">
            <button
              onClick={handlePrev10}
              disabled={currentIndex === 0}
              className="px-5 py-3 border-2 border-[#2D2926] bg-white text-[#2D2926] hover:bg-[#FAF6F0] disabled:opacity-40 font-serif font-bold text-sm flex items-center gap-2 cursor-pointer shadow-xs disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4" />
              {referenceLanguage === 'hi' ? 'पिछला 10 शब्द' : 'Previous 10 Words'}
            </button>

            <div className="text-center font-mono text-xs font-bold text-[#2D2926]/60">
              {referenceLanguage === 'hi' ? `स्तर: ${Math.floor(currentIndex / 100) + 1} / 100` : `Level: ${Math.floor(currentIndex / 100) + 1} / 100`}
            </div>

            <button
              onClick={handleNext10}
              disabled={currentIndex + 10 >= TOTAL_FORGE_WORDS}
              className="px-5 py-3 border-2 border-[#2D2926] bg-[#7B241C] text-white hover:bg-[#661e17] disabled:opacity-40 font-serif font-bold text-sm flex items-center gap-2 cursor-pointer shadow-xs disabled:cursor-not-allowed"
            >
              {referenceLanguage === 'hi' ? 'अगला 10 शब्द' : 'Next 10 Words'}
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* 100 Random Words test module */}
      {activeTab === 'random' && (
        <div id="random-practice-module" className="space-y-6">
          <div className="bg-[#FAF6F0] border-2 border-[#2D2926] p-5 shadow-[2px_2px_0px_0px_rgba(45,41,38,1)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-serif font-bold text-[#2D2926]">
                🎲 {referenceLanguage === 'hi' ? 'रैंडम आत्म-मूल्यांकन (100 शब्द)' : 'Random Self-Assessment Study (100 Words)'}
              </h4>
              <p className="text-xs text-[#2D2926]/70 leading-relaxed max-w-xl">
                {referenceLanguage === 'hi'
                  ? '१०,००० शब्दों के संग्रह में से तत्काल १०० यादृच्छिक शब्द प्राप्त किए गए हैं। स्व-परीक्षण के लिए क्लिक करके अपनी समझ जाँचे।'
                  : 'Instantly selected 100 random words from across our entire progressive collection. Practice pronunciations and self-test your retention.'}
              </p>
            </div>
            <button
              onClick={handleGenerateRandom100}
              className="px-4 py-2.5 bg-[#7B241C] text-white border-2 border-[#2D2926] font-mono font-bold text-xs hover:bg-[#661e17] cursor-pointer flex items-center gap-2 tracking-wider uppercase shrink-0"
            >
              <Shuffle className="h-4 w-4" />
              {referenceLanguage === 'hi' ? 'नए 100 शब्द' : 'Shuffle New 100'}
            </button>
          </div>

          {/* Flashcard Controls */}
          {renderRevealControls()}

          {/* Random Words Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {randomWords.map((item, index) => {
              const wordKey = `random-${index}`;
              const isRevealed = revealMode === 'always' || !!revealedWords[wordKey];

              const handleCardClick = (e: React.MouseEvent) => {
                if (!isRevealed) {
                  e.stopPropagation();
                  setRevealedWords(prev => ({ ...prev, [wordKey]: true }));
                  speakWord(item.kannadaWord);
                } else {
                  speakWord(item.kannadaWord);
                }
              };

              const toggleRevealOnly = (e: React.MouseEvent) => {
                e.stopPropagation();
                setRevealedWords(prev => ({ ...prev, [wordKey]: !prev[wordKey] }));
              };

              return (
                <motion.div
                  key={index}
                  onClick={handleCardClick}
                  whileHover={{ scale: 1.01, y: -1 }}
                  className="bg-white border-2 border-[#2D2926] p-4 cursor-pointer hover:border-[#7B241C] hover:shadow-[3px_3px_0px_0px_rgba(123,36,28,0.05)] transition-all flex flex-col justify-between group relative"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[9px] font-mono bg-[#7B241C]/5 text-[#7B241C] px-1.5 py-0.5 border border-[#7B241C]/10 rounded font-bold">
                      #{index + 1}
                    </span>
                    <div className="flex items-center gap-2">
                      {revealMode === 'hidden' && (
                        <button
                          onClick={toggleRevealOnly}
                          className="p-1 hover:bg-[#2D2926]/5 rounded text-[#2D2926]/60 hover:text-[#7B241C] transition-colors"
                          title={isRevealed ? (referenceLanguage === 'hi' ? 'छिपाएं' : 'Hide') : (referenceLanguage === 'hi' ? 'दिखाएं' : 'Reveal')}
                        >
                          {isRevealed ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                        </button>
                      )}
                      <Volume2 className="h-4 w-4 text-[#2D2926]/30 group-hover:text-[#7B241C] transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h5 className="text-2xl font-kannada font-bold text-[#2D2926] group-hover:text-[#7B241C] transition-colors leading-tight">
                        {item.kannadaWord}
                      </h5>
                    </div>

                    {isRevealed ? (
                      <motion.div
                        initial={{ opacity: 0, y: 3 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-2"
                      >
                        <div className="text-[11px] font-mono text-[#7B241C] mt-1 font-semibold">
                          [ {item.transliteration} ]
                        </div>

                        <div className="pt-2 border-t border-dashed border-[#2D2926]/10 space-y-1">
                          <span className="text-[8px] uppercase font-mono text-[#2D2926]/40 font-bold block">
                            {referenceLanguage === 'hi' ? 'अनुवाद (Meaning)' : 'Meaning'}
                          </span>
                          <p className="text-sm font-serif italic text-[#2D2926]/90 font-medium leading-snug">
                            {referenceLanguage === 'hi' ? item.hindiMeaning : item.englishMeaning}
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="pt-3 border-t border-dashed border-[#2D2926]/20 flex flex-col items-center justify-center py-4 bg-[#FAF6F0]/50 rounded group-hover:bg-[#FAF6F0] transition-colors">
                        <Eye className="h-4 w-4 text-[#7B241C]/50 mb-1" />
                        <span className="text-[10px] font-mono font-bold text-[#7B241C]/85">
                          {referenceLanguage === 'hi' ? 'प्रकट करें' : 'Click to Reveal'}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* Filter and query study mode */}
      {activeTab === 'filter' && (
        <div id="filter-practice-module" className="space-y-6">
          <div className="bg-white p-6 border-2 border-[#2D2926] space-y-4 shadow-[3px_3px_0px_0px_rgba(45,41,38,1)]">
            <h4 className="text-sm font-serif font-bold text-[#2D2926] uppercase tracking-wider">
              {referenceLanguage === 'hi' ? 'ध्वनि या व्याकरण समूह द्वारा खोजें' : 'Query by Sound Group or Grammatical Type'}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Filter Sound Input */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase font-bold text-[#2D2926]/60 block">
                  {referenceLanguage === 'hi' ? '१. विशिष्ट कन्नड़ अक्षर/अंग्रेजी लिप्यंतरण' : '1. Target Character / Translit'}
                </label>
                <input
                  type="text"
                  placeholder="e.g. ಮ, raste, mane..."
                  value={focusChar}
                  onChange={(e) => {
                    setFocusChar(e.target.value);
                    if (e.target.value) setCategory('');
                  }}
                  className="w-full p-2.5 border-2 border-[#2D2926] bg-[#FDFBF7] text-sm text-[#2D2926] focus:outline-none"
                />
              </div>

              {/* Filter Category Selector */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase font-bold text-[#2D2926]/60 block">
                  {referenceLanguage === 'hi' ? '२. व्याकरण संरचनात्मक श्रेणी' : '2. Grammatical Class'}
                </label>
                <select
                  value={category}
                  disabled={!!focusChar}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2.5 border-2 border-[#2D2926] bg-[#FDFBF7] text-sm text-[#2D2926] focus:outline-none disabled:opacity-40"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Action Button */}
              <div className="flex items-end">
                <button
                  onClick={handleFilterSearch}
                  disabled={isSearching}
                  className="w-full py-3 bg-[#7B241C] text-white border-2 border-[#2D2926] font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#661e17] transition-all disabled:opacity-50"
                >
                  {isSearching ? (
                    <RefreshCw className="h-4 w-4 animate-spin mx-auto" />
                  ) : (
                    referenceLanguage === 'hi' ? 'खोजें (Search)' : 'Query Database'
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Filtered Words List */}
          {filteredWords.length > 0 ? (
            <div className="space-y-4">
              {renderRevealControls()}
              <h4 className="text-xs font-mono font-bold uppercase text-[#2D2926]/60">
                {referenceLanguage === 'hi' ? 'खोज परिणाम (अधिकतम 12 शब्द):' : 'Search results matched (Max 12 displayed):'}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredWords.map((item, index) => {
                  const wordKey = `filtered-${index}`;
                  const isRevealed = revealMode === 'always' || !!revealedWords[wordKey];

                  const handleCardClick = (e: React.MouseEvent) => {
                    if (!isRevealed) {
                      e.stopPropagation();
                      setRevealedWords(prev => ({ ...prev, [wordKey]: true }));
                      speakWord(item.kannadaWord);
                    } else {
                      speakWord(item.kannadaWord);
                    }
                  };

                  const toggleRevealOnly = (e: React.MouseEvent) => {
                    e.stopPropagation();
                    setRevealedWords(prev => ({ ...prev, [wordKey]: !prev[wordKey] }));
                  };

                  return (
                    <motion.div
                      key={index}
                      onClick={handleCardClick}
                      whileHover={{ scale: 1.01, y: -1 }}
                      className="bg-white border-2 border-[#2D2926] p-4 cursor-pointer hover:border-[#7B241C] hover:shadow-[3px_3px_0px_0px_rgba(123,36,28,0.05)] transition-all flex flex-col justify-between group relative"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[8px] font-mono bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold uppercase">
                          {item.complexityTier.split(':')[0]}
                        </span>
                        <div className="flex items-center gap-2">
                          {revealMode === 'hidden' && (
                            <button
                              onClick={toggleRevealOnly}
                              className="p-1 hover:bg-[#2D2926]/5 rounded text-[#2D2926]/60 hover:text-[#7B241C] transition-colors"
                              title={isRevealed ? (referenceLanguage === 'hi' ? 'छिपाएं' : 'Hide') : (referenceLanguage === 'hi' ? 'दिखाएं' : 'Reveal')}
                            >
                              {isRevealed ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                            </button>
                          )}
                          <Volume2 className="h-4 w-4 text-[#2D2926]/30 group-hover:text-[#7B241C] transition-colors" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h5 className="text-2xl font-kannada font-bold text-[#2D2926] group-hover:text-[#7B241C] transition-colors leading-tight">
                            {item.kannadaWord}
                          </h5>
                        </div>

                        {isRevealed ? (
                          <motion.div
                            initial={{ opacity: 0, y: 3 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-2"
                          >
                            <div className="text-[11px] font-mono text-[#7B241C] mt-1 font-semibold">
                              [ {item.transliteration} ]
                            </div>

                            <div className="pt-2 border-t border-dashed border-[#2D2926]/10 space-y-1">
                              <span className="text-[8px] uppercase font-mono text-[#2D2926]/40 font-bold block">
                                {referenceLanguage === 'hi' ? 'अर्थ (Meaning)' : 'Meaning'}
                              </span>
                              <p className="text-sm font-serif italic text-[#2D2926]/90 font-medium leading-snug">
                                {referenceLanguage === 'hi' ? item.hindiMeaning : item.englishMeaning}
                              </p>
                            </div>
                          </motion.div>
                        ) : (
                          <div className="pt-3 border-t border-dashed border-[#2D2926]/20 flex flex-col items-center justify-center py-4 bg-[#FAF6F0]/50 rounded group-hover:bg-[#FAF6F0] transition-colors">
                            <Eye className="h-4 w-4 text-[#7B241C]/50 mb-1" />
                            <span className="text-[10px] font-mono font-bold text-[#7B241C]/85">
                              {referenceLanguage === 'hi' ? 'प्रकट करें' : 'Click to Reveal'}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="py-12 text-center bg-[#FAF6F0] border-2 border-dashed border-[#2D2926]/10 rounded-2xl">
              <Compass className="h-8 w-8 mx-auto text-[#2D2926]/30 mb-2" />
              <p className="text-xs font-mono text-[#2D2926]/50">
                {referenceLanguage === 'hi' ? 'खोज प्रारंभ करने के लिए मानदंड दर्ज करें।' : 'Specify any query parameters above to scan our database.'}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Speech Feedback Footer Indicator */}
      <div className="p-4 bg-white border border-[#2D2926]/10 text-center rounded-xl text-xs text-[#2D2926]/50 font-serif italic flex items-center justify-center gap-2">
        <BookOpenCheck className="h-4 w-4 text-emerald-700/60" />
        {referenceLanguage === 'hi' 
          ? 'ऑडियो सुनने के लिए किसी भी शब्द कार्ड पर क्लिक करें। वेब स्पीच सिंथेसाइज़र (kn-IN) सक्रिय है।' 
          : 'Click any word card to activate high-quality live Kannada vocalizations via Web Speech synthesis (kn-IN).'}
      </div>
    </div>
  );
};
