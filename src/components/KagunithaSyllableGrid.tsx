import React, { useState, useMemo, useEffect } from 'react';
import { KANNADA_ALPHABETS } from '../data/alphabets';
import { generateKagunitha, GeneratedKagunitha, KANNADA_MATRAS } from '../data/kagunitas';
import { motion } from 'motion/react';
import { Volume2, SpellCheck, Star, Layers, Plus, ArrowRight, Table, LayoutGrid, Info, X, Printer, ArrowLeft, EyeOff, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { HINDI_ALPHABET_MAP } from '../data/hindiTranslations';

const HINDI_VOWELS = [
  'अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ए (लघु)', 'ए', 'ऐ', 'ओ (लघु)', 'ओ', 'औ', 'अं', 'अः'
];

export const KagunithaSyllableGrid: React.FC<{ standalone?: boolean }> = ({ standalone = false }) => {
  const { referenceLanguage, setReferenceLanguage, t } = useLanguage();

  // Extract all consonants to offer as choices
  const consonants = useMemo(() => {
    return KANNADA_ALPHABETS.filter((char) => char.category === 'consonant');
  }, []);

  const [selectedConsonant, setSelectedConsonant] = useState<typeof consonants[0]>(consonants[0]);
  const [selectedSyllableIndex, setSelectedSyllableIndex] = useState<number | null>(0);
  const [viewMode, setViewMode] = useState<'poster' | 'cards'>(standalone ? 'poster' : 'poster');

  // Track hovers for the full interactive poster matrix
  const [hoveredRowId, setHoveredRowId] = useState<string | null>(null);
  const [hoveredColIndex, setHoveredColIndex] = useState<number | null>(null);

  // Standalone/Poster settings and zoom states
  const [fitViewport, setFitViewport] = useState<boolean>(true);
  const [zoomScale, setZoomScale] = useState<number>(0.75);
  const [controlsVisible, setControlsVisible] = useState<boolean>(true);
  const [isScrollable, setIsScrollable] = useState<boolean>(!standalone);

  // Auto-fit on mount or window resize if in standalone fitViewport mode
  useEffect(() => {
    if (standalone && fitViewport) {
      const handleResize = () => {
        const parentWidth = window.innerWidth - 32;
        const parentHeight = window.innerHeight - (controlsVisible ? 100 : 40);
        const tableWidth = 1350; // Approximated typical width of the table
        const tableHeight = 1750; // Approximated typical height of the table
        
        const scaleX = parentWidth / tableWidth;
        const scaleY = parentHeight / tableHeight;
        const bestScale = Math.max(0.25, Math.min(1.2, Math.min(scaleX, scaleY)));
        setZoomScale(Number(bestScale.toFixed(2)));
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [standalone, fitViewport, controlsVisible]);

  // Reset selected syllable when consonant changes
  React.useEffect(() => {
    setSelectedSyllableIndex(0);
  }, [selectedConsonant]);

  // Compute Kagunitha grid for the selected consonant (for cards view)
  const currentKagunithaList = useMemo(() => {
    return generateKagunitha(selectedConsonant.kannadaChar, selectedConsonant.englishSymbol);
  }, [selectedConsonant]);

  // Generate Kagunitha datasets for ALL consonants to power the poster view
  const allConsonantsKagunitha = useMemo(() => {
    return consonants.map((con) => {
      const hindiCon = HINDI_ALPHABET_MAP[con.id]?.hindiSymbol;
      return {
        consonant: con,
        hindiSymbol: hindiCon,
        syllables: generateKagunitha(con.kannadaChar, con.englishSymbol)
      };
    });
  }, [consonants]);

  const speak = (char: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(char);
      utterance.lang = 'kn-IN';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const getHindiSyllable = (hindiCon: string | undefined, index: number): string => {
    if (!hindiCon) return '';
    const baseCon = hindiCon.split('/')[0].trim();
    const matras = [
      '',      // ಅ
      'ा',     // ಆ
      'ि',     // ಇ
      'ी',     // ಈ
      'ु',     // ಉ
      'ू',     // ಊ
      'ृ',     // ಋ
      'े',     // ಎ (using standard mapping matching the vowel sound)
      'े',     // ಏ
      'ै',     // ಐ
      'ो',     // ಒ
      'ो',     // ಓ
      'ौ',     // ಔ
      'ं',     // ಂ
      'ः'      // ಃ
    ];
    return baseCon + (matras[index] || '');
  };

  const hindiConsonant = HINDI_ALPHABET_MAP[selectedConsonant.id]?.hindiSymbol;

  const slt = (en: string, hi: string) => {
    return referenceLanguage === 'hi' ? hi : en;
  };

  const selectedSyllable = selectedSyllableIndex !== null ? currentKagunithaList[selectedSyllableIndex] : null;

  // Helper to format matra symbols for visual chart display
  const getMatraDisplaySign = (sign: string) => {
    if (!sign) return '◌';
    return '◌' + sign;
  };

  const renderSyllableEquation = () => {
    if (selectedSyllableIndex === null || !selectedSyllable) return null;
    return (
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50 bg-white/95 backdrop-blur-md border-2 border-[#2D2926] p-4 shadow-[6px_6px_0px_0px_rgba(45,41,38,1)] rounded-lg transition-all duration-200 print:hidden">
        <div className="flex items-center justify-between border-b border-[#2D2926]/10 pb-2 mb-3">
          <div className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#7B241C]">
            {slt('Formula HUD — Active Syllable Combination', 'समीकरण प्रदर्शन पटल — सक्रिय मात्रा संयोग')}
          </div>
          <button
            onClick={() => setSelectedSyllableIndex(null)}
            className="text-stone-400 hover:text-stone-700 p-1 hover:bg-stone-100 rounded-full cursor-pointer transition-colors"
            title={slt('Close HUD', 'पटल बंद करें')}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-2 sm:gap-x-4">
          {/* Consonant */}
          <div className="flex flex-col items-center bg-[#F5EFEB]/40 p-2 border border-[#2D2926]/10 rounded min-w-[70px]">
            <span className="text-2xl font-serif font-bold text-[#2D2926]">{selectedConsonant.kannadaChar}</span>
            <span className="text-[10px] font-mono font-bold text-stone-500 uppercase mt-0.5">
              {referenceLanguage === 'hi' && hindiConsonant ? hindiConsonant.split('/')[0].trim() : selectedConsonant.englishSymbol}
            </span>
            <span className="text-[9px] font-mono text-stone-400 capitalize">{slt('consonant', 'व्यंजन')}</span>
          </div>
          
          <div className="text-stone-400 font-bold"><Plus className="h-4 w-4" /></div>

          {/* Matra Sign */}
          <div className="flex flex-col items-center bg-[#F5EFEB]/40 p-2 border border-[#2D2926]/10 rounded min-w-[70px]">
            <span className="text-2xl font-serif font-bold text-[#C0392B]">
              {getMatraDisplaySign(KANNADA_MATRAS[selectedSyllableIndex].matraSign)}
            </span>
            <span className="text-[10px] font-mono font-bold text-rose-800 uppercase mt-0.5">
              {KANNADA_MATRAS[selectedSyllableIndex].vowelChar}
            </span>
            <span className="text-[9px] font-mono text-stone-400 capitalize">
              {referenceLanguage === 'hi' ? 'मात्रा' : KANNADA_MATRAS[selectedSyllableIndex].matraName}
            </span>
          </div>

          <div className="text-[#7B241C] font-bold"><ArrowRight className="h-5 w-5" /></div>

          {/* Combined Result */}
          <div className="flex items-center gap-3 bg-[#7B241C]/5 p-2 px-4 border-2 border-[#7B241C] rounded shadow-sm">
            <div className="text-center">
              <span className="text-4xl font-kannada font-black text-[#7B241C]">
                {selectedSyllable.combinedChar}
              </span>
              <div className="text-xs font-mono font-bold text-emerald-800 leading-none mt-1">
                {selectedSyllable.transliteration}
              </div>
            </div>

            <button
              onClick={() => speak(selectedSyllable.combinedChar)}
              className="bg-[#7B241C] hover:bg-[#922B21] text-white p-2 rounded-full cursor-pointer transition-colors"
              title={slt('Play Pronunciation', 'उच्चारण सुनें')}
            >
              <Volume2 className="h-4 w-4" />
            </button>
          </div>

          {/* Direct Meaning/Hindi Mapping Context */}
          {referenceLanguage === 'hi' && hindiConsonant && (
            <div className="text-xs font-serif bg-stone-50 border border-stone-200 p-2 px-3 rounded text-stone-600 max-w-xs">
              <span className="font-bold block text-stone-700">देवनागरी समतुल्य:</span>
              {hindiConsonant.split('/')[0].trim()} + {HINDI_VOWELS[selectedSyllableIndex]} मात्रा ➔ <span className="font-bold text-emerald-800 text-sm">{getHindiSyllable(hindiConsonant, selectedSyllableIndex)}</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  if (standalone) {
    return (
      <div 
        id="standalone-poster-container" 
        className={`w-full bg-[#FDFBF7] text-[#2D2926] flex flex-col ${
          fitViewport ? 'h-screen overflow-hidden' : 'min-h-screen overflow-auto pb-16'
        }`}
      >
        {/* Floating/Sticky Controls Bar */}
        <div className={`p-4 bg-white/95 backdrop-blur-md border-b-2 border-[#2D2926] flex flex-wrap items-center justify-between gap-4 z-50 print:hidden transition-all duration-300 transform ${
          controlsVisible ? 'translate-y-0 relative' : '-translate-y-full absolute top-0 left-0 right-0 h-0 p-0 overflow-hidden border-b-0'
        }`}>
          <div className="flex items-center gap-3">
            <span className="inline-block border border-[#2D2926] px-2 py-0.5 font-serif font-normal rounded text-lg bg-[#F5EFEB] text-[#2D2926]">ಕ</span>
            <div>
              <h1 className="text-sm font-serif italic font-bold text-[#7B241C] leading-tight">
                {slt('Kannada Kagunitha Wall Poster Mode', 'कन्नड़ कागुणिता वॉल पोस्टर मोड')}
              </h1>
              <p className="text-[10px] text-stone-500 font-mono tracking-wider">
                {slt('DIGITIZED INTERACTIVE SCREEN PRESET', 'डिजिटलीकृत इंटरैक्टिव स्क्रीन प्रीसेट')}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            {/* Auto-fit toggle */}
            <label className="flex items-center gap-2 cursor-pointer font-bold font-mono select-none">
              <input
                type="checkbox"
                checked={fitViewport}
                onChange={(e) => setFitViewport(e.target.checked)}
                className="rounded border-[#2D2926] text-[#7B241C] focus:ring-[#7B241C] h-4 w-4"
              />
              <span>{slt('Fit Viewport (No Scrollbars)', 'स्क्रीन में फिट करें (बिना स्क्रोल)')}</span>
            </label>

            {/* Scale Slider */}
            <div className="flex items-center gap-2 select-none">
              <span className="font-bold font-mono text-stone-500">{slt('Zoom:', 'ज़ूम:')}</span>
              <input
                type="range"
                min="0.25"
                max="1.50"
                step="0.05"
                value={zoomScale}
                onChange={(e) => {
                  setZoomScale(parseFloat(e.target.value));
                  setFitViewport(false); // Switch off auto-fit if manual zoom is adjusted
                }}
                className="w-24 accent-[#7B241C] cursor-pointer"
              />
              <span className="font-mono font-bold w-12 text-right">{(zoomScale * 100).toFixed(0)}%</span>
            </div>

            {/* Language Switcher */}
            <div className="flex border border-[#2D2926] p-0.5 bg-[#F5EFEB] select-none">
              <button
                onClick={() => setReferenceLanguage('en')}
                className={`px-2 py-1 text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
                  referenceLanguage === 'en' ? 'bg-[#7B241C] text-white' : 'text-[#2D2926]/70 hover:text-[#2D2926]'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setReferenceLanguage('hi')}
                className={`px-2 py-1 text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
                  referenceLanguage === 'hi' ? 'bg-[#7B241C] text-white' : 'text-[#2D2926]/70 hover:text-[#2D2926]'
                }`}
              >
                हिन्दी
              </button>
            </div>

            {/* Print Button */}
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 border border-[#2D2926]/40 text-[#2D2926] font-bold font-mono uppercase tracking-wider text-[11px] rounded flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>{slt('Print', 'प्रिंट')}</span>
            </button>

            {/* Hide controls */}
            <button
              onClick={() => setControlsVisible(false)}
              className="px-3 py-1.5 bg-stone-800 hover:bg-stone-900 text-white font-bold font-mono uppercase tracking-wider text-[11px] rounded flex items-center gap-1.5 cursor-pointer"
              title={slt('Hide controls for clean presentation', 'प्रस्तुति के लिए सेटिंग्स छिपाएं')}
            >
              <EyeOff className="h-3.5 w-3.5" />
              <span>{slt('Hide Controls', 'छिपाएं')}</span>
            </button>

            {/* Back button */}
            <button
              onClick={() => {
                window.location.href = window.location.origin + window.location.pathname;
              }}
              className="px-3 py-1.5 bg-[#7B241C] hover:bg-[#922B21] text-white font-bold font-mono uppercase tracking-wider text-[11px] rounded flex items-center gap-1.5 border border-[#2D2926]/40 cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>{slt('Back', 'वापस')}</span>
            </button>
          </div>
        </div>

        {/* Small hover handler to reveal hidden controls at the very top */}
        {!controlsVisible && (
          <div className="fixed top-0 left-0 right-0 h-2 bg-transparent hover:bg-[#7B241C]/10 z-40 transition-colors cursor-pointer" onClick={() => setControlsVisible(true)} />
        )}

        {/* Dynamic button to show hidden controls */}
        {!controlsVisible && (
          <button
            onClick={() => setControlsVisible(true)}
            className="fixed top-2 left-1/2 -translate-x-1/2 bg-[#7B241C] hover:bg-[#922B21] text-white px-3 py-1.5 border-2 border-[#2D2926] rounded-full shadow-[2px_2px_0px_0px_rgba(45,41,38,1)] text-[10px] font-bold font-mono uppercase cursor-pointer z-50 flex items-center gap-1.5 shrink-0 select-none print:hidden transition-all"
          >
            <span>{slt('Show Settings Panel ▼', 'सेटिंग्स दिखाएं ▼')}</span>
          </button>
        )}

        {/* Main interactive poster stage */}
        <div 
          className={`flex-1 flex justify-center p-4 select-none ${
            fitViewport ? 'overflow-hidden items-center' : 'overflow-auto items-start'
          }`}
        >
          <div 
            id="poster-table-frame"
            className="transition-all duration-100 origin-center max-w-full"
            style={{ 
              zoom: zoomScale, 
              transform: undefined 
            } as any}
          >
            {/* Active Highlight Equation Board (Dynamic HUD) */}
            {renderSyllableEquation()}

            {/* Large Classroom Poster Wall Grid Frame */}
            <div className="border-4 border-[#2D2926] bg-[#FDFBF7] shadow-[12px_12px_0px_0px_rgba(45,41,38,1)] overflow-hidden rounded-md print:shadow-none print:border-2">
              
              {/* Poster Header Banner */}
              <div className="bg-[#FFFCEB] text-center p-5 border-b-2 border-[#2D2926] space-y-1 bg-radial from-[#FFFDEC] to-[#FFF9D4] print:p-3">
                <h2 className="text-2xl sm:text-3xl font-black tracking-wide text-[#7B241C] font-serif uppercase leading-tight">
                  {slt('Kannada Kagunitha Syllable Chart', 'कन्नड़ कागुणिता संयुक्त वर्ण चार्ट')}
                </h2>
                <div className="text-xs font-serif italic text-stone-600 flex justify-center items-center gap-2 max-w-xl mx-auto">
                  <div className="h-px bg-stone-300 flex-1"></div>
                  <span>{slt('Interactive Classroom Wall Poster', 'इंटरैक्टिव कक्षा दीवार पोस्टर')}</span>
                  <div className="h-px bg-stone-300 flex-1"></div>
                </div>
              </div>

              {/* Table wrapper with no height restriction in standalone mode */}
              <div className="overflow-x-auto scrollbar-thin">
                <table className="w-full border-collapse text-center relative select-none">
                  <thead>
                    <tr className="sticky top-0 z-30 bg-[#FFF5E6] border-b border-[#2D2926] print:static">
                      <th className="sticky left-0 top-0 z-40 bg-[#FFF1D0] border-r border-b-2 border-[#2D2926] p-3 text-xs font-mono font-bold text-[#2D2926] text-left uppercase min-w-[100px] print:static">
                        <div className="flex flex-col">
                          <span className="text-[#7B241C]">{slt('Swara ➔', 'स्वर ➔')}</span>
                          <span className="text-stone-600 mt-1">{slt('▼ Vyajana', '▼ व्यंजन')}</span>
                        </div>
                      </th>

                      {KANNADA_MATRAS.map((matra, idx) => {
                        const isColHighlighted = hoveredColIndex === idx || selectedSyllableIndex === idx;
                        return (
                          <th
                            key={idx}
                            onMouseEnter={() => setHoveredColIndex(idx)}
                            onMouseLeave={() => setHoveredColIndex(null)}
                            className={`p-3 text-center border-r border-[#2D2926]/20 transition-colors min-w-[75px] ${
                              isColHighlighted ? 'bg-amber-100' : 'bg-[#FFF5E6]'
                            }`}
                          >
                            <div className="text-2xl font-serif font-black text-[#2D2926] leading-none">
                              {matra.vowelChar}
                            </div>
                            <div className="text-[10px] font-mono text-stone-500 font-bold uppercase mt-1 leading-none">
                              {referenceLanguage === 'hi' ? HINDI_VOWELS[idx].split(' ')[0] : matra.vowelChar.toLowerCase()}
                            </div>
                          </th>
                        );
                      })}
                    </tr>

                    <tr className="sticky top-[58px] z-20 bg-[#FFECD1] border-b-2 border-[#2D2926] print:static">
                      <th className="sticky left-0 z-30 bg-[#FFE6BC] border-r border-b border-[#2D2926] p-2 text-[10px] font-mono font-bold text-stone-700 text-left uppercase print:static">
                        {slt('Vowel Sign', 'मात्रा चिह्न')}
                      </th>

                      {KANNADA_MATRAS.map((matra, idx) => {
                        const isColHighlighted = hoveredColIndex === idx || selectedSyllableIndex === idx;
                        return (
                          <th
                            key={idx}
                            onMouseEnter={() => setHoveredColIndex(idx)}
                            onMouseLeave={() => setHoveredColIndex(null)}
                            className={`p-2 border-r border-[#2D2926]/20 transition-colors ${
                              isColHighlighted ? 'bg-amber-100' : 'bg-[#FFECD1]'
                            }`}
                          >
                            <div className="text-xl sm:text-2xl font-serif font-black text-[#C0392B] leading-none">
                              {getMatraDisplaySign(matra.matraSign)}
                            </div>
                            <div className="text-[9px] font-mono text-stone-500 mt-0.5 leading-none">
                              {referenceLanguage === 'hi' ? 'मात्रा' : matra.matraName}
                            </div>
                          </th>
                        );
                      })}
                    </tr>
                  </thead>

                  <tbody className="bg-[#FFFDF3]">
                    {allConsonantsKagunitha.map((conRow) => {
                      const isRowHighlighted = hoveredRowId === conRow.consonant.id || selectedConsonant.id === conRow.consonant.id;
                      return (
                        <tr
                          key={conRow.consonant.id}
                          className={`border-b border-[#2D2926]/10 transition-colors ${
                            isRowHighlighted ? 'bg-amber-50/70' : 'odd:bg-[#FFFDF3] even:bg-[#FFFBF0]'
                          }`}
                          onMouseEnter={() => setHoveredRowId(conRow.consonant.id)}
                          onMouseLeave={() => setHoveredRowId(null)}
                        >
                          <td className={`sticky left-0 z-10 border-r-2 border-[#2D2926] text-left p-3 font-serif font-bold transition-colors print:static ${
                            isRowHighlighted ? 'bg-[#FFEFAF]' : 'bg-[#FFF8E7]'
                          }`}>
                            <div className="flex items-center justify-between gap-1.5">
                              <span className="text-xl sm:text-2xl text-[#2D2926] font-black">{conRow.consonant.kannadaChar}</span>
                              <span className="text-[10px] font-mono text-stone-500 font-bold uppercase shrink-0">
                                {referenceLanguage === 'hi' && conRow.hindiSymbol
                                  ? conRow.hindiSymbol.split('/')[0].trim()
                                  : conRow.consonant.englishSymbol}
                              </span>
                            </div>
                          </td>

                          {conRow.syllables.map((syllable, sIdx) => {
                            const isActiveCell = selectedConsonant.id === conRow.consonant.id && selectedSyllableIndex === sIdx;
                            const isColHighlighted = hoveredColIndex === sIdx || selectedSyllableIndex === sIdx;
                            return (
                              <td
                                key={sIdx}
                                onClick={() => {
                                  setSelectedConsonant(conRow.consonant);
                                  setSelectedSyllableIndex(sIdx);
                                  speak(syllable.combinedChar);
                                }}
                                onMouseEnter={() => setHoveredColIndex(sIdx)}
                                onMouseLeave={() => setHoveredColIndex(null)}
                                className={`p-2 border-r border-[#2D2926]/10 transition-all cursor-pointer text-center relative group min-w-[75px] hover:bg-amber-100 ${
                                  isActiveCell
                                    ? 'bg-[#7B241C]/10 ring-2 ring-inset ring-[#7B241C] z-10'
                                    : isColHighlighted && isRowHighlighted
                                      ? 'bg-amber-100'
                                      : isColHighlighted
                                        ? 'bg-amber-50/50'
                                        : ''
                                }`}
                              >
                                <div className={`text-xl sm:text-2xl font-kannada font-bold transition-transform group-hover:scale-110 duration-100 leading-none ${
                                  isActiveCell ? 'text-[#7B241C]' : 'text-[#2D2926]'
                                }`}>
                                  {syllable.combinedChar}
                                </div>
                                <div className="text-[11px] sm:text-xs font-mono font-medium text-[#2D2926]/50 group-hover:text-[#7B241C] transition-colors mt-1 leading-none">
                                  {syllable.transliteration}
                                </div>
                                {referenceLanguage === 'hi' && conRow.hindiSymbol && (
                                  <div className="text-[11px] sm:text-xs font-serif text-emerald-800 font-black opacity-75 group-hover:opacity-100 leading-none mt-1">
                                    {getHindiSyllable(conRow.hindiSymbol, sIdx)}
                                  </div>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Poster Footer Accent */}
              <div className="bg-[#FFE6BC] text-center py-2 px-4 border-t-2 border-[#2D2926] text-[10px] font-mono font-bold text-stone-600 tracking-wider">
                {slt('© DIGITIZED INTERACTIVE KANADIGARA CHART REFERENCE', '© डिजिटीकृत कन्नाडिगारा वर्णमाला संदर्भ चार्ट')}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="kagunitha-grid-container" className="space-y-8">
      {/* Intro and View Switcher */}
      <div id="syllable-intro" className="bg-white p-6 border-2 border-[#2D2926] space-y-5 shadow-[4px_4px_0px_0px_rgba(45,41,38,1)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#2D2926]/10 pb-4">
          <div className="space-y-1">
            <h3 className="text-xl font-serif text-[#2D2926] flex items-center gap-2.5">
              <SpellCheck className="h-5 w-5 text-[#7B241C]" />
              {t('syllabicIntro')}
            </h3>
            <p className="text-sm font-serif italic text-[#2D2926]/80 leading-relaxed max-w-2xl">
              {t('syllabicDesc')}
            </p>
          </div>

          {/* View Mode Switcher Pill */}
          <div className="flex bg-[#F5EFEB] p-1 border-2 border-[#2D2926] self-start md:self-center shrink-0">
            <button
              onClick={() => setViewMode('poster')}
              className={`flex items-center gap-1.5 py-1.5 px-3 text-xs font-bold uppercase tracking-wider font-mono transition-all cursor-pointer ${
                viewMode === 'poster'
                  ? 'bg-[#7B241C] text-white shadow-xs'
                  : 'text-[#2D2926]/70 hover:text-[#2D2926]'
              }`}
            >
              <Table className="h-3.5 w-3.5" />
              {slt('Wall Poster Mode', 'वॉल पोस्टर मोड')}
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`flex items-center gap-1.5 py-1.5 px-3 text-xs font-bold uppercase tracking-wider font-mono transition-all cursor-pointer ${
                viewMode === 'cards'
                  ? 'bg-[#7B241C] text-white shadow-xs'
                  : 'text-[#2D2926]/70 hover:text-[#2D2926]'
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              {slt('Detailed Cards', 'विस्तृत कार्ड')}
            </button>
          </div>
        </div>

        {/* Consonant Selector Bar (Only displayed in Detailed Cards View) */}
        {viewMode === 'cards' && (
          <div className="space-y-3 pt-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#2D2926]/60 font-mono">{t('selectConsonant')}</h4>
            <div id="consonants-carousel" className="flex gap-2 overflow-x-auto pb-3 pt-1 scrollbar-thin">
              {consonants.map((con) => {
                const conHindi = HINDI_ALPHABET_MAP[con.id]?.hindiSymbol;
                const isSelected = selectedConsonant.id === con.id;
                return (
                  <button
                    key={con.id}
                    id={`consonant-select-btn-${con.id}`}
                    onClick={() => setSelectedConsonant(con)}
                    className={`py-2 px-4 text-xl font-kannada font-bold transition-all cursor-pointer whitespace-nowrap flex flex-col items-center min-w-[65px] shrink-0 border ${
                      isSelected
                        ? 'bg-[#7B241C] text-white border-[#2D2926] shadow-sm'
                        : 'bg-[#FDFBF7] hover:bg-[#F5EFEB] text-[#2D2926]/90 border-[#2D2926]/20'
                    }`}
                  >
                    <span>{con.kannadaChar}</span>
                    <span className={`text-[10px] font-mono leading-none mt-1 ${
                      isSelected ? 'text-white/80' : 'text-[#2D2926]/50'
                    }`}>
                      {referenceLanguage === 'hi' && conHindi
                        ? `${conHindi} (${con.englishSymbol})`
                        : con.englishSymbol}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Small explanation about the Amazon style chart poster */}
        <div className="flex gap-2.5 items-start bg-[#FDFBF7] p-3 border border-[#2D2926]/20 text-xs text-[#2D2926]/80 font-serif rounded-sm">
          <Info className="h-4 w-4 text-[#7B241C] shrink-0 mt-0.5" />
          <p>
            {slt(
              'How to read: Vowels (Swara) are represented in the top row. Vowel signs (Matra symbols, shown in crimson red) specify how that vowel physically alters any consonant. Select any cell to view and hear the resulting combined syllable.',
              'पढ़ने का नियम: शीर्ष पंक्ति में स्वर (Swara) दिखाए गए हैं। मात्रा चिह्न (लाल रंग में) यह दर्शाते हैं कि वह स्वर किस प्रकार किसी व्यंजन के साथ जुड़ता है। संयुक्त रूप और उच्चारण सुनने के लिए तालिका में किसी भी खाने पर क्लिक करें।'
            )}
          </p>
        </div>
      </div>

      {/* Main Content Areas based on selected View Mode */}
      {viewMode === 'poster' ? (
        /* INTERACTIVE WALL POSTER MATRIX VIEW */
        <div id="kagunitha-poster-view" className="space-y-6 pb-32">
          
          {/* Active Highlight Equation Board (Dynamic HUD) */}
          {renderSyllableEquation()}

          {/* Poster Custom Controls Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-[#F5EFEB]/50 p-4 border-2 border-[#2D2926] rounded-md shadow-sm">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono font-bold text-[#2D2926]/60 uppercase tracking-wider">
                {slt('Poster View Options:', 'पोस्टर दृश्य विकल्प:')}
              </span>
              
              {/* Scrollbar Toggle */}
              <button
                onClick={() => setIsScrollable(!isScrollable)}
                className={`px-3 py-1.5 text-xs font-mono font-bold uppercase border-2 border-[#2D2926] transition-all cursor-pointer rounded shadow-[2px_2px_0px_0px_rgba(45,41,38,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(45,41,38,1)] ${
                  !isScrollable
                    ? 'bg-[#7B241C] text-white border-[#2D2926] shadow-sm hover:bg-[#922B21]'
                    : 'bg-white hover:bg-stone-100 text-[#2D2926]'
                }`}
                title={slt('Toggle between a scrollable container box and displaying the full tall poster without internal scrollbars', 'एक स्क्रॉल करने योग्य बॉक्स और बिना आंतरिक स्क्रॉल बार के पूरे लंबे पोस्टर को प्रदर्शित करने के बीच टॉगल करें')}
              >
                {!isScrollable ? slt('↕ Full Poster (No Scrollbars)', '↕ पूर्ण पोस्टर (कोई स्क्रोल नहीं)') : slt('↔ Compact Box (Scrollable)', '↔ कॉम्पैक्ट बॉक्स (स्क्रोल)')}
              </button>
            </div>

            <div className="flex items-center gap-3">
              {/* Standalone Button */}
              <button
                onClick={() => {
                  const url = window.location.origin + window.location.pathname + `?view=poster&lang=${referenceLanguage}`;
                  window.open(url, '_blank');
                }}
                className="px-4 py-1.5 text-xs font-bold font-mono uppercase bg-white hover:bg-[#F5EFEB] border-2 border-[#2D2926] text-[#7B241C] transition-all cursor-pointer rounded shadow-[2px_2px_0px_0px_rgba(45,41,38,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(45,41,38,1)] flex items-center gap-1.5"
                title={slt('Open in a clean standalone window with customizable zoom to fit any screen', 'किसी भी स्क्रीन पर फिट होने के लिए अनुकूलन योग्य ज़ूम के साथ एक साफ स्टैंडअलोन विंडो में खोलें')}
              >
                <span>{slt('Open Standalone Poster ↗', 'स्टैंडअलोन पोस्टर खोलें ↗')}</span>
              </button>
            </div>
          </div>

          {/* Large Classroom Poster Wall Grid Frame */}
          <div className="border-4 border-[#2D2926] bg-[#FDFBF7] shadow-[8px_8px_0px_0px_rgba(45,41,38,1)] overflow-hidden rounded-md">
            
            {/* Poster Header Banner */}
            <div className="bg-[#FFFCEB] text-center p-6 border-b-2 border-[#2D2926] space-y-1 bg-radial from-[#FFFDEC] to-[#FFF9D4]">
              <h2 className="text-2xl sm:text-3xl font-black tracking-wide text-[#7B241C] font-serif uppercase">
                {slt('Kannada Kagunitha Syllable Chart', 'कन्नड़ कागुणिता संयुक्त वर्ण चार्ट')}
              </h2>
              <div className="text-xs font-serif italic text-stone-600 flex justify-center items-center gap-2 max-w-xl mx-auto">
                <div className="h-px bg-stone-300 flex-1"></div>
                <span>{slt('Interactive Classroom Wall Poster', 'इंटरैक्टिव कक्षा दीवार पोस्टर')}</span>
                <div className="h-px bg-stone-300 flex-1"></div>
              </div>
            </div>

            {/* Scrollable Container with Custom Freeze Panes */}
            <div className={`scrollbar-thin ${isScrollable ? 'overflow-auto max-h-[600px]' : 'overflow-visible'}`}>
              <table className="w-full border-collapse text-center relative select-none">
                
                {/* STICKY TABLE HEADERS */}
                <thead>
                  {/* Row 1: Vowels (Swaras) */}
                  <tr className="sticky top-0 z-30 bg-[#FFF5E6] border-b border-[#2D2926]">
                    {/* Corner piece: intersection of headers */}
                    <th className="sticky left-0 top-0 z-40 bg-[#FFF1D0] border-r border-b-2 border-[#2D2926] p-3 text-xs font-mono font-bold text-[#2D2926] text-left uppercase min-w-[100px]">
                      <div className="flex flex-col">
                        <span className="text-[#7B241C]">{slt('Swara ➔', 'स्वर ➔')}</span>
                        <span className="text-stone-600 mt-1">{slt('▼ Vyajana', '▼ व्यंजन')}</span>
                      </div>
                    </th>

                    {KANNADA_MATRAS.map((matra, idx) => {
                      const isColHighlighted = hoveredColIndex === idx || selectedSyllableIndex === idx;
                      return (
                        <th
                          key={idx}
                          onMouseEnter={() => setHoveredColIndex(idx)}
                          onMouseLeave={() => setHoveredColIndex(null)}
                          className={`p-3 text-center border-r border-[#2D2926]/20 transition-colors min-w-[75px] ${
                            isColHighlighted ? 'bg-amber-100' : 'bg-[#FFF5E6]'
                          }`}
                        >
                          <div className="text-2xl font-serif font-black text-[#2D2926] leading-none">
                            {matra.vowelChar}
                          </div>
                          <div className="text-[10px] font-mono text-stone-500 font-bold uppercase mt-1 leading-none">
                            {referenceLanguage === 'hi' ? HINDI_VOWELS[idx].split(' ')[0] : matra.vowelChar.toLowerCase()}
                          </div>
                        </th>
                      );
                    })}
                  </tr>

                  {/* Row 2: Vowel Signs (Matras) in crimson red, matching the original Amazon poster */}
                  <tr className="sticky top-[58px] z-20 bg-[#FFECD1] border-b-2 border-[#2D2926]">
                    <th className="sticky left-0 z-30 bg-[#FFE6BC] border-r border-b border-[#2D2926] p-2 text-[10px] font-mono font-bold text-stone-700 text-left uppercase">
                      {slt('Vowel Sign', 'मात्रा चिह्न')}
                    </th>

                    {KANNADA_MATRAS.map((matra, idx) => {
                      const isColHighlighted = hoveredColIndex === idx || selectedSyllableIndex === idx;
                      return (
                        <th
                          key={idx}
                          onMouseEnter={() => setHoveredColIndex(idx)}
                          onMouseLeave={() => setHoveredColIndex(null)}
                          className={`p-2 border-r border-[#2D2926]/20 transition-colors ${
                            isColHighlighted ? 'bg-amber-100' : 'bg-[#FFECD1]'
                          }`}
                        >
                          {/* Dotted circle base to visualize the matra attachment */}
                          <div className="text-xl sm:text-2xl font-serif font-black text-[#C0392B] leading-none">
                            {getMatraDisplaySign(matra.matraSign)}
                          </div>
                          <div className="text-[9px] font-mono text-stone-500 mt-0.5 leading-none">
                            {referenceLanguage === 'hi' ? 'मात्रा' : matra.matraName}
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>

                {/* TABLE BODY (34 Consonant Rows) */}
                <tbody className="bg-[#FFFDF3]">
                  {allConsonantsKagunitha.map((conRow) => {
                    const isRowHighlighted = hoveredRowId === conRow.consonant.id || selectedConsonant.id === conRow.consonant.id;
                    return (
                      <tr
                        key={conRow.consonant.id}
                        className={`border-b border-[#2D2926]/10 transition-colors ${
                          isRowHighlighted ? 'bg-amber-50/70' : 'odd:bg-[#FFFDF3] even:bg-[#FFFBF0]'
                        }`}
                        onMouseEnter={() => setHoveredRowId(conRow.consonant.id)}
                        onMouseLeave={() => setHoveredRowId(null)}
                      >
                        {/* Sticky Left Column: Consonant Identifier */}
                        <td className={`sticky left-0 z-10 border-r-2 border-[#2D2926] text-left p-3 font-serif font-bold transition-colors ${
                          isRowHighlighted ? 'bg-[#FFEFAF]' : 'bg-[#FFF8E7]'
                        }`}>
                          <div className="flex items-center justify-between gap-1.5">
                            <span className="text-xl sm:text-2xl text-[#2D2926] font-black">{conRow.consonant.kannadaChar}</span>
                            <span className="text-[10px] font-mono text-stone-500 font-bold uppercase shrink-0">
                              {referenceLanguage === 'hi' && conRow.hindiSymbol
                                ? conRow.hindiSymbol.split('/')[0].trim()
                                : conRow.consonant.englishSymbol}
                            </span>
                          </div>
                        </td>

                        {/* Kagunitha Syllables Cells */}
                        {conRow.syllables.map((syllable, sIdx) => {
                          const isActiveCell = selectedConsonant.id === conRow.consonant.id && selectedSyllableIndex === sIdx;
                          const isColHighlighted = hoveredColIndex === sIdx || selectedSyllableIndex === sIdx;
                          return (
                            <td
                              key={sIdx}
                              onClick={() => {
                                setSelectedConsonant(conRow.consonant);
                                setSelectedSyllableIndex(sIdx);
                                speak(syllable.combinedChar);
                              }}
                              onMouseEnter={() => setHoveredColIndex(sIdx)}
                              onMouseLeave={() => setHoveredColIndex(null)}
                              className={`p-2 border-r border-[#2D2926]/10 transition-all cursor-pointer text-center relative group min-w-[75px] hover:bg-amber-100 ${
                                isActiveCell
                                  ? 'bg-[#7B241C]/10 ring-2 ring-inset ring-[#7B241C] z-10'
                                  : isColHighlighted && isRowHighlighted
                                    ? 'bg-amber-100'
                                    : isColHighlighted
                                      ? 'bg-amber-50/50'
                                      : ''
                              }`}
                            >
                              <div className={`text-xl sm:text-2xl font-kannada font-bold transition-transform group-hover:scale-110 duration-100 leading-none ${
                                isActiveCell ? 'text-[#7B241C]' : 'text-[#2D2926]'
                              }`}>
                                {syllable.combinedChar}
                              </div>
                              <div className="text-[11px] sm:text-xs font-mono font-medium text-[#2D2926]/50 group-hover:text-[#7B241C] transition-colors mt-1 leading-none">
                                {syllable.transliteration}
                              </div>
                              {referenceLanguage === 'hi' && conRow.hindiSymbol && (
                                <div className="text-[11px] sm:text-xs font-serif text-emerald-800 font-black opacity-75 group-hover:opacity-100 leading-none mt-1">
                                  {getHindiSyllable(conRow.hindiSymbol, sIdx)}
                                </div>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Poster Footer Accent */}
            <div className="bg-[#FFE6BC] text-center py-2 px-4 border-t-2 border-[#2D2926] text-[10px] font-mono font-bold text-stone-600 tracking-wider">
              {slt('© DIGITIZED INTERACTIVE KANADIGARA CHART REFERENCE', '© डिजिटीकृत कन्नाडिगारा वर्णमाला संदर्भ चार्ट')}
            </div>
          </div>
        </div>
      ) : (
        /* DETAILED CARDS VIEW */
        <div id="syllables-subcontainer" className="space-y-4 pb-32">
          {renderSyllableEquation()}

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-1 gap-2 border-b border-[#2D2926]/10 pb-2">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#2D2926]/60 font-mono flex items-center gap-2">
              <Layers className="h-4 w-4 text-[#2D2926]/40" />
              {t('durationCombo')} &quot;{selectedConsonant.kannadaChar} ({
                referenceLanguage === 'hi' && hindiConsonant
                  ? `${hindiConsonant} / ${selectedConsonant.englishSymbol}`
                  : selectedConsonant.englishSymbol
              })&quot;
            </h4>

            <span className="text-[10px] text-[#2D2926]/50 font-serif italic">
              {t('cellClickTip')}
            </span>
          </div>

          <div id="syllables-grid" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {currentKagunithaList.map((item, index) => {
              const isSelected = selectedSyllableIndex === index;
              return (
                <motion.div
                  key={index}
                  id={`syllable-box-${index}`}
                  onClick={() => {
                    setSelectedSyllableIndex(index);
                    speak(item.combinedChar);
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.12, delay: index * 0.015 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`p-4 text-center cursor-pointer transition-all relative group flex flex-col justify-between min-h-[220px] h-auto border-2 ${
                    isSelected
                      ? 'border-[#7B241C] bg-[#7B241C]/5 shadow-[3px_3px_0px_0px_rgba(123,36,28,1)]'
                      : 'bg-white border-[#2D2926]/20 hover:border-[#7B241C] hover:shadow-[3px_3px_0px_0px_rgba(123,36,28,0.1)]'
                  }`}
                >
                  {/* Vowel representation banner */}
                  <div className="flex justify-between items-center text-[10px] sm:text-xs font-bold font-mono">
                    <span className={`font-semibold border px-1.5 py-0.5 ${
                      isSelected 
                        ? 'bg-[#7B241C] text-white border-[#7B241C]' 
                        : 'bg-[#7B241C]/5 text-[#7B241C] border-[#7B241C]/20'
                    }`}>
                      &nbsp;{referenceLanguage === 'hi' ? `${HINDI_VOWELS[index]} मात्र` : `${item.vowelChar} Sign`}&nbsp;
                    </span>
                    <span className="opacity-60 text-[#2D2926] text-[10px] sm:text-xs">{item.matraName}</span>
                  </div>

                  {/* Combined Syllable Character */}
                  <div className="py-2.5">
                    <div className={`text-5xl sm:text-6xl font-kannada font-bold leading-none transition-colors ${
                      isSelected ? 'text-[#7B241C]' : 'text-[#2D2926] group-hover:text-[#7B241C]'
                    }`}>
                      {item.combinedChar}
                    </div>
                    <div className="mt-2 flex flex-col gap-1.5 justify-center items-center">
                      <span className="text-xs sm:text-sm font-mono font-bold text-[#7B241C] bg-[#7B241C]/5 px-2 py-0.5 rounded">
                        [ {item.transliteration} ]
                      </span>
                      {referenceLanguage === 'hi' && hindiConsonant && (
                        <span className="text-emerald-800 text-sm sm:text-base font-serif font-extrabold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                          {getHindiSyllable(hindiConsonant, index)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Sound logic details */}
                  <div className="mt-2.5 text-[11px] sm:text-xs bg-[#F5EFEB]/40 p-2 border border-[#2D2926]/10 flex items-center justify-between font-mono gap-1.5 rounded-sm">
                    <span className="text-[#2D2926]/90 shrink-0 font-semibold font-kannada text-xs sm:text-sm text-left">
                      {selectedConsonant.kannadaChar}್ + {item.vowelChar}
                      {referenceLanguage === 'hi' && hindiConsonant && (
                        <span className="text-stone-500 font-sans text-[11px] sm:text-xs font-bold block mt-1">
                          ({hindiConsonant.split('/')[0].trim()}् + {HINDI_VOWELS[index].split(' ')[0]})
                        </span>
                      )}
                    </span>

                    <button
                      id={`speak-syllable-${index}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSyllableIndex(index);
                        speak(item.combinedChar);
                      }}
                      className={`p-1.5 rounded cursor-pointer ${
                        isSelected ? 'text-[#7B241C] bg-[#7B241C]/10' : 'text-[#2D2926] hover:bg-[#2D2926]/10'
                      }`}
                    >
                      <Volume2 className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
