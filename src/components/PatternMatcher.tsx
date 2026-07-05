import React, { useState } from 'react';
import { KANNADA_ALPHABETS } from '../data/alphabets';
import { AlphabetCharacter } from '../types';
import { motion } from 'motion/react';
import { Volume2, Award, Zap, HelpCircle, RefreshCw } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const PatternMatcher: React.FC = () => {
  const { referenceLanguage, getTranslatedChar, translateSubCategory, t } = useLanguage();
  const [activePatternMode, setActivePatternMode] = useState<'vowel-duration' | 'breathing-intensity' | 'mouth-location'>('vowel-duration');
  const [soundSupported] = useState('speechSynthesis' in window);

  const speak = (char: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(char);
      utterance.lang = 'kn-IN';
      utterance.rate = 0.75;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Helper selectors
  const getCharByKannada = (ka: string): AlphabetCharacter | undefined => {
    return KANNADA_ALPHABETS.find((c) => c.kannadaChar === ka);
  };

  return (
    <div id="pattern-matching-container" className="space-y-8">
      {/* Description header */}
      <div id="pattern-intro-card" className="bg-white border-2 border-[#2D2926] p-6 flex flex-col md:flex-row gap-6 items-center justify-between shadow-[4px_4px_0px_0px_rgba(45,41,38,1)]">
        <div className="space-y-1.5 text-center md:text-left">
          <h3 className="text-xl font-serif text-[#2D2926] flex items-center justify-center md:justify-start gap-2.5">
            <Zap className="h-5 w-5 text-[#7B241C]" />
            {t('interactiveSymmetries')}
          </h3>
          <p className="text-sm font-serif italic text-[#2D2926]/80 max-w-2xl">
            {t('symmetriesDesc')}
          </p>
        </div>

        <div id="pattern-pills" className="flex bg-[#F5EFEB] p-1 border border-[#2D2926]">
          {[
            { id: 'vowel-duration', label: t('durationTab') },
            { id: 'breathing-intensity', label: t('breathingTab') },
            { id: 'mouth-location', label: t('mouthTab') }
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActivePatternMode(mode.id as typeof activePatternMode)}
              className={`px-3 py-2 text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                activePatternMode === mode.id
                  ? 'bg-[#7B241C] text-white border border-[#2D2926]'
                  : 'text-[#2D2926]/70 hover:text-[#2D2926] hover:bg-white/50'
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      {/* --- MODE 1: VOWELS SHORT VS LONG --- */}
      {activePatternMode === 'vowel-duration' && (
        <div id="vowel-duration-section" className="space-y-6">
          <div id="mode-summary-p" className="text-center max-w-xl mx-auto space-y-1">
            <h4 className="text-xl font-serif text-[#7B241C] italic">{t('swarasSymmetriesTitle')}</h4>
            <p className="text-xs font-mono uppercase tracking-widest text-[#2D2926]/60">
              {t('swarasSymmetriesDesc')}
            </p>
          </div>

          <div id="vowel-pair-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { short: 'ಅ', long: 'ಆ', hint: t('vowelPairHint1') },
              { short: 'ಇ', long: 'ಈ', hint: t('vowelPairHint2') },
              { short: 'ಉ', long: 'ಊ', hint: t('vowelPairHint3') },
              { short: 'ಎ', long: 'ಏ', hint: t('vowelPairHint4') },
              { short: 'ಒ', long: 'ಓ', hint: t('vowelPairHint5') },
            ].map((pair, index) => {
              const shortObj = getCharByKannada(pair.short);
              const longObj = getCharByKannada(pair.long);
              const tShort = shortObj ? getTranslatedChar(shortObj) : null;
              const tLong = longObj ? getTranslatedChar(longObj) : null;
              const translitShort = tShort?.englishSymbol || '';
              const translitLong = tLong?.englishSymbol || '';
              return (
                <div key={index} className="bg-white border border-[#2D2926]/30 p-5 space-y-4 flex flex-col justify-between hover:border-[#7B241C]/80 hover:shadow-sm transition-all duration-150">
                  <div className="flex justify-between items-center text-[9px] font-mono text-[#2D2926]/50">
                    <span>PAIR #{index + 1}</span>
                    <span className="text-[#7B241C] font-semibold">{t('hrasvaVsDeerghaLabel')}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 divide-x divide-[#2D2926]/10 text-center py-3 bg-[#F5EFEB]/30 border border-[#2D2926]/10">
                    {/* Short Vowel */}
                    <div className="space-y-2">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-stone-400">{t('hrasvaShortLabel')}</div>
                      <div className="text-4xl font-kannada font-bold text-[#2D2926]">{pair.short}</div>
                      <div className="text-xs font-mono font-bold text-stone-500">{translitShort}</div>
                      <button
                        onClick={() => speak(pair.short)}
                        className="p-1 px-2 mx-auto bg-white border border-[#2D2926]/20 text-[#2D2926]/60 hover:text-[#7B241C] hover:border-[#7B241C] transition-all text-[9.5px] font-mono flex items-center gap-1 cursor-pointer"
                      >
                        <Volume2 className="h-3 w-3" /> {t('speakAction')}
                      </button>
                    </div>

                    {/* Long Vowel */}
                    <div className="space-y-2">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-[#7B241C]/50">{t('deerghaLongLabel')}</div>
                      <div className="text-4xl font-kannada font-bold text-[#7B241C]">{pair.long}</div>
                      <div className="text-xs font-mono font-bold text-[#7B241C]">{translitLong}</div>
                      <button
                        onClick={() => speak(pair.long)}
                        className="p-1 px-2 mx-auto bg-white border border-[#2D2926]/20 text-[#2D2926]/60 hover:text-[#7B241C] hover:border-[#7B241C] transition-all text-[9.5px] font-mono flex items-center gap-1 cursor-pointer"
                      >
                        <Volume2 className="h-3 w-3" /> {t('speakAction')}
                      </button>
                    </div>
                  </div>

                  <div className="text-[11px] text-[#2D2926]/80 leading-relaxed italic font-serif bg-[#FBF9F5] p-2.5 rounded text-center border border-[#2D2926]/10">
                    {pair.hint}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* --- MODE 2: BREATH FORCE (Alpaprana vs Mahaprana) --- */}
      {activePatternMode === 'breathing-intensity' && (
        <div id="breathing-force-section" className="space-y-6">
          <div id="breathing-explain" className="text-center max-w-xl mx-auto space-y-1">
            <h4 className="text-xl font-serif text-[#7B241C] italic">{t('breathingTitle')}</h4>
            <p className="text-xs font-mono uppercase tracking-widest text-[#2D2926]/60">
              {t('breathingDesc')}
            </p>
          </div>

          <div id="consonant-breathing-pairs-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { aChar: 'ಕ', mChar: 'ಖ', row: t('gutturalLabel'), hint: t('alpaphranaHint1') },
              { aChar: 'ಗ', mChar: 'ಘ', row: t('gutturalLabel'), hint: t('alpaphranaHint2') },
              { aChar: 'ಚ', mChar: 'ಛ', row: t('palatalLabel'), hint: t('alpaphranaHint3') },
              { aChar: 'ಜ', mChar: 'ಝ', row: t('palatalLabel'), hint: t('alpaphranaHint4') },
              { aChar: 'ಟ', mChar: 'ಠ', row: t('retroflexLabel'), hint: t('alpaphranaHint5') },
              { aChar: 'ಡ', mChar: 'ಢ', row: t('retroflexLabel'), hint: t('alpaphranaHint6') },
              { aChar: 'ತ', mChar: 'ಥ', row: t('dentalLabel'), hint: t('alpaphranaHint7') },
              { aChar: 'ದ', mChar: 'ಧ', row: t('dentalLabel'), hint: t('alpaphranaHint8') },
              { aChar: 'ಪ', mChar: 'ಫ', row: t('labialLabel'), hint: t('alpaphranaHint9') },
              { aChar: 'ಬ', mChar: 'ಭ', row: t('labialLabel'), hint: t('alpaphranaHint10') },
            ].map((pair, index) => {
              const aObj = getCharByKannada(pair.aChar);
              const mObj = getCharByKannada(pair.mChar);
              const tA = aObj ? getTranslatedChar(aObj) : null;
              const tM = mObj ? getTranslatedChar(mObj) : null;
              const transA = tA?.englishSymbol || '';
              const transM = tM?.englishSymbol || '';
              return (
                <div key={index} className="bg-white border border-[#2D2926]/30 p-5 space-y-3.5 hover:shadow-sm transition-all duration-150">
                  <div className="flex justify-between items-center text-[9px] font-mono">
                    <span className="uppercase font-bold text-[#2D2926]/60">{pair.row}</span>
                    <span className="bg-[#7B241C]/5 text-[#7B241C] border border-[#7B241C]/20 px-1.5 py-0.5 text-[8.5px] font-bold">{t('aspirationUnitLabel')}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center py-2 bg-[#FBD5C5]/10 border border-[#2D2926]/10 rounded items-center">
                    {/* Alpaprana */}
                    <div className="p-2 border-r border-[#2D2926]/10">
                      <span className="block text-[9.5px] uppercase font-bold text-stone-400">{t('lightBreathLabel')}</span>
                      <span className="block text-4xl font-kannada font-bold text-[#2D2926] leading-normal">{pair.aChar}</span>
                      <span className="block text-xs font-mono text-stone-500 font-semibold">[ {transA} ]</span>
                      <button
                        onClick={() => speak(pair.aChar)}
                        className="mt-2.5 mx-auto p-1 bg-white hover:border-[#7B241C] hover:text-[#7B241C] text-[#2D2926]/70 text-[9.5px] font-mono border border-[#2D2926]/20 flex items-center gap-1 justify-center w-5/6 cursor-pointer"
                      >
                        <Volume2 className="h-3 w-3" /> {t('softLabel')}
                      </button>
                    </div>

                    {/* Mahaprana */}
                    <div className="p-2">
                      <span className="block text-[9.5px] uppercase font-bold text-[#7B241C]/60">{t('heavyBlastLabel')}</span>
                      <span className="block text-4xl font-kannada font-bold text-[#7B241C] leading-normal">{pair.mChar}</span>
                      <span className="block text-xs font-mono text-[#7B241C] font-semibold">[ {transM} ]</span>
                      <button
                        onClick={() => speak(pair.mChar)}
                        className="mt-2.5 mx-auto p-1 bg-white hover:border-[#7B241C] text-[#7B241C] text-[9.5px] font-mono border border-[#7B241C]/30 flex items-center gap-1 justify-center w-5/6 cursor-pointer hover:bg-[#7B241C]/5"
                      >
                        <Volume2 className="h-3 w-3" /> {t('forcefulLabel')}
                      </button>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#2D2926]/75 leading-normal text-center italic font-serif">
                    <strong>{t('glyphTipLabel')}:</strong> {pair.hint}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* --- MODE 3: TONGUE OR MOUTH LOCATIONS --- */}
      {activePatternMode === 'mouth-location' && (
        <div id="mouth-articulation-section" className="space-y-6">
          <div id="mouth-explain" className="text-center max-w-xl mx-auto space-y-1">
            <h4 className="text-xl font-serif text-[#7B241C] italic">{t('tongueMapTitle')}</h4>
            <p className="text-xs font-mono uppercase tracking-widest text-[#2D2926]/60">
              {t('tongueMapDesc')}
            </p>
          </div>

          <div id="mapping-interactive-grid" className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            {[
              {
                title: t('gutturalTitle'),
                sanskrit: t('gutturalSanskrit'),
                place: t('gutturalPlace'),
                chars: ['ಕ', 'ಖ', 'ಗ', 'ಘ', 'ಙ'],
                color: 'bg-[#F5EFEB]/20 text-[#2D2926] border-[#2D2926]/30',
                btnColor: 'bg-[#7B241C]',
                desc: t('gutturalDesc'),
              },
              {
                title: t('palatalTitle'),
                sanskrit: t('palatalSanskrit'),
                place: t('palatalPlace'),
                chars: ['ಚ', 'ಛ', 'ಜ', 'ಝ', 'ಞ'],
                color: 'bg-[#F2ECE4]/30 text-[#2D2926] border-[#2D2926]/30',
                btnColor: 'bg-[#C85A17]',
                desc: t('palatalDesc'),
              },
              {
                title: t('retroflexTitle'),
                sanskrit: t('retroflexSanskrit'),
                place: t('retroflexPlace'),
                chars: ['ಟ', 'ಠ', 'ಡ', 'ಢ', 'ಣ'],
                color: 'bg-[#F5EFEB]/20 text-[#2D2926] border-[#2D2926]/30',
                btnColor: 'bg-stone-700',
                desc: t('retroflexDesc'),
              },
              {
                title: t('dentalTitle'),
                sanskrit: t('dentalSanskrit'),
                place: t('dentalPlace'),
                chars: ['ತ', 'ಥ', 'ದ', 'ಧ', 'ನ'],
                color: 'bg-[#F2ECE4]/30 text-[#2D2926] border-[#2D2926]/30',
                btnColor: 'bg-[#7B241C]',
                desc: t('dentalDesc'),
              },
              {
                title: t('labialTitle'),
                sanskrit: t('labialSanskrit'),
                place: t('labialPlace'),
                chars: ['ಪ', 'ಫ', 'ಬ', 'ಭ', 'ಮ'],
                color: 'bg-[#F5EFEB]/20 text-[#2D2926] border-[#2D2926]/30',
                btnColor: 'bg-[#C85A17]',
                desc: t('labialDesc'),
              },
            ].map((pos, index) => (
              <div
                key={index}
                id={`articulation-group-card-${index}`}
                className={`flex flex-col justify-between border rounded-none p-5 space-y-4 shadow-[3px_3px_0px_0px_rgba(45,41,38,0.15)] ${pos.color}`}
              >
                <div className="space-y-1">
                  <span className="text-[9.5px] uppercase font-bold tracking-[0.2em] block opacity-60 font-mono">{t('indexBlockLabel')} {index + 1}</span>
                  <h5 className="font-serif italic text-base leading-tight font-bold">{pos.title}</h5>
                  <h6 className="text-[11px] font-mono font-semibold text-[#7B241C] uppercase tracking-wide">{pos.sanskrit}</h6>
                  <p className="text-[11px] leading-tight text-stone-500 pt-1 font-serif italic">{pos.place}</p>
                </div>

                <div className="bg-white/90 rounded-none p-3 border border-[#2D2926]/20 flex flex-wrap gap-2 justify-center">
                  {pos.chars.map((char) => {
                    const charObj = getCharByKannada(char);
                    const tChar = charObj ? getTranslatedChar(charObj) : null;
                    const displaySymbol = tChar?.englishSymbol || '';
                    return (
                      <button
                        key={char}
                        onClick={() => speak(char)}
                        title={`Pronounce ${char} (${displaySymbol})`}
                        className="w-10 h-10 flex flex-col items-center justify-center bg-white border border-[#2D2926]/30 hover:border-[#7B241C] hover:bg-[#711c1c]/5 active:scale-90 transition-all font-kannada font-bold text-[#2D2926] text-lg shadow-sm cursor-pointer"
                      >
                        <span className="leading-tight">{char}</span>
                        <span className="text-[9px] font-mono text-[#2D2926]/50 leading-none font-normal">{displaySymbol}</span>
                      </button>
                    );
                  })}
                </div>

                <p className="text-[11px] text-[#2D2926]/85 leading-relaxed bg-white/50 p-2.5 border border-[#2D2926]/10 font-serif italic">
                  {pos.desc}
                </p>
              </div>
            ))}
          </div>

          <div id="unstructured-mention" className="text-center text-xs text-[#2D2926]/80 bg-[#F5EFEB]/50 p-4 border border-[#2D2926]/25 font-serif italic">
            💡 <strong>{t('grammarianNoteTitle')}:</strong> {t('grammarianNoteDesc')}
          </div>
        </div>
      )}
    </div>
  );
};
