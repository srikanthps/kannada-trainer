/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AlphabetCharacter } from './types';
import { AlphabetGrid } from './components/AlphabetGrid';
import { PatternMatcher } from './components/PatternMatcher';
import { KagunithaSyllableGrid } from './components/KagunithaSyllableGrid';
import { WordGenerator } from './components/WordGenerator';
import { SpeedRecall } from './components/SpeedRecall';
import { OttaksharaLearner } from './components/OttaksharaLearner';
import { EssayPractice } from './components/EssayPractice';
import { KANNADA_ALPHABETS } from './data/alphabets';
import { BookOpen, HelpCircle, Layers, SpellCheck, Trophy, Sparkles, CheckCircle2, Languages, Flame, Volume2, Type, Sliders, Eye, PenTool } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from './contexts/LanguageContext';

export default function App() {
  const { referenceLanguage, setReferenceLanguage, t, getTranslatedChar, translateSubCategory } = useLanguage();
  const [activeView, setActiveView] = useState<'catalog' | 'patterns' | 'syllables' | 'ottakshara' | 'recall' | 'words' | 'essay'>('catalog');
  const [isStandalonePoster, setIsStandalonePoster] = useState(false);
  const [selectedChar, setSelectedChar] = useState<AlphabetCharacter | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('view') === 'poster' || params.get('poster') === 'standalone') {
      setIsStandalonePoster(true);
    }
  }, []);

  // Font size / scaling state for better reading distance
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xl' | 'xxl' | 'max'>(() => {
    try {
      const saved = localStorage.getItem('kannada_font_size');
      if (saved && ['normal', 'large', 'xl', 'xxl', 'max'].includes(saved)) {
        return saved as 'normal' | 'large' | 'xl' | 'xxl' | 'max';
      }
    } catch (e) {
      console.error('Failed to load font size preference:', e);
    }
    return 'large'; // Default to 'large' (115%) to make it highly legible by default!
  });

  useEffect(() => {
    const scaleMap: Record<string, string> = {
      normal: '100%',
      large: '115%',
      xl: '135%',
      xxl: '155%',
      max: '175%'
    };
    const scalePercent = scaleMap[fontSize] || '115%';
    document.documentElement.style.fontSize = scalePercent;
    try {
      localStorage.setItem('kannada_font_size', fontSize);
    } catch (e) {
      console.error('Failed to save font size preference:', e);
    }
  }, [fontSize]);
  
  // Keep track of visited letters to calculate learning progress (Persisted in localStorage)
  const [visitedCharIds, setVisitedCharIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('visited_char_ids');
      if (saved) {
        return new Set(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load visited characters:', e);
    }
    return new Set<string>();
  });

  const handleSelectChar = (char: AlphabetCharacter) => {
    setSelectedChar(char);
    setVisitedCharIds((prev) => {
      const next = new Set(prev);
      next.add(char.id);
      try {
        localStorage.setItem('visited_char_ids', JSON.stringify(Array.from(next)));
      } catch (e) {
        console.error('Failed to save visited characters:', e);
      }
      return next;
    });
  };

  const totalCharactersCount = 49; // Total unique characters taught

  // Daily challenge and streak tracking states
  const [dailyChar, setDailyChar] = useState<AlphabetCharacter | null>(null);
  const [dailyCompleted, setDailyCompleted] = useState<boolean>(false);
  const [dailyStreak, setDailyStreak] = useState<number>(0);

  useEffect(() => {
    const getLocalDateString = (d: Date = new Date()) => {
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    const todayStr = getLocalDateString(new Date());
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterdayStr = getLocalDateString(yesterdayDate);

    // 1. Get streak
    const savedStreakStr = localStorage.getItem('daily_challenge_streak');
    let currentStreak = savedStreakStr ? parseInt(savedStreakStr, 10) : 0;
    if (isNaN(currentStreak)) currentStreak = 0;

    const lastCompleted = localStorage.getItem('daily_challenge_last_completed_date');
    
    // Check if streak is broken (last completed is older than yesterday and was not completed today either)
    if (lastCompleted && lastCompleted !== todayStr && lastCompleted !== yesterdayStr) {
      currentStreak = 0;
      localStorage.setItem('daily_challenge_streak', '0');
    }
    setDailyStreak(currentStreak);

    // 2. Load or generate daily challenge character
    const savedDate = localStorage.getItem('daily_challenge_date');
    const savedCharId = localStorage.getItem('daily_challenge_char_id');
    const savedCompleted = localStorage.getItem('daily_challenge_completed') === 'true';

    if (savedDate === todayStr && savedCharId) {
      const foundChar = KANNADA_ALPHABETS.find(c => c.id === savedCharId);
      if (foundChar) {
        setDailyChar(foundChar);
        setDailyCompleted(savedCompleted);
      } else {
        initializeNewDailyChar(todayStr);
      }
    } else {
      initializeNewDailyChar(todayStr);
    }
  }, []);

  const initializeNewDailyChar = (todayStr: string) => {
    if (KANNADA_ALPHABETS.length === 0) return;
    const randomIndex = Math.floor(Math.random() * KANNADA_ALPHABETS.length);
    const chosen = KANNADA_ALPHABETS[randomIndex];
    setDailyChar(chosen);
    setDailyCompleted(false);
    
    localStorage.setItem('daily_challenge_date', todayStr);
    localStorage.setItem('daily_challenge_char_id', chosen.id);
    localStorage.setItem('daily_challenge_completed', 'false');
  };

  const handleCompleteDaily = () => {
    if (!dailyChar || dailyCompleted) return;

    setDailyCompleted(true);
    localStorage.setItem('daily_challenge_completed', 'true');

    const getLocalDateString = (d: Date = new Date()) => {
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
    const todayStr = getLocalDateString(new Date());

    const lastCompleted = localStorage.getItem('daily_challenge_last_completed_date');
    let newStreak = dailyStreak;

    // Increment streak if not completed yet today
    if (lastCompleted !== todayStr) {
      newStreak = dailyStreak + 1;
      setDailyStreak(newStreak);
      localStorage.setItem('daily_challenge_streak', String(newStreak));
    }
    localStorage.setItem('daily_challenge_last_completed_date', todayStr);

    // Mark character as visited/mastered
    setVisitedCharIds((prev) => {
      const next = new Set(prev);
      next.add(dailyChar.id);
      try {
        localStorage.setItem('visited_char_ids', JSON.stringify(Array.from(next)));
      } catch (e) {
        console.error('Failed to save visited characters:', e);
      }
      return next;
    });

    // Play pronunciation sound automatically!
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(dailyChar.kannadaChar);
      utterance.lang = 'kn-IN';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const displayDailyChar = dailyChar ? getTranslatedChar(dailyChar) : null;

  if (isStandalonePoster) {
    return (
      <div id="standalone-poster-wrapper" className="min-h-screen bg-[#FDFBF7] text-[#2D2926] font-sans antialiased">
        <KagunithaSyllableGrid standalone={true} />
      </div>
    );
  }

  return (
    <div id="application-container" className="min-h-screen bg-[#FDFBF7] text-[#2D2926] font-sans antialiased selection:bg-[#7B241C]/10 selection:text-[#7B241C]">
      {/* Visual elegant paper grain texture effects, very subtle */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#7B241C]/5 blur-[120px] rounded-full pointer-events-none print:hidden" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#F4A261]/5 blur-[100px] rounded-full pointer-events-none print:hidden" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        
        {/* Humble, aesthetically elegant header */}
        <header id="app-header" className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 border-b border-[#2D2926] pb-8 print:hidden">
          <div className="text-center md:text-left space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] font-bold opacity-60 block font-mono">{t('byline')}</span>
            <h1 id="app-title" className="text-4xl md:text-5xl font-serif italic text-[#7B241C] flex items-center justify-center md:justify-start gap-4">
              <span className="inline-block border border-[#2D2926] px-3 py-1 font-serif font-normal rounded-md text-3xl bg-[#F5EFEB] text-[#2D2926] not-italic shadow-sm">ಕ</span>
              {t('appTitle')}
            </h1>
            <p className="serif italic text-[#2D2926]/70 text-base md:text-lg">
              {t('subtitle')}
            </p>
          </div>

          {/* Progress Tracker Card with Streak */}
          <div id="global-progress-card" className="bg-[#F5EFEB]/50 px-6 py-4 rounded-xl border border-[#2D2926] flex flex-col md:flex-row items-stretch md:items-center gap-4 shrink-0 min-w-[320px] shadow-sm">
            {/* Linguistic Mastery */}
            <div className="flex items-center gap-3.5 flex-1 select-none">
              <div className="p-2 bg-white border border-[#2D2926]/40 rounded-full text-[#7B241C] shrink-0">
                <Trophy className="h-5 w-5 fill-[#F4A261]/20 text-[#7B241C]" />
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] font-bold text-[#2D2926]/60 uppercase tracking-widest font-mono">{t('mastryLabel')}</span>
                  <span className="text-xs font-bold font-mono">
                    {visitedCharIds.size} / {totalCharactersCount}
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-white border border-[#2D2926]/20 h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-[#7B241C] h-full"
                    animate={{ width: `${(visitedCharIds.size / totalCharactersCount) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="hidden md:block w-[1px] bg-[#2D2926]/20 self-stretch my-1" />

            {/* Daily Challenge Streak */}
            <div className="flex items-center gap-3 select-none shrink-0 border-t border-[#2D2926]/10 pt-2.5 md:pt-0 md:border-0">
              <div className="p-2 bg-white border border-[#2D2926]/40 rounded-full text-[#C85A17] shrink-0">
                <Flame className="h-5 w-5 fill-[#C85A17]/20 text-[#C85A17]" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#2D2926]/60 uppercase tracking-widest font-mono block">{t('streakLabel')}</span>
                <span className="text-sm font-bold font-mono text-[#C85A17] flex items-center gap-1">
                  <span>{dailyStreak}</span>
                  <span className="text-[11px] text-[#2D2926]/60 font-normal">{t('daysLabel')}</span>
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Dual Selection Control Panel (Language preference & Font Size Sizer) */}
        <section id="accessibility-and-language-controller" className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F5EFEB]/40 border-2 border-[#2D2926] p-5 shadow-[3px_3px_0px_0px_rgba(45,41,38,1)] print:hidden">
          {/* Reference Language Toggle */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#7B241C]/5 border border-[#7B241C]/25 rounded-md text-[#7B241C] shrink-0">
                <Languages className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#2D2926]/70 uppercase tracking-widest font-mono block">{t('referenceToggleLabel')}</span>
                <h3 className="text-sm font-bold font-serif text-[#2D2926] mt-0.5">
                  Reference Kannada using English or Hindi script analogies?
                </h3>
              </div>
            </div>
            
            <div className="flex bg-white border-2 border-[#2D2926] p-1 gap-1 select-none">
              <button
                id="ref-lang-en-btn"
                onClick={() => setReferenceLanguage('en')}
                className={`flex-1 py-2 text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                  referenceLanguage === 'en'
                    ? 'bg-[#7B241C] text-white'
                    : 'text-[#2D2926]/75 hover:text-[#2D2926] hover:bg-[#F5EFEB]'
                }`}
              >
                English Medium
              </button>
              <button
                id="ref-lang-hi-btn"
                onClick={() => setReferenceLanguage('hi')}
                className={`flex-1 py-1 text-xs font-mono font-bold uppercase transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  referenceLanguage === 'hi'
                    ? 'bg-[#7B241C] text-white'
                    : 'text-[#2D2926]/75 hover:text-[#2D2926] hover:bg-[#F5EFEB]'
                }`}
              >
                हिन्दी माध्यम (Hindi)
              </button>
            </div>
          </div>

          {/* Font Size Accessibility Controller */}
          <div className="space-y-3.5 border-t md:border-t-0 md:border-l border-[#2D2926]/20 pt-3.5 md:pt-0 md:pl-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#7B241C]/5 border border-[#7B241C]/25 rounded-md text-[#7B241C] shrink-0">
                <Type className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#2D2926]/70 uppercase tracking-widest font-mono block">{t('comfortTitle')}</span>
                <h3 className="text-sm font-serif text-[#2D2926] mt-0.5 font-bold">
                  {t('comfortDesc')}
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap bg-white border-2 border-[#2D2926] p-1 gap-1 select-none justify-center">
              {[
                { id: 'normal', label: '100%', title: 'Standard size for close-up view' },
                { id: 'large', label: '115% (Comfort)', title: 'Best general legibility' },
                { id: 'xl', label: '135% (2 Feet)', title: 'Recommended for 2-foot distance reading' },
                { id: 'xxl', label: '155% (3 Feet)', title: 'Extremely large text for far distance' },
                { id: 'max', label: '175% (Max)', title: 'Maximum accessible sizing' }
              ].map((option) => (
                <button
                  key={option.id}
                  id={`font-scale-btn-${option.id}`}
                  onClick={() => setFontSize(option.id as 'normal' | 'large' | 'xl' | 'xxl' | 'max')}
                  className={`flex-1 min-w-[50px] px-2 py-2 text-xs font-mono font-bold uppercase transition-all cursor-pointer text-center ${
                    fontSize === option.id
                      ? 'bg-[#7B241C] text-white'
                      : 'text-[#2D2926]/70 hover:text-[#2D2926] hover:bg-[#F5EFEB]'
                  }`}
                  title={option.title}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Onboarding Introduction Banner */}
        <section id="onboarding-banner" className="bg-white border-2 border-[#2D2926] p-8 relative overflow-hidden shadow-[4px_4px_0px_0px_rgba(45,41,38,1)] print:hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5EFEB] rotate-45 translate-x-16 -translate-y-16 border-l border-[#2D2926] opacity-30" />
          <div className="relative space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#7B241C]/5 border border-[#7B241C]/30 text-[#7B241C] text-[10px] font-bold tracking-widest font-mono uppercase">
              <Sparkles className="h-3 w-3" /> {t('historicalPrelude')}
            </span>
            <h2 className="text-3xl font-serif italic text-[#2D2926]">
              {t('introTitle')}
            </h2>
            <p className="font-serif text-base text-[#2D2926]/80 leading-relaxed max-w-4xl">
              {t('introDesc')}
            </p>
            <div className="pt-2 flex flex-wrap gap-x-8 gap-y-2 text-xs font-bold font-mono text-[#2D2926]/80 uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7B241C]" />
                <span>{t('numVowels')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C85A17]" />
                <span>{t('numYogavaahas')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-stone-500" />
                <span>{t('numConsonants')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Daily Alphabet Challenge Widget */}
        {displayDailyChar && (
          <section id="daily-challenge-widget" className="bg-white border-2 border-[#2D2926] p-6 shadow-[4px_4px_0px_0px_rgba(45,41,38,1)] flex flex-col lg:flex-row gap-6 relative overflow-hidden print:hidden">
            {/* Elegant overlay ribbon */}
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#C85A17]/10 border-b border-l border-[#2D2926] text-[#C85A17] text-[10px] uppercase font-bold tracking-widest font-mono flex items-center gap-1.5 select-none">
              <Flame className="h-3.5 w-3.5 fill-[#C85A17]/20" /> {t('dailyChallengeTitle')}
            </div>

            {/* Left display column with character */}
            <div className="flex flex-col sm:flex-row items-center gap-6 md:w-3/5">
              <div className="w-28 h-28 shrink-0 bg-[#F5EFEB]/30 border-2 border-[#2D2926] flex flex-col justify-center items-center text-center select-all relative p-2">
                <span className="text-6xl font-serif font-bold text-[#2D2926] leading-none">
                  {displayDailyChar.kannadaChar}
                </span>
                <span className="text-xs font-mono font-bold text-[#7B241C] mt-2 block">
                  [ {displayDailyChar.englishSymbol} ]
                </span>
              </div>

              <div className="space-y-2 text-center sm:text-left flex-1 font-serif">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 h-auto text-[10px]">
                  <span className="px-2 py-0.5 bg-[#7B241C]/5 text-[#7B241C] border border-[#7B241C]/30 font-bold uppercase tracking-wider font-mono">
                    {translateSubCategory(displayDailyChar.category)}
                  </span>
                  {displayDailyChar.subCategory && (
                    <span className="px-2 py-0.5 bg-[#C85A17]/5 text-[#C85A17] border border-[#C85A17]/30 font-bold uppercase tracking-wider font-mono">
                      {translateSubCategory(displayDailyChar.subCategory)}
                    </span>
                  )}
                </div>
                <h4 className="text-xl text-[#2D2926] font-serif">
                  {t('challengePrefix')}: <strong>&quot;{displayDailyChar.kannadaChar}&quot;</strong>
                </h4>
                <p className="text-xs text-[#2D2926]/75 font-serif italic leading-relaxed">
                  {t('soundGuidePrefix')}: {displayDailyChar.pronunciationHint}
                </p>
              </div>
            </div>

            {/* Vertical/Horizontal divider */}
            <div className="hidden lg:block w-[1px] bg-[#2D2926]/10 self-stretch" />
            <div className="block lg:hidden h-[1px] bg-[#2D2926]/10 w-full" />

            {/* Right Interactive and Master-State Column */}
            <div className="flex-1 flex flex-col justify-between gap-4">
              {/* Educational content: real word examples */}
              <div className="space-y-2 flex-1">
                <span className="text-[9px] font-bold text-[#2D2926]/50 uppercase tracking-widest font-mono block">{t('contextPracticeLabel')}</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {displayDailyChar.examples.slice(0, 2).map((ex, idx) => (
                    <div key={idx} className="p-2 border border-[#2D2926]/15 bg-[#FDFBF7] flex flex-col justify-between">
                      <span className="text-base font-serif font-bold text-[#2D2926]">{ex.kannadaWord}</span>
                      <div className="flex justify-between items-baseline mt-1 text-[10px] font-mono">
                        <span className="text-[#7B241C] font-semibold">{ex.transliteration}</span>
                        <span className="text-[#2D2926]/60 font-serif italic text-[11px] font-normal">{ex.englishMeaning}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 items-stretch">
                <button
                  id="listen-daily-btn"
                  onClick={() => {
                    if ('speechSynthesis' in window) {
                      window.speechSynthesis.cancel();
                      const utterance = new SpeechSynthesisUtterance(displayDailyChar.kannadaChar);
                      utterance.lang = 'kn-IN';
                      utterance.rate = 0.8;
                      window.speechSynthesis.speak(utterance);
                    }
                  }}
                  className="py-2.5 px-4 bg-[#F5EFEB]/50 text-[#7B241C] border border-[#2D2926] hover:bg-[#F5EFEB] cursor-pointer text-xs uppercase tracking-wider font-bold font-mono transition-all flex items-center justify-center gap-2 flex-1"
                >
                  <Volume2 className="h-4 w-4" /> {t('listenSoundLabel')}
                </button>

                {dailyCompleted ? (
                  <div className="py-2.5 px-4 bg-emerald-500/10 text-emerald-800 border-2 border-emerald-500 flex-1 flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold font-mono select-none">
                    <CheckCircle2 className="h-4 w-4 text-emerald-700" /> {t('challengeCompletedLabel')}
                  </div>
                ) : (
                  <button
                    id="complete-daily-btn"
                    onClick={handleCompleteDaily}
                    className="py-2.5 px-4 bg-[#7B241C] hover:bg-[#661e17] text-white border-2 border-[#2D2926] hover:shadow-[2px_2px_0px_0px_rgba(45,41,38,1)] transition-all cursor-pointer text-xs uppercase tracking-widest font-bold font-mono flex items-center justify-center gap-2 flex-1 animate-pulse"
                  >
                    <Trophy className="h-4 w-4" /> {t('markMasteredLabel')}
                  </button>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Main Tab Switcher Menu */}
        <div id="view-tabs-menu" className="flex flex-wrap bg-[#F5EFEB] p-1.5 border border-[#2D2926] max-w-4xl mx-auto shadow-sm gap-1 print:hidden">
          {[
            { id: 'catalog', label: referenceLanguage === 'hi' ? 'वर्णमाला' : 'Catalog', icon: BookOpen },
            { id: 'patterns', label: referenceLanguage === 'hi' ? 'स्वर-पैटर्न' : 'Patterns', icon: Layers },
            { id: 'syllables', label: referenceLanguage === 'hi' ? 'बाराखड़ी' : 'Syllables', icon: SpellCheck },
            { id: 'ottakshara', label: referenceLanguage === 'hi' ? 'ओत्तक्षर' : 'Ottakshara', icon: Type },
            { id: 'recall', label: referenceLanguage === 'hi' ? 'शीघ्र स्मरण' : 'Speed Recall', icon: Flame },
            { id: 'words', label: referenceLanguage === 'hi' ? 'शब्द निर्माण' : 'Forge', icon: Languages },
            { id: 'essay', label: referenceLanguage === 'hi' ? 'निबंध अभ्यास' : 'Essay Practice', icon: PenTool },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeView === tab.id;
            return (
              <button
                key={tab.id}
                id={`view-tab-btn-${tab.id}`}
                onClick={() => {
                  setActiveView(tab.id as typeof activeView);
                }}
                className={`flex-1 min-w-[75px] flex flex-col sm:flex-row items-center justify-center gap-2 py-2.5 transition-all cursor-pointer text-xs uppercase tracking-wider font-bold ${
                  isActive
                    ? 'bg-[#7B241C] text-white border border-[#2D2926]'
                    : 'text-[#2D2926]/70 hover:text-[#2D2926] hover:bg-white/50'
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="text-[10px] sm:text-[11px]">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Display Active View Section with Motion Animations */}
        <main id="active-view-container" className="pt-2 min-h-[480px]">
          <AnimatePresence mode="wait">
            {activeView === 'catalog' && (
              <motion.div
                key="catalog"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="border-b border-[#2D2926]/20 pb-4">
                  <h3 className="text-2xl font-serif text-[#2D2926] italic">
                    {referenceLanguage === 'hi' ? 'अक्षरमाला अन्वेषक (Alphabet Explorer)' : 'Alphabet Explorer'}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-widest text-[#2D2926]/60 mt-1">
                    {referenceLanguage === 'hi' 
                      ? 'विस्तृत ध्वन्यात्मक लक्षणों, उदाहरणों और साहित्यों की समीक्षा के लिए किसी भी वर्ण पर क्लिक करें।' 
                      : 'Select characters to review detailed acoustic traits, phonetic examples, and sample words.'}
                  </p>
                </div>
                <AlphabetGrid
                  onSelectChar={handleSelectChar}
                  selectedChar={selectedChar}
                  fontSize={fontSize}
                />
              </motion.div>
            )}

            {activeView === 'patterns' && (
              <motion.div
                key="patterns"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
              >
                <PatternMatcher />
              </motion.div>
            )}

            {activeView === 'syllables' && (
              <motion.div
                key="syllables"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
              >
                <KagunithaSyllableGrid />
              </motion.div>
            )}

            {/* Look-Alikes section removed per user request */}

            {activeView === 'ottakshara' && (
              <motion.div
                key="ottakshara"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
              >
                <div className="space-y-2 mb-6 text-center">
                  <h3 className="text-2xl font-serif text-[#2D2926]">
                    {referenceLanguage === 'hi' ? 'ओत्तक्षर (संयुक्त व्यंजन) संकलन' : 'Ottakshara (Consonant Conjuncts)'}
                  </h3>
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-60">
                    {referenceLanguage === 'hi' ? 'कन्नड़ भाषा के शुद्ध उच्चारण और वर्ण-संयोग का पूर्ण अभ्यास' : 'Master consonant subscripts, syllable merging, and spelling structures'}
                  </span>
                </div>
                <OttaksharaLearner />
              </motion.div>
            )}

            {activeView === 'recall' && (
              <motion.div
                key="recall"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
              >
                <div className="space-y-2 mb-6 text-center">
                  <h3 className="text-2xl font-serif text-[#2D2926]">Memorization Recall Desk</h3>
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-60">Flashcards with high-speed automated speech synthesis</span>
                </div>
                <SpeedRecall />
              </motion.div>
            )}

            {activeView === 'words' && (
              <motion.div
                key="words"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
              >
                <div className="space-y-2 mb-6 text-center">
                  <h3 className="text-2xl font-serif text-[#2D2926]">Linguistic Vocabulary Forge</h3>
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-60">Forge phonetic characters into real vocabulary</span>
                </div>
                <WordGenerator />
              </motion.div>
            )}

            {/* Linguistic Drill Quiz section removed per user request */}

            {activeView === 'essay' && (
              <motion.div
                key="essay"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
              >
                <EssayPractice />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Aesthetic Footer */}
      <footer id="app-footer" className="mt-24 py-12 bg-[#F5EFEB]/40 border-t border-[#2D2926]/30 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] font-bold text-[#2D2926]">
            Akshara Linguistic Series • Volume I
          </p>
          <p className="font-serif italic text-sm text-[#2D2926]/75 max-w-xl mx-auto">
            "Designed to facilitate native pattern-recognition through structured syllabic arrays, mouth articulation maps, and precise English transliteration guides."
          </p>
        </div>
      </footer>
    </div>
  );
}
