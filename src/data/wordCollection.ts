export interface WordItem {
  kannadaWord: string;
  transliteration: string;
  transliterationHi: string;
  englishMeaning: string;
  hindiMeaning: string;
  breakdown: string;
  breakdownHi: string;
  complexityTier: 'Dictionary Word' | 'Real-Life Phrase';
}

export const REALISTIC_WORDS_AND_PHRASES: WordItem[] = [
  // --- SECTION 1: DICTIONARY WORDS (25 Entries) ---
  {
    kannadaWord: "ಮರ",
    transliteration: "mara",
    transliterationHi: "मरा",
    englishMeaning: "tree",
    hindiMeaning: "पेड़ / वृक्ष",
    breakdown: "A fundamental everyday noun meaning 'tree'. Pronounced with a soft dental 'r'.",
    breakdownHi: "एक बुनियादी संज्ञा जिसका अर्थ 'पेड़' है। इसमें मृदु 'ರ' ध्वनि का उच्चारण होता है।",
    complexityTier: "Dictionary Word"
  },
  {
    kannadaWord: "ಮನೆ",
    transliteration: "mane",
    transliterationHi: "मने",
    englishMeaning: "house / home",
    hindiMeaning: "घर / मकान",
    breakdown: "A core vocabulary word meaning 'home' or 'house'. Simple two-syllable word.",
    breakdownHi: "एक बुनियादी शब्द जिसका अर्थ 'घर' या 'गृह' है। सरल दो-अक्षर वाला शब्द।",
    complexityTier: "Dictionary Word"
  },
  {
    kannadaWord: "ನೀರು",
    transliteration: "neeru",
    transliterationHi: "नीरू",
    englishMeaning: "water",
    hindiMeaning: "पानी / जल",
    breakdown: "A daily essential noun for 'water'. Ends with the standard nominative 'u' vowel mark.",
    breakdownHi: "दैनिक जीवन का आवश्यक शब्द 'पानी'। इसका अंत उकारान्त 'ಉ' से होता है।",
    complexityTier: "Dictionary Word"
  },
  {
    kannadaWord: "ಹಣ್ಣು",
    transliteration: "hannu",
    transliterationHi: "हण्णु",
    englishMeaning: "fruit",
    hindiMeaning: "फल",
    breakdown: "Features the retroflex 'n' (ಣ್) consonant conjunct (ottakshara) representing 'fruit'.",
    breakdownHi: "इसमें मूर्धन्य 'ಣ' वर्ग का ओत्तक्षर (संयुक्त व्यंजन 'ಣ್ಣು') है, जिसका अर्थ 'फल' है।",
    complexityTier: "Dictionary Word"
  },
  {
    kannadaWord: "ಶಾಲೆ",
    transliteration: "shaale",
    transliterationHi: "शाले",
    englishMeaning: "school",
    hindiMeaning: "स्कूल / पाठशाला",
    breakdown: "Commonly used in everyday speech for 'school'. Derived from the classical Sanskrit word.",
    breakdownHi: "आम बोलचाल में 'विद्यालय' के लिए प्रयुक्त। यह मूलतः संस्कृत से आया है।",
    complexityTier: "Dictionary Word"
  },
  {
    kannadaWord: "ಪುಸ್ತಕ",
    transliteration: "pustaka",
    transliterationHi: "पुस्तक",
    englishMeaning: "book",
    hindiMeaning: "किताब / पुस्तक",
    breakdown: "A standard noun meaning 'book', featuring a conjunct cluster (ಸ್ತ - sta).",
    breakdownHi: "एक मानक संज्ञा जिसका अर्थ 'पुस्तक' या 'किताब' है, जिसमें 'ಸ್ತ' संयुक्त अक्षर है।",
    complexityTier: "Dictionary Word"
  },
  {
    kannadaWord: "ಹಾಲು",
    transliteration: "haalu",
    transliterationHi: "हालू",
    englishMeaning: "milk",
    hindiMeaning: "दूध",
    breakdown: "A common household noun representing 'milk'. Essential vocabulary for shopping and food.",
    breakdownHi: "दूध के लिए प्रयुक्त रोजमर्रा का शब्द। भोजन और खरीदारी के लिए आवश्यक शब्दावली।",
    complexityTier: "Dictionary Word"
  },
  {
    kannadaWord: "ಬಾಗಿಲು",
    transliteration: "baagilu",
    transliterationHi: "बागिलू",
    englishMeaning: "door",
    hindiMeaning: "दरवाजा / द्वार",
    breakdown: "A common household word representing 'door' or 'entrance'.",
    breakdownHi: "घर का सामान्य शब्द जिसका अर्थ 'द्वार' या 'दरवाजा' है।",
    complexityTier: "Dictionary Word"
  },
  {
    kannadaWord: "ಕಿಟಕಿ",
    transliteration: "kitaki",
    transliterationHi: "किटकी",
    englishMeaning: "window",
    hindiMeaning: "खिड़की",
    breakdown: "A daily household noun for 'window' that has simple visual strokes and is easy to learn.",
    breakdownHi: "खिड़की के लिए उपयोग होने वाला सरल घरेलू शब्द।",
    complexityTier: "Dictionary Word"
  },
  {
    kannadaWord: "ಹೂವು",
    transliteration: "hoovu",
    transliterationHi: "हूवू",
    englishMeaning: "flower",
    hindiMeaning: "फूल / पुष्प",
    breakdown: "A beautiful everyday word for 'flower'. Can be combined as 'ಹೂವಿನ ಹಾರ' (flower garland).",
    breakdownHi: "फूल के लिए एक सुंदर शब्द। इसे 'ಹೂವಿನ ಹಾರ' (फूलों का हार) के रूप में भी जोड़ा जा सकता है।",
    complexityTier: "Dictionary Word"
  },
  {
    kannadaWord: "ಗಿಡ",
    transliteration: "gida",
    transliterationHi: "गिडा",
    englishMeaning: "plant / sapling",
    hindiMeaning: "पौधा / छोटा पेड़",
    breakdown: "A very common word representing a small plant, shrub, or sapling.",
    breakdownHi: "छोटे पौधे या झाड़ी के लिए इस्तेमाल होने वाला एक अत्यंत सामान्य शब्द।",
    complexityTier: "Dictionary Word"
  },
  {
    kannadaWord: "ಸೂರ್ಯ",
    transliteration: "soorya",
    transliterationHi: "सूर्य",
    englishMeaning: "sun",
    hindiMeaning: "सूरज / सूर्य",
    breakdown: "Sanskrit loan word for 'sun' with a superscript 'repha' (ರ್) consonant conjunct over 'ya'.",
    breakdownHi: "सूर्य के लिए प्रयुक्त तत्सम शब्द। इसमें 'ಯ' के ऊपर रेफ 'ರ್' (ओत्तक्षर) लगा हुआ है।",
    complexityTier: "Dictionary Word"
  },
  {
    kannadaWord: "ಚಂದ್ರ",
    transliteration: "chandra",
    transliterationHi: "चंद्र",
    englishMeaning: "moon",
    hindiMeaning: "चाँद / चंद्रमा",
    breakdown: "Classic word for 'moon', featuring the complex consonant conjunct 'ndra' (ಂದ್ರ) at the end.",
    breakdownHi: "चंद्रमा के लिए प्रयुक्त शब्द, जिसमें अंत में जटिल संयुक्त अक्षर 'ಂದ್ರ' (न्द्र) आता है।",
    complexityTier: "Dictionary Word"
  },
  {
    kannadaWord: "ನಕ್ಷತ್ರ",
    transliteration: "nakshatra",
    transliterationHi: "नक्षत्र",
    englishMeaning: "star",
    hindiMeaning: "तारा / नक्षत्र",
    breakdown: "Standard word for 'star', featuring the compound conjuncts 'ksha' (ಕ್ಷ) and 'tra' (ತ್ರ).",
    breakdownHi: "तारे के लिए प्रयुक्त शब्द, जिसमें संयुक्त अक्षर 'ಕ್ಷ' (क्ष) और 'ತ್ರ' (त्र) शामिल हैं।",
    complexityTier: "Dictionary Word"
  },
  {
    kannadaWord: "ಆಕಾಶ",
    transliteration: "aakaasha",
    transliterationHi: "आकाश",
    englishMeaning: "sky",
    hindiMeaning: "आसमान / आकाश",
    breakdown: "A majestic everyday word for 'sky' or 'space'. Uses the palatal sibilant 'sha' (ಶ).",
    breakdownHi: "आकाश या आसमान के लिए प्रयुक्त शब्द। इसमें तालव्य 'ಶ' (श) का उपयोग होता है।",
    complexityTier: "Dictionary Word"
  },
  {
    kannadaWord: "ಸ್ನೇಹಿತ",
    transliteration: "snehita",
    transliterationHi: "स्नेहित",
    englishMeaning: "friend (male)",
    hindiMeaning: "दोस्त / मित्र",
    breakdown: "A warm, everyday noun for a male friend. Feminine equivalent is 'ಸ್ನೇಹಿತೆ' (snehite).",
    breakdownHi: "पुरुष मित्र के लिए उपयोग होने वाला शब्द। स्त्रीलिंग रूप 'ಸ್ನೇಹಿತೆ' (स्नेहिते) है।",
    complexityTier: "Dictionary Word"
  },
  {
    kannadaWord: "ಭಾಷೆ",
    transliteration: "bhaashe",
    transliterationHi: "भाषे",
    englishMeaning: "language",
    hindiMeaning: "भाषा",
    breakdown: "Noun meaning 'language', written with the aspirated 'bha' (ಭ) and retroflex 'sha' (ಷ).",
    breakdownHi: "'भाषा' अर्थ वाली संज्ञा, जिसे महाप्राण 'ಭ' और मूर्धन्य 'ಷ' के साथ लिखा जाता है।",
    complexityTier: "Dictionary Word"
  },
  {
    kannadaWord: "ದೇಶ",
    transliteration: "desha",
    transliterationHi: "देश",
    englishMeaning: "country",
    hindiMeaning: "देश / राष्ट्र",
    breakdown: "Common noun representing a nation or country. Simple and universally understood.",
    breakdownHi: "देश या राष्ट्र के लिए प्रयुक्त शब्द। सरल और सार्वभौमिक रूप से समझा जाने वाला।",
    complexityTier: "Dictionary Word"
  },
  {
    kannadaWord: "ಹಳ್ಳಿ",
    transliteration: "halli",
    transliterationHi: "हळ्ळी",
    englishMeaning: "village",
    hindiMeaning: "गाँव",
    breakdown: "Uses the double-la (ಳ್ಳ) retroflex conjunct with the 'i' vowel modifier to represent 'village'.",
    breakdownHi: "गाँव के लिए प्रयुक्त शब्द, जिसमें मूर्धन्य 'ಳ' का द्वित्व ओत्तक्षर (ಳ್ಳ) और इ-कार मात्रा प्रयुक्त है।",
    complexityTier: "Dictionary Word"
  },
  {
    kannadaWord: "ರಸ್ತೆ",
    transliteration: "raste",
    transliterationHi: "रस्ते",
    englishMeaning: "road / street",
    hindiMeaning: "सड़क / मार्ग",
    breakdown: "Standard word for road/street, utilizing the 'te' (ತ್ + ಎ) subscript under 'sa'.",
    breakdownHi: "सड़क या मार्ग के लिए मानक शब्द, जिसमें 'ಸ' के नीचे 'ತ' की मात्रा और ए-कार (ಸ್ತೇ) जोड़ा गया है।",
    complexityTier: "Dictionary Word"
  },
  {
    kannadaWord: "ಹಕ್ಕಿ",
    transliteration: "hakki",
    transliterationHi: "हक्की",
    englishMeaning: "bird",
    hindiMeaning: "पक्षी / चिड़िया",
    breakdown: "A simple and beautiful noun for 'bird', containing a double-ka (ಕ್ಕ) conjunct.",
    breakdownHi: "चिड़िया के लिए प्रयुक्त सरल शब्द, जिसमें 'ಕ' का द्वित्व ओत्तक्षर 'ಕ್ಕಿ' लगा हुआ है।",
    complexityTier: "Dictionary Word"
  },
  {
    kannadaWord: "ನಾಯಿ",
    transliteration: "naayi",
    transliterationHi: "नायी",
    englishMeaning: "dog",
    hindiMeaning: "कुत्ता",
    breakdown: "A standard domestic animal word meaning 'dog'. Highly intuitive pronunciation.",
    breakdownHi: "एक घरेलू पालतू पशु 'कुत्ता'। इसका उच्चारण बहुत ही सरल और स्वाभाविक है।",
    complexityTier: "Dictionary Word"
  },
  {
    kannadaWord: "ಬೆಕ್ಕು",
    transliteration: "bekku",
    transliterationHi: "बेक्कु",
    englishMeaning: "cat",
    hindiMeaning: "बिल्ली",
    breakdown: "Standard domestic animal word meaning 'cat'. Uses a double-ka (ಕ್ಕ) conjunct.",
    breakdownHi: "बिल्ली के लिए प्रयुक्त शब्द। इसमें 'ಕ' का द्वित्व ओत्तक्षर 'ಕ್ಕು' लगा है।",
    complexityTier: "Dictionary Word"
  },
  {
    kannadaWord: "ಸಮಯ",
    transliteration: "samaya",
    transliterationHi: "समय",
    englishMeaning: "time",
    hindiMeaning: "समय / काल",
    breakdown: "An everyday abstract noun meaning 'time'. Shared directly with Sanskrit/Hindi roots.",
    breakdownHi: "'समय' के लिए प्रयुक्त शब्द। संस्कृत और हिंदी के समान रूप से सहज ग्राह्य।",
    complexityTier: "Dictionary Word"
  },
  {
    kannadaWord: "ಹಬ್ಬ",
    transliteration: "habba",
    transliterationHi: "हब्बा",
    englishMeaning: "festival",
    hindiMeaning: "त्योहार / उत्सव",
    breakdown: "An extremely popular word for 'festival', featuring a double-ba (ಬ್ಬ) consonant conjunct.",
    breakdownHi: "त्योहार या पर्व के लिए एक अत्यंत लोकप्रिय शब्द, जिसमें 'ಬ' का द्वित्व ओत्तक्षर 'ಬ್ಬ' प्रयुक्त हुआ है।",
    complexityTier: "Dictionary Word"
  },

  // --- SECTION 2: REAL-LIFE PHRASES & CONVERSATIONS (25 Entries) ---
  {
    kannadaWord: "ನಮಸ್ಕಾರ, ಹೇಗಿದ್ದೀರಾ?",
    transliteration: "Namaskaara, hegiddeera?",
    transliterationHi: "नमस्कार, हेगिद्दीरा?",
    englishMeaning: "Hello, how are you?",
    hindiMeaning: "नमस्ते, आप कैसे हैं?",
    breakdown: "The polite cultural greeting in Kannada. 'Hegiddeera' is the respectful formal plural form of 'how are you'.",
    breakdownHi: "कन्नड़ में सम्मानजनक अभिवादन। 'हेगिद्दीरा' बहुवचन या आदरसूचक रूप में प्रयुक्त होता है।",
    complexityTier: "Real-Life Phrase"
  },
  {
    kannadaWord: "ನನ್ನ ಹೆಸರು...",
    transliteration: "Nanna hesaru...",
    transliterationHi: "नನ್ನ हेसरू...",
    englishMeaning: "My name is...",
    hindiMeaning: "मेरा नाम... है।",
    breakdown: "The standard pattern to introduce oneself. Formed of possessive 'Nanna' (my) + noun 'hesaru' (name).",
    breakdownHi: "स्वयं का परिचय देने के लिए सामान्य वाक्य। 'नन्ना' (मेरा) + 'हेसरू' (नाम) से मिलकर बना है।",
    complexityTier: "Real-Life Phrase"
  },
  {
    kannadaWord: "ಧನ್ಯವಾದಗಳು",
    transliteration: "Dhanyavaadagalu",
    transliterationHi: "धन्यवादगळू",
    englishMeaning: "Thank you",
    hindiMeaning: "धन्यवाद",
    breakdown: "Expression of formal gratitude. Plural marker '-galu' (ಗಳು) is appended to 'Dhanyavaada' for polite respect.",
    breakdownHi: "कन्नड़ में कृतज्ञता व्यक्त करने का औपचारिक शिष्ट तरीका। आदर के लिए अंत में बहुवचन प्रत्यय '-गळू' जोड़ा गया है।",
    complexityTier: "Real-Life Phrase"
  },
  {
    kannadaWord: "ಕನ್ನಡ ಸುಲಭ ಮತ್ತು ಸುಂದರ ಭಾಷೆ",
    transliteration: "Kannada sulabha mattu sundara bhaashe",
    transliterationHi: "कन्नड़ सुलभ मत्तू सुंदर भाषे",
    englishMeaning: "Kannada is an easy and beautiful language",
    hindiMeaning: "कन्नड़ एक आसान और सुंदर भाषा है।",
    breakdown: "A complete sentence: 'Sulabha' (easy) + 'mattu' (and) + 'sundara' (beautiful) + 'bhaashe' (language).",
    breakdownHi: "एक पूरा वाक्य: 'सुलभ' (आसान) + 'मत्तू' (और) + 'सुंदर' + 'भाषे' (भाषा)।",
    complexityTier: "Real-Life Phrase"
  },
  {
    kannadaWord: "ಊಟ ಆಯ್ತಾ?",
    transliteration: "Oota aaytha?",
    transliterationHi: "ऊटा आयता?",
    englishMeaning: "Have you had your meal?",
    hindiMeaning: "खाना हो गया?",
    breakdown: "An incredibly warm and common expression in Karnataka, serving as a friendly check-in. Literally: 'Is meal done?'",
    breakdownHi: "कर्नाटक में प्रेम और चिंता व्यक्त करने वाला एक बहुत ही आम अनौपचारिक वाक्य। शाब्दिक अर्थ: 'भोजन हो गया?'",
    complexityTier: "Real-Life Phrase"
  },
  {
    kannadaWord: "ಶುಭ ಮುಂಜಾನೆ",
    transliteration: "Shubha munjaane",
    transliterationHi: "शुभ मुंजा़ने",
    englishMeaning: "Good morning",
    hindiMeaning: "सुप्रभात",
    breakdown: "Standard greeting meaning 'Good Morning'. Formed of Sanskrit 'Shubha' (auspicious) + Kannada 'munjaane' (early morning).",
    breakdownHi: "प्रातःकालीन अभिवादन। संस्कृत विशेषण 'शुभ' और कन्नड़ संज्ञा 'मुंजा़ने' (सुबह-सुबह) का योग।",
    complexityTier: "Real-Life Phrase"
  },
  {
    kannadaWord: "ಹೋಗಿ ಬರುವೆ",
    transliteration: "Hoogi baruve",
    transliterationHi: "होगी बरुवे",
    englishMeaning: "Goodbye (I'll go and come)",
    hindiMeaning: "अलविदा (फिर मिलेंगे)",
    breakdown: "Polite cultural way to say goodbye. It literally translates to 'I will go and return', as saying just 'I am going' is considered impolite.",
    breakdownHi: "विदा लेने का पारंपरिक शिष्ट तरीका। इसका शाब्दिक अर्थ है 'मैं जाकर आता हूँ', क्योंकि केवल 'जा रहा हूँ' कहना अशुभ माना जाता है।",
    complexityTier: "Real-Life Phrase"
  },
  {
    kannadaWord: "ಇದರ ಬೆಲೆ ಎಷ್ಟು?",
    transliteration: "Idara bele eshtu?",
    transliterationHi: "इदर बेले एश्टू?",
    englishMeaning: "How much does this cost?",
    hindiMeaning: "इसका मूल्य कितना है?",
    breakdown: "An essential conversational shopping phrase. 'Idara' (its / of this) + 'bele' (price) + 'eshtu' (how much).",
    breakdownHi: "खरीदारी के लिए एक आवश्यक वाक्य। 'इदर' (इसका) + 'बेले' (दाम) + 'एश्टू' (कितना)।",
    complexityTier: "Real-Life Phrase"
  },
  {
    kannadaWord: "ನಿಮ್ಮ ಸಹಾಯಕ್ಕೆ ಧನ್ಯವಾದಗಳು",
    transliteration: "Nimma sahaayakke dhanyavaadagalu",
    transliterationHi: "निम्म्म सहायक्के धन्यवादगळू",
    englishMeaning: "Thank you for your help",
    hindiMeaning: "आपकी मदद के लिए धन्यवाद।",
    breakdown: "Polite acknowledgment. 'Nimma' (your-respectful) + 'sahaayakke' (for help, dative case suffix '-ke') + 'dhanyavaadagalu' (thank you).",
    breakdownHi: "कृतज्ञता सूचक वाक्य। 'निम्म्म' (आपकी) + 'सहायक्के' (मदद के लिए, संप्रदान कारक '-क्के') + 'धन्यवादगळू' (धन्यवाद)।",
    complexityTier: "Real-Life Phrase"
  },
  {
    kannadaWord: "ನನಗೆ ಅರ್ಥವಾಗಲಿಲ್ಲ",
    transliteration: "Nanage arthavaagalilla",
    transliterationHi: "ननगे अर्थवागलिल्ला",
    englishMeaning: "I did not understand",
    hindiMeaning: "मुझे समझ नहीं आया।",
    breakdown: "Extremely useful phrase for beginners. 'Nanage' (to me) + 'arthavaagalilla' (meaning did not occur).",
    breakdownHi: "नए शिक्षार्थियों के लिए अत्यंत उपयोगी वाक्य। 'ननगे' (मुझे) + 'अर्थवागलिल्ला' (समझ नहीं आया)।",
    complexityTier: "Real-Life Phrase"
  },
  {
    kannadaWord: "ದಯವಿಟ್ಟು ಮತ್ತೊಮ್ಮೆ ಹೇಳಿ",
    transliteration: "Dayavittu mattomme heeli",
    transliterationHi: "दयविट्टू मत्तोम्मे हेली",
    englishMeaning: "Please say it again",
    hindiMeaning: "कृपया फिर से कहें।",
    breakdown: "Polite request. 'Dayavittu' (please) + 'mattomme' (once more / again) + 'heeli' (say/tell, respectful imperative).",
    breakdownHi: "अनुरोध वाक्य। 'दयविट्टू' (कृपया) + 'मत्तोम्मे' (एक बार फिर) + 'हेली' (कहें, आदरार्थक आज्ञार्थक रूप)।",
    complexityTier: "Real-Life Phrase"
  },
  {
    kannadaWord: "ಬಹಳ ಸಂತೋಷ",
    transliteration: "Bahala santoosha",
    transliterationHi: "बहळ संतोष",
    englishMeaning: "Very happy / My pleasure",
    hindiMeaning: "बहुत खुशी हुई / बहुत प्रसन्नता हुई।",
    breakdown: "Used to express deep satisfaction or a polite 'my pleasure'. 'Bahala' (very) + 'santoosha' (happiness).",
    breakdownHi: "गहरी संतुष्टि या विनम्र प्रतिक्रिया व्यक्त करने के लिए। 'बहळ' (बहुत) + 'संतोष' (प्रसन्नता)।",
    complexityTier: "Real-Life Phrase"
  },
  {
    kannadaWord: "ಚಿಂತೆ ಮಾಡಬೇಡಿ",
    transliteration: "Chinte maadabeedi",
    transliterationHi: "चिंते माडबेडी",
    englishMeaning: "Do not worry",
    hindiMeaning: "चिंता न करें।",
    breakdown: "A reassuring phrase. 'Chinte' (worry/anxiety) + 'maadabeedi' (do not do, respectful negative imperative).",
    breakdownHi: "सांत्वनादायक वाक्य। 'चिंते' (चिंता) + 'माडबेडी' (मत कीजिए, निषेधात्मक आदरार्थक क्रिया)।",
    complexityTier: "Real-Life Phrase"
  },
  {
    kannadaWord: "ನಿಮ್ಮ ಊರು ಯಾವುದು?",
    transliteration: "Nimma ooru yaavudu?",
    transliterationHi: "निम्म्म ऊरू यावुदू?",
    englishMeaning: "Which is your hometown / native place?",
    hindiMeaning: "आपका गृहनगर/गाँव कौन सा है?",
    breakdown: "Friendly icebreaker in Karnataka. 'Nimma' (your) + 'ooru' (town/hometown) + 'yaavudu' (which one).",
    breakdownHi: "कर्नाटक में परिचय बढ़ाने का लोकप्रिय वाक्य। 'निम्म्म' (आपका) + 'ऊरू' (गाँव/शहर) + 'यावुदू' (कौन सा)।",
    complexityTier: "Real-Life Phrase"
  },
  {
    kannadaWord: "ನಾಳೆ ಸಿಗೋಣ",
    transliteration: "Naale sigoona",
    transliterationHi: "नाळे सिगोणा",
    englishMeaning: "Let's meet tomorrow",
    hindiMeaning: "कल मिलते हैं।",
    breakdown: "Friendly parting phrase. 'Naale' (tomorrow) + 'sigoona' (let us meet, cohortative form).",
    breakdownHi: "अनौपचारिक विदा वाक्य। 'नाळे' (कल) + 'सिगोणा' (हम मिलेंगे/मिलते हैं)।",
    complexityTier: "Real-Life Phrase"
  },
  {
    kannadaWord: "ಕನ್ನಡ ಕಲಿಯುವುದು ಸುಲಭ",
    transliteration: "Kannada kaliyuvudu sulabha",
    transliterationHi: "कन्नड़ कलियुवुदू सुलभ",
    englishMeaning: "Learning Kannada is easy",
    hindiMeaning: "ಕನ್ನಡ್ सीखना आसान है।",
    breakdown: "Encouraging statement. 'Kaliyuvudu' (the act of learning, verbal noun) + 'sulabha' (easy).",
    breakdownHi: "उत्साहवर्धन करने वाला वाक्य। 'कलियुवुदू' (सीखना, क्रियावाचक संज्ञा) + 'सुलभ' (सरल)।",
    complexityTier: "Real-Life Phrase"
  },
  {
    kannadaWord: "ನಾನು ಬೆಂಗಳೂರಿನಲ್ಲಿ ಇದ್ದೇನೆ",
    transliteration: "Naanu bengaloorinalli iddeene",
    transliterationHi: "नानू बेंगलूरिनल्ली इद्देने",
    englishMeaning: "I am in Bengaluru",
    hindiMeaning: "मैं बेंगलुरु में हूँ।",
    breakdown: "A locative statement. 'Naanu' (I) + 'Bengaloorinalli' ('Bengalooru' + locative case suffix '-alli') + 'iddeene' (am, first-person singular).",
    breakdownHi: "एक स्थानवाचक वाक्य। 'नानू' (मैं) + 'बेंगलूरिनल्ली' (बेंगलुरु + अधिकरण कारक '-अल्ली') + 'इद्देने' (हूँ)।",
    complexityTier: "Real-Life Phrase"
  },
  {
    kannadaWord: "ಇಲ್ಲಿ ಬನ್ನಿ",
    transliteration: "Illi banni",
    transliterationHi: "इल्ली बन्नी",
    englishMeaning: "Come here",
    hindiMeaning: "यहाँ आइए।",
    breakdown: "Polite invitation or directive. 'Illi' (here) + 'banni' (come, respectful plural imperative).",
    breakdownHi: "विनम्रतापूर्वक बुलाने का वाक्य। 'इल्ली' (यहाँ) + 'बन्नी' (आइए, आदरार्थक आज्ञार्थक क्रिया)।",
    complexityTier: "Real-Life Phrase"
  },
  {
    kannadaWord: "ಅಲ್ಲಿ ಹೋಗಿ",
    transliteration: "Alli hoogi",
    transliterationHi: "अल्ली होगी",
    englishMeaning: "Go there",
    hindiMeaning: "वहाँ जाइए।",
    breakdown: "Polite direction. 'Alli' (there) + 'hoogi' (go, respectful plural/honorific imperative).",
    breakdownHi: "विनम्र निर्देश। 'अल्ली' (वहाँ) + 'होगी' (जाइए, आदरार्थक आज्ञार्थक क्रिया)।",
    complexityTier: "Real-Life Phrase"
  },
  {
    kannadaWord: "ಸಮಯ ಎಷ್ಟಾಗಿದೆ?",
    transliteration: "Samaya eshtaagide?",
    transliterationHi: "समय एश्टागिदे?",
    englishMeaning: "What is the time?",
    hindiMeaning: "समय कितना हुआ है?",
    breakdown: "Asking the time. 'Samaya' (time) + 'eshtaagide' (how much has it become).",
    breakdownHi: "समय पूछने के लिए वाक्य। 'समय' + 'एश्टागिदे' (कितना हो चुका है/हुआ है)।",
    complexityTier: "Real-Life Phrase"
  },
  {
    kannadaWord: "ನನಗೆ ಹಸಿವಾಗುತ್ತಿದೆ",
    transliteration: "Nanage hasivaaguttide",
    transliterationHi: "ननगे हसिवागुत्तिदे",
    englishMeaning: "I am feeling hungry",
    hindiMeaning: "मुझे भूख लग रही है।",
    breakdown: "Expressing physiological state. 'Nanage' (to me) + 'hasivu' (hunger) + 'aaguttide' (is becoming).",
    breakdownHi: "अपनी शारीरिक स्थिति व्यक्त करने के लिए वाक्य। 'ननगे' (मुझे) + 'हसिवु' (भूख) + 'आगुत्तिदे' (हो रही है)।",
    complexityTier: "Real-Life Phrase"
  },
  {
    kannadaWord: "ಹವಾಮಾನ ಹೇಗಿದೆ?",
    transliteration: "Havaamaana hegide?",
    transliterationHi: "हवामान हेगिदे?",
    englishMeaning: "How is the weather?",
    hindiMeaning: "मौसम कैसा है?",
    breakdown: "Standard conversational inquiry. 'Havaamaana' (weather/climate) + 'hegide' (how is it).",
    breakdownHi: "मौसम के बारे में बात करने के लिए। 'हवामान' (मौसम) + 'हेगिदे' (कैसा है)।",
    complexityTier: "Real-Life Phrase"
  },
  {
    kannadaWord: "ಇದು ನನ್ನ ಪುಸ್ತಕ",
    transliteration: "Idu nanna pustaka",
    transliterationHi: "इदु नन्ना पुस्तक",
    englishMeaning: "This is my book",
    hindiMeaning: "यह मेरी पुस्तक है।",
    breakdown: "Possessive statement. 'Idu' (this) + 'nanna' (my) + 'pustaka' (book).",
    breakdownHi: "स्वामित्व सूचक सरल वाक्य। 'इदु' (यह) + 'नन्ना' (मेरी) + 'पुस्तक' (किताब)।",
    complexityTier: "Real-Life Phrase"
  },
  {
    kannadaWord: "ಅವರು ತುಂಬಾ ಒಳ್ಳೆಯವರು",
    transliteration: "Avaru tumba olleyavaru",
    transliterationHi: "अवरू तुंब ओळ्ळेयवरू",
    englishMeaning: "They are very good people",
    hindiMeaning: "वे बहुत अच्छे व्यक्ति हैं।",
    breakdown: "Appreciation of character. 'Avaru' (they/he-respectful) + 'tumba' (very) + 'olleyavaru' (good people).",
    breakdownHi: "किसी के चरित्र की प्रशंसा। 'अवरू' (वे) + 'तुंब' (बहुत) + 'ओळ्ळेयवरू' (अच्छे लोग/व्यक्ति)।",
    complexityTier: "Real-Life Phrase"
  },
  {
    kannadaWord: "ನನಗೆ ಕನ್ನಡ ಮಾತನಾಡಲು ಇಷ್ಟ",
    transliteration: "Nanage kannada maatanaadalu ishta",
    transliterationHi: "ननगे कन्नड़ मातनाडलू इष्ट",
    englishMeaning: "I like to speak Kannada",
    hindiMeaning: "मुझे कन्नड़ बोलना पसंद है।",
    breakdown: "Preference statement. 'Nanage' (to me) + 'Kannada' + 'maatanaadalu' (to speak, infinitive) + 'ishta' (desire/like).",
    breakdownHi: "अपनी रुचि व्यक्त करने का वाक्य। 'ननगे' (मुझे) + 'कन्नड़' + 'मातनाडलू' (बोलना) + 'इष्ट' (पसंद/प्रिय)।",
    complexityTier: "Real-Life Phrase"
  }
];

export function getWordAt(index: number, refLang: 'en' | 'hi'): WordItem {
  const safeIndex = Math.max(0, Math.min(REALISTIC_WORDS_AND_PHRASES.length - 1, index));
  return REALISTIC_WORDS_AND_PHRASES[safeIndex];
}
