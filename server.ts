import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Initialize GoogleGenAI server-side with User-Agent
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// JSON parsing middleware
app.use(express.json());

// Fallback accurate words if Gemini is not available or throws an error
const FALLBACK_WORDS = [
  {
    kannadaWord: "ಕನ್ನಡ",
    transliteration: "kannada",
    englishMeaning: "The Kannada language",
    breakdown: "Features consonant 'ಕ' (ka), doubled consonant 'ನ್ನ' (na + na), and 'ಡ' (da)."
  },
  {
    kannadaWord: "ಮನೆ",
    transliteration: "mane",
    englishMeaning: "House / Home",
    breakdown: "Starts with consonant 'ಮ' (ma) followed by 'ನ' (na) with the 'ಎ' (e) vowel sign."
  },
  {
    kannadaWord: "ಅಮ್ಮ",
    transliteration: "amma",
    englishMeaning: "Mother",
    breakdown: "Starts with the vowel 'ಅ' (a), combined with the geminate consonant 'ಮ್ಮ' (ma + ma)."
  },
  {
    kannadaWord: "ಮರ",
    transliteration: "mara",
    englishMeaning: "Tree",
    breakdown: "Formed by joining two simple primary consonants: 'ಮ' (ma) and 'ರ' (ra)."
  },
  {
    kannadaWord: "ಹೂವು",
    transliteration: "hoovu",
    englishMeaning: "Flower",
    breakdown: "Consonant 'ಹ' (ha) with long vowel sign 'ೂ' (oo), and 'ವ' (va) with vowel sign 'ು' (u)."
  },
  {
    kannadaWord: "ಹಾಲು",
    transliteration: "haalu",
    englishMeaning: "Milk",
    breakdown: "Consonant 'ಹ' (ha) with long vowel sign 'ಾ' (aa), and 'ಲ' (la) with vowel sign 'ು' (u)."
  },
  {
    kannadaWord: "ಊಟ",
    transliteration: "oota",
    englishMeaning: "Meal / Food",
    breakdown: "Starts with the long vowel 'ಊ' (oo) followed by the cerebrated consonant 'ಟ' (ta)."
  },
  {
    kannadaWord: "ನಾಯಿ",
    transliteration: "naayi",
    englishMeaning: "Dog",
    breakdown: "Consonant 'ನ' (na) with long vowel sign 'ಾ' (aa), and 'ಯ' (ya) with vowel sign 'ಿ' (i)."
  },
  {
    kannadaWord: "ಶಾಲೆ",
    transliteration: "shaale",
    englishMeaning: "School",
    breakdown: "Consonant 'ಶ' (sha) with long vowel sign 'ಾ' (aa), and 'ಲ' (la) with vowel sign 'ೆ' (e)."
  },
  {
    kannadaWord: "ಪುಸ್ತಕ",
    transliteration: "pustaka",
    englishMeaning: "Book",
    breakdown: "Consonant 'ಪ' (pa) with vowel sign 'ು' (u), linked to consonant assembly 'ಸ್ತ' (sa + ta), and 'ಕ' (ka)."
  }
];

// Word generation API endpoint using Gemini API
app.post("/api/generate-words", async (req, res) => {
  const { focusChar, category } = req.body;

  if (!process.env.GEMINI_API_KEY) {
    console.warn("GEMINI_API_KEY is not defined in the environment. Returning high-quality fallback Kannada words.");
    return res.json({ words: FALLBACK_WORDS, info: "Using high-quality offline corpus" });
  }

  try {
    let promptText = `
Generate exactly 10 real, common, and accurate Kannada words to help a student learn to recognize the Kannada alphabet/script.
`;
    if (focusChar) {
      promptText += `Each generated word MUST incorporate the specific Kannada character/syllable/sound "${focusChar}" (either as a base alphabet, vowel sign, or consonant conjunct) to assist the student in recognizing and hearing it.\n`;
    } else if (category) {
      promptText += `The words should highlight characters from the "${category}" category (such as vowels, consonants, or modifiers) of the Kannada alphabet.\n`;
    }

    promptText += `
For each word, do NOT invent words. Ensure they are real, standard Kannada dictionary words.
Return a beautiful list of exactly 10 items.
Each item must have:
1. 'kannadaWord': The word written correctly in official Kannada script (e.g., 'ಕನ್ನಡ', 'ಮನೆ').
2. 'transliteration': English phonetical transliteration (e.g., 'kannada', 'mane').
3. 'englishMeaning': Simple English translation (e.g., 'the Kannada language', 'house').
4. 'breakdown': A clear, learner-friendly phonetic breakdown highlighting the characters and signs used (e.g., "Contains 'ಮ' (ma) + 'ನ' (na) with the 'e' vowel sign 'ೆ'").
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptText,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              kannadaWord: { type: Type.STRING },
              transliteration: { type: Type.STRING },
              englishMeaning: { type: Type.STRING },
              breakdown: { type: Type.STRING },
            },
            required: ["kannadaWord", "transliteration", "englishMeaning", "breakdown"]
          }
        },
        systemInstruction: "You are an expert Kannada phonology and language teacher. You only generate real, linguistically accurate Kannada words with perfect transliterations and professional breakdowns. Never invent words or generate corrupt unicode."
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from Gemini API");
    }

    const words = JSON.parse(text);
    return res.json({ words, info: "Generated live with Gemini" });
  } catch (error: any) {
    console.error("Gemini word generation error:", error);
    // Return high-quality offline fallbacks on any error to keep the app functional
    return res.json({ words: FALLBACK_WORDS, info: "Using offline backup (API failed or timed out)" });
  }
});

// Dynamic specified word length generator for the memorization recall game
app.post("/api/generate-recall-words", async (req, res) => {
  const { length } = req.body;
  const wordLength = parseInt(length) || 3;

  if (!process.env.GEMINI_API_KEY) {
    const matched = FALLBACK_WORDS.filter(w => {
      // simple visual character length calculator
      const clean = w.kannadaWord.replace(/[\u0CBE-\u0CD6\u0C82\u0C83]|್/g, '');
      return clean.length === wordLength;
    });
    const result = matched.length > 0 ? matched : FALLBACK_WORDS;
    return res.json({ words: result, info: "Using high-quality offline corpus" });
  }

  try {
    const promptText = `
Generate exactly 15 real, common, and accurate Kannada words.
Each generated word MUST have exactly ${wordLength} visual letters/aksharas (excluding vowel signs/halant diacritics alone, but including combined forms). E.g.
- Length 2: words like "ಮರ" (ma-ra), "ಮನೆ" (ma-ne), "ಹಾಲು" (haa-lu), "ಗಿಡ" (gi-da)
- Length 3: words like "ಕನ್ನಡ" (ka-nna-da), "ಪುಸ್ತಕ" (pu-sta-ka), "ಸಮಯ" (sa-ma-ya), "ಆಕಾಶ" (aa-kaa-sha)
- Length 4: words like "ಉಪಹಾರ" (u-pa-haa-ra), "ಸಮಾಧಾನ" (sa-maa-dhaa-na), "ಅಂಗಡಿಗಳು" (an-ga-di-ga-lu)

Return a beautiful list of exactly 15 items in a strict JSON array.
Each item must have:
1. 'kannadaWord': The word written correctly in official Kannada script.
2. 'transliteration': English phonetical transliteration.
3. 'englishMeaning': Simple English translation.
4. 'breakdown': A clear, learner-friendly phonetic breakdown highlighting the characters/signs making up the word.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptText,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              kannadaWord: { type: Type.STRING },
              transliteration: { type: Type.STRING },
              englishMeaning: { type: Type.STRING },
              breakdown: { type: Type.STRING },
            },
            required: ["kannadaWord", "transliteration", "englishMeaning", "breakdown"]
          }
        },
        systemInstruction: "You are an expert Kannada phonology and language teacher. You only generate real, standard, dictionary Kannada words of the exact specified akshara length with perfect transliterations and professional breakdowns. Never invent words or generate corrupt unicode."
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from Gemini API");
    }

    const words = JSON.parse(text);
    return res.json({ words, info: `Generated ${wordLength}-letter words live` });
  } catch (error: any) {
    console.error("Gemini recall word generation error:", error);
    const matched = FALLBACK_WORDS.filter(w => {
      const clean = w.kannadaWord.replace(/[\u0CBE-\u0CD6\u0C82\u0C83]|್/g, '');
      return clean.length === wordLength;
    });
    const result = matched.length > 0 ? matched : FALLBACK_WORDS;
    return res.json({ words: result, info: "Using offline backup (API failed or timed out)" });
  }
});

// Fallback essays in English and Hindi for offline support
const FALLBACK_ESSAYS: Record<string, Record<string, any>> = {
  en: {
    "100": {
      title: "ನನ್ನ ಪ್ರೀತಿಯ ಕುಟುಂಬ",
      titleTranslation: "My Beloved Family",
      titleTransliteration: "Nanna preetiya kutumba",
      paragraphs: [
        {
          kannadaParagraph: "ನನ್ನ ಹೆಸರು ರಾಜು. ನಾನು ಬೆಂಗಳೂರಿನಲ್ಲಿ ವಾಸಿಸುತ್ತೇನೆ. ನನ್ನ ತಂದೆ ಒಬ್ಬ ಶಿಕ್ಷಕರು, ಅವರು ಬಹಳ ಒಳ್ಳೆಯವರು. ನನ್ನ ತಾಯಿ ಮನೆಯ ಜವಾಬ್ದಾರಿಗಳನ್ನು ನೋಡಿಕೊಳ್ಳುತ್ತಾರೆ. ನಮಗೆ ಒಂದು ಸಣ್ಣ ಸುಂದರವಾದ ಮನೆ ಇದೆ. ನಾವೆಲ್ಲರೂ ಪ್ರತಿದಿನ ಒಟ್ಟಿಗೆ ಊಟ ಮಾಡುತ್ತೇವೆ ಮತ್ತು ಸಂತೋಷದಿಂದ ಇರುತ್ತೇವೆ. ನಮ್ಮ ಕುಟುಂಬದಲ್ಲಿ ಎಲ್ಲರೂ ಒಬ್ಬರನ್ನೊಬ್ಬರು ಪ್ರೀತಿಸುತ್ತಾರೆ. ಇದು ನನ್ನ ಪ್ರೀತಿಯ ಸುಂದರ ಕುಟುಂಬ.",
          translation: "My name is Raju. I live in Bengaluru. My father is a teacher; he is very good. My mother looks after the responsibilities of the home. We have a small beautiful house. We all eat dinner together every day and stay happy. Everyone in our family loves each other. This is my beloved beautiful family.",
          sentences: [
            {
              kannadaSentence: "ನನ್ನ ಹೆಸರು ರಾಜು.",
              transliteration: "Nanna hesaru raaju.",
              translation: "My name is Raju.",
              grammarNotes: "Pronoun 'Nanna' (my) + noun 'hesaru' (name) + Subject 'raaju'."
            },
            {
              kannadaSentence: "ನಾನು ಬೆಂಗಳೂರಿನಲ್ಲಿ ವಾಸಿಸುತ್ತೇನೆ.",
              transliteration: "Naanu bengaloorunalli vaasisuttene.",
              translation: "I live in Bengaluru.",
              grammarNotes: "Uses locative suffix '-alli' in 'bengaloorunalli' (in Bengaluru). 'Vaasisuttene' is first-person singular verb 'I live'."
            },
            {
              kannadaSentence: "ನನ್ನ ತಂದೆ ಒಬ್ಬ ಶಿಕ್ಷಕರು, ಅವರು ಬಹಳ ಒಳ್ಳೆಯವರು.",
              transliteration: "Nanna tande obba shikshakaru, avaru bahala olleyavaru.",
              translation: "My father is a teacher; he is very good.",
              grammarNotes: "'Shikshakaru' (teacher) and 'olleyavaru' (good person) use honorific plural endings for respect."
            },
            {
              kannadaSentence: "ನನ್ನ ತಾಯಿ ಮನೆಯ ಜವಾಬ್ದಾರಿಗಳನ್ನು ನೋಡಿಕೊಳ್ಳುತ್ತಾರೆ.",
              transliteration: "Nanna taayi maneya javaabdaarigalannu nodikolluttaare.",
              translation: "My mother looks after the responsibilities of the home.",
              grammarNotes: "'Maneya' is genitive 'of home'. 'Javaabdaarigalannu' has accusative plural suffix '-annu'."
            },
            {
              kannadaSentence: "ನಮಗೆ ಒಂದು ಸಣ್ಣ ಸುಂದರವಾದ ಮನೆ ಇದೆ.",
              transliteration: "Namage ondu sanna sundaravaada mane ide.",
              translation: "We have a small beautiful house.",
              grammarNotes: "'Namage' is dative 'to us'. 'Ondu' (one), 'sanna' (small), 'sundaravaada' (beautiful modifier), 'mane' (house), 'ide' (is there)."
            },
            {
              kannadaSentence: "ನಾವೆಲ್ಲರೂ ಪ್ರತಿದಿನ ಒಟ್ಟಿಗೆ ಊಟ ಮಾಡುತ್ತೇವೆ ಮತ್ತು ಸಂತೋಷದಿಂದ ಇರುತ್ತೇವೆ.",
              transliteration: "Naavellaroo pratidina ottige oota maadutteve mattu santoshadinda irutteve.",
              translation: "We all eat meals together every day and live happily.",
              grammarNotes: "'Naavellaroo' means 'all of us'. 'Santoshadinda' uses instrumental suffix '-inda' meaning 'with happiness'."
            },
            {
              kannadaSentence: "ನಮ್ಮ ಕುಟುಂಬದಲ್ಲಿ ಎಲ್ಲರೂ ಒಬ್ಬರನ್ನೊಬ್ಬರು ಪ್ರೀತಿಸುತ್ತಾರೆ.",
              transliteration: "Namma kutumbadalli ellaroo obbarannobbaru preetisuttaare.",
              translation: "Everyone in our family loves each other.",
              grammarNotes: "'Obbarannobbaru' is compound pronoun meaning 'each other'. 'Preetisuttaare' is third-person plural 'they love'."
            },
            {
              kannadaSentence: "ಇದು ನನ್ನ ಪ್ರೀತಿಯ ಸುಂದರ ಕುಟುಂಬ.",
              transliteration: "Idu nanna preetiya sundara kutumba.",
              translation: "This is my beloved beautiful family.",
              grammarNotes: "'Idu' is singular proximal 'this'. 'Preetiya' means beloved or dear."
            }
          ]
        }
      ],
      vocabHighlight: [
        { word: "ಕುಟುಂಬ", transliteration: "kutumba", meaning: "Family" },
        { word: "ಶಿಕ್ಷಕರು", transliteration: "shikshakaru", meaning: "Teacher (honorific)" },
        { word: "ಸುಂದರವಾದ", transliteration: "sundaravaada", meaning: "Beautiful" },
        { word: "ಮನೆ", transliteration: "mane", meaning: "House" },
        { word: "ಸಂತೋಷ", transliteration: "santosha", meaning: "Happiness" }
      ]
    },
    "200": {
      title: "ಕನ್ನಡ ಭಾಷೆ ಮತ್ತು ಇತಿಹಾಸ",
      titleTranslation: "The Kannada Language and History",
      titleTransliteration: "Kannada bhaashe mattu itihaasa",
      paragraphs: [
        {
          kannadaParagraph: "ಕನ್ನಡವು ಭಾರತದ ಅತ್ಯಂತ ಹಳೆಯ ದ್ರಾವಿಡ ಭಾಷೆಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಇದನ್ನು ಕರ್ನಾಟಕ ರಾಜ್ಯದಲ್ಲಿ ಪ್ರಮುಖವಾಗಿ ಮಾತನಾಡಲಾಗುತ್ತದೆ. ನಮ್ಮ ಹೆಮ್ಮೆಯ ಭಾಷೆಗೆ ಸುಮಾರು ಎರಡು ಸಾವಿರ ವರ್ಷಗಳ ಅದ್ಭುತ ಇತಿಹಾಸವಿದೆ. ಭಾರತ ಸರ್ಕಾರವು ಕನ್ನಡಕ್ಕೆ 'ಶಾಸ್ತ್ರೀಯ ಭಾಷೆ' ಎಂಬ ಸ್ಥಾನಮಾನವನ್ನು ನೀಡಿದೆ. ಕನ್ನಡದ ಲಿಪಿಯು ತುಂಬಾ ಸುಂದರವಾಗಿದ್ದು, ಅದನ್ನು ಅಕ್ಷರಗಳ ರಾಣಿ ಎಂದು ಕರೆಯುತ್ತಾರೆ. ಕನ್ನಡ ಸಾಹಿತ್ಯಕ್ಕೆ ಎಂಟು ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿಗಳು ದೊರೆತಿವೆ. ಇದು ಕನ್ನಡ ಭಾಷೆಯ ಸಾಹಿತ್ಯಿಕ ಸಮೃದ್ಧಿಯನ್ನು ಜಗತ್ತಿಗೆ ತೋರಿಸುತ್ತದೆ.",
          translation: "Kannada is one of the oldest Dravidian languages in India. It is primarily spoken in the state of Karnataka. Our proud language has a glorious history of nearly two thousand years. The Government of India has accorded classical language status to Kannada. The Kannada script is extremely beautiful and is referred to as the queen of scripts. Kannada literature has received eight Jnanpith awards. This showcases the literary richness of the Kannada language to the world.",
          sentences: [
            {
              kannadaSentence: "ಕನ್ನಡವು ಭಾರತದ ಅತ್ಯಂತ ಹಳೆಯ ದ್ರಾವಿಡ ಭಾಷೆಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ.",
              transliteration: "Kannadavu bhaaratada atyanta haleya draavida bhaashegalalli ondagaide.",
              translation: "Kannada is one of the oldest Dravidian languages of India.",
              grammarNotes: "'Bhaaratada' uses genitive suffix '-da' (of India). 'Bhaashegalalli' has locative plural suffix '-alli' (among languages)."
            },
            {
              kannadaSentence: "ಇದನ್ನು ಕರ್ನಾಟಕ ರಾಜ್ಯದಲ್ಲಿ ಪ್ರಮುಖವಾಗಿ ಮಾತನಾಡಲಾಗುತ್ತದೆ.",
              transliteration: "Idannu karnaataka raajyadalli pramukhavaagi maatanaadalaaguttade.",
              translation: "It is primarily spoken in the state of Karnataka.",
              grammarNotes: "'Raajyadalli' is locative case (in State). 'Maatanaadalaaguttade' is the passive voice form of 'speak'."
            },
            {
              kannadaSentence: "ನಮ್ಮ ಹೆಮ್ಮೆಯ ಭಾಷೆಗೆ ಸುಮಾರು ಎರಡು ಸಾವಿರ ವರ್ಷಗಳ ಅದ್ಭುತ ಇತಿಹಾಸವಿದೆ.",
              transliteration: "Namma hemmeya bhaashege sumaaru eradu saavira varshagala adbhuta itihaasavide.",
              translation: "Our proud language has a glorious history of nearly two thousand years.",
              grammarNotes: "'Bhaashege' has dative suffix '-ge' (to the language). 'Varshagala' has genitive plural '-gala' (of years)."
            },
            {
              kannadaSentence: "ಭಾರತ ಸರ್ಕಾರವು ಕನ್ನಡಕ್ಕೆ 'ಶಾಸ್ತ್ರೀಯ ಭಾಷೆ' ಎಂಬ ಸ್ಥಾನಮಾನವನ್ನು ನೀಡಿದೆ.",
              transliteration: "bhaarata sarakaaravu kannadakke 'shaastreeya bhaashe' emba sthaanamaanavannu needide.",
              translation: "The Government of India has accorded classical language status to Kannada.",
              grammarNotes: "'Sarakaaravu' ends with emphatic 'u'. 'Needide' is the present perfect third-person singular 'has given'."
            },
            {
              kannadaSentence: "ಕನ್ನಡದ ಲಿಪಿಯು ತುಂಬಾ ಸುಂದರವಾಗಿದ್ದು, ಅದನ್ನು ಅಕ್ಷರಗಳ ರಾಣಿ ಎಂದು ಕರೆಯುತ್ತಾರೆ.",
              transliteration: "Kannadada lipiyu tumba sundaravaagiddu, adannu aksharagala raani endu kareyuttaare.",
              translation: "The Kannada script is extremely beautiful and is referred to as the queen of scripts.",
              grammarNotes: "'Lipiyu' is script with vowel helper. 'Kareyuttaare' is third-person plural 'they address/respectly call'."
            },
            {
              kannadaSentence: "ಕನ್ನಡ ಸಾಹಿತ್ಯಕ್ಕೆ ಎಂಟು ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿಗಳು ದೊರೆತಿವೆ.",
              transliteration: "Kannada saahityakke entu jnaanapeetha prashastigalu doretive.",
              translation: "Kannada literature has received eight Jnanpith awards.",
              grammarNotes: "'Entu' means eight. 'Prashastigalu' is plural suffix '-galu' (awards). 'Doretive' means are obtained/obtained."
            },
            {
              kannadaSentence: "ಇದು ಕನ್ನಡ ಭಾಷೆಯ ಸಾಹಿತ್ಯಿಕ ಸಮೃದ್ಧಿಯನ್ನು ಜಗತ್ತಿಗೆ ತೋರಿಸುತ್ತದೆ.",
              transliteration: "Idu kannada bhaasheya saahityika samruddhiyannu jagattige torisuttade.",
              translation: "This showcases the literary richness of the Kannada language to earth.",
              grammarNotes: "'Samruddhiyannu' has accusative suffix '-annu'. 'Jagattige' is dative 'to the world'."
            }
          ]
        }
      ],
      vocabHighlight: [
        { word: "ದ್ರಾವಿಡ", transliteration: "draavida", meaning: "Dravidian" },
        { word: "ಹೆಮ್ಮೆ", transliteration: "hemme", meaning: "Pride" },
        { word: "ಶಾಸ್ರ್ತೀಯ", transliteration: "shaastreeya", meaning: "Classical" },
        { word: "ಲಿಪಿ", transliteration: "lipi", meaning: "Script/Alphabet representation" },
        { word: "ಪ್ರಶಸ್ತಿ", transliteration: "prashasti", meaning: "Award/Prize" }
      ]
    },
    "300": {
      title: "ಕರ್ನಾಟಕದ ನಿಸರ್ಗ ಮತ್ತು ಸಂಸ್ಕೃತಿ",
      titleTranslation: "The Nature and Culture of Karnataka",
      titleTransliteration: "Karnaatakada nisarga mattu samskruti",
      paragraphs: [
        {
          kannadaParagraph: "ಕರ್ನಾಟಕವು ದಕ್ಷಿಣ ಭಾರತದ ಅತಿ ಶ್ರೀಮಂತ ಪ್ರವಾಸಿ ತಾಣಗಳನ್ನು ಮತ್ತು ಅದ್ಭುತ ಪ್ರಾಕೃತಿಕ ಅಪೂರ್ವ ನೈಸರ್ಗಿಕ ಸಂಪತ್ತನ್ನು ಹೊಂದಿರುವ ಸುಂದರ ಸಸ್ಯ ಶ್ಯಾಮಲೆ ರಾಜ್ಯವಾಗಿದೆ. ಇಲ್ಲಿನ ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ ದಟ್ಟವಾದ ಕಾಡುಗಳು ಅಪಾರ ಜೈವಿಕ ವೈವಿಧ್ಯತೆಯಿಂದ ತುಂಬಿವೆ. ಅವು ಜಗತ್ತಿನ ಪ್ರಮುಖ ನಿಸರ್ಗ ತಾಣಗಳಲ್ಲಿ ಒಂದೆಂದು ಗುರುತಿಸಲ್ಪಟ್ಟಿವೆ. ಕಾವೇರಿ, ಕೃಷ್ಣಾ, ಶರಾವತಿ ಮತ್ತು ತುಂಗಭದ್ರಾ ನದಿಗಳು ಈ ನಾಡನ್ನು ಸದಾ ಹಸಿರಾಗಿಡಲು ಮಳೆಯ ಬೆಂಬಲದೊಂದಿಗೆ ತಂಪಾಗಿಸುತ್ತವೆ. ಕರ್ನಾಟಕದ ಕಾಡುಗಳಲ್ಲಿ ಸುಂದರ ಆನೆಗಳು, ಹುಲಿಗಳು ಮತ್ತು ಅನೇಕ ತಳಿಗಳ ಅಪರೂಪದ ಹಕ್ಕಿಗಳು ಸ್ವತಂತ್ರವಾಗಿ ವಾಸಿಸುತ್ತವೆ. ಕರಾವಳಿ ತೀರದ ಸುಂದರ ಸಮುದ್ರಗಳು ಕರ್ನಾಟಕಕ್ಕೆ ವಿಶೇಷ ನೈಸರ್ಗಿಕ ಸೌಂದರ್ಯವನ್ನು ಒದಗಿಸುತ್ತವೆ.",
          translation: "Karnataka is a beautiful, lush green state in South India endowed with the richest tourist destinations and magnificent pristine natural wealth. The dense forests of the Western Ghats here are filled with immense biodiversity, recognized as one of the world's hot spots. Rivers like Kaveri, Krishna, Sharavati, and Tungabhadra irrigate this land to keep it forever green under rainfall blessings. In Karnataka's forests, wild majestic elephants, mighty tigers, and various species of rare birds roam freely. The beautiful coastline of the Arabian Sea adds an exquisite maritime beauty to Karnataka.",
                    sentences: [
            {
              kannadaSentence: "ಕರ್ನಾಟಕವು ದಕ್ಷಿಣ ಭಾರತದ ಅತಿ ಶ್ರೀಮಂತ ಪ್ರವಾಸಿ ತಾಣಗಳನ್ನು ಮತ್ತು ಅದ್ಭುತ ಪ್ರಾಕೃತಿಕ ಅಪೂರ್ವ ನೈಸರ್ಗಿಕ ಸಂಪತ್ತನ್ನು ಹೊಂದಿರುವ ಸುಂದರ ಸಸ್ಯ ಶ್ಯಾಮಲೆ ರಾಜ್ಯವಾಗಿದೆ.",
              transliteration: "Karnaatakavu dakshina bhaaratada ati shreemanta pravaasi taanagalannu mattu adbhuta praakrutika apoorva naisargika sampattannu hondiruva sundara sasya shyaamale raajyavaagide.",
              translation: "Karnataka is a beautiful state in South India with rich tourist spots and amazing natural wealth.",
              grammarNotes: "Uses long compound words. 'Pravaasi' (tourist) + 'taanagalannu' (destinations, accusative plural)."
            },
            {
              kannadaSentence: "ಇಲ್ಲಿನ ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ ದಟ್ಟವಾದ ಕಾಡುಗಳು ಅಪಾರ ಜೈವಿಕ ವೈವಿಧ್ಯತೆಯಿಂದ ತುಂಬಿವೆ.",
              transliteration: "Illina pashchima ghattagala dattavaada kaadugalu apaara jaivika vaividhyateyinda tumbive.",
              translation: "The dense forests of the Western Ghats here are filled with immense biodiversity.",
              grammarNotes: "'Illina' (of here), 'ghattagala' (of ghats), 'kaadugalu' (forests). 'Vaividhyateyinda' has instrumental suffix meaning 'with diversity'."
            },
            {
              kannadaSentence: "ಅವು ಜಗತ್ತಿನ ಪ್ರಮುಖ ನಿಸರ್ಗ ತಾಣಗಳಲ್ಲಿ ಒಂದೆಂದು ಗುರುತಿಸಲ್ಪಟ್ಟಿವೆ.",
              transliteration: "Avu jagattina pramukha nisarga taanagalalli ondendu gurutisalpadtive.",
              translation: "They are recognized as one of the world's most prominent nature spots.",
              grammarNotes: "'Avu' is plural pronoun (they). 'Ondendu' is compound word (as one)."
            },
            {
              kannadaSentence: "ಕಾವೇರಿ, ಕೃಷ್ಣಾ, ಶರಾವತಿ ಮತ್ತು ತುಂಗಭದ್ರಾ ನದಿಗಳು ಈ ನಾಡನ್ನು ಸದಾ ಹಸಿರಾಗಿಡಲು ಮಳೆಯ ಬೆಂಬಲದೊಂದಿಗೆ ತಂಪಾಗಿಸುತ್ತವೆ.",
              transliteration: "Kaaveri, krishnaa, sharaavati mattu tungabhadraa nadigalu ee naadannu sadaa hasiraagidalu maleya bembaladondige tampaagisuttave.",
              translation: "Rivers like Kaveri, Krishna, Sharavati, and Tungabhadra irrigate this land to keep it green under the blessing of rains.",
              grammarNotes: "'Nadigalu' is plural of river. 'Naadannu' is accusative form of 'land/country'."
            },
            {
              kannadaSentence: "ಕರ್ನಾಟಕದ ಕಾಡುಗಳಲ್ಲಿ ಸುಂದರ ಆನೆಗಳು, ಹುلیಗಳು ಮತ್ತು ಅನೇಕ ತಳಿಗಳ ಅಪರೂಪದ ಹಕ್ಕಿಗಳು ಸ್ವತಂತ್ರವಾಗಿ ವಾಸಿಸುತ್ತವೆ.",
              transliteration: "Karnaatakada kaadugalalli sundara aanegalu, huligalu mattu aneka taligala apoorpada hakkigalu swatantravaagi vaasisuttave.",
              translation: "In Karnataka's forests, beautiful elephants, tigers, and rare species of birds live freely.",
              grammarNotes: "'Kaadugalalli' means 'in forests' (locative plural). 'Swatantravaagi' is the adverb meaning 'freely'."
            },
            {
              kannadaSentence: "ಕರಾವಳಿ ತೀರದ ಸುಂದರ ಸಮುದ್ರಗಳು ಕರ್ನಾಟಕಕ್ಕೆ ವಿಶೇಷ ನೈಸರ್ಗಿಕ ಸೌಂದರ್ಯವನ್ನು ಒದಗಿಸುತ್ತವೆ.",
              transliteration: "Karaavali teerada sundara samudragalu karnaatakakke vishesha naisargika saundaryavannu odagisuttave.",
              translation: "The beautiful seashore along the coast provides a unique natural beauty to Karnataka.",
              grammarNotes: "'Karaavali' means coastal. 'Karnaatakakke' is dative form meaning 'to Karnataka'."
            }
          ]
        }
      ],
      vocabHighlight: [
        { word: "ಪ್ರಾಕೃತಿಕ", transliteration: "praakrutika", meaning: "Natural" },
        { word: "ಜೈವಿಕ ವೈವಿಧ್ಯತೆ", transliteration: "jaivika vaividhyate", meaning: "Biodiversity" },
        { word: "ಕಾಡುಗಳು", transliteration: "kaadugalu", meaning: "Forests" },
        { word: "ಆನೆಗಳು", transliteration: "aanegalu", meaning: "Elephants" },
        { word: "ಸೌಂದರ್ಯ", transliteration: "saundarya", meaning: "Beauty" }
      ]
    }
  },
  hi: {
    "100": {
      title: "मेरा प्यारा परिवार",
      titleTranslation: "My Beloved Family",
      titleTransliteration: "नन्न प्रीतिय कुटुंब",
      paragraphs: [
        {
          kannadaParagraph: "ನನ್ನ ಹೆಸರು ರಾಜು. ನಾನು ಬೆಂಗಳೂರಿನಲ್ಲಿ ವಾಸಿಸುತ್ತೇನೆ. ನನ್ನ ತಂದೆ ಒಬ್ಬ ಶಿಕ್ಷಕರು, ಅವರು ಬಹಳ ಒಳ್ಳೆಯವರು. ನನ್ನ ತಾಯಿ ಮನೆಯ ಜವಾಬ್ದಾರಿಗಳನ್ನು ನೋಡಿಕೊಳ್ಳುತ್ತಾರೆ. ನಮಗೆ ಒಂದು ಸಣ್ಣ ಸುಂದರವಾದ ಮನೆ ಇದೆ. ನಾವೆಲ್ಲರೂ ಪ್ರತಿದಿನ ಒಟ್ಟಿಗೆ ಊಟ ಮಾಡುತ್ತೇವೆ ಮತ್ತು ಸಂತೋಷದಿಂದ ಇರುತ್ತೇವೆ. ನಮ್ಮ ಕುಟುಂಬದಲ್ಲಿ ಎಲ್ಲರೂ ಒಬ್ಬರನ್ನೊಬ್ಬರು ಪ್ರೀತಿಸುತ್ತಾರೆ. ಇದು ನನ್ನ ಪ್ರೀತಿಯ ಸುಂದರ ಕುಟುಂಬ.",
          translation: "मेरा नाम राजू है। मैं बेंगलुरु में रहता हूँ। मेरे पिता एक शिक्षक हैं, वे बहुत अच्छे हैं। मेरी माँ घर की ज़िम्मेदारियों की देखरेख करती हैं। हमारा एक छोटा सा सुंदर घर है। हम सब हर दिन एक साथ खाना खाते हैं और खुशी से रहते हैं। हमारे परिवार में सभी एक-दूसरे से बहुत प्यार करते हैं। यह मेरा प्यारा सुंदर परिवार है।",
          sentences: [
            {
              kannadaSentence: "ನನ್ನ ಹೆಸರು ರಾಜು.",
              transliteration: "नन्न हेसरु राजू.",
              translation: "मेरा नाम राजू है।",
              grammarNotes: "कन्नड़ में 'Nanna' का अर्थ है 'मेरा' और 'hesaru' का अर्थ है 'नाम'।"
            },
            {
              kannadaSentence: "ನಾನು ಬೆಂಗಳೂರಿನಲ್ಲಿ ವಾಸಿಸುತ್ತೇನೆ.",
              transliteration: "नानु बेंगलूरिनल्ली वासिसुत्तेने.",
              translation: "मैं बेंगलुरु में रहता हूँ।",
              grammarNotes: "बेंगलुरु शब्द में अधिकरण कारक '-alli' लगा है, जिससे 'bengaloorunalli' (बेंगलुरु में) बना। 'Vaasisuttene' उत्तम पुरुष एकवचन क्रिया है।"
            },
            {
              kannadaSentence: "ನನ್ನ ತಂದೆ ಒಬ್ಬ ಶಿಕ್ಷಕರು, ಅವರು ಬಹಳ ಒಳ್ಳೆಯವರು.",
              transliteration: "नन्न तंदे ओब्ब शिक्षकरु, अवरु बहळ ओळ्ळैयवरु.",
              translation: "मेरे पिता एक शिक्षक हैं, वे बहुत अच्छे हैं।",
              grammarNotes: "'Shikshakaru' (शिक्षक) और 'olleyavaru' (अच्छे व्यक्ति) में आदरणीय बहुवचन प्रत्यय का प्रयोग पिता के प्रति सम्मान दर्शाने के लिए किया गया है।"
            },
            {
              kannadaSentence: "ನನ್ನ ತಾಯಿ ಮನೆಯ ಜವಾಬ್ದಾರಿಗಳನ್ನು ನೋಡಿಕೊಳ್ಳುತ್ತಾರೆ.",
              transliteration: "नन्न तायि मनेय जबाबदारिगळन्नु नोडिकोळ्ळुत्तारे.",
              translation: "मेरी माँ घर की ज़िम्मेदारियों की देखरेख करती हैं।",
              grammarNotes: "'Maneya' संबंध कारक है (घर की)। 'Javaabdaarigalannu' में द्वितीया विभक्ति बहुवचन '-annu' जुड़ा है।"
            },
            {
              kannadaSentence: "ನಮಗೆ ಒಂದು ಸಣ್ಣ ಸುಂದರವಾದ ಮನೆ ಇದೆ.",
              transliteration: "नमगे ओंदु सण्ण सुंदरवाद मने इदे.",
              translation: "हमारा एक छोटा सा सुंदर घर है।",
              grammarNotes: "'Namage' चतुर्थी विभक्ति है (हमारे लिए / हमारा)। 'Ondu' (एक), 'sanna' (छोटा), 'sundaravaada' (सुंदर), 'mane' (घर), 'ide' (है)।"
            },
            {
              kannadaSentence: "ನಾವೆಲ್ಲರೂ ಪ್ರತಿದಿನ ಒಟ್ಟಿಗೆ ಊಟ ಮಾಡುತ್ತೇವೆ ಮತ್ತು ಸಂತೋಷದಿಂದ ಇರುತ್ತೇವೆ.",
              transliteration: "नावेल्लारू प्रतिदिना ओट्टिगे ऊट माडुत्तेवे मत्तू संतोषदिंद इरुत्तेवे.",
              translation: "हम सब रोज़ एक साथ भोजन करते हैं और खुशी से रहते हैं।",
              grammarNotes: "'Naavellaroo' का अर्थ है 'हम सभी'। 'Santoshadinda' में करण कारक का प्रत्यय '-inda' (खुशी से) लगा है।"
            },
            {
              kannadaSentence: "ನಮ್ಮ ಕುಟುಂಬದಲ್ಲಿ ಎಲ್ಲರೂ ಒಬ್ಬರನ್ನೊಬ್ಬರು ಪ್ರೀತಿಸುತ್ತಾರೆ.",
              transliteration: "नम्म कुटुंबदल्ली एल्लारू ओब्बरन्नोब्बरु प्रीतिसुत्तारे.",
              translation: "हमारे परिवार में सब एक-दूसरे से प्यार करते हैं।",
              grammarNotes: "'Obbarannobbaru' एक संयुक्त सर्वनाम है जिसका अर्थ 'एक-दूसरे से' है।"
            },
            {
              kannadaSentence: "ಇದು ನನ್ನ ಪ್ರೀತಿಯ ಸುಂದರ ಕುಟುಂಬ.",
              transliteration: "इदु नन्न प्रीतिय सुंदर कुटुंब.",
              translation: "यह मेरा प्यारा सुंदर परिवार है।",
              grammarNotes: "'Idu' यह के लिए प्रयुक्त निकटवर्ती सर्वनाम है। 'Preetiya' का अर्थ है प्यारा या प्रिय।"
            }
          ]
        }
      ],
      vocabHighlight: [
        { word: "ಕುಟುಂಬ", transliteration: "कुटुंब", meaning: "परिवार (Family)" },
        { word: "ಶಿಕ್ಷಕರು", transliteration: "शिक्षकरु", meaning: "शिक्षक (Teacher - आदरणीय)" },
        { word: "ಸುಂದರವಾದ", transliteration: "सुंदरवाद", meaning: "सुंदर (Beautiful)" },
        { word: "ಮನೆ", transliteration: "मने", meaning: "घर / मकान (House)" },
        { word: "ಸಂತೋಷ", transliteration: "संतोष", meaning: "खुशी / आनंद (Happiness)" }
      ]
    },
    "200": {
      title: "कन्नड़ भाषा और इतिहास",
      titleTranslation: "The Kannada Language and History",
      titleTransliteration: "कन्नड भाषे मत्तू इतिहास",
      paragraphs: [
        {
          kannadaParagraph: "ಕನ್ನಡವು ಭಾರತದ ಅತ್ಯಂತ ಹಳೆಯ ದ್ರಾವಿಡ ಭಾಷೆಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಇದನ್ನು ಕರ್ನಾಟಕ ರಾಜ್ಯದಲ್ಲಿ ಪ್ರಮುಖವಾಗಿ ಮಾತನಾಡಲಾಗುತ್ತದೆ. ನಮ್ಮ ಹೆಮ್ಮೆಯ ಭಾಷೆಗೆ ಸುಮಾರು ಎರಡು ಸಾವಿರ ವರ್ಷಗಳ ಅದ್ಭುತ ಇತಿಹಾಸವಿದೆ. ಭಾರತ ಸರ್ಕಾರವು ಕನ್ನಡಕ್ಕೆ 'ಶಾಸ್ತ್ರೀಯ ಭಾಷೆ' ಎಂಬ ಸ್ಥಾನಮಾನವನ್ನು ನೀಡಿದೆ. ಕನ್ನಡದ ಲಿಪಿಯು ತುಂಬಾ ಸುಂದರವಾಗಿದ್ದು, ಅದನ್ನು ಅಕ್ಷರಗಳ ರಾಣಿ ಎಂದು ಕರೆಯುತ್ತಾರೆ. ಕನ್ನಡ ಸಾಹಿತ್ಯಕ್ಕೆ ಎಂಟು ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿಗಳು ದೊರೆತಿವೆ. ಇದು ಕನ್ನಡ ಭಾಷೆಯ ಸಾಹಿತ್ಯಿಕ ಸಮೃದ್ಧಿಯನ್ನು ಜಗತ್ತಿಗೆ ತೋರಿಸುತ್ತದೆ.",
          translation: "कन्नड़ भारत की सबसे पुरानी द्रविड़ भाषाओं में से एक है। यह मुख्य रूप से कर्नाटक राज्य में बोली जाती है। हमारी गौरवशाली भाषा का लगभग दो हजार वर्षों का अद्भुत इतिहास है। भारत सरकार ने कन्नड़ को 'शास्त्रीय भाषा' का दर्जा दिया है। कन्नड़ की लिपि अत्यंत सुंदर है, और इसे लिपियों की रानी कहा जाता है। कन्नड़ साहित्य को आठ ज्ञानपीठ पुरस्कार मिल चुके हैं। यह दुनिया के सामने कन्नड़ भाषा की साहित्यिक समृद्धि को प्रदर्शित करता है।",
          sentences: [
            {
              kannadaSentence: "ಕನ್ನಡವು ಭಾರತದ ಅತ್ಯಂತ ಹಳೆಯ ದ್ರಾವಿಡ ಭಾಷೆಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ.",
              transliteration: "कन्नडवु भारतद अत्यंत हळेय द्राविड भाषेगळल्ली ओंदागिदे.",
              translation: "कन्नड़ भारत की प्राचीनतम द्रविड़ भाषाओं में से एक है।",
              grammarNotes: "'Bhaaratada' में संबंध कारक '-da' (भारत की) लगा है। 'Bhaashegalalli' में बहुवचन अधिकरण '-alli' (भाषाओं में) है।"
            },
            {
              kannadaSentence: "ಇದನ್ನು ಕರ್ನಾಟಕ ರಾಜ್ಯದಲ್ಲಿ ಪ್ರಮುಖವಾಗಿ ಮಾತನಾಡಲಾಗುತ್ತದೆ.",
              transliteration: "इदन्नु कर्नाटक राज्यदल्ली प्रमुखवागि मातनाडलागुत्तदे.",
              translation: "यह मुख्य रूप से कर्नाटक राज्य में बोली जाती है।",
              grammarNotes: "'Raajyadalli' अधिकरण कारक है (राज्य में)। 'Maatanaadalaaguttade' कर्मवाच्य क्रिया है जिसका अर्थ 'बोली जाती है' है।"
            },
            {
              kannadaSentence: "ನಮ್ಮ ಹೆಮ್ಮೆಯ ಭಾಷೆಗೆ ಸುಮಾರು ಎರಡು ಸಾವಿರ ವರ್ಷಗಳ ಅದ್ಭುತ ಇತಿಹಾಸವಿದೆ.",
              transliteration: "नम्म हेम्मेय भाषेगे सुमारु एरडु साविरा वर्षगळ अद्भुत इतिहासविदे.",
              translation: "हमारी गौरवपूर्ण भाषा का करीब दो हजार साल का शानदार इतिहास रहा है।",
              grammarNotes: "'Bhaashege' में संप्रदान कारक '-ge' (भाषा के लिए) है। 'Varshagala' संबंध कारक बहुवचन है (वर्षों का)।"
            },
            {
              kannadaSentence: "ಭಾರತ ಸರ್ಕಾರವು ಕನ್ನಡಕ್ಕೆ 'ಶಾಸ್ತ್ರೀಯ ಭಾಷೆ' ಎಂಬ ಸ್ಥಾನಮಾನವನ್ನು ನೀಡಿದೆ.",
              transliteration: "भारत सरकारवु कन्नडक्के 'शास्त्रीय भाषे' एम्ब स्थानमानवन्नु नीडिदे.",
              translation: "भारत सरकार ने कन्नड़ को 'शास्त्रीय भाषा' का सम्मान प्रदान किया है।",
              grammarNotes: "'Sarakaaravu' अंत में बलसूचक 'u' रखता है। 'Needide' आसन्न भूतकाल है ('दिया है')।"
            },
            {
              kannadaSentence: "ಕನ್ನಡದ ಲಿಪಿಯು ತುಂಬಾ ಸುಂದರವಾಗಿದ್ದು, ಅದನ್ನು ಅಕ್ಷರಗಳ ರಾಣಿ ಎಂದು ಕರೆಯುತ್ತಾರೆ.",
              transliteration: "कन्नडದ लिपियु तुंबा सुंदरवागिद्दु, अदन्नु अक्षरगळ राणि एंदु करेयुत्तारे.",
              translation: "कन्नड़ की लिपि बेहद सुंदर है और इसे अक्षरों की रानी कहा जाता है।",
              grammarNotes: "'Lipiyu' का अर्थ लिपि है। 'Kareyuttaare' प्रथम पुरुष बहुवचन है ('बुलाते हैं या कहते हैं')।"
            },
            {
              kannadaSentence: "ಕನ್ನಡ ಸಾಹಿತ್ಯಕ್ಕೆ ಎಂಟು ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿಗಳು ದೊರೆತಿವೆ.",
              transliteration: "कन्नड साहित्यक्के एंटु ज्ञानपीठ प्रशस्तिगळु दॊरेतिवे.",
              translation: "कन्नड़ साहित्य को आठ ज्ञानपीठ पुरस्कार प्राप्त हुए हैं।",
              grammarNotes: "'Entu' का अर्थ आठ है। 'Prashastigalu' बहुवचन रूप है (पुरस्कार)। 'Doretive' का अर्थ 'मिले हैं' है।"
            },
            {
              kannadaSentence: "ಇದು ಕನ್ನಡ ಭಾಷೆಯ ಸಾಹಿತ್ಯಿಕ ಸಮೃದ್ಧಿಯನ್ನು ಜಗತ್ತಿಗೆ ತೋರಿಸುತ್ತದೆ.",
              transliteration: "इदु कन्नड भाषेय साहित्यिक समृद्धियन्नु जगत्तिगे तोरिसुत्तदे.",
              translation: "यह कन्नड़ भाषा की साहित्यिक समृद्धि को दुनिया के सामने प्रदर्शित करता है।",
              grammarNotes: "'Samruddhiyannu' कर्म कारक है। 'Jagattige' का अर्थ 'संसार को' है।"
            }
          ]
        }
      ],
      vocabHighlight: [
        { word: "ದ್ರಾವಿಡ", transliteration: "द्राविड", meaning: "द्रविड़ (Dravidian)" },
        { word: "ಹೆಮ್ಮೆ", transliteration: "हेम्मे", meaning: "गर्व / गौरव (Pride)" },
        { word: "ಶಾಸ್ರ್ತೀಯ", transliteration: "शास्त्रीय", meaning: "शास्त्रीय (Classical)" },
        { word: "ಲಿಪಿ", transliteration: "लिपि", meaning: "लिपि (Script)" },
        { word: "ಪ್ರಶಸ್ತಿ", transliteration: "प्रशस्ति", meaning: "पुरस्कार (Award)" }
      ]
    },
    "300": {
      title: "कर्नाटक की प्रकृति और संस्कृति",
      titleTranslation: "The Nature and Culture of Karnataka",
      titleTransliteration: "कर्नाटकद निसर्ग मत्तू संस्कृति",
      paragraphs: [
        {
          kannadaParagraph: "ಕರ್ನಾಟಕವು ದಕ್ಷಿಣ ಭಾರತದ ಅತಿ ಶ್ರೀಮಂತ ಪ್ರವಾಸಿ ತಾಣಗಳನ್ನು ಮತ್ತು ಅದ್ಭುತ ಪ್ರಾಕೃತಿಕ ಅಪೂರ್ವ ನೈಸರ್ಗಿಕ ಸಂಪತ್ತನ್ನು ಹೊಂದಿರುವ ಸುಂದರ ಸಸ್ಯ ಶ್ಯಾಮಲೆ ರಾಜ್ಯವಾಗಿದೆ. ಇಲ್ಲಿನ ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ ದಟ್ಟವಾದ ಕಾಡುಗಳು ಅಪಾರ ಜೈವಿಕ ವೈವಿಧ್ಯತೆಯಿಂದ ತುಂಬಿವೆ. ಅವು ಜಗತ್ತಿನ ಪ್ರಮುಖ ನಿಸರ್ಗ ತಾಣಗಳಲ್ಲಿ ಒಂದೆಂದು ಗುರುತಿಸಲ್ಪಟ್ಟಿವೆ. ಕಾವೇರಿ, ಕೃಷ್ಣಾ, ಶರಾವತಿ ಮತ್ತು ತುಂಗಭದ್ರಾ ನದಿಗಳು ಈ ನಾಡನ್ನು ಸದಾ ಹಸಿರಾಗಿಡಲು ಮಳೆಯ ಬೆಂಬಲದೊಂದಿಗೆ ತಂಪಾಗಿಸುತ್ತವೆ. ಕರ್ನಾಟಕದ ಕಾಡುಗಳಲ್ಲಿ ಸುಂದರ ಆನೆಗಳು, ಹುಲಿಗಳು ಮತ್ತು ಅನೇಕ ತಳಿಗಳ ಅಪರೂಪದ ಹಕ್ಕಿಗಳು ಸ್ವತಂತ್ರವಾಗಿ ವಾಸಿಸುತ್ತವೆ. ಕರಾವಳಿ ತೀರದ ಸುಂದರ ಸಮುದ್ರಗಳು ಕರ್ನಾಟಕಕ್ಕೆ ವಿಶೇಷ ನೈಸರ್ಗಿಕ ಸೌಂದರ್ಯವನ್ನು ಒದಗಿಸುತ್ತವೆ.",
          translation: "कर्नाटक दक्षिण भारत में समृद्ध पर्यटन स्थलों और अद्भुत प्राकृतिक संपदा से संपन्न एक सुंदर हरा-भरा राज्य है। यहां पश्चिमी घाट के घने जंगल विशाल जैव विविधता से भरे हुए हैं, जिन्हें दुनिया के प्रमुख संवेदनशील हॉटस्पॉट में गिना जाता है। कावेरी, कृष्णा, शरावती और तुंगभद्रा जैसी नदियां वर्षा के आशीर्वाद से इस भूमि को हमेशा हरा-भरा रखने के लिए सींचती हैं। कर्नाटक के जंगलों में सुंदर जंगली हाथी, बाघ और कई दुर्लभ प्रजातियों के पक्षी स्वतंत्र रूप से निवास करते हैं। अरब सागर का तट कर्नाटक को एक बहुत ही विशेष प्राकृतिक सौंदर्य प्रदान करता है।",
          sentences: [
            {
              kannadaSentence: "ಕರ್ನಾಟಕವು ದಕ್ಷಿಣ ಭಾರತದ ಅತಿ ಶ್ರೀಮಂತ ಪ್ರವಾಸಿ ತಾಣಗಳನ್ನು ಮತ್ತು ಅದ್ಭುತ ಪ್ರಾಕೃತಿಕ ಅಪೂರ್ವ ನೈಸರ್ಗಿಕ ಸಂಪತ್ತನ್ನು ಹೊಂದಿರುವ ಸುಂದರ ಸಸ್ಯ ಶ್ಯಾಮಲೆ ರಾಜ್ಯವಾಗಿದೆ.",
              transliteration: "कर्नाटकवु दक्षिण भारतद अति श्रीमंत प्रवासी ताणगळन्नु मत्तू अद्भुत प्राकृतिक अपूर्व नैसर्गिक संपत्तन्नु होन्दिरुवा सुंदर सस्य श्यामले राज्यवागिदे.",
              translation: "कर्नाटक दक्षिण भारत का अत्यंत समृद्ध पर्यटन स्थलों और अद्भुत जैविक संपदा वाला एक सुंदर हरा-भरा राज्य है।",
              grammarNotes: "लंबे संयुक्त शब्द उपयोग। 'Pravaasi' (पर्यटक) + 'taanagalannu' (गंतव्य स्थानों को, द्वितीया विभक्ति बहुवचन)।"
            },
            {
              kannadaSentence: "ಇಲ್ಲಿನ ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ ದಟ್ಟವಾದ ಕಾಡುಗಳು ಅಪಾರ ಜೈವಿಕ ವೈವಿಧ್ಯತೆಯಿಂದ ತುಂಬಿವೆ.",
              transliteration: "इल्लिन पश्चिम घट्टगळ दट्टवाद काडुगळु अपार जैविक वैविध्यतेयिंद तुंबिवे.",
              translation: "यहाँ पश्चिमी घाट के घने जंगल भारी जैव विविधता से समृद्ध हैं।",
              grammarNotes: "'Illina' (यहाँ के), 'ghattagala' (घाटों के), 'kaadugalu' (जंगल)। 'Vaividhyateyinda' में 'खुशहाली या विविधता से' अर्थ निहित है।"
            },
            {
              kannadaSentence: "ಅವು ಜಗತ್ತಿನ ಪ್ರಮುಖ ನಿಸರ್ಗ ತಾಣಗಳಲ್ಲಿ ಒಂದೆಂದು ಗುರುತಿಸಲ್ಪಟ್ಟಿವೆ.",
              transliteration: "अवु जगत्तिन प्रमुख निसर्ग ताणगळल्ली ओंदेंदु गुरुतिसल्पट्टिवे.",
              translation: "वे विश्व के प्रमुख प्राकृतिक क्षेत्रों में से एक के रूप में पहचाने जाते हैं।",
              grammarNotes: "'Avu' बहुवचन सर्वनाम (वे) है। 'Ondendu' संयुक्त शब्द (एक के रूप में) है।"
            },
            {
              kannadaSentence: "ಕಾವೇರಿ, ಕೃಷ್ಣಾ, ಶರಾವತಿ ಮತ್ತು ತುಂಗಭದ್ರಾ ನದಿಗಳು ಈ ನಾಡನ್ನು ಸದಾ ಹಸಿರಾಗಿಡಲು ಮಳೆಯ ಬೆಂಬಲದೊಂದಿಗೆ ತಂಪಾಗಿಸುತ್ತವೆ.",
              transliteration: "कावेरि, कृष्णा, शरावति मत्तू तुंगभद्रा नदिगळु ई नाडन्नु सदा हसिरागिडलु मळेय बैंबलदोंदिगे तंपागिसुत्तावे.",
              translation: "कावेरी, कृष्णा, शरावती जैसी नदियाँ वर्षा के सहयोग से इस सुंदर धरा को हमेशा हरा-भरा रखने के लिए सींचती हैं।",
              grammarNotes: "'Nadigalu' नदी का बहुवचन है। 'Naadannu' द्वितीया विभक्ति एकवचन 'राष्ट्र/देश को' है।"
            },
            {
              kannadaSentence: "ಕರ್ನಾಟಕದ ಕಾಡುಗಳಲ್ಲಿ ಸುಂದರ ಆನೆಗಳು, ಹುಲಿಗಳು ಮತ್ತು अनेक ತಳಿಗಳ ಅಪರೂಪದ ಹಕ್ಕಿಗಳು ಸ್ವತಂತ್ರವಾಗಿ ವಾಸಿಸುತ್ತವೆ.",
              transliteration: "कर्नाटकದ ಕಾಡುಗಳಲ್ಲಿ ಸುಂದರ್ ಆನೆಗಳು, ಹುಲಿಗಳು ಮತ್ತು ಅನೇಕ ತಳಿಗಳ ಅಪರೂಪದ ಹಕ್ಕಿಗಳು ಸ್ವತಂತ್ರವಾಗಿ ವಾಸಿಸುತ್ತವೆ.",
              translation: "कर्नाटक के जंगलों में सुंदर हाथी, बाघ और अनेक प्रजातियों के अनोखे पक्षी स्वतंत्र होकर रहते हैं।",
              grammarNotes: "'Kaadugalalli' (जंगलों में - दुगुनी प्रत्यय)। 'Swatantravaagi' क्रियाविशेषण है जिसका अर्थ 'स्वतंत्रतापूर्वक' है।"
            },
            {
              kannadaSentence: "ಕರಾವಳಿ ತೀರದ ಸುಂದರ ಸಮುದ್ರಗಳು ಕರ್ನಾಟಕಕ್ಕೆ ವಿಶೇಷ ನೈಸರ್ಗಿಕ ಸೌಂದರ್ಯವನ್ನು ಒದಗಿಸುತ್ತವೆ.",
              transliteration: "करावाळि तीरद सुंदर समुद्रगळु कर्नाटकक्के विशेष नैसर्गिक सौंदर्यवन्नु ओदगिसुत्तावे.",
              translation: "तटीय किनारे के सुंदर सागर कर्नाटक को विशेष प्राकृतिक सुंदरता प्रदान करते हैं।",
              grammarNotes: "'Karaavali' का अर्थ तटीय है। 'Karnaatakakke' का अर्थ 'कर्नाटक को' है।"
            }
          ]
        }
      ],
      vocabHighlight: [
        { word: "ಪ್ರಾಕೃತಿಕ", transliteration: "प्राकृतिक", meaning: "प्राकृतिक (Natural)" },
        { word: "ಜೈವಿಕ ವೈವಿಧ್ಯತೆ", transliteration: "जैव विविधता", meaning: "जैव विविधता (Biodiversity)" },
        { word: "ಕಾಡುಗಳು", transliteration: "काडुगळु", meaning: "जंगल / वन (Forests)" },
        { word: "ಆನೆಗಳು", transliteration: "आनेगळु", meaning: "हाथी (Elephants)" },
        { word: "ಸೌಂದರ್ಯ", transliteration: "सौंदर्य", meaning: "सुंदरता (Beauty)" }
      ]
    }
  }
};


// Essay generation API route using Gemini
app.post("/api/generate-essay", async (req, res) => {
  const { wordCount, topic, language } = req.body;
  const targetCount = parseInt(wordCount) || 100;
  const referenceLang = language === "hi" ? "hi" : "en";

  if (!process.env.GEMINI_API_KEY) {
    console.warn("GEMINI_API_KEY is not defined in the environment. Returning high-quality offline fallback essay.");
    const essaysForLang = FALLBACK_ESSAYS[referenceLang] || FALLBACK_ESSAYS["en"];
    const fallbackEssay = essaysForLang[targetCount.toString()] || essaysForLang["100"];
    return res.json({ essay: fallbackEssay, info: "Using high-quality offline essay" });
  }

  try {
    const promptText = `
Generate a beautiful, grammatically correct, and standard Kannada essay of approximately ${targetCount} words for learning and practicing sentence structures.
The topic or theme is: "${topic || "My family"}".
The user's reference language is "${referenceLang === "hi" ? "Hindi (हिंदी)" : "English"}", so provide translations and grammatical explanations in ${referenceLang === "hi" ? "Hindi" : "English"}.

Make sure to structure it perfectly into a JSON schema response matching the schema defined in the responseSchema.
Ensure all Kannada characters are in high-quality correct Unicode (no broken letters or conjuncts).
Each sentence must have:
- 'kannadaSentence': The complete sentence in correct Kannada script.
- 'transliteration': ${referenceLang === "hi" ? "Devanagari phonetic transliteration (e.g., 'कन्नडवु भारतद...')" : "Roman phonetic transliteration"} of the Kannada sentence.
- 'translation': Flawless translation of this sentence into ${referenceLang === "hi" ? "Hindi" : "English"}.
- 'grammarNotes': Useful learner-friendly grammar notes in ${referenceLang === "hi" ? "Hindi" : "English"} detailing case endings, verb tenses, prefix/suffix, or literal phrase breakdown.

Also highlight 5-6 crucial words/vocabulary in 'vocabHighlight' with Word, Transliteration (in ${referenceLang === "hi" ? "Devanagari phonetic representation" : "Roman phonetic representation"}), and Meaning in ${referenceLang === "hi" ? "Hindi" : "English"}.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptText,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            titleTranslation: { type: Type.STRING },
            titleTransliteration: { type: Type.STRING },
            paragraphs: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  kannadaParagraph: { type: Type.STRING },
                  translation: { type: Type.STRING },
                  sentences: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        kannadaSentence: { type: Type.STRING },
                        transliteration: { type: Type.STRING },
                        translation: { type: Type.STRING },
                        grammarNotes: { type: Type.STRING }
                      },
                      required: ["kannadaSentence", "transliteration", "translation", "grammarNotes"]
                    }
                  }
                },
                required: ["kannadaParagraph", "translation", "sentences"]
              }
            },
            vocabHighlight: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  word: { type: Type.STRING },
                  transliteration: { type: Type.STRING },
                  meaning: { type: Type.STRING }
                },
                required: ["word", "transliteration", "meaning"]
              }
            }
          },
          required: ["title", "titleTranslation", "titleTransliteration", "paragraphs", "vocabHighlight"]
        },
        systemInstruction: "You are an expert Kannada language professor. You write perfectly formatted, accurate essays in standard formal Kannada with outstanding transliterations and deep grammatical breakdowns. You translate perfectly into the requested reference language (English or Hindi)."
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("Empty response from Gemini API");
    }

    const essay = JSON.parse(text);
    return res.json({ essay, info: `Generated essay about "${topic}" live with Gemini` });
  } catch (error: any) {
    console.error("Gemini essay generation error:", error);
    // Return high-quality offline fallback essay on failure
    const essaysForLang = FALLBACK_ESSAYS[referenceLang] || FALLBACK_ESSAYS["en"];
    const fallbackEssay = essaysForLang[targetCount.toString()] || essaysForLang["100"];
    return res.json({ essay: fallbackEssay, info: "Using high-quality offline backup essay (API failed or timed out)" });
  }
});


// Vite middleware setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
