import React, { useState, useEffect } from 'react';
import { KANNADA_ALPHABETS } from '../data/alphabets';
import { AlphabetCharacter, QuizQuestion, WordExample } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, Award, CheckCircle2, AlertCircle, ArrowRight, RefreshCw, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const QuizSection: React.FC = () => {
  const { referenceLanguage } = useLanguage();
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Helper generator to construct 5 unique questions at a time
  const generateNewQuiz = () => {
    const list: QuizQuestion[] = [];
    
    // Choose 5 random characters from our directory
    const shuffledChars = [...KANNADA_ALPHABETS].sort(() => 0.5 - Math.random());
    const slice = shuffledChars.slice(0, 5);

    slice.forEach((char, idx) => {
      const qTypes: QuizQuestion['type'][] = ['identify-char', 'identify-word-char', 'match-transliteration', 'vowel-duration'];
      // Filter types that don't apply
      let type: QuizQuestion['type'] = qTypes[idx % qTypes.length];
      if (type === 'vowel-duration' && char.category !== 'vowel') {
        type = 'match-transliteration';
      }

      let text = '';
      let correctAnswer = '';
      let options: string[] = [];
      let wordSelected: WordExample | undefined;

      const hintTranslation = referenceLanguage === 'hi'
        ? (char.pronunciationHint
            .replace("pronounced like", "उच्चारण जैसे")
            .replace("sounds like", "ध्वनि जैसे")
            .replace("short", "छोटा")
            .replace("long", "लंबा")
            .replace("vowel", "स्वर")
            .replace("consonant", "व्यंजन")
            .replace("as in", "जैसे कि"))
        : char.pronunciationHint;

      if (type === 'identify-char') {
        correctAnswer = char.kannadaChar;
        text = referenceLanguage === 'hi'
          ? `कौन सा कन्नड़ वर्ण "${char.englishSymbol}" जैसी ध्वनि उत्पन्न करता है? (उच्चारण निर्देश: ${hintTranslation})`
          : `Which Kannada alphabet sounds like "${char.englishSymbol}"? (Pronunciation tip: ${char.pronunciationHint})`;
        
        // Generate distractors
        const others = KANNADA_ALPHABETS.filter((c) => c.id !== char.id && c.category === char.category)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map((c) => c.kannadaChar);

        options = [correctAnswer, ...others].sort(() => 0.5 - Math.random());
      } 
      else if (type === 'identify-word-char') {
        // Pick one word from character's list
        const rex = char.examples[Math.floor(Math.random() * char.examples.length)];
        wordSelected = rex;
        correctAnswer = char.kannadaChar;
        text = referenceLanguage === 'hi'
          ? `कन्नड़ शब्द "${rex.kannadaWord}" (${rex.transliteration} जिसका अर्थ "${rex.englishMeaning}" है) के मूल स्वर की परिभाषा कौन सा वर्ण देता है?`
          : `Which alphabet starts or defines the core sound for the Kannada word "${rex.kannadaWord}" (${rex.transliteration} - meaning "${rex.englishMeaning}")?`;

        const others = KANNADA_ALPHABETS.filter((c) => c.id !== char.id && c.category === char.category)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map((c) => c.kannadaChar);

        options = [correctAnswer, ...others].sort(() => 0.5 - Math.random());
      } 
      else if (type === 'match-transliteration') {
        correctAnswer = char.englishSymbol;
        text = referenceLanguage === 'hi'
          ? `कन्नड़ वर्ण "${char.kannadaChar}" के लिए सही ध्वन्यात्मक उच्चारण कुंजी क्या है?`
          : `What is the phonetic pronunciation sound key for the character "${char.kannadaChar}"?`;

        const others = KANNADA_ALPHABETS.filter((c) => c.id !== char.id)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map((c) => c.englishSymbol);

        options = [correctAnswer, ...others].sort(() => 0.5 - Math.random());
      } 
      else { // vowel-duration
        const shortLabel = referenceLanguage === 'hi' ? 'ह्रस्व (Hrasva - लघु स्वर)' : 'Hrasva (Short)';
        const longLabel = referenceLanguage === 'hi' ? 'दीर्घ (Deergha - लंबा स्वर)' : 'Deergha (Long)';
        
        correctAnswer = char.subCategory?.includes('Short') ? shortLabel : longLabel;
        text = referenceLanguage === 'hi'
          ? `स्वर "${char.kannadaChar}" (उच्चारण "${char.englishSymbol}") की समीक्षा करें। इसकी ध्वन्यात्मक अवधि (Phonetic Duration) श्रेणी क्या है?`
          : `Reviewing the vowel "${char.kannadaChar}" (pronounced "${char.englishSymbol}"). What is its phonetic duration category?`;
        options = [shortLabel, longLabel];
      }

      list.push({
        id: `q_${idx}_${Date.now()}`,
        type,
        text,
        character: char,
        word: wordSelected,
        options,
        correctAnswer
      });
    });

    setQuestions(list);
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setQuizCompleted(false);
  };

  useEffect(() => {
    generateNewQuiz();
  }, [referenceLanguage]);

  const handleAnswerSubmit = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);

    const activeQuestion = questions[currentIdx];
    const isCorrect = option === activeQuestion.correctAnswer;

    if (isCorrect) {
      setScore((s) => s + 1);
      setStreak((st) => st + 1);
    } else {
      setStreak(0);
    }

    // Play pronunciation audio automatically if correct
    if ('speechSynthesis' in window && activeQuestion.character) {
      const soundString = activeQuestion.word 
        ? activeQuestion.word.kannadaWord 
        : activeQuestion.character.kannadaChar;
      
      const utterance = new SpeechSynthesisUtterance(soundString);
      utterance.lang = 'kn-IN';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((c) => c + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const currentQuestion = questions[currentIdx];

  return (
    <div id="quiz-wrapper-card" className="max-w-xl mx-auto bg-white border-2 border-[#2D2926] shadow-[6px_6px_0px_0px_rgba(45,41,38,1)] overflow-hidden">
      {/* Banner info */}
      <div className="bg-[#F5EFEB]/70 border-b-2 border-[#2D2926] p-5 flex justify-between items-center">
        <div>
          <h3 className="font-serif italic font-bold text-lg text-[#7B241C] flex items-center gap-2 leading-none">
            <Award className="h-4 w-4 text-[#7B241C]" /> {referenceLanguage === 'hi' ? 'भाषाई समीक्षा परीक्षण' : 'Linguistic Review Check'}
          </h3>
          <span className="text-[10px] uppercase font-mono tracking-wider text-[#2D2926]/60 mt-1 block">
            {referenceLanguage === 'hi' ? 'ध्वनि संरचना और लिप्यंतरण कौशल का परीक्षण करें' : 'Test pattern & transliteration skills'}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-[9px] uppercase tracking-wider text-[#2D2926]/60 font-mono leading-none">
              {referenceLanguage === 'hi' ? 'सिलसिला' : 'Streak'}
            </div>
            <div className="text-sm font-bold font-mono text-[#7B241C] flex items-center justify-end gap-0.5 mt-0.5">
              <Star className="h-3 w-3 fill-[#7B241C] text-[#7B241C] animate-pulse" /> {streak}
            </div>
          </div>
          <div className="bg-[#7B241C] text-white px-2 py-1 text-xs font-bold font-mono border border-[#2D2926]">
            {referenceLanguage === 'hi' ? 'प्रश्न' : 'Q'}: {currentIdx + 1}/{questions.length}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!quizCompleted && currentQuestion ? (
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-6 space-y-6"
          >
            {/* Question Text (Rendered First for Natural Reading Order) */}
            <div className="space-y-1">
              <span className="text-[10px] text-[#7B241C] font-bold tracking-[0.2em] font-mono uppercase block">
                {referenceLanguage === 'hi' ? 'प्रश्न पाठ' : 'Question Prompt'}
              </span>
              <p className="text-base font-serif italic text-[#2D2926] leading-relaxed">
                {currentQuestion.text}
              </p>
            </div>

            {/* Display character/word nicely if available in question without giving away the answer */}
            {currentQuestion.character && (
              <div className="flex justify-center items-center py-6 bg-[#F5EFEB]/30 border border-[#2D2926]/25 relative rounded-xs select-none">
                <div className="text-center space-y-3">
                  <span className="text-7xl font-kannada font-bold text-[#2D2926] block">
                    {currentQuestion.type === 'identify-char' && !isAnswered ? (
                      <span className="text-5xl font-mono text-[#7B241C] animate-pulse">?</span>
                    ) : currentQuestion.word ? (
                      currentQuestion.word.kannadaWord
                    ) : (
                      currentQuestion.character.kannadaChar
                    )}
                  </span>
                  
                  <div className="flex justify-center h-6">
                    {currentQuestion.word ? (
                      <span className="text-xs font-bold px-2.5 py-0.5 bg-[#7B241C]/5 text-[#7B241C] border border-[#7B241C]/20 font-mono">
                        {referenceLanguage === 'hi'
                          ? `कन्नड़ शब्द`
                          : `Kannada Word`}
                        {isAnswered ? ` : ${currentQuestion.word.transliteration}` : ''}
                      </span>
                    ) : (
                      <span className="text-xs font-bold px-2.5 py-0.5 bg-[#7B241C]/5 text-[#7B241C] border border-[#7B241C]/20 font-mono">
                        {currentQuestion.type === 'match-transliteration' && !isAnswered ? (
                          referenceLanguage === 'hi' ? 'ध्वनि: ?' : 'Sound: ?'
                        ) : (
                          referenceLanguage === 'hi' 
                            ? `ध्वनि: [ ${currentQuestion.character.englishSymbol} ]` 
                            : `Sound: [ ${currentQuestion.character.englishSymbol} ]`
                        )}
                      </span>
                    )}
                  </div>
                </div>

                {/* Pronunciation Audio Assist (disabled unless answered or for identify questions where audio is requested) */}
                <button
                  type="button"
                  onClick={() => {
                    if ('speechSynthesis' in window && currentQuestion.character) {
                      const soundString = currentQuestion.word 
                        ? currentQuestion.word.kannadaWord 
                        : currentQuestion.character.kannadaChar;
                      const utterance = new SpeechSynthesisUtterance(soundString);
                      utterance.lang = 'kn-IN';
                      utterance.rate = 0.8;
                      window.speechSynthesis.speak(utterance);
                    }
                  }}
                  className="absolute right-3.5 bottom-3.5 p-2 bg-white hover:bg-[#F5EFEB] border border-[#2D2926]/20 text-[#7B241C] rounded-full shadow-xs cursor-pointer hover:scale-105 transition-all"
                  title={referenceLanguage === 'hi' ? 'उच्चारण सुनें' : 'Listen to Pronunciation'}
                >
                  <Volume2 className="h-4 w-4" />
                </button>
              </div>
            )}

            {/* Choice Buttons */}
            <div className="grid grid-cols-1 gap-2.5">
              {currentQuestion.options.map((opt) => {
                const isSelected = selectedAnswer === opt;
                const isCorrectVal = opt === currentQuestion.correctAnswer;
                
                let btnStyle = 'border-[#2D2926]/30 hover:border-[#7B241C] bg-[#FDFBF7] text-[#2D2926]/90';
                if (isAnswered) {
                  if (isCorrectVal) {
                    btnStyle = 'border-emerald-700 bg-emerald-500/10 text-emerald-950 font-bold';
                  } else if (isSelected) {
                    btnStyle = 'border-[#7B241C] bg-[#7B241C]/5 text-[#7B241C] font-bold';
                  } else {
                    btnStyle = 'border-[#2D2926]/10 opacity-40 bg-stone-50 text-stone-400';
                  }
                }

                return (
                  <button
                    key={opt}
                    id={`choice-btn-${opt}`}
                    disabled={isAnswered}
                    onClick={() => handleAnswerSubmit(opt)}
                    className={`w-full p-4 rounded-none text-left border transition-all text-sm flex items-center justify-between cursor-pointer ${btnStyle}`}
                  >
                    <span className="font-serif">{opt}</span>
                    {isAnswered && isCorrectVal && (
                      <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                    )}
                    {isAnswered && isSelected && !isCorrectVal && (
                      <AlertCircle className="h-4 w-4 text-[#7B241C]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Dynamic feedback panel */}
            <AnimatePresence>
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-none border text-xs leading-relaxed space-y-2.5 ${
                    selectedAnswer === currentQuestion.correctAnswer
                      ? 'bg-emerald-500/5 text-emerald-950 border-emerald-400/30'
                      : 'bg-rose-500/5 text-[#7B241C] border-[#7B241C]/20'
                  }`}
                >
                  <div className="font-bold flex items-center gap-1">
                    {selectedAnswer === currentQuestion.correctAnswer ? (
                      <span className="font-serif italic text-sm text-emerald-800">
                        {referenceLanguage === 'hi' ? '🎉 पूर्ण उत्कृष्टता!' : '🎉 Absolute Excellence!'}
                      </span>
                    ) : (
                      <span className="font-serif italic text-sm text-[#7B241C]">
                        {referenceLanguage === 'hi' ? '💡 ध्वन्यात्मक अनुस्मारक' : '💡 Phonetic Reminders'}
                      </span>
                    )}
                  </div>
                  <div className="font-serif italic text-[#2D2926]/80 text-sm">
                    {referenceLanguage === 'hi' ? (
                      <>
                        कन्नड़ वर्ण <strong>{currentQuestion.character?.kannadaChar}</strong> का ध्वन्यात्मक लिप्यंतरण &quot;{currentQuestion.character?.englishSymbol || ''}&quot; है। उच्चारण निर्देश: {
                          currentQuestion.character?.pronunciationHint
                            .replace("pronounced like", "उच्चारण जैसे")
                            .replace("sounds like", "ध्वनि जैसे")
                            .replace("short", "छोटा")
                            .replace("long", "लंबा")
                            .replace("vowel", "स्वर")
                            .replace("consonant", "व्यंजन")
                            .replace("as in", "जैसे कि")
                        }
                      </>
                    ) : (
                      <>
                        {currentQuestion.character?.kannadaChar} is phonetic for &quot;{currentQuestion.character?.englishSymbol || ''}&quot;. Voice hint: {currentQuestion.character?.pronunciationHint}
                      </>
                    )}
                  </div>
                  {currentQuestion.word && (
                    <div className="font-mono pt-1.5 border-t border-[#2D2926]/10 text-[11px] text-[#2D2926]/70">
                      {referenceLanguage === 'hi' ? (
                        <>
                          शब्दावली संदर्भ: <strong>{currentQuestion.word.kannadaWord}</strong> का अर्थ &quot;{currentQuestion.word.englishMeaning}&quot; है।
                        </>
                      ) : (
                        <>
                          Vocabulary: <strong>{currentQuestion.word.kannadaWord}</strong> means &quot;{currentQuestion.word.englishMeaning}&quot;.
                        </>
                      )}
                    </div>
                  )}

                  <button
                    id="next-quiz-btn"
                    onClick={handleNext}
                    className="w-full mt-2 py-2.5 px-4 bg-[#7B241C] text-white border border-[#2D2926] hover:bg-[#7B241C]/90 transition-all font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {referenceLanguage === 'hi' ? 'अगला प्रश्न' : 'Next Question'} <ArrowRight className="h-3 w-3" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 text-center space-y-6 bg-white"
          >
            <div className="w-16 h-16 bg-[#F5EFEB] text-[#7B241C] border border-[#2D2926] rounded-full flex items-center justify-center mx-auto text-3xl">
              ✒️
            </div>

            <div className="space-y-1.5">
              <h4 className="text-2xl font-serif text-[#2D2926] italic">
                {referenceLanguage === 'hi' ? 'अभ्यास सत्र पूर्ण हुआ' : 'Training Iteration Complete'}
              </h4>
              <p className="text-sm font-serif italic text-[#2D2926]/70">
                {referenceLanguage === 'hi' 
                  ? `आपने ${questions.length} में से ${score} भाषाई पैटर्न को सफलतापूर्वक समझा और उनकी समीक्षा की।` 
                  : `You successfully recognized and reviewed ${score} out of ${questions.length} linguistic patterns.`}
              </p>
            </div>

            {/* Score circle gauge */}
            <div className="inline-block relative bg-[#F5EFEB]/30 p-4 border border-[#2D2926]/20">
              <div className="text-4xl font-extrabold text-[#7B241C] font-mono">
                {Math.round((score / questions.length) * 100)}%
              </div>
              <div className="text-[9px] text-[#2D2926]/60 font-bold uppercase tracking-widest mt-1 font-mono">
                {referenceLanguage === 'hi' ? 'सटीकता ग्रेड' : 'Accuracy Grade'}
              </div>
            </div>

            <p className="text-xs text-[#2D2926]/70 max-w-sm mx-auto italic font-serif leading-relaxed">
              {referenceLanguage === 'hi'
                ? 'नियमित रूप से ध्वन्यात्मक मैपिंग का परीक्षण करने से अक्षरों की पहचान में गति आती है और कन्नड़ अक्षरों के नियम सुदृढ़ होते हैं।'
                : 'Consistently testing your articulation mappings speeds up character fluency and solidifies retention of Aksharamale rules.'}
            </p>

            <button
              id="restart-quiz-btn"
              onClick={generateNewQuiz}
              className="w-full py-3 px-4 bg-[#7B241C] text-white font-bold uppercase tracking-wider text-xs border border-[#2D2926] hover:bg-[#721c1c] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <RefreshCw className="h-4 w-4" /> {referenceLanguage === 'hi' ? 'नया अभ्यास सत्र शुरू करें' : 'Restart New Iteration'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
