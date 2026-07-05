import { VocabWord } from './essayCollection';

export interface PrebuiltEssayData {
  sentences: {
    kn: string[];
    tr: string[];
    en: string[];
    hi: string[];
    notesEn: string[];
    notesHi: string[];
  };
  vocab: VocabWord[];
}

export const PREBUILT_ESSAYS_DATA: Record<number, PrebuiltEssayData> = {
  // === CATEGORY 2: TOURISM & PLACES (11-20) ===
  11: {
    sentences: {
      kn: [
        "ಹಂಪಿ ಯುನೆಸ್ಕೋ ವಿಶ್ವ ಪರಂಪರೆಯ ತಾಣವಾಗಿದ್ದು, ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ರಾಜಧಾನಿಯಾಗಿತ್ತು.",
        "ತುಂಗಭದ್ರಾ ನದಿಯ ದಂಡೆಯ ಮೇಲಿರುವ ಹಂಪಿಯು ತನ್ನ ಭವ್ಯವಾದ ಕಲ್ಲಿನ ದೇವಾಲಯಗಳಿಗೆ ಪ್ರಸಿದ್ಧಿಯಾಗಿದೆ.",
        "ಇಲ್ಲಿನ ಕಲ್ಲಿನ ರಥ ಮತ್ತು ವಿರೂಪಾಕ್ಷ ದೇವಾಲಯವು ಭಾರತೀಯ ಶಿಲ್ಪಕಲೆಯ ಅದ್ಭುತ ಉದಾಹರಣೆಗಳಾಗಿವೆ.",
        "ಪ್ರಪಂಚದಾದ್ಯಂತದ ಸಾವಿರಾರು ಇತಿಹಾಸ ಪ್ರೇಮಿಗಳು ಮತ್ತು ಪ್ರವಾಸಿಗರು ಹಂಪಿಯ ಅವಶೇಷಗಳನ್ನು ನೋಡಲು ಭೇಟಿ ನೀಡುತ್ತಾರೆ.",
        "ನಮ್ಮ ಭವ್ಯವಾದ ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯನ್ನು ರಕ್ಷಿಸುವುದು ಪ್ರತಿಯೊಬ್ಬ ಭಾರತೀಯನ ಜವಾಬ್ದಾರಿಯಾಗಿದೆ."
      ],
      tr: [
        "Hampi UNESCO vishwa parampareya taanavaagiddu, Vijayanagara saamraajyada raajadhaaniyaagittu.",
        "Tungabhadraa nadiya dandeya meeliruva Hampiyu tanna bhavyavaada kallina deevaalayagalige prasiddhavaagide.",
        "Illina kallina ratha mattu Viroopaaksha deevaalayavu bhaarateeya shilpakaleya adbhuta udaaharanegalagive.",
        "Prapanchadaadyantada saaviraaru itihaasa preemigalu mattu pravaasigaru Hampiya avasheshagalannu noodalu bheeti needuttaare.",
        "Namma bhavyavaada saamskritika parampareyannu rakshisuvudu pratiyobba bhaarateeyana javaabdaariyaagide."
      ],
      en: [
        "Hampi is a prominent UNESCO World Heritage site and was once the capital of the Vijayanagara Empire.",
        "Situated on the banks of the Tungabhadra River, Hampi is highly famous for its magnificent stone temples.",
        "The iconic stone chariot and Virupaksha Temple are outstanding examples of ancient Indian architecture.",
        "Thousands of history enthusiasts and tourists from across the globe visit to witness the ruins of Hampi.",
        "Preserving our magnificent cultural heritage is the paramount responsibility of every Indian citizen."
      ],
      hi: [
        "हम्पी एक यूनेस्को विश्व धरोहर स्थल है और कभी विजयनगर साम्राज्य की राजधानी हुआ करता था।",
        "तुंगभद्रा नदी के तट पर स्थित, हम्पी अपने भव्य पत्थरों के मंदिरों के लिए बहुत प्रसिद्ध है।",
        "यहाँ का पत्थर का रथ और विरूपाक्ष मंदिर भारतीय मूर्तिकला के अद्भुत उदाहरण हैं।",
        "दुनिया भर से हजारों इतिहास प्रेमी और पर्यटक हम्पी के अवशेषों को देखने के लिए आते हैं।",
        "अपनी भव्य सांस्कृतिक विरासत की रक्षा करना प्रत्येक भारतीय नागरिक का परम कर्तव्य है।"
      ],
      notesEn: [
        "Genitive 'Vijayanagara saamraajyada' (of Vijayanagara Empire) + past continuous verb 'raajadhaaniyaagittu' (was the capital).",
        "Locative 'dandeya meele' (on the bank) + dative plural 'deevaalayagalige' (to temples) + adjective 'prasiddhavaagide' (is famous).",
        "Genitive 'shilpakaleya' (of sculpture art) + plural predicate 'udaaharanegalagive' (are examples).",
        "Infinitive 'noodalu' (to see) + accusative plural 'avasheshagalannu' (ruins) + verb 'needuttaare' (they give/perform).",
        "Gerund 'rakshisuvudu' (protecting/preserving) + genitive 'bhaarateeyana' (of Indian) + 'javaabdaariyaagide' (is responsibility)."
      ],
      notesHi: [
        "'saamraajyada' में संबंध कारक है (साम्राज्य का)। 'raajadhaaniyaagittu' का अर्थ 'राजधानी थी' है।",
        "'nadiya dandeya meele' का अर्थ 'नदी के तट पर' है। 'deevaalayagalige' संप्रदान कारक है।",
        "'shilpakaleya' संबंध कारक है (वास्तुकला का)। 'udaaharanegalagive' का अर्थ 'उदाहरण हैं' है।",
        "'noodalu' का अर्थ 'देखने के लिए' है। 'avasheshagalannu' का अर्थ है 'अवशेषों को'।",
        "'rakshisuvudu' एक क्रियार्थक संज्ञा है (रक्षा करना)। 'javaabdaariyaagide' का अर्थ है 'जिम्मेदारी है'।"
      ]
    },
    vocab: [
      { word: "ಪರಂಪರೆ", transliteration: "parampare", meaning: "Heritage / परंपरा" },
      { word: "ಅವಶೇಷ", transliteration: "avasheesha", meaning: "Ruins / अवशेष" },
      { word: "ಶಿಲ್ಪಕಲೆ", transliteration: "shilpakale", meaning: "Sculpture Art / मूर्तिकला" }
    ]
  },
  12: {
    sentences: {
      kn: [
        "ಮೈಸೂರು ಅರಮನೆಯು ಭಾರತದ ಅತ್ಯಂತ ಆಕರ್ಷಕ ಮತ್ತು ಭವ್ಯವಾದ ಅರಮನೆಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ.",
        "ಇದು ಒಡೆಯರ್ ರಾಜವಂಶದ ಅಧಿಕೃತ ನಿವಾಸವಾಗಿದ್ದು, ಇಂಡೋ-ಸಾರ್ಸೆನಿಕ್ ಶೈಲಿಯಲ್ಲಿ ನಿರ್ಮಿಸಲ್ಪಟ್ಟಿದೆ.",
        "ಪ್ರತಿ ವರ್ಷ ದಸರಾ ಮಹೋತ್ಸವದ ಸಮಯದಲ್ಲಿ ಅರಮನೆಯನ್ನು ಲಕ್ಷಾಂತರ ವಿದ್ಯುತ್ ದೀಪಗಳಿಂದ ಶೃಂಗರಿಸಲಾಗುತ್ತದೆ.",
        "ಅರಮನೆಯ ಒಳಭಾಗದ ಸುಂದರ ಕೆತ್ತನೆಗಳು ಮತ್ತು ಚಿನ್ನದ ಸಿಂಹಾಸನವು ಪ್ರವಾಸಿಗರ ಮನ ಸೆಳೆಯುತ್ತದೆ.",
        "ಇದು ಕರ್ನಾಟಕದ ಶ್ರೀಮಂತ ರಾಜಮನೆತನದ ಇತಿಹಾಸ ಮತ್ತು ಕಲಾ ವೈಭವಕ್ಕೆ ಜೀವಂತ ಉದಾಹರಣೆಯಾಗಿದೆ."
      ],
      tr: [
        "Maisooru aramane-yu bhaaratada atyanta aakarshaka mattu bhavyavaada aramanegalalli ondagaide.",
        "Idu Odeyar raajavamshada adhikruta nivaasavaagiddu, Indo-Saracenic shaileyalli nirmisalpadide.",
        "Prati varsha Dasara mahotsavada samayadalli aramane-yannu lakshaantara vidyut deepagalinda shrungarisalaaguttade.",
        "Aramane-ya olabhaagada sundara kettanegalu mattu chinnada simhaasanavu pravaasigara mana seleyuttade.",
        "Idu Karnaatakada sreemanta raajamanetanada itihaasa mattu kalaa vaibhavakke jeevanta udaaharaneyaagide."
      ],
      en: [
        "Mysore Palace is one of the most attractive and grand palaces in India.",
        "It was the official residence of the Wodeyar dynasty and is built in the Indo-Saracenic architectural style.",
        "Every year during the Dasara festival, the palace is decorated with nearly one lakh glowing light bulbs.",
        "The palace's beautiful interior carvings and golden throne captivate the hearts of tourists.",
        "It stands as a living testament to the rich royal history and artistic splendor of Karnataka."
      ],
      hi: [
        "मैसूर महल भारत के सबसे आकर्षक और भव्य महलों में से एक है।",
        "यह वाडियार राजवंश का आधिकारिक निवास था और इसे इंडो-सारसेनिक शैली में बनाया गया है।",
        "हर साल दशहरा उत्सव के दौरान महल को लाखों बिजली के दीयों से सजाया जाता है।",
        "महल के आंतरिक भाग की सुंदर नक्काशी और सोने का सिंहासन पर्यटकों का मन मोह लेता है।",
        "यह कर्नाटक के समृद्ध शाही इतिहास और कलात्मक वैभव का एक जीवंत उदाहरण है।"
      ],
      notesEn: [
        "Subject 'aramane-yu' (palace indeed) + locative plural 'aramanegalalli' (among palaces) + 'ondagaide' (is one).",
        "Genitive 'raajavamshada' (of dynasty) + locative 'shaileyalli' (in style) + passive 'nirmisalpadide' (is built).",
        "Instrumental plural 'deepagalinda' (with lights) + passive verb 'shrungarisalaaguttade' (is decorated).",
        "Genitive 'olabhaagada' (of interior) + genitive 'chinnada' (of gold) + subject 'simhaasanavu' + verb 'seleyuttade' (it attracts).",
        "Dative 'vaibhavakke' (to splendor) + 'jeevanta' (living) + 'udaaharaneyaagide' (is example)."
      ],
      notesHi: [
        "'aramanegalalli' में अधिकरण बहुवचन है (महलों में)। 'ondagaide' का अर्थ 'एक है' है।",
        "'raajavamshada' का अर्थ 'राजवंश का' है। 'shaileyalli' का अर्थ 'शैली में' है।",
        "'samayadalli' का अर्थ 'समय में' है। 'deepagalinda' में करण कारक है (दीयों से)।",
        "'olabhaagada' का अर्थ 'आंतरिक भाग का' है। 'mana seleyuttade' का अर्थ है 'मन को आकर्षित करता है'।",
        "'vaibhavakke' में संप्रदान कारक है (वैभव के लिए)। 'jeevanta' का अर्थ 'जीवंत' है।"
      ]
    },
    vocab: [
      { word: "ಅರಮನೆ", transliteration: "aramane", meaning: "Palace / महल" },
      { word: "ನಿವಾಸ", transliteration: "nivaasa", meaning: "Residence / निवास" },
      { word: "ಕೆತ್ತನೆ", transliteration: "kettane", meaning: "Carving / नक्काशी" }
    ]
  },
  13: {
    sentences: {
      kn: [
        "ಜೋಗ್ ಜಲಪಾತವು ಭಾರತದ ಪ್ರಸಿದ್ಧ ಜಲಪಾತಗಳಲ್ಲಿ ಒಂದಾಗಿದ್ದು, ಶಿವಮೊಗ್ಗ ಜಿಲ್ಲೆಯ ದಟ್ಟ ಕಾಡುಗಳಲ್ಲಿದೆ.",
        "ಶರಾವತಿ ನದಿಯಿಂದ ಸೃಷ್ಟಿಯಾದ ಈ ಜಲಪಾತವು ಸುಮಾರು ಎಂಟು ನೂರಕ್ಕೂ ಹೆಚ್ಚು ಅಡಿ ಎತ್ತರದಿಂದ ಧುಮುಕುತ್ತದೆ.",
        "ಇದು ರಾಜಾ, ರೋರರ್, ರಾಕೆಟ್ ಮತ್ತು ರಾಣಿ ಎಂಬ ನಾಲ್ಕು ಕವಲುಗಳಾಗಿ ಕಲ್ಲಿನ ಕಂದರಕ್ಕೆ ಧುಮುಕುತ್ತದೆ.",
        "ಮಳೆಗಾಲದಲ್ಲಿ ಈ ಜಲಪಾತವು ಹಸಿರು ಕಣಿವೆಗಳು ಮತ್ತು ಮಂಜಿನಿಂದ ಕೂಡಿ ಕಣ್ಣಿಗೆ ಹಬ್ಬವನ್ನು ಉಂಟುಮಾಡುತ್ತದೆ.",
        "ಪ್ರಕೃತಿಯ ಈ ಅದ್ಭುತ ಸೌಂದರ್ಯವನ್ನು ನೋಡಲು ದೇಶಾದ್ಯಂತದ ಪ್ರಕೃತಿ ಪ್ರೇಮಿಗಳು ಇಲ್ಲಿಗೆ ಬರುತ್ತಾರೆ."
      ],
      tr: [
        "Joog jalapaatavu bhaaratada prasiddha jalapaatagalalli ondagaiddu, Shivamogga jilleya datta kaadugalallide.",
        "Sharaavati nadiyinda srustiyaada ee jalapaatavu sumaaru entu noorakkoo hechchu adi ettaradinda dhumukuttade.",
        "Idu Raajaa, Roorar, Raaket mattu Raani emba naalku kavalugalaagi kallina kandarakke dhumukuttade.",
        "Malegaaladalli ee jalapaatavu hasiru kanivegalu mattu manjininda koodi kannige habbavannu untumaaduttade.",
        "Prakritiya ee adbhuta saundaryavannu noodalu deeshadaadyantada prakriti preemigalu illige baruttaare."
      ],
      en: [
        "Jog Falls is one of India's most famous plunge waterfalls, nestled in the dense forests of Shimoga district.",
        "Created by the Sharavathi River, this waterfall plunges down from a majestic height of over eight hundred feet.",
        "It splits into four beautiful, distinct cascades named Raja, Roarer, Rocket, and Rani as it roars down.",
        "During the monsoon, the waterfall is surrounded by green valleys and mist, presenting a feast for the eyes.",
        "Nature lovers from across the country travel here to experience the raw power and beauty of this scenic wonder."
      ],
      hi: [
        "जोग जलप्रपात भारत के प्रसिद्ध जलप्रपातों में से एक है, जो शिवमोगा जिले के घने जंगलों में स्थित है।",
        "शरावती नदी द्वारा निर्मित, यह जलप्रपात लगभग आठ सौ फीट से अधिक की ऊंचाई से गिरता है।",
        "यह राजा, रोरर, रॉकेट और रानी नामक चार अलग-अलग धाराओं में बँटकर नीचे खाई में गिरता है।",
        "बरसात के मौसम में, यह जलप्रपात हरी घाटियों और कोहरे से घिरकर आँखों के लिए एक उत्सव जैसा दृश्य बनाता है।",
        "प्रकृति के इस अद्भुत सौंदर्य को देखने के लिए देश भर से प्रकृति प्रेमी यहाँ आते हैं।"
      ],
      notesEn: [
        "Genitive 'jilleya' (of district) + locative plural 'kaadugalalli' (in forests) + 'ide' (is there).",
        "Instrumental 'nadiyinda' (by river) + ablative 'ettaradinda' (from height) + verb 'dhumukuttade' (it plunges).",
        "Dative 'kandarakke' (to the gorge) + compound word 'naalku kavalugalaagi' (as four branches).",
        "Locative 'malegaaladalli' (in monsoon) + dative 'kannige' (to eyes) + accusative 'habbavannu' (feast) + verb 'untumaaduttade' (causes/makes).",
        "Infinitive 'noodalu' (to see) + subject plural 'preemigalu' (lovers) + adverb 'illige' (here)."
      ],
      notesHi: [
        "'jilleya' का अर्थ 'जिले का' है। 'kaadugalallide' का विच्छेद 'kaadugala + alli + ide' है (जंगलों में है)।",
        "'nadiyinda' में करण कारक है (नदी से)। 'ettaradinda' का अर्थ 'ऊंचाई से' है।",
        "'kandarakke' संप्रदान कारक है (खाई में/को)। 'dhumukuttade' का अर्थ 'गिरता है' है।",
        "'manjininda' का अर्थ 'कोहरे से' है। 'kannige habbavannu' का शाब्दिक अर्थ 'आँखों का त्योहार' है।",
        "'noodalu' का अर्थ 'देखने के लिए' है। 'preemigalu' का अर्थ 'प्रेमी' (बहुवचन) है।"
      ]
    },
    vocab: [
      { word: "ಜಲಪಾತ", transliteration: "jalapaata", meaning: "Waterfall / जलप्रपात" },
      { word: "ಕಂದರ", transliteration: "kandara", meaning: "Gorge / घाटी" },
      { word: "ಮಂಜು", transliteration: "manju", meaning: "Mist / कोहरा" }
    ]
  },
  14: {
    sentences: {
      kn: [
        "ಪಶ್ಚಿಮ ಘಟ್ಟಗಳು ಭಾರತದ ಪಶ್ಚಿಮ ಕರಾವಳಿಗೆ ಸಮಾನಾಂತರವಾಗಿ ಸಾಗುವ ಅದ್ಭುತ ಪರ್ವತ ಶ್ರೇಣಿಯಾಗಿದೆ.",
        "ಇದು ಜಗತ್ತಿನ ಎಂಟು ಪ್ರಮುಖ ಜೀವವೈವಿಧ್ಯತೆಯ ಸೂಕ್ಷ್ಮ ತಾಣಗಳಲ್ಲಿ ಒಂದೆಂದು ಗುರುತಿಸಲ್ಪಟ್ಟಿದೆ.",
        "ಇಲ್ಲಿನ ದಟ್ಟವಾದ ಮಳೆಕಾಡುಗಳು ಅಪರೂಪದ ಪ್ರಾಣಿ ಮತ್ತು ಪಕ್ಷಿ ಸಂಕುಲಗಳಿಗೆ ಆಶ್ರಯವನ್ನು ನೀಡುತ್ತವೆ.",
        "ಕಾವೇರಿ ಮತ್ತು ಕೃಷ್ಣಾ ಸೇರಿದಂತೆ ದಕ್ಷಿಣ ಭಾರತದ ಪ್ರಮುಖ ನದಿಗಳು ಈ ಪರ್ವತಗಳಲ್ಲಿ ಹುಟ್ಟುತ್ತವೆ.",
        "ಪರಿಸರ ಸಮತೋಲನವನ್ನು ಕಾಪಾಡಲು ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ ಅರಣ್ಯ ಸಂಪತ್ತನ್ನು ರಕ್ಷಿಸುವುದು ಅತಿ ಅತ್ಯಗತ್ಯವಾಗಿದೆ."
      ],
      tr: [
        "Pashchima ghattagalu bhaaratada pashchima karaavalige samaanaantaravaagi saaguva adbhuta parvata shreeniyaagide.",
        "Idu jagattina entu pramukha jeevavaividhyateya sookshma taanagalalli ondendu gurutisalpadide.",
        "Illina dattavaada malekaadugalu aparoopada praani mattu pakshi sankulagalige aashrayavannu needuttave.",
        "Kaaveeri mattu Krishna seeridante dakshina bhaaratada pramukha nadigalu ee parvatagalalli huttuttave.",
        "Parisara samatolanavannu kaapaadalu pashchima ghattagala aranya sampattannu rakshisuvudu ati atyagatyavaagide."
      ],
      en: [
        "The Western Ghats is a magnificent mountain range running parallel to the western coast of India.",
        "It is recognized globally as one of the eight hottest biodiversity hotspots in the world.",
        "The local dense rainforests provide a safe haven and shelter to various rare species of animals and birds.",
        "Major rivers of South India, including Kaveri and Krishna, originate in these majestic mountains.",
        "Preserving the forest wealth of the Western Ghats is extremely essential to maintain ecological balance."
      ],
      hi: [
        "पश्चिमी घाट भारत के पश्चिमी तट के समानांतर चलने वाली एक अद्भुत पर्वत श्रृंखला है।",
        "इसे दुनिया के आठ प्रमुख जैव विविधता वाले संवेदनशील स्थलों (हॉटस्पॉट) में से एक के रूप में मान्यता प्राप्त है।",
        "यहाँ के घने वर्षावन दुर्लभ जानवरों और पक्षी प्रजातियों को आश्रय प्रदान करते हैं।",
        "कावेरी और कृष्णा सहित दक्षिण भारत की प्रमुख नदियाँ इन्हीं पर्वतों में उत्पन्न होती हैं।",
        "पर्यावरण संतुलन बनाए रखने के लिए पश्चिमी घाट की वन संपदा की रक्षा करना अत्यंत आवश्यक है।"
      ],
      notesEn: [
        "Dative 'karaavalige' (to coast) + adverbial suffix '-aagi' in 'samaanaantaravaagi' (parallelly) + 'parvata shreeniyaagide' (is mountain range).",
        "Genitive 'jeevavaividhyateya' (of biodiversity) + locative plural 'taanagalalli' (in spots) + 'gurutisalpadide' (is recognized).",
        "Adjective 'dattavaada' (dense) + dative plural 'sankulagalige' (to species) + accusative 'aashrayavannu' (shelter) + verb 'needuttave' (they give).",
        "Participle 'seeridante' (including) + locative plural 'parvatagalalli' (in mountains) + verb 'huttuttave' (they are born/originate).",
        "Infinitive 'kaapaadalu' (to protect) + genitive 'ghattagala' (of ghats) + accusative 'sampattannu' (wealth) + gerund 'rakshisuvudu' (protecting)."
      ],
      notesHi: [
        "'samaanaantaravaagi' का अर्थ 'समानांतर रूप से' है। 'shreeniyaagide' का अर्थ 'श्रृंखला है' है।",
        "'jeevavaividhyateya' संबंध कारक है (जैव विविधता का)। 'gurutisalpadide' कर्मवाच्य क्रिया है।",
        "'malekaadugalu' का अर्थ 'वर्षावन' है। 'aashrayavannu' का अर्थ 'आश्रय को' है।",
        "'parvatagalalli' में अधिकरण बहुवचन है (पर्वतों में)। 'huttuttave' का अर्थ 'उत्पन्न होती हैं' है।",
        "'kaapaadalu' का अर्थ 'बनाए रखने के लिए' है। 'rakshisuvudu' का अर्थ है 'रक्षा करना'।"
      ]
    },
    vocab: [
      { word: "ಪರ್ವತ ಶ್ರೇಣಿ", transliteration: "parvata shreeni", meaning: "Mountain Range / पर्वत श्रृंखला" },
      { word: "ಜೀವವೈವಿಧ್ಯತೆ", transliteration: "jeevavaividhyate", meaning: "Biodiversity / जैव विविधता" },
      { word: "ಆಶ್ರಯ", transliteration: "aashraya", meaning: "Shelter / आश्रय" }
    ]
  },
  15: {
    sentences: {
      kn: [
        "ಗೋಕರ್ಣವು ಕರ್ನಾಟಕದ ಉತ್ತರ ಕನ್ನಡ ಜಿಲ್ಲೆಯಲ್ಲಿರುವ ಪ್ರಸಿದ್ಧ ಧಾರ್ಮಿಕ ಮತ್ತು ಪ್ರವಾಸಿ ತಾಣವಾಗಿದೆ.",
        "ಇಲ್ಲಿನ ಕಡಲತೀರಗಳು ವಿಶೇಷವಾಗಿ ಓಂ ಬೀಚ್ ತನ್ನ ಪ್ರಕೃತಿ ಸೌಂದರ್ಯಕ್ಕೆ ಹೆಸರುವಾಸಿಯಾಗಿದೆ.",
        "ಪವಿತ್ರ ಮಹಾಬಲೇಶ್ವರ ದೇವಾಲಯದಲ್ಲಿರುವ ಆತ್ಮಲಿಂಗವನ್ನು ಪೂಜಿಸಲು ಲಕ್ಷಾಂತರ ಭಕ್ತರು ಬರುತ್ತಾರೆ.",
        "ಇಲ್ಲಿ ಸಮುದ್ರದ ಅಲೆಗಳ ಸದ್ದಿನ ನಡುವೆ ಪ್ರಶಾಂತವಾದ ಪರಿಸರದಲ್ಲಿ ಸಮಯ ಕಳೆಯಲು ಜನರು ಇಷ್ಟಪಡುತ್ತಾರೆ.",
        "ಧಾರ್ಮಿಕ ಪಾವಿತ್ರ್ಯ ಮತ್ತು ನೈಸರ್ಗಿಕ ಸೌಂದರ್ಯದ ಅಪೂರ್ವ ಸಂಗಮವಾಗಿ ಗೋಕರ್ಣ ಕಂಗೊಳಿಸುತ್ತದೆ."
      ],
      tr: [
        "Gokarnavu Karnaatakada uttara Kannada jilleyalliruva prasiddha dhaarmika mattu pravaasi taanavaagide.",
        "Illina kadalateeragalu visheeshavaagi Om Beach tanna prakriti saundaryakke hesaruvaasiyaagide.",
        "Pavitra Mahaabaleeshwara deevaalayadalliruva Aatmalingavannu poojisalu lakshaantara bhaktaru baruttaare.",
        "Illi samudrada alegala saddina naduve prashaantavaada parisaradalli samaya kaleyalu janaru ishtapaduttaare.",
        "Dhaarmika paavitrya mattu naisargika saundaryada apoorva sangamavaagi Gokarna kangolisuttade."
      ],
      en: [
        "Gokarna is a famous temple town and tourist destination located in the Uttara Kannada district of Karnataka.",
        "The beaches here, especially the Om Beach, are globally renowned for their pristine natural beauty.",
        "Millions of devotees visit the sacred Mahabaleshwar Temple to worship the holy Atmalinga.",
        "People love spending peaceful time here amidst the soothing sound of sea waves in a tranquil environment.",
        "Gokarna shines brightly as a rare confluence of profound religious sanctity and scenic natural beauty."
      ],
      hi: [
        "गोकर्ण कर्नाटक के उत्तर कन्नड़ जिले में स्थित एक प्रसिद्ध धार्मिक और पर्यटन स्थल है।",
        "यहाँ के समुद्र तट, विशेष रूप से ओम बीच, अपनी प्राकृतिक सुंदरता के लिए प्रसिद्ध हैं।",
        "पवित्र महाबलेश्वर मंदिर में स्थापित आत्मलिंग की पूजा करने के लिए लाखों भक्त आते हैं।",
        "लोग यहाँ समुद्र की लहरों की आवाज़ के बीच शांत वातावरण में समय बिताना पसंद करते हैं।",
        "धार्मिक पवित्रता और प्राकृतिक सुंदरता के एक दुर्लभ संगम के रूप में गोकर्ण शोभा पाता है।"
      ],
      notesEn: [
        "Subject 'Gokarnavu' (Gokarna indeed) + locative 'jilleyalliruva' (which is in district) + 'taanavaagide' (is destination).",
        "Adverb 'illina' (of here) + dative 'saundaryakke' (to beauty) + adjective 'hesaruasiyaagide' (is famous).",
        "Locative 'deevaalayadalliruva' (which is in temple) + accusative 'Aatmalingavannu' (Atmalinga) + infinitive 'poojisalu' (to worship).",
        "Genitive 'alegala' (of waves) + postposition 'naduve' (amidst) + locative 'parisaradalli' (in environment) + verb 'ishtapaduttaare' (they like).",
        "Instrumental modifier '-aagi' in 'sangamavaagi' (as a confluence) + subject 'Gokarna' + verb 'kangolisuttade' (shines)."
      ],
      notesHi: [
        "'jilleyalliruva' का विच्छेद 'jilleya + alli + iruva' है (जिले में रहने वाला)।",
        "'kadalateeragalu' का अर्थ 'समुद्र तट' (बहुवचन) है। 'saundaryakke' संप्रदान कारक है।",
        "'deevaalayadalliruva' का अर्थ 'मंदिर के भीतर स्थित' है। 'poojisalu' का अर्थ 'पूजा करने के लिए' है।",
        "'saddina naduve' का अर्थ है 'आवाज़ के बीच'। 'samaya kaleyalu' का अर्थ 'समय बिताने के लिए' है।",
        "'sangamavaagi' का अर्थ 'संगम के रूप में' है। 'kangolisuttade' का अर्थ 'सुशोभित होता है' है।"
      ]
    },
    vocab: [
      { word: "ಕಡಲತೀರ", transliteration: "kadalateera", meaning: "Beach / समुद्र तट" },
      { word: "ಅಲೆಗಳು", transliteration: "alegalu", meaning: "Waves / लहरें" },
      { word: "ಸಂಗಮ", transliteration: "sangama", meaning: "Confluence / संगम" }
    ]
  },
  16: {
    sentences: {
      kn: [
        "ಕೊಡಗು ಜಿಲ್ಲೆಯು ತನ್ನ ಹಸಿರು ಬೆಟ್ಟಗಳು ಮತ್ತು ತಂಪಾದ ಹವಾಮಾನಕ್ಕೆ ಹೆಸರುವಾಸಿಯಾಗಿದೆ.",
        "ಇದನ್ನು ಕರ್ನಾಟಕದ ಕಾಶ್ಮೀರ ಎಂದು ಕರೆಯುತ್ತಾರೆ, ಮತ್ತು ಇದು ಕಾಫಿ ತೋಟಗಳಿಗೆ ಪ್ರಸಿದ್ಧವಾಗಿದೆ.",
        "ಇಲ್ಲಿ ಕಾವೇರಿ ನದಿಯು ಉಗಮಿಸುವ ತಲಕಾವೇರಿ ಎಂಬ ಪವಿತ್ರ ಸ್ಥಳವಿದೆ.",
        "ಪ್ರವಾಸಿಗರು ಇಲ್ಲಿನ ಜಲಪಾತಗಳು, ಸಾಹಸ ಕ್ರೀಡೆಗಳು ಮತ್ತು ತೋಟಗಳ ಸೌಂದರ್ಯವನ್ನು ಆಸ್ವಾದಿಸುತ್ತಾರೆ.",
        "ಕೊಡಗಿನ ಸಂಸ್ಕೃತಿ ಮತ್ತು ಇಲ್ಲಿನ ಜನರ ಆತಿಥ್ಯವು ಪ್ರವಾಸಿಗರಿಗೆ ಮರೆಯಲಾಗದ ಅನುಭವವನ್ನು ನೀಡುತ್ತದೆ."
      ],
      tr: [
        "Kodagu jilleyu tanna hasiru bettagalu mattu tampaada havaamaanakke hesaruvaasiyaagide.",
        "Idannu Karnaatakada Kashmir endu kareyuttaare, mattu idu coffee tootagalige prasiddhavaagide.",
        "Illi Kaaveeri nadiyu ugamisuva Talakaaveeri emba pavitra sthalavide.",
        "Pravaasigaru illina jalapaatagalu, saahasa kreedegalu mattu tootagala saundaryavannu aasvaadisuttaare.",
        "Kodagina samskriti mattu illina janara aatithyavu pravaasigarige mareyalaagada anubhavavannu needuttade."
      ],
      en: [
        "Coorg district is globally renowned for its emerald green hills and cool, pleasant climate.",
        "Referred to as the Kashmir of Karnataka, this beautiful region is highly famous for its vast coffee estates.",
        "It houses Talakaveri, the sacred pilgrimage spot where the holy Kaveri River originates.",
        "Tourists here enjoy the scenic waterfalls, thrilling adventure sports, and the lush beauty of plantations.",
        "The unique Kodava culture and warm hospitality of its people offer an unforgettable experience to visitors."
      ],
      hi: [
        "कूर्ग जिला अपनी हरी पहाड़ियों और ठंडी जलवायु के लिए प्रसिद्ध है।",
        "इसे कर्नाटक का कश्मीर कहा जाता है, और यह अपने कॉफी के बागानों के लिए बहुत प्रसिद्ध है।",
        "यहाँ तलकावेरी नामक पवित्र स्थल है जहाँ से कावेरी नदी का उद्गम होता है।",
        "पर्यटक यहाँ के झरनों, साहसिक खेलों और बागानों के सौंदर्य का आनंद लेते हैं।",
        "कूर्ग की संस्कृति और यहाँ के लोगों का आतिथ्य सत्कार पर्यटकों को एक अविस्मरणीय अनुभव प्रदान करता है।",
      ],
      notesEn: [
        "Genitive pronoun 'tanna' (its) + subject plural 'bettagalu' (hills) + dative 'havaamaanakke' (to climate).",
        "Accusative pronoun 'idannu' (this) + 'Kashmir endu' (as Kashmir) + verb 'kareyuttaare' (they call).",
        "Adjective 'ugamisuva' (originating) + noun phrase 'Talakaaveeri emba' (called Talakaveri) + 'sthalavide' (is place).",
        "Adverb 'illina' (of here) + accusative 'saundaryavannu' (beauty) + verb 'aasvaadisuttaare' (they relish/enjoy).",
        "Dative plural 'pravaasigarige' (to tourists) + past-participle adjective 'mareyalaagada' (unforgettable) + subject 'anubhavavu'."
      ],
      notesHi: [
        "'jilleyu' कर्ता कारक रूप है। 'havaamaanakke' में संप्रदान कारक है (जलवायु के लिए)।",
        "'idannu' का अर्थ 'इसे' है। 'kareyuttaare' का अर्थ 'बुलाते हैं' है।",
        "'ugamisuva' का अर्थ 'उद्गम होने वाली' है। 'sthalavide' का अर्थ 'स्थान है' है।",
        "'saahasa kreedegalu' का अर्थ 'साहसिक खेल' है। 'aasvaadisuttaare' का अर्थ 'आनंद लेते हैं' है।",
        "'janara aatithyavu' का अर्थ 'लोगों का आतिथ्य सत्कार' है। 'needuttade' का अर्थ 'प्रदान करता है' है।"
      ]
    },
    vocab: [
      { word: "ಹವಾಮಾನ", transliteration: "havaamaana", meaning: "Climate / जलवायु" },
      { word: "ಉಗಮ", transliteration: "ugama", meaning: "Origin / उद्गम" },
      { word: "ಆತಿಥ್ಯ", transliteration: "aatithya", meaning: "Hospitality / आतिथ्य" }
    ]
  },
  17: {
    sentences: {
      kn: [
        "ವಿಜಯಪುರದ ಗೋಲ ಗುಮ್ಮಟವು ಭಾರತದ ಅತ್ಯಂತ ಆಕರ್ಷಕ ಐತಿಹಾಸಿಕ ಕಟ್ಟಡಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ.",
        "ಇದು ಆದಿಲ್ ಶಾಹಿ ರಾಜವಂಶದ ಮೊಹಮ್ಮದ್ ಆದಿಲ್ ಶಾನ ಭವ್ಯವಾದ ಸಮಾಧಿಯಾಗಿದೆ.",
        "ಇಲ್ಲಿನ ವಿಶಾಲವಾದ ಗುಮ್ಮಟವು ಪ್ರಪಂಚದ ಅತಿ ದೊಡ್ಡ ಸ್ವತಂತ್ರ ಗುಮ್ಮಟಗಳಲ್ಲಿ ಎರಡನೆಯದಾಗಿದೆ.",
        "ಇಲ್ಲಿರುವ ವಿಸ್ಪರಿಂಗ್ ಗ್ಯಾಲರಿ ಅಥವಾ ಪಿಸುಗುಟ್ಟುವ ಜಗಲಿಯಲ್ಲಿ ಸಣ್ಣ ಸದ್ದು ಸಹ ಏಳು ಬಾರಿ ಪ್ರತಿಧ್ವನಿಸುತ್ತದೆ.",
        "ಈ ಅದ್ಭುತ ವಾಸ್ತುಶಿಲ್ಪ ವೈಭವವು ಚಾರಿತ್ರಿಕ ಕಲೆ ಮತ್ತು ಇಂಜಿನಿಯರಿಂಗ್ ಕೌಶಲ್ಯದ ಹೆಮ್ಮೆಯ ಪ್ರತೀಕವಾಗಿದೆ."
      ],
      tr: [
        "Vijayapurada Goola Gummatavu bhaaratada atyanta aakarshaka aitihasika kattadagalalli ondagaide.",
        "Idu Aadil Shaahi raajavamshada Mohammad Aadil Shaana bhavyavaada samaadhiyaagide.",
        "Illina vishaalavaada gummatavu prapanchada ati doddha swatantra gummatagalalli eradaneyadaagide.",
        "Illiruva Whispering Gallery athavaa pisuguttuva jagaliyalli sanna saddu saha eelu baari pratidhvanisuttade.",
        "Ee adbhuta vaastushilpa vaibhavavu chaaritrika kale mattu engineering kaushalyada hemmeya prateekavaagide."
      ],
      en: [
        "The Gol Gumbaz of Vijayapura is one of the most stunning historical monuments in India.",
        "It is the majestic tomb of Mohammed Adil Shah, the ruler of the historic Adil Shahi dynasty.",
        "Its colossal dome is historically renowned as the second largest dome in the world supported without pillars.",
        "In its famous Whispering Gallery, even the softest whisper echoes beautifully up to seven times.",
        "This incredible architectural marvel stands as a proud symbol of medieval art and engineering skill."
      ],
      hi: [
        "विजयपुरा का गोल गुंबद भारत की सबसे आकर्षक ऐतिहासिक इमारतों में से एक है।",
        "यह आदिल शाही राजवंश के मोहम्मद आदिल शाह का एक भव्य मकबरा है।",
        "यहाँ का विशाल गुंबद बिना स्तंभों के खड़ा दुनिया का दूसरा सबसे बड़ा गुंबद है।",
        "यहाँ की 'व्हिस्परिंग गैलरी' (पिसुगुट्टुवा जगली) में एक हल्की सी आवाज़ भी सात बार गूंजती है।",
        "यह अद्भुत वास्तुकला वैभव ऐतिहासिक कला और इंजीनियरिंग कौशल का एक गौरवशाली प्रतीक है।"
      ],
      notesEn: [
        "Genitive 'Vijayapurada' (of Vijayapura) + locative plural 'kattadagalalli' (among buildings) + 'ondagaide' (is one).",
        "Genitive 'raajavamshada' (of dynasty) + 'samaadhiyaagide' (is tomb/mausoleum).",
        "Adverb 'illina' (of here) + locative plural 'gummatagalalli' (among domes) + ordinal number 'eradaneyadaagide' (is second).",
        "Locative 'jagaliyalli' (in gallery) + subject 'saddu' (noise) + adverbial 'eelu baari' (seven times) + verb 'pratidhvanisuttade' (it echoes).",
        "Genitive 'kaushalyada' (of skill) + genitive 'hemmeya' (of pride) + 'prateekavaagide' (is symbol)."
      ],
      notesHi: [
        "'Vijayapurada' में संबंध कारक है (विजयपुरा का)। 'kattadagalalli' का अर्थ 'इमारतों में' है।",
        "'raajavamshada' का अर्थ 'राजवंश का' है। 'samaadhiyaagide' का अर्थ 'मकबरा है' है।",
        "'gummatavu' कर्ता कारक है। 'eradaneyadaagide' का अर्थ 'दूसरा है' होता है।",
        "'jagaliyalli' में अधिकरण कारक है (गैलरी में)। 'pratidhvanisuttade' का अर्थ 'प्रतिध्वनित होता है' है।",
        "'hemmeya' का अर्थ 'गर्व का' है। 'prateekavaagide' का अर्थ 'प्रतीक है' है।"
      ]
    },
    vocab: [
      { word: "ಗುಮ್ಮಟ", transliteration: "gummata", meaning: "Dome / गुंबद" },
      { word: "ಪ್ರತಿಧ್ವನಿ", transliteration: "pratidhvani", meaning: "Echo / प्रतिध्वनि" },
      { word: "ಕೌಶಲ್ಯ", transliteration: "kaushalya", meaning: "Skill / कौशल" }
    ]
  },
  18: {
    sentences: {
      kn: [
        "ಶ್ರವಣಬೆಳಗೊಳವು ಹಾಸನ ಜಿಲ್ಲೆಯಲ್ಲಿರುವ ಜಗತ್ಪ್ರಸಿದ್ಧ ಜೈನ ಧಾರ್ಮಿಕ ಮತ್ತು ಪಾರಂಪರಿಕ ತಾಣವಾಗಿದೆ.",
        "ಇಲ್ಲಿನ ವಿಂಧ್ಯಗಿರಿ ಬೆಟ್ಟದ ಮೇಲೆ ಐವತ್ತೇಳು ಅಡಿ ಎತ್ತರದ ಭಗವಾನ್ ಬಾಹುಬಲಿಯ ಏಕಶಿಲಾ ಮೂರ್ತಿ ಇದೆ.",
        "ಹತ್ತನೇ ಶತಮಾನದಲ್ಲಿ ಗಂಗ ರಾಜವಂಶದ ಮಂತ್ರಿ ಚಾವುಂಡರಾಯನು ಈ ಭವ್ಯ ಮೂರ್ತಿಯನ್ನು ಕೆತ್ತಿಸಿದನು.",
        "ಪ್ರತಿ ಹನ್ನೆರಡು ವರ್ಷಗಳಿಗೊಮ್ಮೆ ಇಲ್ಲಿ ಜರುಗುವ ಮಹಾಮಸ್ತಕಾಭಿಷೇಕ ಮಹೋತ್ಸವವು ಅತ್ಯಂತ ವೈಭವದಿಂದ ನಡೆಯುತ್ತದೆ.",
        "ಈ ಪವಿತ್ರ ಮೂರ್ತಿಯು ತ್ಯಾಗ, ಶಾಂತಿ ಮತ್ತು ಅಹಿಂಸೆಯ ಭವ್ಯ ಸಂದೇಶವನ್ನು ಜಗತ್ತಿಗೆ ಸಾರುತ್ತದೆ."
      ],
      tr: [
        "Shravanabelagolavu Haasana jilleyalliruva jagatprasiddha Jaina dhaarmika mattu paarampatika taanavaagide.",
        "Illina Vindhyagiri bettada meele ivattélu adi ettarada bhagavaan Baahubaliya eekashilaa moorti ide.",
        "Hattane shatamaanadalli Ganga raajavamshada mantri Chaavundaraayanu ee bhavyavaada moortiyannu kettisidanu.",
        "Prati hanneradu varshagaligomme illi jaruguva Mahaamastakaabhisheeka mahotsavavu atyanta vaibhavadinda nadeyuttade.",
        "Ee pavitra moortiyu tyaaga, shaanti mattu ahimseya bhavya sandeshavannu jagattige saaruttade."
      ],
      en: [
        "Shravanabelagola is a world-renowned Jain pilgrimage and heritage site located in Hassan district.",
        "Atop the Vindhyagiri hill stands the colossal, fifty-seven feet tall monolithic statue of Lord Bahubali.",
        "Commissioned in the tenth century by Chavundaraya, a minister of the Ganga dynasty, this statue is carved from a single rock.",
        "Held once every twelve years, the mega Mahamastakabhisheka festival is celebrated here with ultimate grandeur.",
        "This sacred statue proclaims the divine message of sacrifice, peace, and non-violence to the world."
      ],
      hi: [
        "श्रवणबेलगोला हासन जिले में स्थित एक विश्व प्रसिद्ध जैन धार्मिक और विरासत स्थल है।",
        "यहाँ विंध्यगिरि पहाड़ी पर भगवान बाहुबली की सत्तावन फीट ऊंची विशाल अखंड (एक ही पत्थर की) मूर्ति है।",
        "दसवीं शताब्दी में गंगा राजवंश के मंत्री चामुंडराय ने इस भव्य मूर्ति का निर्माण करवाया था।",
        "हर बारह साल में एक बार आयोजित होने वाला 'महामस्तकाभिषेक' महोत्सव यहाँ बड़े ही वैभव के साथ मनाया जाता है।",
        "यह पवित्र मूर्ति त्याग, शांति और अहिंसा का महान संदेश दुनिया को देती है।"
      ],
      notesEn: [
        "Subject 'Shravanabelagolavu' (Shravanabelagola indeed) + 'taanavaagide' (is destination).",
        "Genitive 'bettada' (of hill) + postposition 'meele' (over) + genitive 'Baahubaliya' (of Bahubali) + 'moorti ide' (statue is there).",
        "Locative 'shatamaanadalli' (in century) + subject 'Chaavundaraayanu' (Chavundaraya) + causal past verb 'kettisidanu' (he got carved).",
        "Dative 'varshagalige' (to years) + postposition 'omme' (once) + instrumental 'vaibhavadinda' (with grandeur).",
        "Genitive 'ahimseya' (of non-violence) + dative 'jagattige' (to world) + verb 'saaruttade' (proclaims)."
      ],
      notesHi: [
        "'Shravanabelagolavu' कर्ता कारक है। 'taanavaagide' का अर्थ 'स्थल है' है।",
        "'bettada meele' का अर्थ है 'पहाड़ी पर'। 'eekashilaa' का अर्थ 'एक ही पत्थर की' है।",
        "'shatamaanadalli' में अधिकरण कारक है (शताब्दी में)। 'kettisidanu' प्रेरणार्थक भूतकाल क्रिया है।",
        "'varshagaligomme' का अर्थ 'वर्षों में एक बार' है। 'nadeyuttade' का अर्थ 'आयोजित होता है' है।",
        "'ahimseya' संबंध कारक है (अहिंसा का)। 'saaruttade' का अर्थ है 'घोषित करता है'।"
      ]
    },
    vocab: [
      { word: "ಏಕಶಿಲಾ", transliteration: "eekashilaa", meaning: "Monolith / अखंड पत्थर" },
      { word: "ತ್ಯಾಗ", transliteration: "tyaaga", meaning: "Sacrifice / त्याग" },
      { word: "ಅಹಿಂಸೆ", transliteration: "ahimse", meaning: "Non-violence / अहिंसा" }
    ]
  },
  19: {
    sentences: {
      kn: [
        "ನಂದಿ ಬೆಟ್ಟವು ಚಿಕ್ಕಬಳ್ಳಾಪುರ ಜಿಲ್ಲೆಯಲ್ಲಿರುವ ಬೆಂಗಳೂರಿಗರಿಗೆ ಅತ್ಯಂತ ಹತ್ತಿರದ ಮತ್ತು ಸುಂದರ ಗಿರಿಧಾಮವಾಗಿದೆ.",
        "ಇದು ಬೆಳಗಿನ ಸುಂದರ ಸೂರ್ಯೋದಯ ಮತ್ತು ದಟ್ಟವಾದ ಮಂಜಿನ ಸೌಂದರ್ಯಕ್ಕೆ ಜಗತ್ಪ್ರಸಿದ್ಧಿಯಾಗಿದೆ.",
        "ಬೆಟ್ಟದ ತುದಿಯಲ್ಲಿ ಯೋಗನಂದೀಶ್ವರ ದೇವಾಲಯ ಮತ್ತು ಐತಿಹಾಸಿಕ ಟಿಪ್ಪು ಸುಲ್ತಾನನ ಬೇಸಿಗೆ ಅರಮನೆ ಇದೆ.",
        "ವಾರಾಂತ್ಯದಲ್ಲಿ ಸಾವಿರಾರು ಯುವಕರು ಮತ್ತು ಕುಟುಂಬಗಳು ಪ್ರಕೃತಿಯ ತಂಪಾದ ಗಾಳಿಯನ್ನು ಆನಂದಿಸಲು ಇಲ್ಲಿಗೆ ಬರುತ್ತಾರೆ.",
        "ನಗರ ಜೀವನದ ಜಂಜಾಟದಿಂದ ದೂರವಿದ್ದು ಪ್ರಶಾಂತತೆ ಪಡೆಯಲು ನಂದಿ ಬೆಟ್ಟವು ಅತ್ಯುತ್ತಮ ತಾಣವಾಗಿದೆ."
      ],
      tr: [
        "Nandi bettavu Chikkaballaapura jilleyalliruva Bengaloorigarige atyanta hattirada mattu sundara giridhaamavaagide.",
        "Idu belagina sundara sooryoodaya mattu dattavaada manjina saundaryakke jagatprasiddhiyaagide.",
        "Bettada tudiyalliruva Yoganandeeshwara deevaalaya mattu aitihasika Tippu Sultana-na beesige aramane ide.",
        "Waaraantyadalli saaviraaru yuvakaru mattu kutumbagalu prakritiya tampaada gaaliyannu aanandisalu illige baruttaare.",
        "Nagara jeevanada janjaatadinda dooraviddu prashaantate padeyalu Nandi bettavu atyuttama taanavaagide."
      ],
      en: [
        "Nandi Hills is a beautiful and highly popular hill station located in Chikkaballapur district, close to Bengaluru.",
        "It is famous for its breathtaking golden sunrise and spectacular thick sea of mist in the early mornings.",
        "Atop the hill, one can explore the ancient Yoganandeeshwara Temple and Tipu Sultan's historic summer palace.",
        "During weekends, thousands of youths and families visit here to enjoy the fresh cool breeze of nature.",
        "Nandi Hills serves as a perfect tranquil getaway to escape the busy hustle and bustle of city life."
      ],
      hi: [
        "नंदी हिल्स चिक्कबल्लापुर जिले में स्थित बेंगलुरुवासियों के लिए सबसे करीबी और सुंदर हिल स्टेशन है।",
        "यह सुबह के सुंदर सूर्योदय और घने कोहरे (मंजू) के अद्भुत नजारे के लिए प्रसिद्ध है।",
        "पहाड़ी की चोटी पर योगनंदीश्वर मंदिर और ऐतिहासिक टीपू सुल्तान का ग्रीष्मकालीन महल स्थित है।",
        "सप्ताहांत (वीकेंड) पर हजारों युवा और परिवार प्रकृति की ठंडी हवा का आनंद लेने यहाँ आते हैं।",
        "शहरी जीवन की भागदौड़ से दूर शांति प्राप्त करने के लिए नंदी हिल्स एक बेहतरीन स्थान है।"
      ],
      notesEn: [
        "Dative 'Bengaloorigarige' (to Bengalureans) + superlative adjective 'hattirada' (closest) + 'giridhaamavaagide' (is hill station).",
        "Genitive 'belagina' (of morning) + genitive 'manjina' (of mist) + dative 'saundaryakke' (to beauty).",
        "Genitive 'bettada' (of hill) + locative 'tudiyalli' (at the top) + genitive 'Sultana-na' (of Sultan) + 'aramane ide'."
      ],
      notesHi: [
        "'giridhaama' का अर्थ 'हिल स्टेशन' है। 'Bengaloorigarige' में संप्रदान कारक है।",
        "'belagina' का अर्थ 'सुबह का' है। 'saundaryakke' में संप्रदान कारक है।",
        "'tudiyalli' का अर्थ 'चोटी पर' (अधिकरण) है। 'beesige aramane' का अर्थ 'ग्रीष्मकालीन महल' है।"
      ]
    },
    vocab: [
      { word: "ಗಿರಿಧಾಮ", transliteration: "giridhaama", meaning: "Hill Station / हिल स्टेशन" },
      { word: "ಸೂರ್ಯೋದಯ", transliteration: "sooryoodaya", meaning: "Sunrise / सूर्योदय" },
      { word: "ಪ್ರಶಾಂತತೆ", transliteration: "prashaantate", meaning: "Tranquility / शांति" }
    ]
  },
  20: {
    sentences: {
      kn: [
        "ಬಾದಾಮಿಯು ಬಾಗಲಕೋಟೆ ಜಿಲ್ಲೆಯಲ್ಲಿರುವ ಪ್ರಾಚೀನ ಚಾಲುಕ್ಯ ರಾಜವಂಶದ ಐತಿಹಾಸಿಕ ರಾಜಧಾನಿಯಾಗಿದೆ.",
        "ಇಲ್ಲಿನ ಕಲ್ಲಿನ ಬೆಟ್ಟಗಳಲ್ಲಿ ಕೊರೆಯಲಾದ ನಾಲ್ಕು ಸುಂದರ ಗುಹಾಂತರ ದೇವಾಲಯಗಳು ಶಿಲ್ಪಕಲೆಗೆ ಹೆಸರುವಾಸಿಯಾಗಿವೆ.",
        "ಗುಹೆಗಳಲ್ಲಿ ಕೆತ್ತಲಾದ ಭಗವಾನ್ ನಟರಾಜ ಮತ್ತು ವಿಷ್ಣುವಿನ ಭವ್ಯ ಶಿಲ್ಪಗಳು ಹಿಂದೂ ಸಂಸ್ಕೃತಿಯನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತವೆ.",
        "ಬೆಟ್ಟಗಳ ನಡುವೆ ಇರುವ ಅಗಸ್ತ್ಯ ತೀರ್ಥ ಕೆರೆಯ ಸೌಂದರ್ಯವು ಇಡೀ ಜಾಗಕ್ಕೆ ಮಾಂತ್ರಿಕ ನೋಟವನ್ನು ನೀಡುತ್ತದೆ.",
        "ನಮ್ಮ ಪೂರ್ವಜರ ಅಪ್ರತಿಮ ವಾಸ್ತುಶಿಲ್ಪ ಕೌಶಲ್ಯವನ್ನು ಅರಿಯಲು ಬಾದಾಮಿಯು ಒಂದು ಅತ್ಯುನ್ನತ ತಾಣವಾಗಿದೆ."
      ],
      tr: [
        "Baadaamiyu Baagalakoote jilleyalliruva praacheena Chaalukya raajavamshada aitihasika raajadhaaniyaagide.",
        "Illina kallina bettagalalli koreyalaada naalku sundara guhaantara deevaalayagalu shilpakalegge hesaruvaasiyaagive.",
        "Guhegalalli kettalaada bhagavaan Nataraaja mattu Vishnu-vina bhavya shilpagalu Hindoo samskritiyannu pratinidhisuttave.",
        "Bettagala naduve iruva Agastya Teertha kereya saundaryavu idee jaagakke maantrika nootavannu needuttade.",
        "Namma poorvajara apratima vaastushilpa kaushalyavannu ariyalu Baadaamiyu ondu atyunnata taanavaagide."
      ],
      en: [
        "Badami is a historic town in Bagalkot district and was once the regal capital of the ancient Chalukya dynasty.",
        "It is world-famous for its four beautiful cave temples carved exquisitely into sandstone cliffs.",
        "The majestic sculptures of Lord Nataraja and Lord Vishnu carved inside these caves represent rich Hindu heritage.",
        "The scenic beauty of Agastya Teertha Lake nestled between the hills adds a magical charm to this entire place.",
        "Badami is an exceptional destination to experience and study the outstanding architectural skills of our ancestors."
      ],
      hi: [
        "बादामी बागलकोट जिले में स्थित प्राचीन चालुक्य राजवंश की ऐतिहासिक राजधानी है।",
        "यहाँ की पथरीली पहाड़ियों में तराशे गए चार सुंदर गुफा मंदिर अपनी मूर्तिकला के लिए प्रसिद्ध हैं।",
        "गुफाओं में उकेरी गई भगवान नटराज और विष्णु की भव्य मूर्तियां हिंदू संस्कृति का प्रतिनिधित्व करती हैं।",
        "पहाड़ियों के बीच स्थित अगस्त्य तीर्थ झील का सौंदर्य इस पूरे स्थान को एक जादुई रूप प्रदान करता है।",
        "हमारे पूर्वजों के अद्वितीय वास्तुकला कौशल को समझने के लिए बादामी एक सर्वोत्तम स्थल है।"
      ],
      notesEn: [
        "Genitive 'raajavamshada' (of dynasty) + 'raajadhaaniyaagide' (is the capital).",
        "Locative plural 'bettagalalli' (in hills) + past participle 'koreyalaada' (carved/cut) + plural predicate 'hesaruvaasiyaagive'.",
        "Locative plural 'guhegalalli' (in caves) + genitive 'Vishnu-vina' (of Vishnu) + verb 'pratinidhisuttave' (they represent)."
      ],
      notesHi: [
        "'raajadhaaniyaagide' का अर्थ 'राजधानी है' है।",
        "'bettagalalli' में अधिकरण बहुवचन है (पहाड़ियों में)। 'koreyalaada' का अर्थ 'तराशा गया' है।",
        "'guhegalalli' का अर्थ 'गुफाओं में' है। 'kettalaada' का अर्थ 'उकेरी गई' है।"
      ]
    },
    vocab: [
      { word: "ಗುಹಾಂತರ", transliteration: "guhaantara", meaning: "Cave Interior / गुफा के भीतर" },
      { word: "ಪೂರ್ವಜರು", transliteration: "poorvajaru", meaning: "Ancestors / पूर्वज" },
      { word: "ಅಪ್ರತಿಮ", transliteration: "apratima", meaning: "Unmatched / अद्वितीय" }
    ]
  },

  // === CATEGORY 3: FOOD & CUISINE (21-30) ===
  21: {
    sentences: {
      kn: [
        "ಮಸಾಲೆ ದೋಸೆಯು ಕರ್ನಾಟಕದ ಅತ್ಯಂತ ಜನಪ್ರಿಯ ಮತ್ತು ರುಚಿಕರವಾದ ಸಾಂಪ್ರದಾಯಿಕ ಉಪಹಾರವಾಗಿದೆ.",
        "ಇದನ್ನು ಅಕ್ಕಿ ಮತ್ತು ಉದ್ದಿನ ಬೇಳೆಯ ಹಿಟ್ಟಿನಿಂದ ಕಾವಲಿಯ ಮೇಲೆ ತೆಳುವಾಗಿ ಮತ್ತು ಗರಿಗರಿಯಾಗಿ ತಯಾರಿಸಲಾಗುತ್ತದೆ.",
        "ದೋಸೆಯ ಒಳಗೆ ಆಲೂಗಡ್ಡೆಯ ಮಸಾಲೆ ಪಲ್ಯವನ್ನು ತುಂಬಿಸಿ, ಮೇಲಿನಿಂದ ತುಪ್ಪ ಅಥವಾ ಬೆಣ್ಣೆಯನ್ನು ಹಾಕಲಾಗುತ್ತದೆ.",
        "ಬಿಸಿಬಿಸಿಯಾದ ಮಸಾಲೆ ದೋಸೆಯನ್ನು ಕಾಯಿ ಚಟ್ನಿ ಮತ್ತು ಬಿಸಿ ಸಾಂಬಾರ್ ಜೊತೆಗೆ ಬಡಿಸಲಾಗುತ್ತದೆ.",
        "ಮೈಸೂರಿನ ಮೈಲಾರಿ ದೋಸೆ ಮತ್ತು ಬೆಂಗಳೂರಿನ ಹೋಟೆಲ್‌ಗಳ ದೋಸೆ ಪ್ರಪಂಚದಾದ್ಯಂತ ಹೆಸರುವಾಸಿಯಾಗಿದೆ."
      ],
      tr: [
        "Masaale doose-yu Karnaatakada atyanta janapriya mattu ruchikaravaada saampradaayika upahaaravaagide.",
        "Idannu akki mattu uddina beeleya hittininda kaavaliya meele teluvaagi mattu garigariyaagi tayaarisalaaguttade.",
        "Dooseya olage aaloogaddeya masaale palyavannu tumbisi, meelininda tuppa athavaa benneyannu haakalaaguttade.",
        "Bisibisiyada masaale doose-yannu kaayi chatni mattu bisi saambaar jootige badisalaaguttade.",
        "Maisoorina Mylari doose mattu Bengaloorina hotel-gala doose prapanchadaadyanta hesaruvaasiyaagide."
      ],
      en: [
        "Masala Dosa is an extremely popular and delicious traditional breakfast item of Karnataka.",
        "It is prepared thinly and crisply on a hot griddle using fermented rice and black gram batter.",
        "A flavorful potato masala filling is placed inside, topped with a generous dollop of ghee or butter.",
        "The piping hot Masala Dosa is served alongside coconut chutney and warm sambar.",
        "Mysore's Mylari Dosa and Bengaluru's iconic hotel dosas are famous all over the world."
      ],
      hi: [
        "मसाला डोसा कर्नाटक का सबसे लोकप्रिय और स्वादिष्ट पारंपरिक नाश्ता है।",
        "इसे चावल और उड़द की दाल के घोल से तवे पर पतला और कुरकुरा बनाया जाता है।",
        "डोसे के अंदर आलू की मसालेदार सूखी सब्जी भरी जाती है और ऊपर से घी या मक्खन लगाया जाता है।",
        "गर्म-गर्म मसाला डोसा नारियल की चटनी और गर्म सांभर के साथ परोसा जाता है।",
        "मैसूर का 'मैलारी डोसा' और बेंगलुरु के होटलों के डोसे दुनिया भर में मशहूर हैं।"
      ],
      notesEn: [
        "Genitive 'Karnaatakada' (of Karnataka) + 'upahaaravaagide' (is breakfast).",
        "Instrumental 'hittininda' (from batter) + locative 'kaavaliya meele' (on griddle) + passive 'tayaarisalaaguttade' (is prepared).",
        "Locative 'dooseya olage' (inside dosa) + accusative 'palyavannu' (filling/curry) + passive 'haakalaaguttade' (is put)."
      ],
      notesHi: [
        "'upahaara' का अर्थ 'नाश्ता' है। 'Masaale doose-yu' कर्ता कारक रूप है।",
        "'hittininda' में करण कारक है (घोल/आटे से)। 'kaavaliya meele' का अर्थ 'तवे पर' है।",
        "'olage' का अर्थ 'भीतर' है। 'tuppa' का अर्थ 'घी' है और 'benne' का अर्थ 'मक्खन' है।"
      ]
    },
    vocab: [
      { word: "ಉಪಹಾರ", transliteration: "upahaara", meaning: "Breakfast / नाश्ता" },
      { word: "ಗರಿಗರಿ", transliteration: "garigari", meaning: "Crispy / कुरकुरा" },
      { word: "ತುಪ್ಪ", transliteration: "tuppa", meaning: "Ghee / घी" }
    ]
  },
  22: {
    sentences: {
      kn: [
        "ಮೈಸೂರು ಪಾಕ್ ಕರ್ನಾಟಕದ ಅತ್ಯಂತ ಹೆಮ್ಮೆಯ ರಾಜಮನೆತನದ ಸಾಂಪ್ರದಾಯಿಕ ಸಿಹಿಯಾಗಿದೆ.",
        "ಇದನ್ನು ಮೈಸೂರು ಅರಮನೆಯಲ್ಲಿ ನಾಲ್ವಡಿ ಕೃಷ್ಣರಾಜ ಒಡೆಯರ್ ಕಾಲದಲ್ಲಿ ಮೊದಲು ತಯಾರಿಸಲಾಯಿತು.",
        "ಕಡಲೆಹಿಟ್ಟು, ಸಕ್ಕರೆ ಮತ್ತು ಹೇರಳವಾದ ತುಪ್ಪವನ್ನು ಬಳಸಿ ಈ ಅದ್ಭುತ ಸಿಹಿಯನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತದೆ.",
        "ಇದು ಬಾಯಲ್ಲಿ ಇಟ್ಟ ತಕ್ಷಣ ಕರಗುವ ಮೃದುವಾದ ಮತ್ತು ವಿಶಿಷ್ಟ ರುಚಿಯನ್ನು ಹೊಂದಿದೆ.",
        "ಮೈಸೂರು ಪಾಕ್ ನಮ್ಮ ನಾಡಿನ ಹಬ್ಬ ಹರಿದಿನಗಳ ಮತ್ತು ಶುಭ ಸಮಾರಂಭಗಳ ಅತ್ಯಗತ್ಯ ಸಿಹಿಯಾಗಿದೆ."
      ],
      tr: [
        "Maisooru paak Karnaatakada atyanta hemmeya raajamanetanada saampradaayika sihiyaagide.",
        "Idannu Maisooru aramaneyalli Naalvadi Krishnaraaja Odeyar kaaladalli modalu tayaarisalaayitu.",
        "Kadalehittu, sakkare mattu heeralaada tuppavannu balasi ee adbhuta sihiyannu siddhapadisalaaguttade.",
        "Idu baayalli itta takshana karaguva mruduvaada mattu vishishta ruchiyannu hondide.",
        "Maisooru paak namma naadina habba haridinagala mattu shubha samaarambhagala atyagatyada sihiyaagide."
      ],
      en: [
        "Mysore Pak is the proud traditional royal sweet delicacy of Karnataka.",
        "It was first prepared in the Mysore Palace kitchens during the reign of Maharaja Krishnaraja Wodeyar IV.",
        "This wonderful sweet is prepared using gram flour, sugar, and a generous amount of pure ghee.",
        "It possesses a soft, rich texture that melts instantly the moment it is placed in the mouth.",
        "Mysore Pak remains an essential sweet for festivals and auspicious celebrations in our state."
      ],
      hi: [
        "मैसूर पाक कर्नाटक की सबसे गौरवशाली शाही पारंपरिक मिठाई है।",
        "इसे पहली बार मैसूर महल में महाराजा कृष्णराज वाडियार चतुर्थ के शासनकाल में बनाया गया था।",
        "यह अद्भुत मिठाई बेसन (कदलेहिट्टु), चीनी और प्रचुर मात्रा में घी का उपयोग करके तैयार की जाती है।",
        "इसका स्वाद बेहद अनोखा होता है जो मुंह में रखते ही तुरंत पिघल जाता है।",
        "मैसूर पाक हमारे राज्य के त्योहारों और शुभ अवसरों की एक अत्यंत आवश्यक मिठाई है।"
      ],
      notesEn: [
        "Genitive 'raajamanetanada' (of royal family) + 'sihiyaagide' (is sweet).",
        "Locative 'aramaneyalli' (in palace) + locative 'kaaladalli' (in time) + passive past 'tayaarisalaayitu' (was prepared).",
        "Accusative 'sihiyannu' (sweet) + past participle 'balasi' (using) + passive 'siddhapadisalaaguttade' (is readied)."
      ],
      notesHi: [
        "'sihi' का अर्थ 'मीठा' या 'मिठाई' होता है। 'hemmeya' का अर्थ 'गर्व का' है।",
        "'aramaneyalli' का अर्थ 'महल में' है। 'modalu' का अर्थ 'सबसे पहले' है।",
        "'kadalehittu' बेसन को कहते हैं। 'tuppa' का अर्थ 'घी' है।"
      ]
    },
    vocab: [
      { word: "ಸಿಹಿ", transliteration: "sihi", meaning: "Sweet / मिठाई" },
      { word: "ಕರಗು", transliteration: "karagu", meaning: "Melt / पिघलना" },
      { word: "ಸಮಾರಂಭ", transliteration: "samaarambha", meaning: "Function/Celebration / समारोह" }
    ]
  },
  23: {
    sentences: {
      kn: [
        "ಬಿಸಿ ಬೇಳೆ ಬಾತನ್ನು ಕರ್ನಾಟಕದ ಸಾಂಪ್ರದಾಯಿಕ ಮತ್ತು ಆರೋಗ್ಯಕರ ಅನ್ನದ ಖಾದ್ಯ ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ.",
        "ಅಕ್ಕಿ, ತೊಗರಿ ಬೇಳೆ ಮತ್ತು ತರಕಾರಿಗಳನ್ನು ಒಟ್ಟಿಗೆ ಬೇಯಿಸಿ ಇದನ್ನು ತಯಾರಿಸಲಾಗುತ್ತದೆ.",
        "ವಿಶೇಷವಾಗಿ ಸಿದ್ಧಪಡಿಸಿದ ಮಸಾಲೆ ಪುಡಿ ಮತ್ತು ತುಪ್ಪದ ಒಗ್ಗರಣೆಯು ಇದಕ್ಕೆ ದೈವಿಕ ರುಚಿಯನ್ನು ನೀಡುತ್ತದೆ.",
        "ಇದನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ಬಿಸಿಬಿಸಿಯಾಗಿ ಖಾರ ಬೂಂದಿ ಅಥವಾ ಹಪ್ಪಳದೊಂದಿಗೆ ಸವಿಯಲಾಗುತ್ತದೆ.",
        "ಪ್ರತಿಯೊಂದು ಕನ್ನಡಿಗರ ಮನೆಯಲ್ಲಿಯೂ ಭಾನುವಾರ ಅಥವಾ ವಿಶೇಷ ದಿನಗಳಲ್ಲಿ ಇದನ್ನು ಪ್ರೀತಿಯಿಂದ ಮಾಡುತ್ತಾರೆ."
      ],
      tr: [
        "Bisi beele baath-annu Karnaatakada saampradaayika mattu aarogyakara annada khaadya endu kareyalaaguttade.",
        "Akki, togari beele mattu tarakarigalannu ottige beeyisi idannu tayaarisalaaguttade.",
        "Visheeshavagi siddhapadisida masaale pudi mattu tuppada oggaraneyu idakke daivika ruchiyannu needuttade.",
        "Idannu saamaanyavaagi bisibisiyagi khaara boondi athavaa happaladondige saviyalaaguttade.",
        "Pratiyondu Kannadigara maneyalliyoo bhaanuvaara athavaa visheesha dinagalalli idannu preetiyinda maaduttaare."
      ],
      en: [
        "Bisi Bele Bath is celebrated as a highly traditional and healthy rice dish of Karnataka.",
        "It is prepared by boiling rice, pigeon pea lentils, and fresh local vegetables together.",
        "A specially prepared aromatic spice powder and a ghee tempering give it a divine flavor.",
        "It is typically savored hot, accompanied by crispy Kara Boondi or roasted papad.",
        "In every Kannada household, this dish is lovingly prepared on Sundays or festive occasions."
      ],
      hi: [
        "बिसी बेले बाथ को कर्नाटक का एक पारंपरिक और स्वास्थ्यवर्धक चावल का मुख्य व्यंजन माना जाता है।",
        "इसे चावल, अरहर की दाल (तोगरी बेले) और सब्जियों को एक साथ पकाकर तैयार किया जाता है।",
        "विशेष रूप से तैयार किया गया मसाला पाउडर और घी का तड़का इसे एक दिव्य स्वाद प्रदान करता है।",
        "इसे आमतौर पर गरमागरम मसालेदार बूंदी (खारा बूंदी) या पापड़ के साथ परोसा जाता है।",
        "हर कन्नड़ घर में रविवार या विशेष दिनों में इसे बड़े ही प्यार से बनाया जाता है।"
      ],
      notesEn: [
        "Accusative name 'baath-annu' + adjective 'aarogyakara' (healthy) + 'kareyalaaguttade' (is called).",
        "Subject plural 'tarakarigalannu' (vegetables) + verbal participle 'beeyisi' (having cooked) + passive.",
        "Dative pronoun 'idakke' (to this) + subject 'oggaraneyu' (tempering) + verb 'needuttade' (gives)."
      ],
      notesHi: [
        "'aarogyakara' का अर्थ 'स्वास्थ्यवर्धक' है। 'annada' का अर्थ है 'चावल का' (संबंध कारक)।",
        "'beeyisi' का अर्थ है 'उबालकर/पकाकर'। 'tayaarisalaaguttade' का अर्थ 'तैयार किया जाता है' है।",
        "'pudi' का अर्थ 'पाउडर/चूर्ण' है। 'oggaraane' तड़के को कहते हैं।"
      ]
    },
    vocab: [
      { word: "ಬಿಸಿ", transliteration: "bisi", meaning: "Hot / गर्म" },
      { word: "ಒಗ್ಗರಣೆ", transliteration: "oggaraane", meaning: "Tempering / तड़का" },
      { word: "ತರಕಾರಿ", transliteration: "tarakari", meaning: "Vegetables / सब्जियां" }
    ]
  },
  24: {
    sentences: {
      kn: [
        "ರಾಗಿ ಮುದ್ದೆಯು ದಕ್ಷಿಣ ಕರ್ನಾಟಕದ ಗ್ರಾಮೀಣ ಭಾಗಗಳ ಅತ್ಯಂತ ಪೌಷ್ಟಿಕ ಮತ್ತು ಶಕ್ತಿ ನೀಡುವ ಮುಖ್ಯ ಆಹಾರವಾಗಿದೆ.",
        "ರಾಗಿ ಹಿಟ್ಟನ್ನು ಕುದಿಯುವ ನೀರಿನಲ್ಲಿ ಬೆರೆಸಿ, ಕೋಲಿನಿಂದ ತಿರುವಿ ದುಂಡಗಿನ ಮುದ್ದೆಗಳನ್ನಾಗಿ ಮಾಡಲಾಗುತ್ತದೆ.",
        "ಇದು ಕಬ್ಬಿಣಾಂಶ ಮತ್ತು ಕ್ಯಾಲ್ಸಿಯಂನಿಂದ ಸಮೃದ್ಧವಾಗಿದ್ದು, ದೇಹದ ಆರೋಗ್ಯಕ್ಕೆ ಅತ್ಯುತ್ತಮವಾಗಿದೆ.",
        "ರಾಗಿ ಮುದ್ದೆಯನ್ನು ಅಗಿಯದೆ ಬಿಸಿಬಿಸಿಯಾದ ಮಟನ್ ಸಾರು ಅಥವಾ ಬಸ್ಸಾರಿನೊಂದಿಗೆ ನುಂಗಿ ಸವಿಯಲಾಗುತ್ತದೆ.",
        "ಇದು ಕೇವಲ ಗ್ರಾಮೀಣ ಆಹಾರವಲ್ಲ, ಇಂದು ನಗರ ಪ್ರದೇಶದ ಜನರೂ ಇದರ ಆರೋಗ್ಯ ಗುಣಗಳಿಗಾಗಿ ಇಷ್ಟಪಡುತ್ತಾರೆ."
      ],
      tr: [
        "Raagi mudde-yu dakshina Karnaatakada graameena bhaagagala atyanta paashtika mattu shakti needuva mukhya aahaaravaagide.",
        "Raagi hittannu kudiyuva neeralli beresi, koolininda tiruvi dundagina muddegalannaagi maadalaaguttade.",
        "Idu kabbinaamsha mattu calcium-ninda samruddhavaagiddu, deehada aarogyakke atyuttamavaagide.",
        "Raagi muddeyannu agiyade bisibisiyada mutton saaru athavaa bassaarinondige nungi saviyalaaguttade.",
        "Idu keevala graameena aahaaravalla, indu nagara pradeeshada janaroo idara aarogya gunagaligaagi ishtapaduttaare."
      ],
      en: [
        "Ragi Mudde is an extremely nutritious and strength-giving staple food of southern Karnataka's rural belt.",
        "It is made by mixing finger millet flour in boiling water, stirring with a wooden stick, and shaping into round balls.",
        "Rich in iron and calcium, this superfood is excellent for overall body health and energy.",
        "Ragi Mudde is typically swallowed without chewing, dipped in hot mutton curry or traditional Bassaru.",
        "It is no longer just a rural meal; today, urban citizens also love it for its immense health benefits."
      ],
      hi: [
        "रागी मुद्दे दक्षिण कर्नाटक के ग्रामीण क्षेत्रों का अत्यंत पौष्टिक और ऊर्जा देने वाला मुख्य भोजन है।",
        "रागी के आटे को उबलते पानी में मिलाकर, लकड़ी की छड़ी से हिलाकर गोल गेंद के आकार में बनाया जाता है।",
        "यह आयरन और कैल्शियम से भरपूर होता है और शरीर के स्वास्थ्य के लिए सर्वोत्तम है।",
        "रागी मुद्दे को चबाए बिना गरमागरम मटन शोरबा या पारंपरिक बस्सारू के साथ निगलकर खाया जाता है।",
        "यह केवल ग्रामीण भोजन नहीं है; आज शहरी क्षेत्रों के लोग भी इसके स्वास्थ्य गुणों के कारण इसे पसंद करते हैं।"
      ],
      notesEn: [
        "Genitive 'graameena bhaagagala' (of rural areas) + active participle 'shakti needuva' (strength giving) + 'aahaaravaagide' (is food).",
        "Accusative 'hittannu' (flour) + locative 'neeralli' (in water) + instrumental 'koolininda' (with stick) + passive verb.",
        "Instrumental suffix '-inda' in 'samruddhavaagiddu' (being rich with) + dative 'aarogyakke' (to health)."
      ],
      notesHi: [
        "'graameena' का अर्थ 'ग्रामीण' है। 'paashtika' का अर्थ 'पौष्टिक' है।",
        "'neeralli' में अधिकरण कारक है (पानी में)। 'muddegalannaagi' का अर्थ है 'मुद्दे (गोले) के रूप में'।"
      ]
    },
    vocab: [
      { word: "ಮುದ್ದೆ", transliteration: "mudde", meaning: "Soft Ball / लोई या गोला" },
      { word: "ಕುದಿಯುವ", transliteration: "kudiyuva", meaning: "Boiling / उबलता हुआ" },
      { word: "ಆರೋಗ್ಯ", transliteration: "aarogya", meaning: "Health / स्वास्थ्य" }
    ]
  },
  25: {
    sentences: {
      kn: [
        "ಇಡ್ಲಿ ಮತ್ತು ವಡೆಯು ಕರ್ನಾಟಕದ ಪ್ರತಿಯೊಂದು ಹೋಟೆಲ್ ಮತ್ತು ಮನೆಯ ಅತ್ಯಂತ ಪ್ರಸಿದ್ಧ ಬೆಳಗಿನ ಉಪಹಾರವಾಗಿದೆ.",
        "ಮೃದುವಾದ ಮಲ್ಲಿಗೆಯಂತಹ ಇಡ್ಲಿ ಮತ್ತು ಗರಿಗರಿಯಾದ ಉದ್ದಿನ ವಡೆ ಅತ್ಯುತ್ತಮ ಜೋಡಿಯಾಗಿದೆ.",
        "ಇದನ್ನು ಅಕ್ಕಿ ಮತ್ತು ಉದ್ದಿನ ಬೇಳೆಯನ್ನು ನೆನೆಸಿ, ರುಬ್ಬಿ, ಹಬೆಯಲ್ಲಿ ಬೇಯಿಸಿ ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತದೆ.",
        "ಬಿಸಿ ಇಡ್ಲಿ-ವಡೆಯನ್ನು ಒದ್ದೆಯಾದ ಕಾಯಿ ಚಟ್ನಿ ಮತ್ತು ಬಿಸಿ ಸಾಂಬಾರಿನಲ್ಲಿ ಮುಳುಗಿಸಿ ತಿನ್ನಲು ಅದ್ಭುತವಾಗಿರುತ್ತದೆ.",
        "ಬೆಂಗಳೂರಿನ ದರ್ಶಿನಿ ಹೋಟೆಲ್‌ಗಳು ಈ ರುಚಿಕರವಾದ ತಿಂಡಿಯನ್ನು ಅತ್ಯಂತ ವೇಗವಾಗಿ ಬಡಿಸಲು ಹೆಸರುವಾಸಿಯಾಗಿವೆ."
      ],
      tr: [
        "Idli mattu vade-yu Karnaatakada pratiyondu hotel mattu maneya atyanta prasiddha belagina upahaaravaagide.",
        "Mruduvaada malligeyantaha idli mattu garigariyada uddina vade atyuttama jodiyaagide.",
        "Idannu akki mattu uddina beeleyannu neneesi, rubbi, habeyalli beeyisi siddhapadisalaaguttade.",
        "Bisi idli-vadeyannu oddeyada kaayi chatni mattu bisi saambaarinalli mulugisi tinnalu adbhutavaagiruttade.",
        "Bengaloorina Darshini hotel-galu ee ruchikaravaada tindiyannu atyanta vegavaagi badisalu hesaruvaasiyaagive."
      ],
      en: [
        "Idli and Vada form the most iconic and popular morning breakfast combo in every hotel and home of Karnataka.",
        "Soft, jasmine-like steamed idlis and crispy urad dal vadas make an absolutely perfect culinary pair.",
        "They are prepared by soaking rice and black gram, grinding them, and steaming the batter.",
        "Dipping the hot idlis and vadas in fresh coconut chutney and piping hot sambar is a heavenly experience.",
        "Bengaluru's popular Darshini hotels are globally famous for serving this tasty breakfast within seconds."
      ],
      hi: [
        "इडली और वड़ा कर्नाटक के हर होटल और घर का सबसे प्रसिद्ध सुबह का नाश्ता है।",
        "मुलायम, चमेली जैसी इडली और कुरकुरा उड़द दाल का वड़ा एक बेहतरीन जोड़ी है।",
        "इसे चावल और उड़द की दाल को भिगोकर, पीसकर और भाप (हबे) में पकाकर तैयार किया जाता है।",
        "गर्म इडली-वड़े को गीली नारियल की चटनी और गर्म सांभर में डुबोकर खाना लाजवाब होता है।",
        "बेंगलुरु के 'दर्शिनी' होटल इस स्वादिष्ट नाश्ते को बहुत तेजी से परोसने के लिए जाने जाते हैं।"
      ],
      notesEn: [
        "Subject 'idli mattu vade-yu' + genitive 'maneya' (of home) + 'upahaaravaagide' (is breakfast).",
        "Adjective 'mruduvaada' (soft) + comparison suffix '-antaha' in 'malligeyantaha' (jasmine-like) + 'jodiyaagide' (is pair).",
        "Accusative plural 'beeleyannu' + locative 'habeyalli' (in steam) + passive verb."
      ],
      notesHi: [
        "'belagina' का अर्थ 'सुबह का' है। 'upahaaravaagide' का अर्थ 'नाश्ता है' है।",
        "'vade-yu' कर्ता कारक रूप है। 'garigariyada' का अर्थ 'कुरकुरा' है।",
        "'habeyalli' में अधिकरण कारक है (भाप में)। 'beeyisi' का अर्थ 'पकाकर' है।"
      ]
    },
    vocab: [
      { word: "ಹಬೆ", transliteration: "habe", meaning: "Steam / भाप" },
      { word: "ತಿಂಡಿ", transliteration: "tindi", meaning: "Snack/Breakfast / जलपान या नाश्ता" },
      { word: "ಜೋಡಿ", transliteration: "jodi", meaning: "Pair / जोड़ी" }
    ]
  },
  26: {
    sentences: {
      kn: [
        "ಧಾರವಾಡ ಪೇಡವು ಉತ್ತರ ಕರ್ನಾಟಕದ ಹೆಮ್ಮೆಯ ಜಗತ್ಪ್ರಸಿದ್ಧ ಸಾಂಪ್ರದಾಯಿಕ ಹಾಲಿನ ಸಿಹಿಯಾಗಿದೆ.",
        "ಇದನ್ನು ಹಾಲನ್ನು ದೀರ್ಘಕಾಲ ಕುದಿಸಿ ಗಟ್ಟಿಯಾಗಿಸಿ, ಸಕ್ಕರೆ ಬೆರೆಸಿ ಕೈಯಿಂದ ತಯಾರಿಸಲಾಗುತ್ತದೆ.",
        "ವಿಶೇಷವಾಗಿ ಹುರಿದ ಹಾಲಿನ ಕೋವಾವನ್ನು ಸಕ್ಕರೆಯ ಪುಡಿಯಲ್ಲಿ ಹೊರಳಿಸಿ ಈ ಪೇಡಾವನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತದೆ.",
        "ಇದರ ವಿಶಿಷ್ಟ ಕಡು ಕಂದು ಬಣ್ಣ ಮತ್ತು ಏಲಕ್ಕಿ ಸುವಾಸನೆಯು ಎಲ್ಲರನ್ನೂ ಸೆಳೆಯುತ್ತದೆ.",
        "ಧಾರವಾಡಕ್ಕೆ ಭೇಟಿ ನೀಡುವ ಪ್ರತಿಯೊಬ್ಬ ಪ್ರವಾಸಿಗನೂ ಈ ಸಾಂಪ್ರದಾಯಿಕ ಸಿಹಿಯನ್ನು ಖರೀದಿಸಲು ಮರೆಯುವುದಿಲ್ಲ."
      ],
      tr: [
        "Dhaarwaada peedavu uttara Karnaatakada hemmeya jagatprasiddha saampradaayika haalina sihiyaagide.",
        "Idannu haalannu deerghakaala kudisi gattiyaagisi, sakkare beresi kaiyinda tayaarisalaaguttade.",
        "Visheeshavaagi hurida haalina khovaavannu sakkareya pudiyalli horalisi ee peedaavannu siddhapadisalaaguttade.",
        "Idara vishishta kadu kandu banna mattu eelakki suvaasaneyu ellarannoo seleyuttade.",
        "Dhaarwaadakke bheeti needuva pratiyobba pravaasiganoo ee saampradaayika sihiyannu khareedisalu mareyuvudilla."
      ],
      en: [
        "Dharwad Peda is a world-famous traditional milk sweet and the pride of North Karnataka.",
        "It is prepared by boiling milk for a long time until thick, adding sugar, and shaping it by hand.",
        "The roasted milk solids (Khoya) are rolled in powdered sugar to prepare this rich peda.",
        "Its unique dark brown color and rich cardamom aroma instantly attract everyone.",
        "Every tourist who visits Dharwad never forgets to purchase this delicious traditional sweet."
      ],
      hi: [
        "धारवाड़ पेड़ा उत्तर कर्नाटक की शान और एक विश्व प्रसिद्ध पारंपरिक दूध की मिठाई है।",
        "इसे दूध को लंबे समय तक उबालकर गाढ़ा करके, चीनी मिलाकर हाथ से तैयार किया जाता है।",
        "भुने हुए मावे (खोया) को पिसी हुई चीनी में लपेटकर इस पेड़े को तैयार किया जाता है।",
        "इसका अनोखा गहरा भूरा रंग और इलायची की खुशबू हर किसी को अपनी ओर आकर्षित करती है।",
        "धारवाड़ जाने वाला हर पर्यटक इस पारंपरिक मिठाई को खरीदना कभी नहीं भूलता।"
      ],
      notesEn: [
        "Genitive 'haalina' (of milk) + 'sihiyaagide' (is sweet).",
        "Accusative 'haalannu' (milk) + adverbial 'deerghakaala' (long time) + instrumental 'kaiyinda' (by hand) + passive.",
        "Locative 'pudiyalli' (in powder) + accusative 'peedaavannu' (peda) + passive verb."
      ],
      notesHi: [
        "'haalina' में संबंध कारक है (दूध की)। 'sihiyaagide' का अर्थ है 'मिठाई है'।",
        "'kaiyinda' में करण कारक है (हाथ से)। 'kudisi' का अर्थ 'उबालकर' है।",
        "'banna' का अर्थ 'रंग' है। 'suvaasane' का अर्थ 'सुगंध' है।"
      ]
    },
    vocab: [
      { word: "ಹಾಲು", transliteration: "haalu", meaning: "Milk / दूध" },
      { word: "ಏಲಕ್ಕಿ", transliteration: "eelakki", meaning: "Cardamom / इलायची" },
      { word: "ಬಣ್ಣ", transliteration: "banna", meaning: "Color / रंग" }
    ]
  },
  27: {
    sentences: {
      kn: [
        "ಮಂಗಳೂರು ಬನ್ಸ್ ಕರಾವಳಿ ಕರ್ನಾಟಕದ ಅತ್ಯಂತ ವಿಶಿಷ್ಟ ಮತ್ತು ಜನಪ್ರಿಯ ಖಾದ್ಯವಾಗಿದೆ.",
        "ಇದನ್ನು ಮಾಗಿದ ಬಾಳೆಹಣ್ಣು, ಮೈದಾ ಹಿಟ್ಟು ಮತ್ತು ಮೊಸರನ್ನು ಬಳಸಿ ಮೃದುವಾಗಿ ತಯಾರಿಸಲಾಗುತ್ತದೆ.",
        "ಹಿಟ್ಟನ್ನು ಲಟ್ಟಿಸಿ ಕಾದ ಎಣ್ಣೆಯಲ್ಲಿ ಕರಿದಾಗ ಅದು ಪೂರಿಯಂತೆ ಉಬ್ಬಿ ಮೃದುವಾದ ಬನ್ಸ್ ಆಗುತ್ತದೆ.",
        "ಇದು ಸ್ವಲ್ಪ ಸಿಹಿಯಾದ ಮತ್ತು ಮೃದುವಾದ ಪದರಗಳನ್ನು ಹೊಂದಿರುವ ರುಚಿಕರವಾದ ತಿಂಡಿಯಾಗಿದೆ.",
        "ಕರಾವಳಿ ಪ್ರದೇಶದ ಹೋಟೆಲ್‌ಗಳಲ್ಲಿ ಇದನ್ನು ಬಿಸಿ ಚಟ್ನಿ ಮತ್ತು ಸಾಂಬಾರ್ ಜೊತೆಗೆ ಸವಿಯಲು ನೀಡುತ್ತಾರೆ."
      ],
      tr: [
        "Mangalooru buns karaavali Karnaatakada atyanta vishishta mattu janapriya khaadyavaagide.",
        "Idannu maagida baalehannu, maida hittu mattu mosarannu balasi mruduvaagi tayaarisalaaguttade.",
        "Hittannu lattisi kaada enneyalli karidaaga idu pooriyante ubbi mruduvaada buns aaguttade.",
        "Idu swalpa sihiyada mattu mruduvaada padaragalannu hondiruva ruchikaravaada tindiyaagide.",
        "Karaavali pradeeshada hotel-galalli idannu bisi chatni mattu saambaar jootige saviyalu needuttaare."
      ],
      en: [
        "Mangalore Buns is an extremely unique and popular snack from coastal Karnataka.",
        "It is prepared softly using mashed ripe bananas, all-purpose flour, yogurt, and a touch of cumin.",
        "When the rolled dough is deep-fried in hot oil, it puffs up like a puri into a soft, fluffy bun.",
        "It is a delicious sweet-and-savory pastry with incredibly soft interior layers.",
        "In coastal region hotels, it is served hot alongside spicy coconut chutney and sambar."
      ],
      hi: [
        "मंगलोर बन्स तटीय कर्नाटक का एक बहुत ही अनोखा और लोकप्रिय व्यंजन है।",
        "इसे पके हुए केले (बालेहन्नु), मैदा और दही का उपयोग करके बेहद नरम बनाया जाता है।",
        "जब बेले हुए आटे को गर्म तेल में तला जाता है, तो यह पूरी की तरह फूलकर एक नरम बन्स बन जाता है।",
        "यह हल्के मीठे और नरम परतों वाला एक स्वादिष्ट नाश्ता है।",
        "तटीय क्षेत्रों के होटलों में इसे तीखी चटनी और सांभर के साथ खाने के लिए दिया जाता है।"
      ],
      notesEn: [
        "Genitive 'karaavali' (coastal) + 'Karnaatakada' + 'khaadyavaagide' (is dish).",
        "Subject nouns 'baalehannu' (banana), 'hittu' (flour), 'mosarannu' (yogurt, accusative) + passive verb.",
        "Locative 'enneyalli' (in oil) + comparison suffix '-ante' in 'pooriyante' (like a puri) + verb 'aaguttade' (becomes)."
      ],
      notesHi: [
        "'baalehannu' केले को कहते हैं। 'mosarannu' का अर्थ 'दही को' है।",
        "'enneyalli' का अर्थ 'तेल में' है। 'karidaaga' का अर्थ 'तलने पर' है।",
        "'swalpa' का अर्थ 'थोड़ा/हल्का' है। 'tindi' का अर्थ 'नाश्ता' है।"
      ]
    },
    vocab: [
      { word: "ಬಾಳೆಹಣ್ಣು", transliteration: "baalehannu", meaning: "Banana / केला" },
      { word: "ಎಣ್ಣೆ", transliteration: "enne", meaning: "Oil / तेल" },
      { word: "ಮೊಸರು", transliteration: "mosaru", meaning: "Yogurt / दही" }
    ]
  },
  28: {
    sentences: {
      kn: [
        "ಮದ್ದೂರು ವಡೆಯು ಕರ್ನಾಟಕದ ಮಂಡ್ಯ ಜಿಲ್ಲೆಯ ಮದ್ದೂರು ಪಟ್ಟಣದ ಪ್ರಸಿದ್ಧ ಗರಿಗರಿ ತಿಂಡಿಯಾಗಿದೆ.",
        "ಮೈದಾ, ರವೆ, ಈರುಳ್ಳಿ, ಹಸಿಮೆಣಸಿನಕಾಯಿ ಮತ್ತು ಕರಿಬೇವಿನ ಎಲೆಗಳನ್ನು ಬಳಸಿ ಇದನ್ನು ಮಾಡಲಾಗುತ್ತದೆ.",
        "ಹಿಟ್ಟನ್ನು ಕೈಯಿಂದ ತಟ್ಟಿ ಬಿಸಿ ಎಣ್ಣೆಯಲ್ಲಿ ಗರಿಗರಿಯಾಗುವವರೆಗೆ ಕರಿಯಲಾಗುತ್ತದೆ.",
        "ರೈಲು ಪ್ರಯಾಣಿಕರಿಗೆ ಮತ್ತು ಪ್ರಯಾಣ ಮಾಡುವವರಿಗೆ ಮದ್ದೂರು ನಿಲ್ದಾಣದ ವಡೆಯು ಅತ್ಯಂತ ಮೆಚ್ಚಿನದ್ದಾಗಿದೆ.",
        "ಈ ಸಾಂಪ್ರದಾಯಿಕ ವಡೆಯ ವಿಶಿಷ್ಟ ರುಚಿ ಮತ್ತು ಈರುಳ್ಳಿಯ ಪರಿಮಳ ಎಲ್ಲರನ್ನೂ ಸೆಳೆಯುತ್ತದೆ."
      ],
      tr: [
        "Maddooru vade-yu Karnaatakada Mandya jilleya Maddooru pattanada prasiddha garigari tindiyaagide.",
        "Maida, rave, eerulli, hasimenashinakaayi mattu karibeevina elegalannu balasi idannu maadalaaguttade.",
        "Hittannu kaiyinda tatti bisi enneyalli garigariyaaguvaverige kariyalaaguttade.",
        "Railu prayaanigarige mattu prayaana maaduvavarige Maddooru nildaanada vade-yu atyanta mechchinaddhaagide.",
        "Ee saampradaayika vadeya vishishta ruchi mattu eerulliya parimala ellarannoo seleyuttade."
      ],
      en: [
        "Maddur Vada is a famous crispy fritter snack originating from Maddur town in Mandya district.",
        "It is prepared using flour, semolina, sliced onions, green chilies, and fresh curry leaves.",
        "The mixture is patted flat by hand and deep-fried in hot oil until it becomes perfectly crispy.",
        "For train passengers and highway travelers, the vadas served at Maddur station are an ultimate favorite.",
        "The unique taste of this traditional vada and its roasted onion aroma attract everyone."
      ],
      hi: [
        "मद्दूर वड़ा कर्नाटक के मांड्या जिले के मद्दूर शहर का एक प्रसिद्ध कुरकुरा नाश्ता है।",
        "इसे मैदा, सूजी (रवे), प्याज, हरी मिर्च और कढ़ी पत्ते का उपयोग करके बनाया जाता है।",
        "आटे को हाथ से दबाकर चपटा किया जाता है और गर्म तेल में कुरकुरा होने तक तला जाता है।",
        "ट्रेन यात्रियों और यात्रियों के लिए मद्दूर स्टेशन का वड़ा बेहद पसंदीदा होता है।",
        "इस पारंपरिक वड़े का अनोखा स्वाद और प्याज की खुशबू हर किसी को आकर्षित करती है।"
      ],
      notesEn: [
        "Genitive 'pattanada' (of town) + 'tindiyaagide' (is snack).",
        "Nouns 'eerulli' (onion), 'elegalannu' (leaves, accusative) + passive verb 'maadalaaguttade'.",
        "Instrumental 'kaiyinda' (by hand) + limit suffix '-averige' in 'garigariyaaguvaverige' (until becoming crispy)."
      ],
      notesHi: [
        "'jilleya' का अर्थ 'जिले का' है। 'pattanada' का अर्थ 'शहर/कस्बे का' है।",
        "'eerulli' प्याज को कहते हैं। 'elegalannu' का अर्थ है 'पत्तियों को'।"
      ]
    },
    vocab: [
      { word: "ಈರುಳ್ಳಿ", transliteration: "eerulli", meaning: "Onion / प्याज" },
      { word: "ಪ್ರಯಾಣಿಕ", transliteration: "prayaanika", meaning: "Passenger / यात्री" },
      { word: "ನಿಲ್ದಾಣ", transliteration: "nildaana", meaning: "Station / स्टेशन" }
    ]
  },
  29: {
    sentences: {
      kn: [
        "ಫಿಲ್ಟರ್ ಕಾಫಿಯು ಕರ್ನಾಟಕದ ವಿಶೇಷವಾಗಿ ದಕ್ಷಿಣ ಭಾಗದ ಜನರ ದೈನಂದಿನ ಜೀವನದ ಅವಿಭಾಜ್ಯ ಅಂಗವಾಗಿದೆ.",
        "ಇದನ್ನು ಹಿತ್ತಾಳೆಯ ಫಿಲ್ಟರ್‌ನಲ್ಲಿ ತಯಾರಿಸಿದ ಬಿಸಿ ಕಾಫಿ ಡಿಕಾಕ್ಷನ್ ಮತ್ತು ಹಾಲಿನಿಂದ ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತದೆ.",
        "ಕಾಫಿಯನ್ನು ಹಿತ್ತಾಳೆಯ 'ಡಬರಾ' ಮತ್ತು ಲೋಟದಲ್ಲಿ ಮೇಲಕ್ಕೆ ಕೆಳಕ್ಕೆ ಸುರಿದು ನೊರೆ ಬರಿಸಲಾಗುತ್ತದೆ.",
        "ಚಿಕ್ಕಮಗಳೂರು ಮತ್ತು ಕೊಡಗಿನ ಅತ್ಯುತ್ತಮ ಕಾಫಿ ಬೀಜಗಳ ಪುಡಿಯು ಇದಕ್ಕೆ ಅದ್ಭುತ ಪರಿಮಳವನ್ನು ನೀಡುತ್ತದೆ.",
        "ಮುಂಜಾನೆ ಬಿಸಿಬಿಸಿಯಾದ ನೊರೆ ಕಾಫಿಯನ್ನು ಕುಡಿಯುವುದು ಇಡೀ ದಿನಕ್ಕೆ ಹೊಸ ಉತ್ಸಾಹವನ್ನು ನೀಡುತ್ತದೆ."
      ],
      tr: [
        "Filter coffee-yu Karnaatakada visheeshavaagi dakshina bhaagada janara dainandina jeevanada avibhaajya angavaagide.",
        "Idannu hittaaleya filter-nalli tayaarisida bisi coffee decoction mattu haalininda siddhapadisalaaguttade.",
        "Coffeeyannu hittaaleya 'dabara' mattu lootadalli meelakke kelakke suridu nore barisalaaguttade.",
        "Chikkamagalooru mattu Kodagina atyuttama coffee beejagala pudiyu idakke adbhuta parimalavannu needuttade.",
        "Munjaane bisibisiyada nore coffee-yannu kudiyuvudu idee dinakke hosa utsaahavannu needuttade."
      ],
      en: [
        "Filter Coffee is an integral part of the daily lives of people in Karnataka, especially in the southern region.",
        "It is prepared using strong hot coffee decoction brewed in a brass filter, blended with fresh boiling milk.",
        "The coffee is poured back and forth from a brass 'dabara' and tumbler to create a rich, frothy layer.",
        "Aromatic coffee powder sourced from Chikkamagaluru and Coorg gives it a wonderful flavor.",
        "Drinking a piping hot, frothy filter coffee in the morning instills fresh energy and enthusiasm for the entire day."
      ],
      hi: [
        "फ़िल्टर कॉफ़ी कर्नाटक, विशेषकर दक्षिणी क्षेत्र के लोगों के दैनिक जीवन का एक अभिन्न अंग है।",
        "इसे पीतल के फ़िल्टर में तैयार किए गए गर्म कॉफ़ी काढ़े (डिकॉक्शन) और दूध से तैयार किया जाता है।",
        "कॉफ़ी को पीतल के 'डबरा' और गिलास में ऊपर-नीचे उड़ेलकर झागदार बनाया जाता है।",
        "चिकमगलूर और कूर्ग के बेहतरीन कॉफ़ी बीजों का पाउडर इसे एक अद्भुत सुगंध प्रदान करता है।",
        "सुबह-सुबह गर्म झागदार कॉफ़ी पीना पूरे दिन के लिए एक नया उत्साह प्रदान करता है।"
      ],
      notesEn: [
        "Genitive 'jeevanada' (of life) + 'angavaagide' (is part/limb).",
        "Locative 'filter-nalli' (in filter) + instrumental 'haalininda' (with milk) + passive verb.",
        "Accusative 'coffeeyannu' + gerund phrase 'suridu' (having poured) + verb 'barisalaaguttade' (is caused to bring)."
      ],
      notesHi: [
        "'avibhaajya' का अर्थ 'अविभाज्य' है। 'angavaagide' का अर्थ 'अंग है' है।",
        "'filter-nalli' अधिकरण कारक है (फ़िल्टर में)। 'haalininda' का अर्थ 'दूध से' है।",
        "'nore' झाग को कहते हैं। 'suridu' का अर्थ 'उड़ेलकर' है।"
      ]
    },
    vocab: [
      { word: "ನೊರೆ", transliteration: "nore", meaning: "Foam / झाग" },
      { word: "ಹಿತ್ತಾಳೆ", transliteration: "hittaale", meaning: "Brass / पीतल" },
      { word: "ದೈನಂದಿನ", transliteration: "dainandina", meaning: "Daily / दैनिक" }
    ]
  },
  30: {
    sentences: {
      kn: [
        "ಕೋಸಂಬರಿಯು ಕರ್ನಾಟಕದ ಸಾಂಪ್ರದಾಯಿಕ, ಹಗುರ ಮತ್ತು ಆರೋಗ್ಯಕರ ಹಸಿರು ಸಾಲಡ್ ಆಗಿದೆ.",
        "ಇದನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ನೆನೆಸಿದ ಹೆಸರುಬೇಳೆ ಅಥವಾ ಕಡಲೆಬೇಳೆಗೆ ಸೌತೆಕಾಯಿ ತುರಿ ಸೇರಿಸಿ ಮಾಡಲಾಗುತ್ತದೆ.",
        "ಇದರ ಮೇಲಕ್ಕೆ ಹಸಿಮೆಣಸಿನಕಾಯಿ, ಸಾಸಿವೆ ಮತ್ತು ಕರಿಬೇವಿನ ಎಣ್ಣೆಯ ಸಾಂಪ್ರದಾಯಿಕ ಒಗ್ಗರಣೆ ನೀಡಲಾಗುತ್ತದೆ.",
        "ಉದ್ದಿನಬೇಳೆ ಮತ್ತು ಕಾಯಿ ತುರಿಯು ಇದಕ್ಕೆ ವಿಶೇಷವಾದ ರುಚಿ ಮತ್ತು ಪೌಷ್ಟಿಕತೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ.",
        "ಕರ್ನಾಟಕದ ಶುಭ ಸಮಾರಂಭಗಳಲ್ಲಿ ಮತ್ತು ಹಬ್ಬದ ಊಟದಲ್ಲಿ ಕೋಸಂಬರಿಯು ಅತ್ಯಗತ್ಯವಾಗಿ ಬಡಿಸಲ್ಪಡುತ್ತದೆ."
      ],
      tr: [
        "Koosambari-yu Karnaatakada saampradaayika, hagura mattu aarogyakara hasiru salad aagide.",
        "Idannu saamaanyavaagi neneesida hesarubeele athavaa kadalebeelege sauteekaayi turi seerisi maadalaaguttade.",
        "Idara meelakke hasimenashinakaayi, saasive mattu karibeevina enneya saampradaayika oggarane needalaaguttade.",
        "Uddinabeele mattu kaayi turiyu idakke visheeshavaada ruchi mattu paashtikateyannu odagisuttade.",
        "Karnaatakada shubha samaarambhagalalli mattu habbada ootadalli koosambari-yu atyagatyavaagi badisalpaduttade."
      ],
      en: [
        "Kosambari is a highly traditional, light, and healthy green salad of Karnataka cuisine.",
        "It is prepared using soaked split yellow moong dal or chana dal, mixed with freshly grated cucumber.",
        "A traditional tempering of mustard seeds, green chilies, and curry leaves in hot oil is added on top.",
        "Grated coconut and lemon juice provide a fresh, unique taste and high nutritional value to it.",
        "During auspicious celebrations and festive feasts in Karnataka, Kosambari is served as an essential side dish."
      ],
      hi: [
        "कोसम्बरी कर्नाटक का एक पारंपरिक, हल्का और स्वास्थ्यवर्धक सलाद है।",
        "इसे आमतौर पर भीगी हुई मूंग दाल (हेसरुबेले) या चना दाल में कद्दूकस किया हुआ खीरा मिलाकर बनाया जाता है।",
        "इसके ऊपर हरी मिर्च, राई और कढ़ी पत्ते का पारंपरिक तड़का दिया जाता है।",
        "कद्दूकस किया हुआ नारियल (कायितुरी) इसे एक विशेष स्वाद और पोषण प्रदान करता है।",
        "कर्नाटक के शुभ आयोजनों और त्योहारों के भोजन में कोसम्बरी निश्चित रूप से परोसी जाती है।"
      ],
      notesEn: [
        "Adjective 'hagura' (light) + 'salad aagide' (is salad).",
        "Past participle 'neneesida' (soaked) + dative noun 'beelege' (to lentil) + gerund 'seerisi' (having added).",
        "Genitive 'enneya' (of oil) + passive verb 'needalaaguttade' (is given)."
      ],
      notesHi: [
        "'saampradaayika' का अर्थ 'पारंपरिक' है। 'hasiru' का अर्थ 'हरा' है।",
        "'neneesida' का अर्थ 'भीगा हुआ' है। 'seerisi' का अर्थ 'मिलाकर' है।",
        "'ootadalli' का अर्थ 'भोजन में' (अधिकरण) है।"
      ]
    },
    vocab: [
      { word: "ಸೌತೆಕಾಯಿ", transliteration: "sauteekaayi", meaning: "Cucumber / खीरा" },
      { word: "ತುರಿ", transliteration: "turi", meaning: "Grated / कद्दूकस किया हुआ" },
      { word: "ಹಗುರ", transliteration: "hagura", meaning: "Light / हल्का" }
    ]
  }
};
