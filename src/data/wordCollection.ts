export interface WordItem {
  kannadaWord: string;
  transliteration: string;
  englishMeaning: string;
  hindiMeaning: string;
  breakdown: string;
  complexityTier: string;
  level: number;
}

export const TOTAL_FORGE_WORDS = 10000;

export function transliterateToHindi(kannadaText: string): string {
  if (!kannadaText) return '';
  const map: Record<string, string> = {
    // Swaras (Vowels)
    'ಅ': 'अ', 'ಆ': 'आ', 'ಇ': 'इ', 'ಈ': 'ई', 'ಉ': 'उ', 'ಊ': 'ऊ', 'ಋ': 'ऋ',
    'ಎ': 'ए', 'ಏ': 'ए', 'ಐ': 'ऐ', 'ಒ': 'ओ', 'ಓ': 'ओ', 'ಔ': 'औ',
    // Vyanjanas (Consonants)
    'ಕ': 'क', 'ಖ': 'ख', 'ಗ': 'ग', 'ಘ': 'घ', 'ಙ': 'ङ',
    'ಚ': 'च', 'ಛ': 'छ', 'ಜ': 'ज', 'ಝ': 'झ', 'ಞ': 'ञ',
    'ಟ': 'ट', 'ಠ': 'ठ', 'ಡ': 'ड', 'ಢ': 'ढ', 'ಣ': 'ण',
    'ತ': 'त', 'ಥ': 'थ', 'ದ': 'द', 'ಧ': 'ध', 'ನ': 'न',
    'ಪ': 'प', 'ಫ': 'फ', 'ಬ': 'ब', 'ಭ': 'भ', 'ಮ': 'म',
    'ಯ': 'य', 'ರ': 'र', 'ಲ': 'ल', 'ವ': 'व', 'ಶ': 'श', 'ಷ': 'ष', 'ಸ': 'स', 'ಹ': 'ह',
    'ಳ': 'ल', 'ಱ': 'र', 'ೞ': 'ल',
    // Gunitas (Vowel signs / matras)
    'ಾ': 'ा', 'ಿ': 'ि', 'ೀ': 'ी', 'ು': 'ु', 'ೂ': 'ू', 'ೃ': 'ृ',
    'ೆ': 'े', 'ೇ': 'े', 'ೈ': 'ै', 'ೊ': 'ो', 'ೋ': 'ो', 'ೌ': 'ौ',
    // Halant / Virama
    '್': '्',
    // Anusvara & Visarga
    'ಂ': 'ं', 'ಃ': 'ः',
    // Avagraha
    'ಽ': 'ऽ',
    // Numbers
    '೦': '०', '೧': '१', '೨': '२', '೩': '३', '೪': '४', '೫': '५', '೬': '६', '೭': '७', '೮': '८', '೯': '९'
  };

  let result = '';
  for (let i = 0; i < kannadaText.length; i++) {
    const char = kannadaText[i];
    result += map[char] || char;
  }
  return result;
}

// 100 Base Nouns
const NOUNS = [
  { kn: "ಮರ", tr: "mara", en: "tree", hi: "पेड़", endsWith: "a" },
  { kn: "ಮನೆ", tr: "mane", en: "house", hi: "घर", endsWith: "e" },
  { kn: "ಗಿಡ", tr: "gida", en: "plant", hi: "पौधा", endsWith: "a" },
  { kn: "ಹಾಲು", tr: "haalu", en: "milk", hi: "दूध", endsWith: "u" },
  { kn: "ಬಾಗಿಲು", tr: "baagilu", en: "door", hi: "दरवाजा", endsWith: "u" },
  { kn: "ಕಿಟಕಿ", tr: "kitaki", en: "window", hi: "खड़की", endsWith: "i" },
  { kn: "ಹಣ್ಣು", tr: "hannu", en: "fruit", hi: "फल", endsWith: "u" },
  { kn: "ನೀರು", tr: "neeru", en: "water", hi: "पानी", endsWith: "u" },
  { kn: "ಹೂವು", tr: "hoovu", en: "flower", hi: "फूल", endsWith: "u" },
  { kn: "ಪುಸ್ತಕ", tr: "pustaka", en: "book", hi: "पुस्तक", endsWith: "a" },
  { kn: "ಶಾಲೆ", tr: "shaale", en: "school", hi: "स्कूल", endsWith: "e" },
  { kn: "ಊಟ", tr: "oota", en: "meal", hi: "भोजन", endsWith: "a" },
  { kn: "ಗೆಳೆಯ", tr: "geleya", en: "friend", hi: "मित्र", endsWith: "a" },
  { kn: "ಸೂರ್ಯ", tr: "soorya", en: "sun", hi: "सूर्य", endsWith: "a" },
  { kn: "ಚಂದ್ರ", tr: "chandra", en: "moon", hi: "चंद्रमा", endsWith: "a" },
  { kn: "ನಕ್ಷತ್ರ", tr: "nakshatra", en: "star", hi: "तारा", endsWith: "a" },
  { kn: "ಆಕಾಶ", tr: "aakaasha", en: "sky", hi: "आकाश", endsWith: "a" },
  { kn: "ಕಾಡು", tr: "kaadu", en: "forest", hi: "जंगल", endsWith: "u" },
  { kn: "ನದಿ", tr: "nadi", en: "river", hi: "नदी", endsWith: "i" },
  { kn: "ಸಮುದ್ರ", tr: "samudra", en: "sea", hi: "समुद्र", endsWith: "a" },
  { kn: "ಆನೆ", tr: "aane", en: "elephant", hi: "हाथी", endsWith: "e" },
  { kn: "ಹುಲಿ", tr: "huli", en: "tiger", hi: "बाघ", endsWith: "i" },
  { kn: "ಸಿಂಹ", tr: "simha", en: "lion", hi: "शेर", endsWith: "a" },
  { kn: "ಹಕ್ಕಿ", tr: "hakki", en: "bird", hi: "पक्षी", endsWith: "i" },
  { kn: "ನಾಯಿ", tr: "naayi", en: "dog", hi: "कुत्ता", endsWith: "i" },
  { kn: "ಬೆಕ್ಕು", tr: "bekku", en: "cat", hi: "बिल्ली", endsWith: "u" },
  { kn: "ಕುದುರೆ", tr: "kudure", en: "horse", hi: "घोड़ा", endsWith: "e" },
  { kn: "ಹಸು", tr: "hasu", en: "cow", hi: "गाय", endsWith: "u" },
  { kn: "ಮೀನು", tr: "meenu", en: "fish", hi: "मछली", endsWith: "u" },
  { kn: "ಹಾವು", tr: "haavu", en: "snake", hi: "सांप", endsWith: "u" },
  { kn: "ಕಣ್ಣು", tr: "kannu", en: "eye", hi: "आँख", endsWith: "u" },
  { kn: "ಕೈ", tr: "kai", en: "hand", hi: "हाथ", endsWith: "i" },
  { kn: "ಕಾಲು", tr: "kaalu", en: "leg", hi: "पैर", endsWith: "u" },
  { kn: "ಕಿವಿ", tr: "kivi", en: "ear", hi: "कान", endsWith: "i" },
  { kn: "ಮೂಗು", tr: "moogu", en: "nose", hi: "नाक", endsWith: "u" },
  { kn: "ಹಲ್ಲು", tr: "hallu", en: "tooth", hi: "दांत", endsWith: "u" },
  { kn: "ತಲೆ", tr: "tale", en: "head", hi: "सिर", endsWith: "e" },
  { kn: "ಬೆರಳು", tr: "beralu", en: "finger", hi: "उंगली", endsWith: "u" },
  { kn: "ಮನಸ್ಸು", tr: "manassu", en: "mind", hi: "मन", endsWith: "u" },
  { kn: "ಭಾಷೆ", tr: "bhaashe", en: "language", hi: "भाषा", endsWith: "e" },
  { kn: "ದೇಶ", tr: "desha", en: "country", hi: "देश", endsWith: "a" },
  { kn: "ರಾಜ್ಯ", tr: "raajya", en: "state", hi: "राज्य", endsWith: "a" },
  { kn: "ನಗರು", tr: "nagaru", en: "city", hi: "शहर", endsWith: "u" },
  { kn: "ಹಳ್ಳಿ", tr: "halli", en: "village", hi: "गाँव", endsWith: "i" },
  { kn: "ರಸ್ತೆ", tr: "raste", en: "road", hi: "सड़क", endsWith: "e" },
  { kn: "ದಿನ", tr: "dina", en: "day", hi: "दिन", endsWith: "a" },
  { kn: "ರಾತ್ರಿ", tr: "raatri", en: "night", hi: "रात", endsWith: "i" },
  { kn: "ವರ್ಷ", tr: "varsha", en: "year", hi: "वर्ष", endsWith: "a" },
  { kn: "ಸಮಯ", tr: "samaya", en: "time", hi: "समय", endsWith: "a" },
  { kn: "ತಿಂಗಳು", tr: "tingalu", en: "month", hi: "महीना", endsWith: "u" },
  { kn: "ಜನ", tr: "jana", en: "people", hi: "लोग", endsWith: "a" },
  { kn: "ಅಕ್ಕ", tr: "akka", en: "elder sister", hi: "बड़ी बहन", endsWith: "a" },
  { kn: "ಅಣ್ಣ", tr: "anna", en: "elder brother", hi: "बड़ा भाई", endsWith: "a" },
  { kn: "ತಾಯಿ", tr: "taayi", en: "mother", hi: "माता", endsWith: "i" },
  { kn: "ತಂದೆ", tr: "tande", en: "father", hi: "पिता", endsWith: "e" },
  { kn: "ಮಗು", tr: "magu", en: "child", hi: "बच्चा", endsWith: "u" },
  { kn: "ಕಲ್ಲು", tr: "kallu", en: "stone", hi: "पत्थर", endsWith: "u" },
  { kn: "ಬೆಟ್ಟ", tr: "betta", en: "hill", hi: "पहाड़ी", endsWith: "a" },
  { kn: "ಚಿನ್ನ", tr: "chinna", en: "gold", hi: "सोना", endsWith: "a" },
  { kn: "ಬೆಳ್ಳಿ", tr: "belli", en: "silver", hi: "चांदी", endsWith: "i" },
  { kn: "ಕುರಿ", tr: "kuri", en: "sheep", hi: "भेड़", endsWith: "i" },
  { kn: "ಮೇಕೆ", tr: "meeke", en: "goat", hi: "बकरी", endsWith: "e" },
  { kn: "ಕೋಳಿ", tr: "kooli", en: "chicken", hi: "मुर्गी", endsWith: "i" },
  { kn: "ಆಮೆ", tr: "aame", en: "turtle", hi: "कछुआ", endsWith: "e" },
  { kn: "ಮೊಲ", tr: "mola", en: "rabbit", hi: "खरगोश", endsWith: "a" },
  { kn: "ಹಂದಿ", tr: "handi", en: "pig", hi: "सूअर", endsWith: "i" },
  { kn: "ಎತ್ತು", tr: "ettu", en: "ox", hi: "बैल", endsWith: "u" },
  { kn: "ಕರು", tr: "karu", en: "calf", hi: "बछड़ा", endsWith: "u" },
  { kn: "ಇಲಿ", tr: "ili", en: "rat", hi: "चूहा", endsWith: "i" },
  { kn: "ಕಾಗೆ", tr: "kaage", en: "crow", hi: "कौआ", endsWith: "e" },
  { kn: "ಗಿಳಿ", tr: "gili", en: "parrot", hi: "तोता", endsWith: "i" },
  { kn: "ನವಿಲು", tr: "navilu", en: "peacock", hi: "मोर", endsWith: "u" },
  { kn: "ಮೀನು", tr: "meenu", en: "fish", hi: "मछली", endsWith: "u" },
  { kn: "ಕೆರೆ", tr: "kere", en: "lake", hi: "झील", endsWith: "e" },
  { kn: "ಬಟ್ಟೆ", tr: "batte", en: "cloth", hi: "कपड़ा", endsWith: "e" },
  { kn: "ಊರು", tr: "ooru", en: "town", hi: "कस्बा", endsWith: "u" },
  { kn: "ಪೆನ್ನು", tr: "pennu", en: "pen", hi: "कलम", endsWith: "u" },
  { kn: "ದೋಣಿ", tr: "dooni", en: "boat", hi: "नाव", endsWith: "i" },
  { kn: "ಆಟ", tr: "aata", en: "game/play", hi: "खेल", endsWith: "a" },
  { kn: "ಹಾಡು", tr: "haadu", en: "song", hi: "गीत", endsWith: "u" },
  { kn: "ಕನಸು", tr: "kanasu", en: "dream", hi: "सपना", endsWith: "u" },
  { kn: "ಕೋಪ", tr: "koopa", en: "anger", hi: "गुस्सा", endsWith: "a" },
  { kn: "ಬಯಲು", tr: "bayalu", en: "field", hi: "मैदान", endsWith: "u" },
  { kn: "ಗಂಟೆ", tr: "gante", en: "bell/hour", hi: "घंटी/घंटा", endsWith: "e" },
  { kn: "ಕುರ್ಚಿ", tr: "kurchi", en: "chair", hi: "कुर्सी", endsWith: "i" },
  { kn: "ಮೇಜು", tr: "meeju", en: "table", hi: "मेज", endsWith: "u" },
  { kn: "ದೇವಸ್ಥಾನ", tr: "devasthaana", en: "temple", hi: "मंदिर", endsWith: "a" },
  { kn: "ವೈದ್ಯ", tr: "vaidya", en: "doctor", hi: "डॉक्टर", endsWith: "a" },
  { kn: "ಸೈನಿಕ", tr: "sainika", en: "soldier", hi: "सैनिक", endsWith: "a" },
  { kn: "ರೈತ", tr: "raita", en: "farmer", hi: "किसान", endsWith: "a" },
  { kn: "ಹಬ್ಬ", tr: "habba", en: "festival", hi: "त्योहार", endsWith: "a" },
  { kn: "ಮದುವೆ", tr: "maduve", en: "marriage", hi: "शादी", endsWith: "e" },
  { kn: "ಕತ್ತಿ", tr: "katti", en: "sword", hi: "तलवार", endsWith: "i" },
  { kn: "ಗಿಣ್ಣು", tr: "ginnu", en: "cheese", hi: "पनीर", endsWith: "u" },
  { kn: "ದೂಳು", tr: "doolu", en: "dust", hi: "धूल", endsWith: "u" },
  { kn: "ಮೋಡ", tr: "mooda", en: "cloud", hi: "बादल", endsWith: "a" },
  { kn: "ಮಳೆ", tr: "male", en: "rain", hi: "बारिश", endsWith: "e" },
  { kn: "ಚಿತ್ರ", tr: "chitra", en: "picture", hi: "चित्र", endsWith: "a" },
  { kn: "ಕಥೆ", tr: "kathe", en: "story", hi: "कहानी", endsWith: "e" },
  { kn: "ಬಿಸಿಲು", tr: "bisilu", en: "sunshine", hi: "धूप", endsWith: "u" }
];

// 15 Adjectives
const ADJECTIVES = [
  { kn: "ಹೊಸ", tr: "hosa", en: "new", hi: "नया" },
  { kn: "ಹಳೆಯ", tr: "haleya", en: "old", hi: "पुराना" },
  { kn: "ದೊಡ್ಡ", tr: "dodda", en: "big", hi: "बड़ा" },
  { kn: "ಚಿಕ್ಕ", tr: "chikka", en: "small", hi: "छोटा" },
  { kn: "ಸುಂದರ", tr: "sundara", en: "beautiful", hi: "सुंदर" },
  { kn: "ಒಳ್ಳೆಯ", tr: "olleya", en: "good", hi: "अच्छा" },
  { kn: "ಕೆಟ್ಟ", tr: "ketta", en: "bad", hi: "बुरा" },
  { kn: "ಬಿಸಿ", tr: "bisi", en: "hot", hi: "गर्म" },
  { kn: "ತಣ್ಣನೆಯ", tr: "tannaneya", en: "cold", hi: "ठंडा" },
  { kn: "ಸಿಹಿ", tr: "sihi", en: "sweet", hi: "मीठा" },
  { kn: "ಕಹಿ", tr: "kahi", en: "bitter", hi: "कड़वा" },
  { kn: "ಶುದ್ಧ", tr: "shuddha", en: "pure", hi: "शुद्ध" },
  { kn: "ದಟ್ಟ", tr: "datta", en: "dense", hi: "घना" },
  { kn: "ಕಪ್ಪು", tr: "kappu", en: "black", hi: "काला" },
  { kn: "ಬಿಳಿ", tr: "bili", en: "white", hi: "सफेद" }
];

// 30 Common Verbs
const VERBS = [
  { kn: "ಮಾಡು", tr: "maadu", en: "do", hi: "करना", root: "ಮಾಡು" },
  { kn: "ಹೋಗು", tr: "hogu", en: "go", hi: "जाना", root: "ಹೋಗು" },
  { kn: "ಬರು", tr: "baru", en: "come", hi: "आना", root: "ಬರು" },
  { kn: "ನೋಡು", tr: "noodu", en: "see", hi: "देखना", root: "ನೋಡು" },
  { kn: "ಓದು", tr: "oodu", en: "read", hi: "पढ़ना", root: "ಓದು" },
  { kn: "ಬರೆ", tr: "bare", en: "write", hi: "लिखना", root: "ಬರೆ" },
  { kn: "ಹೇಳು", tr: "heelu", en: "tell", hi: "कहना", root: "ಹೇಳು" },
  { kn: "ತಿನ್ನು", tr: "tinnu", en: "eat", hi: "खाना", root: "ತಿನ್ನು" },
  { kn: "ಕುಡಿ", tr: "kudi", en: "drink", hi: "पीना", root: "ಕುಡಿ" },
  { kn: "ಕೇಳು", tr: "keelu", en: "listen", hi: "सुनना", root: "ಕೇಳು" },
  { kn: "ನಡೆ", tr: "nade", en: "walk", hi: "चलना", root: "ನಡೆ" },
  { kn: "ಓಡು", tr: "oodu", en: "run", hi: "दौड़ना", root: "ಓಡು" },
  { kn: "ನಗು", tr: "nagu", en: "laugh", hi: "हंसना", root: "ನಗು" },
  { kn: "ಅಳು", tr: "alu", en: "cry", hi: "रोना", root: "ಅಳು" },
  { kn: "ಕೊಡು", tr: "kodu", en: "give", hi: "देना", root: "ಕೊಡು" },
  { kn: "ಕಲಿ", tr: "kali", en: "learn", hi: "सीखना", root: "ಕಲಿ" },
  { kn: "ತಿಳಿ", tr: "tili", en: "understand", hi: "समझना", root: "ತಿಳಿ" },
  { kn: "ಹಾಡು", tr: "haadu", en: "sing", hi: "गाना", root: "ಹಾಡು" },
  { kn: "ಕುಣಿ", tr: "kuni", en: "dance", hi: "नाचना", root: "ಕುಣಿ" },
  { kn: "ತೊಳಿ", tr: "toli", en: "wash", hi: "धोना", root: "ತೊಳಿ" },
  { kn: "ಕಟ್ಟು", tr: "kattu", en: "build", hi: "बाँधना/बनाना", root: "ಕಟ್ಟು" },
  { kn: "ಮುಟ್ಟು", tr: "muttu", en: "touch", hi: "छूना", root: "ಮುಟ್ಟು" },
  { kn: "ನೆನೆ", tr: "nene", en: "remember", hi: "याद करना", root: "ನೆನೆ" },
  { kn: "ನಂಬು", tr: "nambu", en: "believe", hi: "विश्वास करना", root: "ನಂಬು" },
  { kn: "ಬೀಳು", tr: "beelu", en: "fall", hi: "गिरना", root: "ಬೀಳು" },
  { kn: "ಗೆಲ್ಲು", tr: "gellu", en: "win", hi: "जीतना", root: "ಗೆಲ್ಲು" },
  { kn: "ಸೋಲು", tr: "soolu", en: "lose", hi: "हारना", root: "ಸೋಲು" },
  { kn: "ಅರಿ", tr: "ari", en: "know", hi: "जानना", root: "ಅರಿ" },
  { kn: "ಕರೆ", tr: "kare", en: "call", hi: "बुलाना/कॉल करना", root: "ಕರೆ" },
  { kn: "ಕೋರು", tr: "kooru", en: "request", hi: "अनुरोध करना", root: "ಕೋರು" }
];

// Apply case inflection suffix to a Kannada noun base
function inflectNoun(noun: typeof NOUNS[0], caseIndex: number) {
  const base = noun.kn;
  const endsWith = noun.endsWith;
  const baseTr = noun.tr;
  
  let kn = base;
  let tr = baseTr;
  let suffixEn = "";
  let suffixHi = "";
  let breakSuffix = "";

  switch (caseIndex) {
    case 0: // Nominative Singular
      suffixEn = "";
      suffixHi = " (एकवचन)";
      breakSuffix = "nominative singular";
      break;
    case 1: // Nominative Plural (-ಗಳು)
      kn = base + "ಗಳು";
      tr = baseTr + "galu";
      suffixEn = "s";
      suffixHi = " (बहुवचन)";
      breakSuffix = "plural marker '-ಗಳು' (-galu)";
      break;
    case 2: // Accusative Singular (-ವನ್ನು / -ಅನ್ನು)
      if (endsWith === "a") {
        kn = base + "ವನ್ನು";
        tr = baseTr + "vannu";
      } else if (endsWith === "e" || endsWith === "i") {
        kn = base.substring(0, base.length - 1) + "ೆಯನ್ನು";
        tr = baseTr.substring(0, baseTr.length - 1) + "eyannu";
      } else { // "u"
        kn = base.substring(0, base.length - 1) + "ನ್ನು";
        tr = baseTr.substring(0, baseTr.length - 1) + "annu";
      }
      suffixEn = " [direct object]";
      suffixHi = " को";
      breakSuffix = "accusative case suffix indicating direct object focus";
      break;
    case 3: // Accusative Plural (-ಗಳನ್ನು)
      kn = base + "ಗಳನ್ನು";
      tr = baseTr + "galannu";
      suffixEn = "s [direct object]";
      suffixHi = "ों को";
      breakSuffix = "plural accusative case suffix '-ಗಳನ್ನು' (-galannu)";
      break;
    case 4: // Dative Singular (-ಕ್ಕೆ / -ಗೆ)
      if (endsWith === "a") {
        kn = base + "ಕ್ಕೆ";
        tr = baseTr + "kke";
      } else if (endsWith === "e" || endsWith === "i") {
        kn = base + "ಗೆ";
        tr = baseTr + "ge";
      } else { // "u"
        kn = base.substring(0, base.length - 1) + "ಿಗೆ";
        tr = baseTr.substring(0, baseTr.length - 1) + "ige";
      }
      suffixEn = " (to/for)";
      suffixHi = " को/के लिए";
      breakSuffix = "dative case suffix (indicating direction, goal, or recipient)";
      break;
    case 5: // Dative Plural (-ಗಳಿಗೆ)
      kn = base + "ಗಳಿಗೆ";
      tr = baseTr + "galige";
      suffixEn = "s (to/for)";
      suffixHi = "ों को/के लिए";
      breakSuffix = "plural dative case suffix '-ಗಳಿಗೆ' (-galige)";
      break;
    case 6: // Locative Singular (-ದಲ್ಲಿ / -ನಲ್ಲಿ)
      if (endsWith === "a") {
        kn = base + "ದಲ್ಲಿ";
        tr = baseTr + "dalli";
      } else if (endsWith === "e" || endsWith === "i") {
        kn = base.substring(0, base.length - 1) + "ೆಯಲ್ಲಿ";
        tr = baseTr.substring(0, baseTr.length - 1) + "eyalli";
      } else { // "u"
        kn = base.substring(0, base.length - 1) + "ಿನಲ್ಲಿ";
        tr = baseTr.substring(0, baseTr.length - 1) + "inalli";
      }
      suffixEn = " (in/on/at)";
      suffixHi = " में/पर";
      breakSuffix = "locative case suffix indicating spatial or physical location";
      break;
    case 7: // Locative Plural (-ಗಳಲ್ಲಿ)
      kn = base + "ಗಳಲ್ಲಿ";
      tr = baseTr + "galalli";
      suffixEn = "s (in/on/at)";
      suffixHi = "ों में/पर";
      breakSuffix = "plural locative case suffix '-ಗಳಲ್ಲಿ' (-galalli)";
      break;
    case 8: // Instrumental / Ablative Singular (-ದಿಂದ)
      if (endsWith === "a") {
        kn = base + "ದಿಂದ";
        tr = baseTr + "dinda";
      } else if (endsWith === "e" || endsWith === "i") {
        kn = base.substring(0, base.length - 1) + "ೆಯಿಂದ";
        tr = baseTr.substring(0, baseTr.length - 1) + "eyinda";
      } else { // "u"
        kn = base.substring(0, base.length - 1) + "ಿನಿಂದ";
        tr = baseTr.substring(0, baseTr.length - 1) + "ininda";
      }
      suffixEn = " (by/from/with)";
      suffixHi = " से/के द्वारा";
      breakSuffix = "instrumental/ablative case suffix indicating origin, cause, or instrument";
      break;
    case 9: // Instrumental / Ablative Plural (-ಗಳಿಂದ)
      kn = base + "ಗಳಿಂದ";
      tr = baseTr + "galinda";
      suffixEn = "s (by/from/with)";
      suffixHi = "ों से/के द्वारा";
      breakSuffix = "plural instrumental/ablative case suffix '-ಗಳಿಂದ' (-galinda)";
      break;
  }

  return { kn, tr, suffixEn, suffixHi, breakSuffix };
}

// Conjugate a Kannada verb
function conjugateVerb(verb: typeof VERBS[0], conjugationIndex: number) {
  const root = verb.kn;
  const rootTr = verb.tr;
  const en = verb.en;
  const hi = verb.hi;

  let kn = root;
  let tr = rootTr;
  let meaningEn = "";
  let meaningHi = "";
  let desc = "";

  // Base stripping rules for standard conjugation
  let stem = root;
  let stemTr = rootTr;
  if (root.endsWith("ು")) {
    stem = root.substring(0, root.length - 1);
    stemTr = rootTr.substring(0, rootTr.length - 1);
  }

  switch (conjugationIndex) {
    case 0:
      kn = stem + "ುತ್ತಾನೆ";
      tr = stemTr + "uttaane";
      meaningEn = `he ${en}s`;
      meaningHi = `वह ${hi.replace("करना", "करता है").replace("जाना", "जाता है").replace("आना", "आता है").replace("देखना", "देखता है").replace("पढ़ना", "पढ़ता है").replace("लिखना", "लिखता है").replace("कहना", "कहता है").replace("खाना", "खाता है").replace("पीना", "पीता है").replace("सुनना", "सुनता है").replace("चलना", "चलता है").replace("दौड़ना", "दौड़ता है").replace("हंसना", "हंसता है").replace("रोना", "रोता है").replace("देना", "देता है").replace("सीखना", "सीखता है").replace("समझना", "समझता है").replace("गाना", "गाता है").replace("नाचना", "नाचता है")}`;
      desc = "Present tense, 3rd person singular masculine";
      break;
    case 1:
      kn = stem + "ುತ್ತಾಳೆ";
      tr = stemTr + "uttaale";
      meaningEn = `she ${en}s`;
      meaningHi = `वह ${hi.replace("करना", "करती है").replace("जाना", "जाती है").replace("आना", "आती है").replace("देखना", "देखती है").replace("पढ़ना", "पढ़ती है").replace("लिखना", "लिखती है").replace("कहना", "कहती है").replace("खाना", "खाती है").replace("पीना", "पीती है").replace("सुनना", "सुनती है").replace("चलना", "चलती है").replace("दौड़ना", "दौड़ती है").replace("हंसना", "हंसती है").replace("रोना", "रोती है").replace("देना", "देती है").replace("सीखना", "सीखती है").replace("समझना", "समझती है").replace("गाना", "गाती है").replace("नाचना", "नाचती है")}`;
      desc = "Present tense, 3rd person singular feminine";
      break;
    case 2:
      kn = stem + "ುತ್ತಾರೆ";
      tr = stemTr + "uttaare";
      meaningEn = `they / you (polite) ${en}`;
      meaningHi = `वे/आप ${hi.replace("करना", "करते हैं").replace("जाना", "जाते हैं").replace("आना", "आते हैं").replace("देखना", "देखते हैं").replace("पढ़ना", "पढ़ते हैं").replace("लिखना", "लिखते हैं").replace("कहना", "कहते हैं").replace("खाना", "खाते हैं").replace("पीना", "पीते हैं").replace("सुनना", "सुनते हैं").replace("चलना", "चलते हैं").replace("दौड़ना", "दौड़ते हैं")}`;
      desc = "Present tense, 3rd person plural or honorific singular";
      break;
    case 3:
      kn = stem + "ುತ್ತದೆ";
      tr = stemTr + "uttade";
      meaningEn = `it ${en}s`;
      meaningHi = `यह/वह ${hi.replace("करना", "करता है").replace("जाना", "जाता है")}`;
      desc = "Present tense, 3rd person singular neuter (animal/object)";
      break;
    case 4:
      kn = stem + "ುತ್ತೇನೆ";
      tr = stemTr + "utteene";
      meaningEn = `I ${en}`;
      meaningHi = `मैं ${hi.replace("करना", "करता हूँ")}`;
      desc = "Present tense, 1st person singular";
      break;
    case 5:
      kn = stem + "ುತ್ತೇವೆ";
      tr = stemTr + "utteeve";
      meaningEn = `we ${en}`;
      meaningHi = `हम ${hi.replace("करना", "करते हैं")}`;
      desc = "Present tense, 1st person plural";
      break;
    case 6:
      kn = stem + "ಿದನು";
      tr = stemTr + "idanu";
      meaningEn = `he did ${en}`;
      meaningHi = `उसने ${hi.replace("करना", "किया").replace("जाना", "गया").replace("आना", "आया")}`;
      desc = "Past tense, 3rd person singular masculine";
      break;
    case 7:
      kn = stem + "ಿದಳು";
      tr = stemTr + "idalu";
      meaningEn = `she did ${en}`;
      meaningHi = `उसने ${hi.replace("करना", "किया").replace("जाना", "गयी").replace("आना", "आयी")}`;
      desc = "Past tense, 3rd person singular feminine";
      break;
    case 8:
      kn = stem + "ಿದರು";
      tr = stemTr + "idaru";
      meaningEn = `they/you did ${en}`;
      meaningHi = `उन्होंने/आपने ${hi.replace("करना", "किया").replace("जाना", "गए")}`;
      desc = "Past tense, 3rd person plural / honorific singular";
      break;
    case 9:
      kn = stem + "ಿತು";
      tr = stemTr + "itu";
      meaningEn = `it did ${en}`;
      meaningHi = `उसने/यह ${hi.replace("करना", "किया")}`;
      desc = "Past tense, 3rd person singular neuter";
      break;
    case 10:
      kn = stem + "ಿದೆನು";
      tr = stemTr + "idenu";
      meaningEn = `I did ${en}`;
      meaningHi = `मैंने ${hi.replace("करना", "किया")}`;
      desc = "Past tense, 1st person singular";
      break;
    case 11:
      kn = stem + "ಿದೆವು";
      tr = stemTr + "idevu";
      meaningEn = `we did ${en}`;
      meaningHi = `हमने ${hi.replace("करना", "किया")}`;
      desc = "Past tense, 1st person plural";
      break;
    case 12:
      kn = stem + "ುವನು";
      tr = stemTr + "uvanu";
      meaningEn = `he will ${en}`;
      meaningHi = `वह ${hi.replace("करना", "करेगा")}`;
      desc = "Future tense, 3rd person singular masculine";
      break;
    case 13:
      kn = stem + "ುವಳು";
      tr = stemTr + "uvalu";
      meaningEn = `she will ${en}`;
      meaningHi = `वह ${hi.replace("करना", "करेगी")}`;
      desc = "Future tense, 3rd person singular feminine";
      break;
    case 14:
      kn = stem + "ುವರು";
      tr = stemTr + "uvaru";
      meaningEn = `they will ${en}`;
      meaningHi = `वे ${hi.replace("करना", "करेंगे")}`;
      desc = "Future tense, 3rd person plural";
      break;
    case 15:
      kn = stem + "ುವುದು";
      tr = stemTr + "uvudu";
      meaningEn = `it will ${en}`;
      meaningHi = `वह ${hi.replace("करना", "करेगा (निर्जीव)")}`;
      desc = "Future tense, 3rd person singular neuter";
      break;
    case 16:
      kn = stem + "ುವೆನು";
      tr = stemTr + "uvenu";
      meaningEn = `I will ${en}`;
      meaningHi = `मैं ${hi.replace("करना", "करूँगा")}`;
      desc = "Future tense, 1st person singular";
      break;
    case 17:
      kn = stem + "ುವೆವು";
      tr = stemTr + "uvevu";
      meaningEn = `we will ${en}`;
      meaningHi = `हम ${hi.replace("करना", "करेंगे")}`;
      desc = "Future tense, 1st person plural";
      break;
    case 18:
      kn = stem + "ುತ್ತಿದ್ದಾನೆ";
      tr = stemTr + "uttiddaane";
      meaningEn = `he is ${en}ing`;
      meaningHi = `वह ${hi.replace("करना", "कर रहा है")}`;
      desc = "Continuous Present tense, 3rd person singular masculine";
      break;
    case 19:
      kn = stem + "ುತ್ತಿದ್ದಾಳೆ";
      tr = stemTr + "uttiddaale";
      meaningEn = `she is ${en}ing`;
      meaningHi = `वह ${hi.replace("करना", "कर रही है")}`;
      desc = "Continuous Present tense, 3rd person singular feminine";
      break;
    case 20:
      kn = stem + "ುತ್ತಿದ್ದಾರೆ";
      tr = stemTr + "uttiddaare";
      meaningEn = `they are ${en}ing`;
      meaningHi = `वे ${hi.replace("करना", "कर रहे हैं")}`;
      desc = "Continuous Present tense, 3rd person plural";
      break;
    case 21:
      kn = stem + "ುತ್ತಿದೆ";
      tr = stemTr + "uttide";
      meaningEn = `it is ${en}ing`;
      meaningHi = `यह ${hi.replace("करना", "कर रहा है")}`;
      desc = "Continuous Present tense, 3rd person singular neuter";
      break;
    case 22:
      kn = stem + "ುತ್ತಿದ್ದೇನೆ";
      tr = stemTr + "uttiddeene";
      meaningEn = `I am ${en}ing`;
      meaningHi = `मैं ${hi.replace("करना", "कर रहा हूँ")}`;
      desc = "Continuous Present tense, 1st person singular";
      break;
    case 23:
      kn = stem + "ುತ್ತಿದ್ದೇವೆ";
      tr = stemTr + "uttiddeeve";
      meaningEn = `we are ${en}ing`;
      meaningHi = `हम ${hi.replace("करना", "कर रहे हैं")}`;
      desc = "Continuous Present tense, 1st person plural";
      break;
    case 24:
      kn = stem + "ುವುದಿಲ್ಲ";
      tr = stemTr + "uvudilla";
      meaningEn = `does not / will not ${en}`;
      meaningHi = `${hi.replace("करना", "नहीं करता/करेगा")}`;
      desc = "Negative habitual/future verb form";
      break;
    case 25:
      kn = root; // Singular imperative is usually the root
      tr = rootTr;
      meaningEn = `[you] ${en}!`;
      meaningHi = `[तुम] ${hi}!`;
      desc = "Imperative singular (command/request)";
      break;
    case 26:
      kn = stem + "ಿರಿ";
      tr = stemTr + "iri";
      meaningEn = `[you all] ${en}!`;
      meaningHi = `[आप/तुम सब] ${hi}!`;
      desc = "Imperative plural or polite (command/request)";
      break;
    case 27:
      kn = stem + "ಬಹುದು";
      tr = stemTr + "bahudu";
      meaningEn = `may / can ${en}`;
      meaningHi = `${hi.replace("करना", "कर सकता है")}`;
      desc = "Potential mood (indicating possibility or permission)";
      break;
    case 28:
      kn = stem + "ಲು";
      tr = stemTr + "lu";
      meaningEn = `to ${en}`;
      meaningHi = `${hi.replace("करना", "करने के लिए")}`;
      desc = "Infinitive verb form";
      break;
    case 29:
      kn = stem + "ುವುದು";
      tr = stemTr + "uvudu";
      meaningEn = `act of ${en}ing`;
      meaningHi = `${hi.replace("करना", "करना/करने की क्रिया")}`;
      desc = "Gerund / Verbal Noun";
      break;
  }

  return { kn, tr, meaningEn, meaningHi, desc };
}

// Main access function to retrieve any word from 0 to 9999
export function getWordAt(index: number, refLang: 'en' | 'hi'): WordItem {
  // Guard the index range
  const safeIndex = Math.max(0, Math.min(TOTAL_FORGE_WORDS - 1, index));
  const level = Math.floor(safeIndex / 100) + 1; // 1 to 100 progressive levels

  // Split indices into Nouns, Compounds, and Verbs
  if (safeIndex < 1000) {
    // 0 to 999: Nouns Inflected (Interleaved to reduce consecutive redundancy)
    const caseIndex = Math.floor(safeIndex / 100); // 0 to 9 cases
    const nounIndex = safeIndex % 100; // 0 to 99 nouns
    const noun = NOUNS[nounIndex];
    const inflected = inflectNoun(noun, caseIndex);

    const isEng = refLang === "en";
    const complexityTier = caseIndex === 0 
      ? "Level 1: Basic Nouns" 
      : caseIndex <= 3 
        ? "Level 2: Common Plurals & Direct Objects" 
        : "Level 3: Inflected Spatial & Dative Nouns";

    return {
      kannadaWord: inflected.kn,
      transliteration: refLang === 'hi' ? transliterateToHindi(inflected.kn) : inflected.tr,
      englishMeaning: noun.en + inflected.suffixEn,
      hindiMeaning: noun.hi + inflected.suffixHi,
      breakdown: isEng
        ? `Syllabic root: '${noun.kn}' (transliterated: '${noun.tr}', meaning: '${noun.en}') + ${inflected.breakSuffix}.`
        : `धातु रूप: '${noun.kn}' (लिप्यंतरण: '${noun.tr}', अर्थ: '${noun.hi}') + ${inflected.breakSuffix.replace("plural marker", "बहुवचन प्रत्यय").replace("accusative case", "कर्म कारक").replace("dative case", "संप्रदान कारक").replace("locative case", "अधिकरण कारक").replace("instrumental/ablative case", "करण/अपादान कारक")}.`,
      complexityTier,
      level
    };

  } else if (safeIndex < 9100) {
    // 1000 to 9099: Adjective-Noun Compounds Inflected (8100 combinations, Interleaved to reduce consecutive redundancy)
    const compoundIndex = safeIndex - 1000; // 0 to 8099
    const caseIndex = Math.floor(compoundIndex / 810); // 0 to 9 cases
    const comboIndex = compoundIndex % 810; // 0 to 809 combinations

    const adjectiveIndex = Math.floor(comboIndex / 54) % ADJECTIVES.length; // 0 to 14
    const nounIndex = comboIndex % 54; // 0 to 53 (subset of nouns for natural sounding combos)
    
    const adj = ADJECTIVES[adjectiveIndex];
    const noun = NOUNS[nounIndex];
    
    // Create combined noun
    let combinedNounKn = adj.kn + noun.kn;
    let combinedNounTr = adj.tr + noun.tr;
    
    // Stripping extra characters for clean Sandhi (compound) visual alignment
    if (adj.kn === "ಬಿಸಿ" && noun.kn === "ನೀರು") {
      combinedNounKn = "ಬಿಸಿನೀರು";
      combinedNounTr = "bisineeru";
    } else if (adj.kn === "ತಣ್ಣನೆಯ" && noun.kn === "ನೀರು") {
      combinedNounKn = "ತಣ್ಣೀರು";
      combinedNounTr = "tanneeru";
    }

    const dummyNoun = { kn: combinedNounKn, tr: combinedNounTr, en: `${adj.en} ${noun.en}`, hi: `${adj.hi} ${noun.hi}`, endsWith: noun.endsWith };
    const inflected = inflectNoun(dummyNoun, caseIndex);

    const isEng = refLang === "en";
    const complexityTier = caseIndex === 0 
      ? "Level 4: Adjective-Noun Compounds" 
      : "Level 5: Inflected Adjective-Noun Compounds";

    return {
      kannadaWord: inflected.kn,
      transliteration: refLang === 'hi' ? transliterateToHindi(inflected.kn) : inflected.tr,
      englishMeaning: `${adj.en} ${noun.en}${inflected.suffixEn}`,
      hindiMeaning: `${adj.hi} ${noun.hi}${inflected.suffixHi}`,
      breakdown: isEng
        ? `Compound Word (Samasa): formed by combining the descriptive adjective '${adj.kn}' (${adj.en}) with the noun '${noun.kn}' (${noun.en}). Fully inflected with the ${inflected.breakSuffix}.`
        : `कर्मधारय समास: विशेषण '${adj.kn}' (${adj.hi}) और संज्ञा '${noun.kn}' (${noun.hi}) के संयोजन से निर्मित। इस संयुक्त पद को ${inflected.breakSuffix.replace("plural marker", "बहुवचन प्रत्यय").replace("accusative case", "कर्म कारक").replace("dative case", "संप्रदान कारक").replace("locative case", "अधिकरण कारक").replace("instrumental/ablative case", "करण/अपादान कारक")} के साथ जोड़ा गया है।`,
      complexityTier,
      level
    };

  } else {
    // 9100 to 9999: Verbs Conjugated (900 combinations, Interleaved to reduce consecutive redundancy)
    const verbIndex = safeIndex - 9100; // 0 to 899
    const conjugationIndex = Math.floor(verbIndex / 30); // 0 to 29 conjugations
    const verbBaseIndex = verbIndex % 30; // 0 to 29 verbs

    const verb = VERBS[verbBaseIndex];
    const conjugated = conjugateVerb(verb, conjugationIndex);

    const isEng = refLang === "en";
    const complexityTier = conjugationIndex < 6 
      ? "Level 6: Present Tense Verbs" 
      : conjugationIndex < 12 
        ? "Level 7: Past Tense Verbs" 
        : conjugationIndex < 18 
          ? "Level 8: Future Tense Verbs" 
          : conjugationIndex < 24 
            ? "Level 9: Continuous Aspect Verbs" 
            : "Level 10: Advanced Potentials, Negatives, & Imperatives";

    return {
      kannadaWord: conjugated.kn,
      transliteration: refLang === 'hi' ? transliterateToHindi(conjugated.kn) : conjugated.tr,
      englishMeaning: conjugated.meaningEn,
      hindiMeaning: conjugated.meaningHi,
      breakdown: isEng
        ? `Verbal conjugation: constructed on the verb root '${verb.kn}' (transliterated: '${verb.tr}', meaning: '${verb.en}'). Inflected with ${conjugated.desc}.`
        : `क्रिया रूप: धातु रूप '${verb.kn}' (लिप्यंतरण: '${verb.tr}', अर्थ: '${verb.hi}') पर आधारित। इसे व्याकरण के अनुसार '${conjugated.desc.replace("Present tense", "वर्तमान काल").replace("Past tense", "भूतकाल").replace("Future tense", "भविष्य काल").replace("3rd person", "अन्य पुरुष").replace("1st person", "उत्तम पुरुष").replace("masculine", "पुल्लिंग").replace("feminine", "स्त्रीलिंग").replace("neuter", "नपुंसकलिंग").replace("plural", "बहुवचन").replace("singular", "एकवचन").replace("Continuous", "अपूर्ण/सतत").replace("honorific", "आदरसूचक")}' में रूपांतरित किया गया है।`,
      complexityTier,
      level
    };
  }
}
