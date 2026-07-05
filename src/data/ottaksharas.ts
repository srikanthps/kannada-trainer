export interface OttaksharaExample {
  kannadaWord: string;
  transliteration: string;
  meaningEn: string;
  meaningHi: string;
}

export interface OttaksharaItem {
  id: string;
  consonant: string;      // Parent consonant, e.g., "ಕ"
  consonantName: string;  // e.g., "Ka"
  vattuSymbol: string;    // Only the subscript part, e.g., "್ಕ" (virama + ka)
  sampleCombined: string;  // Doubled form, e.g., "ಕ್ಕ"
  transliteration: string; // e.g., "kka"
  vattuName: string;      // Name, e.g., "Ka-vattu"
  vattuNameKn: string;    // e.g., "ಕ ಒತ್ತು" (Ka-Vattu)
  category: 'identical' | 'modified' | 'different';
  descriptionEn: string;
  descriptionHi: string;
  examples: OttaksharaExample[];
}

export const OTTAKSHARA_DATA: OttaksharaItem[] = [
  // --- DIFFERENT SHAPE (Category: different) ---
  {
    id: 'ott_ta',
    consonant: 'ತ',
    consonantName: 'Ta',
    vattuSymbol: '್ತ',
    sampleCombined: 'ತ್ತ',
    transliteration: 'tta',
    vattuName: 'Ta-vattu',
    vattuNameKn: 'ತ ಒತ್ತು',
    category: 'different',
    descriptionEn: 'The subscript is completely different! It looks like a small looping backward "s" shape. Vital to memorize.',
    descriptionHi: 'इसका सबस्क्रिप्ट पूरी तरह से अलग है! यह छोटे पीछे की ओर मुड़ते हुए "s" आकार की तरह दिखता है। याद रखना बेहद ज़रूरी है।',
    examples: [
      { kannadaWord: 'ಕತ್ತೆ', transliteration: 'Katte', meaningEn: 'Donkey', meaningHi: 'गधा' },
      { kannadaWord: 'ಹತ್ತು', transliteration: 'Hattu', meaningEn: 'Ten / 10', meaningHi: 'दस / १०' },
      { kannadaWord: 'ಉತ್ತರ', transliteration: 'Utthara', meaningEn: 'Answer / North', meaningHi: 'उत्तर / दिशा' }
    ]
  },
  {
    id: 'ott_na',
    consonant: 'ನ',
    consonantName: 'Na',
    vattuSymbol: '್ನ',
    sampleCombined: 'ನ್ನ',
    transliteration: 'nna',
    vattuName: 'Na-vattu',
    vattuNameKn: 'ನ ಒತ್ತು',
    category: 'different',
    descriptionEn: 'Has a completely unique shape looking like a sideways hook or a hanging loop. It does not resemble "ನ" at all.',
    descriptionHi: 'इसकी एक अनूठी आकृति है जो एक तिरछे हुक या लटके हुए लूप जैसी दिखती है। यह मूल वर्ण "ನ" से बिल्कुल नहीं मिलता।',
    examples: [
      { kannadaWord: 'ಚಿನ್ನ', transliteration: 'Chinna', meaningEn: 'Gold / Sweetheart', meaningHi: 'सोना / प्यारा' },
      { kannadaWord: 'ಕನ್ನಡ', transliteration: 'Kannada', meaningEn: 'Kannada Language', meaningHi: 'कन्नड़ भाषा' },
      { kannadaWord: 'ಅನ್ನ', transliteration: 'Anna', meaningEn: 'Cooked Rice', meaningHi: 'पका हुआ चावल' }
    ]
  },
  {
    id: 'ott_ma',
    consonant: 'ಮ',
    consonantName: 'Ma',
    vattuSymbol: '್ಮ',
    sampleCombined: 'ಮ್ಮ',
    transliteration: 'mma',
    vattuName: 'Ma-vattu',
    vattuNameKn: 'ಮ ಒತ್ತು',
    category: 'different',
    descriptionEn: 'An entirely unique circular loop with an open top-right hook. Frequently used in family references.',
    descriptionHi: 'एक पूरी तरह से अनोखा गोलाकार लूप जिसके साथ ऊपर दाहिनी ओर एक खुला हुक होता है। परिवार से जुड़े शब्दों में अक्सर उपयोग किया जाता है।',
    examples: [
      { kannadaWord: 'ಅಮ್ಮ', transliteration: 'Amma', meaningEn: 'Mother', meaningHi: 'माँ / माता' },
      { kannadaWord: 'ತಮ್ಮ', transliteration: 'Thamma', meaningEn: 'Younger Brother', meaningHi: 'छोटा भाई' },
      { kannadaWord: 'ನೆಮ್ಮದಿ', transliteration: 'Nemmadi', meaningEn: 'Peace of mind', meaningHi: 'मन की शांति' }
    ]
  },
  {
    id: 'ott_ya',
    consonant: 'ಯ',
    consonantName: 'Ya',
    vattuSymbol: '್ಯ',
    sampleCombined: 'ತ್ಯ', // combined with 'ta' to show common use
    transliteration: 'tya',
    vattuName: 'Ya-vattu',
    vattuNameKn: 'ಯ ಒತ್ತು',
    category: 'different',
    descriptionEn: 'Draws as a broad horizontal cradle curve (hook) attached to the right side of the base letter. Extremely common in abstract words.',
    descriptionHi: 'यह मूल अक्षर के दाहिनी ओर लटके एक बड़े क्षैतिज वक्र (झूले) के समान बनता है। अमूर्त और ज्ञान संबंधी शब्दों में बेहद आम है।',
    examples: [
      { kannadaWord: 'ಸತ್ಯ', transliteration: 'Sathya', meaningEn: 'Truth / Honest', meaningHi: 'सत्य / सच' },
      { kannadaWord: 'ವಿದ್ಯೆ', transliteration: 'Vidye', meaningEn: 'Knowledge / Study', meaningHi: 'विद्या / शिक्षा' },
      { kannadaWord: 'ಸೂರ್ಯ', transliteration: 'Soorya', meaningEn: 'Sun', meaningHi: 'सूर्य / सूरज' }
    ]
  },
  {
    id: 'ott_ra',
    consonant: 'ರ',
    consonantName: 'Ra',
    vattuSymbol: '್ರ', // Ra-vattu
    sampleCombined: 'ಪ್ರ', // combined with 'pa' to show common use
    transliteration: 'pra',
    vattuName: 'Ra-vattu (Praphala)',
    vattuNameKn: 'ರ ಒತ್ತು (ಪ್ರಫಲ)',
    category: 'different',
    descriptionEn: 'Called "Praphala", written as a diagonal slash trailing into a hook underneath the right side of the base letter. Signals an immediate pre-consonantal R.',
    descriptionHi: 'इसे "प्रफल" कहा जाता है, यह मूल अक्षर के दाहिनी ओर नीचे की ओर जाते हुए हुकनुमा वक्र के रूप में जुड़ता है। यह त्वरित संयुक्त र ध्वनि दर्शाता है।',
    examples: [
      { kannadaWord: 'ಪ್ರಕಾಶ', transliteration: 'Prakaasha', meaningEn: 'Light / Brightness', meaningHi: 'प्रकाश / उजाला' },
      { kannadaWord: 'ಕ್ರಮ', transliteration: 'Krama', meaningEn: 'Order / Steps', meaningHi: 'क्रम / अनुशासन' },
      { kannadaWord: 'ಪ್ರೀತಿ', transliteration: 'Preethi', meaningEn: 'Love / Affection', meaningHi: 'प्रेम / प्यार' }
    ]
  },

  // --- MODIFIED SHAPE (Category: modified) ---
  {
    id: 'ott_ka',
    consonant: 'ಕ',
    consonantName: 'Ka',
    vattuSymbol: '್ಕ',
    sampleCombined: 'ಕ್ಕ',
    transliteration: 'kka',
    vattuName: 'Ka-vattu',
    vattuNameKn: 'ಕ ಒತ್ತು',
    category: 'modified',
    descriptionEn: 'The figure-eight shape is simplified! The top tick is removed, and the vertical loops are slightly flattened.',
    descriptionHi: 'मूल वर्ण "ಕ" का आठनुमा आकार सरल हो जाता है! शीर्ष का टिक हट जाता है, और लूप नीचे की तरफ सपाट होकर बनता है।',
    examples: [
      { kannadaWord: 'ಅಕ್ಕ', transliteration: 'Akka', meaningEn: 'Elder Sister', meaningHi: 'बड़ी बहन' },
      { kannadaWord: 'ಚುಕ್ಕೆ', transliteration: 'Chukke', meaningEn: 'Star / Dot', meaningHi: 'तारा / बिंदु' },
      { kannadaWord: 'ಪಕ್ಕ', transliteration: 'Pakka', meaningEn: 'Side / Next to', meaningHi: 'नज़दीक / बगल' }
    ]
  },
  {
    id: 'ott_tha_retro',
    consonant: 'ಠ',
    consonantName: 'ṭha',
    vattuSymbol: '್ಠ',
    sampleCombined: 'ಟ್ಠ',
    transliteration: 'ttha',
    vattuName: 'Tha-vattu (Retroflex)',
    vattuNameKn: 'ಠ ಒತ್ತು',
    category: 'modified',
    descriptionEn: 'Loses its top tick and inherent shape. Combines as a clean circular ring under the base character.',
    descriptionHi: 'शीर्ष टिक को हटाकर मूल बंद चक्र के रूप में आधार वर्ण के ठीक नीचे छोटा होकर जुड़ता है।',
    examples: [
      { kannadaWord: 'ನಿಷ್ಠೆ', transliteration: 'Nishthe', meaningEn: 'Devotion / Dedication', meaningHi: 'निष्ठा / समर्पण' },
      { kannadaWord: 'ಶ್ರೇಷ್ಠ', transliteration: 'Shreshtha', meaningEn: 'Excellent / Best', meaningHi: 'श्रेष्ठ / उत्तम' }
    ]
  },
  {
    id: 'ott_dha',
    consonant: 'ಧ',
    consonantName: 'Dha',
    vattuSymbol: '್ಧ',
    sampleCombined: 'ದ್ಧ',
    transliteration: 'ddha',
    vattuName: 'Dha-vattu',
    vattuNameKn: 'ಧ ಒತ್ತು',
    category: 'modified',
    descriptionEn: 'Loses the top tick (Talakattu) and retains the double hump shape with its vertical downward aspiration tail.',
    descriptionHi: 'शीर्ष टिक हट जाता है और यह अपने दोहरे कूबड़ के साथ नीचे लटकती हुई महाप्राण रेखा को बरकरार रखता है।',
    examples: [
      { kannadaWord: 'ಬುದ್ಧಿ', transliteration: 'Buddhi', meaningEn: 'Intellect / Brains', meaningHi: 'बुद्धि / समझ' },
      { kannadaWord: 'ಶ್ರದ್ಧೆ', transliteration: 'Shraddhe', meaningEn: 'Faith / Diligence', meaningHi: 'श्रद्धा / ध्यान' }
    ]
  },
  {
    id: 'ott_bha',
    consonant: 'ಭ',
    consonantName: 'Bha',
    vattuSymbol: '್ಭ',
    sampleCombined: 'ದ್ಭ',
    transliteration: 'dbha',
    vattuName: 'Bha-vattu',
    vattuNameKn: 'ಭ ಒತ್ತು',
    category: 'modified',
    descriptionEn: 'Replicates the bottom loop of ಭ but skips the top tick, remaining flat on top under the base char.',
    descriptionHi: 'मूल "ಭ" के निचले हिस्से को दोहराता है लेकिन ऊपर की टिक को छोड़ देता है।',
    examples: [
      { kannadaWord: 'ಗರ್ಭ', transliteration: 'Garbha', meaningEn: 'Womb / Core', meaningHi: 'गर्भ / केंद्र' },
      { kannadaWord: 'ಅದ್ಭುತ', transliteration: 'Adbhutha', meaningEn: 'Wonderful / Amazing', meaningHi: 'अद्भुत / आश्चर्यजनक' }
    ]
  },
  {
    id: 'ott_sha_retro',
    consonant: 'ಷ',
    consonantName: 'Ṣa',
    vattuSymbol: '್ಷ',
    sampleCombined: 'ಕ್ಷ', // conjoins ka + sha
    transliteration: 'ksha',
    vattuName: 'Sha-vattu (Retroflex)',
    vattuNameKn: 'ಷ ಒತ್ತು',
    category: 'modified',
    descriptionEn: 'Most famously conjoins with ಕ (ka) to write the classic composite phoneme "ಕ್ಷ" (ksha). Features a modified double-hump with a diagonal strike.',
    descriptionHi: 'यह सबसे प्रसिद्ध रूप से ಕ (ka) के साथ जुड़कर "ಕ್ಷ" (ksha) संयुक्त अक्षर बनाता है। इसमें बीच में कटी रेखा के साथ संशोधित कूबड़ होते हैं।',
    examples: [
      { kannadaWord: 'ಪಕ್ಷಾ', transliteration: 'Paksha', meaningEn: 'Faction / Side / Wing', meaningHi: 'पक्ष / पंख' },
      { kannadaWord: 'ದಕ್ಷತೆ', transliteration: 'Dakshathe', meaningEn: 'Efficiency', meaningHi: 'दक्षता / कार्यकुशलता' },
      { kannadaWord: 'ಲಕ್ಷ್ಮಿ', transliteration: 'Lakshmi', meaningEn: 'Goddess Lakshmi', meaningHi: 'देवी लक्ष्मी' }
    ]
  },

  // --- IDENTICAL / SYMMETRICAL (Category: identical) ---
  {
    id: 'ott_ga',
    consonant: 'ಗ',
    consonantName: 'Ga',
    vattuSymbol: '್ಗ',
    sampleCombined: 'ಗ್ಗ',
    transliteration: 'gga',
    vattuName: 'Ga-vattu',
    vattuNameKn: 'ಗ ಒತ್ತು',
    category: 'identical',
    descriptionEn: 'Identical shape! Simply loses its top tick (Talakattu) and sits smaller underneath.',
    descriptionHi: 'समान आकार! यह केवल अपने सिर का टिक खो देता है और आधार के नीचे छोटे आकार में आ जाता है।',
    examples: [
      { kannadaWord: 'ಮೊಗ್ಗು', transliteration: 'Moggu', meaningEn: 'Flower Bud', meaningHi: 'फूल की कली' },
      { kannadaWord: 'ಖಡ್ಗ', transliteration: 'Khadga', meaningEn: 'Sword', meaningHi: 'तलवार' }
    ]
  },
  {
    id: 'ott_cha',
    consonant: 'ಚ',
    consonantName: 'Cha',
    vattuSymbol: '್ಚ',
    sampleCombined: 'ಚ್ಚ',
    transliteration: 'chcha',
    vattuName: 'Cha-vattu',
    vattuNameKn: 'ಚ ಒತ್ತು',
    category: 'identical',
    descriptionEn: 'Perfect symmetry. It is the identical "ಚ" symbol placed subscript with no top tick.',
    descriptionHi: 'बिल्कुल समान आकार। बिना ऊपर के टिक के समान "ಚ" चिह्न नीचे जुड़ता है।',
    examples: [
      { kannadaWord: 'ಅಚ್ಚರಿ', transliteration: 'Acchari', meaningEn: 'Wonder / Surprise', meaningHi: 'आश्चर्य / अचंभे' },
      { kannadaWord: 'ಪಚ್ಚೆ', transliteration: 'Pachche', meaningEn: 'Emerald / Green', meaningHi: 'पन्ना / हरा रंग' }
    ]
  },
  {
    id: 'ott_ja',
    consonant: 'ಜ',
    consonantName: 'Ja',
    vattuSymbol: '್ಜ',
    sampleCombined: 'ಜ್ಜ',
    transliteration: 'jja',
    vattuName: 'Ja-vattu',
    vattuNameKn: 'ಜ ಒತ್ತು',
    category: 'identical',
    descriptionEn: 'Symmetrical. Simply scale down the parent letter and place it below.',
    descriptionHi: 'समान आकार। बस मूल अक्षर का आकार थोड़ा सीमित करके नीचे रख दें।',
    examples: [
      { kannadaWord: 'ಅಜ್ಜಿ', transliteration: 'Ajji', meaningEn: 'Grandmother', meaningHi: 'दादी / नानी' },
      { kannadaWord: 'ಹೆಜ್ಜೆ', transliteration: 'Hejje', meaningEn: 'Step / Footprint', meaningHi: 'कदम / पदचिह्न' }
    ]
  },
  {
    id: 'ott_da_dental',
    consonant: 'ದ',
    consonantName: 'Da',
    vattuSymbol: '್ದ',
    sampleCombined: 'ದ್ದ',
    transliteration: 'dda',
    vattuName: 'Da-vattu (Dental)',
    vattuNameKn: 'ದ ಒತ್ತು',
    category: 'identical',
    descriptionEn: 'Identical layout. Sits underneath the base character as a smaller "ದ" with no top tick.',
    descriptionHi: 'बिल्कुल समान आकृति। बिना ऊपर के टिक के छोटे "ದ" के रूप में नीचे बैठता है।',
    examples: [
      { kannadaWord: 'ಎದ್ದು', transliteration: 'Eddu', meaningEn: 'Having stood up', meaningHi: 'उठकर / खड़े होकर' },
      { kannadaWord: 'ಮುದ್ದು', transliteration: 'Muddu', meaningEn: 'Cute / Loving', meaningHi: 'दुलारा / प्यारा' }
    ]
  },
  {
    id: 'ott_pa',
    consonant: 'ಪ',
    consonantName: 'Pa',
    vattuSymbol: '್ಪ',
    sampleCombined: 'ಪ್ಪ',
    transliteration: 'ppa',
    vattuName: 'Pa-vattu',
    vattuNameKn: 'ಪ ಒತ್ತು',
    category: 'identical',
    descriptionEn: 'Identical shape, without the top tick. Very common in relation nouns.',
    descriptionHi: 'बिना ऊपर की टिक के समान आकार है। संबधवाचक संज्ञाओं में बहुत आम है।',
    examples: [
      { kannadaWord: 'ಅಪ್ಪ', transliteration: 'Appa', meaningEn: 'Father / Papa', meaningHi: 'पिता / पापा' },
      { kannadaWord: 'ಒಪ್ಪಿಗೆ', transliteration: 'Oppige', meaningEn: 'Agreement / Consent', meaningHi: 'सहमति / मंज़ूरी' }
    ]
  },
  {
    id: 'ott_ba',
    consonant: 'ಬ',
    consonantName: 'Ba',
    vattuSymbol: '್ಬ',
    sampleCombined: 'ಬ್ಬ',
    transliteration: 'bba',
    vattuName: 'Ba-vattu',
    vattuNameKn: 'ಬ ಒತ್ತು',
    category: 'identical',
    descriptionEn: 'Symmetrical. Sits beneath the base as a smaller oval shape with no top tick.',
    descriptionHi: 'समान संरचना। बिना किसी ऊपर के टिक के अंडाकार रूप में नीचे रहता है।',
    examples: [
      { kannadaWord: 'ಹಬ್ಬ', transliteration: 'Habba', meaningEn: 'Festival / Celebration', meaningHi: 'त्यौहार / उत्सव' },
      { kannadaWord: 'ಕಬ್ಬು', transliteration: 'Kabbu', meaningEn: 'Sugarcane', meaningHi: 'गन्ना' }
    ]
  },
  {
    id: 'ott_la',
    consonant: 'ಲ',
    consonantName: 'La',
    vattuSymbol: '್ಲ',
    sampleCombined: 'ಲ್ಲ',
    transliteration: 'lla',
    vattuName: 'La-vattu',
    vattuNameKn: 'ಲ ಒತ್ತು',
    category: 'identical',
    descriptionEn: 'Perfect identical wave, scaled down and positioned under the primary letters.',
    descriptionHi: 'बिल्कुल समान आकार की तरंग, आकार में छोटी होकर प्राथमिक अक्षर के नीचे स्थान लेती है।',
    examples: [
      { kannadaWord: 'ಹಲ್ಲು', transliteration: 'Hallu', meaningEn: 'Tooth', meaningHi: 'दाँत' },
      { kannadaWord: 'ಕಲ್ಲು', transliteration: 'Kallu', meaningEn: 'Stone / Rock', meaningHi: 'पत्थर / चट्टान' },
      { kannadaWord: 'ಬೆಲ್ಲ', transliteration: 'Bella', meaningEn: 'Jaggery / Sweetener', meaningHi: 'गुड़' }
    ]
  },
  {
    id: 'ott_va',
    consonant: 'ವ',
    consonantName: 'Va',
    vattuSymbol: '್ವ',
    sampleCombined: 'ವ್ವ',
    transliteration: 'vva',
    vattuName: 'Va-vattu',
    vattuNameKn: 'ವ ಒತ್ತು',
    category: 'identical',
    descriptionEn: 'Symmetrical. An identical "ವ" loop under the base character.',
    descriptionHi: 'सममित आकार। आधार वक्र के बिल्कुल नीचे समान "ವ" लूप के रूप में जुड़ता है।',
    examples: [
      { kannadaWord: 'ಅವ್ವ', transliteration: 'Avva', meaningEn: 'Mother / Elder woman', meaningHi: 'माँ / सम्मानीय स्त्री' },
      { kannadaWord: 'ದ್ವಾರ', transliteration: 'Dwaara', meaningEn: 'Gateway / Doorway', meaningHi: 'द्वार / फाटक' }
    ]
  },
  {
    id: 'ott_la_retro',
    consonant: 'ಳ',
    consonantName: 'ḷa',
    vattuSymbol: '್ಳ',
    sampleCombined: 'ಳ್ಳ',
    transliteration: 'lla',
    vattuName: 'La-vattu (Retroflex)',
    vattuNameKn: 'ಳ ಒತ್ತು',
    category: 'identical',
    descriptionEn: 'The unique twin curl is beautifully represented subscript style, losing the top tick.',
    descriptionHi: 'मूर्धन्य ळ की विशिष्ट जुड़वां घुमावदार आकृति को छोटा करके नीचे दिखाया जाता है।',
    examples: [
      { kannadaWord: 'ಕಳ್ಳ', transliteration: 'Kalla', meaningEn: 'Thief / Rogue', meaningHi: 'चोर' },
      { kannadaWord: 'ಬಳ್ಳಿ', transliteration: 'Balli', meaningEn: 'Creeper Vine', meaningHi: 'लता / बेल' }
    ]
  }
];

export interface CustomizableCombination {
  base: string;
  baseTrans: string;
  baseName: string;
  sub: string;
  subTrans: string;
  subName: string;
  combined: string;
  exampleWord: string;
  exampleMeaning: string;
  exampleTrans: string;
}

// Interactive customizable sandbox choices for the user to try combining!
export const INTERACTIVE_BASES = [
  // Ka-Varga
  { char: 'ಕ', transliteration: 'ka', name: 'Ka' },
  { char: 'ಖ', transliteration: 'kha', name: 'Kha' },
  { char: 'ಗ', transliteration: 'ga', name: 'Ga' },
  { char: 'ಘ', transliteration: 'gha', name: 'Gha' },
  { char: 'ಙ', transliteration: 'nga', name: 'Nga' },
  // Cha-Varga
  { char: 'ಚ', transliteration: 'cha', name: 'Cha' },
  { char: 'ಛ', transliteration: 'chha', name: 'Chha' },
  { char: 'ಜ', transliteration: 'ja', name: 'Ja' },
  { char: 'ಝ', transliteration: 'jha', name: 'Jha' },
  { char: 'ಞ', transliteration: 'nya', name: 'Nya' },
  // Ta-Varga (Retroflex)
  { char: 'ಟ', transliteration: 'ta', name: 'Ta (Retroflex)' },
  { char: 'ಠ', transliteration: 'tha', name: 'Tha (Retroflex)' },
  { char: 'ಡ', transliteration: 'da', name: 'Da (Retroflex)' },
  { char: 'ಢ', transliteration: 'dha', name: 'Dha (Retroflex)' },
  { char: 'ಣ', transliteration: 'na', name: 'Na (Retroflex)' },
  // Tha-Varga (Dental)
  { char: 'ತ', transliteration: 'tha', name: 'Tha (Dental)' },
  { char: 'ಥ', transliteration: 'thha', name: 'Thha (Dental)' },
  { char: 'ದ', transliteration: 'da', name: 'Da (Dental)' },
  { char: 'ಧ', transliteration: 'dha', name: 'Dha (Dental)' },
  { char: 'ನ', transliteration: 'na', name: 'Na (Dental)' },
  // Pa-Varga
  { char: 'ಪ', transliteration: 'pa', name: 'Pa' },
  { char: 'ಫ', transliteration: 'pha', name: 'Pha' },
  { char: 'ಬ', transliteration: 'ba', name: 'Ba' },
  { char: 'ಭ', transliteration: 'bha', name: 'Bha' },
  { char: 'ಮ', transliteration: 'ma', name: 'Ma' },
  // Avargiya
  { char: 'ಯ', transliteration: 'ya', name: 'Ya' },
  { char: 'ರ', transliteration: 'ra', name: 'Ra' },
  { char: 'ಲ', transliteration: 'la', name: 'La' },
  { char: 'ವ', transliteration: 'va', name: 'Va' },
  { char: 'ಶ', transliteration: 'sha', name: 'Sha (Palatal)' },
  { char: 'ಷ', transliteration: 'sha', name: 'Sha (Retroflex)' },
  { char: 'ಸ', transliteration: 'sa', name: 'Sa' },
  { char: 'ಹ', transliteration: 'ha', name: 'Ha' },
  { char: 'ಳ', transliteration: 'la', name: 'La (Retroflex)' }
];

export const INTERACTIVE_SUBSCRIPTS = [
  // Ka-Varga
  { childChar: 'ಕ', vattu: '್ಕ', transliteration: 'k', name: 'Ka-vattu', details: 'Slightly simplified curve' },
  { childChar: 'ಖ', vattu: '್ಖ', transliteration: 'kh', name: 'Kha-vattu', details: 'Loses top tick' },
  { childChar: 'ಗ', vattu: '್ಗ', transliteration: 'g', name: 'Ga-vattu', details: 'Identical shape' },
  { childChar: 'ಘ', vattu: '್ಘ', transliteration: 'gh', name: 'Gha-vattu', details: 'Loses top tick' },
  { childChar: 'ಙ', vattu: '್ಙ', transliteration: 'ng', name: 'Nga-vattu', details: 'Loses top tick' },
  // Cha-Varga
  { childChar: 'ಚ', vattu: '್ಚ', transliteration: 'ch', name: 'Cha-vattu', details: 'Identical shape' },
  { childChar: 'ಛ', vattu: '್ಛ', transliteration: 'chh', name: 'Chha-vattu', details: 'Loses top tick' },
  { childChar: 'ಜ', vattu: '್ಜ', transliteration: 'j', name: 'Ja-vattu', details: 'Identical shape' },
  { childChar: 'ಝ', vattu: '್ಝ', transliteration: 'jh', name: 'Jha-vattu', details: 'Loses top tick' },
  { childChar: 'ಞ', vattu: '್ಞ', transliteration: 'ny', name: 'Nya-vattu', details: 'Loses top tick' },
  // Ta-Varga (Retroflex)
  { childChar: 'ಟ', vattu: '್ಟ', transliteration: 't', name: 'Ta-vattu (Retroflex)', details: 'Identical shape' },
  { childChar: 'ಠ', vattu: '್ಠ', transliteration: 'th', name: 'Tha-vattu (Retroflex)', details: 'Completely circular loop' },
  { childChar: 'ಡ', vattu: '್ಡ', transliteration: 'd', name: 'Da-vattu (Retroflex)', details: 'Identical shape' },
  { childChar: 'ಢ', vattu: '್ಢ', transliteration: 'dh', name: 'Dha-vattu (Retroflex)', details: 'Identical shape' },
  { childChar: 'ಣ', vattu: '್ಣ', transliteration: 'n', name: 'Na-vattu (Retroflex)', details: 'Loses top tick' },
  // Tha-Varga (Dental)
  { childChar: 'ತ', vattu: '್ತ', transliteration: 't', name: 'Ta-vattu (Dental)', details: 'Completely different loop (backward s)' },
  { childChar: 'ಥ', vattu: '್ಥ', transliteration: 'th', name: 'Thha-vattu (Dental)', details: 'Identical shape with center dot' },
  { childChar: 'ದ', vattu: '್ದ', transliteration: 'd', name: 'Da-vattu (Dental)', details: 'Identical shape' },
  { childChar: 'ಧ', vattu: '್ಧ', transliteration: 'dh', name: 'Dha-vattu (Dental)', details: 'Double hump with downward tail' },
  { childChar: 'ನ', vattu: '್ನ', transliteration: 'n', name: 'Na-vattu (Dental)', details: 'Sideways hook form' },
  // Pa-Varga
  { childChar: 'ಪ', vattu: '್ಪ', transliteration: 'p', name: 'Pa-vattu', details: 'Identical shape' },
  { childChar: 'ಫ', vattu: '್ಫ', transliteration: 'ph', name: 'Pha-vattu', details: 'Identical shape with right extension' },
  { childChar: 'ಬ', vattu: '್ಬ', transliteration: 'b', name: 'Ba-vattu', details: 'Identical shape' },
  { childChar: 'ಭ', vattu: '್ಭ', transliteration: 'bh', name: 'Bha-vattu', details: 'Loses top tick' },
  { childChar: 'ಮ', vattu: '್ಮ', transliteration: 'm', name: 'Ma-vattu', details: 'Circular bottom bead form' },
  // Avargiya
  { childChar: 'ಯ', vattu: '್ಯ', transliteration: 'y', name: 'Ya-vattu', details: 'Right side cradle hook' },
  { childChar: 'ರ', vattu: '್ರ', transliteration: 'r', name: 'Ra-vattu (Praphala)', details: 'Bottom-right diagonal hook' },
  { childChar: 'ಲ', vattu: '್ಲ', transliteration: 'l', name: 'La-vattu', details: 'Identical wave shape' },
  { childChar: 'ವ', vattu: '್ವ', transliteration: 'v', name: 'Va-vattu', details: 'Identical circle structure' },
  { childChar: 'ಶ', vattu: '್ಶ', transliteration: 'sh', name: 'Sha-vattu (Palatal)', details: 'Loses top tick' },
  { childChar: 'ಷ', vattu: '್ಷ', transliteration: 'sh', name: 'Sha-vattu (Retroflex)', details: 'Modified double hump with diagonal strike' },
  { childChar: 'ಸ', vattu: '್ಸ', transliteration: 's', name: 'Sa-vattu', details: 'Loses top tick' },
  { childChar: 'ಹ', vattu: '್ಹ', transliteration: 'h', name: 'Ha-vattu', details: 'Loses top tick' },
  { childChar: 'ಳ', vattu: '್ಳ', transliteration: 'l', name: 'La-vattu (Retroflex)', details: 'Identical shape' }
];

// Helper to check if a specific base + sub has a standard word example available
export function getSandboxCombinedDetails(baseChar: string, subChar: string): {
  combined: string;
  transliterationBefore: string;
  transliterationAfter: string;
  hasExample: boolean;
  exampleWord?: string;
  exampleTrans?: string;
  exampleMeaningEn?: string;
  exampleMeaningHi?: string;
} {
  const combined = baseChar + '್' + subChar;
  
  // Database of sandbox combos
  const combos: Record<string, { word: string; trans: string; meaningEn: string; meaningHi: string }> = {
    'ಕ-ಕ': { word: 'ಅಕ್ಕ', trans: 'Akka', meaningEn: 'Elder Sister', meaningHi: 'बड़ी बहन' },
    'ಗ-ಗ': { word: 'ಮೊಗ್ಗು', trans: 'Moggu', meaningEn: 'Flower Bud', meaningHi: 'कली' },
    'ಚ-ಚ': { word: 'ಅಚ್ಚರಿ', trans: 'Acchari', meaningEn: 'Wonder / Surprise', meaningHi: 'आश्चर्य / अचंभे' },
    'ಜ-ಜ': { word: 'ಅಜ್ಜಿ', trans: 'Ajji', meaningEn: 'Grandmother', meaningHi: 'दादी / नानी' },
    'ಟ-ಟ': { word: 'ಪೆಟ್ಟಿಗೆ', trans: 'Pettige', meaningEn: 'Box / Chest', meaningHi: 'बक्सा / संदूक' },
    'ಡ-ಡ': { word: 'ಲಡ್ಡು', trans: 'Laddu', meaningEn: 'Laddu Sweet', meaningHi: 'लड्डू (मिठाई)' },
    'ಣ-ಣ': { word: 'ಬಣ್ಣ', trans: 'Banna', meaningEn: 'Color', meaningHi: 'रंग' },
    'ತ-ತ': { word: 'ಕತ್ತೆ', trans: 'Katte', meaningEn: 'Donkey', meaningHi: 'गधा' },
    'ತ-ಯ': { word: 'ಸತ್ಯ', trans: 'Sathya', meaningEn: 'Truth', meaningHi: 'सत्य / सच' },
    'ದ-ದ': { word: 'ಮುದ್ದು', trans: 'Muddu', meaningEn: 'Cute', meaningHi: 'प्यारा' },
    'ನ-ನ': { word: 'ಕನ್ನಡ', trans: 'Kannada', meaningEn: 'Kannada Language', meaningHi: 'कन्नड़ भाषा' },
    'ಪ-ಪ': { word: 'ಅಪ್ಪ', trans: 'Appa', meaningEn: 'Father', meaningHi: 'पापा' },
    'ಪ-ರ': { word: 'ಪ್ರಕಾಶ', trans: 'Prakaasha', meaningEn: 'Light', meaningHi: 'प्रकाश' },
    'ಮ-ಮ': { word: 'ಅಮ್ಮ', trans: 'Amma', meaningEn: 'Mother', meaningHi: 'माँ' },
    'ಲ-ಲ': { word: 'ಹಲ್ಲು', trans: 'Hallu', meaningEn: 'Tooth', meaningHi: 'दाँत' },
    'ವ-ವ': { word: 'ಅವ್ವ', trans: 'Avva', meaningEn: 'Elder woman', meaningHi: 'सम्मानित बुजुर्ग' },
    'ಸ-ತ': { word: 'ಪುಸ್ತಕ', trans: 'Pusthaka', meaningEn: 'Book', meaningHi: 'पुस्तक / किताब' },
    'ಸ-ಸ': { word: 'ಬಸ್ಸು', trans: 'Bassu', meaningEn: 'Bus', meaningHi: 'बस' },
    'ಕ-ರ': { word: 'ಕ್ರಮ', trans: 'Krama', meaningEn: 'Order', meaningHi: 'क्रम' },
    'ಮ-ನ': { word: 'ನೆಮ್ಮದಿ', trans: 'Nemmadi', meaningEn: 'Peace of mind', meaningHi: 'मन की शांति' },
    'ದ-ಯ': { word: 'ವಿದ್ಯೆ', trans: 'Vidye', meaningEn: 'Knowledge', meaningHi: 'विद्या / ज्ञान' },
    'ದ-ವ': { word: 'ದ್ವಾರ', trans: 'Dwaara', meaningEn: 'Gateway', meaningHi: 'द्वार' },
    'ಸ-ಯ': { word: 'ಸೂರ್ಯ', trans: 'Soorya', meaningEn: 'Sun', meaningHi: 'सूर्य' },
    'ಲ-ಯ': { word: 'ಲಕ್ಷ್ಮಿ', trans: 'Lakshmi', meaningEn: 'Goddess Lakshmi', meaningHi: 'देवी लक्ष्मी' },
    'ಳ-ಳ': { word: 'ಕಳ್ಳ', trans: 'Kalla', meaningEn: 'Thief / Rogue', meaningHi: 'चोर' }
  };

  const key = `${baseChar}-${subChar}`;
  const existData = combos[key];
  
  return {
    combined,
    transliterationBefore: baseChar + ' + ' + subChar,
    transliterationAfter: baseChar + subChar,
    hasExample: !!existData,
    exampleWord: existData?.word,
    exampleTrans: existData?.trans,
    exampleMeaningEn: existData?.meaningEn,
    exampleMeaningHi: existData?.meaningHi
  };
}
