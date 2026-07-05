import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Volume2,
  Award,
  Sparkles,
  HelpCircle,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Plus,
  ArrowRight,
  Lightbulb,
  Sliders,
  BookOpen,
  Eye,
  EyeOff
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { KANNADA_ALPHABETS } from '../data/alphabets';
import {
  OTTAKSHARA_DATA,
  INTERACTIVE_BASES,
  INTERACTIVE_SUBSCRIPTS,
  getSandboxCombinedDetails,
  OttaksharaItem
} from '../data/ottaksharas';

interface PosterItemDetails {
  char: string;
  doubleChar: string;
  name: string;
  trans: string;
  vattuSymbol: string;
  category: 'identical' | 'modified' | 'different';
  descriptionEn: string;
  descriptionHi: string;
  exampleWord: string;
  exampleTrans: string;
  exampleMeaningEn: string;
  exampleMeaningHi: string;
}

const POSTER_DETAILS_MAP: Record<string, PosterItemDetails> = {
  'ಕ': {
    char: 'ಕ', doubleChar: 'ಕ್ಕ', name: 'Ka', trans: 'kka', vattuSymbol: '್ಕ', category: 'modified',
    descriptionEn: 'The figure-eight shape is simplified! The top tick (Talakattu) is removed, and the vertical loops sit as a smaller subscript.',
    descriptionHi: 'मूल वर्ण "ಕ" का आठनुमा आकार सरल हो जाता है! शीर्ष का टिक हट जाता है, और लूप नीचे की तरफ छोटे आकार में बनता है।',
    exampleWord: 'ಅಕ್ಕ', exampleTrans: 'Akka', exampleMeaningEn: 'Elder Sister', exampleMeaningHi: 'बड़ी बहन'
  },
  'ಖ': {
    char: 'ಖ', doubleChar: 'ಖ್ಖ', name: 'Kha', trans: 'khkha', vattuSymbol: '್ಖ', category: 'modified',
    descriptionEn: 'Loses the top head tick (Talakattu). Sits directly beneath the base consonant in miniature style.',
    descriptionHi: 'शीर्ष का टिक (तलकट्टू) खो देता है और आधार के ठीक नीचे लघु रूप में जुड़ता है।',
    exampleWord: 'ದುಃಖ', exampleTrans: 'Dukkha', exampleMeaningEn: 'Sorrow / Pain', exampleMeaningHi: 'दुःख / पीड़ा'
  },
  'ಗ': {
    char: 'ಗ', doubleChar: 'ಗ್ಗ', name: 'Ga', trans: 'gga', vattuSymbol: '್ಗ', category: 'identical',
    descriptionEn: 'Identical shape! Simply loses its top tick (Talakattu) and sits smaller underneath.',
    descriptionHi: 'समान आकार! यह केवल अपने सिर का टिक खो देता है और आधार के नीचे छोटे आकार में आ जाता है।',
    exampleWord: 'ಮೊಗ್ಗು', exampleTrans: 'Moggu', exampleMeaningEn: 'Flower Bud', exampleMeaningHi: 'फूल की कली'
  },
  'ಘ': {
    char: 'ಘ', doubleChar: 'ಘ್ಘ', name: 'Gha', trans: 'ghgha', vattuSymbol: '್ಘ', category: 'modified',
    descriptionEn: 'Loses the top head tick. Sits directly beneath, keeping its double-humped aspirated body.',
    descriptionHi: 'शीर्ष का टिक खो देता है और दोहरी खड़ी रेखाएं नीचे लघु रूप में बैठती हैं।',
    exampleWord: 'ಸಂಘ', exampleTrans: 'Sangha', exampleMeaningEn: 'Association / Union', exampleMeaningHi: 'संघ / सभा'
  },
  'ಙ': {
    char: 'ಙ', doubleChar: 'ಙ್ಙ', name: 'Nga', trans: 'ngnga', vattuSymbol: '್ಙ', category: 'modified',
    descriptionEn: 'Slightly simplified, losing the top tick and sits beneath the base consonant.',
    descriptionHi: 'शीर्ष का टिक खो देता है और आधार के ठीक नीचे लघु रूप में बैठता है।',
    exampleWord: 'ವಾಙ್ಮಯ', exampleTrans: 'Vaangmaya', exampleMeaningEn: 'Literature / Speech', exampleMeaningHi: 'साहित्य / वाणी'
  },
  'ಚ': {
    char: 'ಚ', doubleChar: 'ಚ್ಚ', name: 'Cha', trans: 'chcha', vattuSymbol: '್ಚ', category: 'identical',
    descriptionEn: 'Perfect symmetry. It is the identical "ಚ" symbol placed subscript with no top tick.',
    descriptionHi: 'बिल्कुल समान आकार। बिना ऊपर के टिक के समान "ಚ" चिह्न नीचे जुड़ता है।',
    exampleWord: 'ಅಚ್ಚರಿ', exampleTrans: 'Acchari', exampleMeaningEn: 'Wonder / Surprise', exampleMeaningHi: 'आश्चर्य / विस्मय'
  },
  'ಛ': {
    char: 'ಛ', doubleChar: 'ಛ್ಛ', name: 'Chha', trans: 'chchha', vattuSymbol: '್ಛ', category: 'modified',
    descriptionEn: 'Loses its top tick, sitting below as a miniature version.',
    descriptionHi: 'शीर्ष का टिक खोकर आधार के नीचे छोटे रूप में जुड़ता है।',
    exampleWord: 'ಆಚ್ಛಾದನೆ', exampleTrans: 'Aacchhaadane', exampleMeaningEn: 'Covering / Roof', exampleMeaningHi: 'ढकना / आच्छादन'
  },
  'ಜ': {
    char: 'ಜ', doubleChar: 'ಜ್ಜ', name: 'Ja', trans: 'jja', vattuSymbol: '್ಜ', category: 'identical',
    descriptionEn: 'Symmetrical. Simply scale down the parent letter and place it below.',
    descriptionHi: 'समान आकार। बस मूल अक्षर का आकार थोड़ा सीमित करके नीचे रख दें।',
    exampleWord: 'ಅಜ್ಜಿ', exampleTrans: 'Ajji', exampleMeaningEn: 'Grandmother', exampleMeaningHi: 'दादी / नानी'
  },
  'ಝ': {
    char: 'ಝ', doubleChar: 'ಝ್ಝ', name: 'Jha', trans: 'jhjha', vattuSymbol: '್ಝ', category: 'modified',
    descriptionEn: 'Loses its top tick, sitting as a miniature version.',
    descriptionHi: 'शीर्ष का टिक हटाकर नीचे लघु रूप में बैठता है।',
    exampleWord: 'ಝಲ್ಲರಿ', exampleTrans: 'Jhallari', exampleMeaningEn: 'Cymbal / Bells', exampleMeaningHi: 'झांझ / झालर'
  },
  'ಞ': {
    char: 'ಞ', doubleChar: 'ಞ್ಞ', name: 'Nya', trans: 'nyanya', vattuSymbol: '್ಞ', category: 'modified',
    descriptionEn: 'Loses its top tick and inherent right arm, sitting underneath.',
    descriptionHi: 'शीर्ष का टिक हटाकर नीचे जुड़ता है।',
    exampleWord: 'ಪಂಚಾಂಗ', exampleTrans: 'Panchaanga', exampleMeaningEn: 'Almanac / Calendar', exampleMeaningHi: 'पंचांग / कैलेंडर'
  },
  'ಟ': {
    char: 'ಟ', doubleChar: 'ಟ್ಟ', name: 'Ta (Retroflex)', trans: 'tta', vattuSymbol: '್ಟ', category: 'identical',
    descriptionEn: 'Identical shape! Simply scaled down with no top tick.',
    descriptionHi: 'समान आकृति! बिना शीर्ष टिक के आकार में छोटा होकर बैठता है।',
    exampleWord: 'ಪೆಟ್ಟಿಗೆ', exampleTrans: 'Pettige', exampleMeaningEn: 'Box / Chest', exampleMeaningHi: 'बक्सा / संदूक'
  },
  'ಠ': {
    char: 'ಠ', doubleChar: 'ಠ್ಠ', name: 'Tha (Retroflex)', trans: 'ththa', vattuSymbol: '್ಠ', category: 'modified',
    descriptionEn: 'Loses its top tick and inherent shape. Combines as a clean circular ring under the base character.',
    descriptionHi: 'शीर्ष टिक को हटाकर मूल बंद चक्र के रूप में आधार वर्ण के ठीक नीचे छोटा होकर जुड़ता है।',
    exampleWord: 'ನಿಷ್ಠೆ', exampleTrans: 'Nishthe', exampleMeaningEn: 'Devotion / Dedication', exampleMeaningHi: 'निष्ठा / समर्पण'
  },
  'ಡ': {
    char: 'ಡ', doubleChar: 'ಡ್ಡ', name: 'Da (Retroflex)', trans: 'dda', vattuSymbol: '್ಡ', category: 'identical',
    descriptionEn: 'Identical shape! Retains its exact shape scaled down underneath.',
    descriptionHi: 'समान आकृति! नीचे आकार में छोटा होकर बैठता है।',
    exampleWord: 'ಲಡ್ಡು', exampleTrans: 'Laddu', exampleMeaningEn: 'Laddu Sweet', exampleMeaningHi: 'लड्डू (मिठाई)'
  },
  'ಢ': {
    char: 'ಢ', doubleChar: 'ಢ್ಢ', name: 'Dha (Retroflex)', trans: 'dhdha', vattuSymbol: '್ಢ', category: 'identical',
    descriptionEn: 'Identical shape! Simply scaled down and placed subscript with no top tick.',
    descriptionHi: 'समान आकृति! बिना शीर्ष टिक के आकार में छोटा होकर बैठता है।',
    exampleWord: 'ಢಕ್ಕೆ', exampleTrans: 'Dhakke', exampleMeaningEn: 'Small drum', exampleMeaningHi: 'ढाक / छोटा ढोल'
  },
  'ಣ': {
    char: 'ಣ', doubleChar: 'ಣ್ಣ', name: 'Na (Retroflex)', trans: 'nna', vattuSymbol: '್ಣ', category: 'modified',
    descriptionEn: 'Loses its top tick and represents as a clean twin-curve under the base.',
    descriptionHi: 'शीर्ष टिक को खोकर आधार के नीचे सुंदर दोहरे घुमावدار रूप में बैठता है।',
    exampleWord: 'ಬಣ್ಣ', exampleTrans: 'Banna', exampleMeaningEn: 'Color / Paint', exampleMeaningHi: 'रंग'
  },
  'ತ': {
    char: 'ತ', doubleChar: 'ತ್ತ', name: 'Ta (Dental)', trans: 'tta', vattuSymbol: '್ತ', category: 'different',
    descriptionEn: 'The subscript is completely different! It looks like a small looping backward "s" shape. Vital to memorize.',
    descriptionHi: 'इसका सबस्क्रिप्ट पूरी तरह से अलग है! यह छोटे पीछे की ओर मुड़ते हुए "s" आकार की तरह दिखता है। याद रखना बेहद ज़रूरी है।',
    exampleWord: 'ಕತ್ತೆ', exampleTrans: 'Katte', exampleMeaningEn: 'Donkey', exampleMeaningHi: 'गधा'
  },
  'ಥ': {
    char: 'ಥ', doubleChar: 'ಥ್ಥ', name: 'Tha (Dental)', trans: 'ththa', vattuSymbol: '್ಥ', category: 'identical',
    descriptionEn: 'Identical shape! Sits underneath with the signature center dot.',
    descriptionHi: 'समान आकृति! नीचे मध्य बिंदु के साथ बैठता है।',
    exampleWord: 'ಪಥ್ಯ', exampleTrans: 'Pathya', exampleMeaningEn: 'Diet / Regimen', exampleMeaningHi: 'परहेज / पथ्य भोजन'
  },
  'ದ': {
    char: 'ದ', doubleChar: 'ದ್ದ', name: 'Da (Dental)', trans: 'dda', vattuSymbol: '್ದ', category: 'identical',
    descriptionEn: 'Identical layout. Sits underneath the base character as a smaller "ದ" with no top tick.',
    descriptionHi: 'बिल्कुल समान आकृति। बिना ऊपर के टिक के छोटे "ದ" के रूप में नीचे बैठता है।',
    exampleWord: 'ಮುದ್ದು', exampleTrans: 'Muddu', exampleMeaningEn: 'Cute / Loving', exampleMeaningHi: 'दुलारा / प्यारा'
  },
  'ಧ': {
    char: 'ಧ', doubleChar: 'ಧ್ಧ', name: 'Dha (Dental)', trans: 'dhdha', vattuSymbol: '್ಧ', category: 'modified',
    descriptionEn: 'Loses the top tick (Talakattu) and retains the double hump shape with its vertical downward aspiration tail.',
    descriptionHi: 'शीर्ष टिक हट जाता है और यह अपने दोहरे कूबड़ के साथ नीचे लटकती हुई महाप्राण रेखा को बरकरार रखता है।',
    exampleWord: 'ಬುದ್ಧಿ', exampleTrans: 'Buddhi', exampleMeaningEn: 'Intelligence / Wisdom', exampleMeaningHi: 'बुद्धि / ज्ञान'
  },
  'ನ': {
    char: 'ನ', doubleChar: 'ನ್ನ', name: 'Na (Dental)', trans: 'nna', vattuSymbol: '್ನ', category: 'different',
    descriptionEn: 'Completely unique shape! It looks like a beautiful sideways hanging loop and does not resemble the parent letter "ನ" at all.',
    descriptionHi: 'पूरी तरह से विशिष्ट आकृति! यह एक सुंदर तिरछे लटके हुए लूप जैसा दिखता है और मूल अक्षर "ನ" से बिल्कुल नहीं मिलता।',
    exampleWord: 'ಕನ್ನಡ', exampleTrans: 'Kannada', exampleMeaningEn: 'Kannada Language', exampleMeaningHi: 'कन्नड़ भाषा'
  },
  'ಪ': {
    char: 'ಪ', doubleChar: 'ಪ್ಪ', name: 'Pa', trans: 'ppa', vattuSymbol: '್ಪ', category: 'identical',
    descriptionEn: 'Identical shape! Simply loses its top head tick (Talakattu) and sits smaller underneath.',
    descriptionHi: 'समान आकृति! यह केवल अपने सिर का टिक खो देता है और नीचे छोटे आकार में आ जाता है।',
    exampleWord: 'ಅಪ್ಪ', exampleTrans: 'Appa', exampleMeaningEn: 'Father / Papa', exampleMeaningHi: 'पिता / पापा'
  },
  'ಫ': {
    char: 'ಫ', doubleChar: 'ಫ್ಫ', name: 'Pha', trans: 'phpha', vattuSymbol: '್ಫ', category: 'identical',
    descriptionEn: 'Identical shape. Loses the top tick and sits beneath the base consonant, retaining its bottom-right extension.',
    descriptionHi: 'समान आकृति। शीर्ष टिक हटाकर नीचे लघु रूप में बैठता है और अपनी दाईं ओर की पूंछ को बनाए रखता है।',
    exampleWord: 'ರಫ್ತು', exampleTrans: 'Raftu', exampleMeaningEn: 'Export', exampleMeaningHi: 'निर्यात'
  },
  'ಬ': {
    char: 'ಬ', doubleChar: 'ಬ್ಬ', name: 'Ba', trans: 'bba', vattuSymbol: '್ಬ', category: 'identical',
    descriptionEn: 'Symmetrical. Sits beneath the base letter as a smaller oval-like loop with no top tick.',
    descriptionHi: 'समान संरचना। बिना किसी ऊपर के टिक के अंडाकार रूप में नीचे बैठता है।',
    exampleWord: 'ಹಬ್ಬ', exampleTrans: 'Habba', exampleMeaningEn: 'Festival / Celebration', exampleMeaningHi: 'त्यौहार / उत्सव'
  },
  'ಭ': {
    char: 'ಭ', doubleChar: 'ಭ್ಭ', name: 'Bha', trans: 'bhbha', vattuSymbol: '್ಭ', category: 'modified',
    descriptionEn: 'Loses the top tick. Replicates the main body loop and aspiration tail of the parent letter ಭ directly underneath.',
    descriptionHi: 'शीर्ष टिक खो देता है। नीचे मुख्य भाग के लूप और महाप्राण रेखा को दर्शाता है।',
    exampleWord: 'ಗರ್ಭ', exampleTrans: 'Garbha', exampleMeaningEn: 'Womb / Core', exampleMeaningHi: 'गर्भ / केंद्र'
  },
  'ಮ': {
    char: 'ಮ', doubleChar: 'ಮ್ಮ', name: 'Ma', trans: 'mma', vattuSymbol: '್ಮ', category: 'different',
    descriptionEn: 'Completely unique shape! An elegant circular loop with an open top-right hook. Essential for family vocabulary.',
    descriptionHi: 'पूरी तरह से विशिष्ट आकृति! एक गोलाकार लूप जिसके साथ ऊपर दाहिनी ओर एक खुला हुक होता है। परिवार से जुड़े शब्दों में अक्सर उपयोग होता है।',
    exampleWord: 'ಅಮ್ಮ', exampleTrans: 'Amma', exampleMeaningEn: 'Mother', exampleMeaningHi: 'माँ / माता'
  },
  'ಯ': {
    char: 'ಯ', doubleChar: 'ಯ್ಯ', name: 'Ya', trans: 'yya', vattuSymbol: '್ಯ', category: 'different',
    descriptionEn: 'Draws as a broad horizontal cradle curve (hook) attached to the right side of the base letter. Extremely common in abstract words.',
    descriptionHi: 'यह मूल अक्षर के दाहिनी ओर लटके एक बड़े झुलेदार वक्र (हुक) के रूप में जुड़ता है।',
    exampleWord: 'ಅಯ್ಯ', exampleTrans: 'Ayya', exampleMeaningEn: 'Sir / Respectful term', exampleMeaningHi: 'महोदय / आदरणीय संबोधन'
  },
  'ರ': {
    char: 'ರ', doubleChar: 'ರ್ರ', name: 'Ra', trans: 'rra', vattuSymbol: '್ರ', category: 'different',
    descriptionEn: 'Highly unique subscript called Praphala! It attaches beneath as a sharp diagonal slash pointing left. Extremely critical for school grammar.',
    descriptionHi: 'अत्यंत विशिष्ट सबस्क्रिप्ट जिसे प्रफल कहा जाता है! यह नीचे एक विकर्ण रेखा के रूप में जुड़ता है।',
    exampleWord: 'ಕ್ರೂರ', exampleTrans: 'Kroora', exampleMeaningEn: 'Cruel / Harsh', exampleMeaningHi: 'क्रूर / निर्दयी'
  },
  'ಲ': {
    char: 'ಲ', doubleChar: 'ಲ್ಲ', name: 'La', trans: 'lla', vattuSymbol: '್ಲ', category: 'identical',
    descriptionEn: 'Identical shape! Retains its exact double-loop shape scaled down underneath without the top tick.',
    descriptionHi: 'समान आकृति! नीचे बिना किसी शीर्ष टिक के आकार में छोटा होकर बैठता है।',
    exampleWord: 'ಎಲ್ಲ', exampleTrans: 'Ella', exampleMeaningEn: 'All / Everything', exampleMeaningHi: 'सब / सब कुछ'
  },
  'ವ': {
    char: 'ವ', doubleChar: 'ವ್ವ', name: 'Va', trans: 'vva', vattuSymbol: '್ವ', category: 'identical',
    descriptionEn: 'Identical shape. Simply scaled down beneath the base letter, losing the top tick (Talakattu).',
    descriptionHi: 'समान आकृति। बिना शीर्ष टिक के मूल अक्षर का छोटा रूप नीचे बैठता है।',
    exampleWord: 'ಜವ್ವನ', exampleTrans: 'Javvana', exampleMeaningEn: 'Youth / Prime', exampleMeaningHi: 'यौवन / युवावस्था'
  },
  'ಶ': {
    char: 'ಶ', doubleChar: 'ಶ್ಶ', name: 'Sha (Sibilant)', trans: 'shsha', vattuSymbol: '್ಶ', category: 'modified',
    descriptionEn: 'Loses the top tick (Talakattu) and sits underneath as a clean twin-loop structure.',
    descriptionHi: 'शीर्ष का टिक खो देता है और नीचे एक स्वच्छ दोहरे-लूप के रूप में बैठता है।',
    exampleWord: 'ದರ್ಶನ', exampleTrans: 'Darshana', exampleMeaningEn: 'Sight / Vision', exampleMeaningHi: 'दर्शन / दृश्य'
  },
  'ಷ': {
    char: 'ಷ', doubleChar: 'ಷ್ಷ', name: 'Sha (Retroflex)', trans: 'shsha', vattuSymbol: '್ಷ', category: 'identical',
    descriptionEn: 'Identical shape. Scaled down beneath the base character, keeping its internal horizontal cross-bar but losing the top tick.',
    descriptionHi: 'समान आकृति। बिना शीर्ष टिक के, पेट-कटे अक्षर "ಷ" के रूप में नीचे छोटा होकर बैठता है।',
    exampleWord: 'ವರ್ಷ', exampleTrans: 'Varsha', exampleMeaningEn: 'Year / Rain', exampleMeaningHi: 'वर्ष / साल'
  },
  'ಸ': {
    char: 'ಸ', doubleChar: 'ಸ್ಸ', name: 'Sa', trans: 'ssa', vattuSymbol: '್ಸ', category: 'modified',
    descriptionEn: 'Loses the top head tick (Talakattu) but retains the rest of its looping symmetrical form directly underneath.',
    descriptionHi: 'शीर्ष टिक खो देता है और मुख्य अक्षर के नीचे बैठता है।',
    exampleWord: 'ಬಸ್ಸು', exampleTrans: 'Bassu', exampleMeaningEn: 'Bus', exampleMeaningHi: 'बस'
  },
  'ಹ': {
    char: 'ಹ', doubleChar: 'ಹ್ಹ', name: 'Ha', trans: 'hha', vattuSymbol: '್ಹ', category: 'modified',
    descriptionEn: 'Loses the top tick. Sits underneath as a small compact loop structure.',
    descriptionHi: 'शीर्ष टिक खो देता है और नीचे एक छोटे लूप के रूप में बैठता है।',
    exampleWord: 'ಅರ್ಹತೆ', exampleTrans: 'Arhathe', exampleMeaningEn: 'Eligibility / Merit', exampleMeaningHi: 'योग्यता / पात्रता'
  },
  'ಳ': {
    char: 'ಳ', doubleChar: 'ಳ್ಳ', name: 'La (Retroflex)', trans: 'lla', vattuSymbol: '್ಳ', category: 'identical',
    descriptionEn: 'The unique twin curl is beautifully represented subscript style, losing the top tick.',
    descriptionHi: 'मूर्धन्य "ಳ" की विशिष्ट जुड़वां घुमावदार आकृति को छोटा करके नीचे दर्शाया जाता है।',
    exampleWord: 'ಕಳ್ಳ', exampleTrans: 'Kalla', exampleMeaningEn: 'Thief / Rogue', exampleMeaningHi: 'चोर'
  }
};

const POSTER_ROWS = [
  ['ಕ', 'ಖ', 'ಗ', 'ಘ', 'ಙ'],
  ['ಚ', 'ಛ', 'ಜ', 'ಝ', 'ಞ'],
  ['ಟ', 'ಠ', 'ಡ', 'ಢ', 'ಣ'],
  ['ತ', 'ಥ', 'ದ', 'ಧ', 'ನ'],
  ['ಪ', 'ಫ', 'ಬ', 'ಭ', 'ಮ'],
  ['ಯ', 'ರ', 'ಲ', 'ವ'],
  ['ಶ', 'ಷ', 'ಸ', 'ಹ', 'ಳ']
];

const VIJATIYA_WORDS = [
  { 
    base: 'ತ', 
    sub: 'ಯ', 
    word: 'ಸತ್ಯ', 
    trans: 'Sathya', 
    meaningEn: 'Truth / Honesty', 
    meaningHi: 'सत्य / सच', 
    formula: 'ತ + ◌್ + ಯ = ತ್ಯ',
    ruleEn: 'The dental letter "Ta" merges with the subscript "Ya" (ಯ-ವತ್ತು), which sits on the right as a wide hook shape. This is the most common Vijātīya combination taught in schools.',
    ruleHi: 'दंत्य वर्ण "Ta" और "Ya" सबस्क्रिप्ट का मेल। "Ya" का सबस्क्रिप्ट (ಯ-ವತ್ತು) दाहिनी ओर एक बड़े हुक के आकार में जुड़ता है।'
  },
  { 
    base: 'ದ', 
    sub: 'ಯ', 
    word: 'ವಿದ್ಯೆ', 
    trans: 'Vidye', 
    meaningEn: 'Knowledge / Education', 
    meaningHi: 'विद्या / ज्ञान', 
    formula: 'ದ + ◌್ + ಯ = ದ್ಯ',
    ruleEn: 'The dental consonant "Da" conjoins with the subscript "Ya" (ಯ-ವತ್ತು). Essential vocabulary for school subjects and learning.',
    ruleHi: 'दंत्य वर्ण "Da" के साथ "Ya" सबस्क्रिप्ट का मेल। विद्यालय और शिक्षा से जुड़े शब्दों में अत्यंत महत्वपूर्ण है।'
  },
  { 
    base: 'ಪ', 
    sub: 'ರ', 
    word: 'ಪ್ರಕಾಶ', 
    trans: 'Prakaasha', 
    meaningEn: 'Light / Glow', 
    meaningHi: 'प्रकाश / उजाला', 
    formula: 'ಪ + ◌್ + ರ = ಪ್ರ',
    ruleEn: 'The letter "Pa" combines with the unique "Ra" subscript (called Praphala, ್ರ). Praphala is drawn as a diagonal slash underneath. Highly taught as a classic spelling rule!',
    ruleHi: 'व्यंजन "Pa" के साथ "Ra" सबस्क्रिप्ट का मेल। इसे "प्रफल" (್ರ) कहा जाता है जो नीचे एक विकर्ण रेखा के रूप में बनता है।'
  },
  { 
    base: 'ಕ', 
    sub: 'ರ', 
    word: 'ಕ್ರಮ', 
    trans: 'Krama', 
    meaningEn: 'Order / Steps', 
    meaningHi: 'क्रम / नियम', 
    formula: 'ಕ + ◌್ + ರ = ಕ್ರ',
    ruleEn: 'The letter "Ka" conjoins with "Ra" (Praphala) to denote immediate combined pronunciation. Essential in school discipline and numbering rules.',
    ruleHi: 'कंठ्य वर्ण "Ka" के साथ "Ra" सबस्क्रिप्ट (प्रफल) का मेल। समय सारणी और निर्देशों में इसका भरपूर उपयोग होता है।'
  },
  { 
    base: 'ಸ', 
    sub: 'ತ', 
    word: 'ಪುಸ್ತಕ',
    trans: 'Pusthaka', 
    meaningEn: 'Book', 
    meaningHi: 'पुस्तक / किताब', 
    formula: 'ಸ + ◌್ + ತ = ಸ್ತ',
    ruleEn: 'The sibilant "Sa" is conjoined with "Ta" (ತ-ವತ್ತು). Notice how "Ta" loses its main shape and sits as a small backward "s" shape beneath the "Sa".',
    ruleHi: 'उष्म व्यंजन "Sa" के साथ "Ta" सबस्क्रिप्ट का मेल। ध्यान दें कि "Ta" सबस्क्रिप्ट छोटे मुड़े हुए "s" के समान नीचे बैठता है।'
  },
  { 
    base: 'ದ', 
    sub: 'ವ', 
    word: 'ದ್ವಾರ', 
    trans: 'Dwaara', 
    meaningEn: 'Gateway / Door', 
    meaningHi: 'द्वार / फाटक', 
    formula: 'ದ + ◌್ + ವ = ದ್ವ',
    ruleEn: 'The dental consonant "Da" conjoins with the subscript "Va" (ವ-ವತ್ತು). The "Va" subscript sits under the "Da" and replicates its shape smaller.',
    ruleHi: 'दंत्य वर्ण "Da" के साथ "Va" सबस्क्रिप्ट का मेल। सबस्क्रिप्ट "Va" आकार में छोटा होकर नीचे जुड़ता है।'
  },
  { 
    base: 'ಸ', 
    sub: 'ನ', 
    word: 'ಸ್ನೇಹ', 
    trans: 'Sneha', 
    meaningEn: 'Friendship / Love', 
    meaningHi: 'मित्रता / स्नेह', 
    formula: 'ಸ + ◌್ + ನ = ಸ್ನ',
    ruleEn: 'The sibilant "Sa" is conjoined with the dental nasal "Na" (ನ-ವತ್ತು). The "Na" subscript looks like a beautiful sideways hanging loop.',
    ruleHi: 'व्यंजन "Sa" के साथ "Na" सबस्क्रिप्ट का मेल। "Na" का सबस्क्रिप्ट एक लटके हुए लूप की तरह सुंदर दिखता है।'
  },
  { 
    base: 'ಕ', 
    sub: 'ತ', 
    word: 'ಶಕ್ತಿ', 
    trans: 'Shakthi', 
    meaningEn: 'Power / Strength', 
    meaningHi: 'शक्ति / ताकत', 
    formula: 'ಕ + ◌್ + ತ = ಕ್ತ',
    ruleEn: 'The velar "Ka" conjoins with dental "Ta" (ತ-ವತ್ತು). Very common in moral stories and science textbooks.',
    ruleHi: 'ಕಂಠ್ಯ वर्ण "Ka" के साथ ದಂತ್ಯ "Ta" सबस्क्रिप्ट का मेल। ಶಿಕ್ಷಣಪ್ರದ कहानियों और विज्ञान की पुस्तकों में आम है।'
  },
  { 
    base: 'ಕ್ಷ', 
    sub: 'ಮ', 
    word: 'ಲಕ್ಷ್ಮಿ', 
    trans: 'Lakshmi', 
    meaningEn: 'Goddess of Wealth / Prosperity', 
    meaningHi: 'लक्ष्मी / समृद्धि की देवी', 
    formula: 'ಕ್ಷ + ◌್ + ಮ = ಕ್ಷ್ಮಿ',
    ruleEn: 'A triple-consonant stack! The complex conjunct letter "Ksha" (ಕ್ಷ) is conjoined with the subscript "Ma" (ಮ-ವತ್ತು) at the bottom right, and capped with the "i" vowel (ಿ). A beautiful and sacred example.',
    ruleHi: 'एक त्रि-व्यंजन समूह! संयुक्त अक्षर "Ksha" (ಕ್ಷ) के नीचे दाहिनी ओर "Ma" सबस्क्रिप्ट (ಮ-वत्व) जुड़ता है और ऊपर "i" स्वर की मात्रा लगती है।'
  },
  { 
    base: 'ಕ್ಷ', 
    sub: 'ಮ', 
    word: 'ಲಕ್ಷ್ಮಣ', 
    trans: 'Lakshmana', 
    meaningEn: 'Brother of Lord Rama', 
    meaningHi: 'लक्ष्मण', 
    formula: 'ಕ್ಷ + ◌್ + ಮ = ಕ್ಷ್ಮ',
    ruleEn: 'Similar to Lakshmi, the base letter "Ksha" (ಕ್ಷ) conjoins with the subscript "Ma" (ಮ-ವತ್ತು) to form "Kshma".',
    ruleHi: 'लक्ष्मी की तरह ही, यहाँ संयुक्त अक्षर "Ksha" (ಕ್ಷ) के साथ "Ma" सबस्क्रिप्ट (ಮ-ವತ್ತು) जुड़कर "Kshma" बनता है।'
  },
  { 
    base: 'ರ', 
    sub: 'ಪ', 
    word: 'ತೀರ್ಪು', 
    trans: 'Theerpu', 
    meaningEn: 'Judgment / Decision', 
    meaningHi: 'निर्णय / फैसला', 
    formula: 'ರ್ + ಪ = ರ್ಪ',
    ruleEn: 'Features the "Arka-vattu" (ರ್) where the letter "Ra" comes first in a consonant cluster and is written as a hook on top of the following letter "Pa".',
    ruleHi: 'इसमें "अर्क-वत्तु" (ರ್) का उपयोग होता है, जहाँ "Ra" व्यंजन समूह में पहले आता है और अगले वर्ण "Pa" के ऊपर एक हुक के रूप में लिखा जाता है।'
  },
  { 
    base: 'ರ', 
    sub: 'ಷ', 
    word: 'ವರ್ಷ', 
    trans: 'Varsha', 
    meaningEn: 'Year / Rain', 
    meaningHi: 'वर्ष / वर्षा', 
    formula: 'ರ್ + ಷ = ರ್ಷ',
    ruleEn: 'Another classic example of Arka-vattu where "Ra" preceding "Sha" is written as a hook on top-right.',
    ruleHi: 'अर्क-वत्तु का एक और क्लासिक उदाहरण जहाँ "Sha" के ऊपर "Ra" का हुक (ಅರ್ಕಒತ್ತು) लगता है।'
  },
  { 
    base: 'ರ', 
    sub: 'ಯ', 
    word: 'ಸೂರ್ಯ', 
    trans: 'Soorya', 
    meaningEn: 'Sun', 
    meaningHi: 'सूर्य / सूरज', 
    formula: 'ರ್ + ಯ = ರ್ಯ',
    ruleEn: 'The letter "Ra" precedes "Ya", forming the "Arka-vattu" hook on top of "Ya".',
    ruleHi: 'यहाँ "Ra" वर्ण "Ya" से पहले आता है, जिससे "Ya" के ऊपर "Arka-vattu" का हुक बनता है।'
  },
  { 
    base: 'ರ', 
    sub: 'ಗ', 
    word: 'ಮಾರ್ಗ', 
    trans: 'Maarga', 
    meaningEn: 'Path / Way', 
    meaningHi: 'मार्ग / रास्ता', 
    formula: 'ರ್ + ಗ = ರ್ಗ',
    ruleEn: 'The preceding "Ra" is represented by the Arka-vattu hook on top of the letter "Ga".',
    ruleHi: 'पहले आने वाला "Ra" वर्ण "Ga" के ऊपर अर्क-वत्तु हुक के रूप में प्रदर्शित होता है।'
  },
  { 
    base: 'ರ', 
    sub: 'ಯ', 
    word: 'ಕಾರ್ಯ', 
    trans: 'Kaarya', 
    meaningEn: 'Work / Task', 
    meaningHi: 'कार्य / काम', 
    formula: 'ರ್ + ಯ = ರ್ಯ',
    ruleEn: 'The letter "Ra" precedes "Ya", represented by Arka-vattu on top of "Ya".',
    ruleHi: '"Ra" वर्ण "Ya" से पहले आता है, जिसे "Ya" के ऊपर अर्क-वत्तु के रूप में दर्शाया जाता है।'
  },
  { 
    base: 'ಶ', 
    sub: 'ವ', 
    word: 'ವಿಶ್ವ', 
    trans: 'Vishwa', 
    meaningEn: 'World / Universe', 
    meaningHi: 'विश्व / दुनिया', 
    formula: 'ಶ + ◌್ + ವ = ಶ್ವ',
    ruleEn: 'The palatal "Sha" is conjoined with "Va" subscript (ವ-ವತ್ತು), creating a very common Sanskrit loanword combination.',
    ruleHi: 'तालव्य "Sha" के साथ "Va" सबस्क्रिप्ट का मेल। यह संस्कृत से लिए गए शब्दों में बहुत आम है।'
  },
  { 
    base: 'ಶ', 
    sub: 'ನ', 
    word: 'ಪ್ರಶ್ನೆ', 
    trans: 'Prashne', 
    meaningEn: 'Question', 
    meaningHi: 'प्रश्न / सवाल', 
    formula: 'ಶ + ◌್ + ನ = ಶ್ನ',
    ruleEn: 'A double-ottakshara word! First "Pra" (ಪ+ರ), then "Shne" (ಶ+ನ+ಎ) where "Sha" gets a "Na" subscript.',
    ruleHi: 'दोहरे ओत्तक्षर वाला शब्द! पहले "Pra" (ಪ+ರ) और फिर "Shne" (ಶ+ನ+ಎ) जहाँ "Sha" को "Na" सबस्क्रिप्ट प्राप्त होता है।'
  },
  { 
    base: 'ವ', 
    sub: 'ಯ', 
    word: 'ಕಾವ್ಯ', 
    trans: 'Kaavya', 
    meaningEn: 'Poetry / Literature', 
    meaningHi: 'काव्य / कविता', 
    formula: 'ವ + ◌್ + ಯ = ವ್ಯ',
    ruleEn: 'The labial "Va" conjoins with the subscript "Ya" (ಯ-ವತ್ತು), sitting prominently on the right side.',
    ruleHi: 'दंतೌಷ್ಠ್ಯ "Va" के साथ "Ya" सबस्क्रिप्ट (ಯ-ವತ್ತು) का मेल, जो दाईं ओर विशिष्ट रूप से बैठता है।'
  },
  { 
    base: 'ಲ', 
    sub: 'ಯ', 
    word: 'ಕಲ್ಯಾಣ', 
    trans: 'Kalyaana', 
    meaningEn: 'Welfare / Wedding', 
    meaningHi: 'कल्याण / विवाह', 
    formula: 'ಲ + ◌್ + ಯ = ಲ್ಯ',
    ruleEn: 'The lateral "La" combines with the subscript "Ya" (ಯ-ವತ್ತು).',
    ruleHi: 'पार्श्विक व्यंजन "La" के साथ "Ya" सबस्क्रिप्ट (ಯ-ವತ್ತು) का मेल।'
  },
  { 
    base: 'ತ', 
    sub: 'ನ', 
    word: 'ರತ್ನ', 
    trans: 'Rathna', 
    meaningEn: 'Gem / Jewel', 
    meaningHi: 'रत्न / मणि', 
    formula: 'ತ + ◌್ + ನ = ತ್ನ',
    ruleEn: 'The dental "Ta" is conjoined with the subscript "Na" (ನ-ವತ್ತು).',
    ruleHi: 'दंत्य व्यंजन "Ta" के साथ "Na" सबस्क्रिप्ट (ನ-ವತ್ತು) का संयोजन।'
  },
  { 
    base: 'ತ', 
    sub: 'ನ', 
    word: 'ಯತ್ನ', 
    trans: 'Yathna', 
    meaningEn: 'Effort / Attempt', 
    meaningHi: 'यत्न / प्रयास', 
    formula: 'ತ + ◌್ + ನ = ತ್ನ',
    ruleEn: 'The dental "Ta" conjoins with the subscript "Na" (ನ-ವತ್ತು), meaning to try.',
    ruleHi: 'दंत्य "Ta" के साथ "Na" सबस्क्रिप्ट (ನ-ವತ್ತು) का मेल, जिसका अर्थ प्रयास करना है।'
  },
  { 
    base: 'ತ', 
    sub: 'ಯ', 
    word: 'ವ್ಯತ್ಯಾಸ', 
    trans: 'Vyathyaasa', 
    meaningEn: 'Difference / Contrast', 
    meaningHi: 'अंतर / भेद', 
    formula: 'ತ + ◌್ + ಯ = ತ್ಯ',
    ruleEn: 'Contains both "Vya" (ವ+ಯ) and "Thya" (ತ+ಯ). Excellent for demonstrating the "Ya-vattu" on different base letters.',
    ruleHi: 'इसमें "Vya" (व+य) और "Thya" (त+य) दोनों शामिल हैं। विभिन्न अक्षरों पर "Ya-vattu" के प्रयोग को दिखाने के लिए उत्तम।'
  },
  { 
    base: 'ಪ', 
    sub: 'ನ', 
    word: 'ಸ್ವಪ್ನ', 
    trans: 'Swapna', 
    meaningEn: 'Dream', 
    meaningHi: 'स्वप्न / सपना', 
    formula: 'ಪ + ◌್ + ನ = ಪ್ನ',
    ruleEn: 'A double conjunct word! Starts with "Swa" (ಸ+ವ) and ends with "Pna" (ಪ+ನ). Highly educational.',
    ruleHi: 'दोहरा संयुक्त अक्षर शब्द! "Swa" (ಸ+ವ) से शुरू होता है और "Pna" (ಪ+ನ) पर समाप्त होता है।'
  },
  { 
    base: 'ತ', 
    sub: 'ವ', 
    word: 'ತತ್ವ', 
    trans: 'Thathva', 
    meaningEn: 'Principle / Philosophy', 
    meaningHi: 'तत्व / सिद्धांत', 
    formula: 'ತ + ◌್ + ವ = ತ್ವ',
    ruleEn: 'The dental "Ta" is conjoined with the subscript "Va" (ವ-ವತ್ತು) underneath.',
    ruleHi: 'दंत्य "Ta" का नीचे "Va" सबस्क्रिप्ट (ವ-ವತ್ತು) के साथ संयोजन।'
  },
  { 
    base: 'ಕ', 
    sub: 'ತ', 
    word: 'ಭಕ್ತಿ', 
    trans: 'Bhakthi', 
    meaningEn: 'Devotion / Piety', 
    meaningHi: 'भक्ति', 
    formula: 'ಕ + ◌್ + ತ = ಕ್ತ',
    ruleEn: 'The velar "Ka" conjoins with dental "Ta" (ತ-ವತ್ತು) and "i" vowel. Represents a highly spiritual word.',
    ruleHi: 'कंठ्य "Ka" और दंत्य "Ta" सबस्क्रिप्ट (ತ-ವತ್ತು) का "i" स्वर की मात्रा के साथ मेल।'
  },
  { 
    base: 'ಕ', 
    sub: 'ತ', 
    word: 'ಮುಕ್ತಿ', 
    trans: 'Mukthi', 
    meaningEn: 'Liberation / Salvation', 
    meaningHi: 'मुक्ति / मोक्ष', 
    formula: 'ಕ + ◌್ + ತ = ಕ್ತ',
    ruleEn: 'Identical combination to "Bhakthi", showing how "Kta" is repeated across different words.',
    ruleHi: '"Bhakthi" के समान ही संयोजन, जो दर्शाता है कि "Kta" विभिन्न शब्दों में कैसे दोहराया जाता है।'
  },
  { 
    base: 'ರ', 
    sub: 'ಮ', 
    word: 'ಧರ್ಮ', 
    trans: 'Dharma', 
    meaningEn: 'Righteousness / Duty', 
    meaningHi: 'धर्म / कर्तव्य', 
    formula: 'ರ್ + ಮ = ರ್ಮ',
    ruleEn: 'Features the "Arka-vattu" (ರ್) where the letter "Ra" comes first and sits as a hook on top of the letter "Ma".',
    ruleHi: 'इसमें "अर्क-वत्तु" (ರ್) है जहाँ "Ra" वर्ण पहले आता है और "Ma" के ऊपर हुक के रूप में बैठता है।'
  },
  { 
    base: 'ರ', 
    sub: 'ಮ', 
    word: 'ಕರ್ಮ', 
    trans: 'Karma', 
    meaningEn: 'Action / Deeds', 
    meaningHi: 'कर्म / कार्य', 
    formula: 'ರ್ + ಮ = ರ್ಮ',
    ruleEn: 'Similar to Dharma, the preceding "Ra" is represented by Arka-vattu on top of "Ma".',
    ruleHi: 'धर्म की तरह ही, पहले आने वाले "Ra" को "Ma" के ऊपर अर्क-वत्तु द्वारा दर्शाया जाता है।'
  },
  { 
    base: 'ರ', 
    sub: 'ವ', 
    word: 'ಪರ್ವತ', 
    trans: 'Parvatha', 
    meaningEn: 'Mountain / Hill', 
    meaningHi: 'पर्वत / पहाड़', 
    formula: 'ರ್ + ವ = ರ್ವ',
    ruleEn: 'The preceding "Ra" forms an Arka-vattu hook on top of "Va".',
    ruleHi: 'पहले आने वाला "Ra" वर्ण "Va" के ऊपर अर्क-वत्तु हुक बनाता है।'
  },
  { 
    base: 'ರ', 
    sub: 'ವ', 
    word: 'ಗರ್ವ', 
    trans: 'Garva', 
    meaningEn: 'Pride / Ego', 
    meaningHi: 'गर्व / घमंड', 
    formula: 'ರ್ + ವ = ರ್ವ',
    ruleEn: 'Another classic Arka-vattu word where the preceding "Ra" sits on "Va".',
    ruleHi: 'एक और अर्क-वत्तु शब्द जहाँ पहले आने वाला "Ra", "Va" के ऊपर बैठता है।'
  },
  { 
    base: 'ಪ', 
    sub: 'ತ', 
    word: 'ತೃಪ್ತಿ', 
    trans: 'Thrupthi', 
    meaningEn: 'Satisfaction', 
    meaningHi: 'तृप्ति / संतोष', 
    formula: 'ಪ + ◌್ + ತ = ಪ್ತ',
    ruleEn: 'The base word has vocalic "R" vowel (ೃ - Ru-kaara) on "Ta", and then "Pa" conjoined with "Ta" subscript (ತ-ವತ್ತು).',
    ruleHi: 'मूल शब्द में "Ta" पर ऋ-कार (ೃ) स्वर है, और फिर "Pa" के नीचे "Ta" सबस्क्रिप्ट (ತ-ವತ್ತು) का संयोजन है।'
  },
  { 
    base: 'ಷ', 
    sub: 'ಟ', 
    word: 'ಸೃಷ್ಟಿ', 
    trans: 'Srishti', 
    meaningEn: 'Creation / Nature', 
    meaningHi: 'सृष्टि / निर्माण', 
    formula: 'ಷ + ◌್ + ಟ = ಷ್ಟಿ',
    ruleEn: 'The retroflex "Sha" is conjoined with retroflex "Ta" subscript (ಟ-ವತ್ತು). Notice how "Ta" is written under the loop of "Sha".',
    ruleHi: 'मूर्धन्य "Sha" का मूर्धन्य "Ta" सबस्क्रिप्ट (ಟ-ವತ್ತು) के साथ मेल। ध्यान दें कि सबस्क्रिप्ट "Ta" नीचे लिखा जाता है।'
  },
  { 
    base: 'ಷ', 
    sub: 'ಣ', 
    word: 'ಕೃಷ್ಣ', 
    trans: 'Krishna', 
    meaningEn: 'Lord Krishna / Dark', 
    meaningHi: 'कृष्ण / श्याम', 
    formula: 'ಷ + ◌್ + ಣ = ಷ್ಣ',
    ruleEn: 'The retroflex "Sha" is conjoined with retroflex nasal "Na" subscript (ಣ-ವತ್ತು), looking like a downward looping hook.',
    ruleHi: 'मूर्धन्य "Sha" का मूर्धन्य नासिका वर्ण "Na" सबस्क्रिप्ट (ಣ-ವತ್ತು) के साथ संयोजन।'
  },
  { 
    base: 'ಷ', 
    sub: 'ಣ', 
    word: 'ವಿಷ್ಣು', 
    trans: 'Vishnu', 
    meaningEn: 'Lord Vishnu', 
    meaningHi: 'भगवान विष्णु', 
    formula: 'ಷ + ◌್ + ಣ = ಷ್ಣು',
    ruleEn: 'Similar to Krishna, the retroflex "Sha" conjoins with "Na" subscript, capped with the "u" vowel (ು).',
    ruleHi: 'कृष्ण की तरह ही, मूर्धन्य "Sha" का "Na" सबस्क्रिप्ट के साथ मेल, और ऊपर "u" स्वर की मात्रा लगती है।'
  },
  { 
    base: 'ಗ', 
    sub: 'ನ', 
    word: 'ಅಗ್ನಿ', 
    trans: 'Agni', 
    meaningEn: 'Fire', 
    meaningHi: 'अग्नि / आग', 
    formula: 'ಗ + ◌್ + ನ = ಗ್ನಿ',
    ruleEn: 'The velar "Ga" conjoins with dental nasal "Na" subscript (ನ-ವತ್ತು), accented with the "i" vowel.',
    ruleHi: 'कंठ्य "Ga" और दंत्य नासिका "Na" सबस्क्रिप्ट (ನ-ವತ್ತು) का मेल, और "i" स्वर की मात्रा।'
  },
  { 
    base: 'ಘ', 
    sub: 'ನ', 
    word: 'ವಿಘ್ನ', 
    trans: 'Vighna', 
    meaningEn: 'Obstacle / Hurdle', 
    meaningHi: 'विघ्न / बाधा', 
    formula: 'ಘ + ◌್ + ನ = ಘ್ನ',
    ruleEn: 'The aspirated velar "Gha" conjoins with dental nasal "Na" subscript (ನ-ವತ್ತು).',
    ruleHi: 'महाप्राण कंठ्य "Gha" और दंत्य नासिका "Na" सबस्क्रिप्ट (ನ-ವತ್ತು) का संयोजन।'
  },
  { 
    base: 'ಪ', 
    sub: 'ರ', 
    word: 'ಪ್ರಾಣ', 
    trans: 'Praana', 
    meaningEn: 'Life / Breath', 
    meaningHi: 'प्राण / जीवन', 
    formula: 'ಪ + ◌್ + ರ = ಪ್ರ',
    ruleEn: 'The letter "Pa" combines with "Ra" (Praphala) diagonal slash underneath. A highly revered word.',
    ruleHi: 'व्यंजन "Pa" और नीचे लगे "Ra" सबस्क्रिप्ट (प्रफल) का मेल। जीवन के अर्थ में प्रयुक्त।'
  },
  { 
    base: 'ಗ', 
    sub: 'ರ', 
    word: 'ಗ್ರಾಮ', 
    trans: 'Graama', 
    meaningEn: 'Village', 
    meaningHi: 'ग्राम / गाँव', 
    formula: 'ಗ + ◌್ + ರ = ಗ್ರಾ',
    ruleEn: 'The velar "Ga" conjoins with "Ra" (Praphala) and includes the long "aa" vowel mark (ಾ).',
    ruleHi: 'कंठ्य "Ga" का "Ra" सबस्क्रिप्ट (प्रफल) के साथ मेल और दीर्घ "aa" स्वर की मात्रा।'
  },
  { 
    base: 'ಗ', 
    sub: 'ರ', 
    word: 'ಗ್ರಹ', 
    trans: 'Graha', 
    meaningEn: 'Planet', 
    meaningHi: 'ग्रह', 
    formula: 'ಗ + ◌್ + ರ = ಗ್ರ',
    ruleEn: 'The velar "Ga" conjoins with "Ra" (Praphala) to denote a cosmic planet.',
    ruleHi: 'कंठ्य "Ga" और "Ra" सबस्क्रिप्ट (प्रफल) का संयोजन, ब्रह्मांडीय पिंड के अर्थ में।'
  },
  { 
    base: 'ತ', 
    sub: 'ರ', 
    word: 'ಚಿತ್ರ', 
    trans: 'Chithra', 
    meaningEn: 'Picture / Drawing', 
    meaningHi: 'चित्र / तस्वीर', 
    formula: 'ತ + ◌್ + ರ = ತ್ರ',
    ruleEn: 'The dental "Ta" is conjoined with "Ra" (Praphala). Notice how the diagonal slash sits under "Ta".',
    ruleHi: 'दंत्य "Ta" और "Ra" सबस्क्रिप्ट (प्रफल) का मेल। ध्यान दें कि तिरछी रेखा "Ta" के नीचे बैठती है।'
  },
  { 
    base: 'ತ', 
    sub: 'ರ', 
    word: 'ಪತ್ರ', 
    trans: 'Pathra', 
    meaningEn: 'Letter / Leaf', 
    meaningHi: 'पत्र / पत्ता', 
    formula: 'ತ + ◌್ + ರ = ತ್ರ',
    ruleEn: 'Same combination as "Chithra", demonstrating the "Tra" sound in everyday correspondence.',
    ruleHi: '"Chithra" के समान ही संयोजन, जो रोजमर्रा की भाषा में "Tra" ध्वनि प्रदर्शित करता है।'
  },
  { 
    base: 'ತ', 
    sub: 'ರ', 
    word: 'ಮಿತ್ರ', 
    trans: 'Mithra', 
    meaningEn: 'Friend', 
    meaningHi: 'मित्र / दोस्त', 
    formula: 'ತ + ◌್ + ರ = ತ್ರ',
    ruleEn: 'The combination of dental "Ta" and "Ra" (Praphala) denoting a companion.',
    ruleHi: 'दंत्य "Ta" और "Ra" सबस्क्रिप्ट (प्रफल) का मेल, साथी या सखा के अर्थ में।'
  },
  { 
    base: 'ತ', 
    sub: 'ರ', 
    word: 'ನೇತ್ರ', 
    trans: 'Nethra', 
    meaningEn: 'Eye', 
    meaningHi: 'नेत्र / आँख', 
    formula: 'ತ + ◌್ + ರ = ತ್ರ',
    ruleEn: 'Dental "Ta" with "Ra" (Praphala) meaning eye or vision.',
    ruleHi: 'दंत्य "Ta" के साथ "Ra" सबस्क्रिप्ट (प्रफल) का मेल, आँख के अर्थ में।'
  },
  { 
    base: 'ನ', 
    sub: 'ಮ', 
    word: 'ಜನ್ಮ', 
    trans: 'Janma', 
    meaningEn: 'Birth', 
    meaningHi: 'जन्म / उत्पत्ति', 
    formula: 'ನ + ◌್ + ಮ = ನ್ಮ',
    ruleEn: 'The dental nasal "Na" conjoins with the labial nasal subscript "Ma" (ಮ-ವತ್ತು) at the bottom.',
    ruleHi: 'दंत्य नासिका "Na" का नीचे ओष्ठ्य नासिका "Ma" सबस्क्रिप्ट (ಮ-ವತ್ತು) के साथ संयोजन।'
  },
  { 
    base: 'ತ', 
    sub: 'ಸ', 
    word: 'ಉತ್ಸವ', 
    trans: 'Uthsava', 
    meaningEn: 'Festival / Celebration', 
    meaningHi: 'उत्सव / त्योहार', 
    formula: 'ತ + ◌್ + ಸ = ತ್ಸ',
    ruleEn: 'The dental "Ta" conjoins with sibilant subscript "Sa" (ಸ-ವತ್ತು) underneath.',
    ruleHi: 'दंत्य "Ta" का नीचे उष्म व्यंजन "Sa" सबस्क्रिप्ट (ಸ-ವತ್ತು) के साथ संयोजन।'
  },
  {
    base: 'ಷ',
    sub: 'ಟ',
    word: 'ಸ್ಪಷ್ಟ',
    trans: 'Spashta',
    meaningEn: 'Clear / Distinct',
    meaningHi: 'स्पष्ट / साफ',
    formula: 'ಸ + ◌್ + ಪ = ಸ್ಪ, ಷ + ◌್ +  ಟ = ಷ್ಟ',
    ruleEn: 'A double-conjunct word! It contains "Spa" (Sa conjoined with Pa subscript) and "Shta" (Sha conjoined with Ta subscript). Excellent example of multiple conjuncts.',
    ruleHi: 'एक दोहरा संयुक्त अक्षर शब्द! इसमें "Spa" और "Shta" शामिल हैं, जो एक ही शब्द में दो अलग-अलग विजातीय संयोजनों को प्रदर्शित करता है।'
  },
  {
    base: 'ಲ',
    sub: 'ಪ',
    word: 'ಸಂಕಲ್ಪ',
    trans: 'Sankalpa',
    meaningEn: 'Resolution / Determination',
    meaningHi: 'संकल्प / दृढ़ निश्चय',
    formula: 'ಲ + ◌್ + ಪ = ಲ್ಪ',
    ruleEn: 'The lateral "La" is conjoined with the subscript "Pa" (ಪ-ವತ್ತು) underneath.',
    ruleHi: 'पार्श्विक "La" के साथ नीचे "Pa" सबस्क्रिप्ट (ಪ-ವತ್ತು) का मेल।'
  },
  {
    base: 'ಸ',
    sub: 'ತ',
    word: 'ವಿಸ್ತಾರ',
    trans: 'Vistaara',
    meaningEn: 'Vastness / Expansion',
    meaningHi: 'विस्तार / फैलाव',
    formula: 'ಸ + ◌್ + ತ = ಸ್ತ',
    ruleEn: 'The dental "Ta" subscript sits under the sibilant "Sa" with the long vowel "aa" mark.',
    ruleHi: 'दंत्य "Ta" सबस्क्रिप्ट "Sa" के नीचे बैठता है और इसमें दीर्घ "aa" स्वर की मात्रा लगी है।'
  },
  {
    base: 'ಶ',
    sub: 'ವ',
    word: 'ವಿಶ್ವಾಸ',
    trans: 'Vishwaasa',
    meaningEn: 'Trust / Confidence',
    meaningHi: 'विश्वास / भरोसा',
    formula: 'ಶ + ◌್ + ವ = ಶ್ವ',
    ruleEn: 'The palatal "Sha" conjoins with the subscript "Va" (ವ-ವತ್ತು) to denote faith or trust.',
    ruleHi: 'तालव्य "Sha" का "Va" सबस्क्रिप्ट (ವ-ವತ್ತು) के साथ संयोजन, जो विश्वास का प्रतीक है।'
  },
  {
    base: 'ಶ',
    sub: 'ಚ',
    word: 'ಆಶ್ಚರ್ಯ',
    trans: 'Aascharya',
    meaningEn: 'Wonder / Surprise',
    meaningHi: 'आश्चर्य / अनोखा',
    formula: 'ಶ + ◌್ + ಚ = ಶ್ಚ, ರ್ + ಯ = ರ್ಯ',
    ruleEn: 'A beautifully complex word featuring both a conjoined "Shcha" (Sha conjoined with Cha subscript) and "Rya" (Arka-vattu).',
    ruleHi: 'एक सुंदर और जटिल शब्द जिसमें "Shcha" (Sha और Cha का संयोजन) और "Rya" (अर्क-वत्तु) दोनों शामिल हैं।'
  },
  {
    base: 'ತ್',
    sub: 'ಸ',
    word: 'ಮತ್ಸ್ಯ',
    trans: 'Matsya',
    meaningEn: 'Fish',
    meaningHi: 'मत्स्य / मछली',
    formula: 'ತ್ + ಸ + ಯ = ತ್ಸ್ಯ',
    ruleEn: 'A triple cluster! Dental "Ta" combines with sibilant "Sa" and "Ya" subscript (ಯ-ವತ್ತು).',
    ruleHi: 'एक त्रि-व्यंजन समूह! दंत्य "Ta" का "Sa" और "Ya" सबस्क्रिप्ट (ಯ-ವತ್ತು) के साथ संयोजन।'
  },
  {
    base: 'ನ್',
    sub: 'ತ',
    word: 'ಸ್ವಾತಂತ್ರ್ಯ',
    trans: 'Swaatantrya',
    meaningEn: 'Freedom / Independence',
    meaningHi: 'स्वतंत्रता / आजादी',
    formula: 'ನ್ + ತ್ + ರ್ + ಯ = ಂತ್ರ್ಯ',
    ruleEn: 'One of the most complex school words, with a quadruple consonant combination at the end! It combines Na + Ta + Ra + Ya.',
    ruleHi: 'विद्यालयी स्तर का सबसे जटिल शब्द, जिसके अंत में चार व्यंजन (Na + Ta + Ra + Ya) एक साथ जुड़ते हैं!'
  },
  {
    base: 'ನ್',
    sub: 'ತ',
    word: 'ತಂತ್ರಜ್ಞಾನ',
    trans: 'Tantrajnaana',
    meaningEn: 'Technology',
    meaningHi: 'तौद्योगिकी / तकनीक',
    formula: 'ನ್ + ತ್ + ರ = ಂತ್ರ, ಜ್ + ಞ = ಜ್ಞ',
    ruleEn: 'Features "Ntra" (Na + Ta conjoined with Ra) and the classic school conjunct "Jna" (Ja conjoined with Nya, ಜ್ಞ).',
    ruleHi: 'इसमें "Ntra" (Na + Ta के साथ Ra) और स्कूल का क्लासिक संयुक्त "Jna" (Ja और Nya का मेल, ಜ್ಞ) शामिल है।'
  },
  {
    base: 'ಮ',
    sub: 'ರ',
    word: 'ಸಾಮ್ರಾಜ್ಯ',
    trans: 'Saamraajya',
    meaningEn: 'Empire / Kingdom',
    meaningHi: 'साम्राज्य / राज्य',
    formula: 'ಮ + ◌್ + ರ = ಮ್ರ, ಜ್ + ಯ = ಜ್ಯ',
    ruleEn: 'Combines the Praphala subscript under "Ma" and the Ya-vattu subscript under "Ja" to represent a great realm.',
    ruleHi: 'इसमें "Ma" के नीचे प्रफल और "Ja" के नीचे "Ya" सबस्क्रिप्ट (ಯ-ವತ್ತು) दोनों मौजूद हैं।'
  },
  {
    base: 'ಜ್',
    sub: 'ಞ',
    word: 'ಜ್ಞಾನಿ',
    trans: 'Jnaani',
    meaningEn: 'Sage / Wise Person',
    meaningHi: 'ज्ञानी / विद्वान',
    formula: 'ಜ್ + ಞ = ಜ್ಞ',
    ruleEn: 'Features the unique compound letter "Jna" (ಜ್ಞ), where "Ja" and "Nya" merge into a special classical shape.',
    ruleHi: 'इसमें अनूठा संयुक्त अक्षर "Jna" (ಜ್ಞ) है, जहाँ "Ja" और "Nya" मिलकर एक विशेष शास्त्रीय आकार लेते हैं।'
  },
  {
    base: 'ರ',
    sub: 'ಪ',
    word: 'ದರ್ಪಣ',
    trans: 'Darpana',
    meaningEn: 'Mirror',
    meaningHi: 'दर्पण / आईना',
    formula: 'ರ್ + ಪ = ರ್ಪ',
    ruleEn: 'Features Arka-vattu, with the preceding "Ra" written as a hook on top of the letter "Pa".',
    ruleHi: 'इसमें अर्क-वत्तु है, जहाँ पहले आने वाला "Ra", अगले वर्ण "Pa" के ऊपर हुक के रूप में बैठता है।'
  },
  {
    base: 'ವ್',
    sub: 'ರ',
    word: 'ತೀವ್ರ',
    trans: 'Theevra',
    meaningEn: 'Intense / Severe',
    meaningHi: 'तीव्र / तेज',
    formula: 'ವ್ + ರ = ವ್ರ',
    ruleEn: 'The labial "Va" conjoins with the "Ra" subscript (Praphala) underneath, with a long starting vowel.',
    ruleHi: 'दीर्घ स्वर से शुरू होने वाले इस शब्द में "Va" के नीचे "Ra" सबस्क्रिप्ट (प्रफल) का मेल है।'
  },
  {
    base: 'ದ್',
    sub: 'ಧ',
    word: 'ಬುದ್ಧಿ',
    trans: 'Buddhi',
    meaningEn: 'Intellect / Intelligence',
    meaningHi: 'बुद्धि / समझ',
    formula: 'ದ್ + ಧ = ದ್ಧಿ',
    ruleEn: 'The unaspirated "Da" conjoins with the aspirated "Dha" subscript (ಧ-ವತ್ತು) and "i" vowel mark.',
    ruleHi: 'अल्पप्राण "Da" और महाप्राण "Dha" सबस्क्रिप्ट (ಧ-ವತ್ತು) का "i" स्वर की मात्रा के साथ संयोजन।'
  },
  {
    base: 'ಬ',
    sub: 'ದ',
    word: 'ಶಬ್ದ',
    trans: 'Shabda',
    meaningEn: 'Sound / Word',
    meaningHi: 'शब्द / आवाज',
    formula: 'ಬ್ + ದ = ಬ್ದ',
    ruleEn: 'The labial "Ba" conjoins with the dental "Da" subscript (ದ-ವತ್ತು). Excellent for learning phonetic grammar.',
    ruleHi: 'ओष्ठ्य "Ba" का दंत्य "Da" सबस्क्रिप्ट (ದ-ವತ್ತು) के साथ संयोजन। व्याकरण की दृष्टि से उत्तम।'
  },
  {
    base: 'ಲ',
    sub: 'ಪ',
    word: 'ಕಲ್ಪನೆ',
    trans: 'Kalpane',
    meaningEn: 'Imagination / Concept',
    meaningHi: 'कल्पना / विचार',
    formula: 'ಲ್ + ಪ = ಲ್ಪ',
    ruleEn: 'The lateral "La" combines with the subscript "Pa" (ಪ-ವತ್ತು) in a very beautiful abstract noun.',
    ruleHi: 'पार्श्विक "La" और "Pa" सबस्क्रिप्ट (ಪ-ವತ್ತು) का एक सुंदर अमूर्त संज्ञा शब्द में मेल।'
  },
  {
    base: 'ಸ',
    sub: 'ತ',
    word: 'ವಸ್ತು',
    trans: 'Vastu',
    meaningEn: 'Object / Article',
    meaningHi: 'वस्तु / चीज',
    formula: 'ಸ್ + ತ = ಸ್ತು',
    ruleEn: 'The sibilant "Sa" is conjoined with the subscript "Ta" (ತ-ವತ್ತು) and capped with the "u" vowel (ು).',
    ruleHi: 'उष्म व्यंजन "Sa" के साथ "Ta" सबस्क्रिप्ट (ತ-ವತ್ತು) का संयोजन और ऊपर "u" स्वर की मात्रा।'
  },
  {
    base: 'ಭ',
    sub: 'ಯ',
    word: 'ಅಭ್ಯಾಸ',
    trans: 'Abhyaasa',
    meaningEn: 'Practice / Study',
    meaningHi: 'अभ्यास / कसरत',
    formula: 'ಭ್ + ಯ = bhya',
    ruleEn: 'The aspirated labial "Bha" conjoins with "Ya" subscript (ಯ-ವತ್ತು) and a long vowel mark. A fundamental word for students!',
    ruleHi: 'महाप्राण "Bha" के साथ "Ya" सबस्क्रिप्ट (ಯ-वತ್ತು) और दीर्घ स्वर का संयोजन। छात्रों के लिए अनिवार्य शब्द!'
  },
  {
    base: 'ಸ',
    sub: 'ಯ',
    word: 'ಸಸ್ಯ',
    trans: 'Sasya',
    meaningEn: 'Plant / Vegetation',
    meaningHi: 'सस्य / पौधा',
    formula: 'ಸ್ + ಯ = ಸ್ಯ',
    ruleEn: 'The sibilant "Sa" conjoins with the subscript "Ya" (ಯ-ವತ್ತು) in this pure Dravidian term.',
    ruleHi: 'इस विशुद्ध कन्नड़ शब्द में "Sa" का "Ya" सबस्क्रिप्ट (ಯ-ವತ್ತು) के साथ संयोजन है।'
  },
  {
    base: 'ಸ',
    sub: 'ಕ',
    word: 'ಭಾಸ್ಕರ',
    trans: 'Bhaaskara',
    meaningEn: 'Sun / Creator of Light',
    meaningHi: 'भास्कर / सूर्य',
    formula: 'ಸ್ + ಕ = ಸ್ಕ',
    ruleEn: 'The sibilant "Sa" conjoins with the velar "Ka" subscript (ಕ-ವತ್ತು) under the main letter.',
    ruleHi: 'उष्म व्यंजन "Sa" के साथ कंठ्य "Ka" सबस्क्रिप्ट (ಕ-ವತ್ತು) का मेल।'
  },
  {
    base: 'ಣ',
    sub: 'ಯ',
    word: 'ಅರಣ್ಯ',
    trans: 'Aranya',
    meaningEn: 'Forest / Wilderness',
    meaningHi: 'अरण्य / जंगल',
    formula: 'ಣ್ + ಯ = ಣ್ಯ',
    ruleEn: 'The retroflex nasal "Na" conjoins with the subscript "Ya" (ಯ-ವತ್ತು), resting on the right side of the base letter.',
    ruleHi: 'मूर्धन्य नासिका "Na" का "Ya" सबस्क्रिप्ट (ಯ-ವತ್ತು) के साथ संयोजन, जो दाईं ओर बैठता है।'
  },
  {
    base: 'ಸ',
    sub: 'ಕ',
    word: 'ಸಂಸ್ಕೃತಿ',
    trans: 'Samskruthi',
    meaningEn: 'Culture / Heritage',
    meaningHi: 'संस्कृति / विरासत',
    formula: 'ಸ್ + ಕ + ೃ = ಸ್ಕೃ',
    ruleEn: 'A marvelous spelling combo! Sibilant "Sa" conjoins with "Ka" subscript (ಕ-ವತ್ತು) and vocalic "R" vowel (ೃ).',
    ruleHi: 'वर्तनी का एक शानदार संयोजन! "Sa" के नीचे "Ka" सबस्क्रिप्ट और ऋ-कार (ೃ) की मात्रा का सुंदर मेल।'
  },
  {
    base: 'ದ',
    sub: 'ಧ',
    word: 'ಪ್ರಸಿದ್ಧ',
    trans: 'Prasiddha',
    meaningEn: 'Famous / Well-known',
    meaningHi: 'प्रसिद्ध / मशहूर',
    formula: 'ದ್ + ಧ = ದ್ಧ',
    ruleEn: 'Includes both the Praphala under "Pa" and the unaspirated "Da" conjoining with aspirated "Dha" subscript.',
    ruleHi: 'इसमें "Pa" के नीचे प्रफल और "Da" के साथ महाप्राण "Dha" सबस्क्रिप्ट का मेल दोनों शामिल हैं।'
  },
  {
    base: 'ಜ',
    sub: 'ಞ',
    word: 'ವಿಜ್ಞಾನ',
    trans: 'Vijnaana',
    meaningEn: 'Science',
    meaningHi: 'विज्ञान',
    formula: 'ಜ್ + ಞ = ಜ್ಞ',
    ruleEn: 'Features the merge of "Ja" and "Nya" (ಜ್ಞ) to represent systematic knowledge or science.',
    ruleHi: 'व्यवस्थित ज्ञान या विज्ञान को दर्शाने के लिए इसमें "Ja" और "Nya" (ಜ್ಞ) का सुंदर संगम है।'
  },
  {
    base: 'ತ',
    sub: 'ಮ',
    word: 'ಮಹಾತ್ಮ',
    trans: 'Mahaatma',
    meaningEn: 'Great Soul / Saint',
    meaningHi: 'महात्मा / महान व्यक्ति',
    formula: 'ತ್ + ಮ = ತ್ಮ',
    ruleEn: 'The dental "Ta" conjoins with the subscript "Ma" (ಮ-ವತ್ತು) underneath the base letter.',
    ruleHi: 'दंत्य "Ta" का नीचे "Ma" सबस्क्रिप्ट (ಮ-ವತ್ತು) के साथ संयोजन।'
  },
  {
    base: 'ಶ',
    sub: 'ಯ',
    word: 'ಅವಶ್ಯಕ',
    trans: 'Avashyaka',
    meaningEn: 'Necessary / Essential',
    meaningHi: 'आवश्यक / जरूरी',
    formula: 'ಶ್ + ಯ = ಶ್ಯ',
    ruleEn: 'The palatal "Sha" conjoins with "Ya" subscript (ಯ-ವತ್ತು), creating a very elegant phonetic curve.',
    ruleHi: 'तालव्य "Sha" का "Ya" सबस्क्रिप्ट (ಯ-ವತ್ತು) के साथ संयोजन, जो एक बहुत ही सुंदर ध्वन्यात्मक वक्र बनाता है।'
  },
  {
    base: 'ರ',
    sub: 'ಥ',
    word: 'ತೀರ್ಥ',
    trans: 'Theertha',
    meaningEn: 'Sacred Water / Pilgrimage',
    meaningHi: 'तीर्थ / पवित्र जल',
    formula: 'ರ್ + ಥ = ರ್ಥ',
    ruleEn: 'Features the Arka-vattu hook on top of the aspirated dental consonant "Tha".',
    ruleHi: 'इसमें महाप्राण दंत್ಯ व्यंजन "Tha" के ऊपर ಅರ್ಕ-vattu ಹುಕ್ ಕಾ ಉಪಯೋಗ್ ಕಿಯಾ ಗಯಾ ಹೈ।'
  },
  {
    base: 'ರ',
    sub: 'ಷ',
    word: 'ಶೀರ್ಷಿಕೆ',
    trans: 'Sheershike',
    meaningEn: 'Heading / Title',
    meaningHi: 'शीर्षक / नाम',
    formula: 'ರ್ + ಷ = ರ್ಷಿ',
    ruleEn: 'The Arka-vattu hook sits on top of the retroflex "Sha", which also carries the "i" vowel mark.',
    ruleHi: 'मूर्धन्य "Sha" के ऊपर अर्क-वत्तु हुक बैठता है, और इसमें "i" स्वर की मात्रा भी शामिल है।'
  },
  {
    base: 'ರ',
    sub: 'ತ',
    word: 'ಕರ್ತವ್ಯ',
    trans: 'Karthavya',
    meaningEn: 'Duty / Obligation',
    meaningHi: 'कर्तव्य / फर्ज',
    formula: 'ರ್ + ತ = ರ್ತ, ವ್ + ಯ = ವ್ಯ',
    ruleEn: 'A magnificent double-conjunct! Features Arka-vattu on "Ta", and "Ya" subscript on "Va". Highly educational.',
    ruleHi: 'एक शानदार दोहरा संयुक्त अक्षर! इसमें "Ta" के ऊपर अर्क-वत्तु और "Va" के नीचे "Ya" सबस्क्रिप्ट दोनों मौजूद हैं।'
  },
  {
    base: 'ಹ',
    sub: 'ಮ',
    word: 'ಬ್ರಹ್ಮ',
    trans: 'Brahma',
    meaningEn: 'Lord Brahma / Creator',
    meaningHi: 'ब्रह्मा / रचयिता',
    formula: 'ಹ್ + ಮ = ಹ್ಮ',
    ruleEn: 'A rare and classic conjunct! The glottal "Ha" conjoins with the subscript "Ma" (ಮ-ವತ್ತು), which sits inside the belly of "Ha".',
    ruleHi: 'एक अत्यंत दुर्लभ संयोजन! महाप्राण "Ha" के पेट के भीतर "Ma" सबस्क्रिप्ट (ಮ-ವತ್ತು) का सुंदर मेल।'
  },
  {
    base: 'ಹ',
    sub: 'ನ',
    word: 'ಚಿಹ್ನೆ',
    trans: 'Chihne',
    meaningEn: 'Sign / Symbol',
    meaningHi: 'चिह्न / संकेत',
    formula: 'ಹ್ + ನ = ಹ್ನೆ',
    ruleEn: 'Similar to Brahma, the subscript "Na" (ನ-ವತ್ತು) sits nestled inside the belly of the glottal "Ha".',
    ruleHi: 'ब्रह्मा की तरह ही, यहाँ "Na" सबस्क्रिप्ट (ನ-वತ್ತು) व्यंजन "Ha" के पेट के भीतर बसा होता है।'
  },
  {
    base: 'ಹ',
    sub: 'ಯ',
    word: 'ಬಾಹ್ಯ',
    trans: 'Baahya',
    meaningEn: 'External / Outer',
    meaningHi: 'बाह्य / बाहरी',
    formula: 'ಹ್ + ಯ = ಹ್ಯ',
    ruleEn: 'The glottal "Ha" conjoins with the subscript "Ya" (ಯ-ವತ್ತು), which wraps beautifully around the right side of "Ha".',
    ruleHi: 'व्यंजन "Ha" का "Ya" सबस्क्रिप्ट (ಯ-ವತ್ತು) के साथ संयोजन, जो "Ha" के दाईं ओर सुंदर रूप से लिपटता है।'
  },
  {
    base: 'ರ',
    sub: 'ಹ',
    word: 'ಅರ್ಹತೆ',
    trans: 'Arhate',
    meaningEn: 'Eligibility / Merit',
    meaningHi: 'योग्यता / पात्रता',
    formula: 'ರ್ + ಹ = ರ್ಹ',
    ruleEn: 'Features the Arka-vattu hook on top of the glottal consonant "Ha".',
    ruleHi: 'इसमें महाप्राण व्यंजन "Ha" के ऊपर अर्क-वत्तु हुक का उपयोग किया गया है।'
  },
  {
    base: 'ತ',
    sub: 'ಮ',
    word: 'ಪರಮಾತ್ಮ',
    trans: 'Paramaatma',
    meaningEn: 'Supreme Soul / God',
    meaningHi: 'परमात्मा / ईश्वर',
    formula: 'ತ್ + ಮ = ತ್ಮ',
    ruleEn: 'The dental "Ta" conjoins with subscript "Ma" (ಮ-ವತ್ತು) underneath, denoting the ultimate spiritual soul.',
    ruleHi: 'दंत्य "Ta" और नीचे "Ma" सबस्क्रिप्ट (ಮ-ವತ್ತು) का संयोजन, जो सर्वोच्च आत्मा को दर्शाता है।'
  },
  {
    base: 'ತ',
    sub: 'ಮ',
    word: 'ಜೀವಾತ್ಮ',
    trans: 'Jeevaatma',
    meaningEn: 'Individual Soul',
    meaningHi: 'जीवात्मा / प्राणी',
    formula: 'ತ್ + ಮ = ತ್ಮ',
    ruleEn: 'The dental "Ta" conjoins with the subscript "Ma" (ಮ-ವತ್ತು) underneath, representing the living soul.',
    ruleHi: 'दंत्य "Ta" और नीचे "Ma" सबस्क्रिप्ट (ಮ-ವತ್ತು) का संयोजन, जो प्राणी की आत्मा को दर्शाता है।'
  }
];

const UNUSED_DUMMY_CONDUIT_BLOCK = [
  {
    dummy: 'value',
    ruleEn: 'The velar "Ka" conjoins with dental "Ta" (ತ-ವತ್ತು). Very common in moral stories and science textbooks.',
    ruleHi: 'कंठ्य वर्ण "Ka" के साथ दंत्य "Ta" सबस्क्रिप्ट का मेल। शिक्षाप्रद कहानियों और विज्ञान की पुस्तकों में आम है।'
  }
];

const ARKAVATTU_WORDS = [
  {
    base: 'ರ್',
    sub: 'ಯ',
    word: 'ಸೂರ್ಯ',
    trans: 'Soorya',
    meaningEn: 'Sun',
    meaningHi: 'सूर्य / सूरज',
    formula: 'ಸೂ + ರ್ + ಯ = ಸೂರ್ಯ',
    ruleEn: 'The letter "Ra" (ರ್) precedes "Ya", forming the "Arka-vattu" hook on top-right of "Ya".',
    ruleHi: 'यहाँ "Ra" वर्ण "Ya" से पहले आता है, जिससे "Ya" के ऊपर "Arka-vattu" (ಅರ್ಕಾವತ್ತು) का हुक बनता है।'
  },
  {
    base: 'ರ್',
    sub: 'ಮ',
    word: 'ಧರ್ಮ',
    trans: 'Dharma',
    meaningEn: 'Righteousness / Duty',
    meaningHi: 'धर्म / कर्तव्य',
    formula: 'ಧ + ರ್ + ಮ = ಧರ್ಮ',
    ruleEn: 'The letter "Ra" (ರ್) comes first and sits as a hook on top of the letter "Ma".',
    ruleHi: 'इसमें "अर्क-वत्तु" है जहाँ "Ra" वर्ण पहले आता है और "Ma" के ऊपर हुक के रूप में बैठता है।'
  },
  {
    base: 'ರ್',
    sub: 'ಗ',
    word: 'ಮಾರ್ಗ',
    trans: 'Maarga',
    meaningEn: 'Path / Way',
    meaningHi: 'मार्ग / रास्ता',
    formula: 'ಮಾ + ರ್ + ಗ = ಮಾರ್ಗ',
    ruleEn: 'The preceding "Ra" (ರ್) is represented by the Arka-vattu hook on top of the letter "Ga".',
    ruleHi: 'पहले आने वाला "Ra" वर्ण "Ga" के ऊपर अर्क-वत्तु हुक के रूप में प्रदर्शित होता है।'
  },
  {
    base: 'ರ್',
    sub: 'ವ',
    word: 'ಪರ್ವತ',
    trans: 'Parvatha',
    meaningEn: 'Mountain / Hill',
    meaningHi: 'पर्वत / पहाड़',
    formula: 'ಪ + ರ್ + ವ + ತ = ಪರ್ವತ',
    ruleEn: 'The preceding "Ra" (ರ್) forms an Arka-vattu hook on top of "Va".',
    ruleHi: 'पहले आने वाला "Ra" वर्ण "Va" के ऊपर अर्क-वत्तु हुक बनाता है।'
  },
  {
    base: 'ರ್',
    sub: 'ಯ',
    word: 'ಕಾರ್ಯ',
    trans: 'Kaarya',
    meaningEn: 'Work / Task',
    meaningHi: 'कार्य / काम',
    formula: 'ಕಾ + ರ್ + ಯ = ಕಾರ್ಯ',
    ruleEn: 'The letter "Ra" (ರ್) precedes "Ya", represented by Arka-vattu on top of "Ya".',
    ruleHi: '"Ra" वर्ण "Ya" से पहले आता है, जिसे "Ya" के ऊपर अर्क-वत्तु के रूप में दर्शाया जाता है।'
  },
  {
    base: 'ರ್',
    sub: 'ವ',
    word: 'ಗರ್ವ',
    trans: 'Garva',
    meaningEn: 'Pride / Ego',
    meaningHi: 'गर्व / घमंड',
    formula: 'ಗ + ರ್ + ವ = ಗರ್ವ',
    ruleEn: 'Another classic Arka-vattu word where the preceding "Ra" (ರ್) sits on "Va".',
    ruleHi: 'एक और अर्क-वत्तु शब्द जहाँ पहले आने वाला "Ra", "Va" के ऊपर बैठता है।'
  },
  {
    base: 'ರ್',
    sub: 'ತ',
    word: 'ಕರ್ತವ್ಯ',
    trans: 'Karthavya',
    meaningEn: 'Duty / Obligation',
    meaningHi: 'कर्तव्य / फर्ज',
    formula: 'ಕ + ರ್ + ತ + ವ್ಯ = ಕರ್ತವ್ಯ',
    ruleEn: 'A double-conjunct! Features Arka-vattu on "Ta" (ರ್ + ತ = ರ್ತ), and "Ya" subscript on "Va" (ವ್ + ಯ = ವ್ಯ).',
    ruleHi: 'एक शानदार दोहरा संयुक्त अक्षर! इसमें "Ta" के ऊपर अर्क-वत्तु और "Va" के नीचे "Ya" सबस्क्रिप्ट दोनों मौजूद हैं।'
  },
  {
    base: 'ರ್',
    sub: 'ಹ',
    word: 'ಅರ್ಹತೆ',
    trans: 'Arhate',
    meaningEn: 'Eligibility / Merit',
    meaningHi: 'योग्यता / पात्रता',
    formula: 'ಅ + ರ್ + ಹ + ತೆ = ಅರ್ಹತೆ',
    ruleEn: 'Features the Arka-vattu hook on top of the glottal consonant "Ha".',
    ruleHi: 'इसमें महाप्राण व्यंजन "Ha" के ऊपर अर्क-वत्तु हुक का उपयोग किया गया है।'
  }
];

const WRITING_PRACTICE_WORDS = [
  {
    word: 'ಅಮ್ಮ',
    trans: 'Amma',
    meaningEn: 'Mother',
    meaningHi: 'माँ',
    difficulty: 'simple',
    difficultyEn: 'Simple (Sajātīya)',
    difficultyHi: 'सरल (सजातीय)',
    formula: 'ಅ + ಮ್ + ಮ = ಅಮ್ಮ',
    explanationEn: 'The letter "Ma" is doubled with its own subscript (ಮ-ವತ್ತು) at the bottom.',
    explanationHi: '"Ma" वर्ण के नीचे उसी का सबस्क्रिप्ट (ಮ-वತ್ತು) जोड़ा गया है।',
    sequence: ['ಅ', 'ಮ', '್', 'ಮ']
  },
  {
    word: 'ಅಪ್ಪ',
    trans: 'Appa',
    meaningEn: 'Father',
    meaningHi: 'पिता',
    difficulty: 'simple',
    difficultyEn: 'Simple (Sajātīya)',
    difficultyHi: 'सरल (सजातीय)',
    formula: 'ಅ + ಪ್ + ಪ = ಅಪ್ಪ',
    explanationEn: 'The letter "Pa" is doubled with its own subscript (ಪ-ವತ್ತು) underneath.',
    explanationHi: '"Pa" वर्ण के नीचे उसी का सबस्क्रिप्ट (ಪ-वತ್ತು) जुड़ा है।',
    sequence: ['ಅ', 'ಪ', '್', 'ಪ']
  },
  {
    word: 'ಬೆಕ್ಕು',
    trans: 'Bekku',
    meaningEn: 'Cat',
    meaningHi: 'बिल्ली',
    difficulty: 'simple',
    difficultyEn: 'Simple (Sajātīya)',
    difficultyHi: 'सरल (सजातीय)',
    formula: 'ಬೆ + ಕ್ + ಕು = ಬೆಕ್ಕು',
    explanationEn: 'Combines the consonant "Ka" with its vowel mark and own subscript (ಕ-ವತ್ತು).',
    explanationHi: '"Ka" व्यंजन के साथ स्वर और उसी का सबस्क्रिप्ट (ಕ-वತ್ತು) संयोजित है।',
    sequence: ['ಬ', 'ೆ', 'ಕ', '್', 'ಕ', 'ು']
  },
  {
    word: 'ಬತ್ತಿ',
    trans: 'Batti',
    meaningEn: 'Wick',
    meaningHi: 'बत्ती',
    difficulty: 'simple',
    difficultyEn: 'Simple (Sajātīya)',
    difficultyHi: 'सरल (सजातीय)',
    formula: 'ಬ + ತ್ + ತಿ = ಬತ್ತಿ',
    explanationEn: 'Features the dental consonant "Ta" with its identical subscript "Ta-vattu" (ತ-ವತ್ತು) and "i" vowel.',
    explanationHi: 'दंत्य व्यंजन "Ta" के साथ समान सबस्क्रिप्ट (ತ-ವತ್ತು) और "i" स्वर की मात्रा है।',
    sequence: ['ಬ', 'ತ', '್', 'ತ', 'ಿ']
  },
  {
    word: 'ಕನ್ನಡ',
    trans: 'Kannada',
    meaningEn: 'Kannada Language',
    meaningHi: 'ಕನ್ನಡ भाषा',
    difficulty: 'medium',
    difficultyEn: 'Medium (Sajātīya)',
    difficultyHi: 'मध्यम (सजातीय)',
    formula: 'ಕ + ನ್ + ನ + ಡ = ಕನ್ನಡ',
    explanationEn: 'The nasal consonant "Na" is conjoined with its own subscript (ನ-ವತ್ತು).',
    explanationHi: 'अनुनासिक व्यंजन "Na" के नीचे उसका अपना सबस्क्रिप्ट (ನ-ವತ್ತು) जुड़ा है।',
    sequence: ['ಕ', 'ನ', '್', 'ನ', 'ಡ']
  },
  {
    word: 'ಪುಸ್ತಕ',
    trans: 'Pustaka',
    meaningEn: 'Book',
    meaningHi: 'पुस्तक / किताब',
    difficulty: 'medium',
    difficultyEn: 'Medium (Vijātīya)',
    difficultyHi: 'मध्यम (विजातीय)',
    formula: 'ಪು + ಸ್ + ತ + ಕ = ಪುಸ್ತಕ',
    explanationEn: 'A mixed (Vijātīya) conjunct: the sibilant "Sa" takes the subscript of dental "Ta" (ತ-ವತ್ತು).',
    explanationHi: 'विजातीय संयुक्त रूप: "Sa" वर्ण के नीचे दंत्य "Ta" सबस्क्रिप्ट (ತ-ವತ್ತು) लगा है।',
    sequence: ['ಪ', 'ು', 'ಸ', '್', 'ತ', 'ಕ']
  },
  {
    word: 'ಪ್ರವಾಸ',
    trans: 'Pravaasa',
    meaningEn: 'Journey / Travel',
    meaningHi: 'यात्रा / प्रवास',
    difficulty: 'medium',
    difficultyEn: 'Medium (Praphala)',
    difficultyHi: 'मध्यम (प्रफल)',
    formula: 'ಪ್ + ರ + ವಾ + ಸ = ಪ್ರವಾಸ',
    explanationEn: 'Features the "Praphala" slash subscript (್ರ) representing a secondary "Ra" following "Pa".',
    explanationHi: 'इसमें "प्रफल" (್ರ) सबस्क्रिप्ट तिरछी रेखा है जो "Pa" के बाद "Ra" ध्वनि दर्शाती है।',
    sequence: ['ಪ', '್', 'ರ', 'ವ', 'ಾ', 'ಸ']
  },
  {
    word: 'ಸೂರ್ಯ',
    trans: 'Soorya',
    meaningEn: 'Sun',
    meaningHi: 'सूर्य / सूरज',
    difficulty: 'medium',
    difficultyEn: 'Medium (Arkavattu)',
    difficultyHi: 'मध्यम (अर्क-वत्तु)',
    formula: 'ಸೂ + ರ್ + ಯ = ಸೂರ್ಯ',
    explanationEn: 'Features the "Arka-vattu" hook (ರ್) on top-right of "Ya", representing a preceding "Ra".',
    explanationHi: '"Ya" के ऊपर-दाईं ओर "ಅರ್ಕಾವತ್ತು" हुक है जो पूर्ववर्ती "Ra" वर्ण का सूचक है।',
    sequence: ['ಸ', 'ೂ', 'ರ', '್', 'ಯ']
  },
  {
    word: 'ವಿಜ್ಞಾನ',
    trans: 'Vignaana',
    meaningEn: 'Science',
    meaningHi: 'विज्ञान',
    difficulty: 'complex',
    difficultyEn: 'Complex (Vijātīya)',
    difficultyHi: 'कठिन (विजातीय)',
    formula: 'ವಿ + ಜ್ + ಞ + ಾ + ನ = ವಿಜ್ಞಾನ',
    explanationEn: 'A complex cluster where the palatal "Ja" takes the subscript of nasal "Nya" (ಞ-ವತ್ತು) with a long vowel.',
    explanationHi: 'कठिन तालव्य संयोग: "Ja" के नीचे अनुनासिक "Nya" सबस्क्रिप्ट (ಞ-ವತ್ತು) और दीर्घ स्वर है।',
    sequence: ['ವ', 'ಿ', 'ಜ', '್', 'ಞ', 'ಾ', 'ನ']
  },
  {
    word: 'ಕರ್ತವ್ಯ',
    trans: 'Karthavya',
    meaningEn: 'Duty / Obligation',
    meaningHi: 'कर्तव्य / फर्ज',
    difficulty: 'complex',
    difficultyEn: 'Complex (Double)',
    difficultyHi: 'कठिन (दोहरा संयुक्त)',
    formula: 'ಕ + ರ್ + ತ + ವ್ಯ = ಕರ್ತವ್ಯ',
    explanationEn: 'Double-conjunct: Arka-vattu on "Ta" (ರ್ + ತ) and subscript "Ya" (ಯ-ವತ್ತು) on "Va" (ವ್ + ಯ).',
    explanationHi: 'दोहरा संयुक्त: "Ta" के ऊपर अर्क-वत्तु और "Va" के नीचे "Ya" सबस्क्रिप्ट (ಯ-ವತ್ತು)।',
    sequence: ['ಕ', 'ರ', '್', 'ತ', 'ವ', '್', 'ಯ']
  }
];

export function OttaksharaLearner() {
  const { referenceLanguage } = useLanguage();
  const [activeSubTab, setActiveSubTab] = useState<'sajatiya' | 'vijatiya' | 'arkavattu' | 'quiz'>('sajatiya');
  const [posterSelected, setPosterSelected] = useState<string>('ಕ');

  // Vijatiya state
  const [vijatiyaIndex, setVijatiyaIndex] = useState<number>(0);

  // Arkavattu state
  const [arkavattuIndex, setArkavattuIndex] = useState<number>(0);

  // Word Showcase state
  const [wordDifficultyFilter, setWordDifficultyFilter] = useState<'all' | 'simple' | 'medium' | 'complex'>('all');

  // Full pool of 24 educational Kannada words containing Ottakshara
  const SHOWCASE_WORDS_POOL = [
    {
      word: 'ಅಮ್ಮ',
      trans: 'Amma',
      meaningEn: 'Mother',
      meaningHi: 'माँ',
      difficulty: 'simple',
      difficultyEn: 'Simple (Sajātīya)',
      difficultyHi: 'सरल (सजातीय)',
      formula: 'ಅ + ಮ್ + ಮ = ಅಮ್ಮ',
      explanationEn: 'The letter "Ma" is doubled with its own subscript (ಮ-ವತ್ತು) at the bottom.',
      explanationHi: '"Ma" वर्ण के नीचे उसी का सबस्क्रिप्ट (ಮ-वತ್ತು) जोड़ा गया है।',
      sequence: ['ಅ', 'ಮ', '್', 'ಮ']
    },
    {
      word: 'ಅಪ್ಪ',
      trans: 'Appa',
      meaningEn: 'Father',
      meaningHi: 'पिता',
      difficulty: 'simple',
      difficultyEn: 'Simple (Sajātīya)',
      difficultyHi: 'सरल (सजातीय)',
      formula: 'ಅ + ಪ್ + ಪ = ಅಪ್ಪ',
      explanationEn: 'The letter "Pa" is doubled with its own subscript (ಪ-ವತ್ತು) underneath.',
      explanationHi: '"Pa" वर्ण के नीचे उसी का सबस्क्रिप्ट (ಪ-वತ್ತು) जुड़ा है।',
      sequence: ['ಅ', 'ಪ', '್', 'ಪ']
    },
    {
      word: 'ಬೆಕ್ಕು',
      trans: 'Bekku',
      meaningEn: 'Cat',
      meaningHi: 'बिल्ली',
      difficulty: 'simple',
      difficultyEn: 'Simple (Sajātīya)',
      difficultyHi: 'सरल (सजातीय)',
      formula: 'ಬೆ + ಕ್ + ಕು = ಬೆಕ್ಕು',
      explanationEn: 'Combines the consonant "Ka" with its vowel mark and own subscript (ಕ-ವತ್ತು).',
      explanationHi: '"Ka" व्यंजन के साथ स्वर और उसी का सबस्क्रिप्ट (ಕ-वತ್ತು) संयोजित है।',
      sequence: ['ಬ', 'ೆ', 'ಕ', '್', 'ಕ', 'ು']
    },
    {
      word: 'ಬತ್ತಿ',
      trans: 'Batti',
      meaningEn: 'Wick',
      meaningHi: 'बत्ती',
      difficulty: 'simple',
      difficultyEn: 'Simple (Sajātīya)',
      difficultyHi: 'सरल (सजातीय)',
      formula: 'ಬ + ತ್ + ತಿ = ಬತ್ತಿ',
      explanationEn: 'Features the dental consonant "Ta" with its identical subscript "Ta-vattu" (ತ-ವತ್ತು) and "i" vowel.',
      explanationHi: 'दंत्य व्यंजन "Ta" के साथ समान सबस्क्रिप्ट (ತ-वತ್ತು) और "i" स्वर की मात्रा है।',
      sequence: ['ಬ', 'ತ', '್', 'ತ', 'ಿ']
    },
    {
      word: 'ಹಕ್ಕಿ',
      trans: 'Hakki',
      meaningEn: 'Bird',
      meaningHi: 'पक्षी / चिड़िया',
      difficulty: 'simple',
      difficultyEn: 'Simple (Sajātīya)',
      difficultyHi: 'सरल (सजातीय)',
      formula: 'ಹ + ಕ್ + ಕಿ = ಹಕ್ಕಿ',
      explanationEn: 'The letter "Ka" is doubled with its own subscript (ಕ-ವತ್ತು) with vowel mark "i".',
      explanationHi: '"Ka" व्यंजन के नीचे उसी का सबस्क्रिप्ट (ಕ-वತ್ತು) और स्वर "i" लगा है।',
      sequence: ['ಹ', 'ಕ', '್', 'ಕ', 'ಿ']
    },
    {
      word: 'ಹಣ್ಣು',
      trans: 'Hannu',
      meaningEn: 'Fruit',
      meaningHi: 'फल',
      difficulty: 'simple',
      difficultyEn: 'Simple (Sajātīya)',
      difficultyHi: 'सरल (सजातीय)',
      formula: 'ಹ + ಣ್ + ಣು = ಹಣ್ಣು',
      explanationEn: 'The retroflex nasal "Na" is doubled with its own subscript (ಣ-ವತ್ತು) and vowel "u".',
      explanationHi: 'मूर्धन्य नासिका व्यंजन "Na" के नीचे उसी का सबस्क्रिप्ट (ಣ-वತ್ತು) और स्वर "u" लगा है।',
      sequence: ['ಹ', 'ಣ', '್', 'ಣ', 'ು']
    },
    {
      word: 'ಕಲ್ಲು',
      trans: 'Kallu',
      meaningEn: 'Stone',
      meaningHi: 'पत्थर / चट्टान',
      difficulty: 'simple',
      difficultyEn: 'Simple (Sajātīya)',
      difficultyHi: 'सरल (सजातीय)',
      formula: 'ಕ + ಲ್ + ಲು = ಕಲ್ಲು',
      explanationEn: 'The lateral consonant "La" is doubled with its own subscript (ಲ-ವತ್ತು) and vowel "u".',
      explanationHi: 'पार्श्विक व्यंजन "La" के नीचे उसी का सबस्क्रिप्ट (ಲ-वತ್ತು) और स्वर "u" लगा है।',
      sequence: ['ಕ', 'ಲ', '್', 'ಲ', 'ು']
    },
    {
      word: 'ಮೊಗ್ಗು',
      trans: 'Moggu',
      meaningEn: 'Flower Bud',
      meaningHi: 'कली / मुकुल',
      difficulty: 'simple',
      difficultyEn: 'Simple (Sajātīya)',
      difficultyHi: 'सरल (सजातीय)',
      formula: 'ಮೊ + ಗ್ + ಗು = ಮೊಗ್ಗು',
      explanationEn: 'The voiced velar consonant "Ga" is doubled with its own subscript (ಗ-ವತ್ತು) and vowel "u".',
      explanationHi: 'घोष कंठ्य व्यंजन "Ga" के नीचे उसी का सबस्क्रिप्ट (ಗ-वತ್ತು) और स्वर "u" लगा है।',
      sequence: ['ಮ', 'ೊ', 'ಗ', '್', 'ಗ', 'ು']
    },
    {
      word: 'ಹಗ್ಗ',
      trans: 'Hagga',
      meaningEn: 'Rope',
      meaningHi: 'रस्सी / डोरी',
      difficulty: 'simple',
      difficultyEn: 'Simple (Sajātīya)',
      difficultyHi: 'सरल (सजातीय)',
      formula: 'ಹ + ಗ್ + ಗ = ಹಗ್ಗ',
      explanationEn: 'The voiced velar consonant "Ga" is doubled with its own subscript (ಗ-ವತ್ತು).',
      explanationHi: 'घोष कंठ्य व्यंजन "Ga" के नीचे उसी का सबस्क्रिप्ट (ಗ-वತ್ತು) लगा है।',
      sequence: ['ಹ', 'ಗ', '್', 'ಗ']
    },
    {
      word: 'ಕನ್ನಡ',
      trans: 'Kannada',
      meaningEn: 'Kannada Language',
      meaningHi: 'ಕನ್ನಡ भाषा',
      difficulty: 'medium',
      difficultyEn: 'Medium (Sajātīya)',
      difficultyHi: 'मध्यम (सजातीय)',
      formula: 'ಕ + ನ್ + ನ + ಡ = ಕನ್ನಡ',
      explanationEn: 'The nasal consonant "Na" is conjoined with its own subscript (ನ-ವತ್ತು).',
      explanationHi: 'अनुनासिक व्यंजन "Na" के नीचे उसका अपना सबस्क्रिप्ट (ನ-वತ್ತು) जुड़ा है।',
      sequence: ['ಕ', 'ನ', '್', 'ನ', 'ಡ']
    },
    {
      word: 'ಪುಸ್ತಕ',
      trans: 'Pustaka',
      meaningEn: 'Book',
      meaningHi: 'पुस्तक / किताब',
      difficulty: 'medium',
      difficultyEn: 'Medium (Vijātīya)',
      difficultyHi: 'मध्यम (विजातीय)',
      formula: 'ಪು + ಸ್ + ತ + ಕ = ಪುಸ್ತಕ',
      explanationEn: 'A mixed (Vijātīya) conjunct: the sibilant "Sa" takes the subscript of dental "Ta" (ತ-ವತ್ತು).',
      explanationHi: 'विजातीय संयुक्त रूप: "Sa" वर्ण के नीचे दंत्य "Ta" सबस्क्रिप्ट (ತ-वತ್ತು) लगा है।',
      sequence: ['ಪ', 'ು', 'ಸ', '್', 'ತ', 'ಕ']
    },
    {
      word: 'ಪ್ರವಾಸ',
      trans: 'Pravaasa',
      meaningEn: 'Journey / Travel',
      meaningHi: 'यात्रा / प्रवास',
      difficulty: 'medium',
      difficultyEn: 'Medium (Praphala)',
      difficultyHi: 'मध्यम (प्रफल)',
      formula: 'ಪ್ + ರ + ವಾ + ಸ = ಪ್ರವಾಸ',
      explanationEn: 'Features the "Praphala" slash subscript (್ರ) representing a secondary "Ra" following "Pa".',
      explanationHi: 'इसमें "प्रफल" (್ರ) सबस्क्रिप्ट तिरछी रेखा है जो "Pa" के बाद "Ra" ध्वनि दर्शाती है।',
      sequence: ['ಪ', '್', 'ರ', 'ವ', 'ಾ', 'ಸ']
    },
    {
      word: 'ಸೂರ್ಯ',
      trans: 'Soorya',
      meaningEn: 'Sun',
      meaningHi: 'सूर्य / सूरज',
      difficulty: 'medium',
      difficultyEn: 'Medium (Arkavattu)',
      difficultyHi: 'मध्यम (अर्क-वत्तु)',
      formula: 'ಸೂ + ರ್ + ಯ = ಸೂರ್ಯ',
      explanationEn: 'Features the "Arka-vattu" hook (ರ್) on top-right of "Ya", representing a preceding "Ra".',
      explanationHi: '"Ya" के ऊपर-दाईं ओर "ಅರ್ಕಾವತ್ತು" हुक है जो पूर्ववर्ती "Ra" वर्ण का सूचक है।',
      sequence: ['ಸ', 'ೂ', 'ರ', '್', 'ಯ']
    },
    {
      word: 'ಸಕ್ಕರೆ',
      trans: 'Sakkare',
      meaningEn: 'Sugar',
      meaningHi: 'चीनी / शक्कर',
      difficulty: 'medium',
      difficultyEn: 'Medium (Sajātīya)',
      difficultyHi: 'मध्यम (सजातीय)',
      formula: 'ಸ + ಕ್ + ಕ + ರೆ = ಸಕ್ಕರೆ',
      explanationEn: 'Features double "Ka" (ಕ-ವತ್ತು) in the three-syllable word for sugar.',
      explanationHi: 'चीनी/शक्कर के इस तीन-अक्षरी शब्द में "Ka" व्यंजन का द्वित्व (ಕ-वತ್ತು) रूप प्रयुक्त हुआ है।',
      sequence: ['ಸ', 'ಕ', '್', 'ಕ', 'ರ', 'ೆ']
    },
    {
      word: 'ಚಕ್ರ',
      trans: 'Chakra',
      meaningEn: 'Wheel',
      meaningHi: 'पहिया / चक्र',
      difficulty: 'medium',
      difficultyEn: 'Medium (Praphala)',
      difficultyHi: 'मध्यम (प्रफल)',
      formula: 'ಚ + ಕ್ + ರ = ಚಕ್ರ',
      explanationEn: 'Features the "Praphala" slash subscript (್ರ) representing a secondary "Ra" following "Ka".',
      explanationHi: 'इसमें "प्रफल" (್ರ) सबस्क्रिप्ट तिरछी रेखा है जो "Ka" के बाद "Ra" ध्वनि दर्शाती है।',
      sequence: ['ಚ', 'ಕ', '್', 'ರ']
    },
    {
      word: 'ಮಂತ್ರ',
      trans: 'Mantra',
      meaningEn: 'Chant / Formula',
      meaningHi: 'मंत्र / विचार',
      difficulty: 'medium',
      difficultyEn: 'Medium (Vijātīya)',
      difficultyHi: 'मध्यम (विजातीय)',
      formula: 'ಮ + ನ್ + ತ್ + ರ = ಮಂತ್ರ',
      explanationEn: 'A triple cluster containing "Na" + "Ta" + "Ra" (್ರ-praphala).',
      explanationHi: '"Na" + "Ta" + "Ra" (್ರ-प्रफल) का त्रि-व्यंजन मिश्रण प्रयुक्त हुआ है।',
      sequence: ['ಮ', 'ನ', '್', 'ತ', '್', 'ರ']
    },
    {
      word: 'ಉದ್ಯಾನ',
      trans: 'Udyaana',
      meaningEn: 'Park / Garden',
      meaningHi: 'बगीचा / पार्क',
      difficulty: 'medium',
      difficultyEn: 'Medium (Vijātīya)',
      difficultyHi: 'मध्यम (विजातीय)',
      formula: 'ಉ + ದ್ + ಯ + ಾ + ನ = ಉದ್ಯಾನ',
      explanationEn: 'The dental voiced "Da" combines with the subscript "Ya-vattu" (ಯ-ವತ್ತು) and long vowel "aa".',
      explanationHi: 'दंत्य सघोष "Da" के साथ "Ya" सबस्क्रिप्ट (ಯ-वತ್ತು) और दीर्घ स्वर "aa" संयुक्त है।',
      sequence: ['ಉ', 'ದ', '್', 'ಯ', 'ಾ', 'ನ']
    },
    {
      word: 'ಚಂದ್ರ',
      trans: 'Chandra',
      meaningEn: 'Moon',
      meaningHi: 'चाँद / चन्द्रमा',
      difficulty: 'medium',
      difficultyEn: 'Medium (Vijātīya)',
      difficultyHi: 'मध्यम (विजातीय)',
      formula: 'ಚ + ನ್ + ದ್ + ರ = ಚಂದ್ರ',
      explanationEn: 'A beautiful nasal-voiced dental cluster where "Na" + "Da" + "Ra" (ದ + ್ರ) merge.',
      explanationHi: 'सुंदर अनुनासिक-दंत्य संयोग जहाँ "Na" + "Da" + "Ra" (ದ + ್ರ) परस्पर जुड़े हैं।',
      sequence: ['ಚ', 'ನ', '್', 'ದ', '್', 'ರ']
    },
    {
      word: 'ವರ್ಷ',
      trans: 'Varsha',
      meaningEn: 'Year',
      meaningHi: 'साल / वर्ष',
      difficulty: 'medium',
      difficultyEn: 'Medium (Arkavattu)',
      difficultyHi: 'मध्यम (अर्क-वत्तु)',
      formula: 'ವ + ರ್ + ಷ = ವರ್ಷ',
      explanationEn: 'Features the "Arka-vattu" hook representing a preceding "Ra" followed by the sibilant "Sha".',
      explanationHi: 'इसमें "Arka-vattu" हुक है जो मूर्धन्य "Sha" से पहले "Ra" ध्वनि को दर्शाता है।',
      sequence: ['ವ', 'ರ', '್', 'ಷ']
    },
    {
      word: 'ಕೀರ್ತಿ',
      trans: 'Keerthi',
      meaningEn: 'Fame / Glory',
      meaningHi: 'कीर्ति / यश',
      difficulty: 'medium',
      difficultyEn: 'Medium (Arkavattu)',
      difficultyHi: 'मध्यम (अर्क-वत्तु)',
      formula: 'ಕೀ + ರ್ + ತಿ = ಕೀರ್ತಿ',
      explanationEn: '"Ta" with its vowel mark "i" takes the preceding "Ra" (Arka-vattu) hook at the top.',
      explanationHi: 'स्वर "i" से युक्त "Ta" व्यंजन के ऊपर पूर्ववर्ती "Ra" (अर्क-वत्तु) का चिह्न लगा है।',
      sequence: ['ಕ', 'ೀ', 'ರ', '್', 'ತ', 'ಿ']
    },
    {
      word: 'ವಿಜ್ಞಾನ',
      trans: 'Vignaana',
      meaningEn: 'Science',
      meaningHi: 'विज्ञान',
      difficulty: 'complex',
      difficultyEn: 'Complex (Vijātīya)',
      difficultyHi: 'कठिन (विजातीय)',
      formula: 'ವಿ + ಜ್ + ಞ + ಾ + ನ = ವಿಜ್ಞಾನ',
      explanationEn: 'A complex cluster where the palatal "Ja" takes the subscript of nasal "Nya" (ಞ-ವತ್ತು) with a long vowel.',
      explanationHi: 'कठिन तालव्य संयोग: "Ja" के नीचे अनुनासिक "Nya" सबस्क्रिप्ट (ಞ-वತ್ತು) और दीर्घ स्वर है।',
      sequence: ['ವ', 'ಿ', 'ಜ', '್', 'ಞ', 'ಾ', 'ನ']
    },
    {
      word: 'ಕರ್ತವ್ಯ',
      trans: 'Karthavya',
      meaningEn: 'Duty / Obligation',
      meaningHi: 'कर्तव्य / फर्ज',
      difficulty: 'complex',
      difficultyEn: 'Complex (Double)',
      difficultyHi: 'कठिन (दोहरा संयुक्त)',
      formula: 'ಕ + ರ್ + ತ + ವ್ಯ = ಕರ್ತವ್ಯ',
      explanationEn: 'Double-conjunct: Arka-vattu on "Ta" (ರ್ + ತ) and subscript "Ya" (ಯ-ವತ್ತು) on "Va" (ವ್ + ಯ).',
      explanationHi: 'दोहरा संयुक्त: "Ta" के ऊपर अर्क-वत्तु और "Va" के नीचे "Ya" सबस्क्रिप्ट (ಯ-वತ್ತು)।',
      sequence: ['ಕ', 'ರ', '್', 'ತ', 'ವ', '್', 'ಯ']
    },
    {
      word: 'ಖಡ್ಗ',
      trans: 'Khadga',
      meaningEn: 'Sword',
      meaningHi: 'तलवार / खड्ग',
      difficulty: 'complex',
      difficultyEn: 'Complex (Vijātīya)',
      difficultyHi: 'कठिन (विजातीय)',
      formula: 'ಖ + ಡ್ + ಗ = ಖಡ್ಗ',
      explanationEn: 'The retroflex "Da" takes the subscript of velar "Ga" (ಗ-ವತ್ತು) in an authentic Sanskrit borrowing.',
      explanationHi: 'मूर्धन्य "Da" के नीचे कंठ्य "Ga" का सबस्क्रिप्ट (ಗ-वತ್ತು) लगा है।',
      sequence: ['ಖ', 'ಡ', '್', 'ಗ']
    },
    {
      word: 'ಸ್ವರ್ಗ',
      trans: 'Svarga',
      meaningEn: 'Heaven',
      meaningHi: 'स्वर्ग / लोक',
      difficulty: 'complex',
      difficultyEn: 'Complex (Double)',
      difficultyHi: 'कठिन (दोहरा संयुक्त)',
      formula: 'ಸ್ + ವ + ರ್ + ಗ = ಸ್ವರ್ಗ',
      explanationEn: 'Features two conjunct types: "Sa" with "Va-vattu" (ಸ + ್ವ) and "Ga" with preceding "Ra" (Arka-vattu).',
      explanationHi: 'दो प्रकार के संयोग: "Sa" के नीचे "Va-वತ್ತು" और "Ga" के ऊपर पूर्ववर्ती "Ra" (ಅರ್ಕಾವತ್ತು)।',
      sequence: ['ಸ', '್', 'ವ', 'ರ', '್', 'ಗ']
    }
  ];

  const [showcaseWords, setShowcaseWords] = useState<any[]>([]);
  const [seenWordKeys, setSeenWordKeys] = useState<string[]>([]);
  const [revealedWords, setRevealedWords] = useState<Record<string, boolean>>({});
  const [quizMode, setQuizMode] = useState<boolean>(true); // Hide answers by default

  // Function to shuffle the entire pool and grab 10 random words without repeating already seen ones
  const generateNewSet = () => {
    // Filter out words that have already been seen in this session
    let availablePool = SHOWCASE_WORDS_POOL.filter(item => !seenWordKeys.includes(item.word));
    
    // If we have fewer than 10 words remaining, reset seen words to start a new cycle,
    // but try to exclude the currently shown words to avoid immediate overlap in the new set
    if (availablePool.length < 10) {
      const currentWords = showcaseWords.map(w => w.word);
      availablePool = SHOWCASE_WORDS_POOL.filter(item => !currentWords.includes(item.word));
      
      // If still not enough, just use the entire pool
      if (availablePool.length < 10) {
        availablePool = [...SHOWCASE_WORDS_POOL];
      }
      
      // Reset seen keys to include current words (as they are already on screen)
      setSeenWordKeys(currentWords);
    }

    // Shuffle the available pool
    const shuffled = [...availablePool].sort(() => 0.5 - Math.random()).slice(0, 10);
    setShowcaseWords(shuffled);
    
    // Mark these new 10 words as seen
    setSeenWordKeys(prev => {
      const updated = [...prev];
      shuffled.forEach(w => {
        if (!updated.includes(w.word)) {
          updated.push(w.word);
        }
      });
      return updated;
    });

    // Reset individual reveal states for the new set of words
    setRevealedWords({});
  };

  // Run on mount once
  React.useEffect(() => {
    generateNewSet();
  }, []);

  // Function to translate labels based on the context language
  const lt = (en: string, hi: string) => {
    return referenceLanguage === 'hi' ? hi : en;
  };

  // Text-To-Speech Pronunciation engine
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'kn-IN';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-[#7B241C]/5 border-l-4 border-[#7B241C] p-4 flex gap-3">
        <div className="text-[#7B241C] mt-0.5">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <h4 className="font-serif text-[#2D2926] font-bold text-base">
            {lt('What is Ottakshara (ಒತ್ತಕ್ಷರ)?', 'ಒತ್ತಕ್ಷರ (ओत्तक्षर) क्या है?')}
          </h4>
          <p className="text-sm text-[#2D2926]/85 font-serif mt-1 leading-relaxed">
            {lt(
              'In Kannada, when two consonants are joined without a vowel in between, the second consonant is represented as a subscript below the first one, called a "vattu" (ವತ್ತು) or "ottakshara". Mastering these is the final step to reading authentic Kannada spelling!',
              'कन्नड़ में जब दो व्यंजनों को बिना स्वर के जोड़ा जाता है, तो दूसरे व्यंजन को पहले के नीचे सबस्क्रिप्ट के रूप में लिखा जाता है, जिसे "वत्तु" (ವತ್ತು) या "ओत्तक्षर" कहते हैं। कन्नड़ लिखने और पढ़ने की शुद्धता के लिए इन्हें समझना अत्यंत आवश्यक है!'
            )}
          </p>
        </div>
      </div>

      {/* Sub tabs switcher */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-1.5 bg-[#F5EFEB]/30 border-2 border-[#2D2926] rounded-xl">
        {[
          { id: 'sajatiya', label: lt('👥 Sajātīya', '👥 सजातीय'), sub: lt('Same-Letter Poster', 'समान अक्षर पोस्टर'), icon: BookOpen },
          { id: 'vijatiya', label: lt('✨ Vijātīya', '✨ विजातीय'), sub: lt('Word Conjuncts', 'संयुक्त शब्द'), icon: Sparkles },
          { id: 'arkavattu', label: lt('🌙 Arkavattu', '🌙 अर्कवत्तु'), sub: lt('Preceding R (ರ್)', 'पूर्ववर्ती र'), icon: HelpCircle },
          { id: 'quiz', label: lt('📖 Word Showcase', '📖 शब्द संग्रह'), sub: lt('10 Real Words', '१० वास्तविक शब्द'), icon: Award }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`py-3 px-2 flex flex-col items-center justify-center text-center gap-1 cursor-pointer font-sans rounded-lg transition-all duration-300 border-2 ${
                isActive
                  ? 'bg-[#7B241C] text-white border-[#7B241C] shadow-md'
                  : 'bg-white text-[#2D2926] border-stone-200 hover:border-[#2D2926]/40 hover:bg-[#F5EFEB]/50'
              }`}
            >
              <div className="flex items-center gap-1.5 justify-center">
                <Icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-white' : 'text-[#7B241C]'}`} />
                <span className="text-xs uppercase tracking-wider font-bold">
                  {tab.label}
                </span>
              </div>
              <span className={`text-[10px] font-medium font-mono ${isActive ? 'text-stone-100' : 'text-stone-500'}`}>
                {tab.sub}
              </span>
            </button>
          );
        })}
      </div>

      {/* Content views */}
      <AnimatePresence mode="wait">
        {activeSubTab === 'sajatiya' && (
          <motion.div
            key="sajatiya"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Guide Strip */}
            <div className="p-3 bg-amber-50 border border-amber-200 text-amber-900 text-xs font-serif leading-relaxed rounded-md">
              {lt(
                '📜 Interactive Classroom Poster: This layout mimics authentic printed Kannada school posters. Click any double-consonant block below to hear its pronunciation, break down its parts, and view vocabulary examples!',
                '📜 संवादात्मक पाठ्य पोस्टर: यह कन्नड़ प्राथमिक कक्षाओं के पोस्टर के समान बनाया गया है। वर्ण के विखंडन, वास्तविक कन्नड़ शब्द उदाहरण और ध्वनि के लिए किसी भी वर्ण बॉक्स पर क्लिक करें!'
              )}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
              {/* Left Column: Poster Canvas */}
              <div className="xl:col-span-7 flex flex-col items-center w-full">
                <div className="w-full bg-[#FCF9F2] border-2 border-dashed border-[#2D2926]/40 rounded-3xl p-6 md:p-8 shadow-sm relative select-none">
                  {/* Decorative dashed pinholes / design accent */}
                  <div className="absolute top-3 left-4 right-4 flex justify-between text-[#2D2926]/30 text-[10px] font-mono tracking-widest uppercase">
                    <span>Kannada Dwitva Chart</span>
                    <span>ದ್ವಿತ್ವಾಕ್ಷರ</span>
                  </div>

                  {/* Poster Title */}
                  <div className="text-center mt-4 mb-8">
                    <h2 className="text-3xl md:text-4xl font-serif font-black text-[#2D2926] tracking-wide inline-block border-b-4 border-double border-[#2D2926] pb-1.5 px-4">
                      ಒತ್ತಕ್ಷರಗಳು
                    </h2>
                    <p className="text-[10px] md:text-xs font-serif tracking-widest text-stone-500 uppercase mt-1">
                      {lt('The Kannada Consonant Subscript Poster', 'कन्नड़ वर्णमाला सबस्क्रिप्ट चार्ट')}
                    </p>
                  </div>

                  {/* The Poster Grid */}
                  <div className="space-y-3">
                    {POSTER_ROWS.map((row, rIndex) => (
                      <div key={rIndex} className="grid grid-cols-5 gap-2 md:gap-3 justify-center items-center">
                        {row.map((char) => {
                          const details = POSTER_DETAILS_MAP[char];
                          const isSelected = posterSelected === char;
                          if (!details) return null;

                          return (
                            <button
                              key={char}
                              onClick={() => {
                                setPosterSelected(char);
                                speakText(details.doubleChar);
                              }}
                              className={`w-full py-2.5 px-1 sm:px-1.5 min-h-[4.5rem] sm:min-h-[5.5rem] flex flex-col items-center justify-center gap-1.5 border rounded-xl transition-all duration-300 relative ${
                                isSelected
                                  ? 'border-[#7B241C] bg-[#7B241C]/5 ring-2 ring-[#7B241C]/50 shadow-md scale-105'
                                  : 'border-stone-200 bg-white hover:border-stone-800 hover:shadow-xs'
                              }`}
                            >
                              {/* Giant double consonant letter */}
                              <span className={`font-serif font-bold text-xl sm:text-2xl md:text-3xl leading-none transition-colors ${
                                isSelected ? 'text-[#7B241C]' : 'text-stone-800'
                              }`}>
                                {details.doubleChar}
                              </span>

                              {/* Tiny sub-caption/transliteration */}
                              <span className="text-[9px] md:text-[10px] font-mono font-medium text-stone-400 uppercase leading-none block">
                                {details.trans}
                              </span>

                              {/* Top-right index dot for categorization */}
                              <span className={`absolute top-1 right-1 w-1.5 h-1.5 rounded-full ${
                                details.category === 'different'
                                  ? 'bg-rose-500'
                                  : details.category === 'modified'
                                  ? 'bg-amber-500'
                                  : 'bg-emerald-500'
                              }`} title={`Category: ${details.category}`} />
                            </button>
                          );
                        })}
                        {/* Fill the empty slot for Row 6 (Avargiya) to align perfectly like the image */}
                        {row.length === 4 && (
                          <div className="w-full py-2.5 px-1 sm:px-1.5 min-h-[4.5rem] sm:min-h-[5.5rem] opacity-10 border border-dashed border-stone-200 rounded-xl" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Footnotes / Color coding guide */}
                  <div className="mt-8 pt-4 border-t border-stone-200/50 flex flex-wrap gap-4 justify-center text-[9px] md:text-[10px] font-sans font-semibold text-stone-500">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span>{lt('Symmetrical (No Shape Change)', 'सममित (समान आकृति)')}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <span>{lt('Modified (Talakattu removed)', 'परिवर्तित रूप')}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <span>{lt('Completely Unique Shape', 'पूर्णतः भिन्न अनोखी आकृति')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Spotlight Details */}
              <div className="xl:col-span-5 w-full">
                {(() => {
                  const details = POSTER_DETAILS_MAP[posterSelected];
                  if (!details) return null;

                  return (
                    <div className="bg-white border-2 border-stone-800 p-6 shadow-[4px_4px_0px_0px_rgba(45,41,38,1)] flex flex-col justify-between h-full space-y-6">
                      <div className="space-y-4">
                        <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest font-mono block">
                          {lt('Letter Spotlight', 'चयनित वर्ण विखंडन')}
                        </span>

                        {/* Mega giant rendering container */}
                        <div className="h-40 flex flex-col items-center justify-center relative bg-stone-100/50 border border-stone-200 p-4 rounded-xl shadow-inner group">
                          <span className="text-8xl font-serif text-[#2D2926] leading-none block filter drop-shadow-xs">
                            {details.doubleChar}
                          </span>

                          <button
                            onClick={() => speakText(details.doubleChar)}
                            className="absolute bottom-3 right-3 p-2 bg-stone-900 hover:bg-black text-white hover:text-white cursor-pointer rounded-full transition-colors shadow-sm flex items-center justify-center"
                            title={lt('Hear merged sound', 'संयुक्त ध्वनि सुनें')}
                          >
                            <Volume2 className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Visual Equation Formula */}
                        <div className="space-y-2 border-t border-b border-stone-100 py-3 text-center">
                          <div className="text-lg font-serif font-bold text-stone-700 flex items-center justify-center gap-2">
                            <span className="px-2 py-0.5 bg-stone-100 border rounded-md text-stone-900">{details.char}</span>
                            <span className="text-stone-400 font-mono">+</span>
                            <span className="px-2 py-0.5 bg-stone-100 border rounded-md text-stone-900">◌್</span>
                            <span className="text-stone-400 font-mono">+</span>
                            <span className="px-2 py-0.5 bg-stone-100 border rounded-md text-stone-900">{details.char}</span>
                            <span className="text-stone-400 font-mono">=</span>
                            <span className="px-2 py-0.5 bg-[#7B241C]/5 border border-[#7B241C]/25 text-[#7B241C] font-black">{details.doubleChar}</span>
                          </div>
                          <p className="text-[10px] text-stone-400 font-mono uppercase">
                            {lt('Consonant + Virama + Consonant = Dwitva Conjunct', 'मुख्य व्यंजन + हलंत + समान व्यंजन = द्वित्वाक्षर')}
                          </p>
                        </div>

                        {/* Details card */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                              details.category === 'different'
                                ? 'bg-rose-100 text-rose-800 border border-rose-200'
                                : details.category === 'modified'
                                ? 'bg-amber-100 text-amber-800 border border-amber-200'
                                : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            }`}>
                              {lt(details.category + ' Shape', details.category === 'different' ? 'अलग आकृति' : details.category === 'modified' ? 'परिवर्तित रूप' : 'समरूप आकृति')}
                            </span>
                            <span className="text-xs font-mono font-semibold text-stone-500">
                              {details.name} &mdash; {details.trans.toUpperCase()}
                            </span>
                          </div>

                          <p className="text-xs font-serif text-[#2D2926]/80 leading-relaxed pt-1">
                            {lt(details.descriptionEn, details.descriptionHi)}
                          </p>
                        </div>

                        {/* Word Example Analogy */}
                        <div className="bg-[#7B241C]/5 border border-[#7B241C]/20 p-3 rounded-xl space-y-2">
                          <div className="flex items-center gap-1.5 text-[#7B241C]">
                            <Lightbulb className="h-4 w-4" />
                            <span className="text-[10px] font-bold tracking-wider uppercase font-mono">{lt('Vocabulary Analogy', 'शब्द उपयोग उदाहरण')}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-2xl font-serif font-black text-[#2D2926] leading-none">
                                {details.exampleWord}
                              </p>
                              <p className="text-xs font-mono text-stone-500 mt-1 leading-none">
                                {details.exampleTrans} &mdash; <span className="font-serif font-bold text-stone-700 italic">{lt(details.exampleMeaningEn, details.exampleMeaningHi)}</span>
                              </p>
                            </div>
                            <button
                              onClick={() => speakText(details.exampleWord)}
                              className="px-2.5 py-1.5 bg-white border border-stone-200 hover:border-stone-800 text-[#7B241C] cursor-pointer rounded-lg text-xs font-bold font-mono uppercase flex items-center gap-1.5 transition-colors"
                            >
                              <Volume2 className="h-3.5 w-3.5" />
                              <span>{lt('Listen', 'सुनें')}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </motion.div>
        )}

        {activeSubTab === 'vijatiya' && (
          <motion.div
            key="vijatiya"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Guide Strip */}
            <div className="p-3 bg-cyan-50 border border-cyan-200 text-cyan-900 text-xs font-serif leading-relaxed rounded-md">
              {lt(
                '✨ Vijātīya (ವಿಜಾತೀಯ ಸಂಯುಕ್ತಾಕ್ಷರ): These are conjoined letters where different consonants are merged together (e.g., k + y = kya). In Kannada, arbitrary combinations do not make linguistic sense. Schools only teach meaningful words found in literature and textbooks. Click any curated school vocabulary word below to study its structure!',
                '✨ विजातीय संयुक्ताक्षर: ये वे वर्ण हैं जहाँ दो अलग-अलग व्यंजनों का आपस में मेल होता है (जैसे: त + य = ತ್ಯ)। कन्नड़ भाषा में मनमाने मेल निरर्थक होते हैं, इसलिए स्कूलों में केवल प्रामाणिक और साहित्यिक शब्द ही सिखाए जाते हैं। नीचे दिए गए किसी भी शब्द पर क्लिक करके उसका वर्ण विच्छेद और शुद्ध उच्चारण देखें!'
              )}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
              {/* Left Column: Curated List */}
              <div className="xl:col-span-7 space-y-4 w-full">
                <label className="text-xs uppercase tracking-wider font-bold text-[#2D2926]/80 font-mono block">
                  {lt('Select a Standard School Word', 'पाठ्यक्रम से एक प्रामाणिक शब्द चुनें')}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {VIJATIYA_WORDS.map((combo, index) => {
                    const isSelected = vijatiyaIndex === index;
                    return (
                      <button
                        key={combo.word}
                        onClick={() => {
                          setVijatiyaIndex(index);
                          speakText(combo.word);
                        }}
                        className={`p-4 text-left border rounded-2xl transition-all duration-300 cursor-pointer flex flex-col gap-2 relative ${
                          isSelected
                            ? 'border-[#7B241C] bg-[#7B241C]/5 shadow-sm scale-[1.02] ring-2 ring-[#7B241C]/30'
                            : 'border-stone-200 bg-white hover:border-stone-800'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className={`font-serif font-black text-2xl ${isSelected ? 'text-[#7B241C]' : 'text-stone-800'}`}>
                            {combo.word}
                          </span>
                          <span className="text-xs font-mono font-bold text-[#7B241C] bg-[#7B241C]/10 px-2 py-0.5 rounded-md">
                            {combo.base} + {combo.sub}
                          </span>
                        </div>
                        <div>
                          <p className="text-xs font-mono text-stone-500">
                            {combo.trans} &mdash; <span className="font-sans font-bold text-stone-700 italic">{lt(combo.meaningEn, combo.meaningHi)}</span>
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Visual Spotlight Details */}
              <div className="xl:col-span-5 w-full">
                {(() => {
                  const combo = VIJATIYA_WORDS[vijatiyaIndex];
                  if (!combo) return null;

                  return (
                    <div className="bg-white border-2 border-stone-800 p-6 shadow-[4px_4px_0px_0px_rgba(45,41,38,1)] flex flex-col justify-between h-full space-y-6">
                      <div className="space-y-4">
                        <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest font-mono block">
                          {lt('Word Breakdown Spotlight', 'चयनित शब्द विश्लेषण')}
                        </span>

                        {/* Mega giant word rendering */}
                        <div className="h-40 flex flex-col items-center justify-center relative bg-stone-100/50 border border-stone-200 p-4 rounded-xl shadow-inner">
                          <span className="text-6xl font-serif text-[#2D2926] font-black leading-none block">
                            {combo.word}
                          </span>

                          <button
                            onClick={() => speakText(combo.word)}
                            className="absolute bottom-3 right-3 p-2 bg-stone-900 hover:bg-black text-white hover:text-white cursor-pointer rounded-full transition-colors shadow-sm flex items-center justify-center"
                            title={lt('Hear word pronunciation', 'शब्द उच्चारण सुनें')}
                          >
                            <Volume2 className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Visual Equation Formula */}
                        <div className="space-y-2 border-t border-b border-stone-100 py-3 text-center">
                          <div className="text-lg font-serif font-bold text-stone-700 flex items-center justify-center gap-2">
                            <span className="px-2 py-0.5 bg-stone-100 border rounded-md text-stone-900">{combo.base}</span>
                            <span className="text-stone-400 font-mono">+</span>
                            <span className="px-2 py-0.5 bg-stone-100 border rounded-md text-stone-900">◌್</span>
                            <span className="text-stone-400 font-mono">+</span>
                            <span className="px-2 py-0.5 bg-stone-100 border rounded-md text-stone-900">{combo.sub}</span>
                            <span className="text-stone-400 font-mono">=</span>
                            <span className="px-2 py-0.5 bg-[#7B241C]/5 border border-[#7B241C]/25 text-[#7B241C] font-black">{combo.base}್{combo.sub}</span>
                          </div>
                          <p className="text-[10px] text-stone-400 font-mono uppercase">
                            {lt('Base Consonant + Halant + Different Consonant = Vijatiya Conjunct', 'मुख्य व्यंजन + हलंत + भिन्न व्यंजन = विजातीय संयुक्ताक्षर')}
                          </p>
                        </div>

                        {/* Formula text */}
                        <div className="space-y-1 text-xs font-mono text-stone-600">
                          <div className="flex justify-between">
                            <span className="text-stone-400">{lt('Formula:', 'सूत्र:')}</span>
                            <span className="font-serif font-bold text-[#2D2926]">{combo.formula}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-stone-400">{lt('Meaning:', 'अर्थ:')}</span>
                            <span className="font-sans font-bold text-[#7B241C]">{lt(combo.meaningEn, combo.meaningHi)}</span>
                          </div>
                        </div>

                        {/* Details card */}
                        <div className="space-y-2">
                          <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest font-mono block">
                            {lt('Linguistic Rule / Structure:', 'संरचना और व्याकरण नियम:')}
                          </span>
                          <p className="text-xs font-serif text-[#2D2926]/80 leading-relaxed">
                            {lt(combo.ruleEn, combo.ruleHi)}
                          </p>
                        </div>

                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </motion.div>
        )}

        {activeSubTab === 'arkavattu' && (
          <motion.div
            key="arkavattu"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Guide Strip / Explanation */}
            <div className="bg-amber-50/70 border border-amber-200/60 p-5 rounded-2xl space-y-4">
              <div className="flex gap-3 text-amber-950">
                <div className="mt-0.5">
                  <Lightbulb className="h-5 w-5 text-amber-600 shrink-0" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#2D2926] text-base">
                    {lt('What is Arka-vattu (ಅರ್ಕಾವತ್ತು)?', 'ಅರ್ಕಾವತ್ತು (अर्क-वत्तु) क्या है?')}
                  </h4>
                  <p className="text-sm text-[#2D2926]/85 font-serif mt-1 leading-relaxed">
                    {lt(
                      'In Kannada, when the letter "Ra" (ರ್) comes first in a double consonant cluster (conjoint letter) and is pronounced before another consonant, it is represented by a superscript hook (ರ್) on the top-right of the following consonant. This hook is called "Arkavattu" or "Refe".',
                      'कन्नड़ में, जब "Ra" (ರ್) वर्ण किसी संयुक्त व्यंजन में पहले आता है और उसका उच्चारण अगले व्यंजन से पहले किया जाता है, तो उसे अगले व्यंजन के ऊपर-दाईं ओर एक हुक (ರ್) के रूप में लिखा जाता है। इस हुक को "अर्क-वत्तु" या "रेफ" कहते हैं।'
                    )}
                  </p>
                </div>
              </div>

              {/* Contrast Rule Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-white border border-emerald-100 p-4 rounded-xl space-y-2 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold font-mono text-emerald-800 uppercase tracking-wider">
                      {lt('1. Ra comes SECOND (Praphala)', '1. जब "Ra" बाद में आए (प्रफल)')}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 font-serif leading-relaxed">
                    {lt(
                      'If "Ra" is the second letter in a combination (e.g. p + ra = pra), it sits at the bottom-right as a slash subscript (್ರ) called Praphala.',
                      'यदि "Ra" संयोजन में दूसरा वर्ण है (जैसे: p + ra = pra), तो यह नीचे-दाईं ओर एक तिरछी रेखा (್ರ) के रूप में बैठता है जिसे प्रफल कहते हैं।'
                    )}
                  </p>
                  <div className="bg-emerald-50/50 p-2 border border-emerald-100/50 rounded-lg text-center font-serif text-xs font-bold text-emerald-900">
                    {lt('Formula: ಪ + ◌್ + ರ = ಪ್ರ (Pra)', 'सूत्र: ಪ + ◌್ + ರ = ಪ್ರ (Pra)')}
                  </div>
                </div>

                <div className="bg-white border border-amber-200 p-4 rounded-xl space-y-2 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-xs font-bold font-mono text-amber-800 uppercase tracking-wider">
                      {lt('2. Ra comes FIRST (Arkavattu)', '2. जब "Ra" पहले आए (अर्क-वत्तु)')}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 font-serif leading-relaxed">
                    {lt(
                      'If "Ra" is the first letter in a combination (e.g. r + ya = rya), it is placed on top of the next letter as a hook (ರ್) called Arkavattu.',
                      'यदि "Ra" संयोजन में पहला वर्ण है (जैसे: r + ya = rya), तो इसे अगले वर्ण के ऊपर एक हुक (ರ್) के रूप में रखा जाता है जिसे अर्क-वत्तु कहते हैं।'
                    )}
                  </p>
                  <div className="bg-amber-50/50 p-2 border border-amber-200/50 rounded-lg text-center font-serif text-xs font-bold text-amber-900">
                    {lt('Formula: ರ್ + ಯ = ರ್ಯ (Rya)', 'सूत्र: ರ್ + ಯ = ರ್ಯ (Rya)')}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
              {/* Left Column: Curated Arkavattu List */}
              <div className="xl:col-span-7 space-y-4 w-full">
                <label className="text-xs uppercase tracking-wider font-bold text-[#2D2926]/80 font-mono block">
                  {lt('Explore Common Arkavattu Examples', 'सामान्य अर्क-वत्तु उदाहरणों का अभ्यास करें')}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ARKAVATTU_WORDS.map((combo, index) => {
                    const isSelected = arkavattuIndex === index;
                    return (
                      <button
                        key={combo.word}
                        onClick={() => {
                          setArkavattuIndex(index);
                          speakText(combo.word);
                        }}
                        className={`p-4 text-left border rounded-2xl transition-all duration-300 cursor-pointer flex flex-col gap-2 relative ${
                          isSelected
                            ? 'border-[#7B241C] bg-[#7B241C]/5 shadow-sm scale-[1.02] ring-2 ring-[#7B241C]/30'
                            : 'border-stone-200 bg-white hover:border-stone-800'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className={`font-serif font-black text-2xl ${isSelected ? 'text-[#7B241C]' : 'text-stone-800'}`}>
                            {combo.word}
                          </span>
                          <span className="text-xs font-mono font-bold text-[#7B241C] bg-[#7B241C]/10 px-2 py-0.5 rounded-md">
                            {combo.base} + {combo.sub}
                          </span>
                        </div>
                        <div>
                          <p className="text-xs font-mono text-stone-500">
                            {combo.trans} &mdash; <span className="font-sans font-bold text-stone-700 italic">{lt(combo.meaningEn, combo.meaningHi)}</span>
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Visual Spotlight Details */}
              <div className="xl:col-span-5 w-full">
                {(() => {
                  const combo = ARKAVATTU_WORDS[arkavattuIndex];
                  if (!combo) return null;

                  return (
                    <div className="bg-white border-2 border-stone-800 p-6 shadow-[4px_4px_0px_0px_rgba(45,41,38,1)] flex flex-col justify-between h-full space-y-6">
                      <div className="space-y-4">
                        <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest font-mono block">
                          {lt('Arkavattu Word Breakdown', 'अर्क-वत्तु शब्द विश्लेषण')}
                        </span>

                        {/* Mega giant word rendering */}
                        <div className="h-40 flex flex-col items-center justify-center relative bg-stone-100/50 border border-stone-200 p-4 rounded-xl shadow-inner">
                          <span className="text-6xl font-serif text-[#2D2926] font-black leading-none block">
                            {combo.word}
                          </span>

                          <button
                            onClick={() => speakText(combo.word)}
                            className="absolute bottom-3 right-3 p-2 bg-stone-900 hover:bg-black text-white hover:text-white cursor-pointer rounded-full transition-colors shadow-sm flex items-center justify-center"
                            title={lt('Hear word pronunciation', 'शब्द उच्चारण सुनें')}
                          >
                            <Volume2 className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Visual Equation Formula */}
                        <div className="space-y-2 border-t border-b border-stone-100 py-3 text-center">
                          <div className="text-lg font-serif font-bold text-stone-700 flex items-center justify-center gap-2">
                            <span className="px-2 py-0.5 bg-stone-100 border rounded-md text-stone-900">{combo.base}</span>
                            <span className="text-stone-400 font-mono">+</span>
                            <span className="px-2 py-0.5 bg-[#7B241C]/5 border border-[#7B241C]/25 text-[#7B241C] font-black">{combo.sub}</span>
                            <span className="text-stone-400 font-mono">=</span>
                            <span className="px-2 py-0.5 bg-[#7B241C]/10 border border-[#7B241C]/30 text-[#7B241C] font-black">{combo.base}{combo.sub}</span>
                          </div>
                          <p className="text-[10px] text-stone-400 font-mono uppercase">
                            {lt('Preceding R (ರ್) + Consonant = Arkavattu Conjunct', 'पूर्ववर्ती र (ರ್) + व्यंजन = अर्क-वत्तु संयुक्ताक्षर')}
                          </p>
                        </div>

                        {/* Formula text */}
                        <div className="space-y-1 text-xs font-mono text-stone-600">
                          <div className="flex justify-between">
                            <span className="text-stone-400">{lt('Breakdown Formula:', 'विच्छेद सूत्र:')}</span>
                            <span className="font-serif font-bold text-[#2D2926]">{combo.formula}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-stone-400">{lt('Meaning:', 'अर्थ:')}</span>
                            <span className="font-sans font-bold text-[#7B241C]">{lt(combo.meaningEn, combo.meaningHi)}</span>
                          </div>
                        </div>

                        {/* Details card */}
                        <div className="space-y-2">
                          <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest font-mono block">
                            {lt('Linguistic Rule / Structure:', 'संरचना और व्याकरण नियम:')}
                          </span>
                          <p className="text-xs font-serif text-[#2D2926]/80 leading-relaxed">
                            {lt(combo.ruleEn, combo.ruleHi)}
                          </p>
                        </div>

                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </motion.div>
        )}

        {/* Word Showcase Tab */}
        {activeSubTab === 'quiz' && (
          <motion.div
            key="practice"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Header intro of showcase */}
            <div className="bg-white border-2 border-[#2D2926] p-6 shadow-[4px_4px_0px_0px_rgba(45,41,38,1)] flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#7B241C] font-mono font-bold block">
                  {lt('📖 AUTHENTIC WORD CATALOGUE', '📖 प्रामाणिक कन्नड़ शब्द संग्रह')}
                </span>
                <h3 className="text-xl font-bold font-serif text-stone-800">
                  {lt('10 Essential Words with Ottakshara', 'ओत्तक्षर (संयुक्ताक्षर) वाले १० महत्वपूर्ण शब्द')}
                </h3>
                <p className="text-xs text-stone-500 font-serif leading-relaxed">
                  {lt(
                    'Explore realistic, everyday vocabulary showing how consonants double (Sajātīya) or merge with other sounds (Vijātīya/Arkavattu). Click the sound icon to hear native pronunciation.',
                    'दैनिक जीवन के १० वास्तविक शब्दों को देखें जो यह दर्शाते हैं कि कैसे व्यंजन द्वित्व (सजातीय) बनते हैं या अन्य ध्वनियों (विजातीय/अर्कवत्तु) के साथ जुड़ते हैं। उच्चारण सुनने के लिए ध्वनि चिह्न पर क्लिक करें।'
                  )}
                </p>
              </div>

              {/* Showcase Controls */}
              <div className="flex flex-col sm:flex-row gap-2 shrink-0 w-full md:w-auto">
                <button
                  onClick={generateNewSet}
                  className="px-4 py-2 text-xs font-extrabold font-sans uppercase tracking-wider bg-[#7B241C] hover:bg-[#922B21] text-white border-2 border-[#2D2926] rounded-lg cursor-pointer transition-all flex items-center justify-center gap-2 shadow-[2px_2px_0px_0px_rgba(45,41,38,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(45,41,38,1)] select-none"
                  title={lt('Load another 10 random words', 'अन्य १० यादृच्छिक शब्द लोड करें')}
                >
                  <RefreshCw className="h-3.5 w-3.5 animate-spin-once" />
                  {lt('Generate Another Set', 'नए १० शब्द लोड करें')}
                </button>

                <button
                  onClick={() => {
                    speakText(showcaseWords.map(w => w.word).join(', '));
                  }}
                  className="px-4 py-2 text-xs font-bold font-sans uppercase tracking-wider bg-stone-100 hover:bg-stone-200 border-2 border-stone-300 text-stone-700 hover:text-stone-900 rounded-lg cursor-pointer transition-all flex items-center justify-center gap-2 shrink-0 select-none"
                >
                  <Volume2 className="h-4 w-4 text-[#7B241C]" />
                  {lt('Pronounce All Words', 'सभी शब्दों का उच्चारण सुनें')}
                </button>
              </div>
            </div>

            {/* Filter and Mode controls */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-[#FFF9EB] p-4 border-2 border-[#2D2926] rounded-xl">
              {/* Filter buttons */}
              <div className="flex flex-wrap gap-1.5 p-1 bg-[#F5EFEB]/40 border border-[#2D2926]/20 rounded-lg">
                {[
                  { id: 'all', label: lt('🌟 All 10 Words', '🌟 सभी १० शब्द') },
                  { id: 'simple', label: lt('🟢 Simple Level', '🟢 सरल स्तर') },
                  { id: 'medium', label: lt('🟡 Medium Level', '🟡 मध्यम स्तर') },
                  { id: 'complex', label: lt('🔴 Complex Level', '🔴 कठिन स्तर') }
                ].map((filter) => {
                  const isActive = wordDifficultyFilter === filter.id;
                  return (
                    <button
                      key={filter.id}
                      onClick={() => setWordDifficultyFilter(filter.id as any)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold font-sans cursor-pointer transition-all duration-200 ${
                        isActive
                          ? 'bg-[#7B241C] text-white shadow-sm'
                          : 'text-[#2D2926]/80 hover:text-[#2D2926] hover:bg-[#F5EFEB]/60'
                      }`}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>

              {/* Quiz / Study Mode Toggle */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-stone-500 uppercase">{lt('Study Mode:', 'अध्ययन मोड:')}</span>
                <div className="flex border border-[#2D2926] p-0.5 bg-[#F5EFEB] rounded">
                  <button
                    onClick={() => {
                      setQuizMode(true);
                      setRevealedWords({}); // reset individuals
                    }}
                    className={`px-3 py-1 text-xs font-mono font-bold uppercase transition-all cursor-pointer rounded-sm flex items-center gap-1 ${
                      quizMode ? 'bg-[#7B241C] text-white' : 'text-[#2D2926]/70 hover:text-[#2D2926]'
                    }`}
                    title={lt('Hide details so you can guess the pronunciation and meaning first', 'विवरण छिपाएं ताकि आप पहले उच्चारण और अर्थ का अनुमान लगा सकें')}
                  >
                    <EyeOff className="h-3.5 w-3.5" />
                    <span>{lt('Quiz (Hidden)', 'क्विज़ (छिपा हुआ)')}</span>
                  </button>
                  <button
                    onClick={() => {
                      setQuizMode(false);
                      // reveal all
                      const updated: Record<string, boolean> = {};
                      showcaseWords.forEach(w => {
                        updated[w.word] = true;
                      });
                      setRevealedWords(updated);
                    }}
                    className={`px-3 py-1 text-xs font-mono font-bold uppercase transition-all cursor-pointer rounded-sm flex items-center gap-1 ${
                      !quizMode ? 'bg-[#7B241C] text-white' : 'text-[#2D2926]/70 hover:text-[#2D2926]'
                    }`}
                    title={lt('Show all pronunciation keys, formulas, and translations immediately', 'सभी उच्चारण कुंजियाँ, सूत्र और अनुवाद तुरंत दिखाएं')}
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>{lt('Study (Show)', 'अध्ययन (दिखाएं)')}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Words Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {showcaseWords.filter(w => wordDifficultyFilter === 'all' || w.difficulty === wordDifficultyFilter).map((item) => {
                const isWordRevealed = !quizMode || !!revealedWords[item.word];
                return (
                  <motion.div
                    key={item.word}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white border-2 border-[#2D2926] rounded-xl p-5 shadow-[4px_4px_0px_0px_rgba(45,41,38,1)] flex flex-col justify-between hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200 min-h-[300px]"
                  >
                    <div className="space-y-4 flex flex-col h-full justify-between">
                      {/* Badge and Speaker */}
                      <div className="flex justify-between items-center select-none">
                        <span className={`px-2.5 py-0.5 text-[9px] font-bold font-mono uppercase tracking-wider rounded-full border ${
                          item.difficulty === 'simple'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            : item.difficulty === 'medium'
                            ? 'bg-amber-50 text-amber-800 border-amber-200'
                            : 'bg-rose-50 text-rose-800 border-rose-200'
                        }`}>
                          {lt(item.difficultyEn, item.difficultyHi)}
                        </span>

                        <div className="flex items-center gap-2">
                          {quizMode && isWordRevealed && (
                            <button
                              onClick={() => {
                                setRevealedWords(prev => ({ ...prev, [item.word]: false }));
                              }}
                              className="px-2 py-1 text-[10px] font-mono font-bold text-[#7B241C] hover:underline flex items-center gap-1 cursor-pointer"
                              title={lt('Hide details again', 'विवरण फिर से छिपाएं')}
                            >
                              <EyeOff className="h-3 w-3" />
                              <span>{lt('Hide', 'छिपाएं')}</span>
                            </button>
                          )}

                          {isWordRevealed && (
                            <button
                              onClick={() => speakText(item.word)}
                              className="p-2 bg-[#F5EFEB]/55 hover:bg-[#7B241C] text-[#2D2926] hover:text-white rounded-full transition-all cursor-pointer shadow-xs flex items-center justify-center border border-[#2D2926]/10"
                              title={lt('Pronounce word', 'उच्चारण सुनें')}
                            >
                              <Volume2 className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                      </div>

                      {isWordRevealed ? (
                        <>
                          {/* Word rendering */}
                          <div className="text-center md:text-left space-y-1">
                            <div className="flex items-center justify-center md:justify-start gap-2">
                              <span className="text-4xl font-serif font-black text-stone-900 tracking-wide select-all">
                                {item.word}
                              </span>
                            </div>
                            <p className="text-sm font-sans font-bold text-stone-500">
                              {item.trans} &mdash; <span className="text-[#7B241C] font-semibold">{lt(item.meaningEn, item.meaningHi)}</span>
                            </p>
                          </div>

                          {/* Syllabus Breakup Recipe */}
                          <div className="bg-[#F5EFEB]/35 p-3 border border-[#2D2926]/10 rounded-lg space-y-2">
                            <div>
                              <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest font-mono block select-none">
                                {lt('Spelling Breakup Recipe:', 'वर्ण विच्छेद सूत्र:')}
                              </span>
                              <p className="text-xs font-serif font-extrabold text-[#7B241C] tracking-wider mt-0.5">
                                {item.formula}
                              </p>
                            </div>

                            {/* Sequential bubble helper flow */}
                            <div className="flex flex-wrap items-center gap-1.5 pt-1">
                              <span className="text-[9px] text-stone-400 font-mono mr-1 select-none">{lt('Type flow:', 'टाइपिंग क्रम:')}</span>
                              {item.sequence.map((char: string, sIdx: number) => (
                                <React.Fragment key={sIdx}>
                                  <span className="px-1.5 py-0.5 bg-white border border-stone-200 font-serif font-extrabold text-xs text-stone-800 rounded">
                                    {char}
                                  </span>
                                  {sIdx < item.sequence.length - 1 && <span className="text-stone-300 font-mono text-[9px]">→</span>}
                                </React.Fragment>
                              ))}
                            </div>
                          </div>

                          {/* Linguistic Structure description */}
                          <div className="mt-4 pt-3 border-t border-stone-100 flex gap-1.5 text-xs font-serif leading-relaxed text-stone-600">
                            <Lightbulb className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                            <div>
                              <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest font-mono block select-none">
                                {lt('Structure Detail:', 'संरचना विस्तार:')}
                              </span>
                              <p className="mt-0.5">{lt(item.explanationEn, item.explanationHi)}</p>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Word rendering */}
                          <div className="text-center md:text-left py-2">
                            <div className="flex items-center justify-center md:justify-start gap-2">
                              <span className="text-4xl font-serif font-black text-stone-900 tracking-wide select-all">
                                {item.word}
                              </span>
                            </div>
                          </div>

                          {/* Reveal Interactive Overlay Box */}
                          <div className="flex-1 flex flex-col justify-center items-center py-5 px-3 bg-[#FFF9EB]/30 border-2 border-dashed border-[#2D2926]/30 rounded-lg text-center space-y-3 mt-3">
                            <HelpCircle className="h-7 w-7 text-[#7B241C]/60" />
                            <p className="text-xs text-stone-600 font-serif max-w-[240px]">
                              {lt(
                                'Try pronouncing this word first! Check your spelling recipe and translation.',
                                'पहले इस शब्द का उच्चारण करने का प्रयास करें! फिर वर्तनी सूत्र और अनुवाद की जांच करें।'
                              )}
                            </p>
                            <button
                              onClick={() => {
                                setRevealedWords(prev => ({ ...prev, [item.word]: true }));
                                speakText(item.word);
                              }}
                              className="w-full py-2 px-4 bg-[#7B241C] hover:bg-[#922B21] text-white border-2 border-[#2D2926] rounded-lg cursor-pointer transition-all flex items-center justify-center gap-2 font-bold font-sans uppercase text-xs shadow-[2px_2px_0px_0px_rgba(45,41,38,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(45,41,38,1)] select-none"
                            >
                              <Eye className="h-3.5 w-3.5" />
                              <span>{lt('Reveal & Pronounce', 'उत्तर प्रकट करें और सुनें')}</span>
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
