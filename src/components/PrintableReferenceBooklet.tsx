import React, { useRef, useState } from 'react';
import { 
  Printer, 
  Download, 
  BookOpen, 
  Award,
  BookMarked,
  Info,
  CheckCircle2,
  FileText,
  ChevronRight,
  Eye,
  Maximize
} from 'lucide-react';
import { KANNADA_ALPHABETS } from '../data/alphabets';
import { KANNADA_MATRAS, generateKagunitha } from '../data/kagunitas';
import { OTTAKSHARA_DATA } from '../data/ottaksharas';

const sajathiyaExamples = [
  { cons: 'ಕ', vattu: '್ಕ', combined: 'ಕ್ಕ', trans: 'kka', word: 'ಅಕ್ಕ', wordTrans: 'Akka', meaning: 'Elder Sister' },
  { cons: 'ಗ', vattu: '್ಗ', combined: 'ಗ್ಗ', trans: 'gga', word: 'ಮೊಗ್ಗು', wordTrans: 'Moggu', meaning: 'Flower Bud' },
  { cons: 'ಚ', vattu: '್ಚ', combined: 'ಚ್ಚ', trans: 'chcha', word: 'ಅಚ್ಚರಿ', wordTrans: 'Acchari', meaning: 'Wonder / Surprise' },
  { cons: 'ಜ', vattu: '್ಜ', combined: 'ಜ್ಜ', trans: 'jja', word: 'ಅಜ್ಜಿ', wordTrans: 'Ajji', meaning: 'Grandmother' },
  { cons: 'ಟ', vattu: '್ಟ', combined: 'ಟ್ಟ', trans: 'tta', word: 'ಪೆಟ್ಟಿಗೆ', wordTrans: 'Pettige', meaning: 'Box / Chest' },
  { cons: 'ಡ', vattu: '್ಡ', combined: 'ಡ್ಡ', trans: 'dda', word: 'ಲಡ್ಡು', wordTrans: 'Laddu', meaning: 'Sweet / Laddu' },
  { cons: 'ಣ', vattu: '್ಣ', combined: 'ಣ್ಣ', trans: 'nna', word: 'ಬಣ್ಣ', wordTrans: 'Banna', meaning: 'Color / Paint' },
  { cons: 'ತ', vattu: '್ತ', combined: 'ತ್ತ', trans: 'tta', word: 'ಕತ್ತೆ', wordTrans: 'Katte', meaning: 'Donkey' },
  { cons: 'ದ', vattu: '್ದ', combined: 'ದ್ದ', trans: 'dda', word: 'ಮುದ್ದು', wordTrans: 'Muddu', meaning: 'Cute / Loving' },
  { cons: 'ನ', vattu: '್ನ', combined: 'ನ್ನ', trans: 'nna', word: 'ಕನ್ನಡ', wordTrans: 'Kannada', meaning: 'Kannada language' },
  { cons: 'ಪ', vattu: '್ಪ', combined: 'ಪ್ಪ', trans: 'ppa', word: 'ಅಪ್ಪ', wordTrans: 'Appa', meaning: 'Father / Papa' },
  { cons: 'ಬ', vattu: '್ಬ', combined: 'ಬ್ಬ', trans: 'bba', word: 'ಹಬ್ಬ', wordTrans: 'Habba', meaning: 'Festival / Holiday' },
  { cons: 'ಮ', vattu: '್ಮ', combined: 'ಮ್ಮ', trans: 'mma', word: 'ಅಮ್ಮ', wordTrans: 'Amma', meaning: 'Mother / Mom' },
  { cons: 'ಯ', vattu: '್ಯ', combined: 'ಯ್ಯ', trans: 'yya', word: 'ಅಯ್ಯ', wordTrans: 'Ayya', meaning: 'Sir / Respect word' },
  { cons: 'ಲ', vattu: '್ಲ', combined: 'ಲ್ಲ', trans: 'lla', word: 'ಹಲ್ಲು', wordTrans: 'Hallu', meaning: 'Tooth' },
  { cons: 'ವ', vattu: '್ವ', combined: 'ವ್ವ', trans: 'vva', word: 'ಅವ್ವ', wordTrans: 'Avva', meaning: 'Mother / Elder woman' },
  { cons: 'ಸ', vattu: '್ಸ', combined: 'ಸ್ಸ', trans: 'ssa', word: 'ಬಸ್ಸು', wordTrans: 'Bassu', meaning: 'Bus' },
  { cons: 'ಳ', vattu: '್ಳ', combined: 'ಳ್ಳ', trans: 'lla', word: 'ಕಳ್ಳ', wordTrans: 'Kalla', meaning: 'Thief / Rogue' }
];

const vijathiyaExamples = [
  { base: 'ತ', sub: 'ಯ', combined: 'ತ್ಯ', trans: 'tya', word: 'ಸತ್ಯ', wordTrans: 'Sathya', meaning: 'Truth / Honest' },
  { base: 'ದ', sub: 'ಯ', combined: 'ದ್ಯ', trans: 'dya', word: 'ವಿದ್ಯೆ', wordTrans: 'Vidye', meaning: 'Knowledge / Study' },
  { base: 'ಕ', sub: 'ಷ', combined: 'ಕ್ಷ', trans: 'ksha', word: 'ರಕ್ಷಣೆ', wordTrans: 'Rakshane', meaning: 'Protection / Safety' },
  { base: 'ಷ', sub: 'ಟ', combined: 'ಷ್ಟ', trans: 'shta', word: 'ಕಷ್ಟ', wordTrans: 'Kashta', meaning: 'Difficulty / Hardship' },
  { base: 'ಪ', sub: 'ರ', combined: 'ಪ್ರ', trans: 'pra', word: 'ಪ್ರಕಾಶ', wordTrans: 'Prakaasha', meaning: 'Light / Brightness' },
  { base: 'ಕ', sub: 'ರ', combined: 'ಕ್ರ', trans: 'kra', word: 'ಕ್ರಮ', wordTrans: 'Krama', meaning: 'Order / Sequence' },
  { base: 'ದ', sub: 'ವ', combined: 'ದ್ವ', trans: 'dwa', word: 'ದ್ವಾರ', wordTrans: 'Dwaara', meaning: 'Gateway / Portal' },
  { base: 'ಸ', sub: 'ತ', combined: 'ಸ್ತ', trans: 'sta', word: 'ಪುಸ್ತಕ', wordTrans: 'Pusthaka', meaning: 'Book' },
  { base: 'ರ', sub: 'ಯ', combined: 'ರ್ಯ', trans: 'rya', word: 'ಸೂರ್ಯ', wordTrans: 'Soorya', meaning: 'Sun' },
  { base: 'ರ', sub: 'ಗ', combined: 'ರ್ಗ', trans: 'rga', word: 'ಮಾರ್ಗ', wordTrans: 'Maarga', meaning: 'Path / Route' },
  { base: 'ಶ', sub: 'ಚ', combined: 'ಶ್ಚ', trans: 'shcha', word: 'ಪಶ್ಚಿಮ', wordTrans: 'Pashchima', meaning: 'West' },
  { base: 'ಷ', sub: 'ಠ', combined: 'ಷ್ಠ', trans: 'shtha', word: 'ಶ್ರೇಷ್ಠ', wordTrans: 'Shreshtha', meaning: 'Best / Eminent' }
];

const essaySentences = [
  {
    kannada: "ಕನ್ನಡ ಭಾಷೆಯು ಅತ್ಯಂತ ಪ್ರಾಚೀನವೂ ಸುಂದರವೂ ಆದ ಭಾಷೆಯಾಗಿದೆ. ನಮ್ಮ ನಾಡಿನಲ್ಲಿ ಕಾವ್ಯ, ಕಲೆ ಮತ್ತು ವಿಜ್ಞಾನಗಳು ಒಟ್ಟಾಗಿ ಬೆಳೆದಿವೆ.",
    transliteration: "Kannaḍa bhāṣeyu atyanta prācīnavū sundaravū āda bhāṣeyāgide. Namma nāḍinalli kāvya, kale mattu vijñānagaḷu oṭṭāgi beḷedive.",
    translation: "The Kannada language is extremely ancient and beautiful. In our land, poetry, art, and science have flourished together.",
    analysis: "Focus: Sajathiya 'ನ್ನ' (nn) & 'ಲ್ಲ' (ll), Vijathiya 'ತ್ಯ' (ty) & 'ವ್ಯ' (vy)"
  },
  {
    kannada: "ಸೂರ್ಯ, ಚಂದ್ರ, ಮತ್ತು ಪ್ರಕೃತಿಯ ಸೌಂದರ್ಯವನ್ನು ಕವಿಗಳು ತಮ್ಮ ಕೃತಿಗಳಲ್ಲಿ ಅದ್ಭುತವಾಗಿ ವರ್ಣಿಸಿದ್ದಾರೆ.",
    transliteration: "Sūrya, candra, mattu prakṛtiya saundaryavannu kavigaḷu tamma kṛtigaḷalli adbhutavāgi varṇisiddāre.",
    translation: "Poets have magnificently described the beauty of the Sun, the Moon, and Nature in their literary works.",
    analysis: "Focus: Sajathiya 'ನ್ನ' (nn), Vijathiya 'ರ್ಯ' (ry), 'ಂದ್ರ' (ndr), 'ಪ್ರ' (pr) & 'ದ್ಭ' (dbh)"
  },
  {
    kannada: "ಸತ್ಯ ಮತ್ತು ಧರ್ಮದ ಹಾದಿಯಲ್ಲಿ ನಡೆದು, ಶ್ರೇಷ್ಠ ಇತಿಹಾಸವಿರುವ ನಮ್ಮ ಕನ್ನಡ ನಾಡಿನ ಭಾಷೆಯನ್ನು ರಕ್ಷಿಸುವುದು ನಮ್ಮ ಜವಾಬ್ದಾರಿ.",
    transliteration: "Satya mattu dharmada hādiyalli naḍedu, śrēṣṭha itihāsaviruva namma Kannaḍa nāḍina bhāṣeyannu rakṣisuvudu namma javābdāri.",
    translation: "Walking on the path of truth and righteousness, it is our responsibility to protect the language of our Kannada land which has a glorious history.",
    analysis: "Focus: Sajathiya 'ಮ್ಮ' (mm), Vijathiya 'ತ್ಯ' (ty), 'ರ್ಮ' (rm), 'ಶ್ರ' (shr), 'ಷ್ಠ' (shth), 'ಕ್ಷ' (ksh) & 'ಬ್ದ' (bd)"
  }
];

export function PrintableReferenceBooklet() {
  const [layoutMode, setLayoutMode] = useState<'booklet' | 'cheatsheet'>('booklet');
  const [kagunithaFontSize, setKagunithaFontSize] = useState<'normal' | 'large' | 'huge'>('large');

  // Extract Vowels, Consonants, and Digits from KANNADA_ALPHABETS
  const vowels = KANNADA_ALPHABETS.filter(item => item.category === 'vowel');
  const consonants = KANNADA_ALPHABETS.filter(item => item.category === 'consonant');
  const digits = KANNADA_ALPHABETS.filter(item => item.category === 'digit');

  // Group consonants phonetically into Vargs (Traditional 5x5 Grid) + Avargiya
  const kaVarga = consonants.filter(c => ['ಕ', 'ಖ', 'ಗ', 'ಘ', 'ಙ'].includes(c.kannadaChar));
  const chaVarga = consonants.filter(c => ['ಚ', 'ಛ', 'ಜ', 'ಝ', 'ಞ'].includes(c.kannadaChar));
  const taVargaRetro = consonants.filter(c => ['ಟ', 'ಠ', 'ಡ', 'ಢ', 'ಣ'].includes(c.kannadaChar));
  const taVargaDental = consonants.filter(c => ['ತ', 'ಥ', 'ದ', 'ಧ', 'ನ'].includes(c.kannadaChar));
  const paVarga = consonants.filter(c => ['ಪ', 'ಫ', 'ಬ', 'ಭ', 'ಮ'].includes(c.kannadaChar));
  const avargiya = consonants.filter(c => !['ಕ', 'ಖ', 'ಗ', 'ಘ', 'ಙ', 'ಚ', 'ಛ', 'ಜ', 'ಝ', 'ಞ', 'ಟ', 'ಠ', 'ಡ', 'ಢ', 'ಣ', 'ತ', 'ಥ', 'ದ', 'ಧ', 'ನ', 'ಪ', 'ಫ', 'ಬ', 'ಭ', 'ಮ'].includes(c.kannadaChar));

  // Key Representative Consonants for the Kagunitha Reference Matrix
  const sampleConsonants = [
    { char: 'ಕ', root: 'ka' },
    { char: 'ಗ', root: 'ga' },
    { char: 'ಚ', root: 'cha' },
    { char: 'ಜ', root: 'ja' },
    { char: 'ತ', root: 'ta' },
    { char: 'ದ', root: 'da' },
    { char: 'ನ', root: 'na' },
    { char: 'ಪ', root: 'pa' },
    { char: 'ಬ', root: 'ba' },
    { char: 'ಮ', root: 'ma' },
    { char: 'ಯ', root: 'ya' },
    { char: 'ರ', root: 'ra' },
    { char: 'ಲ', root: 'la' },
    { char: 'ವ', root: 'va' },
    { char: 'ಸ', root: 'sa' },
    { char: 'ಹ', root: 'ha' }
  ];

  // Extended numbers reference list for offline learning
  const offlineNumbers = [
    { digit: '೦', value: 0, name: 'Sonne', pronunciation: 'sohn-nay', literal: 'Zero' },
    { digit: '೧', value: 1, name: 'Ondu', pronunciation: 'ohn-doo', literal: 'One' },
    { digit: '೨', value: 2, name: 'Eradu', pronunciation: 'eh-ruh-doo', literal: 'Two' },
    { digit: '೩', value: 3, name: 'Mooru', pronunciation: 'moo-roo', literal: 'Three' },
    { digit: '೪', value: 4, name: 'Naalku', pronunciation: 'naal-koo', literal: 'Four' },
    { digit: '೫', value: 5, name: 'Aidu', pronunciation: 'eye-doo', literal: 'Five' },
    { digit: '೬', value: 6, name: 'Aaru', pronunciation: 'aa-roo', literal: 'Six' },
    { digit: '೭', value: 7, name: 'Yelu', pronunciation: 'yay-loo', literal: 'Seven' },
    { digit: '೮', value: 8, name: 'Entu', pronunciation: 'en-too', literal: 'Eight' },
    { digit: '೯', value: 9, name: 'Ombattu', pronunciation: 'ohm-buht-too', literal: 'Nine' },
    { digit: '೧೦', value: 10, name: 'Hattu', pronunciation: 'huht-too', literal: 'Ten' },
    { digit: '೨೦', value: 20, name: 'Ippattu', pronunciation: 'ip-puht-too', literal: 'Twenty' },
    { digit: '೩೦', value: 30, name: 'Moovattu', pronunciation: 'moo-vuht-too', literal: 'Thirty' },
    { digit: '೪೦', value: 40, name: 'Nalvattu', pronunciation: 'nuhl-vuht-too', literal: 'Forty' },
    { digit: '೫೦', value: 50, name: 'Aivattu', pronunciation: 'eye-vuht-too', literal: 'Fifty' },
    { digit: '೧೦೦', value: 100, name: 'Nooru', pronunciation: 'noo-roo', literal: 'One Hundred' }
  ];

  // Dynamically change page title to enforce professional PDF filename on save, then restore
  const triggerPdfDownload = () => {
    const originalTitle = document.title;
    const documentName = layoutMode === 'booklet' 
      ? "Kannada_Offline_Practice_Reference_Booklet_English_Medium" 
      : "Kannada_Compact_Reference_CheatSheet";
    
    document.title = documentName;
    window.print();
    // Use a slight timeout to restore the document title safely after the print spool starts
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  };

  // Split KANNADA_MATRAS into two halves to expand space in horizontal tables
  const matrasPart1 = KANNADA_MATRAS.slice(0, 8); // ಅ to ಎ
  const matrasPart2 = KANNADA_MATRAS.slice(8);    // ಏ to ಅಃ

  // Helper to resolve font size style class for Kannada syllables in the tables
  const getKagunithaFontClass = () => {
    if (kagunithaFontSize === 'normal') return 'text-xl py-1.5';
    if (kagunithaFontSize === 'huge') return 'text-4xl py-3.5';
    return 'text-3xl py-2.5'; // 'large' (default)
  };

  return (
    <div className="space-y-8 print:space-y-0 print:p-0">
      
      {/* 1. On-Screen Control Panel Dashboard (Hidden during printing) */}
      <div className="bg-[#FFF9EB] border-2 border-[#2D2926] p-6 rounded-xl flex flex-col gap-6 shadow-[4px_4px_0px_0px_rgba(45,41,38,1)] print:hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#7B241C]">
              <BookMarked className="h-5 w-5" />
              <span className="text-xs uppercase tracking-widest font-mono font-bold">Linguistic Print Service</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#2D2926]">Offline Reference Document Builder</h2>
            <p className="text-sm text-stone-600 max-w-2xl leading-relaxed font-sans">
              Export high-fidelity offline learning materials. Perfect for English medium students practicing Kannada stroke tracing, pronunciation drills, and syllable reading.
            </p>
          </div>

          <button
            onClick={triggerPdfDownload}
            className="w-full lg:w-auto px-6 py-4 bg-[#7B241C] hover:bg-[#922B21] text-white border-2 border-[#2D2926] rounded-xl font-bold font-sans tracking-wide uppercase text-sm shadow-[4px_4px_0px_0px_rgba(45,41,38,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(45,41,38,1)] transition-all flex items-center justify-center gap-3 shrink-0 cursor-pointer"
          >
            <Printer className="h-5 w-5" />
            <span>Download PDF / Print</span>
          </button>
        </div>

        <div className="border-t border-stone-200 pt-5 grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
          
          {/* Layout Mode selection */}
          <div className="space-y-3">
            <label className="block text-xs uppercase font-mono font-bold text-stone-500 tracking-wider">
              Choose Document Format
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setLayoutMode('booklet')}
                className={`p-3 text-left border-2 rounded-lg flex items-start gap-2.5 transition-all cursor-pointer ${
                  layoutMode === 'booklet'
                    ? 'border-[#7B241C] bg-[#7B241C]/5 text-[#7B241C]'
                    : 'border-stone-300 hover:border-stone-400 text-stone-600 bg-white'
                }`}
              >
                <BookOpen className="h-5 w-5 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="block font-bold">10-Page Workbook</span>
                  <span className="text-stone-500 text-[10px] block mt-0.5">Spacious, ideal for folder tracing booklets.</span>
                </div>
              </button>

              <button
                onClick={() => setLayoutMode('cheatsheet')}
                className={`p-3 text-left border-2 rounded-lg flex items-start gap-2.5 transition-all cursor-pointer ${
                  layoutMode === 'cheatsheet'
                    ? 'border-[#7B241C] bg-[#7B241C]/5 text-[#7B241C]'
                    : 'border-stone-300 hover:border-stone-400 text-stone-600 bg-white'
                }`}
              >
                <FileText className="h-5 w-5 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="block font-bold">2-Page Cheat Sheet</span>
                  <span className="text-stone-500 text-[10px] block mt-0.5">Compact summary, fits on single double-sided paper.</span>
                </div>
              </button>
            </div>
          </div>

          {/* Kagunitha Font size customizer */}
          <div className="space-y-3">
            <label className="block text-xs uppercase font-mono font-bold text-stone-500 tracking-wider">
              Kagunitha Syllable Font Size
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'normal', label: 'Medium', desc: 'Standard grid' },
                { id: 'large', label: 'Large (A4)', desc: 'Highly readable' },
                { id: 'huge', label: 'Extra Large', desc: 'Tracing helper' }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setKagunithaFontSize(opt.id as any)}
                  className={`p-2.5 border rounded-lg text-center transition-all cursor-pointer text-xs ${
                    kagunithaFontSize === opt.id
                      ? 'border-[#7B241C] bg-white text-[#7B241C] font-bold ring-2 ring-[#7B241C]/15'
                      : 'border-stone-200 bg-white hover:border-stone-300 text-stone-600'
                  }`}
                >
                  <span className="block font-bold">{opt.label}</span>
                  <span className="text-[9px] text-stone-400 block mt-0.5">{opt.desc}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Informative Tips Block */}
        <div className="bg-stone-50 border border-stone-200 p-4 rounded-lg flex gap-3 text-xs text-stone-600 leading-relaxed">
          <Info className="h-5 w-5 text-[#7B241C] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-stone-800 uppercase tracking-wide text-[10px] block font-mono">
              Saving as PDF Instructions:
            </span>
            <p>
              When the browser print dialog opens, set the <strong>Destination</strong> option to <strong>"Save as PDF"</strong>. Under <strong>More settings</strong>, check the box for <strong>"Background graphics"</strong> to ensure all colored highlights, borders, and accents are perfectly preserved in your download file.
            </p>
          </div>
        </div>
      </div>

      {/* Embedded CSS style blocks targeting browser print formatting */}
      <style>{`
        @media print {
          /* Enforce A4 dimensions and eliminate margin defaults */
          @page {
            size: A4 portrait;
            margin: 15mm 12mm 15mm 12mm;
          }
          
          /* Prevent outer body scrollbars/shadows */
          body {
            background: #ffffff !important;
            color: #000000 !important;
            font-size: 11pt;
          }
          
          /* iOS Safari Multi-page Print Fix */
          /* Reset parent layout restrictions so Safari can see content across multiple pages */
          html, body, #root, #application-container, #active-view-container, main, #booklet-view-wrapper {
            position: static !important;
            overflow: visible !important;
            height: auto !important;
            min-height: 0 !important;
            max-height: none !important;
            display: block !important;
            float: none !important;
            transform: none !important;
            filter: none !important;
            transition: none !important;
            animation: none !important;
            box-shadow: none !important;
            border: none !important;
            background: #ffffff !important;
          }

          /* Force the container wrapping the booklet pages to take full natural width and block flow */
          #application-container > div, #active-view-container, main {
            display: block !important;
            position: static !important;
            max-width: none !important;
            width: auto !important;
            padding: 0 !important;
            margin: 0 !important;
            box-shadow: none !important;
            background: transparent !important;
          }

          /* Enforce page breaks at specific class boundaries */
          .print-page-break {
            page-break-after: always !important;
            break-after: page !important;
            margin-top: 0 !important;
            padding-top: 0 !important;
            position: relative !important;
            display: block !important;
            height: auto !important;
            min-height: 297mm !important; /* Forces physical A4 page layout */
            overflow: visible !important;
          }

          /* Keep tables intact and prevent awkward middle-row splits */
          tr {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          
          thead {
            display: table-header-group;
          }

          /* Hide on-screen elements absolutely */
          .print-hidden-element, .print\\:hidden, 
          header, footer, nav, aside,
          #app-header, #app-footer, #accessibility-and-language-controller, 
          #onboarding-banner, #daily-challenge-widget, #view-tabs-menu {
            display: none !important;
            height: 0 !important;
            padding: 0 !important;
            margin: 0 !important;
            opacity: 0 !important;
            overflow: hidden !important;
          }

          /* Enforce exact vector color background fills */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
        
        /* Interactive On-Screen Page Outline Previews (simulating A4 sheets) */
        .preview-a4-page {
          background-color: #ffffff;
          position: relative;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          transition: border-color 0.2s;
        }
        
        @media (min-width: 640px) {
          .preview-a4-page {
            border: 1px solid #e5e5e0;
          }
        }
      `}</style>

      {/* ========================================================================================= */}
      {/*                                   PREVIEW CANVAS CONTAINER                                */}
      {/* ========================================================================================= */}
      <div className="space-y-8 print:space-y-0">
        
        {/* Visual Help Banner for A4 Layout Previews */}
        <div className="flex items-center justify-between border-b border-stone-200 pb-3 print:hidden">
          <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-widest flex items-center gap-2">
            <Eye className="h-4 w-4" />
            <span>Interactive A4 Sheet Layout Previews ({layoutMode === 'booklet' ? '10 Pages' : '2 Pages'})</span>
          </span>
          <span className="text-xs text-stone-400 font-sans italic">
            Each section represents one physical printed sheet of paper
          </span>
        </div>

        {/* ==================== LAYOUT 1: 10-PAGE COMPREHENSIVE COMPANION BOOKLET ==================== */}
        {layoutMode === 'booklet' && (
          <div className="space-y-10 print:space-y-0">
            
            {/* PAGE 1: TITLE & COVER PAGE */}
            <div className="preview-a4-page p-8 sm:p-14 rounded-2xl print:p-0 print:border-0 print:shadow-none min-h-[297mm] flex flex-col justify-between print-page-break">
              <div className="text-center space-y-10 my-auto py-12">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-1 bg-[#7B241C]/5 border border-[#7B241C]/20 text-[#7B241C] text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-full">
                    Akshara Linguistic Series
                  </div>
                  <h1 className="text-4xl sm:text-6xl font-black text-stone-900 tracking-tight leading-none italic font-serif">
                    The Kannada Offline Practice Companion
                  </h1>
                  <p className="text-base sm:text-lg text-stone-500 font-sans max-w-2xl mx-auto mt-4 leading-relaxed">
                    A beautifully-structured offline handbook designed specifically for English-medium learners to trace, pronounce, and master Kannada consonants, vowels, numerals, and scripts.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8 text-left font-sans">
                  <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl text-center shadow-xs">
                    <span className="text-3xl font-black text-[#7B241C] font-mono block">13</span>
                    <span className="text-[10px] uppercase font-bold text-stone-500 block tracking-wider mt-1">Swaras (Vowels)</span>
                  </div>
                  <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl text-center shadow-xs">
                    <span className="text-3xl font-black text-[#7B241C] font-mono block">34</span>
                    <span className="text-[10px] uppercase font-bold text-stone-500 block tracking-wider mt-1">Vyanjanas (Consonants)</span>
                  </div>
                  <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl text-center shadow-xs">
                    <span className="text-3xl font-black text-[#7B241C] font-mono block">15</span>
                    <span className="text-[10px] uppercase font-bold text-stone-500 block tracking-wider mt-1">Kagunitha Signs</span>
                  </div>
                  <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl text-center shadow-xs">
                    <span className="text-3xl font-black text-[#7B241C] font-mono block">34</span>
                    <span className="text-[10px] uppercase font-bold text-stone-500 block tracking-wider mt-1">Ottakshara Vattus</span>
                  </div>
                </div>

                <div className="max-w-md mx-auto p-4 border border-stone-100 rounded-xl bg-amber-50/20 text-left space-y-1.5 text-stone-600 font-sans text-xs">
                  <span className="font-bold text-[#7B241C] uppercase tracking-wide text-[10px] block font-mono">Offline Tracing Companion</span>
                  <p className="leading-relaxed">
                    This booklet provides sufficient spacing for tracing paper overlays. Place a translucent sheet over any page to trace the elegant circular strokes of Kannada.
                  </p>
                </div>
              </div>

              <div className="border-t-2 border-stone-900 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-stone-400 uppercase tracking-widest gap-4">
                <span>Volume I: English Medium Classroom Edition</span>
                <span>Page 1 of 10</span>
              </div>
            </div>

            {/* PAGE 2: SWARAS (VOWELS) */}
            <div className="preview-a4-page p-8 sm:p-14 rounded-2xl print:p-0 print:border-0 print:shadow-none min-h-[297mm] flex flex-col justify-between print-page-break">
              <div className="space-y-6">
                <div className="border-b-2 border-stone-900 pb-3 flex items-baseline justify-between">
                  <h2 className="text-2xl font-bold font-serif text-stone-900 flex items-center gap-3">
                    <span className="text-[#7B241C] font-mono text-sm uppercase font-bold tracking-wider">[Section 1]</span>
                    <span>Swaras (Vowels &bull; ಸ್ವರಗಳು)</span>
                  </h2>
                  <span className="text-xs font-sans text-stone-500 italic">13 Vowels + 2 Yogavaahas</span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed max-w-3xl font-sans">
                  Kannada vowels are called <strong>Swaras</strong>. They are categorized as <strong>Hrasva Swara</strong> (Short, pronounced for 1 Matra unit) and <strong>Deergha Swara</strong> (Long, pronounced for 2 Matra units).
                </p>

                <div className="border border-stone-200 rounded-xl overflow-hidden shadow-xs">
                  <table className="w-full text-left border-collapse font-sans text-xs">
                    <thead>
                      <tr className="bg-stone-100 border-b border-stone-200 text-[10px] uppercase tracking-wider text-stone-600">
                        <th className="p-3 font-bold w-20 text-center">Glyph</th>
                        <th className="p-3 font-bold w-28">Transliteration</th>
                        <th className="p-3 font-bold">Vowel Category</th>
                        <th className="p-3 font-bold">English Sound Analogy</th>
                        <th className="p-3 font-bold">Trace & Sample Words</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      {vowels.map((v) => (
                        <tr key={v.id} className="hover:bg-stone-50/50">
                          <td className="p-3.5 text-4xl font-serif font-black text-center text-stone-900 border-r border-stone-100 font-kannada">
                            {v.kannadaChar}
                          </td>
                          <td className="p-3.5 font-mono font-bold text-[#7B241C] text-sm">
                            {v.englishSymbol}
                          </td>
                          <td className="p-3.5 text-stone-600 font-medium">
                            {v.subCategory}
                          </td>
                          <td className="p-3.5 text-stone-500 leading-relaxed italic text-[11px]">
                            {v.pronunciationHint}
                          </td>
                          <td className="p-3.5">
                            <div className="space-y-1 font-serif">
                              {v.examples.slice(0, 2).map((ex, i) => (
                                <div key={i} className="text-[11px] leading-tight">
                                  <strong className="text-stone-800 font-bold">{ex.kannadaWord}</strong>
                                  <span className="text-stone-400"> ({ex.transliteration})</span>
                                  <span className="text-stone-500"> &mdash; {ex.englishMeaning}</span>
                                </div>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                      
                      {/* Yogavaahas */}
                      <tr className="bg-stone-50/50">
                        <td className="p-3.5 text-4xl font-serif font-black text-center text-stone-900 border-r border-stone-100 font-kannada">ಂ</td>
                        <td className="p-3.5 font-mono font-bold text-[#7B241C] text-sm">am / an</td>
                        <td className="p-3.5 text-stone-600 font-bold">Anusvara</td>
                        <td className="p-3.5 text-stone-500 italic text-[11px]">Nasalized consonant modifier (e.g. humming sound)</td>
                        <td className="p-3.5 font-serif">
                          <div className="text-[11px]">
                            <strong>ಸಿಂಹ</strong> (Simha) &mdash; Lion
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-stone-50/50">
                        <td className="p-3.5 text-4xl font-serif font-black text-center text-stone-900 border-r border-stone-100 font-kannada">ಃ</td>
                        <td className="p-3.5 font-mono font-bold text-[#7B241C] text-sm">aha / h</td>
                        <td className="p-3.5 text-stone-600 font-bold">Visarga</td>
                        <td className="p-3.5 text-stone-500 italic text-[11px]">Breathy aspiration trailing release</td>
                        <td className="p-3.5 font-serif">
                          <div className="text-[11px]">
                            <strong>ದುಃಖ</strong> (Duhkha) &mdash; Sorrow
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-6 flex justify-between text-xs font-mono text-stone-400 uppercase tracking-widest">
                <span>Kannada Offline Practice Manual</span>
                <span>Page 2 of 10</span>
              </div>
            </div>

            {/* PAGE 3: VYANJANAS PART I (VARGIYA CONSONANTS) */}
            <div className="preview-a4-page p-8 sm:p-14 rounded-2xl print:p-0 print:border-0 print:shadow-none min-h-[297mm] flex flex-col justify-between print-page-break">
              <div className="space-y-6">
                <div className="border-b-2 border-stone-900 pb-3 flex items-baseline justify-between">
                  <h2 className="text-2xl font-bold font-serif text-stone-900 flex items-center gap-3">
                    <span className="text-[#7B241C] font-mono text-sm uppercase font-bold tracking-wider">[Section 2]</span>
                    <span>Vargiya Vyanjanas (Grouped Consonants &bull; ವರ್ಗೀಯ ವ್ಯಂಜನಗಳು)</span>
                  </h2>
                  <span className="text-xs font-sans text-stone-500 italic">25 Structured Consonants (5x5 Grid)</span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed max-w-3xl font-sans">
                  The first 25 consonants are structured systematically into 5 acoustic classes (Vargas) representing distinct vocal tract placements from throat to lips.
                </p>

                <div className="border border-stone-200 rounded-xl overflow-hidden shadow-xs">
                  <table className="w-full text-center border-collapse font-sans text-xs">
                    <thead>
                      <tr className="bg-stone-100 border-b border-stone-200 text-[10px] uppercase tracking-wider text-stone-600 text-left">
                        <th className="p-3 font-bold w-40">Varga / Class</th>
                        <th className="p-3 font-bold text-center">Unaspirated (Soft)</th>
                        <th className="p-3 font-bold text-center">Aspirated (Heavy)</th>
                        <th className="p-3 font-bold text-center">Unaspirated (Voiced)</th>
                        <th className="p-3 font-bold text-center">Aspirated (Voiced)</th>
                        <th className="p-3 font-bold text-center">Nasalized</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 font-serif">
                      {/* Ka-varga */}
                      <tr className="hover:bg-stone-50/50">
                        <td className="p-4 text-left font-sans bg-stone-50/50 border-r border-stone-200">
                          <strong className="block text-stone-950 font-bold text-xs uppercase tracking-wide">Ka-Varga</strong>
                          <span className="text-[10px] text-stone-400">Velars (Throat)</span>
                        </td>
                        {kaVarga.map((c) => (
                          <td key={c.id} className="p-4 border-r border-stone-100 last:border-r-0">
                            <span className="text-4xl font-black block text-stone-950 font-kannada">{c.kannadaChar}</span>
                            <span className="text-xs font-mono font-bold text-[#7B241C] mt-2 block">[{c.englishSymbol}]</span>
                          </td>
                        ))}
                      </tr>
                      {/* Cha-varga */}
                      <tr className="hover:bg-stone-50/50">
                        <td className="p-4 text-left font-sans bg-stone-50/50 border-r border-stone-200">
                          <strong className="block text-stone-950 font-bold text-xs uppercase tracking-wide">Cha-Varga</strong>
                          <span className="text-[10px] text-stone-400">Palatals (Palate)</span>
                        </td>
                        {chaVarga.map((c) => (
                          <td key={c.id} className="p-4 border-r border-stone-100 last:border-r-0">
                            <span className="text-4xl font-black block text-stone-950 font-kannada">{c.kannadaChar}</span>
                            <span className="text-xs font-mono font-bold text-[#7B241C] mt-2 block">[{c.englishSymbol}]</span>
                          </td>
                        ))}
                      </tr>
                      {/* Ta-varga (Retroflex) */}
                      <tr className="hover:bg-stone-50/50">
                        <td className="p-4 text-left font-sans bg-stone-50/50 border-r border-stone-200">
                          <strong className="block text-stone-950 font-bold text-xs uppercase tracking-wide">Ta-Varga (Retro)</strong>
                          <span className="text-[10px] text-stone-400">Retroflex (Cooled Tongue)</span>
                        </td>
                        {taVargaRetro.map((c) => (
                          <td key={c.id} className="p-4 border-r border-stone-100 last:border-r-0">
                            <span className="text-4xl font-black block text-stone-950 font-kannada">{c.kannadaChar}</span>
                            <span className="text-xs font-mono font-bold text-[#7B241C] mt-2 block">[{c.englishSymbol}]</span>
                          </td>
                        ))}
                      </tr>
                      {/* ta-varga (Dental) */}
                      <tr className="hover:bg-stone-50/50">
                        <td className="p-4 text-left font-sans bg-stone-50/50 border-r border-stone-200">
                          <strong className="block text-stone-950 font-bold text-xs uppercase tracking-wide">ta-Varga (Dent)</strong>
                          <span className="text-[10px] text-stone-400">Dentals (Teeth Tip)</span>
                        </td>
                        {taVargaDental.map((c) => (
                          <td key={c.id} className="p-4 border-r border-stone-100 last:border-r-0">
                            <span className="text-4xl font-black block text-stone-950 font-kannada">{c.kannadaChar}</span>
                            <span className="text-xs font-mono font-bold text-[#7B241C] mt-2 block">[{c.englishSymbol}]</span>
                          </td>
                        ))}
                      </tr>
                      {/* Pa-varga */}
                      <tr className="hover:bg-stone-50/50">
                        <td className="p-4 text-left font-sans bg-stone-50/50 border-r border-stone-200">
                          <strong className="block text-stone-950 font-bold text-xs uppercase tracking-wide">Pa-Varga</strong>
                          <span className="text-[10px] text-stone-400">Labials (Lips)</span>
                        </td>
                        {paVarga.map((c) => (
                          <td key={c.id} className="p-4 border-r border-stone-100 last:border-r-0">
                            <span className="text-4xl font-black block text-stone-950 font-kannada">{c.kannadaChar}</span>
                            <span className="text-xs font-mono font-bold text-[#7B241C] mt-2 block">[{c.englishSymbol}]</span>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#FDFBF7] p-5 border border-stone-200 rounded-xl space-y-2 font-sans text-xs">
                  <span className="font-bold text-[#7B241C] uppercase tracking-wide text-[10px] block font-mono">💡 Aspirated vs Unaspirated Pronunciation Tip</span>
                  <p className="text-stone-600 leading-relaxed">
                    Unaspirated letters (Columns 1 &amp; 3) are spoken normally and lightly. Aspirated letters (Columns 2 &amp; 4) require a release of air from the chest. Think of whispering a heavy "h" sound combined with the letter.
                  </p>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-6 flex justify-between text-xs font-mono text-stone-400 uppercase tracking-widest">
                <span>Kannada Offline Practice Manual</span>
                <span>Page 3 of 10</span>
              </div>
            </div>

            {/* PAGE 4: VYANJANAS PART II (AVARGIYA CONSONANTS) & NUMBERS */}
            <div className="preview-a4-page p-8 sm:p-14 rounded-2xl print:p-0 print:border-0 print:shadow-none min-h-[297mm] flex flex-col justify-between print-page-break">
              <div className="space-y-8">
                
                {/* Avargiya section */}
                <div className="space-y-4">
                  <div className="border-b-2 border-stone-900 pb-3 flex items-baseline justify-between">
                    <h2 className="text-2xl font-bold font-serif text-stone-900 flex items-center gap-3">
                      <span className="text-[#7B241C] font-mono text-sm uppercase font-bold tracking-wider">[Section 3]</span>
                      <span>Avargiya Vyanjanas (Unstructured Consonants &bull; ಅವರ್ಗೀಯ ವ್ಯಂಜನಗಳು)</span>
                    </h2>
                    <span className="text-xs font-sans text-stone-500 italic">9 Consonants</span>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    These consonants are outside the traditional 5x5 phonetic articulation grid but are highly frequent in vocabulary.
                  </p>

                  <div className="grid grid-cols-3 sm:grid-cols-9 gap-3 print:grid-cols-9">
                    {avargiya.map((c) => (
                      <div key={c.id} className="border border-stone-200 rounded-xl p-3 text-center bg-stone-50/30">
                        <span className="text-4xl font-serif font-black block text-stone-900 font-kannada">{c.kannadaChar}</span>
                        <span className="text-xs font-sans font-bold text-[#7B241C] tracking-wide font-mono mt-1 block">[{c.englishSymbol}]</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Numbers (Anki) section */}
                <div className="space-y-4 pt-4">
                  <div className="border-b border-stone-200 pb-2 flex items-baseline justify-between">
                    <h3 className="text-lg font-serif font-bold text-stone-900">
                      Kannada Anki (Numbers &bull; ಅಂಕಿಗಳು)
                    </h3>
                    <span className="text-xs font-mono text-stone-400 uppercase tracking-widest">Core Numerals Reference</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 print:grid-cols-4">
                    {offlineNumbers.map((num, i) => (
                      <div key={i} className="border border-stone-200 rounded-xl p-3 flex items-center gap-4 bg-stone-50/20">
                        <span className="text-4xl font-serif font-black text-[#7B241C] shrink-0 w-12 text-center border-r border-stone-100 pr-2 font-kannada">
                          {num.digit}
                        </span>
                        <div className="font-sans space-y-0.5">
                          <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-stone-400">
                            Digit {num.value}
                          </div>
                          <div className="text-sm font-black text-stone-900 leading-none">
                            {num.name}
                          </div>
                          <div className="text-[10px] text-stone-500 italic">
                            &quot;{num.pronunciation}&quot;
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <div className="border-t border-stone-200 pt-6 flex justify-between text-xs font-mono text-stone-400 uppercase tracking-widest">
                <span>Kannada Offline Practice Manual</span>
                <span>Page 4 of 10</span>
              </div>
            </div>

            {/* PAGE 5: KAGUNITHA SIGNALS (MATRAS) */}
            <div className="preview-a4-page p-8 sm:p-14 rounded-2xl print:p-0 print:border-0 print:shadow-none min-h-[297mm] flex flex-col justify-between print-page-break">
              <div className="space-y-6">
                <div className="border-b-2 border-stone-900 pb-3 flex items-baseline justify-between">
                  <h2 className="text-2xl font-bold font-serif text-stone-900 flex items-center gap-3">
                    <span className="text-[#7B241C] font-mono text-sm uppercase font-bold tracking-wider">[Section 4]</span>
                    <span>Kagunitha Vowel Marks (Matras &bull; ಕಾಗುಣಿತ ಚಿಹ್ನೆಗಳು)</span>
                  </h2>
                  <span className="text-xs font-sans text-stone-500 italic">15 Syllable Modifiers</span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed max-w-3xl font-sans">
                  Kannada is an alphasyllabary (abugida). When a consonant joins a vowel, a specific <strong>modifier mark (Matra)</strong> is attached to the parent letter shape.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-stone-200 rounded-xl overflow-hidden shadow-xs">
                    <table className="w-full text-left border-collapse font-sans text-xs">
                      <thead>
                        <tr className="bg-stone-100 border-b border-stone-200 text-[10px] uppercase tracking-wider text-stone-600">
                          <th className="p-2.5 font-bold text-center">Vowel</th>
                          <th className="p-2.5 font-bold">Matra Symbol</th>
                          <th className="p-2.5 font-bold">Matra Name</th>
                          <th className="p-2.5 font-bold">Example (ಕ + Vowel)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 font-serif">
                        {KANNADA_MATRAS.slice(0, 8).map((m, idx) => {
                          const generated = generateKagunitha('ಕ', 'ka')[idx];
                          return (
                            <tr key={idx} className="hover:bg-stone-50/50">
                              <td className="p-2.5 text-center text-xl font-black text-[#7B241C] border-r border-stone-100 w-16 font-kannada">{m.vowelChar}</td>
                              <td className="p-2.5 text-3xl text-center text-stone-800 border-r border-stone-100 w-20 font-kannada">{m.matraSign || 'None'}</td>
                              <td className="p-2.5 font-sans font-bold text-stone-600">{m.matraName}</td>
                              <td className="p-2.5 border-l border-stone-100">
                                <span className="text-2xl font-black font-kannada">{generated?.combinedChar}</span>
                                <span className="text-[10px] font-mono text-stone-400 block">[{generated?.pronouncedAs.split(' ')[0]}]</span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <div className="border border-stone-200 rounded-xl overflow-hidden shadow-xs">
                    <table className="w-full text-left border-collapse font-sans text-xs">
                      <thead>
                        <tr className="bg-stone-100 border-b border-stone-200 text-[10px] uppercase tracking-wider text-stone-600">
                          <th className="p-2.5 font-bold text-center">Vowel</th>
                          <th className="p-2.5 font-bold">Matra Symbol</th>
                          <th className="p-2.5 font-bold">Matra Name</th>
                          <th className="p-2.5 font-bold">Example (ಕ + Vowel)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 font-serif">
                        {KANNADA_MATRAS.slice(8).map((m, idx) => {
                          const realIdx = idx + 8;
                          const generated = generateKagunitha('ಕ', 'ka')[realIdx];
                          return (
                            <tr key={idx} className="hover:bg-stone-50/50">
                              <td className="p-2.5 text-center text-xl font-black text-[#7B241C] border-r border-stone-100 w-16 font-kannada">{m.vowelChar}</td>
                              <td className="p-2.5 text-3xl text-center text-stone-800 border-r border-stone-100 w-20 font-kannada">{m.matraSign}</td>
                              <td className="p-2.5 font-sans font-bold text-stone-600">{m.matraName}</td>
                              <td className="p-2.5 border-l border-stone-100">
                                <span className="text-2xl font-black font-kannada">{generated?.combinedChar}</span>
                                <span className="text-[10px] font-mono text-stone-400 block">[{generated?.pronouncedAs.split(' ')[0]}]</span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-6 flex justify-between text-xs font-mono text-stone-400 uppercase tracking-widest">
                <span>Kannada Offline Practice Manual</span>
                <span>Page 5 of 10</span>
              </div>
            </div>

            {/* PAGE 6: KAGUNITHA SYLLABLE MATRIX (PART I: PRIMARY SWARAS) */}
            <div className="preview-a4-page p-8 sm:p-14 rounded-2xl print:p-0 print:border-0 print:shadow-none min-h-[297mm] flex flex-col justify-between print-page-break">
              <div className="space-y-6">
                <div className="border-b-2 border-stone-900 pb-2">
                  <h3 className="text-xl font-bold font-serif text-stone-900 uppercase">
                    Kagunitha Reference Matrix &mdash; Part I (ಅ to ಎ)
                  </h3>
                  <p className="text-xs text-stone-500 font-sans mt-0.5 leading-relaxed">
                    Showing primary syllable associations. Slicing the matrix allows each printed syllable to be significantly larger, ensuring comfortable visibility and offline stroke tracing.
                  </p>
                </div>

                <div className="overflow-x-auto border border-stone-200 rounded-xl shadow-xs">
                  <table className="w-full text-center border-collapse font-serif text-xs min-w-[650px]">
                    <thead>
                      <tr className="bg-stone-100 border-b border-stone-200 text-[10px] uppercase font-sans tracking-wider text-stone-600">
                        <th className="p-3 border-r border-stone-200 font-bold text-left bg-stone-50">Cons.</th>
                        {matrasPart1.map((m, i) => (
                          <th key={i} className="p-2.5 font-bold text-center border-r border-stone-100 last:border-r-0">
                            <span className="block text-lg font-black text-stone-800 font-kannada">{m.vowelChar}</span>
                            <span className="text-[8px] text-stone-400 font-mono block mt-0.5">{m.matraName}</span>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 font-medium text-stone-900">
                      {sampleConsonants.map((con, idx) => {
                        const syllables = generateKagunitha(con.char, con.root).slice(0, 8);
                        return (
                          <tr key={idx} className="hover:bg-stone-50/50">
                            <td className="p-3 font-sans font-black bg-stone-50/50 text-left border-r border-stone-200 text-sm text-[#7B241C]">
                              <span className="font-kannada text-lg block">{con.char}</span>
                              <span className="text-[9px] font-mono text-stone-400">({con.root})</span>
                            </td>
                            {syllables.map((s, sIdx) => (
                              <td key={sIdx} className="border-r border-stone-100 last:border-r-0 p-1">
                                <span className={`font-black tracking-wide block font-kannada text-[#2D2926] ${getKagunithaFontClass()}`}>
                                  {s.combinedChar}
                                </span>
                                <span className="text-[8px] font-mono text-stone-400 block mt-0.5 leading-none">
                                  {s.transliteration}
                                </span>
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-6 flex justify-between text-xs font-mono text-stone-400 uppercase tracking-widest">
                <span>Kannada Offline Practice Manual</span>
                <span>Page 6 of 10</span>
              </div>
            </div>

            {/* PAGE 7: KAGUNITHA SYLLABLE MATRIX (PART II: SECONDARY SWARAS) */}
            <div className="preview-a4-page p-8 sm:p-14 rounded-2xl print:p-0 print:border-0 print:shadow-none min-h-[297mm] flex flex-col justify-between print-page-break">
              <div className="space-y-6">
                <div className="border-b-2 border-stone-900 pb-2">
                  <h3 className="text-xl font-bold font-serif text-stone-900 uppercase">
                    Kagunitha Reference Matrix &mdash; Part II (ಏ to ಅಃ)
                  </h3>
                  <p className="text-xs text-stone-500 font-sans mt-0.5 leading-relaxed">
                    Showing secondary vowel combinations, including complex double curves and trailing nasalization dots.
                  </p>
                </div>

                <div className="overflow-x-auto border border-stone-200 rounded-xl shadow-xs">
                  <table className="w-full text-center border-collapse font-serif text-xs min-w-[650px]">
                    <thead>
                      <tr className="bg-stone-100 border-b border-stone-200 text-[10px] uppercase font-sans tracking-wider text-stone-600">
                        <th className="p-3 border-r border-stone-200 font-bold text-left bg-stone-50">Cons.</th>
                        {matrasPart2.map((m, i) => (
                          <th key={i} className="p-2.5 font-bold text-center border-r border-stone-100 last:border-r-0">
                            <span className="block text-lg font-black text-stone-800 font-kannada">{m.vowelChar}</span>
                            <span className="text-[8px] text-stone-400 font-mono block mt-0.5">{m.matraName}</span>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 font-medium text-stone-900">
                      {sampleConsonants.map((con, idx) => {
                        const syllables = generateKagunitha(con.char, con.root).slice(8);
                        return (
                          <tr key={idx} className="hover:bg-stone-50/50">
                            <td className="p-3 font-sans font-black bg-stone-50/50 text-left border-r border-stone-200 text-sm text-[#7B241C]">
                              <span className="font-kannada text-lg block">{con.char}</span>
                              <span className="text-[9px] font-mono text-stone-400">({con.root})</span>
                            </td>
                            {syllables.map((s, sIdx) => (
                              <td key={sIdx} className="border-r border-stone-100 last:border-r-0 p-1">
                                <span className={`font-black tracking-wide block font-kannada text-[#2D2926] ${getKagunithaFontClass()}`}>
                                  {s.combinedChar}
                                </span>
                                <span className="text-[8px] font-mono text-stone-400 block mt-0.5 leading-none">
                                  {s.transliteration}
                                </span>
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-6 flex justify-between text-xs font-mono text-stone-400 uppercase tracking-widest">
                <span>Kannada Offline Practice Manual</span>
                <span>Page 7 of 10</span>
              </div>
            </div>

            {/* PAGE 8: OTTAKSHARA PART I (SAJATHIYA - SAME CONSONANT DOUBLE LETTERS) */}
            <div className="preview-a4-page p-8 sm:p-14 rounded-2xl print:p-0 print:border-0 print:shadow-none min-h-[297mm] flex flex-col justify-between print-page-break">
              <div className="space-y-6">
                <div className="border-b-2 border-stone-900 pb-3 flex items-baseline justify-between">
                  <h2 className="text-2xl font-bold font-serif text-stone-900 flex items-center gap-3">
                    <span className="text-[#7B241C] font-mono text-sm uppercase font-bold tracking-wider">[Section 5]</span>
                    <span>Sajathiya Samyuktaksharas (ಸಜಾತೀಯ ಸಂಯುಕ್ತಾಕ್ಷರಗಳು)</span>
                  </h2>
                  <span className="text-xs font-sans text-stone-500 italic font-medium">Same Consonant Double Letters</span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed max-w-3xl font-sans">
                  Sajathiya Samyuktaksharas are consonant conjuncts where a consonant combines with its own identical subscript form (vattu). This creates a doubled (geminated) sound.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Table 1: Left Column */}
                  <div className="overflow-hidden border border-stone-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-stone-100 border-b border-stone-200 text-[10px] uppercase font-sans tracking-wider text-stone-600">
                          <th className="p-3 font-bold border-r border-stone-200 w-14 text-center">Cons.</th>
                          <th className="p-3 font-bold border-r border-stone-200 w-14 text-center">Vattu</th>
                          <th className="p-3 font-bold border-r border-stone-200 w-16 text-center">Double</th>
                          <th className="p-3 font-bold border-r border-stone-200 w-24">Pronounce</th>
                          <th className="p-3">Example &amp; Meaning</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-150 font-medium text-stone-900">
                        {sajathiyaExamples.slice(0, 9).map((ex, idx) => (
                          <tr key={idx} className="hover:bg-stone-50/50">
                            <td className="p-3 font-kannada text-2xl text-center border-r border-stone-150 font-black">{ex.cons}</td>
                            <td className="p-3 font-kannada text-2xl text-center border-r border-stone-150 font-black text-[#7B241C]">{ex.vattu}</td>
                            <td className="p-3 font-kannada text-3xl text-center border-r border-stone-150 font-black text-[#7B241C]">{ex.combined}</td>
                            <td className="p-3 border-r border-stone-150 font-mono text-stone-600 text-xs font-semibold">{ex.trans}</td>
                            <td className="p-3 font-serif">
                              <span className="font-kannada font-bold text-stone-900 text-base block leading-normal">{ex.word}</span>
                              <span className="text-[11px] text-stone-500 block leading-normal">{ex.wordTrans} &mdash; {ex.meaning}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Table 2: Right Column */}
                  <div className="overflow-hidden border border-stone-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-stone-100 border-b border-stone-200 text-[10px] uppercase font-sans tracking-wider text-stone-600">
                          <th className="p-3 font-bold border-r border-stone-200 w-14 text-center">Cons.</th>
                          <th className="p-3 font-bold border-r border-stone-200 w-14 text-center">Vattu</th>
                          <th className="p-3 font-bold border-r border-stone-200 w-16 text-center">Double</th>
                          <th className="p-3 font-bold border-r border-stone-200 w-24">Pronounce</th>
                          <th className="p-3">Example &amp; Meaning</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-150 font-medium text-stone-900">
                        {sajathiyaExamples.slice(9).map((ex, idx) => (
                          <tr key={idx} className="hover:bg-stone-50/50">
                            <td className="p-3 font-kannada text-2xl text-center border-r border-stone-150 font-black">{ex.cons}</td>
                            <td className="p-3 font-kannada text-2xl text-center border-r border-stone-150 font-black text-[#7B241C]">{ex.vattu}</td>
                            <td className="p-3 font-kannada text-3xl text-center border-r border-stone-150 font-black text-[#7B241C]">{ex.combined}</td>
                            <td className="p-3 border-r border-stone-150 font-mono text-stone-600 text-xs font-semibold">{ex.trans}</td>
                            <td className="p-3 font-serif">
                              <span className="font-kannada font-bold text-stone-900 text-base block leading-normal">{ex.word}</span>
                              <span className="text-[11px] text-stone-500 block leading-normal">{ex.wordTrans} &mdash; {ex.meaning}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-6 flex justify-between text-xs font-mono text-stone-400 uppercase tracking-widest">
                <span>Kannada Offline Practice Manual</span>
                <span>Page 8 of 10</span>
              </div>
            </div>

            {/* PAGE 9: OTTAKSHARA PART II (VIJATHIYA - DIFFERENT CONSONANT CONJUNCTS) */}
            <div className="preview-a4-page p-8 sm:p-14 rounded-2xl print:p-0 print:border-0 print:shadow-none min-h-[297mm] flex flex-col justify-between print-page-break">
              <div className="space-y-6">
                <div className="border-b-2 border-stone-900 pb-3 flex items-baseline justify-between">
                  <h2 className="text-2xl font-bold font-serif text-stone-900 flex items-center gap-3">
                    <span className="text-[#7B241C] font-mono text-sm uppercase font-bold tracking-wider">[Section 6]</span>
                    <span>Vijathiya Samyuktaksharas (ವಿಜಾತೀಯ ಸಂಯುಕ್ತಾಕ್ಷರಗಳು)</span>
                  </h2>
                  <span className="text-xs font-sans text-stone-500 italic font-medium">Different Consonant Blend Letters</span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed max-w-3xl font-sans">
                  Vijathiya Samyuktaksharas are consonant conjuncts where a base consonant is conjoined with a subscript form (vattu) of a *different* consonant. These form complex blend sounds.
                </p>

                {/* Vijathiya Grid/Table */}
                <div className="overflow-hidden border border-stone-200 rounded-xl bg-white shadow-xs">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-stone-100 border-b border-stone-200 text-[10px] uppercase font-sans tracking-wider text-stone-600">
                        <th className="p-3.5 font-bold border-r border-stone-200 w-28 text-center">Base + Vattu</th>
                        <th className="p-3.5 font-bold border-r border-stone-200 w-28 text-center">Conjunct</th>
                        <th className="p-3.5 font-bold border-r border-stone-200 w-32">Pronunciation</th>
                        <th className="p-3.5 font-bold">Example Word &amp; Meaning</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-150 font-medium text-stone-900">
                      {vijathiyaExamples.map((ex, idx) => (
                        <tr key={idx} className="hover:bg-stone-50/50">
                          <td className="p-3 font-kannada text-2xl text-center border-r border-stone-150 font-black">
                            {ex.base} <span className="text-stone-400 font-sans text-xs font-normal">+</span> {ex.sub}
                          </td>
                          <td className="p-3 font-kannada text-3xl text-center border-r border-stone-150 font-black text-[#7B241C]">
                            {ex.combined}
                          </td>
                          <td className="p-3 border-r border-stone-150 font-mono text-stone-600 text-xs font-semibold">
                            {ex.trans}
                          </td>
                          <td className="p-3 font-serif">
                            <span className="font-kannada font-bold text-stone-900 text-base block leading-normal">{ex.word}</span>
                            <span className="text-[11px] text-stone-500 block leading-normal">{ex.wordTrans} &mdash; {ex.meaning}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>

              <div className="border-t border-stone-200 pt-6 flex justify-between text-xs font-mono text-stone-400 uppercase tracking-widest">
                <span>Kannada Offline Practice Manual</span>
                <span>Page 9 of 10</span>
              </div>
            </div>

            {/* PAGE 10: ALPHABET & OTTAKSHARA MASTERY ESSAY */}
            <div className="preview-a4-page p-8 sm:p-14 rounded-2xl print:p-0 print:border-0 print:shadow-none min-h-[297mm] flex flex-col justify-between print-page-break">
              <div className="space-y-6">
                <div className="border-b-2 border-stone-900 pb-3 flex items-baseline justify-between">
                  <h2 className="text-2xl font-bold font-serif text-stone-900 flex items-center gap-3">
                    <span className="text-[#7B241C] font-mono text-sm uppercase font-bold tracking-wider">[Section 7]</span>
                    <span>Linguistic Mastery Essay (ಅಭ್ಯಾಸ ಪ್ರಬಂಧ)</span>
                  </h2>
                  <span className="text-xs font-sans text-stone-500 italic font-medium">Pan-Alphabet &amp; Conjunct Practice</span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed max-w-3xl font-sans">
                  The following structured essay is curated specifically to showcase the complete visual and acoustic beauty of the Kannada script. It incorporates all vowels (Swaras), consonants (Vyanjanas), and complex double/blend letters (Sajathiya and Vijathiya Samyuktaksharas).
                </p>

                {/* Essay Sentences Block */}
                <div className="space-y-5">
                  {essaySentences.map((sentence, index) => (
                    <div key={index} className="border border-stone-200 p-4 rounded-xl bg-stone-50/40 space-y-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-[#7B241C]/5 border border-[#7B241C]/20 text-[#7B241C] rounded text-[9px] font-mono font-bold">
                          Sentence {index + 1}
                        </span>
                        <span className="text-[9px] text-stone-400 font-mono italic">
                          {sentence.analysis}
                        </span>
                      </div>

                      <div className="font-kannada text-xl font-black text-stone-900 leading-relaxed tracking-wide border-l-4 border-[#7B241C] pl-3 py-0.5">
                        {sentence.kannada}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] pt-1">
                        <div>
                          <span className="text-[9px] uppercase font-mono font-bold text-stone-400 block tracking-wider">Roman Transliteration</span>
                          <span className="font-mono text-stone-600 font-bold leading-normal">{sentence.transliteration}</span>
                        </div>
                        <div>
                          <span className="text-[9px] uppercase font-mono font-bold text-stone-400 block tracking-wider">English Translation</span>
                          <span className="font-serif italic text-stone-500 leading-normal">{sentence.translation}</span>
                        </div>
                      </div>

                      {/* Handwriting Guidelines Tracing Lines */}
                      <div className="space-y-2 pt-3 border-t border-stone-100">
                        <span className="text-[8px] uppercase font-mono font-bold text-stone-400 block tracking-wider">Stroke Tracing / Copy Practice Guidelines</span>
                        <div className="border-b border-stone-200 h-5 border-dashed" />
                        <div className="border-b border-stone-200 h-5" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress certification box / Workbook target log at the very bottom of Booklet */}
                <div className="border-t-2 border-stone-900 pt-5 text-center space-y-3.5">
                  <div className="inline-flex p-1.5 bg-[#7B241C]/5 border border-[#7B241C]/20 text-[#7B241C] rounded-full">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-bold text-stone-900 font-serif">Trace, Write &amp; Master Certification Log</h3>
                    <p className="text-[10px] text-stone-500 max-w-lg mx-auto leading-relaxed">
                      Use this logging table to monitor your offline learning milestones. Show this booklet to your instructor or mentor to verify your handwriting and stroke accuracy!
                    </p>
                  </div>
                  
                  <div className="pt-2 grid grid-cols-3 gap-3 max-w-xl mx-auto text-left text-[10px] border border-stone-200 p-2.5 rounded-xl bg-stone-50/80">
                    <div>
                      <span className="text-stone-400 block font-mono text-[8px] uppercase tracking-wider leading-none">Learner Name</span>
                      <div className="border-b border-stone-300 h-5 mt-1" />
                    </div>
                    <div>
                      <span className="text-stone-400 block font-mono text-[8px] uppercase tracking-wider leading-none">Completion Date Target</span>
                      <div className="border-b border-stone-300 h-5 mt-1" />
                    </div>
                    <div>
                      <span className="text-stone-400 block font-mono text-[8px] uppercase tracking-wider leading-none">Evaluator/Teacher Review Signature</span>
                      <div className="border-b border-stone-300 h-5 mt-1" />
                    </div>
                  </div>
                </div>

              </div>

              <div className="border-t border-stone-200 pt-6 flex justify-between text-xs font-mono text-stone-400 uppercase tracking-widest">
                <span>Kannada Offline Practice Manual</span>
                <span>Page 10 of 10</span>
              </div>
            </div>

          </div>
        )}

        {/* ==================== LAYOUT 2: 2-PAGE COMPACT REFERENCE CHEAT SHEET ==================== */}
        {layoutMode === 'cheatsheet' && (
          <div className="space-y-10 print:space-y-0">
            
            {/* CHEAT SHEET PAGE 1: SWARAS, VYANJANAS & NUMBERS */}
            <div className="preview-a4-page p-8 sm:p-12 rounded-2xl print:p-0 print:border-0 print:shadow-none min-h-[297mm] flex flex-col justify-between print-page-break">
              <div className="space-y-6">
                
                {/* Compact Header */}
                <div className="border-b-4 border-stone-900 pb-2 flex justify-between items-baseline">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-black text-stone-950 font-serif leading-none italic">
                      Kannada Compact Study Guide
                    </h1>
                    <p className="text-[10px] text-stone-500 font-sans mt-0.5">
                      Linguistic Cheat Sheet for English Medium Classrooms &bull; Vowels, Consonants, and Numerals
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#7B241C] border border-[#7B241C] px-2.5 py-0.5 rounded uppercase shrink-0">
                    Reference Sheet 1
                  </span>
                </div>

                {/* Grid layout splitting Swaras and Numbers */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  
                  {/* Swaras block */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#7B241C] border-b border-stone-200 pb-1 flex justify-between">
                      <span>I. Swaras (Vowels &bull; ಸ್ವರಗಳು)</span>
                      <span>15 Letters</span>
                    </h4>

                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 print:grid-cols-5">
                      {vowels.map((v) => (
                        <div key={v.id} className="border border-stone-200 rounded-lg p-2 text-center bg-stone-50/20">
                          <span className="text-3xl font-black text-stone-900 block font-kannada leading-tight">{v.kannadaChar}</span>
                          <span className="text-[10px] font-mono font-bold text-[#7B241C] block">{v.englishSymbol}</span>
                        </div>
                      ))}
                      <div className="border border-stone-200 rounded-lg p-2 text-center bg-stone-50/20">
                        <span className="text-3xl font-black text-stone-900 block font-kannada leading-tight">ಂ</span>
                        <span className="text-[10px] font-mono font-bold text-[#7B241C] block">am</span>
                      </div>
                      <div className="border border-stone-200 rounded-lg p-2 text-center bg-stone-50/20">
                        <span className="text-3xl font-black text-stone-900 block font-kannada leading-tight">ಃ</span>
                        <span className="text-[10px] font-mono font-bold text-[#7B241C] block">aha</span>
                      </div>
                    </div>
                  </div>

                  {/* Anki block */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-stone-500 border-b border-stone-200 pb-1 flex justify-between">
                      <span>II. Anki (Numbers &bull; ಅಂಕಿಗಳು)</span>
                      <span>0 - 10, Multiples</span>
                    </h4>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 print:grid-cols-4">
                      {offlineNumbers.slice(0, 12).map((num, i) => (
                        <div key={i} className="border border-stone-200 rounded-lg p-1.5 flex items-center gap-2.5 bg-stone-50/10">
                          <span className="text-2xl font-black text-stone-900 font-kannada leading-none shrink-0 border-r border-stone-100 pr-1">{num.digit}</span>
                          <div className="leading-tight">
                            <span className="text-xs font-bold text-stone-800 block">{num.name}</span>
                            <span className="text-[9px] text-stone-400 font-mono block">[{num.value}]</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Vargiya Consonants Matrix */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#7B241C] border-b border-stone-200 pb-1">
                    III. Vargiya Vyanjanas (Grouped Consonants &mdash; 5x5 Matrix)
                  </h4>

                  <div className="border border-stone-200 rounded-xl overflow-hidden">
                    <table className="w-full text-center border-collapse text-xs">
                      <thead>
                        <tr className="bg-stone-50 border-b border-stone-200 text-[9px] uppercase tracking-wider text-stone-500 text-left">
                          <th className="p-2 font-bold w-32">Placement</th>
                          <th className="p-2 font-bold text-center">Unasp. 1</th>
                          <th className="p-2 font-bold text-center">Aspir. 2</th>
                          <th className="p-2 font-bold text-center">Unasp. 3</th>
                          <th className="p-2 font-bold text-center">Aspir. 4</th>
                          <th className="p-2 font-bold text-center">Nasal 5</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 font-serif">
                        {[
                          { name: 'Ka-Varga (Throat)', chars: kaVarga },
                          { name: 'Cha-Varga (Palate)', chars: chaVarga },
                          { name: 'Ta-Varga (Retro)', chars: taVargaRetro },
                          { name: 'ta-Varga (Teeth)', chars: taVargaDental },
                          { name: 'Pa-Varga (Lips)', chars: paVarga }
                        ].map((varga, idx) => (
                          <tr key={idx} className="hover:bg-stone-50/30">
                            <td className="p-2.5 text-left font-sans bg-stone-50/50 border-r border-stone-200">
                              <span className="font-bold text-stone-800 text-[10px] block leading-none">{varga.name.split(' ')[0]}</span>
                              <span className="text-[8px] text-stone-400 font-mono block mt-0.5">{varga.name.split(' ')[1]}</span>
                            </td>
                            {varga.chars.map((c) => (
                              <td key={c.id} className="p-2 border-r border-stone-100 last:border-r-0">
                                <span className="text-2xl font-black block text-stone-900 font-kannada">{c.kannadaChar}</span>
                                <span className="text-[9px] font-mono text-[#7B241C] mt-0.5 block">[{c.englishSymbol}]</span>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Avargiya Consonants */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-stone-500 border-b border-stone-200 pb-1">
                    IV. Avargiya Vyanjanas (Unstructured Consonants &bull; ಅವರ್ಗೀಯ ವ್ಯಂಜನಗಳು)
                  </h4>

                  <div className="grid grid-cols-9 gap-2">
                    {avargiya.map((c) => (
                      <div key={c.id} className="border border-stone-200 rounded-lg p-2 text-center bg-stone-50/10">
                        <span className="text-2xl font-black block text-stone-900 font-kannada leading-tight">{c.kannadaChar}</span>
                        <span className="text-[9px] font-mono font-bold text-stone-400 mt-0.5 block">[{c.englishSymbol}]</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <div className="border-t border-stone-200 pt-5 flex justify-between text-[10px] font-mono text-stone-400 uppercase tracking-widest">
                <span>Kannada Quick Reference Guide</span>
                <span>Page 1 of 2</span>
              </div>
            </div>

            {/* CHEAT SHEET PAGE 2: KAGUNITHA & OTTAKSHARAS */}
            <div className="preview-a4-page p-8 sm:p-12 rounded-2xl print:p-0 print:border-0 print:shadow-none min-h-[297mm] flex flex-col justify-between print-page-break">
              <div className="space-y-5">
                
                <div className="border-b-4 border-stone-900 pb-2 flex justify-between items-baseline">
                  <div>
                    <h2 className="text-2xl font-black text-stone-950 font-serif leading-none italic">
                      Kannada Compact Study Guide
                    </h2>
                    <p className="text-[10px] text-stone-500 font-sans mt-0.5">
                      Syllable Modifiers (Kagunitha) &amp; Subscript Mergers (Ottakshara)
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#7B241C] border border-[#7B241C] px-2.5 py-0.5 rounded uppercase shrink-0">
                    Reference Sheet 2
                  </span>
                </div>

                {/* Kagunitha Syllables Splitting Chart */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#7B241C] border-b border-stone-200 pb-1 flex justify-between">
                    <span>V. Kagunitha Reference Matrix (Syllable Chart)</span>
                    <span className="text-stone-400 font-normal lowercase italic">Showing core consonant rows</span>
                  </h4>

                  <div className="overflow-x-auto border border-stone-200 rounded-xl shadow-xs">
                    <table className="w-full text-center border-collapse font-serif text-xs min-w-[650px]">
                      <thead>
                        <tr className="bg-stone-50 border-b border-stone-200 text-[9px] uppercase font-sans tracking-wider text-stone-500">
                          <th className="p-2 border-r border-stone-200 font-bold text-left">Cons.</th>
                          {KANNADA_MATRAS.map((m, i) => (
                            <th key={i} className="p-1 font-bold text-center border-r border-stone-100 last:border-r-0">
                              <span className="block text-sm font-black text-stone-800 font-kannada">{m.vowelChar}</span>
                              <span className="text-[7px] text-stone-400 font-mono block mt-0.5 leading-none">{m.matraName.slice(0, 4)}</span>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 font-medium text-stone-900">
                        {sampleConsonants.slice(0, 10).map((con, idx) => {
                          const syllables = generateKagunitha(con.char, con.root);
                          return (
                            <tr key={idx} className="hover:bg-stone-50/50">
                              <td className="p-1.5 font-sans font-black bg-stone-50/50 text-left border-r border-stone-200 text-xs text-[#7B241C]">
                                <span className="font-kannada block">{con.char}</span>
                              </td>
                              {syllables.map((s, sIdx) => (
                                <td key={sIdx} className="border-r border-stone-100 last:border-r-0 p-1">
                                  <span className="font-black block font-kannada text-stone-950 text-lg leading-tight">
                                    {s.combinedChar}
                                  </span>
                                  <span className="text-[7px] font-mono text-stone-400 block mt-0.5 leading-none">
                                    {s.transliteration}
                                  </span>
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Ottakshara subscripts block */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase font-mono tracking-wider text-[#7B241C] border-b border-stone-200 pb-1">
                    VI. Essential Ottaksharas (Subscripts &bull; ಒತ್ತಕ್ಷರಗಳು)
                  </h4>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 print:grid-cols-4">
                    {/* Render different category and some modified/identical together */}
                    {OTTAKSHARA_DATA.slice(0, 8).map((item) => (
                      <div key={item.id} className="border border-stone-200 rounded-lg p-2.5 bg-stone-50/10 flex gap-2.5">
                        <div className="flex flex-col items-center justify-center shrink-0 w-11 bg-white border border-stone-100 rounded p-1 leading-none">
                          <span className="text-[14px] font-black text-stone-900 font-kannada leading-tight">{item.consonant}</span>
                          <div className="w-full border-t border-stone-100 my-0.5" />
                          <span className="text-[14px] font-black text-[#7B241C] font-kannada leading-tight">{item.vattuSymbol}</span>
                        </div>

                        <div className="font-sans space-y-0.5 flex-1 text-[11px] leading-tight">
                          <div className="flex justify-between items-baseline gap-1">
                            <strong className="font-bold text-stone-900 truncate max-w-[50px]">{item.consonantName}-vattu</strong>
                            <span className="text-[8px] font-mono text-[#7B241C] bg-[#7B241C]/5 px-1 rounded">
                              [{item.transliteration}]
                            </span>
                          </div>
                          <span className="text-[8px] text-stone-400 uppercase tracking-wider block">
                            Type: {item.category}
                          </span>
                          <div className="text-[9px] text-stone-500 font-serif border-t border-stone-100 pt-0.5 flex justify-between gap-1 mt-0.5">
                            <span className="font-bold font-kannada">{item.examples[0]?.kannadaWord}</span>
                            <span className="italic truncate">{item.examples[0]?.meaningEn}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <div className="border-t border-stone-200 pt-5 flex justify-between text-[10px] font-mono text-stone-400 uppercase tracking-widest">
                <span>Kannada Quick Reference Guide</span>
                <span>Page 2 of 2</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
