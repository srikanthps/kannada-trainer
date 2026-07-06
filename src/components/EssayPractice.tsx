import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  BookOpen, 
  Volume2, 
  CheckCircle2, 
  RefreshCw, 
  PenTool, 
  Info, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  ListPlus,
  HelpCircle,
  Shuffle,
  Compass,
  Award,
  Eye,
  EyeOff
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getPrebuiltEssay, ESSAY_TOPICS, Essay as EssayType } from '../data/essayCollection';

export const EssayPractice: React.FC = () => {
  const { referenceLanguage } = useLanguage();
  
  // App states
  const [practiceMode, setPracticeMode] = useState<'standard' | 'transliterated'>('standard');
  const [selectedCategory, setSelectedCategory] = useState<string>("Culture & Festivals");
  const [selectedTopicId, setSelectedTopicId] = useState<number>(1);
  const [customTopic, setCustomTopic] = useState<string>('');
  const [wordCount, setWordCount] = useState<'100' | '200' | '300'>('100');

  const [essay, setEssay] = useState<EssayType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [infoMessage, setInfoMessage] = useState<string>('');
  const [activeSentenceIndex, setActiveSentenceIndex] = useState<string | null>(null); // "pIndex-sIndex"
  const [userWritingInputs, setUserWritingInputs] = useState<Record<string, string>>({}); // keys: "pIndex-sIndex"
  const [revealedWordCounts, setRevealedWordCounts] = useState<Record<string, number>>({}); // keys: "pIndex-sIndex"
  const [revealedParagraphs, setRevealedParagraphs] = useState<Record<number, boolean>>({}); // keys: pIdx

  // Categorized Topics
  const categoriesList = useMemo(() => {
    const list = new Set<string>();
    ESSAY_TOPICS.forEach(t => list.add(t.cat));
    return Array.from(list);
  }, []);

  const topicsInActiveCategory = useMemo(() => {
    return ESSAY_TOPICS.filter(t => t.cat === selectedCategory);
  }, [selectedCategory]);

  // Load the essay on topic change or reference language change
  const loadEssay = async (isRandom: boolean = false, randomTopicText?: string) => {
    setIsLoading(true);
    setInfoMessage('');
    setActiveSentenceIndex(null);
    setUserWritingInputs({});
    setRevealedWordCounts({});
    setRevealedParagraphs({});

    try {
      // AI Generation Mode (custom or random)
      let topicToGenerate = '';
      if (randomTopicText) {
        topicToGenerate = randomTopicText;
      } else if (customTopic.trim() !== '') {
        topicToGenerate = customTopic.trim();
      } else {
        // Fallback to active selected topic template
        const activeTopic = ESSAY_TOPICS.find(t => t.id === selectedTopicId) || ESSAY_TOPICS[0];
        topicToGenerate = referenceLanguage === 'hi' ? activeTopic.titleHi : activeTopic.titleEn;
      }

      const cacheKey = `${referenceLanguage}_${wordCount}_${topicToGenerate.toLowerCase().trim()}`;
      
      // Try to load from localStorage cache first
      let localCache: { key: string; essay: EssayType }[] = [];
      try {
        const stored = localStorage.getItem('kannada_essay_cache');
        if (stored) {
          localCache = JSON.parse(stored);
        }
      } catch (err) {
        console.error("Cache read error:", err);
      }

      const cachedItem = localCache.find(item => item.key === cacheKey);
      if (cachedItem) {
        setEssay(cachedItem.essay);
        setInfoMessage(referenceLanguage === 'hi' 
          ? 'कैश से पहले से लोड किया गया निबंध (त्वरित लोड)।' 
          : 'Loaded cached essay instantly (avoided Gemini API call).');
        setIsLoading(false);
        return;
      }

      const response = await fetch('/api/generate-essay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          wordCount,
          topic: topicToGenerate,
          language: referenceLanguage
        }),
      });

      if (!response.ok) {
        throw new Error('Network response not okay');
      }

      const data = await response.json();
      if (data.essay) {
        setEssay(data.essay);
        setInfoMessage(data.info || 'Generated on-demand via Gemini AI');

        // Save to cache (limit to 5)
        try {
          const newCacheItem = { key: cacheKey, essay: data.essay };
          const updatedCache = [
            newCacheItem,
            ...localCache.filter(item => item.key !== cacheKey)
          ].slice(0, 5); // Keep up to 5 essays
          localStorage.setItem('kannada_essay_cache', JSON.stringify(updatedCache));
        } catch (cacheErr) {
          console.error("Cache save error:", cacheErr);
        }
      } else {
        throw new Error('Empty essay schema received');
      }
    } catch (e) {
      console.error("Essay load error:", e);
      // Fallback to local pre-built if AI fails
      const localEssay = getPrebuiltEssay(selectedTopicId || 1, referenceLanguage === 'hi' ? 'hi' : 'en');
      setEssay(localEssay);
      setInfoMessage(referenceLanguage === 'hi' 
        ? 'ऑफ़लाइन बैकअप निबंध लोड किया गया (एआई सर्वर अनुपलब्ध)' 
        : 'Loaded offline backup essay (AI endpoint timed out or unavailable)');
    } finally {
      setIsLoading(false);
    }
  };

  // Populate customTopic when selectedTopicId changes
  useEffect(() => {
    const activeTopic = ESSAY_TOPICS.find(t => t.id === selectedTopicId);
    if (activeTopic) {
      setCustomTopic(referenceLanguage === 'hi' ? activeTopic.titleHi : activeTopic.titleEn);
    }
  }, [selectedTopicId, referenceLanguage]);

  // Initial load
  useEffect(() => {
    loadEssay(false, referenceLanguage === 'hi' ? 'मैसूर दशहरा उत्सव' : 'Mysore Dasara Festival');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [referenceLanguage]);

  // Handle generating a completely random topic
  const handleGenerateRandomTopicEssay = () => {
    const randomTopicObj = ESSAY_TOPICS[Math.floor(Math.random() * ESSAY_TOPICS.length)];
    const topicText = referenceLanguage === 'hi' ? randomTopicObj.titleHi : randomTopicObj.titleEn;
    setCustomTopic(topicText);
    loadEssay(true, topicText);
  };

  // Web Speech synthesis pronunciation
  const speakText = (text: string, isParagraph: boolean = false) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'kn-IN'; // Kannada language code
      utterance.rate = isParagraph ? 0.8 : 0.72; // PACE down slightly for learner pronunciation
      window.speechSynthesis.speak(utterance);
    } else {
      alert(referenceLanguage === 'hi' ? 'आपके ब्राउज़र में स्पीच सिंथेसिस सपोर्ट उपलब्ध नहीं है।' : 'Speech synthesis not supported in this browser.');
    }
  };

  // Compare written text to target sentence - return percent
  const calculateAccuracy = (input: string, target: string): number => {
    if (!input || !target) return 0;
    
    const cleanStr = (s: string) => s.replace(/\s+/g, '').trim();
    const cleanIn = cleanStr(input);
    const cleanTar = cleanStr(target);

    if (cleanTar === '') return 0;
    if (cleanIn === cleanTar) return 100;

    let matches = 0;
    const minLength = Math.min(cleanIn.length, cleanTar.length);
    for (let i = 0; i < minLength; i++) {
      if (cleanIn[i] === cleanTar[i]) {
        matches++;
      }
    }

    const accuracy = Math.round((matches / cleanTar.length) * 100);
    return Math.min(accuracy, 100);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto" id="essay-practice-container">
      {/* Introduction Banner */}
      <div className="bg-[#FAF6F0] rounded-2xl p-6 border-2 border-[#2D2926] text-center space-y-2 shadow-[3px_3px_0px_0px_rgba(45,41,38,1)]">
        <div className="inline-flex p-3 rounded-full bg-[#7B241C]/10 text-[#7B241C] mb-2">
          <PenTool className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-serif text-[#2D2926] font-bold">
          {referenceLanguage === 'hi' ? 'निबंध लेखन एवं वाक्य निर्माण कक्ष' : 'Essay Practice & Composition Room'}
        </h3>
        <p className="text-sm text-[#2D2926]/80 max-w-2xl mx-auto font-serif">
          {referenceLanguage === 'hi' 
            ? 'कन्नड़ लिपि और व्याकरण सीखने के लिए १०० पूर्व-निर्मित निबंधों में से चुनें, अथवा जेमिनी एआई का उपयोग कर किसी रैंडम या विशिष्ट विषय पर एक नया निबंध तुरंत तैयार करें।' 
            : 'Select from 100 pre-built, instantly accessible Kannada essays, or use Gemini AI to compose fresh learning essays on custom or completely random topics.'}
        </p>
      </div>

      {/* Main Settings Panel */}
      <div className="bg-white rounded-2xl border-2 border-[#2D2926] p-6 space-y-6 shadow-[2px_2px_0px_0px_rgba(45,41,38,1)]">
        
        {/* Step 1: Recommended Topics Selection or Custom Entry */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[#2D2926]/10">
            <Sparkles className="w-5 h-5 text-amber-500 fill-amber-500" />
            <h4 className="font-serif font-bold text-lg text-[#2D2926]">
              {referenceLanguage === 'hi' ? '१. निबंध विषय का चयन करें' : '1. Select Essay Topic'}
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category Selector */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-[#2D2926]/60 block font-bold">
                {referenceLanguage === 'hi' ? 'श्रेणी (Curated Theme)' : 'Curated Theme'}
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  const firstOfCat = ESSAY_TOPICS.find(t => t.cat === e.target.value);
                  if (firstOfCat) setSelectedTopicId(firstOfCat.id);
                }}
                className="w-full p-3 border-2 border-[#2D2926] bg-[#FDFBF7] text-[#2D2926] font-serif focus:outline-none rounded-xl cursor-pointer"
              >
                {categoriesList.map(cat => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Topic Selector */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-[#2D2926]/60 block font-bold">
                {referenceLanguage === 'hi' ? 'अनुशंसित विषय (100 Curated Topics)' : '100 Curated Topics'}
              </label>
              <select
                value={selectedTopicId}
                onChange={(e) => setSelectedTopicId(parseInt(e.target.value, 10))}
                className="w-full p-3 border-2 border-[#2D2926] bg-[#FDFBF7] text-[#2D2926] font-serif focus:outline-none rounded-xl cursor-pointer"
              >
                {topicsInActiveCategory.map(topic => (
                  <option key={topic.id} value={topic.id}>
                    #{topic.id} - {topic.titleKn} ( {referenceLanguage === 'hi' ? topic.titleHi : topic.titleEn} )
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase tracking-widest text-[#2D2926]/60 block font-bold">
              {referenceLanguage === 'hi' ? 'या अपना खुद का कोई भी विषय टाइप करें:' : 'Or type any custom topic of your choice:'}
            </label>
            <input
              type="text"
              placeholder={referenceLanguage === 'hi' ? 'उदा. बेंगलुरु मेट्रो, कर्नाटक के वन्यजीव...' : 'e.g., Bengaluru Metro, Wildlife of Karnataka...'}
              value={customTopic}
              onChange={(e) => setCustomTopic(e.target.value)}
              className="w-full px-4 py-2.5 border-2 border-[#2D2926] bg-[#FDFBF7] text-sm text-[#2D2926] focus:outline-none rounded-xl"
            />
          </div>
        </div>

        {/* Step 2: Settings Controls (Word count + Practice Mode) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-[#2D2926]/10">
          {/* Word Limit Target */}
          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase tracking-widest text-[#2D2926]/60 block font-bold">
              {referenceLanguage === 'hi' ? '೨. लक्षित शब्द सीमा' : '2. Word Target Limit'}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['100', '200', '300'] as const).map((len) => (
                <button
                  key={len}
                  onClick={() => setWordCount(len)}
                  className={`py-2 px-3 border-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    wordCount === len
                      ? 'bg-[#2D2926] text-[#FAF6F0] border-[#2D2926]'
                      : 'bg-[#FDFBF7] text-[#2D2926] border-[#2D2926]/10 hover:border-[#2D2926]/30'
                  }`}
                >
                  {len} {referenceLanguage === 'hi' ? 'शब्द' : 'words'}
                </button>
              ))}
            </div>
          </div>

          {/* Practice Mode Toggle */}
          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase tracking-widest text-[#2D2926]/60 block font-bold">
              {referenceLanguage === 'hi' ? '೩. अभ्यास मोड' : '3. Practice Mode'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setPracticeMode('standard')}
                className={`py-2 px-3 border-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  practiceMode === 'standard'
                    ? 'bg-[#2D2926] text-[#FAF6F0] border-[#2D2926]'
                    : 'bg-[#FDFBF7] text-[#2D2926] border-[#2D2926]/10 hover:border-[#2D2926]/30'
                }`}
              >
                📖 {referenceLanguage === 'hi' ? 'मानक अध्ययन' : 'Standard Study'}
              </button>
              <button
                onClick={() => setPracticeMode('transliterated')}
                className={`py-2 px-3 border-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  practiceMode === 'transliterated'
                    ? 'bg-[#2D2926] text-[#FAF6F0] border-[#2D2926]'
                    : 'bg-[#FDFBF7] text-[#2D2926] border-[#2D2926]/10 hover:border-[#2D2926]/30'
                }`}
                title={referenceLanguage === 'hi' ? 'लिप्यंतरण पहले दिखाएं, कन्नड़ बाद में प्रकट करें' : 'Show transliteration first, reveal Kannada later'}
              >
                ✏️ {referenceLanguage === 'hi' ? 'लिखें और मिलान' : 'Write & Match'}
              </button>
            </div>
          </div>
        </div>

        {/* Custom Buttons Group */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4 border-t border-[#2D2926]/10">
          {/* Trigger Custom Essay Composition */}
          <button
            onClick={() => loadEssay()}
            disabled={isLoading}
            className="px-6 py-3 bg-[#2D2926] text-[#FAF6F0] rounded-xl hover:bg-[#2D2926]/90 transition-all font-serif font-bold text-sm disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            {isLoading ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
            )}
            <span>{referenceLanguage === 'hi' ? 'जेमिनी एआई से निबंध लिखें' : 'Compose AI Essay with Gemini'}</span>
          </button>

          {/* Generate random topic essay */}
          <button
            onClick={handleGenerateRandomTopicEssay}
            disabled={isLoading}
            className="px-6 py-3 border-2 border-[#2D2926] bg-[#7B241C] text-white rounded-xl hover:bg-[#661e17] transition-all font-serif font-bold text-sm disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Shuffle className="w-4 h-4" />
            <span>{referenceLanguage === 'hi' ? 'रैंडम विषय चुनें और लिखें' : 'Compose on Random Topic'}</span>
          </button>
        </div>
      </div>

      {/* Info notification message */}
      {infoMessage && (
        <div className="flex items-center gap-3 text-xs bg-[#FAF6F0] p-3 rounded-lg border border-[#2D2926]/10 max-w-md mx-auto text-[#2D2926]/75 justify-center">
          <Info className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{infoMessage}</span>
        </div>
      )}

      {/* Main Loading Visualizer */}
      {isLoading && (
        <div className="bg-[#FAF6F0] rounded-2xl border-2 border-[#2D2926] p-12 text-center space-y-6 shadow-[3px_3px_0px_0px_rgba(45,41,38,1)]">
          <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
            <RefreshCw className="w-12 h-12 text-[#2D2926] animate-spin" />
            <Sparkles className="absolute w-5 h-5 text-amber-500 animate-pulse" />
          </div>
          <div className="space-y-2">
            <h4 className="font-serif text-lg text-[#2D2926]">
              {referenceLanguage === 'hi' ? 'पाठ संरचना तैयार की जा रही है...' : 'Structuring Kannada Prose...'}
            </h4>
            <p className="text-xs text-[#2D2926]/70 max-w-md mx-auto font-mono">
              {referenceLanguage === 'hi'
                ? 'ऑफ़लाइन या ऑनलाइन इंजन से शब्दावली और व्याकरण नियमों को संयोजित किया जा रहा है।'
                : 'Acquiring canonical sentences, loading phonetic guides, and preparing grammar notes.'}
            </p>
          </div>
        </div>
      )}

      {/* Essay Content Display Area */}
      <AnimatePresence mode="wait">
        {essay && !isLoading && (
          <motion.div
            key="essay-panel"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-8"
          >
            {/* Elegant Essay Headers */}
            <div className="bg-white rounded-3xl border-2 border-[#2D2926] p-8 space-y-4 text-center shadow-[3px_3px_0px_0px_rgba(45,41,38,1)]">
              <span className="text-[10px] font-mono tracking-[0.35em] text-[#2D2926]/60 uppercase block">
                DYNAMICAL AI COMPOSITION • {essay.category || 'GENERAL'}
              </span>
              
              <div className="space-y-1">
                {practiceMode === 'transliterated' ? (
                  <>
                    <h1 className="text-3xl font-serif text-[#2D2926] tracking-wide py-1 leading-snug font-bold">
                      {essay.titleTransliteration}
                    </h1>
                    <p className="text-sm font-mono text-[#2D2926]/50 italic">
                      "{essay.titleTranslation}"
                    </p>
                    <div className="w-12 h-[1px] bg-[#2D2926]/30 mx-auto my-3" />
                    <div className="flex justify-center gap-2 mt-2">
                      <button
                        onClick={() => {
                          const isRevealed = !!revealedParagraphs[-1]; // use -1 for title revelation
                          setRevealedParagraphs({ ...revealedParagraphs, [-1]: !isRevealed });
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 border border-[#2D2926]/30 hover:bg-[#FAF6F0] rounded-lg text-xs font-mono font-bold text-[#2D2926] cursor-pointer"
                      >
                        {revealedParagraphs[-1] ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        <span>{revealedParagraphs[-1] ? (referenceLanguage === 'hi' ? 'कन्नड़ शीर्षक छिपाएं' : 'Hide Kannada Title') : (referenceLanguage === 'hi' ? 'कन्नड़ शीर्षक प्रकट करें' : 'Reveal Kannada Title')}</span>
                      </button>
                    </div>
                    {revealedParagraphs[-1] && (
                      <h2 className="text-2xl font-serif text-[#7B241C] font-bold mt-2 animate-pulse">
                        {essay.title}
                      </h2>
                    )}
                  </>
                ) : (
                  <>
                    <h1 className="text-4xl font-serif text-[#2D2926] tracking-wide py-1 leading-snug font-bold">
                      {essay.title}
                    </h1>
                    <p className="text-sm font-mono text-[#2D2926]/50 italic">
                      "{essay.titleTransliteration}"
                    </p>
                    <div className="w-12 h-[1px] bg-[#2D2926]/30 mx-auto my-3" />
                    <h4 className="text-lg font-serif italic text-[#7B241C] font-medium">
                      {essay.titleTranslation}
                    </h4>
                  </>
                )}
              </div>
            </div>

            {/* Paragraphs and Sentences Drill Board */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-serif text-[#2D2926] flex items-center gap-2 font-bold">
                  <BookOpen className="w-5 h-5 text-emerald-600" />
                  <span>
                    {referenceLanguage === 'hi' ? 'निबंध विषय और वाक्य विश्लेषण' : 'Prose & Sentence Analysis'}
                  </span>
                </h3>
                <span className="text-xs font-mono text-[#2D2926]/50 bg-[#FAF6F0] px-3 py-1 rounded-full border border-[#2D2926]/10">
                  {referenceLanguage === 'hi' ? 'अभ्यास के लिए किसी भी वाक्य पर क्लिक करें' : 'Click any sentence to drill writing'}
                </span>
              </div>

              {essay.paragraphs.map((para, paraIdx) => (
                <div key={paraIdx} className="bg-[#FAF6F0] rounded-2xl border-2 border-[#2D2926] p-6 md:p-8 space-y-6 shadow-[2px_2px_0px_0px_rgba(45,41,38,1)]">
                  {/* Master Paragraph Text in Kannada and Translation */}
                  <div className="space-y-3 pb-6 border-b border-[#2D2926]/10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <span className="text-[10px] font-mono tracking-widest text-[#2D2926]/50 uppercase block font-bold">
                          {referenceLanguage === 'hi' ? `अनुच्छेद ${paraIdx + 1}` : `Paragraph ${paraIdx + 1}`}
                        </span>

                        {practiceMode === 'transliterated' && !revealedParagraphs[paraIdx] ? (
                          <div className="bg-white/60 p-5 rounded-xl border border-dashed border-[#2D2926]/20 text-center space-y-3">
                            <p className="text-xs font-mono text-[#2D2926]/60">
                              {referenceLanguage === 'hi' ? 'कन्नड़ पाठ अभी छिपा हुआ है। नीचे प्रत्येक वाक्य का अभ्यास करें या यहाँ प्रकट करें।' : 'Kannada text hidden. Practice word-by-word below, or reveal paragraph script here:'}
                            </p>
                            <button
                              onClick={() => setRevealedParagraphs({ ...revealedParagraphs, [paraIdx]: true })}
                              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2D2926] text-[#FAF6F0] hover:bg-[#2D2926]/90 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer shadow-xs"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>{referenceLanguage === 'hi' ? 'पूरा अनुच्छेद कन्नड़ में प्रकट करें' : 'Reveal Full Kannada Paragraph'}</span>
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            {practiceMode === 'transliterated' && (
                              <div className="flex justify-end">
                                <button
                                  onClick={() => setRevealedParagraphs({ ...revealedParagraphs, [paraIdx]: false })}
                                  className="inline-flex items-center gap-1 text-xs font-mono text-[#7B241C] hover:underline cursor-pointer"
                                >
                                  <EyeOff className="w-3.5 h-3.5" />
                                  <span>{referenceLanguage === 'hi' ? 'छिपाएं' : 'Hide Kannada'}</span>
                                </button>
                              </div>
                            )}
                            <p className="text-2xl font-normal text-[#2D2926] leading-relaxed select-all">
                              {para.kannadaParagraph}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Paragraph audio synthesis */}
                      <button
                        onClick={() => speakText(para.kannadaParagraph, true)}
                        className="p-3 bg-white hover:bg-[#2D2926] hover:text-[#FAF6F0] text-[#2D2926] border border-[#2D2926]/10 rounded-xl transition-all shadow-xs shrink-0 cursor-pointer h-11 w-11 flex items-center justify-center"
                        title={referenceLanguage === 'hi' ? 'पूरा अनुच्छेद सुनें' : 'Listen to full paragraph'}
                      >
                        <Volume2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="bg-white/60 p-4 rounded-xl text-sm italic text-[#2D2926]/80 text-left border border-[#2D2926]/5">
                      {para.translation}
                    </div>
                  </div>

                  {/* Individual Sentences drilldown */}
                  <div className="space-y-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#2D2926]/60 block font-bold">
                      {referenceLanguage === 'hi' ? 'वाक्य-दर-वाक्य अभ्यास और विश्लेषण:' : 'Sentence-by-Sentence Writing Sandbox:'}
                    </span>

                    {para.sentences.map((sent, sentIdx) => {
                      const sentKey = `${paraIdx}-${sentIdx}`;
                      const isExpanded = activeSentenceIndex === sentKey;
                      const writtenVal = userWritingInputs[sentKey] || '';
                      const accuracyScore = calculateAccuracy(writtenVal, sent.kannadaSentence);
                      const words = sent.kannadaSentence.trim().split(/\s+/);
                      const revealedCount = revealedWordCounts[sentKey] || 0;

                      return (
                        <div 
                          key={sentIdx} 
                          className={`rounded-xl border transition-all ${
                            isExpanded 
                              ? 'bg-white border-2 border-[#2D2926] shadow-md p-5' 
                              : 'bg-white/40 hover:bg-white border border-[#2D2926]/10 p-4 cursor-pointer'
                          }`}
                          onClick={() => {
                            if (!isExpanded) {
                              setActiveSentenceIndex(sentKey);
                            }
                          }}
                        >
                          {/* Sentence summary header line */}
                          <div className="flex items-start justify-between gap-3">
                            <div className="space-y-1.5 flex-1">
                              <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                  <span className="w-5 h-5 rounded-full bg-[#2D2926]/5 flex items-center justify-center text-xs font-mono font-bold text-[#2D2926]/75">
                                    {sentIdx + 1}
                                  </span>
                                  
                                  {practiceMode === 'standard' ? (
                                    <p className="text-lg font-medium text-[#2D2926] select-all">
                                      {sent.kannadaSentence}
                                    </p>
                                  ) : (
                                    <p className="text-lg font-serif font-bold text-[#7B241C] select-all italic">
                                      {sent.transliteration}
                                    </p>
                                  )}
                                </div>

                                {practiceMode === 'transliterated' && (
                                  <div className="ml-7 space-y-2">
                                    <div className="flex flex-wrap gap-1 mt-1">
                                      {words.map((w, wIdx) => {
                                        const isWordRevealed = wIdx < revealedCount;
                                        return (
                                          <span 
                                            key={wIdx} 
                                            className={`px-2 py-0.5 rounded-md text-xs font-serif transition-all ${
                                              isWordRevealed 
                                                ? 'bg-emerald-50 border border-emerald-200 text-emerald-900 font-medium' 
                                                : 'bg-stone-100/50 border border-dashed border-stone-200 text-stone-400'
                                            }`}
                                          >
                                            {isWordRevealed ? w : '??'}
                                          </span>
                                        );
                                      })}
                                    </div>
                                    <p className="text-xs text-[#2D2926]/75">
                                      {sent.translation}
                                    </p>
                                  </div>
                                )}

                                {practiceMode === 'standard' && (
                                  <>
                                    <p className="text-xs font-mono text-[#2D2926]/50 italic ml-7">
                                      {sent.transliteration}
                                    </p>
                                    <p className="text-xs text-[#2D2926]/75 ml-7">
                                      {sent.translation}
                                    </p>
                                  </>
                                )}
                              </div>
                            </div>

                            {/* Speaker button */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                speakText(sent.kannadaSentence);
                              }}
                              className="p-2 bg-white/80 hover:bg-[#2D2926] hover:text-[#FAF6F0] border border-[#2D2926]/10 rounded-lg transition-all text-[#2D2926] cursor-pointer"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Sentence Practice Sandbox Drawer */}
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="mt-4 pt-4 border-t border-[#2D2926]/10 space-y-4"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {/* Word-by-Word Reveal Controls (in transliterated mode) */}
                              {practiceMode === 'transliterated' && (
                                <div className="bg-indigo-50/55 p-4 rounded-xl border border-indigo-200/40 space-y-3">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-900 font-bold">
                                      <Eye className="w-4 h-4 text-indigo-600" />
                                      <span>{referenceLanguage === 'hi' ? 'कन्नड़ शब्द प्रकटीकरण' : 'Kannada Word Revealer'}</span>
                                    </div>
                                    <span className="text-xs font-mono text-indigo-700 font-medium">
                                      {revealedCount} / {words.length} {referenceLanguage === 'hi' ? 'शब्द प्रकट' : 'words revealed'}
                                    </span>
                                  </div>
                                  
                                  <div className="flex flex-wrap gap-2">
                                    <button
                                      onClick={() => {
                                        const nextCount = Math.min(words.length, revealedCount + 1);
                                        setRevealedWordCounts({ ...revealedWordCounts, [sentKey]: nextCount });
                                      }}
                                      disabled={revealedCount >= words.length}
                                      className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-50 disabled:bg-indigo-300 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer"
                                    >
                                      🔍 {referenceLanguage === 'hi' ? 'अगला शब्द प्रकट करें' : 'Reveal Next Word'}
                                    </button>
                                    
                                    <button
                                      onClick={() => {
                                        setRevealedWordCounts({ ...revealedWordCounts, [sentKey]: words.length });
                                      }}
                                      disabled={revealedCount === words.length}
                                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white disabled:opacity-50 disabled:bg-emerald-300 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer"
                                    >
                                      👁️ {referenceLanguage === 'hi' ? 'सभी शब्द' : 'Reveal All'}
                                    </button>

                                    <button
                                      onClick={() => {
                                        setRevealedWordCounts({ ...revealedWordCounts, [sentKey]: 0 });
                                      }}
                                      disabled={revealedCount === 0}
                                      className="px-3 py-1.5 bg-stone-200 hover:bg-stone-300 text-stone-700 disabled:opacity-50 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ml-auto"
                                    >
                                      🧹 {referenceLanguage === 'hi' ? 'छिपाएं' : 'Hide All'}
                                    </button>
                                  </div>
                                </div>
                              )}

                              {/* Grammar notes showcase */}
                              <div className="bg-[#FAF6F0] p-4 rounded-xl border border-[#2D2926]/10 space-y-2">
                                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#2D2926]/70 font-bold">
                                  <HelpCircle className="w-4 h-4 text-amber-600" />
                                  <span>{referenceLanguage === 'hi' ? 'व्याकरण विश्लेषण' : 'Grammar & Inflection Notes'}</span>
                                </div>
                                <p className="text-xs text-[#2D2926]/85 leading-relaxed">
                                  {sent.grammarNotes}
                                </p>
                              </div>

                              {/* Interactive typing input */}
                              <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                  <label className="text-xs font-mono font-bold uppercase text-[#2D2926]/70 flex items-center gap-1">
                                    <PenTool className="w-3.5 h-3.5 text-indigo-600" />
                                    <span>
                                      {practiceMode === 'transliterated' 
                                        ? (referenceLanguage === 'hi' ? 'लिप्यंतरण के आधार पर कन्नड़ वाक्य लिखें:' : 'Write the Kannada Translation corresponding to the Transliteration:')
                                        : (referenceLanguage === 'hi' ? 'इस वाक्य को नीचे अक्षरों में कॉपी-टाइप करें:' : 'Copy-Type This Kannada Sentence to Practice:')}
                                    </span>
                                  </label>
                                  {writtenVal && (
                                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${
                                      accuracyScore === 100 
                                        ? 'bg-emerald-100 text-emerald-800' 
                                        : accuracyScore > 60 
                                          ? 'bg-amber-100 text-amber-800' 
                                          : 'bg-stone-100 text-stone-700'
                                    }`}>
                                      {referenceLanguage === 'hi' ? 'सटीकता: ' : 'Accuracy: '}{accuracyScore}%
                                    </span>
                                  )}
                                </div>

                                <textarea
                                  rows={2}
                                  value={writtenVal}
                                  onChange={(e) => {
                                    setUserWritingInputs({
                                      ...userWritingInputs,
                                      [sentKey]: e.target.value
                                    });
                                  }}
                                  placeholder={referenceLanguage === 'hi' ? 'कन्नड़ अक्षरों का मिलान करने के लिए यहाँ टाइप करना शुरू करें...' : 'Begin typing here to match the exact Kannada characters... (Use standard Kannada keyboard)'}
                                  className="w-full px-4 py-3 border border-[#2D2926]/20 bg-[#FAF6F0]/20 rounded-xl text-sm focus:outline-none focus:border-[#2D2926] font-sans text-[#2D2926] resize-none"
                                />

                                {/* Interactive Evaluation Response */}
                                <div className="flex justify-between items-center text-[11px] text-[#2D2926]/60">
                                  <div className="flex gap-2">
                                    <button 
                                      onClick={() => {
                                        setUserWritingInputs({
                                          ...userWritingInputs,
                                          [sentKey]: sent.kannadaSentence
                                        });
                                      }}
                                      className="hover:underline font-bold text-stone-800 flex items-center gap-1 cursor-pointer"
                                    >
                                      <span>{referenceLanguage === 'hi' ? 'स्वतः पूर्ण गाइड' : 'Fill Sample'}</span>
                                    </button>
                                    <span>•</span>
                                    <button 
                                      onClick={() => {
                                        setUserWritingInputs({ ...userWritingInputs, [sentKey]: '' });
                                      }}
                                      className="hover:underline text-[#7B241C] cursor-pointer"
                                    >
                                      {referenceLanguage === 'hi' ? 'रीसेट' : 'Reset'}
                                    </button>
                                  </div>

                                  {accuracyScore === 100 && (
                                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                                      <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-100" />
                                      <span>{referenceLanguage === 'hi' ? 'शानदार लेखन!' : 'Perfect match! Beautiful.'}</span>
                                    </span>
                                  )}
                                </div>
                              </div>

                              {/* Collapse button */}
                              <div className="flex justify-end pt-1">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveSentenceIndex(null);
                                  }}
                                  className="text-xs font-mono text-[#2D2926]/40 hover:text-[#2D2926] flex items-center gap-1 py-1 cursor-pointer"
                                >
                                  <span>{referenceLanguage === 'hi' ? 'समेटें (Collapse)' : 'Collapse Details'}</span>
                                  <ChevronUp className="w-3 h-3" />
                                </button>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Vocab highlights segment */}
            {essay.vocabHighlight && essay.vocabHighlight.length > 0 && (
              <div className="bg-[#FAF6F0] rounded-3xl border-2 border-[#2D2926] p-8 space-y-6 shadow-[2px_2px_0px_0px_rgba(45,41,38,1)]">
                <div className="text-center space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-[#2D2926]/50 uppercase block font-bold">
                    {referenceLanguage === 'hi' ? 'ಶಬ್ದಕೋಶ ಸಂಗ್ರಹ' : 'ESSAY VOCABULARY HIGHLIGHTS'}
                  </span>
                  <h3 className="text-2xl font-serif text-[#2D2926] font-bold">
                    {referenceLanguage === 'hi' ? 'महत्वपूर्ण शब्दावली की व्याख्या' : 'Essential Vocabulary Board'}
                  </h3>
                  <p className="text-xs text-[#2D2926]/60">
                    {referenceLanguage === 'hi' 
                      ? 'इस निबंध में प्रयुक्त महत्वपूर्ण शब्दों का उनके उच्चारण और अर्थ के साथ अध्ययन करें।' 
                      : 'Analyze and review key lexical tokens featured in this essay prose formulation.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {essay.vocabHighlight.map((v, vIdx) => (
                    <div key={vIdx} className="bg-white p-4 rounded-2xl border border-[#2D2926]/10 flex flex-col justify-between space-y-3 hover:shadow-xs transition-all">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-[#2D2926]/40">#{vIdx + 1}</span>
                          <button
                            onClick={() => speakText(v.word)}
                            className="p-1 hover:bg-[#2D2926]/5 rounded-md text-[#2D2926]/60 hover:text-[#2D2926] transition-all cursor-pointer"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <h4 className="text-xl font-bold text-[#2D2926] select-all tracking-wide">{v.word}</h4>
                        <p className="text-xs font-mono text-[#2D2926]/50 italic">{v.transliteration}</p>
                      </div>
                      <div className="border-t border-[#2D2926]/5 pt-2">
                        <p className="text-xs font-serif text-[#2D2926]/90 leading-snug font-medium">{v.meaning}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Choose new essay trigger button */}
            <div className="flex justify-center pt-4">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 border-2 border-[#2D2926] hover:bg-[#FAF6F0] text-[#2D2926] font-serif font-bold rounded-xl text-sm transition-all flex items-center gap-2 bg-white cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>{referenceLanguage === 'hi' ? 'शीर्ष पर वापस जाएं और नया चुनें' : 'Go back to top and choose another topic'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
