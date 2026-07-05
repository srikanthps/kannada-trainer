import { AlphabetCharacter } from '../types';

export const KANNADA_ALPHABETS: AlphabetCharacter[] = [
  // --- VOWELS (Swaragaḷu) ---
  {
    id: 'swara_1',
    kannadaChar: 'ಅ',
    englishSymbol: 'a',
    category: 'vowel',
    subCategory: 'Hrasva Swara (Short Vowel)',
    pronunciationHint: "Short 'u' sound as in 'cup' or short 'a' in 'about'. Keep it quick and light.",
    examples: [
      { kannadaWord: 'ಅರಸ', transliteration: 'Arasa', englishMeaning: 'King' },
      { kannadaWord: 'ಅಮ್ಮ', transliteration: 'Amma', englishMeaning: 'Mother' },
      { kannadaWord: 'ಅಳಿಲು', transliteration: 'Alilu', englishMeaning: 'Squirrel' }
    ]
  },
  {
    id: 'swara_2',
    kannadaChar: 'ಆ',
    englishSymbol: 'aa',
    category: 'vowel',
    subCategory: 'Deergha Swara (Long Vowel)',
    pronunciationHint: "Long 'aa' sound as in 'far' or 'father'. Elongate the breath.",
    examples: [
      { kannadaWord: 'ಆನೆ', transliteration: 'Aane', englishMeaning: 'Elephant' },
      { kannadaWord: 'ಆಟ', transliteration: 'Aata', englishMeaning: 'Game / Play' },
      { kannadaWord: 'ಆಕಾಶ', transliteration: 'Aakaasha', englishMeaning: 'Sky' }
    ]
  },
  {
    id: 'swara_3',
    kannadaChar: 'ಇ',
    englishSymbol: 'i',
    category: 'vowel',
    subCategory: 'Hrasva Swara (Short Vowel)',
    pronunciationHint: "Short 'i' sound as in 'pin' or 'it'.",
    examples: [
      { kannadaWord: 'ಇಲಿ', transliteration: 'Ili', englishMeaning: 'Rat / Mouse' },
      { kannadaWord: 'ಇಟ್ಟಿಗೆ', transliteration: 'Ittige', englishMeaning: 'Brick' },
      { kannadaWord: 'ಇನಿಧನಿ', transliteration: 'Inidhani', englishMeaning: 'Sweet melody' }
    ]
  },
  {
    id: 'swara_4',
    kannadaChar: 'ಈ',
    englishSymbol: 'ee',
    category: 'vowel',
    subCategory: 'Deergha Swara (Long Vowel)',
    pronunciationHint: "Long 'ee' sound as in 'meet' or 'feel'.",
    examples: [
      { kannadaWord: 'ಈಜು', transliteration: 'Eeju', englishMeaning: 'Swim' },
      { kannadaWord: 'ಈಶ್ವರ', transliteration: 'Eeshwara', englishMeaning: 'Lord Shiva' },
      { kannadaWord: 'ಈರುಳ್ಳಿ', transliteration: 'Eerulli', englishMeaning: 'Onion' }
    ]
  },
  {
    id: 'swara_5',
    kannadaChar: 'ಉ',
    englishSymbol: 'u',
    category: 'vowel',
    subCategory: 'Hrasva Swara (Short Vowel)',
    pronunciationHint: "Short 'u' sound as in 'put' or 'pull'. Avoid 'oo'.",
    examples: [
      { kannadaWord: 'ಉಗುರು', transliteration: 'Uguru', englishMeaning: 'Fingernail' },
      { kannadaWord: 'ಉಡುಪು', transliteration: 'Udupu', englishMeaning: 'Dress / Attire' },
      { kannadaWord: 'ಉಯ್ಯಾಲೆ', transliteration: 'Uyyaale', englishMeaning: 'Swing' }
    ]
  },
  {
    id: 'swara_6',
    kannadaChar: 'ಊ',
    englishSymbol: 'oo',
    category: 'vowel',
    subCategory: 'Deergha Swara (Long Vowel)',
    pronunciationHint: "Long 'oo' sound as in 'moon' or 'shoot'. Elongated.",
    examples: [
      { kannadaWord: 'ಊಟ', transliteration: 'Oota', englishMeaning: 'Meal / Feast' },
      { kannadaWord: 'ಊರು', transliteration: 'Ooru', englishMeaning: 'Village / City' },
      { kannadaWord: 'ಊರುಗೋಲು', transliteration: 'Oorugolu', englishMeaning: 'Walking stick' }
    ]
  },
  {
    id: 'swara_7',
    kannadaChar: 'ಋ',
    englishSymbol: 'ru',
    category: 'vowel',
    subCategory: 'Hrasva Swara (Vocalic R)',
    pronunciationHint: "Vocalic 'ru' sound, like 'ri' in 'riddle' or 'ru' in 'Krishna' (Sanskrit 'r').",
    examples: [
      { kannadaWord: 'ಋಷಿ', transliteration: 'Rushi', englishMeaning: 'Sage / Monk' },
      { kannadaWord: 'ಋತು', transliteration: 'Ruthu', englishMeaning: 'Season' }
    ]
  },
  {
    id: 'swara_8',
    kannadaChar: 'ಎ',
    englishSymbol: 'e',
    category: 'vowel',
    subCategory: 'Hrasva Swara (Short Vowel)',
    pronunciationHint: "Short 'e' sound as in 'get' or 'bed'.",
    examples: [
      { kannadaWord: 'ಎಲೆ', transliteration: 'Ele', englishMeaning: 'Leaf' },
      { kannadaWord: 'ಎತ್ತು', transliteration: 'Etthu', englishMeaning: 'Ox / Bull' },
      { kannadaWord: 'ಎಳನೀರು', transliteration: 'Elaneeru', englishMeaning: 'Tender coconut' }
    ]
  },
  {
    id: 'swara_9',
    kannadaChar: 'ಏ',
    englishSymbol: 'ee / ae',
    category: 'vowel',
    subCategory: 'Deergha Swara (Long Vowel)',
    pronunciationHint: "Long vowel, sounds like the 'ay' sound in 'play' or 'say' but without the trailing diphthong.",
    examples: [
      { kannadaWord: 'ಏಣಿ', transliteration: 'Eeni', englishMeaning: 'Ladder' },
      { kannadaWord: 'ಏಲಕ್ಕಿ', transliteration: 'Eelakki', englishMeaning: 'Cardamom' },
      { kannadaWord: 'ಏಡಿ', transliteration: 'Eedi', englishMeaning: 'Crab' }
    ]
  },
  {
    id: 'swara_10',
    kannadaChar: 'ಐ',
    englishSymbol: 'ai',
    category: 'vowel',
    subCategory: 'Sandhyakshara (Diphthong)',
    pronunciationHint: "Combined vowel sound, sounds like 'ai' in 'aisle' or 'y' in 'my'.",
    examples: [
      { kannadaWord: 'ಐದು', transliteration: 'Aidu', englishMeaning: 'Five' },
      { kannadaWord: 'ಐರಾವತ', transliteration: 'Airaavatha', englishMeaning: 'Mythological white elephant' },
      { kannadaWord: 'ಐಿಕ್ಯತೆ', transliteration: 'Aikyathe', englishMeaning: 'Unity / Togetherness' }
    ]
  },
  {
    id: 'swara_11',
    kannadaChar: 'ಒ',
    englishSymbol: 'o',
    category: 'vowel',
    subCategory: 'Hrasva Swara (Short Vowel)',
    pronunciationHint: "Short 'o' sound as in 'on' or 'omission'. Quick.",
    examples: [
      { kannadaWord: 'ಒಲೆ', transliteration: 'Ole', englishMeaning: 'Wood Stove' },
      { kannadaWord: 'ಒಂಟೆ', transliteration: 'Onte', englishMeaning: 'Camel' },
      { kannadaWord: 'ಒಡವೆ', transliteration: 'Odave', englishMeaning: 'Jewerly / Ornament' }
    ]
  },
  {
    id: 'swara_12',
    kannadaChar: 'ಓ',
    englishSymbol: 'oo / oh',
    category: 'vowel',
    subCategory: 'Deergha Swara (Long Vowel)',
    pronunciationHint: "Long 'o' sound as in 'go' or 'boat'. Sustained.",
    examples: [
      { kannadaWord: 'ಓಟ', transliteration: 'Oota', englishMeaning: 'Run / Sprint' },
      { kannadaWord: 'ಓದು', transliteration: 'Oodu', englishMeaning: 'Read' },
      { kannadaWord: 'ಓಲೆ', transliteration: 'Oole', englishMeaning: 'Palm leaf / Earring' }
    ]
  },
  {
    id: 'swara_13',
    kannadaChar: 'ಔ',
    englishSymbol: 'au',
    category: 'vowel',
    subCategory: 'Sandhyakshara (Diphthong)',
    pronunciationHint: "Combined vowel sound, sounds like 'ow' in 'cow' or 'ou' in 'out'.",
    examples: [
      { kannadaWord: 'ಔಷಧ', transliteration: 'Aushadha', englishMeaning: 'Medicine' },
      { kannadaWord: 'ಔತಣ', transliteration: 'Authana', englishMeaning: 'Feast / Banquet' }
    ]
  },

  // --- YOGAVAAHAS ---
  {
    id: 'yoga_1',
    kannadaChar: 'ಂ',
    englishSymbol: 'am',
    category: 'yogavaaha',
    subCategory: 'Anusvara (Nasal Modifier)',
    pronunciationHint: "Nasal sound, acts as 'm' or 'n' suffix at the end of vowels, like 'um' in 'hum'.",
    examples: [
      { kannadaWord: 'ಅಂಗಡಿ', transliteration: 'Angadi', englishMeaning: 'Shop / Store' },
      { kannadaWord: 'ಅಂಜೂರ', transliteration: 'Anjoora', englishMeaning: 'Fig Fruit' },
      { kannadaWord: 'ಅಂಬಾರಿ', transliteration: 'Ambaari', englishMeaning: 'Glittering throne on elephant' }
    ],
    acousticClass: 'yogavaaha'
  },
  {
    id: 'yoga_2',
    kannadaChar: 'ಃ',
    englishSymbol: 'aha',
    category: 'yogavaaha',
    subCategory: 'Visarga (Breath Release)',
    pronunciationHint: "A subtle echo of the preceding vowel with a light breathy 'h' release, e.g., 'ah-ha'.",
    examples: [
      { kannadaWord: 'ದುಃಖ', transliteration: 'Dukha', englishMeaning: 'Sadness / Sorrow' },
      { kannadaWord: 'ಅಂತಃಪುರ', transliteration: 'Anthahpura', englishMeaning: 'Inner palace chambers' }
    ],
    acousticClass: 'yogavaaha'
  },

  // --- CONSONANTS (Vyanjanagaḷu) ---
  // --- Ka Vargas (Gutturals / Throat) ---
  {
    id: 'vyanjana_1',
    kannadaChar: 'ಕ',
    englishSymbol: 'ka',
    category: 'consonant',
    subCategory: 'Ka-Varga (Gutturals)',
    pronunciationHint: "Alpaprana: Light, soft 'k' as in 'kite'. Produced from the throat.",
    examples: [
      { kannadaWord: 'ಕಮಲ', transliteration: 'Kamala', englishMeaning: 'Lotus Flower' },
      { kannadaWord: 'ಕಣ್ಣು', transliteration: 'Kannu', englishMeaning: 'Eye' },
      { kannadaWord: 'ಕಾಗೆ', transliteration: 'Kaage', englishMeaning: 'Crow' }
    ],
    acousticClass: 'alpaprana'
  },
  {
    id: 'vyanjana_2',
    kannadaChar: 'ಖ',
    englishSymbol: 'kha',
    category: 'consonant',
    subCategory: 'Ka-Varga (Gutturals)',
    pronunciationHint: "Mahaprana: Strong, aspirated 'kh' produced with immediate burst of air, like 'blockhead' or 'kh' in 'Khan'.",
    examples: [
      { kannadaWord: 'ಖರ್ಜೂರ', transliteration: 'Kharjoora', englishMeaning: 'Date Fruit' },
      { kannadaWord: 'ಖಡ್ಗ', transliteration: 'Khadga', englishMeaning: 'Sword' },
      { kannadaWord: 'ಖನಿಜ', transliteration: 'Khanija', englishMeaning: 'Mineral' }
    ],
    acousticClass: 'mahaprana'
  },
  {
    id: 'vyanjana_3',
    kannadaChar: 'ಗ',
    englishSymbol: 'ga',
    category: 'consonant',
    subCategory: 'Ka-Varga (Gutturals)',
    pronunciationHint: "Alpaprana: Light 'g' as in 'gate' or 'goat'.",
    examples: [
      { kannadaWord: 'ಗಡಿಯಾರ', transliteration: 'Gadiyaara', englishMeaning: 'Clock / Watch' },
      { kannadaWord: 'ಗಿಳಿ', transliteration: 'Gili', englishMeaning: 'Parrot' },
      { kannadaWord: 'ಗಣೇಶ', transliteration: 'Ganesha', englishMeaning: 'Lord Ganesha' }
    ],
    acousticClass: 'alpaprana'
  },
  {
    id: 'vyanjana_4',
    kannadaChar: 'ಘ',
    englishSymbol: 'gha',
    category: 'consonant',
    subCategory: 'Ka-Varga (Gutturals)',
    pronunciationHint: "Mahaprana: Heavy, aspirated 'gh' as in 'doghouse'. Push the air out strongly.",
    examples: [
      { kannadaWord: 'ಘಂಟೆ', transliteration: 'Ghante', englishMeaning: 'Bell / Hour' },
      { kannadaWord: 'ಘಟ', transliteration: 'Ghata', englishMeaning: 'Clay Pot' },
      { kannadaWord: 'ಘೋಷಣೆ', transliteration: 'Ghooshane', englishMeaning: 'Declaration / Slogan' }
    ],
    acousticClass: 'mahaprana'
  },
  {
    id: 'vyanjana_5',
    kannadaChar: 'ಙ',
    englishSymbol: 'nga',
    category: 'consonant',
    subCategory: 'Ka-Varga (Gutturals)',
    pronunciationHint: "Anunasika (Nasal): Sounds like English 'ng' in 'sing' or 'ring'. Very rare as an initial character.",
    examples: [
      { kannadaWord: 'ವಾಙ್ಮಯ', transliteration: 'Vaangmaya', englishMeaning: 'Literature' }
    ],
    acousticClass: 'anunasika'
  },

  // --- Cha Vargas (Palatals / Hard Palate) ---
  {
    id: 'vyanjana_6',
    kannadaChar: 'ಚ',
    englishSymbol: 'cha',
    category: 'consonant',
    subCategory: 'Cha-Varga (Palatals)',
    pronunciationHint: "Alpaprana: Light 'ch' sound as in 'church' or 'chair'. Tongue flat on roof.",
    examples: [
      { kannadaWord: 'ಚಮಚ', transliteration: 'Chamacha', englishMeaning: 'Spoon' },
      { kannadaWord: 'ಚಕ್ರ', transliteration: 'Chakra', englishMeaning: 'Wheel' },
      { kannadaWord: 'ಚಂದ್ರ', transliteration: 'Chandra', englishMeaning: 'Moon' }
    ],
    acousticClass: 'alpaprana'
  },
  {
    id: 'vyanjana_7',
    kannadaChar: 'ಛ',
    englishSymbol: 'chha',
    category: 'consonant',
    subCategory: 'Cha-Varga (Palatals)',
    pronunciationHint: "Mahaprana: Heavily aspirated 'chh' like the sound of a steam kettle or explosive sneeze.",
    examples: [
      { kannadaWord: 'ಛತ್ರಿ', transliteration: 'Chhatri', englishMeaning: 'Umbrella' },
      { kannadaWord: 'ಛಾಯೆ', transliteration: 'Chhaaye', englishMeaning: 'Shadow / Hue' }
    ],
    acousticClass: 'mahaprana'
  },
  {
    id: 'vyanjana_8',
    kannadaChar: 'ಜ',
    englishSymbol: 'ja',
    category: 'consonant',
    subCategory: 'Cha-Varga (Palatals)',
    pronunciationHint: "Alpaprana: Light 'j' sound as in 'joy' or 'jump'.",
    examples: [
      { kannadaWord: 'ಜಿಂಕೆ', transliteration: 'Jinke', englishMeaning: 'Deer / Stiff' },
      { kannadaWord: 'ಜೇನು', transliteration: 'Jeenu', englishMeaning: 'Honey' },
      { kannadaWord: 'ಜನ', transliteration: 'Jana', englishMeaning: 'People' }
    ],
    acousticClass: 'alpaprana'
  },
  {
    id: 'vyanjana_9',
    kannadaChar: 'ಝ',
    englishSymbol: 'jha',
    category: 'consonant',
    subCategory: 'Cha-Varga (Palatals)',
    pronunciationHint: "Mahaprana: Heavily aspirated 'jh' sound, like 'hedge-hog'. Release deep breath.",
    examples: [
      { kannadaWord: 'ಝರಿ', transliteration: 'Jhari', englishMeaning: 'Water Spring / Waterfall' },
      { kannadaWord: 'ಝೇಂಕಾರ', transliteration: 'Jheenkaara', englishMeaning: 'Buzzing / Humming' }
    ],
    acousticClass: 'mahaprana'
  },
  {
    id: 'vyanjana_10',
    kannadaChar: 'ಞ',
    englishSymbol: 'nya',
    category: 'consonant',
    subCategory: 'Cha-Varga (Palatals)',
    pronunciationHint: "Anunasika (Nasal): Pure palatal nasal sound as in Spanish 'ñ' or 'ny' in 'canyon'.",
    examples: [
      { kannadaWord: 'ಪಂಚಮಿ', transliteration: 'Panchami', englishMeaning: 'Fifth lunar day (nasal blend)' }
    ],
    acousticClass: 'anunasika'
  },

  // --- Ta Vargas (Retroflex / Tongue Tip Curled Back) ---
  {
    id: 'vyanjana_11',
    kannadaChar: 'ಟ',
    englishSymbol: 'ta',
    category: 'consonant',
    subCategory: 'Ta-Varga (Retroflex)',
    pronunciationHint: "Alpaprana: Sharp Retroflex 't'. Curl your tongue tip back to touch roof of palate, sound like 'tea' but hard.",
    examples: [
      { kannadaWord: 'ಟೊಮೆಟೊ', transliteration: 'Tomato', englishMeaning: 'Tomato' },
      { kannadaWord: 'ಟೋಪಿ', transliteration: 'Toopi', englishMeaning: 'Cap / Hat' }
    ],
    acousticClass: 'alpaprana'
  },
  {
    id: 'vyanjana_12',
    kannadaChar: 'ಠ',
    englishSymbol: 'tha',
    category: 'consonant',
    subCategory: 'Ta-Varga (Retroflex)',
    pronunciationHint: "Mahaprana: Aspirated retroflex 'th'. Curl tongue back, release a puff of air. Like 'anthill' but retroflex.",
    examples: [
      { kannadaWord: 'ಪಾಠ', transliteration: 'Paatha', englishMeaning: 'Lesson / Chapter' },
      { kannadaWord: 'ಕಂಠ', transliteration: 'Kantha', englishMeaning: 'Throat / Voice' }
    ],
    acousticClass: 'mahaprana'
  },
  {
    id: 'vyanjana_13',
    kannadaChar: 'ಡ',
    englishSymbol: 'da',
    category: 'consonant',
    subCategory: 'Ta-Varga (Retroflex)',
    pronunciationHint: "Alpaprana: Retroflex 'd'. Curl tongue tip back onto the roof palate. Sounds like 'drum' with deep resonance.",
    examples: [
      { kannadaWord: 'ಡೋಲು', transliteration: 'Doolu', englishMeaning: 'Folk Drum' },
      { kannadaWord: 'ಡಬರಿ', transliteration: 'Dabari', englishMeaning: 'Traditional coffee saucer cup' }
    ],
    acousticClass: 'alpaprana'
  },
  {
    id: 'vyanjana_14',
    kannadaChar: 'ಢ',
    englishSymbol: 'dha',
    category: 'consonant',
    subCategory: 'Ta-Varga (Retroflex)',
    pronunciationHint: "Mahaprana: Aspirated retroflex 'dh'. Curl tongue back, explosive release of deep breath. Like 'redhead'.",
    examples: [
      { kannadaWord: 'ಢಕ್ಕೆ', transliteration: 'Dhakke', englishMeaning: 'Large hand tambourine' }
    ],
    acousticClass: 'mahaprana'
  },
  {
    id: 'vyanjana_15',
    kannadaChar: 'ಣ',
    englishSymbol: 'na',
    category: 'consonant',
    subCategory: 'Ta-Varga (Retroflex)',
    pronunciationHint: "Anunasika (Nasal): Retroflex 'n'. Curl tongue tip back and let sound resonate in nasal chamber. Sound in 'veena'.",
    examples: [
      { kannadaWord: 'ವೀಣೆ', transliteration: 'Veene', englishMeaning: 'Veena (classical string instrument)' },
      { kannadaWord: 'ಬಾಣ', transliteration: 'Baana', englishMeaning: 'Arrow' }
    ],
    acousticClass: 'anunasika'
  },

  // --- Tha Vargas (Dentals / Teeth touch tongue) ---
  {
    id: 'vyanjana_16',
    kannadaChar: 'ತ',
    englishSymbol: 'tha',
    category: 'consonant',
    subCategory: 'Tha-Varga (Dentals)',
    pronunciationHint: "Alpaprana: Light dental 'th' as in French 't' or Spanish 't'. Touch tongue to the top front teeth.",
    examples: [
      { kannadaWord: 'ತರಕಾರಿ', transliteration: 'Tharakaari', englishMeaning: 'Vegetables' },
      { kannadaWord: 'ತಬಲ', transliteration: 'Thabala', englishMeaning: 'Tabla drums' },
      { kannadaWord: 'ತಟ್ಟೆ', transliteration: 'Thatte', englishMeaning: 'Plate' }
    ],
    acousticClass: 'alpaprana'
  },
  {
    id: 'vyanjana_17',
    kannadaChar: 'ಥ',
    englishSymbol: 'thha',
    category: 'consonant',
    subCategory: 'Tha-Varga (Dentals)',
    pronunciationHint: "Mahaprana: Heavily aspirated dental 'thh' with soft push of air. Like 'withhold' but dental.",
    examples: [
      { kannadaWord: 'ರಥ', transliteration: 'Ratha', englishMeaning: 'Chariot / Temple car' },
      { kannadaWord: 'ಪಥ', transliteration: 'Pathha', englishMeaning: 'Way / Path' }
    ],
    acousticClass: 'mahaprana'
  },
  {
    id: 'vyanjana_18',
    kannadaChar: 'ದ',
    englishSymbol: 'da',
    category: 'consonant',
    subCategory: 'Tha-Varga (Dentals)',
    pronunciationHint: "Alpaprana: Soft dental 'd' as in 'them' or 'this'. Touch tongue tip to upper teeth.",
    examples: [
      { kannadaWord: 'ದೀಪ', transliteration: 'Deepa', englishMeaning: 'Traditional Oil Lamp' },
      { kannadaWord: 'ಬಾಗಿಲು', transliteration: 'Baagilu', englishMeaning: 'Door' },
      { kannadaWord: 'ದೇವಸ್ಥಾನ', transliteration: 'Deevasthaana', englishMeaning: 'Temple' }
    ],
    acousticClass: 'alpaprana'
  },
  {
    id: 'vyanjana_19',
    kannadaChar: 'ಧ',
    englishSymbol: 'dha',
    category: 'consonant',
    subCategory: 'Tha-Varga (Dentals)',
    pronunciationHint: "Mahaprana: Highly aspirated dental 'dh' with thick breathing breath. Like 'adhere' with teeth contact.",
    examples: [
      { kannadaWord: 'ಧನಸ್ಸು', transliteration: 'Dhanassu', englishMeaning: 'Archer Bow' },
      { kannadaWord: 'ಧ್ವಜ', transliteration: 'Dhwaja', englishMeaning: 'Flag' },
      { kannadaWord: 'ಧರ್ಮ', transliteration: 'Dharma', englishMeaning: 'Righteous Path / Ethics' }
    ],
    acousticClass: 'mahaprana'
  },
  {
    id: 'vyanjana_20',
    kannadaChar: 'ನ',
    englishSymbol: 'na',
    category: 'consonant',
    subCategory: 'Tha-Varga (Dentals)',
    pronunciationHint: "Anunasika (Nasal): Dental 'n' as in 'nut' or 'no'. Front teeth and tip of tongue contact.",
    examples: [
      { kannadaWord: 'ನವಿಲು', transliteration: 'Navilu', englishMeaning: 'Peacock' },
      { kannadaWord: 'ನಕ್ಷತ್ರ', transliteration: 'Nakshathra', englishMeaning: 'Star' },
      { kannadaWord: 'ನದಿ', transliteration: 'Nadi', englishMeaning: 'River' }
    ],
    acousticClass: 'anunasika'
  },

  // --- Pa Vargas (Labials / Lips touch) ---
  {
    id: 'vyanjana_21',
    kannadaChar: 'ಪ',
    englishSymbol: 'pa',
    category: 'consonant',
    subCategory: 'Pa-Varga (Labials)',
    pronunciationHint: "Alpaprana: Soft 'p' sound as in 'spin' or 'pop'. Touch lips fully together.",
    examples: [
      { kannadaWord: 'ಪಾರಿವಾಳ', transliteration: 'Paarivaala', englishMeaning: 'Pigeon bird' },
      { kannadaWord: 'ಪುಸ್ತಕ', transliteration: 'Pusthaka', englishMeaning: 'Book' },
      { kannadaWord: 'ಪಟ', transliteration: 'Pata', englishMeaning: 'Kite' }
    ],
    acousticClass: 'alpaprana'
  },
  {
    id: 'vyanjana_22',
    kannadaChar: 'ಫ',
    englishSymbol: 'pha',
    category: 'consonant',
    subCategory: 'Pa-Varga (Labials)',
    pronunciationHint: "Mahaprana: Aspirated 'p'. Sounds like heavy 'ph' in 'loophole'. NOT 'f'. Close lips and release puff.",
    examples: [
      { kannadaWord: 'ಫಲ', transliteration: 'Phala', englishMeaning: 'Fruit / Results' },
      { kannadaWord: 'ಫಣಿ', transliteration: 'Phani', englishMeaning: 'Serpent hood' }
    ],
    acousticClass: 'mahaprana'
  },
  {
    id: 'vyanjana_23',
    kannadaChar: 'ಬ',
    englishSymbol: 'ba',
    category: 'consonant',
    subCategory: 'Pa-Varga (Labials)',
    pronunciationHint: "Alpaprana: Light 'b' sound as in 'ball' or 'bus'. Close lips gently.",
    examples: [
      { kannadaWord: 'ಬಸ್ಸು', transliteration: 'Bassu', englishMeaning: 'Bus' },
      { kannadaWord: 'ಬಾವಿ', transliteration: 'Baavi', englishMeaning: 'Water Well' },
      { kannadaWord: 'ಬಾಳೆಹಣ್ಣು', transliteration: 'Baalehannu', englishMeaning: 'Banana' }
    ],
    acousticClass: 'alpaprana'
  },
  {
    id: 'vyanjana_24',
    kannadaChar: 'ಭ',
    englishSymbol: 'bha',
    category: 'consonant',
    subCategory: 'Pa-Varga (Labials)',
    pronunciationHint: "Mahaprana: Heavily aspirated 'b' sound, like 'abhor' or 'subhouse'. Deep air pressure.",
    examples: [
      { kannadaWord: 'ಭಾರತ', transliteration: 'Bhaaratha', englishMeaning: 'India' },
      { kannadaWord: 'ಭಟ', transliteration: 'Bhata', englishMeaning: 'Soldier' },
      { kannadaWord: 'ಭಾಷೆ', transliteration: 'Bhaashe', englishMeaning: 'Language' }
    ],
    acousticClass: 'mahaprana'
  },
  {
    id: 'vyanjana_25',
    kannadaChar: 'ಮ',
    englishSymbol: 'ma',
    category: 'consonant',
    subCategory: 'Pa-Varga (Labials)',
    pronunciationHint: "Anunasika (Nasal): standard nasal 'm' sound as in 'mother' or 'map'. Full lip closure.",
    examples: [
      { kannadaWord: 'ಮನೆ', transliteration: 'Mane', englishMeaning: 'House / Home' },
      { kannadaWord: 'ಮರ', transliteration: 'Mara', englishMeaning: 'Tree' },
      { kannadaWord: 'ಮೀನು', transliteration: 'Meenu', englishMeaning: 'Fish' }
    ],
    acousticClass: 'anunasika'
  },

  // --- Avargiya Vyanjanas (Unstructured/General) ---
  {
    id: 'vyanjana_26',
    kannadaChar: 'ಯ',
    englishSymbol: 'ya',
    category: 'consonant',
    subCategory: 'Avargiya (Unstructured)',
    pronunciationHint: "Semi-vowel / glide. Sounds like 'y' in 'yellow' or 'yes'.",
    examples: [
      { kannadaWord: 'ಯಂತ್ರ', transliteration: 'Yanthra', englishMeaning: 'Machine / Lever' },
      { kannadaWord: 'ಯುದ್ಧ', transliteration: 'Yuddha', englishMeaning: 'War / Combat' },
      { kannadaWord: 'ಯಜ್ಞ', transliteration: 'Yajna', englishMeaning: 'Sacrificial fire ritual' }
    ],
    acousticClass: 'avargiya'
  },
  {
    id: 'vyanjana_27',
    kannadaChar: 'ರ',
    englishSymbol: 'ra',
    category: 'consonant',
    subCategory: 'Avargiya (Unstructured)',
    pronunciationHint: "Tapped or rolled 'r' sound, like 'r' in Spanish 'pero'. Soft tap on the palate.",
    examples: [
      { kannadaWord: 'ರವಿ', transliteration: 'Ravi', englishMeaning: 'Sun' },
      { kannadaWord: 'ರಸ್ತೆ', transliteration: 'Rasthe', englishMeaning: 'Road / Street' },
      { kannadaWord: 'ರಂಗೋಲಿ', transliteration: 'Rangooli', englishMeaning: 'Traditional sand chalk design' }
    ],
    acousticClass: 'avargiya'
  },
  {
    id: 'vyanjana_28',
    kannadaChar: 'ಲ',
    englishSymbol: 'la',
    category: 'consonant',
    subCategory: 'Avargiya (Unstructured)',
    pronunciationHint: "Standard soft dental alveolar 'l' as in 'lion' or 'lake'.",
    examples: [
      { kannadaWord: 'ಲೇಖನಿ', transliteration: 'Leekhani', englishMeaning: 'Pen' },
      { kannadaWord: 'ಲಡ್ಡು', transliteration: 'Laddu', englishMeaning: 'Laddu (sweet sphere)' },
      { kannadaWord: 'ಲೋಟ', transliteration: 'Loota', englishMeaning: 'Juice Glass / Tumbler' }
    ],
    acousticClass: 'avargiya'
  },
  {
    id: 'vyanjana_29',
    kannadaChar: 'ವ',
    englishSymbol: 'va',
    category: 'consonant',
    subCategory: 'Avargiya (Unstructured)',
    pronunciationHint: "Labiodental glide/semi-vowel. Sounds between 'v' in 'vet' and 'w' in 'wet'. No harsh lip bite.",
    examples: [
      { kannadaWord: 'ವಜ್ರ', transliteration: 'Vajra', englishMeaning: 'Diamond' },
      { kannadaWord: 'ವಿಮಾನ', transliteration: 'Vimaana', englishMeaning: 'Airplane' },
      { kannadaWord: 'ವನ', transliteration: 'Vana', englishMeaning: 'Forest / Woods' }
    ],
    acousticClass: 'avargiya'
  },
  {
    id: 'vyanjana_30',
    kannadaChar: 'ಶ',
    englishSymbol: 'sha',
    category: 'consonant',
    subCategory: 'Avargiya (Unstructured)',
    pronunciationHint: "Sibilant. Soft palatal 'sh' in 'she' or 'sugar' but with soft tongue contact on hard palate.",
    examples: [
      { kannadaWord: 'ಶಂಖ', transliteration: 'Shankha', englishMeaning: 'Conch Shell' },
      { kannadaWord: 'ಶರತ್ಕಾಲ', transliteration: 'Sharathkaala', englishMeaning: 'Autumn' }
    ],
    acousticClass: 'avargiya'
  },
  {
    id: 'vyanjana_31',
    kannadaChar: 'ಷ',
    englishSymbol: 'sha (retroflex)',
    category: 'consonant',
    subCategory: 'Avargiya (Unstructured)',
    pronunciationHint: "Retroflex sibilant 'sh'. Curl tongue tip back while whispering 'sh'. Highly resonant sound.",
    examples: [
      { kannadaWord: 'ಷಡ್ಕೋನ', transliteration: 'Shadkoona', englishMeaning: 'Hexagon shape' },
      { kannadaWord: 'ವಿಷ', transliteration: 'Visha', englishMeaning: 'Poison' }
    ],
    acousticClass: 'avargiya'
  },
  {
    id: 'vyanjana_32',
    kannadaChar: 'ಸ',
    englishSymbol: 'sa',
    category: 'consonant',
    subCategory: 'Avargiya (Unstructured)',
    pronunciationHint: "Dental alveolar sibilant 's' as in 'sun' or 'snake'.",
    examples: [
      { kannadaWord: 'ಸೂರ್ಯ', transliteration: 'Soorya', englishMeaning: 'Sun' },
      { kannadaWord: 'ಸೇಬು', transliteration: 'Seebu', englishMeaning: 'Apple Fruit' },
      { kannadaWord: 'ಸಬೂನು', transliteration: 'Saboonu', englishMeaning: 'Cleaning Soap' }
    ],
    acousticClass: 'avargiya'
  },
  {
    id: 'vyanjana_33',
    kannadaChar: 'ಹ',
    englishSymbol: 'ha',
    category: 'consonant',
    subCategory: 'Avargiya (Unstructured)',
    pronunciationHint: "Soft glottal frictional 'h' sound as in 'home' or 'hall'. Try not to voice too deep.",
    examples: [
      { kannadaWord: 'ಹಂಸ', transliteration: 'Hamsa', englishMeaning: 'Royal Swan' },
      { kannadaWord: 'ಹೂವು', transliteration: 'Hoovu', englishMeaning: 'Flower' },
      { kannadaWord: 'ಹಲ್ಲು', transliteration: 'Hallu', englishMeaning: 'Tooth' }
    ],
    acousticClass: 'avargiya'
  },
  {
    id: 'vyanjana_34',
    kannadaChar: 'ಳ',
    englishSymbol: 'la / ḷa (retroflex)',
    category: 'consonant',
    subCategory: 'Avargiya (Unstructured)',
    pronunciationHint: "Curled Retroflex 'l'. Curl tongue tip fully back to roof and slide forward while issuing 'l'. Iconic Kannada sound.",
    examples: [
      { kannadaWord: 'ಮಳೆ', transliteration: 'Male', englishMeaning: 'Rain' },
      { kannadaWord: 'ಶಾಲೆ', transliteration: 'Shaale', englishMeaning: 'School' },
      { kannadaWord: 'ನಳಪಾಕ', transliteration: 'Nalapaaka', englishMeaning: 'Gourmet cooking masterpiece' }
    ],
    acousticClass: 'avargiya'
  },
  // --- DIGITS (Ankegaḷu) ---
  {
    id: 'digit_0',
    kannadaChar: '೦',
    englishSymbol: '0 (Sonne)',
    category: 'digit',
    subCategory: 'Anke (Digit)',
    pronunciationHint: "Pronounced 'Sonne' (सोंन्ने). Represents the number zero / 0 in Kannada. Represents empty or void state.",
    examples: [
      { kannadaWord: 'ಸೊನ್ನೆ', transliteration: 'Sonne', englishMeaning: 'Zero / Nothing' }
    ]
  },
  {
    id: 'digit_1',
    kannadaChar: '೧',
    englishSymbol: '1 (Ondu)',
    category: 'digit',
    subCategory: 'Anke (Digit)',
    pronunciationHint: "Pronounced 'Ondu' (ओन्दु). Represents the number one / 1 in Kannada. Drawn as a single loop with a beautiful clockwise spiral curl.",
    examples: [
      { kannadaWord: 'ಒಂದು ಸೇಬು', transliteration: 'Ondu Seebu', englishMeaning: 'One apple' },
      { kannadaWord: 'ಒಂದು', transliteration: 'Ondu', englishMeaning: 'One / Single / Unity' }
    ]
  },
  {
    id: 'digit_2',
    kannadaChar: '೨',
    englishSymbol: '2 (Eradu)',
    category: 'digit',
    subCategory: 'Anke (Digit)',
    pronunciationHint: "Pronounced 'Eradu' (एरडु). Represents the number two / 2 in Kannada. Highlighted by its elegant sweeping bottom right curl tail.",
    examples: [
      { kannadaWord: 'ಎರಡು ಕಣ್ಣುಗಳು', transliteration: 'Eradu Kannugalu', englishMeaning: 'Two eyes' },
      { kannadaWord: 'ಎರಡು', transliteration: 'Eradu', englishMeaning: 'Two / Pair' }
    ]
  },
  {
    id: 'digit_3',
    kannadaChar: '೩',
    englishSymbol: '3 (Mooru)',
    category: 'digit',
    subCategory: 'Anke (Digit)',
    pronunciationHint: "Pronounced 'Mooru' (मूरु). Represents the number three / 3 in Kannada. Symmetrical, looking like a double-wave vertical wave.",
    examples: [
      { kannadaWord: 'ಮೂರು ಬಣ್ಣಗಳು', transliteration: 'Mooru Bannagalu', englishMeaning: 'Three colors (Tricolor)' },
      { kannadaWord: 'ಮೂರು', transliteration: 'Mooru', englishMeaning: 'Three' }
    ]
  },
  {
    id: 'digit_4',
    kannadaChar: '೪',
    englishSymbol: '4 (Naalku)',
    category: 'digit',
    subCategory: 'Anke (Digit)',
    pronunciationHint: "Pronounced 'Naalku' (नाल्कु). Represents the number four / 4 in Kannada. It visually resembles a stylized written English letter 'y'.",
    examples: [
      { kannadaWord: 'ನಾಲ್ಕು ದಿಕ್ಕುಗಳು', transliteration: 'Naalku Dikkugalu', englishMeaning: 'Four directions' },
      { kannadaWord: 'ನಾಲ್ಕು', transliteration: 'Naalku', englishMeaning: 'Four' }
    ]
  },
  {
    id: 'digit_5',
    kannadaChar: '೫',
    englishSymbol: '5 (Aidu)',
    category: 'digit',
    subCategory: 'Anke (Digit)',
    pronunciationHint: "Pronounced 'Aidu' (ऐदु). Represents the number five / 5 in Kannada. It has a high-crested visual loop waving up to distinguish itself.",
    examples: [
      { kannadaWord: 'ಐದು ಬೆರಳುಗಳು', transliteration: 'Aidu Beralugalu', englishMeaning: 'Five fingers' },
      { kannadaWord: 'ಐದು', transliteration: 'Aidu', englishMeaning: 'Five' }
    ]
  },
  {
    id: 'digit_6',
    kannadaChar: '೬',
    englishSymbol: '6 (Aaru)',
    category: 'digit',
    subCategory: 'Anke (Digit)',
    pronunciationHint: "Pronounced 'Aaru' (आरु). Represents the number six / 6 in Kannada. It's written as a beautiful upward curved hook.",
    examples: [
      { kannadaWord: 'ಆರು ಋತುಗಳು', transliteration: 'Aaru Ruthugalu', englishMeaning: 'Six seasons of the year' },
      { kannadaWord: 'ಆರು', transliteration: 'Aaru', englishMeaning: 'Six' }
    ]
  },
  {
    id: 'digit_7',
    kannadaChar: '೭',
    englishSymbol: '7 (Yelu)',
    category: 'digit',
    subCategory: 'Anke (Digit)',
    pronunciationHint: "Pronounced 'Yelu' (एलु). Represents the number seven / 7 in Kannada. Resembles a clean wave peak flowing rightwards.",
    examples: [
      { kannadaWord: 'ಏಳು ಬಣ್ಣಗಳು', transliteration: 'Yelu Bannagalu', englishMeaning: 'Seven colors (Rainbow)' },
      { kannadaWord: 'ಏಳು', transliteration: 'Yelu', englishMeaning: 'Seven' }
    ]
  },
  {
    id: 'digit_8',
    kannadaChar: '೮',
    englishSymbol: '8 (Entu)',
    category: 'digit',
    subCategory: 'Anke (Digit)',
    pronunciationHint: "Pronounced 'Entu' (एण्टु). Represents the number eight / 8 in Kannada. Closed eye-like loop that represents infinite potential.",
    examples: [
      { kannadaWord: 'ಎಂಟು ದಿಕ್ಕುಗಳು', transliteration: 'Entu Dikkugalu', englishMeaning: 'Eight directions (Ashta-dikpalas)' },
      { kannadaWord: 'ಎಂಟು', transliteration: 'Entu', englishMeaning: 'Eight' }
    ]
  },
  {
    id: 'digit_9',
    kannadaChar: '೯',
    englishSymbol: '9 (Ombattu)',
    category: 'digit',
    subCategory: 'Anke (Digit)',
    pronunciationHint: "Pronounced 'Ombattu' (ओम़्बत्तु). Represents the number nine / 9 in Kannada. Looks like a circular loop pointing leftwards.",
    examples: [
      { kannadaWord: 'ಒಂಬತ್ತು ರತ್ನಗಳು', transliteration: 'Ombattu Rathnagalu', englishMeaning: 'Nine gems (Navaratnas)' },
      { kannadaWord: 'ಒಂಬತ್ತು', transliteration: 'Ombattu', englishMeaning: 'Nine' }
    ]
  }
];
