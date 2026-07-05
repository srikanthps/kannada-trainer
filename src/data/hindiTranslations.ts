/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface HindiCharacterTranslation {
  hindiSymbol: string;
  hindiSubCategory: string;
  hindiPronunciationHint: string;
  hindiExamples: {
    kannadaWord: string;
    transliteration: string;
    meaning: string;
  }[];
}

export const HINDI_ALPHABET_MAP: Record<string, HindiCharacterTranslation> = {
  swara_1: {
    hindiSymbol: "अ",
    hindiSubCategory: "ह्रस्व स्वर (लघु स्वर)",
    hindiPronunciationHint: "हिंदी स्वर 'अ' जैसी छोटी व सामान्य ध्वनि (जैसे 'अमर' में)। हल्के और तेज़ स्वर का अभ्यास करें।",
    hindiExamples: [
      { kannadaWord: "ಅರಸ", transliteration: "Arasa", meaning: "राजा (King)" },
      { kannadaWord: "ಅಮ್ಮ", transliteration: "Amma", meaning: "माता / माँ (Mother)" },
      { kannadaWord: "ಅಳಿಲು", transliteration: "Alilu", meaning: "गिलहरी (Squirrel)" }
    ]
  },
  swara_2: {
    hindiSymbol: "आ",
    hindiSubCategory: "दीर्घ स्वर (लंबा स्वर)",
    hindiPronunciationHint: "हिंदी स्वर 'आ' जैसी लंबी और खींची हुयी ध्वनि (जैसे 'आज' या 'आम' में)।",
    hindiExamples: [
      { kannadaWord: "ಆನೆ", transliteration: "Aane", meaning: "हाथी (Elephant)" },
      { kannadaWord: "ಆಟ", transliteration: "Aata", meaning: "खेल / क्रीड़ा (Game / Play)" },
      { kannadaWord: "ಆಕಾಶ", transliteration: "Aakaasha", meaning: "आकाश (Sky)" }
    ]
  },
  swara_3: {
    hindiSymbol: "इ",
    hindiSubCategory: "ह्रस्व स्वर (लघु स्वर)",
    hindiPronunciationHint: "हिंदी स्वर 'इ' जैसी छोटी और त्वरित ध्वनि (जैसे 'इमली' या 'इधर' में)।",
    hindiExamples: [
      { kannadaWord: "ಇಲಿ", transliteration: "Ili", meaning: "चूहा (Rat / Mouse)" },
      { kannadaWord: "ಇಟ್ಟಿಗೆ", transliteration: "Ittige", meaning: "ईंट (Brick)" },
      { kannadaWord: "ಇನಿಧನಿ", transliteration: "Inidhani", meaning: "मधुर ध्वनि (Sweet melody)" }
    ]
  },
  swara_4: {
    hindiSymbol: "ई",
    hindiSubCategory: "दीर्घ स्वर (लंबा स्वर)",
    hindiPronunciationHint: "हिंदी स्वर 'ई' जैसी लंबी ध्वनि (जैसे 'ईंट' या 'ईश्वर' में)।",
    hindiExamples: [
      { kannadaWord: "ಈಜು", transliteration: "Eeju", meaning: "तैरना (Swim)" },
      { kannadaWord: "ಈಶ್ವರ", transliteration: "Eeshwara", meaning: "भगवान शिव (Lord Shiva)" },
      { kannadaWord: "ಈರುಳ್ಳಿ", transliteration: "Eerulli", meaning: "प्याज़ (Onion)" }
    ]
  },
  swara_5: {
    hindiSymbol: "उ",
    hindiSubCategory: "ह्रस्व स्वर (लघु स्वर)",
    hindiPronunciationHint: "हिंदी स्वर 'उ' जैसी छोटी ध्वनि (जैसे 'उधर' या 'उल्लू' में)।",
    hindiExamples: [
      { kannadaWord: "ಉಗುರು", transliteration: "Uguru", meaning: "नाखून (Fingernail)" },
      { kannadaWord: "ಉಡುಪು", transliteration: "Udupu", meaning: "कपड़े / पोशाक (Dress)" },
      { kannadaWord: "ಉಯ್ಯಾಲೆ", transliteration: "Uyyaale", meaning: "झूला (Swing)" }
    ]
  },
  swara_6: {
    hindiSymbol: "ऊ",
    hindiSubCategory: "दीर्घ स्वर (लंबा स्वर)",
    hindiPronunciationHint: "हिंदी स्वर 'ऊ' जैसी लंबी ध्वनि (जैसे 'ऊपर' या 'ऊधम' में)।",
    hindiExamples: [
      { kannadaWord: "ಊಟ", transliteration: "Oota", meaning: "भोजन / महाभोज (Meal / Feast)" },
      { kannadaWord: "ಊರು", transliteration: "Ooru", meaning: "गाँव / शहर (Village / City)" },
      { kannadaWord: "ಊರುಗೋಲು", transliteration: "Oorugolu", meaning: "लाठी / बैसाखी (Walking stick)" }
    ]
  },
  swara_7: {
    hindiSymbol: "ऋ",
    hindiSubCategory: "ह्रस्व स्वर (स्वरयुक्त ऋ)",
    hindiPronunciationHint: "संस्कृत के 'ऋ' की ध्वनि, जैसे 'ऋषि' या 'कृष्ण' में। स्वर 'रु' और 'रि' का मिला-जुला रूप।",
    hindiExamples: [
      { kannadaWord: "ಋಷಿ", transliteration: "Rushi", meaning: "ऋषि / संन्यासी (Sage / Monk)" },
      { kannadaWord: "ಋತು", transliteration: "Ruthu", meaning: "ऋतु / मौसम (Season)" }
    ]
  },
  swara_8: {
    hindiSymbol: "ऒ / ए (ह्रस्व)",
    hindiSubCategory: "ह्रस्व स्वर (लघु स्वर)",
    hindiPronunciationHint: "लघु 'ए' की ध्वनि। ध्यान दें कि हिंदी में केवल दीर्घ 'ए' होता है, पर कन्नड़ में यह 'ए' छोटा और त्वरित रूप में बोला जाता है (जैसे English के 'get' या 'bed' में)।",
    hindiExamples: [
      { kannadaWord: "ಎಲೆ", transliteration: "Ele", meaning: "पत्ता (Leaf)" },
      { kannadaWord: "ಎತ್ತು", transliteration: "Etthu", meaning: "बैल (Ox / Bull)" },
      { kannadaWord: "ಎಳನೀರು", transliteration: "Elaneeru", meaning: "नारियल पानी (Tender coconut)" }
    ]
  },
  swara_9: {
    hindiSymbol: "ए",
    hindiSubCategory: "दीर्घ स्वर (लंबा स्वर)",
    hindiPronunciationHint: "हिंदी स्वर 'ए' जैसी लंबी और साधारण ध्वनि (जैसे 'एक', 'शेर' या 'केला' में)।",
    hindiExamples: [
      { kannadaWord: "ಏಣಿ", transliteration: "Eeni", meaning: "सीढ़ी (Ladder)" },
      { kannadaWord: "ಏಲಕ್ಕಿ", transliteration: "Eelakki", meaning: "इलायची (Cardamom)" },
      { kannadaWord: "ಏಡಿ", transliteration: "Eedi", meaning: "केकड़ा (Crab)" }
    ]
  },
  swara_10: {
    hindiSymbol: "ऐ",
    hindiSubCategory: "संध्यक्षर (संयुक्त स्वर)",
    hindiPronunciationHint: "हिंदी स्वर 'ऐ' जैसी संयुक्त ध्वनि (जैसे 'ऐनक' या 'मैदान' में)।",
    hindiExamples: [
      { kannadaWord: "ಐದು", transliteration: "Aidu", meaning: "पाँच (Five)" },
      { kannadaWord: "ಐರಾವತ", transliteration: "Airaavatha", meaning: "ऐरावत - इंद्र का सफ़ेद हाथी" },
      { kannadaWord: "ಐಕ್ಯತೆ", transliteration: "Aikyathe", meaning: "एकता / एकजुटता (Unity)" }
    ]
  },
  swara_11: {
    hindiSymbol: "ऒ / ओ (ह्रस्व)",
    hindiSubCategory: "ह्रस्व स्वर (लघु स्वर)",
    hindiPronunciationHint: "लघु 'ओ' की ध्वनि। ध्यान दें कि हिंदी में केवल दीर्घ 'ओ' होता है, पर कन्नड़ में यह 'ओ' छोटा और त्वरित रूप से बोला जाता है (जैसे 'ओले' शब्द को बहुत संक्षिप्त बोलना)।",
    hindiExamples: [
      { kannadaWord: "ಒಲೆ", transliteration: "Ole", meaning: "चूल्हा / तंदूर (Wood Stove)" },
      { kannadaWord: "ಒಂಟೆ", transliteration: "Onte", meaning: "ऊँट (Camel)" },
      { kannadaWord: "ಒಡವೆ", transliteration: "Odave", meaning: "गहने / आभूषण (Jewelry)" }
    ]
  },
  swara_12: {
    hindiSymbol: "ओ",
    hindiSubCategory: "दीर्घ स्वर (लंबा स्वर)",
    hindiPronunciationHint: "हिंदी स्वर 'ओ' जैसी लंबी और पूर्णतः स्थिर ध्वनि (जैसे 'ओस' या 'लोग' में)।",
    hindiExamples: [
      { kannadaWord: "ಓಟ", transliteration: "Oota", meaning: "दौड़ / त्वरित गति (Run / Sprint)" },
      { kannadaWord: "ಓದು", transliteration: "Oodu", meaning: "पढ़ना (Read)" },
      { kannadaWord: "ಓಲೆ", transliteration: "Oole", meaning: "ताड़ का पत्ता / कान की बाली" }
    ]
  },
  swara_13: {
    hindiSymbol: "औ",
    hindiSubCategory: "संध्यक्षर (संयुक्त स्वर)",
    hindiPronunciationHint: "हिंदी स्वर 'औ' जैसी संयुक्त ध्वनि (जैसे 'औषधि' या 'औरत' में)।",
    hindiExamples: [
      { kannadaWord: "ಔಷಧ", transliteration: "Aushadha", meaning: "दवाई / औषधि (Medicine)" },
      { kannadaWord: "ಔತಣ", transliteration: "Authana", meaning: "दावत / भोज (Feast / Banquet)" }
    ]
  },
  yoga_1: {
    hindiSymbol: "अं",
    hindiSubCategory: "अनुस्वार",
    hindiPronunciationHint: "हिंदी के अनुस्वार 'अं' के समान नासिक्य स्वर परिवर्तक ध्वनि (जैसे 'अंग' या 'कंबल' में म/न का संयुक्त रूप)।",
    hindiExamples: [
      { kannadaWord: "ಅಂಗಡಿ", transliteration: "Angadi", meaning: "दुकान (Shop / Store)" },
      { kannadaWord: "ಅಂಜೂರ", transliteration: "Anjoora", meaning: "अंजीर (Fig Fruit)" },
      { kannadaWord: "ಅಂಬಾರಿ", transliteration: "Ambaari", meaning: "अंबारी - हाथी के ऊपर का सजावटी हौदा" }
    ]
  },
  yoga_2: {
    hindiSymbol: "अः",
    hindiSubCategory: "विसर्ग",
    hindiPronunciationHint: "हिंदी के विसर्ग 'अः' जैसी हल्की हकार युक्त सांस छोड़ने वाली ध्वनि (जैसे 'दुःख' में)।",
    hindiExamples: [
      { kannadaWord: "ದುಃಖ", transliteration: "Dukha", meaning: "दुःख / शोक (Sadness / Sorrow)" },
      { kannadaWord: "ಅಂತಃಪುರ", transliteration: "Anthahpura", meaning: "अन्तःपुर - महल के भीतरी कक्ष" }
    ]
  },
  vyanjana_1: {
    hindiSymbol: "क",
    hindiSubCategory: "क-वर्ग (कण्ठ्य - Throat)",
    hindiPronunciationHint: "अल्पप्राण: कण्ठ से उत्पन्न होने वाली बिना झटके की हल्की कौआ-भाषिणी 'क' ध्वनि (जैसे 'कमल' या 'कबूतर' में)।",
    hindiExamples: [
      { kannadaWord: "ಕಮಲ", transliteration: "Kamala", meaning: "कमल का फूल (Lotus Flower)" },
      { kannadaWord: "ಕಣ್ಣು", transliteration: "Kannu", meaning: "आँख (Eye)" },
      { kannadaWord: "ಕಾಗೆ", transliteration: "Kaage", meaning: "कौआ (Crow)" }
    ]
  },
  vyanjana_2: {
    hindiSymbol: "ख",
    hindiSubCategory: "क-वर्ग (कण्ठ्य - Throat)",
    hindiPronunciationHint: "महाप्राण: फेफड़ों से भारी साँस की फूंक के साथ निकलने वाली 'ख' ध्वनि (जैसे 'खजूर' या 'खरगोश' में)।",
    hindiExamples: [
      { kannadaWord: "ಖರ್ಜೂರ", transliteration: "Kharjoora", meaning: "खजूर (Date Fruit)" },
      { kannadaWord: "ಖಡ್ಗ", transliteration: "Khadga", meaning: "तलवार / खड्ग (Sword)" },
      { kannadaWord: "ಖನಿಜ", transliteration: "Khanija", meaning: "खनिज (Mineral)" }
    ]
  },
  vyanjana_3: {
    hindiSymbol: "ग",
    hindiSubCategory: "क-वर्ग (कण्ठ्य - Throat)",
    hindiPronunciationHint: "अल्पप्राण: कण्ठ से उत्पन्न होने वाली हल्की 'ग' ध्वनि (जैसे 'गमला' या 'गाजर' में)।",
    hindiExamples: [
      { kannadaWord: "ಗಡಿಯಾರ", transliteration: "Gadiyaara", meaning: "घड़ी (Clock / Watch)" },
      { kannadaWord: "ಗಿಳಿ", transliteration: "Gili", meaning: "तोता (Parrot)" },
      { kannadaWord: "ಗಣೇಶ", transliteration: "Ganesha", meaning: "गणेश जी (Lord Ganesha)" }
    ]
  },
  vyanjana_4: {
    hindiSymbol: "घ",
    hindiSubCategory: "क-वर्ग (कण्ठ्य - Throat)",
    hindiPronunciationHint: "महाप्राण: कण्ठ से बलपूर्वक प्राणवायु फेंककर निकलने वाली 'घ' ध्वनि (जैसे 'घड़ा' या 'घर' में)।",
    hindiExamples: [
      { kannadaWord: "ಘಂಟೆ", transliteration: "Ghante", meaning: "घंटी / घंटा / समय (Bell / Hour)" },
      { kannadaWord: "ಘಟ", transliteration: "Ghata", meaning: "घड़ा / मिट्टी का घड़ा (Clay Pot)" },
      { kannadaWord: "ಘೋಷಣೆ", transliteration: "Ghooshane", meaning: "घोषणा / नारा (Declaration / Slogan)" }
    ]
  },
  vyanjana_5: {
    hindiSymbol: "ङ",
    hindiSubCategory: "क-वर्ग (अनुनासिक)",
    hindiPronunciationHint: "अनुनासिक: क-वर्ग का पंचमाक्षर नासिक्य ध्वनि। हिंदी के 'गंगा' या 'वाङ्मय' के 'ङ' के समान। स्वतंत्र बहुत दुर्लभ।",
    hindiExamples: [
      { kannadaWord: "ವಾಙ್ಮಯ", transliteration: "Vaangmaya", meaning: "वाङ्मय / साहित्य (Literature)" }
    ]
  },
  vyanjana_6: {
    hindiSymbol: "च",
    hindiSubCategory: "च-वर्ग (तालव्य - Palate)",
    hindiPronunciationHint: "अल्पप्राण: जीभ को तालु से छुड़ाकर निकलने वाली हल्की 'च' ध्वनि (जैसे 'चम्मच' या 'चरखा' में)।",
    hindiExamples: [
      { kannadaWord: "ಚಮಚ", transliteration: "Chamacha", meaning: "चम्मच (Spoon)" },
      { kannadaWord: "ಚಕ್ರ", transliteration: "Chakra", meaning: "चक्र / पहिया (Wheel)" },
      { kannadaWord: "ಚಂದ್ರ", transliteration: "Chandra", meaning: "चाँद / चन्द्रमा (Moon)" }
    ]
  },
  vyanjana_7: {
    hindiSymbol: "छ",
    hindiSubCategory: "च-वर्ग (तालव्य - Palate)",
    hindiPronunciationHint: "महाप्राण: तालव्य महाप्राण, सांस के झटके के साथ हवा निकालने वाली 'छ' ध्वनि (जैसे 'छाता' या 'छत' में)।",
    hindiExamples: [
      { kannadaWord: "ಛತ್ರಿ", transliteration: "Chhatri", meaning: "छाता (Umbrella)" },
      { kannadaWord: "ಛಾಯೆ", transliteration: "Chhaaye", meaning: "परछाई / आभा (Shadow / Hue)" }
    ]
  },
  vyanjana_8: {
    hindiSymbol: "ज",
    hindiSubCategory: "च-वर्ग (तालव्य - Palate)",
    hindiPronunciationHint: "अल्पप्राण: जीभ को तालु से छूकर निकलने वाली हल्की 'ज' ध्वनि (जैसे 'जल' या 'जहाज' में)।",
    hindiExamples: [
      { kannadaWord: "ಜಿಂಕೆ", transliteration: "Jinke", meaning: "हिरण (Deer)" },
      { kannadaWord: "ಜೇನು", transliteration: "Jeenu", meaning: "मधुमक्खी / शहद (Honey)" },
      { kannadaWord: "ಜನ", transliteration: "Jana", meaning: "लोग / जनता (People)" }
    ]
  },
  vyanjana_9: {
    hindiSymbol: "झ",
    hindiSubCategory: "च-वर्ग (तालव्य - Palate)",
    hindiPronunciationHint: "महाप्राण: जीभ को तालु से स्पर्श कराकर साँस के झटके व भारी आवृति के साथ निकलने वाली 'झ' ध्वनि (जैसे 'झरना' में)।",
    hindiExamples: [
      { kannadaWord: "ಝರಿ", transliteration: "Jhari", meaning: "झरना / छोटा जलप्रपात (Water Spring)" },
      { kannadaWord: "ಝೇಂಕಾರ", transliteration: "Jheenkaara", meaning: "झंकार / भिनभिनाहट (Humming / Buzzing)" }
    ]
  },
  vyanjana_10: {
    hindiSymbol: "ञ",
    hindiSubCategory: "च-वर्ग (अनुनासिक)",
    hindiPronunciationHint: "अनुनासिक: च-वर्ग का पंचमाक्षर नासिक्य व्यंजन। जैसे हिंदी के 'चंचल' या 'जंजाल' के 'ञ' के समान।",
    hindiExamples: [
      { kannadaWord: "ಪಂಚಮಿ", transliteration: "Panchami", meaning: "पंचमी तिथि (Fifth lunar day)" }
    ]
  },
  vyanjana_11: {
    hindiSymbol: "ट",
    hindiSubCategory: "ट-वर्ग (मूर्धन्य - Roof)",
    hindiPronunciationHint: "अल्पप्राण: जीभ को थोड़ा पीछे मोड़कर कठोर तालु के शिखर को छूकर निकलने वाली 'ट' ध्वनि (जैसे 'टमाटर' या 'टब' में)।",
    hindiExamples: [
      { kannadaWord: "ಟೊಮೆಟೊ", transliteration: "Tomato", meaning: "टमाटर (Tomato)" },
      { kannadaWord: "ಟೋಪಿ", transliteration: "Toopi", meaning: "टोपी / टोपी (Cap / Hat)" }
    ]
  },
  vyanjana_12: {
    hindiSymbol: "ठ",
    hindiSubCategory: "ट-वर्ग (मूर्धन्य - Roof)",
    hindiPronunciationHint: "महाप्राण: मूर्धन्य स्पर्श और फेफड़ों के प्राणवायु दबाव के साथ निकलने वाली 'ठ' ध्वनि (जैसे 'ठठेरा' या 'पाठ' में)।",
    hindiExamples: [
      { kannadaWord: "ಪಾಠ", transliteration: "Paatha", meaning: "पाठ / अध्याय (Lesson / Chapter)" },
      { kannadaWord: "ಕಂಠ", transliteration: "Kantha", meaning: "कंठ / गला / आवाज़ (Throat / Voice)" }
    ]
  },
  vyanjana_13: {
    hindiSymbol: "ड",
    hindiSubCategory: "ट-वर्ग (मूर्धन्य - Roof)",
    hindiPronunciationHint: "अल्पप्राण: मूर्धन्य स्पर्श के साथ निकलने वाली हल्की 'ड' ध्वनि (जैसे 'डमरू' या 'डंडा' में)।",
    hindiExamples: [
      { kannadaWord: "ಡೋಲು", transliteration: "Doolu", meaning: "ढोल / नगाड़ा (Folk Drum)" },
      { kannadaWord: "ಡಬರಿ", transliteration: "Dabari", meaning: "पारंपरिक पीतल का कॉफी कप (Saucer cup)" }
    ]
  },
  vyanjana_14: {
    hindiSymbol: "ढ",
    hindiSubCategory: "ट-वर्ग (मूर्धन्य - Roof)",
    hindiPronunciationHint: "महाप्राण: मूर्धन्य स्पर्श और फेफड़ों से भारी साँस की फूंक के साथ निकलने वाली 'ढ' ध्वनि (जैसे 'ढक्कन' या 'ढोलक' में)।",
    hindiExamples: [
      { kannadaWord: "ಢಕ್ಕೆ", transliteration: "Dhakke", meaning: "पारंपरिक हाथ का डफ या नगाड़ा" }
    ]
  },
  vyanjana_15: {
    hindiSymbol: "ण",
    hindiSubCategory: "ट-वर्ग (अनुनासिक)",
    hindiPronunciationHint: "अनुनासिक: जीभ को मूर्धा पर टिकाकर नासिक्य द्वार से स्वर संचार करते हुए निकलने वाली 'ण' ध्वनि (जैसे 'वीणा' या 'गुण' में)।",
    hindiExamples: [
      { kannadaWord: "ವೀಣೆ", transliteration: "Veene", meaning: "वीणा - शास्त्रीय वाद्य यंत्र" },
      { kannadaWord: "ಬಾಣ", transliteration: "Baana", meaning: "बाण / तीर (Arrow)" }
    ]
  },
  vyanjana_16: {
    hindiSymbol: "त",
    hindiSubCategory: "त-वर्ग (दंत्य - Teeth)",
    hindiPronunciationHint: "अल्पप्राण: जीभ की नोक को ऊपर के दाँतों की कतार से छुआकर निकलने वाली हल्की 'त' ध्वनि (जैसे 'तरबूज' या 'तबला' में)।",
    hindiExamples: [
      { kannadaWord: "ತರಕಾರಿ", transliteration: "Tharakaari", meaning: "सब्जियाँ (Vegetables)" },
      { kannadaWord: "ತಬಲ", transliteration: "Thabala", meaning: "तबला वाद्य (Tabla drums)" },
      { kannadaWord: "ತಟ್ಟೆ", transliteration: "Thatte", meaning: "थाली / प्लेट (Plate)" }
    ]
  },
  vyanjana_17: {
    hindiSymbol: "थ",
    hindiSubCategory: "त-वर्ग (दंत्य - Teeth)",
    hindiPronunciationHint: "महाप्राण: दंत्य स्पर्श और साँस के भारी दबाव के साथ छोड़ी जाने वाली 'थ' ध्वनि (जैसे 'थाली' या 'रथ' में)।",
    hindiExamples: [
      { kannadaWord: "ರಥ", transliteration: "Ratha", meaning: "रथ / उत्सव रथ (Chariot)" },
      { kannadaWord: "ಪಥ", transliteration: "Pathha", meaning: "मार्ग / रास्ता (Way / Path)" }
    ]
  },
  vyanjana_18: {
    hindiSymbol: "द",
    hindiSubCategory: "त-वर्ग (दंत्य - Teeth)",
    hindiPronunciationHint: "अल्पप्राण: जीभ की नोक को दाँतों से छूकर निकलने वाली कोमल और हल्की 'द' ध्वनि (जैसे 'दरवाजा' या 'दवा' में)।",
    hindiExamples: [
      { kannadaWord: "ದೀಪ", transliteration: "Deepa", meaning: "दीपक / दिया (Oil Lamp)" },
      { kannadaWord: "ಬಾಗಿಲು", transliteration: "Baagilu", meaning: "दरवाजा (Door)" },
      { kannadaWord: "ದೇವಸ್ಥಾನ", transliteration: "Deevasthaana", meaning: "मंदिर (Temple)" }
    ]
  },
  vyanjana_19: {
    hindiSymbol: "ध",
    hindiSubCategory: "त-वर्ग (दंत्य - Teeth)",
    hindiPronunciationHint: "महाप्राण: दाँतों को जीभ से स्पर्श कराकर बलपूर्वक छोड़ी जाने वाली महाप्राण 'ध' ध्वनि (जैसे 'धनुष' या 'धरती' में)।",
    hindiExamples: [
      { kannadaWord: "ಧನಸ್ಸು", transliteration: "Dhanassu", meaning: "धनुष (Archer Bow)" },
      { kannadaWord: "ಧ್ವಜ", transliteration: "Dhwaja", meaning: "ध्वज / झंडा (Flag)" },
      { kannadaWord: "ಧರ್ಮ", transliteration: "Dharma", meaning: "धर्म / नैतिकता / न्याय (Dharma)" }
    ]
  },
  vyanjana_20: {
    hindiSymbol: "न",
    hindiSubCategory: "त-वर्ग (अनुनासिक)",
    hindiPronunciationHint: "अनुनासिक / दंत्य: नासिक्य और दंत्य समन्वय से निकलने वाली 'न' ध्वनि (जैसे 'नदी' या 'नल' में)।",
    hindiExamples: [
      { kannadaWord: "ನವಿಲು", transliteration: "Navilu", meaning: "मोर (Peacock)" },
      { kannadaWord: "ನಕ್ಷತ್ರ", transliteration: "Nakshathra", meaning: "तारा / नक्षत्र (Star)" },
      { kannadaWord: "ನದಿ", transliteration: "Nadi", meaning: "नदी (River)" }
    ]
  },
  vyanjana_21: {
    hindiSymbol: "प",
    hindiSubCategory: "प-वर्ग (ओष्ठ्य - Lips)",
    hindiPronunciationHint: "अल्पप्राण: दोनों होठों को संक्षेप में मिलाकर तथा खोलते हुए निकलने वाली कोमल 'प' ध्वनि (जैसे 'पतंग' या 'पानी' में)।",
    hindiExamples: [
      { kannadaWord: "ಪಾರಿವಾಳ", transliteration: "Paarivaala", meaning: "कबूतर (Pigeon)" },
      { kannadaWord: "ಪುಸ್ತಕ", transliteration: "Pusthaka", meaning: "किताब / पुस्तक (Book)" },
      { kannadaWord: "ಪಟ", transliteration: "Pata", meaning: "पतंग (Kite)" }
    ]
  },
  vyanjana_22: {
    hindiSymbol: "फ",
    hindiSubCategory: "प-वर्ग (ओष्ठ्य - Lips)",
    hindiPronunciationHint: "महाप्राण: दोनों होठों को मिलाकर तथा हवा के तेज़ दबाव झटके से हवा फेंकते हुए निकलने वाली 'फ' ध्वनि (ध्यान दें: यह अंग्रेजी 'F' दंत्य-ओष्ठ्य नहीं है, बल्कि शुद्ध ओष्ठ्य 'फ' है, जैसे 'फल' या 'फूल' में)।",
    hindiExamples: [
      { kannadaWord: "ಫಲ", transliteration: "Phala", meaning: "फल / परिणाम (Fruit / Results)" },
      { kannadaWord: "ಫಣಿ", transliteration: "Phani", meaning: "नाग का फन (Serpent hood)" }
    ]
  },
  vyanjana_23: {
    hindiSymbol: "ब",
    hindiSubCategory: "प-वर्ग (ओष्ठ्य - Lips)",
    hindiPronunciationHint: "अल्पप्राण: दोनों होठों को मिलाकर निकलने वाली हल्की, कोमल 'ब' ध्वनि (जैसे 'बकरी' या 'बस' में)।",
    hindiExamples: [
      { kannadaWord: "ಬಸ್ಸು", transliteration: "Bassu", meaning: "बस (Bus)" },
      { kannadaWord: "ಬಾವಿ", transliteration: "Baavi", meaning: "कुआँ / पानी का कुआँ (Well)" },
      { kannadaWord: "ಬಾಳೆಹಣ್ಣು", transliteration: "Baalehannu", meaning: "केला (Banana)" }
    ]
  },
  vyanjana_24: {
    hindiSymbol: "भ",
    hindiSubCategory: "प-वर्ग (ओष्ठ्य - Lips)",
    hindiPronunciationHint: "महाप्राण: होठों को सटाकर सांस की भारी फेंक व घनी गूंज के साथ निकलने वाली 'भ' ध्वनि (जैसे 'भारत' या 'भजन' में)।",
    hindiExamples: [
      { kannadaWord: "ಭಾರತ", transliteration: "Bhaaratha", meaning: "भारत (India)" },
      { kannadaWord: "ಭಟ", transliteration: "Bhata", meaning: "सैनिक / सिपाही (Soldier)" },
      { kannadaWord: "ಭಾಷೆ", transliteration: "Bhaashe", meaning: "भाषा (Language)" }
    ]
  },
  vyanjana_25: {
    hindiSymbol: "म",
    hindiSubCategory: "प-वर्ग (अनुनासिक)",
    hindiPronunciationHint: "अनुनासिक / ओष्ठ्य: होठों को मिलाकर नाक के छिद्रों से हवा गुजारकर निकलने वाली 'म' ध्वनि (जैसे 'माता' या 'मन' में)।",
    hindiExamples: [
      { kannadaWord: "ಮನೆ", transliteration: "Mane", meaning: "घर / मकान (House)" },
      { kannadaWord: "ಮರ", transliteration: "Mara", meaning: "पेड़ / वृक्ष (Tree)" },
      { kannadaWord: "ಮೀನು", transliteration: "Meenu", meaning: "मछली / मीन (Fish)" }
    ]
  },
  vyanjana_26: {
    hindiSymbol: "य",
    hindiSubCategory: "अंतस्थ / अवर्गीय",
    hindiPronunciationHint: "अर्धस्वर / अंतस्थ: तालु और जीभ के हल्के अविरोध से उत्पन्न होने वाली 'य' ध्वनि (जैसे 'यज्ञ' या 'यश' में)।",
    hindiExamples: [
      { kannadaWord: "ಯಂತ್ರ", transliteration: "Yanthra", meaning: "मशीन / यंत्र / कलपुर्जा (Machine)" },
      { kannadaWord: "ಯುದ್ಧ", transliteration: "Yuddha", meaning: "युद्ध / लड़ाई (War / Combat)" },
      { kannadaWord: "ಯಜ್ಞ", transliteration: "Yajna", meaning: "यज्ञ / हवन अनुष्ठान (Sacrificial fire)" }
    ]
  },
  vyanjana_27: {
    hindiSymbol: "र",
    hindiSubCategory: "अंतस्थ / अवर्गीय",
    hindiPronunciationHint: "लुंठित व्यंजन: जीभ की नोक को हिलाकर कंपन पैदा करके निकलने वाली 'र' ध्वनि (जैसे 'रथ' या 'रात' में)।",
    hindiExamples: [
      { kannadaWord: "ರವಿ", transliteration: "Ravi", meaning: "सूर्य (Sun)" },
      { kannadaWord: "ರಸ್ತೆ", transliteration: "Rasthe", meaning: "सड़क / रास्ता (Road / Street)" },
      { kannadaWord: "ರಂಗೋಲಿ", transliteration: "Rangooli", meaning: "रंगोली - फर्श की सजावट" }
    ]
  },
  vyanjana_28: {
    hindiSymbol: "ल",
    hindiSubCategory: "अंतस्थ / अवर्गीय",
    hindiPronunciationHint: "पार्श्विक व्यंजन: जीभ को मसूड़ों पर स्थिर कर दोनों बगलों से हवा निकाल कर बहने वाली 'ल' ध्वनि (जैसे 'लड़का' या 'लड्डू' में)।",
    hindiExamples: [
      { kannadaWord: "ಲೇಖನಿ", transliteration: "Leekhani", meaning: "कलम / लेखनी (Pen)" },
      { kannadaWord: "ಲಡ್ಡು", transliteration: "Laddu", meaning: "लड्डू (Laddu sweet)" },
      { kannadaWord: "ಲೋಟ", transliteration: "Loota", meaning: "गिलास (Glass)" }
    ]
  },
  vyanjana_29: {
    hindiSymbol: "व",
    hindiSubCategory: "अंतस्थ / अवर्गीय",
    hindiPronunciationHint: "दंतोष्ठ्य अर्धस्वर: निचले होठों को ऊपरी दाँतों के पास लाकर बिना दांत गड़ाए बोली जाने वाली 'व' ध्वनि (जैसे 'वन' या 'विकास' में)।",
    hindiExamples: [
      { kannadaWord: "ವಜ್ರ", transliteration: "Vajra", meaning: "हीरा / वज्र (Diamond)" },
      { kannadaWord: "ವಿಮಾನ", transliteration: "Vimaana", meaning: "हवाई जहाज (Airplane)" },
      { kannadaWord: "ವನ", transliteration: "Vana", meaning: "जंगल / वन (Forest / Woods)" }
    ]
  },
  vyanjana_30: {
    hindiSymbol: "श",
    hindiSubCategory: "ऊष्म / अवर्गीय sibilant",
    hindiPronunciationHint: "तालव्य सीत्कार: जीभ को कोमल तालु के पास ले जाकर मुँह से गर्म वायु छोड़ते हुए उत्पन्न सीटी जैसी 'श' ध्वनि (जैसे 'शलगम' या 'शान' में)।",
    hindiExamples: [
      { kannadaWord: "शಂಖ", transliteration: "Shankha", meaning: "शंख (Conch Shell)" },
      { kannadaWord: "ಶರತ್ಕಾಲ", transliteration: "Sharathkaala", meaning: "शरद ऋतु / पतझड़ (Autumn)" }
    ]
  },
  vyanjana_31: {
    hindiSymbol: "ष",
    hindiSubCategory: "ऊष्म / अवर्गीय retroflex sibilant",
    hindiPronunciationHint: "मूर्धन्य सीत्कार: जीभ को काफी पीछे मोड़कर तालु के ऊपरी कगार को बिना छुए हवा रगड़कर निकाली जाने वाली संस्कृत 'ष' ध्वनि (जैसे 'षट्कोण' या 'ऋषि' के ष में)।",
    hindiExamples: [
      { kannadaWord: "ಷಡ್ಕೋನ", transliteration: "Shadkoona", meaning: "षट्कोण / षट्भुज (Hexagon)" },
      { kannadaWord: "ವಿಷ", transliteration: "Visha", meaning: "विष / ज़हर (Poison)" }
    ]
  },
  vyanjana_32: {
    hindiSymbol: "स",
    hindiSubCategory: "ऊष्म / अवर्गीय dental sibilant",
    hindiPronunciationHint: "दंत्य सीत्कार: दाँतों को सटाकर मसूड़ों के पास से अत्यंत तीव्र हवा निकलने वाली साधारण 'स' ध्वनि (जैसे 'सूरज' या 'सपेरा' में)।",
    hindiExamples: [
      { kannadaWord: "ಸೂರ್ಯ", transliteration: "Soorya", meaning: "सूर्य / सूरज (Sun)" },
      { kannadaWord: "ಸೇಬು", transliteration: "Seebu", meaning: "सेब (Apple Fruit)" },
      { kannadaWord: "ಸಬೂನು", transliteration: "Saboonu", meaning: "साबुन (Cleaning Soap)" }
    ]
  },
  vyanjana_33: {
    hindiSymbol: "ह",
    hindiSubCategory: "ऊष्म / अवर्गीय",
    hindiPronunciationHint: "कण्ठ्य सघोष ऊष्म: फेफड़ों से एकदम स्वतंत्र वायु का रेचन करके कंठ द्वार से निकलने वाली 'ह' ध्वनि (जैसे 'हाथी' या 'हल' में)।",
    hindiExamples: [
      { kannadaWord: "ಹಂಸ", transliteration: "Hamsa", meaning: "हंस पक्षी (Royal Swan)" },
      { kannadaWord: "ಹೂವು", transliteration: "Hoovu", meaning: "फूल / पुष्प (Flower)" },
      { kannadaWord: "ಹಲ್ಲು", transliteration: "Hallu", meaning: "दाँत (Tooth)" }
    ]
  },
  vyanjana_34: {
    hindiSymbol: "ळ / ड़ / 'ळ'",
    hindiSubCategory: "मूर्धन्य पार्श्विक अंतस्थ (Iconic Kannada)",
    hindiPronunciationHint: "मूर्धन्य 'ल' (Retroflex L). मराठी, गुजराती या वैदिक संस्कृत का सुप्रसिद्ध 'ळ' व्यंजन। अपनी जीभ को मोड़कर अचानक आगे झटकते हुए 'ल' बोलने का प्रयास करें (ड़ और ल का मिश्रित अनुभव)।",
    hindiExamples: [
      { kannadaWord: "ಮಳೆ", transliteration: "Male", meaning: "वर्षा / बारिश (Rain)" },
      { kannadaWord: "ಶಾಲೆ", transliteration: "Shaale", meaning: "पाठशाला / स्कूल (School)" },
      { kannadaWord: "ನಳಪಾಕ", transliteration: "Nalapaaka", meaning: "अत्यंत स्वादिष्ट / उत्कृष्ट भोजन (Gourmet masterpiece)" }
    ]
  },
  digit_0: {
    hindiSymbol: "० (Sonne)",
    hindiSubCategory: "अंक (Digit)",
    hindiPronunciationHint: "इसे 'सोंन्ने' (Sonne) कहा जाता है। यह कन्नड़ भाषा में शून्य (0) का सूचक है। दशमलव स्थान-मान व्यवस्था का आधार है।",
    hindiExamples: [
      { kannadaWord: "ಸೊನ್ನೆ", transliteration: "Sonne", meaning: "शून्य / कुछ नहीं (Zero)" }
    ]
  },
  digit_1: {
    hindiSymbol: "१ (Ondu)",
    hindiSubCategory: "अंक (Digit)",
    hindiPronunciationHint: "इसे 'ओन्दु' (Ondu) कहा जाता है। यह कन्नड़ भाषा में संख्या एक (1) का सूचक है। इसका आकार एक घुमावدار स्पाइरल लूप की तरह होता है।",
    hindiExamples: [
      { kannadaWord: "ಒಂದು ಸೇಬು", transliteration: "Ondu Seebu", meaning: "एक सेब (One apple)" },
      { kannadaWord: "ಒಂದು", transliteration: "Ondu", meaning: "एक (One)" }
    ]
  },
  digit_2: {
    hindiSymbol: "२ (Eradu)",
    hindiSubCategory: "अंक (Digit)",
    hindiPronunciationHint: "इसे 'एरडु' (Eradu) कहा जाता. यह संख्या दो (2) का सूचक है। इसकी रूपरेखा नीचे की तरफ एक घुमावدار पूँछ बनाती है।",
    hindiExamples: [
      { kannadaWord: "ಎರಡು ಕಣ್ಣುಗಳು", transliteration: "Eradu Kannugalu", meaning: "दो आँखें (Two eyes)" },
      { kannadaWord: "ಎರಡು", transliteration: "Eradu", meaning: "दो (Two)" }
    ]
  },
  digit_3: {
    hindiSymbol: "३ (Mooru)",
    hindiSubCategory: "अंक (Digit)",
    hindiPronunciationHint: "इसे 'मूरु' (Mooru) कहा जाता है। यह संख्या तीन (3) को दर्शाता है। यह एक के बाद एक दो लंबवत लहरों जैसा दीखता है।",
    hindiExamples: [
      { kannadaWord: "ಮೂರು ಬಣ್ಣಗಳು", transliteration: "Mooru Bannagalu", meaning: "तीन रंग (Three colors / Tricolor)" },
      { kannadaWord: "ಮೂರು", transliteration: "Mooru", meaning: "तीन (Three)" }
    ]
  },
  digit_4: {
    hindiSymbol: "४ (Naalku)",
    hindiSubCategory: "अंक (Digit)",
    hindiPronunciationHint: "इसे 'नाल्ಕು' (Naalku) कहा जाता है। यह संख्या चार (4) को व्यक्त करता है। इसका आकार अंग्रेज़ी के 'y' अक्षर या दाईं पूँछ वाले लूप जैसा है।",
    hindiExamples: [
      { kannadaWord: "ನಾಲ್ಕು ದಿಕ್ಕುಗಳು", transliteration: "Naalku Dikkugalu", meaning: "चार दिशाएं (Four directions)" },
      { kannadaWord: "ನಾಲ್ಕು", transliteration: "Naalku", meaning: "चार (Four)" }
    ]
  },
  digit_5: {
    hindiSymbol: "೫ (Aidu)",
    hindiSubCategory: "अंक (Digit)",
    hindiPronunciationHint: "इसे 'ऐदु' (Aidu) कहा जाता है। यह संख्या पांच (5) को प्रस्तुत करता है। इसका ढांचा दिखने में कन्नड़ वर्ण 'ಬ' (ब) जैसा है पर ऊपर एक साफ़ मुड़ा हुआ लूप रहता है।",
    hindiExamples: [
      { kannadaWord: "ಐದು ಬೆರಳುಗಳು", transliteration: "Aidu Beralugalu", meaning: "पाँच उंगलियाँ (Five fingers)" },
      { kannadaWord: "ಐದು", transliteration: "Aidu", meaning: "पाँच (Five)" }
    ]
  },
  digit_6: {
    hindiSymbol: "೬ (Aaru)",
    hindiSubCategory: "अंक (Digit)",
    hindiPronunciationHint: "इसे 'आरु' (Aaru) कहा जाता है। यह संख्या छह (6) का प्रतिनिधित्व करता है। यह एक खुला हुआ घेरा है जो ऊपर की ओर घुमावدار आकार बनाता है।",
    hindiExamples: [
      { kannadaWord: "ಆರು ಋತುಗಳು", transliteration: "Aaru Ruthugalu", meaning: "छह ऋतुएं (Six seasons)" },
      { kannadaWord: "ಆರು", transliteration: "Aaru", meaning: "छह (Six)" }
    ]
  },
  digit_7: {
    hindiSymbol: "೭ (Yelu)",
    hindiSubCategory: "अंक (Digit)",
    hindiPronunciationHint: "इसे 'एलु' (Yelu) कहा जाता है। यह संख्या सात (7) को निरूपित करता है। यह एक बहती हुयी टिक मार्क या पर्वत की चोटी जैसी आकृति है।",
    hindiExamples: [
      { kannadaWord: "ಏಳು ಬಣ್ಣಗಳು", transliteration: "Yelu Bannagalu", meaning: "सात रंग (Seven colors / Rainbow)" },
      { kannadaWord: "ಏಳು", transliteration: "Yelu", meaning: "सात (Seven)" }
    ]
  },
  digit_8: {
    hindiSymbol: "೮ (Entu)",
    hindiSubCategory: "अंक (Digit)",
    hindiPronunciationHint: "इसे 'एण्टु' (Entu) कहा जाता है। यह संख्या आठ (8) को चिन्हित करता है। यह एक सुंदर बंद लूप वाली आँख जैसी आकृति के समान दिखता है।",
    hindiExamples: [
      { kannadaWord: "ಎಂಟು ದಿಕ್ಕುಗಳು", transliteration: "Entu Dikkugalu", meaning: "आठ दिशाएं (Eight directions)" },
      { kannadaWord: "ಎಂಟು", transliteration: "Entu", meaning: "आठ (Eight)" }
    ]
  },
  digit_9: {
    hindiSymbol: "೯ (Ombattu)",
    hindiSubCategory: "अंक (Digit)",
    hindiPronunciationHint: "इसे 'ओम़्बत्तु' (Ombattu) कहा जाता है। यह संख्या नौ (9) के लिए इस्तेमाल होता है। इसका आकार बाईं तरफ झुका हुआ एक वृत्ताकार मोड़ जैसा है।",
    hindiExamples: [
      { kannadaWord: "ಒಂಬತ್ತು ರತ್ನಗಳು", transliteration: "Ombattu Rathnagalu", meaning: "नौ रत्न (Nine gems / Navaratnas)" },
      { kannadaWord: "ಒಂಬತ್ತು", transliteration: "Ombattu", meaning: "नौ (Nine)" }
    ]
  }
};

export const UI_TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    appTitle: "The Art of Kannada",
    subtitle: "Foundation of sounds, pattern-matching, and transliterated linguistic guides",
    byline: "Module I • Phonology & Mappings",
    mastryLabel: "Linguistic Mastery",
    streakLabel: "Daily Streak",
    daysLabel: "days",
    comfortTitle: "Visual Comfort & Reading Scale",
    comfortDesc: "Sitting far away from your screen? Adjust the scale of characters and descriptions below.",
    currentlyDisplaying: "Currently displaying at",
    historicalPrelude: "Historical Prelude",
    introTitle: "Introduction to Aksharamale (ಅಕ್ಷರಮಾಲೆ)",
    introDesc: "Kannada writing is exceptionally pure, phonetic, and symmetrical—characters represent syllables and correspond closely to vocal organ articulation from throat to lips. By understanding how the breath resonates, you can recognize characters intuitively.",
    numVowels: "13 Swaras (Vowels)",
    numYogavaahas: "2 Yogavaahas (Modifiers)",
    numConsonants: "34 Vyanjanas (Consonants)",
    todaysChallenge: "Today's Challenge",
    challengeMaster: "Challenge: Master the Sound of",
    contextPractice: "Context Practice",
    listenSound: "Listen Sound",
    markMastered: "Mark as Mastered",
    challengeCompleted: "Challenge Completed!",
    vocalPlace: "Vocal Articulation",
    litExamples: "Literature Examples",
    noCharSelected: "Select a Character",
    noCharDesc: "Click any Swara or Vyanjana on the catalog grid to view its vocal placement, listen to sounds, and see word combinations.",
    searchPlaceholder: "Search by Kannada letter, English transliteration, category...",
    noResults: "No characters match your search",
    noResultsHint: "Try another vowel/consonant or clear the filter",
    interactiveSymmetries: "Linguistic Symmetries",
    symmetriesDesc: "Sanskrit and Dravidian linguistic structures are organized with scientific clarity. By mastering durational, aspirative, and positional pairings, you unlock intuitive character-recognition.",
    durationTab: "Vowel Duration",
    breathingTab: "Breathing Force",
    mouthTab: "Tongue Positions",
    vowelSummaryTitle: "Swaras: Standard vs Elongated Pairs",
    vowelSummaryDesc: "Notice how the long vowel (Deergha) extends the counterpart short vowel (Hrasva). Curiously, look at the glyph differences—most long vowels append a specific curve sign to symbolize the elongated sound!",
    pairLabel: "PAIR",
    shortLabel: "Short",
    longLabel: "Long",
    speakLabel: "Speak",
    breathingSummaryTitle: "Aspiration: Alpaprana vs Mahaprana",
    breathingSummaryDesc: "Consonants come in pairs. The 1st and 3rd column in each row is spoken with low energy (Alpaprana), while the 2nd and 4th column requires an explosion of air (Mahaprana). Pronounce them sequentially to feel the difference!",
    lightBreath: "Light Breath",
    heavyBlast: "Heavy Blast",
    aspirationUnit: "Aspiration Unit",
    glyphTip: "Glyph Tip",
    placementTitle: "Placement Articulation Map (Row Vargas)",
    placementDesc: "Vargiya consonants are organized chronologically based on where the sound is produced, starting from the throat and moving outward to the lips! Select a group to see how and where to position your tongue.",
    unstructuredNote: "The remaining consonants (ಯ, ರ, ಲ, ವ, ಶ, ಷ, ಸ, ಹ, ಳ) act as Avargiya Vyanjanagaḷu (Unstructured consonant stream) and do not fall into perfect 5x5 structural grids, but they share similar articulation points.",
    syllabicIntro: "Syllabic Alchemy (Kagunitha)",
    syllabicDesc: "By merging a raw consonant (carrying a silent consonant stop ್) with each of the 13 Swaras and 2 Yogavaahas, you form Kagunitha Syllables—the foundational acoustic building blocks of Kannada spelling.",
    selectConsonant: "I. Select a Primary Consonant",
    durationCombo: "II. Durational Combinations for",
    cellClickTip: "Click any cell to pronounce the syllable",
    acousticSymbolLabel: "completed. Ready for next syllable block.",
    quizHeader: "Linguistic Review Check",
    quizSubHeader: "Test pattern & transliteration skills",
    questionPrompt: "Question Prompt",
    accuracyGrade: "Accuracy Grade",
    restartQuiz: "Restart New Iteration",
    quizCompletedMsg: "You successfully recognized and reviewed patterns.",
    trainingIterationComplete: "Training Iteration Complete",
    streakHeader: "Streak",
    referenceToggleLabel: "Learning Reference View:",

    // Tab Categories Explorer
    swarasTab: "Swaras",
    swarasDesc: "13 Vowels",
    yogavaahasTab: "Yogavaahas",
    yogavaahasDesc: "2 Modifiers",
    vyanjanasTab: "Vyanjanas",
    vyanjanasDesc: "34 Consonants",
    digitsTab: "Digits",
    digitsDesc: "10 Numbers",

    // Daily Challenge
    dailyChallengeTitle: "Daily Challenge",
    challengePrefix: "Challenge Character",
    soundGuidePrefix: "Acoustic pronunciation guide",
    contextPracticeLabel: "Real-world context practice",
    listenSoundLabel: "Hear Pronunciation",
    challengeCompletedLabel: "Challenge Mastered!",
    markMasteredLabel: "Mark as Mastered",

    // LookAlikes sequence
    writingSequenceTab: "Writing Sequence",
    visualCatalogTab: "Visual Catalog",
    distortionQuizTab: "Distortion Quiz",

    // Grid details
    articulationLabel: "Vocal Articulation",
    examplesLabel: "Examples",
    usesSoundLabel: "Acoustic Properties",
    readyNextLabel: "Ready for next cell.",
    selectCharTitle: "Select a Character",
    selectCharDesc: "Click any card in the grid to hear pronunciation and explore details.",

    // Pattern Symmetries Scribes
    swarasSymmetriesTitle: "Swaras: Standard vs Elongated Pairs",
    swarasSymmetriesDesc: "Notice how the long vowel (Deergha) extends the counterpart short vowel (Hrasva). Curiously, look at the glyph differences—most long vowels append a specific curve sign to symbolize the elongated sound!",
    vowelPairHint1: "Notice the right loop tail added to ಆ",
    vowelPairHint2: "ಈ transforms ಇ into a distinct crowned figure",
    vowelPairHint3: "ಊ appends a curved tail to the bottom right of ಉ",
    vowelPairHint4: "ಏ adds a sweeping downward crown curve on top of ಎ",
    vowelPairHint5: "ಓ pulls the top right tip upwards compared to ಒ",
    hrasvaVsDeerghaLabel: "Hrasva vs Deergha",
    hrasvaShortLabel: "Hrasva (Short)",
    deerghaLongLabel: "Deergha (Long)",
    speakAction: "Pronounce",
    breathingTitle: "Aspiration: Alpaprana vs Mahaprana",
    breathingDesc: "Consonants come in pairs. The 1st and 3rd column in each row is spoken with low energy (Alpaprana), while the 2nd and 4th column requires an explosion of air (Mahaprana). Pronounce them sequentially to feel the difference!",
    gutturalLabel: "Guttural (Throat)",
    palatalLabel: "Palatal (Roof)",
    retroflexLabel: "Retroflex (Curled)",
    dentalLabel: "Dental (Teeth)",
    labialLabel: "Labial (Lips)",
    alpaphranaHint1: "ಖ adds a bottom curl and crown hook to ಕ",
    alpaphranaHint2: "ಘ includes a vertical tick and lower center loop compared to ಗ",
    alpaphranaHint3: "ಛ adds a descending vertical tail line under ಚ",
    alpaphranaHint4: "ಝ has a complex curl tail compared to regular ಜ",
    alpaphranaHint5: "ಠ adds a central inner dot inside the circle of ಟ",
    alpaphranaHint6: "ಢ has a small bottom curl hook on normal ಡ",
    alpaphranaHint7: "ಥ includes a distinctive inner center dot and path-shading",
    alpaphranaHint8: "ಧ adds a vertical descending thrust tick to normal ದ",
    alpaphranaHint9: "ಫ adds an inner cross slash to turn ಪ into heavy ಫ",
    alpaphranaHint10: "ಭ adds a bottom vertical tick to normal ಬ",
    aspirationUnitLabel: "Aspiration Level",
    lightBreathLabel: "Alpaprana (Light)",
    heavyBlastLabel: "Mahaprana (Blocked)",
    softLabel: "Soft Stop",
    forcefulLabel: "Heavy Push",
    glyphTipLabel: "Structural Hint",
    tongueMapTitle: "Vocal Placement Grid Check",
    tongueMapDesc: "Grouped consonants are organized systematically from throat outwards to the lips. Pick any row to explore how positioning affects sound.",
    indexBlockLabel: "Row block",
    grammarianNoteTitle: "Structural Notice",
    grammarianNoteDesc: "The unstructured consonants (ಯ, ರ, ಲ, ವ, ಶ, ಷ, ಸ, ಹ, ಳ) do not form standard 5x5 matrix blocks, but follow phonetic positions.",

    gutturalTitle: "Gutturals (Throat)",
    gutturalSanskrit: "Kanthya (ಕಂಠ್ಯ)",
    gutturalPlace: "Produced at throat",
    gutturalDesc: "Deep contraction at vocal chords. Keep tongue flat.",
    palatalTitle: "Palatals (Roof)",
    palatalSanskrit: "Taalavya (ತಾಲವ್ಯ)",
    palatalPlace: "Tongue touches hard roof",
    palatalDesc: "Flatten tongue shape against the hard middle ceiling.",
    retroflexTitle: "Retroflex (Curled)",
    retroflexSanskrit: "Moordhanya (ಮೂರ್ಧನ್ಯ)",
    retroflexPlace: "Tongue tip curled back",
    retroflexDesc: "Curl the tip of tongue backward and slap it forward to strike the roof.",
    dentalTitle: "Dentals (Teeth)",
    dentalSanskrit: "Danthya (ದಂತ್ಯ)",
    dentalPlace: "Tongue tip behind teeth",
    dentalDesc: "Place the tongue tip flatly behind the upper teeth ridge.",
    labialTitle: "Labials (Lips Only)",
    labialSanskrit: "Oshthya (ಓಷ್ಠ್ಯ)",
    labialPlace: "Sound made solely by lips",
    labialDesc: "Draw lips shut completely and open outward with air."
  },
  hi: {
    appTitle: "कन्नड़ की कला (The Art of Kannada)",
    subtitle: "ध्वनियों का आधार, पैटर्न मिलान, और देवनागरी लिपिबद्ध भाषाई मार्गदर्शिका",
    byline: "मॉड्यूल I • स्वर विज्ञान और मानचित्रण",
    mastryLabel: "भाषाई महारत (Mastery)",
    streakLabel: "दैनिक रिकॉर्ड (Streak)",
    daysLabel: "दिन",
    comfortTitle: "आरामदेह दृश्यता और पढ़ने का पैमाना",
    comfortDesc: "क्या आप अपनी स्क्रीन से दूर बैठे हैं? नीचे अक्षरों और विवरणों का आकार बदलें।",
    currentlyDisplaying: "वर्तमान में प्रदर्शन",
    historicalPrelude: "ऐतिहासिक भूमिका (Prelude)",
    introTitle: "अक्षरमाला (ಅಕ್ಷರಮಾಲೆ) का परिचय",
    introDesc: "कन्नड़ लेखन व्यावहारिक रूप से अत्यंत शुद्ध, ध्वन्यात्मक और सममित है—इसके अक्षर सीधे स्वर यंत्रों की संधियों (कंठ से लेकर होठों तक) से मेल खाते हैं। यह समझने से कि आपकी साँस मुँह में कहाँ प्रतिध्वनित होती है, आप कन्नड़ के अक्षरों को सहजाता से पहचान सकते हैं।",
    numVowels: "13 स्वर (Swaras)",
    numYogavaahas: "2 योगवाह (Modifiers)",
    numConsonants: "34 व्यंजन (Vyanjanas)",
    todaysChallenge: "आज की चुनौती",
    challengeMaster: "चुनौती: ध्वनि में महारत प्राप्त करें",
    contextPractice: "संदर्भ अभ्यास (Practice)",
    listenSound: "ध्वनि सुनें",
    markMastered: "महारत दर्ज करें",
    challengeCompleted: "चुनौती पूर्ण हुई!",
    vocalPlace: "उच्चारण और स्वर यंत्र (Vocal Articulation)",
    litExamples: "साहित्यिक शब्द उदाहरण (Examples)",
    noCharSelected: "एक अक्षर का चयन करें",
    noCharDesc: "अक्षरों का स्वर-तंत्र स्थान देखने, आवाज़ सुनने और शब्दों के मिलान देखने के लिए ऊपर ग्रिड में किसी भी स्वर या व्यंजन पर क्लिक करें।",
    searchPlaceholder: "कन्नड़ अक्षर, देवनागरी, वर्ग आदि द्वारा खोजें...",
    noResults: "खोज से मेल खाने वाला कोई अक्षर नहीं मिला",
    noResultsHint: "कोशिश करें कि अन्य स्वर/व्यंजन चुनें या फ़िल्टर साफ़ करें",
    interactiveSymmetries: "भाषाई समरूपता (Symmetries)",
    symmetriesDesc: "संस्कृत और द्रविड़ भाषाई संरचनाएँ अत्यंत वैज्ञानिक और व्यवस्थित हैं। दीर्घकालिक, सप्राण और उच्चारण स्थान श्रेणियों में महारत प्राप्त करके कन्नड़ वर्णमाला को तुरंत पहचानें।",
    durationTab: "स्वर की अवधि (Duration)",
    breathingTab: "प्राणवायु बल (Breathing)",
    mouthTab: "जीभ का स्थान (Positions)",
    vowelSummaryTitle: "स्वर: ह्रस्व बनाम दीर्घ जोड़ियाँ",
    vowelSummaryDesc: "ध्यान दें कि किस प्रकार दीर्घ स्वर (Deergha), ह्रस्व स्वर (Hrasva) की ध्वनि को खींचे हुए रूप में प्रकट करते हैं। इसके अलावा आकृतियों को देखें—ज़्यादातर दीर्घ स्वरों के अंत में केवल एक विशेष वक्र चिह्न जोड़ा जाता है जिससे ध्वनि लंबी हो जाती है!",
    pairLabel: "जोड़ी",
    shortLabel: "ह्रस्व (लघु)",
    longLabel: "दीर्घ (लंबा)",
    speakLabel: "बोलें",
    breathingSummaryTitle: "प्राणवायु: अल्पप्राण बनाम महाप्राण",
    breathingSummaryDesc: "व्यंजन जोड़ियों में आते हैं। पहली और तीसरी पंक्ति के व्यंजन बिना किसी भारी झटके के (अल्पप्राण) बोले जाते हैं, जबकि दूसरी और चौथी संख्या के व्यंजनों को बोलते समय मुँह से ज़ोर से हवा फेंकनी पड़ती है (महाप्राण)। इनका क्रमशः उच्चारण करें!",
    lightBreath: "हल्की साँस (अल्पप्राण)",
    heavyBlast: "भारी साँस (महाप्राण)",
    aspirationUnit: "प्राणवायु इकाई",
    glyphTip: "लिखने का संकेत",
    placementTitle: "उच्चारण स्थान वर्गीकरण (वर्गीय व्यंजन)",
    placementDesc: "वर्गीय व्यंजनों को उनके उत्पन्न होने वाले स्थान के अनुसार वर्गीकृत किया गया है, जो कंठ से शुरू होकर होठों की तरफ बढ़ता है! जीभ को मुँह में कहाँ रखना है, यह देखने के लिए नीचे दिए गए किसी समूह को चुनें।",
    unstructuredNote: "शेष व्यंजन (ಯ, ರ, ಲ, ವ, ಶ, ಷ, ಸ, ಹ, ಳ) अवर्गीय व्यंजन कहलाते हैं और इस निश्चित 5x5 ग्रिड संरचना के बाहर आते हैं, पर वे समान उच्चारण थान साझा करते हैं।",
    syllabicIntro: "स्वर-व्यंजन मिलान बाराखड़ी (Kagunitha)",
    syllabicDesc: "जब आप किसी शुद्ध हलंत व्यंजन (್ चिह्न युक्त) को 13 स्वरों और 2 योगवाहों के साथ मिलाते हैं, तो कन्नड़ की बाराखड़ी 'कगुनिता' का निर्माण होता है—जो कन्नड़ वर्तनी की आधारशिला है।",
    selectConsonant: "I. मुख्य व्यंजन चुनें",
    durationCombo: "II. स्वर मात्रा संयोजन:",
    cellClickTip: "मात्रा की ध्वनि सुनने के लिए किसी भी खाने पर क्लिक करें",
    acousticSymbolLabel: "सफलतापूर्वक पूर्ण। अगले व्यंजन के लिए तैयार।",
    quizHeader: "भाषाई अभ्यास परीक्षण",
    quizSubHeader: "पैटर्न मिलान और देवनागरी लिपि कौशल का परीक्षण",
    questionPrompt: "प्रश्न विवरण",
    accuracyGrade: "शुद्धता रेटिंग",
    restartQuiz: "नया परीक्षण शुरू करें",
    quizCompletedMsg: "आपने सफलतापूर्वक पैटर्न पहचाने और समीक्षा पूरी की।",
    trainingIterationComplete: "प्रशिक्षण चक्र पूर्ण",
    streakHeader: "रिकॉर्ड",
    referenceToggleLabel: "सीखने का संदर्भ माध्यम:",

    // Tab Categories Explorer (Hindi)
    swarasTab: "स्वर (Swaras)",
    swarasDesc: "13 स्वर",
    yogavaahasTab: "योगवाह (Yogavaahas)",
    yogavaahasDesc: "2 संकेतक",
    vyanjanasTab: "व्यंजन (Vyanjanas)",
    vyanjanasDesc: "34 व्यंजन",
    digitsTab: "अंक (Digits)",
    digitsDesc: "10 अंक",

    // Daily Challenge (Hindi)
    dailyChallengeTitle: "दैनिक चुनौती",
    challengePrefix: "चुनौती वर्ण",
    soundGuidePrefix: "ध्वनि उच्चारण मार्गदर्शिका",
    contextPracticeLabel: "वास्तविक दुनिया संदर्भ अभ्यास",
    listenSoundLabel: "उच्चारण सुनें",
    challengeCompletedLabel: "चुनौती पूर्ण हुई!",
    markMasteredLabel: "महारत दर्ज करें",

    // LookAlikes sequence (Hindi)
    writingSequenceTab: "लेखन अनुक्रम",
    visualCatalogTab: "दृश्य सूची",
    distortionQuizTab: "विकृति परीक्षण",

    // Grid details (Hindi)
    articulationLabel: "उच्चारण स्थान",
    examplesLabel: "साहित्यिक उदाहरण",
    usesSoundLabel: "ध्वनि विशेषताएँ",
    readyNextLabel: "अगले खाने के लिए तैयार।",
    selectCharTitle: "एक वर्ण चुनें",
    selectCharDesc: "उच्चारण सुनने और विवरण जानने के लिए ग्रिड में किसी भी कार्ड पर क्लिक करें।",

    // Pattern Symmetries Scribes (Hindi)
    swarasSymmetriesTitle: "स्वर: ह्रस्व बनाम दीर्घ जोड़ियाँ",
    swarasSymmetriesDesc: "ध्यान दें कि किस प्रकार दीर्घ स्वर (Deergha), ह्रस्व स्वर (Hrasva) की ध्वनि को खींचे हुए रूप में प्रकट करते हैं। ज़्यादातर दीर्घ स्वरों के अंत में केवल एक विशेष वक्र चिह्न जोड़ा जाता है जिससे ध्वनि लंबी हो जाती है!",
    vowelPairHint1: "ध्यान दें कि ಆ के दाईं ओर एक लूप पूँछ जोड़ी गई है",
    vowelPairHint2: "ಈ अक्षर  इ (ಇ) को एक विशिष्ट मुकुट वाली आकृति में बदल देता है",
    vowelPairHint3: "ಊ अक्षर ಉ के नीचे दाईं ओर एक घुमावदार पूँछ जोड़ता है",
    vowelPairHint4: "ಏ अक्षर ಎ के ऊपर एक झुकती हुई मुकुट रेखा जोड़ता है",
    vowelPairHint5: "ಓ अक्षर ಒ की तुलना में शीर्ष दाईं नोक को ऊपर खींचता है",
    hrasvaVsDeerghaLabel: "ह्रस्व बनाम दीर्घ",
    hrasvaShortLabel: "ह्रस्व (लघु स्वर)",
    deerghaLongLabel: "दीर्घ (लंबा स्वर)",
    speakAction: "उच्चारण करें",
    breathingTitle: "प्राणवायु: अल्पप्राण बनाम महाप्राण",
    breathingDesc: "व्यंजन जोड़ियों में आते हैं। पहली और तीसरी पंक्ति के व्यंजन बिना किसी भारी झटके के (अल्पप्राण) बोले जाते हैं, जबकि दूसरी और चौथी संख्या के व्यंजनों को बोलते समय मुँह से ज़ोर से हवा फेंकनी पड़ती है (महाप्राण)।",
    gutturalLabel: "कण्ठ्य (कंठ/गला)",
    palatalLabel: "तालव्य (कठोर तालू)",
    retroflexLabel: "मूर्धन्य (मुड़ी जीभ)",
    dentalLabel: "दंत्य (ऊपरी दांत)",
    labialLabel: "ओष्ठ्य (दोनों होठ)",
    alpaphranaHint1: "ಖ अक्षर ಕ के नीचे एक लूप और ऊपर एक मुकुट हुक जोड़ता है",
    alpaphranaHint2: "ಘ अक्षर ಗ के नीचे एक रेखा और बीच में एक छोटा लूप जोड़ता है",
    alpaphranaHint3: "ಛ अक्षर ಚ के नीचे एक छोटी नीचे की ओर जाती रेखा जोड़ता है",
    alpaphranaHint4: "ಝ साधारण ಜ की तुलना में एक जटिल घुमावदार पूँछ रखता है",
    alpaphranaHint5: "ಠ अक्षर ಟ के चक्र के भीतर एक स्पष्ट बिंदु जोड़ता है",
    alpaphranaHint6: "ಢ सामान्य ड (ಡ) के नीचे एक छोटा लूप हुक जोड़ता है",
    alpaphranaHint7: "ಥ के भीतर एक विशिष्ट मध्य बिंदु और पथ-छायांकन शामिल है",
    alpaphranaHint8: "ಧ नीचे मध्य में एक नीचे की ओर जाता स्ट्रोक जोड़ता है",
    alpaphranaHint9: "ಫ महाप्राण दर्शाने के लिए बीच में प (ಪ) में एक क्रॉस स्लैश/स्ट्रोक जोड़ता है",
    alpaphranaHint10: "ಭ सामान्य ब (ಬ) के नीचे एक ऊर्ध्वाधर रेखा जोड़ता है",
    aspirationUnitLabel: "महाप्राण स्तर",
    lightBreathLabel: "अल्पप्राण (हल्की साँस)",
    heavyBlastLabel: "महाप्राण (ज़ोरदार वायु)",
    softLabel: "मृदु अवरोध",
    forcefulLabel: "ज़ोरदार रेचन",
    glyphTipLabel: "लिखने की युक्ति",
    tongueMapTitle: "उच्चारण स्थान वर्गीकरण ग्रिड",
    tongueMapDesc: "वर्गीय व्यंजनों को उनके उत्पन्न होने वाले स्थान के अनुसार वर्गीकृत किया गया है, जो कंठ से शुरू होकर होठों की तरफ बढ़ता है! समूह चुनें और अपनी जीभ की स्थिति समझें।",
    indexBlockLabel: "वर्ग अनुक्रम",
    grammarianNoteTitle: "विशेष व्याकरण सूचना",
    grammarianNoteDesc: "शेष व्यंजन (ಯ, ರ, ಲ, ವ, ಶ, ಷ, ಸ, ಹ, ಳ) अवर्गीय व्यंजन कहलाते हैं और ग्रिड के बाहर हैं, पर इनका भी सटीक उच्चारण स्थान होता है।",

    gutturalTitle: "कण्ठ्य (कंठ - Gutturals)",
    gutturalSanskrit: "Kanthya (ಕಂಠ್ಯ)",
    gutturalPlace: "कंठ द्वार से उत्पन्न",
    gutturalDesc: "अपनी जीभ को ढीला छोड़ें, ज़ोर सीधे कंठ से लाएं।",
    palatalTitle: "तालव्य (तालू - Palatals)",
    palatalSanskrit: "Taalavya (ತಾಲವ್ಯ)",
    palatalPlace: "जीभ मुँह के कठोर ऊपरी हिस्से को छूती है",
    palatalDesc: "जीभ के अगले हिस्से को चिपटा करके कठोर तालू पर दबाएं।",
    retroflexTitle: "मूर्धन्य (मूर्धा - Retroflex)",
    retroflexSanskrit: "Moordhanya (ಮೂರ್ಧನ್ಯ)",
    retroflexPlace: "जीभ की नोक पीछे की ओर मुड़ती है",
    retroflexDesc: "जीभ की नोक को पीछे की ओर रोल करें, फिर ज़ोर से आगे लाते हुए कठोर हिस्से पर प्रहार करें।",
    dentalTitle: "दंत्य (दाँत - Dentals)",
    dentalSanskrit: "Danthya (ದಂತ್ಯ)",
    dentalPlace: "जीभ ऊपरी दांतों के पीछे होती है",
    dentalDesc: "जीभ की नोक को सपाट रूप से ऊपरी दांतों की जड़ों से दबाएं।",
    labialTitle: "ओष्ठ्य (होठ - Labials)",
    labialSanskrit: "Oshthya (ಓಷ್ಠ್ಯ)",
    labialPlace: "दोनों होठों को बंद करने से उत्पन्न",
    labialDesc: "दोनों होठों को आपस में पूरी तरह बंद करें और हवा के दबाव के साथ खोलें।"
  }
};
