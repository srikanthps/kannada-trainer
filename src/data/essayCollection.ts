import { PREBUILT_ESSAYS_DATA } from './prebuiltEssaysData';

export interface Sentence {
  kannadaSentence: string;
  transliteration: string;
  translation: string;
  grammarNotes: string;
}

export interface EssayParagraph {
  kannadaParagraph: string;
  translation: string;
  sentences: Sentence[];
}

export interface VocabWord {
  word: string;
  transliteration: string;
  meaning: string;
}

export interface Essay {
  id: number;
  category: string;
  title: string;
  titleTranslation: string;
  titleTransliteration: string;
  paragraphs: EssayParagraph[];
  vocabHighlight: VocabWord[];
}

// 100 Topics Definitions
export const ESSAY_TOPICS = [
  // 1. Culture & Festivals (1-10)
  { id: 1, cat: "Culture & Festivals", titleKn: "ಮೈಸೂರು ದಸರಾ", titleEn: "Mysore Dasara Festival", titleHi: "मैसूर दशहरा उत्सव", tr: "Maisooru Dasara" },
  { id: 2, cat: "Culture & Festivals", titleKn: "ಉಗಾದಿ ಹಬ್ಬ", titleEn: "Ugadi New Year Festival", titleHi: "उगादि नववर्ष त्योहार", tr: "Ugaadi Habba" },
  { id: 3, cat: "Culture & Festivals", titleKn: "ದೀಪಾವಳಿ ಹಬ್ಬ", titleEn: "Deepavali Festival of Lights", titleHi: "दीपावली रोशनी का त्योहार", tr: "Deepaavali Habba" },
  { id: 4, cat: "Culture & Festivals", titleKn: "ಗೌರಿ ಗಣೇಶ ಹಬ್ಬ", titleEn: "Gowri Ganesha Festival", titleHi: "गौरी गणेश त्योहार", tr: "Gowri Ganesha Habba" },
  { id: 5, cat: "Culture & Festivals", titleKn: "ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ", titleEn: "Karnataka Rajyotsava State Day", titleHi: "कन्नड़ राज्योत्सव स्थापना दिवस", tr: "Kannada Raajyootsava" },
  { id: 6, cat: "Culture & Festivals", titleKn: "ಕಂಬಳ ಜಾನಪದ ಕ್ರೀಡೆ", titleEn: "Kambala Buffalo Race", titleHi: "कंबला भैंसा दौड़", tr: "Kambala Jaanapada Kreede" },
  { id: 7, cat: "Culture & Festivals", titleKn: "ಪಟ್ಟದಕಲ್ಲು ನೃತ್ಯೋತ್ಸವ", titleEn: "Pattadakal Dance Festival", titleHi: "पट्टदकल नृत्य महोत्सव", tr: "Pattadakallu Nrityootsava" },
  { id: 8, cat: "Culture & Festivals", titleKn: "ಹಂಪಿ ಉತ್ಸವ", titleEn: "Hampi Cultural Festival", titleHi: "हम्पी उत्सव", tr: "Hampi Utsava" },
  { id: 9, cat: "Culture & Festivals", titleKn: "ಬೆಂಗಳೂರು ಕರಗ", titleEn: "Bengaluru Karaga Festival", titleHi: "बेंगलुरु करगा", tr: "Bengalooru Karaga" },
  { id: 10, cat: "Culture & Festivals", titleKn: "ಮಕರ ಸಂಕ್ರಾಂತಿ", titleEn: "Makar Sankranti Harvest Day", titleHi: "मकर संक्रांति फसल त्योहार", tr: "Makara Sankraanti" },

  // 2. Tourism & Places (11-20)
  { id: 11, cat: "Tourism & Places", titleKn: "ಹಂಪಿ ಪಾರಂಪರಿಕ ತಾಣ", titleEn: "Hampi Heritage Site", titleHi: "हम्पी विरासत स्थल", tr: "Hampi Paarampatika Taana" },
  { id: 12, cat: "Tourism & Places", titleKn: "ಮೈಸೂರು ಅರಮನೆ", titleEn: "Mysore Palace Grandeur", titleHi: "मैसूर महल की भव्यता", tr: "Maisooru Aramane" },
  { id: 13, cat: "Tourism & Places", titleKn: "ಜೋಗ್ ಜಲಪಾತ", titleEn: "Jog Falls Waterfall", titleHi: "जोग जलप्रपात", tr: "Joog Jalapaata" },
  { id: 14, cat: "Tourism & Places", titleKn: "ಪಶ್ಚಿಮ ಘಟ್ಟಗಳು", titleEn: "The Western Ghats Mountains", titleHi: "पश्चिमी घाट पर्वतमाला", tr: "Pashchima Ghattagalu" },
  { id: 15, cat: "Tourism & Places", titleKn: "ಗೋಕರ್ಣದ ಕಡಲತೀರ", titleEn: "Gokarna Beaches", titleHi: "गोकर्ण के समुद्र तट", tr: "Gokarnada Kadalateera" },
  { id: 16, cat: "Tourism & Places", titleKn: "ಕೊಡಗು ಬೆಟ್ಟಗಳು", titleEn: "Coorg Hill Station", titleHi: "कूर्ग हिल स्टेशन", tr: "Kodagu Bettagalu" },
  { id: 17, cat: "Tourism & Places", titleKn: "ವಿಜಯಪುರದ ಗೋಲ ಗುಮ್ಮಟ", titleEn: "Gol Gumbaz of Vijayapura", titleHi: "विजयपुरा का गोल गुंबद", tr: "Vijayapurada Goola Gummata" },
  { id: 18, cat: "Tourism & Places", titleKn: "ಶ್ರವಣಬೆಳಗೊಳ ಗೊಮ್ಮಟೇಶ್ವರ", titleEn: "Shravanabelagola Statue", titleHi: "श्रवणबेलगोला गोमतेश्वर मूर्ति", tr: "Shravanabelagola Gommateeshwara" },
  { id: 19, cat: "Tourism & Places", titleKn: "ನಂದಿ ಬೆಟ್ಟ", titleEn: "Nandi Hills Sunrise Spot", titleHi: "नंदी हिल्स सूर्योदय स्थल", tr: "Nandi Betta" },
  { id: 20, cat: "Tourism & Places", titleKn: "ಬಾದಾಮಿ ಗುಹಾಂತರ ದೇವಾಲಯ", titleEn: "Badami Cave Temples", titleHi: "बादामी गुफा मंदिर", tr: "Baadaami Guhaantara Deevaalaya" },

  // 3. Food & Cuisine (21-30)
  { id: 21, cat: "Food & Cuisine", titleKn: "ಮಸಾಲೆ ದೋಸೆ", titleEn: "Masala Dosa Delicacy", titleHi: "मसाला डोसा व्यंजन", tr: "Masaale Doose" },
  { id: 22, cat: "Food & Cuisine", titleKn: "ಮೈಸೂರು ಪಾಕ್ ಸಿಹಿ", titleEn: "Mysore Pak Sweet", titleHi: "मैसूर पाक मिठाई", tr: "Maisooru Paak Sihi" },
  { id: 23, cat: "Food & Cuisine", titleKn: "ಬಿಸಿ ಬೇಳೆ ಬಾತ್", titleEn: "Bisi Bele Bath Meal", titleHi: "बिसी बेले बाथ", tr: "Bisi Beele Baath" },
  { id: 24, cat: "Food & Cuisine", titleKn: "ರಾಗಿ ಮುದ್ದೆ ಆಹಾರ", titleEn: "Ragi Mudde Healthy Food", titleHi: "रागी मुद्दे स्वास्थ्यवर्धक भोजन", tr: "Raagi Mudde Aahaara" },
  { id: 25, cat: "Food & Cuisine", titleKn: "ಇಡ್ಲಿ ಮತ್ತು ವಡೆ", titleEn: "Idli and Vada Breakfast", titleHi: "इडली और वड़ा नाश्ता", tr: "Idli mattu Vade" },
  { id: 26, cat: "Food & Cuisine", titleKn: "ಧಾರವಾಡ ಪೇಡ ಸಿಹಿ", titleEn: "Dharwad Peda Sweet", titleHi: "धारवाड़ पेड़ा", tr: "Dhaarwaada Peeda Sihi" },
  { id: 27, cat: "Food & Cuisine", titleKn: "ಮಂಗಳೂರು ಬನ್ಸ್", titleEn: "Mangalore Buns Speciality", titleHi: "मंगलोर बन्स", tr: "Mangalooru Bans" },
  { id: 28, cat: "Food & Cuisine", titleKn: "ಮದ್ದೂರು ವಡೆ", titleEn: "Maddur Vada Snack", titleHi: "मद्दूर वड़ा स्नैक", tr: "Maddooru Vade" },
  { id: 29, cat: "Food & Cuisine", titleKn: "ಫಿಲ್ಟರ್ ಕಾಫಿ", titleEn: "Filter Coffee Culture", titleHi: "फ़िल्टर कॉफ़ी संस्कृति", tr: "Filter Coffee" },
  { id: 30, cat: "Food & Cuisine", titleKn: "ಹೆಸರುಬೇಳೆ ಕೋಸಂಬರಿ", titleEn: "Kosambari Salad", titleHi: "कोसम्बरी सलाद", tr: "Hesarubeele Koosambari" },

  // 4. Nature & Wildlife (31-40)
  { id: 31, cat: "Nature & Wildlife", titleKn: "ಬಂಡೀಪುರ ಅಭಯಾರಣ್ಯ", titleEn: "Bandipur National Forest", titleHi: "बांदीपुर राष्ट्रीय उद्यान", tr: "Bandeepura Abhayaaranya" },
  { id: 32, cat: "Nature & Wildlife", titleKn: "ಕಬಿನಿ ವನ್ಯಜೀವಿ ಧಾಮ", titleEn: "Kabini Wildlife Reserve", titleHi: "कबीनी वन्यजीव अभयारण्य", tr: "Kabini Vanyajeevi Dhaama" },
  { id: 33, cat: "Nature & Wildlife", titleKn: "ಕಾವೇರಿ ನದಿ ಪ್ರವಾಹ", titleEn: "River Kaveri Flow", titleHi: "कावेरी नदी का प्रवाह", tr: "Kaaveeri Nadi Pravaaha" },
  { id: 34, cat: "Nature & Wildlife", titleKn: "ಪಶ್ಚಿಮ ಘಟ್ಟದ ಹಕ್ಕಿಗಳು", titleEn: "Western Ghats Birdlife", titleHi: "पश्चिमी घाट के पक्षी", tr: "Pashchima Ghatta-da Hakkigalu" },
  { id: 35, cat: "Nature & Wildlife", titleKn: "ಶರಾವತಿ ಸಿಂಹ ಮುಖದ ಮಂಗಗಳು", titleEn: "Lion-tailed Macaques", titleHi: "सिंह-पूंछ वाले बंदर", tr: "Sharaavati Simha Mukhada Mangagalu" },
  { id: 36, cat: "Nature & Wildlife", titleKn: "ಕುದುರೆಮುಖ ಶಿಖರ", titleEn: "Kudremukh Peak Beauty", titleHi: "कुद्रेमुख चोटी", tr: "Kudremukha Shikhara" },
  { id: 37, cat: "Nature & Wildlife", titleKn: "ಬನ್ನೇರುಘಟ್ಟ ರಾಷ್ಟ್ರೀಯ ಉದ್ಯಾನ", titleEn: "Bannerghatta Safari Park", titleHi: "बन्नेरघट्टा राष्ट्रीय उद्यान", tr: "Banneerughatta Raashtreeya Udyaana" },
  { id: 38, cat: "Nature & Wildlife", titleKn: "ದಾಂಡೇಲಿ ಅರಣ್ಯ ಮತ್ತು ಹಾರ್ನ್ ಬಿಲ್", titleEn: "Dandeli Hornbills Forest", titleHi: "दांदेली हॉर्नबिल जंगल", tr: "Daandeeli Aranya" },
  { id: 39, cat: "Nature & Wildlife", titleKn: "ಆಗುಂಬೆ ಮಳೆಕಾಡು", titleEn: "Agumbe Rainforest", titleHi: "आगुम्बे वर्षावन", tr: "Aagumbe Malekaadu" },
  { id: 40, cat: "Nature & Wildlife", titleKn: "ಕೊಕ್ಕರೆ ಬೆಳ್ಳೂರು ಪಕ್ಷಿಧಾಮ", titleEn: "Kokkare Bellur Bird Sanctuary", titleHi: "कोक्करे बेलूर पक्षी अभयारण्य", tr: "Kokkare Bellooru Pakshidhaama" },

  // 5. Great Personalities (41-50)
  { id: 41, cat: "Great Personalities", titleKn: "ರಾಷ್ಟ್ರಕವಿ ಕುವೆಂಪು", titleEn: "Rashtrakavi Kuvempu Poet", titleHi: "राष्ट्रकवि कुवेम्पू", tr: "Raashtrakavi Kuvempu" },
  { id: 42, cat: "Great Personalities", titleKn: "ಸರ್ ಎಂ. ವಿಶ್ವೇಶ್ವರಯ್ಯ", titleEn: "Sir M. Visvesvaraya Statesman", titleHi: "सर एम. विश्वेश्वरैया", tr: "Sir M. Visvesvaraya" },
  { id: 43, cat: "Great Personalities", titleKn: "ಪುರಂದರದಾಸರು", titleEn: "Saint Purandara Dasa Musician", titleHi: "संत पुरंदर दास संगीतकार", tr: "Purandaradaasaru" },
  { id: 44, cat: "Great Personalities", titleKn: "ಕಿತ್ತೂರು ರಾಣಿ ಚೆನ್ನಮ್ಮ", titleEn: "Kittur Queen Chennamma Heroine", titleHi: "कित्तूर रानी चेन्नम्मा", tr: "Kittooru Raani Chennamma" },
  { id: 45, cat: "Great Personalities", titleKn: "ಸಂಗೊಳ್ಳಿ ರಾಯಣ್ಣ", titleEn: "Sangolli Rayanna Warrior", titleHi: "संगोल्ली रायन्ना", tr: "Sangolli Raayanna" },
  { id: 46, cat: "Great Personalities", titleKn: "ಡಾ. ರಾಜ್ ಕುಮಾರ್", titleEn: "Dr. Rajkumar Cinema Icon", titleHi: "डॉ. राजकुमार सिनेमा अभिनेता", tr: "Dr. Raaj Kumaar" },
  { id: 47, cat: "Great Personalities", titleKn: "ಜಗದ್ಗುರು ಬಸವೇಶ್ವರ", titleEn: "Jagadguru Basaveshwara Reformer", titleHi: "जगतगुरु बसवेश्वर समाज सुधारक", tr: "Jagadguru Basaveshwara" },
  { id: 48, cat: "Great Personalities", titleKn: "ಕೆಂಗಲ್ ಹನುಮಂತಯ್ಯ", titleEn: "Kengal Hanumanthaiah Builder", titleHi: "केँगल हनुमंतैया", tr: "Kengal Hanumanthaiah" },
  { id: 49, cat: "Great Personalities", titleKn: "ಉಳ್ಳಾಲ ವೀರ ರಾಣಿ ಅಬ್ಬಕ್ಕ", titleEn: "Queen Abbakka of Ullal", titleHi: "उल्लाल की रानी अब्बक्का", tr: "Raani Abbakka" },
  { id: 50, cat: "Great Personalities", titleKn: "ಫೀಲ್ಡ್ ಮಾರ್ಷಲ್ ಕಾರ್ಯಪ್ಪ", titleEn: "Field Marshal K.M. Cariappa", titleHi: "फील्ड मार्शल के.एम. करियप्पा", tr: "Field Marshal Cariappa" },

  // 6. Modern Karnataka (51-60)
  { id: 51, cat: "Modern Karnataka", titleKn: "ಸಿಲಿಕಾನ್ ವ್ಯಾಲಿ ಬೆಂಗಳೂರು", titleEn: "Silicon Valley Bengaluru", titleHi: "सिलिकॉन वैली बेंगलुरु", tr: "Silicon Valley Bengalooru" },
  { id: 52, cat: "Modern Karnataka", titleKn: "ನಮ್ಮ ಮೆಟ್ರೋ ರೈಲು", titleEn: "Namma Metro Transit", titleHi: "नम्मा मेट्रो", tr: "Namma Metro Railu" },
  { id: 53, cat: "Modern Karnataka", titleKn: "ಬೆಂಗಳೂರಿನ ಇಸ್ರೋ ಕೇಂದ್ರ", titleEn: "ISRO Space Center Bengaluru", titleHi: "इसरो अंतरिक्ष केंद्र बेंगलुरु", tr: "Bengaloorina ISRO Keendra" },
  { id: 54, cat: "Modern Karnataka", titleKn: "ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನ ಪಾರ್ಕ್", titleEn: "Information Technology Parks", titleHi: "सूचना प्रौद्योगिकी पार्क", tr: "Maahiti Tantrajnaana Park" },
  { id: 55, cat: "Modern Karnataka", titleKn: "ಲಾಲ್ ಬಾಗ್ ಸಸ್ಯೋದ್ಯಾನ", titleEn: "Lalbagh Botanical Gardens", titleHi: "लालबाग बॉटनिकल गार्डन", tr: "Laal Baag Sasyoodyaana" },
  { id: 56, cat: "Modern Karnataka", titleKn: "ವಿಧಾನ ಸೌಧ ಕಟ್ಟಡ", titleEn: "Vidhana Soudha Seat of Power", titleHi: "विधान सौध भवन", tr: "Vidhaana Soudha Kattada" },
  { id: 57, cat: "Modern Karnataka", titleKn: "ಕಬ್ಬನ್ ಪಾರ್ಕ್ ಹಸಿರು", titleEn: "Cubbon Park Greenery", titleHi: "कब्बन पार्क हरियाली", tr: "Cubbon Park Hasiru" },
  { id: 58, cat: "Modern Karnataka", titleKn: "ಬೆಂಗಳೂರು ಸಂಚಾರ ಜೀವನ", titleEn: "Bengaluru City Traffic Life", titleHi: "बेंगलुरु शहर का ट्रैफ़िक", tr: "Bengalooru Sanchaara Jeevana" },
  { id: 59, cat: "Modern Karnataka", titleKn: "ಎಚ್.ಎ.ಎಲ್ ವಾಯುಯಾನ", titleEn: "HAL Aviation Industry", titleHi: "हिंदुस्तान एयरोनॉटिक्स लिमिटेड (HAL)", tr: "HAL Vaayuyaana" },
  { id: 60, cat: "Modern Karnataka", titleKn: "ಬಯೋಟೆಕ್ ಸಿಟಿ ಬೆಂಗಳೂರು", titleEn: "Biotech Hub of Bengaluru", titleHi: "बायोटेक सिटी बेंगलुरु", tr: "Biotech City Bengalooru" },

  // 7. Daily Life & Activities (61-70)
  { id: 61, cat: "Daily Life & Activities", titleKn: "ನನ್ನ ದಿನಚರಿ", titleEn: "My Daily Routine", titleHi: "मेरी दिनचर्या", tr: "Nanna Dinachari" },
  { id: 62, cat: "Daily Life & Activities", titleKn: "ನನ್ನ ಶಾಲೆ ಮತ್ತು ತರಗತಿ", titleEn: "My School and Classroom", titleHi: "मेरा स्कूल और कक्षा", tr: "Nanna Shaale mattu Taragati" },
  { id: 63, cat: "Daily Life & Activities", titleKn: "ನನ್ನ ಮುದ್ದಿನ ಸಾಕುಪ್ರಾಣಿ", titleEn: "My Beloved Pet Companion", titleHi: "मेरा प्यारा पालतू जानवर", tr: "Nanna Muddina Saakupraani" },
  { id: 64, cat: "Daily Life & Activities", titleKn: "ನನ್ನ ಮೆಚ್ಚಿನ ಪ್ರಬಂಧ ಪುಸ್ತಕ", titleEn: "My Favorite Essay Book", titleHi: "मेरी पसंदीदा पुस्तक", tr: "Nanna Mechchina Pustaka" },
  { id: 65, cat: "Daily Life & Activities", titleKn: "ಮುಂಜಾನೆಯ ವಾಯು ವಿಹಾರ", titleEn: "A Fresh Morning Walk", titleHi: "सुबह की ताज़ा सैर", tr: "Munjaaneya Vaayu Vihaara" },
  { id: 66, cat: "Daily Life & Activities", titleKn: "ಗ್ರಾಮೀಣ ಪ್ರದೇಶಕ್ಕೆ ಭೇಟಿ", titleEn: "Visiting a Rural Village", titleHi: "एक ग्रामीण गाँव की यात्रा", tr: "Graameena Pradeeshakke Bheeti" },
  { id: 67, cat: "Daily Life & Activities", titleKn: "ಮಳೆಗಾಲದ ಒಂದು ದಿನ", titleEn: "A Beautiful Rainy Day", titleHi: "बरसात का एक सुंदर दिन", tr: "Malegaalada Ondu Dina" },
  { id: 68, cat: "Daily Life & Activities", titleKn: "ನನ್ನ ಆಪ್ತ ಸ್ನೇಹಿತ", titleEn: "My Best Faithful Friend", titleHi: "मेरा सबसे प्रिय मित्र", tr: "Nanna Aapta Sneehita" },
  { id: 69, cat: "Daily Life & Activities", titleKn: "ನನ್ನ ಹವ್ಯಾಸಗಳು", titleEn: "My Productive Hobbies", titleHi: "मेरे उपयोगी शौक", tr: "Nanna Havyaasagalu" },
  { id: 70, cat: "Daily Life & Activities", titleKn: "ಜಂಟಿ ಕುಟುಂಬ ಜೀವನ", titleEn: "Joint Family Living", titleHi: "संयुक्त परिवार का जीवन", tr: "Janti Kutumba Jeevana" },

  // 8. Art & Literature (71-80)
  { id: 71, cat: "Art & Literature", titleKn: "ಯಕ್ಷಗಾನ ಜನಪದ ಕಲೆ", titleEn: "Yakshagana Folk Theater", titleHi: "यक्षगान लोक रंगमंच", tr: "Yakshagaana Jaanapada Kale" },
  { id: 72, cat: "Art & Literature", titleKn: "ಡೊಳ್ಳು ಕುಣಿತ ಜಾನಪದ", titleEn: "Dollu Kunitha Drum Dance", titleHi: "डोल्लू कुनिथा ढोल नृत्य", tr: "Dollu Kunitha Jaanapada" },
  { id: 73, cat: "Art & Literature", titleKn: "ತೊಗಲು ಗೊಂಬೆಯಾಟ", titleEn: "Togalu Gombeyaata Puppetry", titleHi: "तोगालू गोम्बेयाटा कठपुतली", tr: "Togalu Gombeyaata" },
  { id: 74, cat: "Art & Literature", titleKn: "ಕನ್ನಡ ಸಾಹಿತ್ಯ ಚರಿತ್ರೆ", titleEn: "History of Kannada Literature", titleHi: "कन्नड़ साहित्य का इतिहास", tr: "Kannada Saahitya Charitre" },
  { id: 75, cat: "Art & Literature", titleKn: "ಕನ್ನಡದ ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿಗಳು", titleEn: "Jnanpith Laureates", titleHi: "कन्नड़ के ज्ञानपीठ पुरस्कार विजेता", tr: "Kannada-da Jnaanapeetha Prashastigalu" },
  { id: 76, cat: "Art & Literature", titleKn: "ಬಸವಣ್ಣನವರ ವಚನ ಸಾಹಿತ್ಯ", titleEn: "Vachana Reform Literature", titleHi: "बसवन्ना का वचन साहित्य", tr: "Vachana Saahitya" },
  { id: 77, cat: "Art & Literature", titleKn: "ಹರಿದಾಸ ಭಕ್ತಿ ಸಾಹಿತ್ಯ", titleEn: "Haridasa Devotional Hymns", titleHi: "हरिदास भक्ति साहित्य", tr: "Haridaasa Bhakti Saahitya" },
  { id: 78, cat: "Art & Literature", titleKn: "ಚನ್ನಪಟ್ಟಣದ ಮರದ ಆಟಿಕೆಗಳು", titleEn: "Channapatna Wooden Toys", titleHi: "चन्नापटना के लकड़ी के खिलौने", tr: "Channapattanada Marada Aatikegalu" },
  { id: 79, cat: "Art & Literature", titleKn: "ಇಳಕಲ್ ಸಾಂಪ್ರದಾಯಿಕ ಸೀರೆಗಳು", titleEn: "Ilkal Traditional Sarees", titleHi: "इलकल पारंपरिक साड़ियाँ", tr: "Ilkal Saampradaayika Seeregalu" },
  { id: 80, cat: "Art & Literature", titleKn: "ಕಂಸಾಳೆ ಜಾನಪದ ಕಲೆ", titleEn: "Kamsale Folk Art", titleHi: "कंसाले लोक कला", tr: "Kamsaale Jaanapada Kale" },

  // 9. Science & Education (81-100)
  { id: 81, cat: "Science & Education", titleKn: "ಸರ್ ಸಿ. ವಿ. ರಾಮನ್ ವಿಜ್ಞಾನಿ", titleEn: "Sir C.V. Raman Scientist", titleHi: "सर सी. वी. रमन वैज्ञानिक", tr: "Sir C.V. Raman Vijnaani" },
  { id: 82, cat: "Science & Education", titleKn: "ಭಾರತೀಯ ವಿಜ್ಞಾನ ಸಂಸ್ಥೆ (IISc)", titleEn: "Indian Institute of Science (IISc)", titleHi: "भारतीय विज्ञान संस्थान (IISc)", tr: "Bhaarateeya Vijnaana Samsthe (IISc)" },
  { id: 83, cat: "Science & Education", titleKn: "ವಿಶ್ವೇಶ್ವರಯ್ಯ ತಾಂತ್ರಿಕ ಶಿಕ್ಷಣ", titleEn: "Visvesvaraya Technical Education", titleHi: "विश्वेश्वरैया तकनीकी शिक्षा", tr: "Visvesvaraya Taantrika Shikshana" },
  { id: 84, cat: "Science & Education", titleKn: "ಬಾಹ್ಯಾಕಾಶ ವಿಜ್ಞಾನ ಮತ್ತು ಇಸ್ರೋ", titleEn: "Space Science and ISRO", titleHi: "अंतरिक्ष विज्ञान और इसरो", tr: "Baahyaakaasha Vijnaana mattu ISRO" },
  { id: 85, cat: "Science & Education", titleKn: "ಕನ್ನಡ ಮಾಧ್ಯಮ ಶಿಕ್ಷಣ", titleEn: "Kannada Medium Education", titleHi: "कन्नड़ माध्यम शिक्षा", tr: "Kannada Maadhyama Shikshana" },
  { id: 86, cat: "Science & Education", titleKn: "ಪ್ರಾಥಮಿಕ ಶಿಕ್ಷಣದ ಮಹತ್ವ", titleEn: "Importance of Primary Education", titleHi: "प्राथमिक शिक्षा का महत्व", tr: "Praathamika Shikshanada Mahatva" },
  { id: 87, cat: "Science & Education", titleKn: "ಗಣಕಯಂತ್ರ ಶಿಕ್ಷಣದ ಮಹತ್ವ", titleEn: "Importance of Computer Education", titleHi: "कंप्यूटर शिक्षा का महत्व", tr: "Ganakayantra Shikshanada Mahatva" },
  { id: 88, cat: "Science & Education", titleKn: "ಮಹಿಳಾ ಶಿಕ್ಷಣ ಮತ್ತು ಸಬಲೀಕರಣ", titleEn: "Women Education and Empowerment", titleHi: "महिला शिक्षा और सशक्तिकरण", tr: "Mahilaa Shikshana mattu Sabaleekarana" },
  { id: 89, cat: "Science & Education", titleKn: "ವಿಜ್ಞಾನ ವಸ್ತುಪ್ರದರ್ಶನ", titleEn: "Science Exhibition in School", titleHi: "विज्ञान प्रदर्शनी", tr: "Vijnaana Vastuptadarshana" },
  { id: 90, cat: "Science & Education", titleKn: "ಪರಿಸರ ವಿಜ್ಞಾನದ ಅಧ್ಯಯನ", titleEn: "Study of Environmental Science", titleHi: "पर्यावरण विज्ञान का अध्ययन", tr: "Parisara Vijnaana-da Adhyayana" },
  { id: 91, cat: "Science & Education", titleKn: "ತಾಂತ್ರಿಕ ವಿಶ್ವವಿದ್ಯಾಲಯಗಳು", titleEn: "Technical Universities in State", titleHi: "राज्य में तकनीकी विश्वविद्यालय", tr: "Taantrika Vishvavidyaalayagalu" },
  { id: 92, cat: "Science & Education", titleKn: "ವಯಸ್ಕರ ಶಿಕ್ಷಣ ಮತ್ತು ಸಾಕ್ಷರತೆ", titleEn: "Adult Education and Literacy", titleHi: "वयस्क शिक्षा और साक्षरता", tr: "Vayaskara Shikshana mattu Saaksharate" },
  { id: 93, cat: "Science & Education", titleKn: "ವಿಶ್ವೇಶ್ವರಯ್ಯ ತಾಂತ್ರಿಕ ವಸ್ತುಸಂಗ್ರಹಾಲಯ", titleEn: "Visvesvaraya Industrial & Technological Museum", titleHi: "विश्वेश्वरैया औद्योगिक और तकनीकी संग्रहालय", tr: "Visvesvaraya Museum" },
  { id: 94, cat: "Science & Education", titleKn: "ಬೆಂಗಳೂರು ವಿಜ್ಞಾನ ಗ್ಯಾಲರಿ", titleEn: "Science Gallery of Bengaluru", titleHi: "विज्ञान गैलरी बेंगलुरु", tr: "Science Gallery Bengalooru" },
  { id: 95, cat: "Science & Education", titleKn: "ಕರ್ನಾಟಕದಲ್ಲಿ ಪ್ರೌಢ ಶಿಕ್ಷಣ", titleEn: "School Education in State", titleHi: "कर्नाटक में स्कूली शिक्षा", tr: "Karnaatakadalli Shikshana" },
  { id: 96, cat: "Science & Education", titleKn: "ಸನಾತನ ಗುರುಕುಲ ಪದ್ಧತಿ", titleEn: "Traditional Gurukula System", titleHi: "पारंपरिक गुरुकुल प्रणाली", tr: "Sanaatana Gurukula Paddhati" },
  { id: 97, cat: "Science & Education", titleKn: "ಕನ್ನಡ ಡಿಜಿಟಲ್ ಸಾಕ್ಷರತೆ", titleEn: "Digital Literacy of Kannada", titleHi: "डिजिटल साक्षरता और कन्नड़", tr: "Kannada Digital Saaksharate" },
  { id: 98, cat: "Science & Education", titleKn: "ರಾಷ್ಟ್ರೀಯ ಶಿಕ್ಷಣ ನೀತಿ", titleEn: "National Education Policy", titleHi: "राष्ट्रीय शिक्षा नीति", tr: "Raashtreeya Shikshana Neeti" },
  { id: 99, cat: "Science & Education", titleKn: "ಖಗೋಳ ವಿಜ್ಞಾನ ಕೇಂದ್ರ", titleEn: "Planetarium and Astronomy", titleHi: "तारामंडल और खगोल विज्ञान", tr: "Khagoola Vijnaana Keendra" },
  { id: 100, cat: "Science & Education", titleKn: "ನನ್ನ ಪ್ರೀತಿಯ ಕುಟುಂಬ", titleEn: "My Beloved Family", titleHi: "मेरा प्यारा परिवार", tr: "Nanna Preetiya Kutumba" }
];

export function getPrebuiltEssay(topicId: number, lang: 'en' | 'hi'): Essay {
  const isEng = lang === 'en';
  const topic = ESSAY_TOPICS.find(t => t.id === topicId) || ESSAY_TOPICS[0];

  if (PREBUILT_ESSAYS_DATA[topic.id]) {
    const data = PREBUILT_ESSAYS_DATA[topic.id];
    const sentences = data.sentences;
    const vocabHighlight = data.vocab.map(v => ({
      word: v.word,
      transliteration: v.transliteration,
      meaning: isEng 
        ? v.meaning.split(" / ")[0] 
        : (v.meaning.split(" / ")[1] || v.meaning.split(" / ")[0])
    }));

    const buildSentences = [];
    for (let i = 0; i < 5; i++) {
      buildSentences.push({
        kannadaSentence: sentences.kn[i],
        transliteration: sentences.tr[i],
        translation: isEng ? sentences.en[i] : sentences.hi[i],
        grammarNotes: isEng ? sentences.notesEn[i] : sentences.notesHi[i]
      });
    }

    const kannadaParagraph = sentences.kn.join(" ");
    const translation = isEng ? sentences.en.join(" ") : sentences.hi.join(" ");

    return {
      id: topic.id,
      category: topic.cat,
      title: topic.titleKn,
      titleTranslation: isEng ? topic.titleEn : topic.titleHi,
      titleTransliteration: topic.tr,
      paragraphs: [
        {
          kannadaParagraph,
          translation,
          sentences: buildSentences
        }
      ],
      vocabHighlight
    };
  }

  let sentence1Kn = "";
  let sentence1Tr = "";
  let sentence1En = "";
  let sentence1Hi = "";
  let sentence1NotesEn = "";
  let sentence1NotesHi = "";

  let sentence2Kn = "";
  let sentence2Tr = "";
  let sentence2En = "";
  let sentence2Hi = "";
  let sentence2NotesEn = "";
  let sentence2NotesHi = "";

  let sentence3Kn = "";
  let sentence3Tr = "";
  let sentence3En = "";
  let sentence3Hi = "";
  let sentence3NotesEn = "";
  let sentence3NotesHi = "";

  let sentence4Kn = "";
  let sentence4Tr = "";
  let sentence4En = "";
  let sentence4Hi = "";
  let sentence4NotesEn = "";
  let sentence4NotesHi = "";

  let sentence5Kn = "";
  let sentence5Tr = "";
  let sentence5En = "";
  let sentence5Hi = "";
  let sentence5NotesEn = "";
  let sentence5NotesHi = "";

  let vocabHighlight: VocabWord[] = [];

  if (topic.cat === "Culture & Festivals") {
    switch (topic.id) {
      case 1: // Mysore Dasara
        sentence1Kn = "ಮೈಸೂರು ದಸರಾ ಮಹೋತ್ಸವವು ನಾಡಹಬ್ಬವೆಂದು ಪ್ರಖ್ಯಾತಿ ಪಡೆದಿದ್ದು, ರಾಜ್ಯದ ಸಾಂಸ್ಕೃತಿಕ ಹಿರಿಮೆಯನ್ನು ವಿಶ್ವಕ್ಕೆ ಸಾರುತ್ತದೆ.";
        sentence1Tr = "Maisooru Dasara mahotsavavu naadahabbavendu prakhyaati padediddu, raajyada saamskritika hirimeyannu vishwakke saaruttade.";
        sentence1En = "Known as the state festival, Mysore Dasara proclaims the cultural grandeur of Karnataka to the entire world.";
        sentence1Hi = "राज्य उत्सव के रूप में प्रसिद्ध, मैसूर दशहरा कर्नाटक के सांस्कृतिक गौरव को पूरे विश्व में घोषित करता है।";
        sentence1NotesEn = "Genitive 'raajyada' (of state) + accusative 'hirimeyannu' (grandeur) + dative 'vishwakke' (to the world) + verb 'saaruttade' (proclaims).";
        sentence1NotesHi = "'raajyada' (राज्य का) संबंध कारक है। 'hirimeyannu' का अर्थ है 'गौरव को' (द्वितीय विभक्ति)।";

        sentence2Kn = "ನವರಾತ್ರಿಯ ಒಂಬತ್ತು ದಿನಗಳ ಕಾಲ ರಾಜಮನೆತನದ ಭವ್ಯ ಅರಮನೆಯು ದೀಪಗಳ ಅಲಂಕಾರದಿಂದ ಜಗಮಗಿಸುತ್ತದೆ.";
        sentence2Tr = "Navaraatriya ombattu dinagala kaala raajamaneetanada bhavya aramaneyu deepagala alankaaradinda jagamagisuttade.";
        sentence2En = "During the nine days of Navaratri, the majestic royal palace glows brilliantly with magnificent light decorations.";
        sentence2Hi = "नवरात्रि के नौ दिनों के दौरान, शाही भव्य महल दीपों की सजावट से जगमगा उठता है।";
        sentence2NotesEn = "Genitive 'Navaraatriya' (of Navaratri) + genitive 'raajamaneetanada' (of royal lineage) + subject 'aramaneyu' (palace) + instrumental 'alankaaradinda' (with decoration) + verb 'jagamagisuttade' (glows).";
        sentence2NotesHi = "'Navaraatriya' का अर्थ है 'नवरात्रि का'। 'alankaaradinda' में करण कारक है (सजावट से)।";

        sentence3Kn = "ವಿಜಯದಶಮಿಯ ಶುಭದಿನದಂದು ಮೈಸೂರು ಬೀದಿಗಳಲ್ಲಿ ಸಾಗುವ ಸಾಂಪ್ರದಾಯಿಕ ಜಂಬೂ ಸವಾರಿ ಮೆರವಣಿಗೆ ಅದ್ಭುತ ಪ್ರೇಕ್ಷಣೀಯ ಸ್ಥಳವಾಗಿದೆ.";
        sentence3Tr = "Vijayadashamiya shubhadinadandu Maisooru beedigalalli saaguva saampradaayika Jamboo Savaari meravanige adbhuta preekshaneeya sthalavaagide.";
        sentence3En = "On the auspicious day of Vijayadashami, the traditional Jambo Savari procession passing through the streets of Mysore is an extraordinary sight to behold.";
        sentence3Hi = "विजयादशमी के शुभ दिन पर, मैसूर की सड़कों से गुजरने वाला पारंपरिक 'जंबू सवारी' जुलूस एक अद्भुत दर्शनीय दृश्य होता है।";
        sentence3NotesEn = "Locative plural 'beedigalalli' (in streets) + active participle 'saaguva' (proceeding) + adjective 'preekshaneeya' (worth seeing) + 'sthalavaagide' (is place).";
        sentence3NotesHi = "'beedigalalli' का अर्थ 'सड़कों में/पर' है। 'saaguva' का अर्थ है 'चलने वाला/गुजरने वाला'।";

        sentence4Kn = "ಚಿನ್ನದ ಅಂಬಾರಿಯಲ್ಲಿ ವಿರಾಜಮಾನಳಾದ ಚಾಮುಂಡೇಶ್ವರಿ ದೇವಿಯ ದರ್ಶನ ಪಡೆಯಲು ಲಕ್ಷಾಂತರ ಭಕ್ತರು ಸಾಗರೋಪಾದಿಯಲ್ಲಿ ಹರಿದು ಬರುತ್ತಾರೆ.";
        sentence4Tr = "Chinnada ambaariyalli viraajamaanalaada Chaamundeeshwari deeviya darshana padeyalu lakshaantara bhaktaru saagaroopaadiyalli haridu baruttaare.";
        sentence4En = "Millions of devotees flood like an ocean to catch a glimpse of Goddess Chamundeshwari seated majestically in the golden howdah.";
        sentence4Hi = "सोने की अंबारी पर विराजमान देवी चामुंडेश्वरी के दर्शन पाने के लिए लाखों श्रद्धालु सागर की तरह उमड़ पड़ते हैं।";
        sentence4NotesEn = "Locative 'ambaariyalli' (in howdah) + relative participle 'viraajamaanalaada' (who is resplendent) + infinitive 'padeyalu' (to obtain) + adverbial phrase 'saagaroopaadiyalli' (ocean-like/in waves) + verb 'baruttaare' (they come).";
        sentence4NotesHi = "'deeviya' (देवी का) संबंध कारक है। 'saagaroopaadiyalli' का अर्थ है 'सागर की तरह/उमड़ते हुए'।";

        sentence5Kn = "ಈ ಐತಿಹಾಸಿಕ ಸಂಭ್ರಮವು ನಾಡಿನ ಕಲೆ, ಜಾನಪದ ಹಾಗೂ ರಾಜವಂಶದ ಶ್ರೀಮಂತ ಪರಂಪರೆಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಮುನ್ನಡೆಸಿಕೊಂಡು ಬಂದಿದೆ.";
        sentence5Tr = "Ee aitihasika sambhramavu naadina kale, jaanapada haagu raajavamshada sreemanta parampareyannu yashasvigaagi munnadesikondu bandide.";
        sentence5En = "This historic carnival successfully preserves and carries forward the rich legacy of local arts, folklore, and royal history.";
        sentence5Hi = "यह ऐतिहासिक उत्सव इस क्षेत्र की कला, लोकसंस्कृति और राजवंश की समृद्ध विरासत को सफलतापूर्वक आगे बढ़ाता आ रहा है।";
        sentence5NotesEn = "Subject 'sambhramavu' (celebration/carnival) + genitive 'raajavamshada' (of royal dynasty) + accusative 'parampareyannu' (heritage) + compound verb 'munnadesikondu bandide' (has carried forward successfully).";
        sentence5NotesHi = "'naadina' का अर्थ 'क्षेत्र का/देश का' है। 'parampareyannu' का अर्थ है 'विरासत को' (द्वितीय विभक्ति)।";

        vocabHighlight = [
          { word: "ಮಹೋತ್ಸವ", transliteration: "mahotsava", meaning: isEng ? "Grand Festival" : "भव्य महोत्सव" },
          { word: "ಅಂಬಾರಿ", transliteration: "ambaari", meaning: isEng ? "Howdah/Elephant Carriage" : "हाथी हौदा" },
          { word: "ಪರಂಪರೆ", transliteration: "parampare", meaning: isEng ? "Heritage/Tradition" : "विरासत/परंपरा" }
        ];
        break;

      case 2: // Ugadi
        sentence1Kn = "ಯುಗದ ಆರಂಭವನ್ನು ಸೂಚಿಸುವ ಉಗಾದಿ ಹಬ್ಬವು ಚೈತ್ರ ಮಾಸದ ಹೊಸ ಚೇತನದೊಂದಿಗೆ ಕನ್ನಡಿಗರನ್ನು ಹೊಸ ವರ್ಷಕ್ಕೆ ಬರಮಾಡಿಕೊಳ್ಳುತ್ತದೆ.";
        sentence1Tr = "Yugada aarambhavannu soochisuva Ugaadi habbavu Chaitra maasada hosa cheetanadondige kannadigarannu hosa varshakke baramaadikolluttade.";
        sentence1En = "Signaling the beginning of a new epoch, Ugadi festival welcomes Kannadigas into the new year with the fresh energy of Chaitra month.";
        sentence1Hi = "नए युग की शुरुआत का संकेत देने वाला युगादि (उगादि) त्योहार चैत्र मास की नई ऊर्जा के साथ कन्नड़ लोगों का नए वर्ष में स्वागत करता है।";
        sentence1NotesEn = "Accusative 'aarambhavannu' (beginning) + active participle 'soochisuva' (indicating) + genitive 'maasada' (of month) + postposition 'cheetanadondige' (with energy) + accusative plural 'kannadigarannu' (Kannadigas) + verb 'baramaadikolluttade' (welcomes).";
        sentence1NotesHi = "'aarambhavannu' का अर्थ 'आरंभ को' है। 'cheetanadondige' का अर्थ है 'चेतना/ऊर्जा के साथ'।";

        sentence2Kn = "ವಸಂತ ಋತುವಿನ ಆಗಮನದ ಸಂಕೇತವಾಗಿ ಜನರು ತಮ್ಮ ಹೊಸ್ತಿಲಿಗೆ ಹಸಿರು ಮಾವಿನ ತೋರಣ ಕಟ್ಟಿ, ಹೊಚ್ಚಹೊಸ ರಂಗೋಲಿಯಿಂದ ಅಂಗಳವನ್ನು ಅಲಂಕರಿಸುತ್ತಾರೆ.";
        sentence2Tr = "Vasanta rutuvina aagamanada sankeetavaagi janaru tamma hostilige hasiru maavina toorana katti, hochchahosa rangoliyinda angalavannu alankarisuttaare.";
        sentence2En = "Celebrating the arrival of the spring season, people tie green mango leaf festoons to their thresholds and adorn their courtyards with brand new rangoli designs.";
        sentence2Hi = "वसंत ऋतु के आगमन के प्रतीक के रूप में लोग अपने चौखट पर आम के पत्तों का तोरण बांधते हैं और आंगन को बिल्कुल नई रंगोली से सजाते हैं।";
        sentence2NotesEn = "Genitive 'rutuvina' (of season) + dative 'hostilige' (to threshold) + gerund 'katti' (having tied) + instrumental 'rangoliyinda' (with rangoli) + accusative 'angalavannu' (courtyard) + verb 'alankarisuttaare' (they decorate).";
        sentence2NotesHi = "'hostilige' (चौखट को) में संप्रदान कारक है। 'rangoliyinda' (रंगोली से) में करण कारक है।";

        sentence3Kn = "ಈ ದಿನದ ಮುಖ್ಯ ಆಚರಣೆಯಾದ ಬೇವು-ಬೆಲ್ಲ ಸೇವನೆಯು ಜೀವನದ ಸುಖ-ಕಷ್ಟಗಳನ್ನು ಸಮಾನ ದೃಷ್ಟಿಯಿಂದ ಸವಿಯಲು ಪ್ರೇರೇಪಿಸುತ್ತದೆ.";
        sentence3Tr = "Ee dinada mukhya aacharaneyaada beevu-bella seavaneyu jeevanada sukha-kashtagalannu samaana drushtiyinda saviyalu preereepisuttade.";
        sentence3En = "Consuming neem and jaggery, the central ritual of this day, inspires people to face life's joys and hardships with equal grace.";
        sentence3Hi = "इस दिन का मुख्य अनुष्ठान 'नीम और गुड़' का सेवन है, जो जीवन के सुख और दुखों को समान दृष्टि से स्वीकार करने के लिए प्रेरित करता है।";
        sentence3NotesEn = "Adjective modifier 'aacharaneyaada' (which is the ritual) + subject 'seavaneyu' (consumption) + genitive 'jeevanada' (of life) + accusative plural 'sukha-kashtagalannu' (joys and difficulties) + infinitive 'saviyalu' (to relish/experience) + verb 'preereepisuttade' (inspires).";
        sentence3NotesHi = "'seavaneyu' का अर्थ है 'सेवन ही' (बलवाचक रूप)। 'sukha-kashtagalannu' (सुख-दुखों को) द्वितीय विभक्ति बहुवचन है।";

        sentence4Kn = "ಸಾಯಂಕಾಲದ ಪಂಚಾಂಗ ಶ್ರವಣದಲ್ಲಿ ವಾರ್ಷಿಕ ಜಾತಕ, ಮಳೆ-ಬೆಳೆಗಳ ಮುನ್ಸೂಚನೆ ಹಾಗೂ ಕಾಲಗತಿಯನ್ನು ಶ್ರದ್ಧೆಯಿಂದ ಆಲಿಸಲಾಗುತ್ತದೆ.";
        sentence4Tr = "Saayankaalada panchaanga shravanadalli vaarshika jaataka, male-belegalgala munsoochane haagu kaalagatiyannu shraddheyinda aalisalaaguttade.";
        sentence4En = "During the evening almanac reading, people listen with deep reverence to annual horoscopes, crop predictions, and the passage of cosmic time.";
        sentence4Hi = "शाम के समय पंचांग श्रवण में राशिफल, बारिश-फसल के पूर्वानुमान और समय की चाल को लोग श्रद्धापूर्वक सुनते हैं।";
        sentence4NotesEn = "Genitive 'saayankaalada' (of evening) + locative 'shravanadalli' (in listening) + accusative 'kaalagatiyannu' (course of time) + passive verb 'aalisalaaguttade' (is listened to).";
        sentence4NotesHi = "'shravanadalli' में अधिकरण कारक है (सुनने में)। 'kaalagatiyannu' का अर्थ है 'समय की चाल को'।";

        sentence5Kn = "ಮನೆಮನೆಯಲ್ಲೂ ಸಡಗರದ ಸಿದ್ಧತೆಯೊಂದಿಗೆ ಬಿಸಿಬಿಸಿ ಹೋಳಿಗೆ ಹಾಗೂ ವಿವಿಧ ಯುಗಾದಿ ವಿಶೇಷ ಭಕ್ಷ್ಯಗಳನ್ನು ನೈವೇದ್ಯ ಮಾಡಿ ಕುಟುಂಬದವರೊಂದಿಗೆ ಆನಂದಿಸುತ್ತಾರೆ.";
        sentence5Tr = "Manemaneyalloo sadagarada siddhateyondige bisibisi hoolige haagu vividha yugaadi visheesha bhakshyagalannu naiveedya maadi kutumbadavarondige aanandisuttaare.";
        sentence5En = "Amid joyous preparations in every household, hot Holige and various Ugadi delicacies are offered to the gods and enjoyed with family members.";
        sentence5Hi = "घर-घर में उल्लासपूर्ण तैयारियों के साथ गर्म-गर्म 'होलिगे' और विभिन्न पकवानों का भोग लगाया जाता है और परिवार के साथ इसका आनंद लिया जाता है।";
        sentence5NotesEn = "Locative with emphatic 'manemaneyalloo' (in every house indeed) + compound 'bisibisi' (hot) + verbal participle 'naiveedya maadi' (having offered as naivedya) + postposition 'kutumbadavarondige' (with family members) + verb 'aanandisuttaare' (they rejoice/celebrate).";
        sentence5NotesHi = "'manemaneyalloo' का अर्थ है 'प्रत्येक घर में भी'। 'hoolige' कर्नाटक की एक प्रसिद्ध पारंपरिक मीठी रोटी है।";

        vocabHighlight = [
          { word: "ಚೇತನ", transliteration: "cheetana", meaning: isEng ? "Energy/Consciousness" : "चेतना/ऊर्जा" },
          { word: "ಬೇವು-ಬೆಲ್ಲ", transliteration: "beevu-bella", meaning: isEng ? "Neem & Jaggery" : "नीम और गुड़" },
          { word: "ಹೋಳಿಗೆ", transliteration: "hoolige", meaning: isEng ? "Sweet Flatbread" : "पूरन पोली/मीठी रोटी" }
        ];
        break;

      case 3: // Deepavali
        sentence1Kn = "ಬೆಳಕಿನ ಹಬ್ಬ ದೀಪಾವಳಿಯು ಜಗತ್ತಿನ ಕತ್ತಲೆಯನ್ನು ದೂರಮಾಡಿ ಜ್ಞಾನ ಮತ್ತು ಸಮೃದ್ಧಿಯ ಹೊಸ ಆಶಾಕಿರಣವನ್ನು ಮೂಡಿಸುತ್ತದೆ.";
        sentence1Tr = "Belakina habba Deepaavaliyu jagattina kattaleyannu dooramaadi jnaana mattu samruddhiya hosa aashaakiranavannu moodisuttade.";
        sentence1En = "Deepavali, the festival of lights, dispels the world's darkness and sparks a new ray of hope for wisdom and prosperity.";
        sentence1Hi = "रोशनी का त्योहार दीपावली दुनिया के अंधकार को दूर कर ज्ञान और समृद्धि की एक नई आशा की किरण जगाता है।";
        sentence1NotesEn = "Genitive 'belakina' (of light) + subject 'Deepaavaliyu' (Deepavali indeed) + accusative 'kattaleyannu' (darkness) + verbal participle 'dooramaadi' (having dispelled) + accusative 'aashaakiranavannu' (ray of hope).";
        sentence1NotesHi = "'belakina' में संबंध कारक है (रोशनी का)। 'dooramaadi' का अर्थ है 'दूर करके/हटाकर'।";

        sentence2Kn = "ಕಾರ್ತಿಕ ಮಾಸದ ಈ ಶುಭದಿನಗಳಲ್ಲಿ ಸಾಲು ಸಾಲು ಮಣ್ಣಿನ ಹಣತೆಗಳು ಮನೆಗಳ ಹೊಸ್ತಿಲಿನಲ್ಲಿ ಬೆಳಗುತ್ತಾ ನಂದಾದೀಪದಂತೆ ಶೋಭಿಸುತ್ತವೆ.";
        sentence2Tr = "Kaartika maasada ee shubhadinagalalli saalu saalu mannina hanategalu manegala hostilinalli belaguttaa nandaadeepadante shobhisuttave.";
        sentence2En = "During these sacred days of Kartika month, rows of earthen clay lamps illuminate the doorsteps of homes, shining like eternal flames.";
        sentence2Hi = "कार्तिक मास के इन शुभ दिनों में, मिट्टी के दीयों की कतारें घरों की चौखट पर जलती हुई अखंड ज्योति की तरह सुशोभित होती हैं।";
        sentence2NotesEn = "Locative plural 'shubhadinagalalli' (in auspicious days) + compound adjective 'saalu saalu' (rows of) + plural subject 'hanategalu' (clay lamps) + adverbial participle 'belaguttaa' (while shining) + verb 'shobhisuttave' (they shine beautifully).";
        sentence2NotesHi = "'shubhadinagalalli' अधिकरण कारक बहुवचन है (शुभ दिनों में)। 'nandaadeepadante' का अर्थ है 'अखंड ज्योति की तरह'।";

        sentence3Kn = "ನರಕ ಚತುರ್ದಶಿಯ ಮುಂಜಾನೆಯ ತೈಲಾಭ್ಯಂಗ ಸ್ನಾನವು ದೇಹಕ್ಕೆ ಚೈತನ್ಯ ನೀಡುವ ಜೊತೆಗೆ ಕೆಟ್ಟ ಶಕ್ತಿಗಳ ನಾಶದ ಸಂಕೇತವಾಗಿದೆ.";
        sentence3Tr = "Naraka Chaturdashiya munjaaneya tailaabhyanga snaanavu deehakke chaitanya needuva jotege ketta shaktigala naashada sankeetavaagide.";
        sentence3En = "The early morning oil bath on Naraka Chaturdashi rejuvenates the body and symbolizes the destruction of negative forces.";
        sentence3Hi = "नरक चतुर्दशी की सुबह का औषधीय तेल स्नान (तैल अभ्यंग स्नान) शरीर को ताजगी देता है और नकारात्मक शक्तियों के विनाश का प्रतीक है।";
        sentence3NotesEn = "Genitive 'munjaaneya' (of morning) + subject 'tailaabhyanga snaanavu' (oil bath indeed) + dative 'deehakke' (to body) + genitive 'naashada' (of destruction) + 'sankeetavaagide' (is symbol).";
        sentence3NotesHi = "'deehakke' संप्रदान कारक है (शरीर को/के लिए)। 'naashada' (विनाश का) संबंध कारक है।";

        sentence4Kn = "ಬಲಿಪಾಡ್ಯಮಿಯ ಸುದಿನದಂದು ಕೃಷಿಕರು ಗೋಮಾತೆಯನ್ನು ಅಲಂಕರಿಸಿ ಪೂಜಿಸುವ ಮೂಲಕ ಪ್ರಕೃತಿಯ ಕೊಡುಗೆಗೆ ಕೃತಜ್ಞತೆ ಸಲ್ಲಿಸುತ್ತಾರೆ.";
        sentence4Tr = "Balipaadyamiya sudinadandu krushikaru goomaateyannu alankarisi poojisuva moolaka prakritiya kodugege krutajnate sallisuttaare.";
        sentence4En = "On the auspicious day of Balipadyami, farmers worship and decorate Mother Cow, expressing profound gratitude for nature's bountiful gifts.";
        sentence4Hi = "बलिप्रतिपदा के शुभ दिन पर किसान गौमाता को सजाकर पूजते हैं और प्रकृति के इस अनुपम उपहार के प्रति अपनी कृतज्ञता व्यक्त करते हैं।";
        sentence4NotesEn = "Genitive 'Balipaadyamiya' (of Balipadyami) + subject plural 'krushikaru' (farmers) + accusative 'goomaateyannu' (Mother Cow) + postposition 'moolaka' (through) + dative 'kodugege' (to gift) + verb 'sallisuttaare' (they render).";
        sentence4NotesHi = "'goomaateyannu' का अर्थ है 'गौमाता को' (द्वितीय विभक्ति)। 'moolaka' का अर्थ 'के माध्यम से' है।";

        sentence5Kn = "ಹಣತೆಗಳ ದೀಪ್ತಿಯ ನಡುವೆ ಸಿಹಿ ತಿನಿಸುಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತಾ, ಪಟಾಕಿಗಳ ಸದ್ದಿನೊಂದಿಗೆ ಹಿರಿಯ ಕಿರಿಯರೆಲ್ಲರೂ ಒಟ್ಟಾಗಿ ಹಬ್ಬದ ಸಂಭ್ರಮದಲ್ಲಿ ತೇಲುತ್ತಾರೆ.";
        sentence5Tr = "Hanategala deeptiya naduve sihi tinisugalannu hanchikolluttaa, pataakigala saddinondige hiriya kiriyarellaroo ottaagi habbada sambhramadalli teeluttaare.";
        sentence5En = "Sharing sweet treats amidst the warm glow of oil lamps, elders and children alike immerse themselves in the festivities with the crackle of sparklers.";
        sentence5Hi = "दीयों की रोशनी के बीच मिठाइयाँ बांटते हुए और पटाखों की आवाज के साथ, बच्चे और बड़े सभी मिलकर इस उत्सव के उल्लास में डूब जाते हैं।";
        sentence5NotesEn = "Postposition 'naduve' (amongst) + accusative plural 'tinisugalannu' (sweets) + adverbial participle 'hanchikolluttaa' (while sharing) + subject 'hiriya kiriyarellaroo' (elders and youngsters all indeed) + verb phrase 'sambhramadalli teeluttaare' (they float in joy).";
        sentence5NotesHi = "'deeptiya' (रोशनी की) संबंध कारक है। 'teeluttaare' का शाब्दिक अर्थ 'तैरते हैं' है (यहाँ अर्थ 'डूब जाना/मग्न होना' है)।";

        vocabHighlight = [
          { word: "ಹಣತೆ", transliteration: "hanate", meaning: isEng ? "Clay Oil Lamp" : "मिट्टी का दीया" },
          { word: "ತೈಲಾಭ್ಯಂಗ", transliteration: "tailaabhyanga", meaning: isEng ? "Medicated Oil Bath" : "औषधीय तेल स्नान" },
          { word: "ದೀಪ್ತಿ", transliteration: "deepti", meaning: isEng ? "Radiance/Glow" : "दीप्ति/चमक" }
        ];
        break;

      case 4: // Gowri Ganesha
        sentence1Kn = "ಗೌರಿ ಗಣೇಶ ಹಬ್ಬವು ಭಾದ್ರಪದ ಮಾಸದಲ್ಲಿ ಬರುವ ಅತ್ಯಂತ ಜನಪ್ರಿಯ ಮತ್ತು ಭಕ್ತಿಪೂರ್ವಕ ಹಬ್ಬವಾಗಿದೆ.";
        sentence1Tr = "Gowri Ganeesha habbavu bhaadrapada maasadalli baruva atyanta janapriya mattu bhaktipoorvaka habbavaagide.";
        sentence1En = "Gowri Ganesha festival is a highly popular and devotional festival celebrated in the Hindu month of Bhadrapada.";
        sentence1Hi = "गौरी गणेश त्योहार भाद्रपद मास में आने वाला एक अत्यंत लोकप्रिय और भक्तिपूर्ण त्योहार है।";
        sentence1NotesEn = "Locative 'maasadalli' (in month) + relative participle 'baruva' (that comes) + adjective 'bhaktipoorvaka' (devotional) + 'habbavaagide' (is festival).";
        sentence1NotesHi = "'maasadalli' में अधिकरण कारक है (महीने में)। 'baruva' का अर्थ 'आने वाला' है।";

        sentence2Kn = "ಗಣೇಶ ಹಬ್ಬದ ಹಿಂದಿನ ದಿನ ಸ್ವರ್ಣಗೌರಿ ವ್ರತವನ್ನು ಅತ್ಯಂತ ಶ್ರದ್ಧೆಯಿಂದ ಆಚರಿಸಲಾಗುತ್ತದೆ.";
        sentence2Tr = "Ganeesha habbada hindina dina Swarnagowri vratavannu atyanta shraddheyinda aacharisalaaguttade.";
        sentence2En = "A day prior to Ganesha Chaturthi, women perform the Swarna Gowri Vrata with deep faith and dedication.";
        sentence2Hi = "गणेश चतुर्थी से एक दिन पहले महिलाएं बड़ी श्रद्धा के साथ 'स्वर्णगौरी व्रत' रखती हैं।";
        sentence2NotesEn = "Genitive 'habbada' (of festival) + adjective 'hindina' (previous) + accusative 'vratavannu' (vrata/vow) + instrumental 'shraddheyinda' (with devotion) + passive 'aacharisalaaguttade' (is celebrated).";
        sentence2NotesHi = "'vratavannu' में द्वितीय विभक्ति है (व्रत को)। 'shraddheyinda' में करण कारक है (श्रद्धा से)।";

        sentence3Kn = "ಮಣ್ಣಿನ ಗಣಪತಿಯ ಮೂರ್ತಿಯನ್ನು ಪ್ರತಿಷ್ಠಾಪಿಸಿ ವಿವಿಧ ಬಗೆಯ ಪತ್ರೆಗಳಿಂದ ಪೂಜಿಸುತ್ತಾರೆ.";
        sentence3Tr = "Mannina Ganapatiya moortiyannu pratishthaapisi vividha bageya patregalinda poojisuttaare.";
        sentence3En = "Clay idols of Lord Ganesha are installed and worshipped with twenty-one varieties of holy leaves and flowers.";
        sentence3Hi = "मिट्टी के गणेश जी की मूर्ति स्थापित कर उन्हें विभिन्न प्रकार के पत्तों (पत्रियों) से पूजा जाता है।";
        sentence3NotesEn = "Genitive 'mannina' (of clay) + accusative 'moortiyannu' (idol) + verbal participle 'pratishthaapisi' (having installed) + instrumental plural 'patregalinda' (with leaves).";
        sentence3NotesHi = "'mannina' का अर्थ 'मिट्टी का' है। 'pratishthaapisi' का अर्थ 'स्थापित करके' है।";

        sentence4Kn = "ಗಣೇಶನಿಗೆ ಪ್ರಿಯವಾದ ಮೋದಕ ಮತ್ತು ಕಡುಬುಗಳನ್ನು ನೈವೇದ್ಯವಾಗಿ ಅರ್ಪಿಸಲಾಗುತ್ತದೆ.";
        sentence4Tr = "Ganeeshanige priyavaada moodaka mattu kadubugalannu naiveedyavaagi arpisalaaguttade.";
        sentence4En = "Delicious Modakas and steamed dumplings (Kadubu), loved by Lord Ganesha, are offered as sacred food (Naivedya).";
        sentence4Hi = "गणेश जी को प्रिय 'मोदक' और 'कडुबु' (करंजी) नैवेद्य के रूप में अर्पित किए जाते हैं।";
        sentence4NotesEn = "Dative 'Ganeeshanige' (to Ganesha) + relative adjective 'priyavaada' (favorite) + accusative plural 'moodaka mattu kadubugalannu' (modakas and kadubus) + passive 'arpisalaaguttade' (is offered).";
        sentence4NotesHi = "'Ganeeshanige' संप्रदान कारक है (गणेश जी को)। 'naiveedyavaagi' का अर्थ 'नैवेद्य के रूप में' है।";

        sentence5Kn = "ಮೂರು ಅಥವಾ ಐದು ದಿನಗಳ ನಂತರ ಮೂರ್ತಿಯನ್ನು ಕೆರೆ ಅಥವಾ ನದಿಯಲ್ಲಿ ವಿಸರ್ಜಿಸಲಾಗುತ್ತದೆ.";
        sentence5Tr = "Mooru athavaa aidu dinagala nantara moortiyannu kere athavaa nadiyalli visarjisalaaguttade.";
        sentence5En = "After three or five days of grand worship, the clay idol is immersed in a nearby lake or river with rituals.";
        sentence5Hi = "तीन या पांच दिनों के बाद, मूर्ति को किसी तालाब या नदी में विसर्जित किया जाता है।";
        sentence5NotesEn = "Postposition 'nantara' (after) + accusative 'moortiyannu' (idol) + locative 'nadiyalli' (in river) + passive 'visarjisalaaguttade' (is immersed).";
        sentence5NotesHi = "'kere athavaa nadiyalli' का अर्थ 'तालाब या नदी में' है। 'visarjisalaaguttade' का अर्थ है 'विसर्जित किया जाता है'।";

        vocabHighlight = [
          { word: "ವ್ರತ", transliteration: "vrata", meaning: isEng ? "Holy Vow" : "पवित्र व्रत" },
          { word: "ಮೋದಕ", transliteration: "modaka", meaning: isEng ? "Sweet Dumpling" : "मोदक" },
          { word: "ವಿಸರ್ಜನೆ", transliteration: "visarjane", meaning: isEng ? "Immersion" : "विसर्जन" }
        ];
        break;

      case 5: // Karnataka Rajyotsava
        sentence1Kn = "ನವೆಂಬರ್ ಒಂದರಂದು ಇಡೀ ಕರ್ನಾಟಕದಲ್ಲಿ ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವವನ್ನು ಅತ್ಯಂತ ಉತ್ಸಾಹದಿಂದ ಆಚರಿಸಲಾಗುತ್ತದೆ.";
        sentence1Tr = "November ondarandu idee Karnaatakadalli Kannada Raajyootsavavannu atyanta utsaahadinda aacharisalaaguttade.";
        sentence1En = "On the first of November, Kannada Rajyotsava (State Formation Day) is celebrated with immense enthusiasm throughout Karnataka.";
        sentence1Hi = "एक नवंबर को पूरे... 'कन्नड़ राज्योत्सव' अत्यंत उत्साह के साथ मनाया जाता है।";
        sentence1NotesEn = "Postposition 'ondarandu' (on first day of) + locative 'Karnaatakadalli' (in Karnataka) + accusative 'Raajyootsavavannu' (Rajyotsava) + instrumental 'utsaahadinda' (with enthusiasm).";
        sentence1NotesHi = "'Karnaatakadalli' अधिकरण कारक है (कर्नाटक में)। 'utsaahadinda' में करण कारक है (उत्साह से)।";

        sentence2Kn = "ಈ ದಿನ ಕರ್ನಾಟಕ ಏಕೀಕರಣಕ್ಕಾಗಿ ಶ್ರಮಿಸಿದ ಮಹನೀಯರನ್ನು ಗೌರವದಿಂದ ನೆನೆಯಲಾಗುತ್ತದೆ.";
        sentence2Tr = "Ee dina Karnaataka eekeekaranakkaagi shramisida mahaneeyarannu gauravadinda neneyalaaguttade.";
        sentence2En = "On this special day, the visionaries who strived tirelessly for the unification of Karnataka state are remembered with deep respect.";
        sentence2Hi = "इस दिन कर्नाटक के एकीकरण के लिए संघर्ष करने वाले महानुभावों को आदरपूर्वक याद किया जाता है।";
        sentence2NotesEn = "Dative 'eekeekaranakkaagi' (for unification) + relative participle 'shramisida' (who strived) + accusative plural 'mahaneeyarannu' (great people) + passive 'neneyalaaguttade' (is remembered).";
        sentence2NotesHi = "'eekeekaranakkaagi' संप्रदान कारक है (एकीकरण के लिए)। 'mahaneeyarannu' का अर्थ है 'महान लोगों को'।";

        sentence3Kn = "ಶಾಲಾ-ಕಾಲೇಜುಗಳು ಮತ್ತು ಸರ್ಕಾರಿ ಕಚೇರಿಗಳಲ್ಲಿ ಹಳದಿ-ಕೆಂಪು ಬಣ್ಣದ ಕನ್ನಡ ಧ್ವಜವನ್ನು ಹಾರಿಸಲಾಗುತ್ತದೆ.";
        sentence3Tr = "Shaalaa-kaaleejugalu mattu sarakaari kacheerigalalli haladi-kempu bannada Kannada dhwajavannu haarisalaaguttade.";
        sentence3En = "The iconic yellow-and-red Kannada flag is proudly hoisted across schools, colleges, and government offices.";
        sentence3Hi = "स्कूलों, कॉलेजों और सरकारी कार्यालयों में लाल और पीले रंग का कन्नड़ ध्वज फहराया जाता है।";
        sentence3NotesEn = "Locative plural 'kacheerigalalli' (in offices) + genitive 'bannada' (of color) + accusative 'dhwajavannu' (flag) + passive 'haarisalaaguttade' (is hoisted).";
        sentence3NotesHi = "लाल और पीला रंग (haladi-kempu) कर्नाटक का प्रतीक माना जाता है। 'dhwajavannu' का अर्थ 'ध्वज को' है।";

        sentence4Kn = "ಕನ್ನಡ ಸಾಹಿತ್ಯ, ಕಲೆ ಮತ್ತು ಸಮಾಜ ಸೇವೆಗೆ ಮಹತ್ತರ ಕೊಡುಗೆ ನೀಡಿದವರಿಗೆ 'ರಾಜ್ಯೋತ್ಸವ ಪ್ರಶಸ್ತಿ' ನೀಡಲಾಗುತ್ತದೆ.";
        sentence4Tr = "Kannada saahitya, kale mattu samaaja seeyege mahattara koduge needidavarige 'Raajyootsava Prashasti' needalaaguttade.";
        sentence4En = "The prestigious 'Rajyotsava Award' is presented by the state government to individuals with remarkable contributions to literature, arts, and society.";
        sentence4Hi = "कन्नड़ साहित्य, कला और समाज सेवा में महत्वपूर्ण योगदान देने वालों को 'राज्योत्सव पुरस्कार' से सम्मानित किया जाता है।";
        sentence4NotesEn = "Dative plural 'needidavarige' (to those who gave) + subject 'Raajyootsava Prashasti' (Rajyotsava Award) + passive 'needalaaguttade' (is given).";
        sentence4NotesHi = "'needidavarige' संप्रदान कारक बहुवचन है (योगदान देने वालों को)। 'Prashasti' का अर्थ 'पुरस्कार' है।";

        sentence5Kn = "ಈ ಉತ್ಸವವು ಕನ್ನಡಿಗರಲ್ಲಿ ಒಗ್ಗಟ್ಟು ಮತ್ತು ತಮ್ಮ ಭಾಷೆಯ ಬಗ್ಗೆ ಹೆಮ್ಮೆಯನ್ನು ಮೂಡಿಸುತ್ತದೆ.";
        sentence5Tr = "Ee utsavavu kannadigaralli oggattu mattu tamma bhaasheya bagge hemmeyannu moodisuttade.";
        sentence5En = "This celebration instills a deep sense of unity among Kannada people and absolute pride in their mother tongue.";
        sentence5Hi = "यह उत्सव कन्नड़ लोगों में एकता और अपनी भाषा के प्रति गर्व की भावना पैदा करता है।";
        sentence5NotesEn = "Locative plural 'kannadigaralli' (among Kannadigas) + postposition 'bagge' (about) + accusative 'hemmeyannu' (pride) + verb 'moodisuttade' (causes/instills).";
        sentence5NotesHi = "'kannadigaralli' का अर्थ 'कन्नड़ लोगों में' है। 'bhaasheya bagge' का अर्थ 'भाषा के बारे में/प्रति' है।";

        vocabHighlight = [
          { word: "ಏಕೀಕರಣ", transliteration: "eekeekarana", meaning: isEng ? "Unification" : "एकीकरण" },
          { word: "ಧ್ವಜ", transliteration: "dhwaja", meaning: isEng ? "Flag" : "ध्वज" },
          { word: "ಹೆಮ್ಮೆ", transliteration: "hemme", meaning: isEng ? "Pride" : "गर्व" }
        ];
        break;

      case 6: // Kambala
        sentence1Kn = "ಕಂಬಳವು ಕರ್ನಾಟಕದ ಕರಾವಳಿ ಜಿಲ್ಲೆಗಳಲ್ಲಿ ಆಚರಿಸಲಾಗುವ ಸಾಂಪ್ರದಾಯಿಕ ಗದ್ದೆ ಕ್ರೀಡೆಯಾಗಿದೆ.";
        sentence1Tr = "Kambalavu Karnaatakada karaavali jillegalalli aacharisalaaguva saampradaayika gadde kreedeyaagide.";
        sentence1En = "Kambala is a traditional and highly thrilling slushy muddy field buffalo race hosted in the coastal districts of Karnataka.";
        sentence1Hi = "कंबला कर्नाटक के तटीय जिलों में आयोजित होने वाला एक पारंपरिक कीचड़-युक्त खेतों का खेल (भैंसा दौड़) है।";
        sentence1NotesEn = "Locative plural 'jillegalalli' (in districts) + passive participle 'aacharisalaaguva' (which is celebrated) + 'gadde kreedeyaagide' (is wet-field sport).";
        sentence1NotesHi = "'karaavali' का अर्थ 'तैयार' है। 'jillegalalli' में अधिकरण बहुवचन है (जिलों में)। 'gadde' का अर्थ 'धान का खेत/गीली मिट्टी' है।";

        sentence2Kn = "ಈ ಕ್ರೀಡೆಯಲ್ಲಿ ಜೋಡಿ ಕೋಣಗಳನ್ನು ಕೆಸರು ಗದ್ದೆಯಲ್ಲಿ ವೇಗವಾಗಿ ಓಡಿಸಲಾಗುತ್ತದೆ.";
        sentence2Tr = "Ee kreedeyalli jodi koonagalannu kesaru gaddeyalli vegavaagi oodisalaaguttade.";
        sentence2En = "In this traditional event, pairs of strong, well-trained buffaloes are raced at high speeds through wet paddy fields.";
        sentence2Hi = "इस खेल में भैंसों की जोड़ी को गीले कीचड़ वाले खेत में तेजी से दौड़ाया जाता है।";
        sentence2NotesEn = "Locative 'kreedeyalli' (in sport) + accusative plural 'koonagalannu' (buffaloes) + locative 'gaddeyalli' (in field) + passive 'oodisalaaguttade' (are driven/raced).";
        sentence2NotesHi = "'koonagalannu' का अर्थ है 'भैंसों को'। 'kesaru gaddeyalli' का अर्थ है 'कीचड़ वाले खेत में'।";

        sentence3Kn = "ಓಟಗಾರನು ಕೋಣಗಳೊಂದಿಗೆ ಓಡಿ ತನ್ನ ಸಾಹಸ ಹಾಗೂ ಸಾಮರ್ಥ್ಯವನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತಾನೆ.";
        sentence3Tr = "Ootagaaranu koonagalondige oodi tanna saahasa haagu saamarthyavannu pradarshisuttaane.";
        sentence3En = "The skilled jockey runs alongside the buffaloes, demonstrating incredible athletic strength, courage, and balance.";
        sentence3Hi = "धावक भैंसों के साथ दौड़ता है और अपने साहस और शारीरिक क्षमता का प्रदर्शन करता है।";
        sentence3NotesEn = "Instrumental postposition '-ondige' in 'koonagalondige' (with buffaloes) + verbal participle 'oodi' (having run) + accusative 'saamarthyavannu' (capability).";
        sentence3NotesHi = "'koonagalondige' का अर्थ है 'भैंसों के साथ'। 'saahasa haagu saamarthyavannu' का अर्थ है 'साहस और क्षमता को'।";

        sentence4Kn = "ಈ ಆಟವು ತುಳುನಾಡಿನ ಕೃಷಿ ಸಂಸ್ಕೃತಿ ಮತ್ತು ಕೃಷಿಕರ ಶಕ್ತಿಯ ಸಂಕೇತವಾಗಿದೆ.";
        sentence4Tr = "Ee aatavu Tulunaadina krishi samskriti mattu krushikara shaktiya sankeetavaagide.";
        sentence4En = "This folk sport represents a grand celebration of the agrarian culture of Tulunadu and the raw strength of its farmers.";
        sentence4Hi = "यह खेल तुलुनाडु (तटीय क्षेत्र) की कृषि संस्कृति और किसानों की शक्ति का प्रतीक है।";
        sentence4NotesEn = "Genitive 'Tulunaadina' (of Tulunadu) + genitive plural 'krushikara' (of farmers) + 'sankeetavaagide' (is symbol).";
        sentence4NotesHi = "'Tulunaadina' (तुलुनाडु का) और 'krushikara' (किसनों की) दोनों संबंध कारक हैं।";

        sentence5Kn = "ಕಂಬಳವನ್ನು ನೋಡಲು ಸಾವಿರಾರು ದೇಶಿ ಮತ್ತು ವಿದೇಶಿ ಪ್ರವಾಸಿಗರು ಕರಾವಳಿಗೆ ಬರುತ್ತಾರೆ.";
        sentence5Tr = "Kambalavannu noodalu saaviraaru deeshi mattu videeshi pravaasigaru karaavalige baruttaare.";
        sentence5En = "Thousands of domestic and international tourists flock to the coastal region to witness the sheer energy of Kambala.";
        sentence5Hi = "कंबला देखने के लिए हजारों देशी और विदेशी पर्यटक तटीय क्षेत्रों में आते हैं।";
        sentence5NotesEn = "Infinitive 'noodalu' (to see) + subject plural 'pravaasigaru' (tourists) + dative 'karaavalige' (to the coast).";
        sentence5NotesHi = "'Kambalavannu' का अर्थ है 'कंबला को'। 'karaavalige' संप्रदान कारक है (तट को/तटीय क्षेत्र में)।";

        vocabHighlight = [
          { word: "ಕೆಸರು ಗದ್ದೆ", transliteration: "kesaru gadde", meaning: isEng ? "Slushy Field" : "कीचड़ वाला खेत" },
          { word: "ಕೋಣ", transliteration: "koona", meaning: isEng ? "Male Buffalo" : "नर भैंसा" },
          { word: "ಸಾಹಸ", transliteration: "saahasa", meaning: isEng ? "Courage/Adventure" : "साहस" }
        ];
        break;

      case 7: // Pattadakal Dance Festival
        sentence1Kn = "ಪಟ್ಟದಕಲ್ಲು ನೃತ್ಯೋತ್ಸವವು ಐತಿಹಾಸಿಕ ಪಟ್ಟದಕಲ್ಲಿನ ದೇವಾಲಯಗಳ ಹಿನ್ನೆಲೆಯಲ್ಲಿ ನಡೆಯುವ ಸಾಂಸ್ಕೃತಿಕ ಹಬ್ಬವಾಗಿದೆ.";
        sentence1Tr = "Pattadakallu Nrityootsavavu aitihasika Pattadakallina deevaalayagala hinnamleyalli nadeyuva saamskritika habbavaagide.";
        sentence1En = "Pattadakal Dance Festival is a prestigious cultural festival held against the breathtaking backdrop of the historic Pattadakal temple complex.";
        sentence1Hi = "पट्टदकल नृत्य महोत्सव ऐतिहासिक पट्टदकल मंदिरों की पृष्ठभूमि में आयोजित होने वाला एक सांस्कृतिक उत्सव है।";
        sentence1NotesEn = "Genitive 'Pattadakallina' (of Pattadakal) + genitive plural 'deevaalayagala' (of temples) + locative 'hinnamleyalli' (in backdrop) + relative participle 'nadeyuva' (that takes place).";
        sentence1NotesHi = "'deevaalayagala' में संबंध बहुवचन है (मंदिरों की)। 'hinnamleyalli' का अर्थ 'पृष्ठभूमि में' है।";

        sentence2Kn = "ಈ ಉತ್ಸವವನ್ನು ಕರ್ನಾಟಕ ಪ್ರವಾಸೋದ್ಯಮ ಇಲಾಖೆಯು ಪ್ರತಿ ವರ್ಷ ಜನವರಿ ತಿಂಗಳಲ್ಲಿ ಆಯೋಜಿಸುತ್ತದೆ.";
        sentence2Tr = "Ee utsavavannu Karnaataka pravaasodyama ilaakheyu prati varsha January tingalalli aayojisuttade.";
        sentence2En = "The Karnataka Department of Tourism organizes this magnificent arts festival annually during the month of January.";
        sentence2Hi = "कर्नाटक पर्यटन विभाग हर साल जनवरी के महीने में इस उत्सव का आयोजन करता है।";
        sentence2NotesEn = "Subject 'ilaakheyu' (department indeed) + locative 'tingalalli' (in month) + singular verb 'aayojisuttade' (it organizes).";
        sentence2NotesHi = "'pravaasodyama ilaakheyu' का अर्थ 'पर्यटन विभाग' है। 'tingalalli' में अधिकरण कारक है (महीने में)।";

        sentence3Kn = "ದೇಶದ ಪ್ರಸಿದ್ಧ ಶಾಸ್ತ್ರೀಯ ನೃತ್ಯಗಾರರು ಇಲ್ಲಿ ಭರತನಾಟ್ಯ, ಕಥಕ್ ಮುಂತಾದ ನೃತ್ಯಗಳನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತಾರೆ.";
        sentence3Tr = "Deeshada prasiddha shaastreeya nrityagaararu illi Bharatanatya, Kathak muntaada nrityagalannu pradarshisuttaare.";
        sentence3En = "Renowned classical dancers from across India gather here to perform sublime Bharatanatyam, Kathak, Kuchipudi, and other classical dances.";
        sentence3Hi = "देश के प्रसिद्ध शास्त्रीय नर्तक यहाँ भरतनाट्यम, कथक आदि नृत्यों का प्रदर्शन करते हैं।";
        sentence3NotesEn = "Genitive 'deeshada' (of country) + subject plural 'nrityagaararu' (dancers) + accusative plural 'nrityagalannu' (dances) + verb 'pradarshisuttaare' (they perform).";
        sentence3NotesHi = "'nrityagaararu' का अर्थ है 'नर्तक' (बहुवचन)। 'pradarshisuttaare' का अर्थ है 'प्रदर्शित करते हैं'।";

        sentence4Kn = "ಚಾಮುಂಡಿ ಮತ್ತು ಇತರ ಚಾಲುಕ್ಯರ ಶಿಲ್ಪಕಲೆಯ ಸೌಂದರ್ಯವು ನೃತ್ಯ ಪ್ರದರ್ಶನಗಳಿಗೆ ಅದ್ಭುತ ಕಳೆಯನ್ನು ನೀಡುತ್ತದೆ.";
        sentence4Tr = "Chaamundi mattu itara Chaalukyara shilpakaleya saundaryavu nritya pradarshanagalige adbhuta kaleyannu needuttade.";
        sentence4En = "The exquisite architectural beauty of Chalukya sculptures adds a divine grace and splendor to the dance performances.";
        sentence4Hi = "चालुक्य कालीन मूर्तिकला की सुंदरता इन नृत्य प्रदर्शनों में एक अद्भुत आकर्षण जोड़ देती है।";
        sentence4NotesEn = "Genitive plural 'Chaalukyara' (of Chalukyas) + dative plural 'nritya pradarshanagalige' (to dance performances) + accusative 'kaleyannu' (grace) + verb 'needuttade' (it gives).";
        sentence4NotesHi = "'Chaalukyara' (चालुक्यों की) संबंध कारक रूप है। 'nritya pradarshanagalige' का अर्थ है 'नृत्य प्रदर्शनों को'।";

        sentence5Kn = "ಇದು ನಮ್ಮ ಇತಿಹಾಸ ಮತ್ತು ಕಲೆಯ ಪರಂಪರೆಯನ್ನು ಯುವ ಪೀಳಿಗೆಗೆ ತಲುಪಿಸುವ ಅತ್ಯುತ್ತಮ ಪ್ರಯತ್ನವಾಗಿದೆ.";
        sentence5Tr = "Idu namma itihaasa mattu kaleya parampareyannu yuva peeligege talupisuva atyuttama prayatnavaagide.";
        sentence5En = "This cultural event is an outstanding endeavor to pass down our rich heritage of history and art to the younger generation.";
        sentence5Hi = "यह सांस्कृतिक आयोजन हमारे इतिहास और कला की समृद्ध विरासत को युवा पीढ़ी तक पहुँचाने का एक उत्कृष्ट प्रयास है।";
        sentence5NotesEn = "Accusative 'parampareyannu' (heritage) + dative 'yuva peeligege' (to younger generation) + active participle 'talupisuva' (delivering/sending) + 'prayatnavaagide' (is effort).";
        sentence5NotesHi = "'parampareyannu' में द्वितीया विभक्ति है (विरासत को)। 'yuva peeligege' का अर्थ है 'युवा पीढ़ी को' (संप्रदान कारक)।";

        vocabHighlight = [
          { word: "ಶಿಲ್ಪಕಲೆ", transliteration: "shilpakale", meaning: isEng ? "Sculpture" : "मूर्तिकला" },
          { word: "ನೃತ್ಯ", transliteration: "nritya", meaning: isEng ? "Dance" : "नृत्य" },
          { word: "ಉತ್ಸವ", transliteration: "utsava", meaning: isEng ? "Festival" : "उत्सव" }
        ];
        break;

      case 8: // Hampi Utsava
        sentence1Kn = "ಹಂಪಿ ಉತ್ಸವವು ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ವೈಭವ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯನ್ನು ನೆನಪಿಸುವ ಭವ್ಯ ಹಬ್ಬವಾಗಿದೆ.";
        sentence1Tr = "Hampi utsavavu Vijayanagara saamraajyada vaibhava mattu saamskritika parampareyannu nenapisuva bhavya habbavaagide.";
        sentence1En = "Hampi Utsava is a grand festival celebrated to commemorate the magnificent glory and rich cultural heritage of the Vijayanagara Empire.";
        sentence1Hi = "हम्पी उत्सव विजयनगर साम्राज्य के वैभव और सांस्कृतिक विरासत की याद दिलाने वाला एक भव्य त्योहार है।";
        sentence1NotesEn = "Genitive 'saamraajyada' (of empire) + accusative 'parampareyannu' (heritage) + relative participle 'nenapisuva' (reminding) + 'habbavaagide' (is festival).";
        sentence1NotesHi = "'saamraajyada' में संबंध कारक है (साम्राज्य का)। 'nenapisuva' का अर्थ 'याद दिलाने वाला' है।";

        sentence2Kn = "ಇದನ್ನು ಹಂಪಿ ವಿಜಯ ಉತ್ಸವ ಎಂದೂ ಕರೆಯುತ್ತಾರೆ ಮತ್ತು ಪ್ರತಿ ವರ್ಷ ಮೂರು ದಿನಗಳ ಕಾಲ ಆಚರಿಸಲಾಗುತ್ತದೆ.";
        sentence2Tr = "Idannu Hampi Vijaya utsava endoo kareyuttaare mattu prati varsha mooru dinagala kaala aacharisalaaguttade.";
        sentence2En = "Also known as Hampi Vijaya Utsava, it is celebrated every year for three spectacular days.";
        sentence2Hi = "इसे हम्पी विजय उत्सव के रूप में भी जाना जाता है और हर साल तीन दिनों के लिए मनाया जाता है।";
        sentence2NotesEn = "Accusative 'idannu' (this) + adverb 'endoo' (also as) + genitive plural 'dinagala' (of days) + passive 'aacharisalaaguttade' (is celebrated).";
        sentence2NotesHi = "'idannu' का अर्थ 'इसे' है। 'aacharisalaaguttade' का अर्थ 'मनाया जाता है' (कर्मवाच्य)।";

        sentence3Kn = "ಉತ್ಸವದ ಸಮಯದಲ್ಲಿ ಹಂಪಿಯ ಪುರಾತನ ಸ್ಮಾರಕಗಳನ್ನು ಸುಂದರ ದೀಪಾಲಂಕಾರದಿಂದ ಶೃಂಗರಿಸಲಾಗುತ್ತದೆ.";
        sentence3Tr = "Utsavada samayadalli Hampiya puraatana smaarakagalannu sundara deepaalankaaradinda shrungarisalaaguttade.";
        sentence3En = "During the festival, the ancient monuments of Hampi are gorgeously illuminated with colorful light displays.";
        sentence3Hi = "उत्सव के दौरान, हम्पी के प्राचीन स्मारकों को सुंदर रंग-बिरंगी रोशनी से सजाया जाता है।";
        sentence3NotesEn = "Genitive 'utsavada' (of festival) + locative 'samayadalli' (in time) + accusative plural 'smaarakagalannu' (monuments) + passive 'shrungarisalaaguttade'.";
        sentence3NotesHi = "'smaarakagalannu' का अर्थ 'स्मारकों को' (द्वितीय बहुवचन) है। 'shrungarisalaaguttade' का अर्थ 'सजाया जाता है' है।";

        sentence4Kn = "ಕನ್ನಡ ವಿಶ್ವವಿದ್ಯಾಲಯದ ಹತ್ತಿರ ನಡೆಯುವ ವಿವಿಧ ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ಪ್ರವಾಸಿಗರನ್ನು ಆಕರ್ಷಿಸುತ್ತವೆ.";
        sentence4Tr = "Kannada vishwavidyaalayada hattira nadeyuva vividha saamskritika kaaryakramagalu pravaasigarannu aakarshisuttave.";
        sentence4En = "Various classical music and dance programs hosted near the Kannada University attract thousands of visitors.";
        sentence4Hi = "कन्नड़ विश्वविद्यालय के पास आयोजित विभिन्न सांस्कृतिक कार्यक्रम पर्यटकों को अत्यधिक आकर्षित करते हैं।";
        sentence4NotesEn = "Genitive 'vishwavidyaalayada' (of university) + postposition 'hattira' (near) + plural subject 'kaaryakramagalu' (programs) + verb 'aakarshisuttave' (they attract).";
        sentence4NotesHi = "'vishwavidyaalayada hattira' का अर्थ 'विश्वविद्यालय के पास' है। 'aakarshisuttave' का अर्थ है 'आकर्षित करते हैं'।";

        sentence5Kn = "ವಿಶ್ವದಾದ್ಯಂತ ಇರುವ ಕಲಾಪ್ರೇಮಿಗಳು ಮತ್ತು ಪ್ರವಾಸಿಗರು ಕರ್ನಾಟಕದ ಭವ್ಯ ಇತಿಹಾಸವನ್ನು ಕಣ್ಣಾರೆ ಕಾಣಲು ಇಲ್ಲಿಗೆ ಬರುತ್ತಾರೆ.";
        sentence5Tr = "Vishwadaadyanta iruva kalaapreemigalu mattu pravaasigaru Karnaatakada bhavya itihaasavannu kannaare kaanalu illige baruttaare.";
        sentence5En = "Art lovers and tourists from around the world gather here to witness the glorious history of Karnataka with their own eyes.";
        sentence5Hi = "दुनिया भर से कला प्रेमी और पर्यटक कर्नाटक के इस शानदार इतिहास को अपनी आँखों से प्रत्यक्ष देखने यहाँ आते हैं।";
        sentence5NotesEn = "Genitive 'Karnaatakada' (of Karnataka) + accusative 'itihaasavannu' (history) + infinitive 'kaanalu' (to see) + verb 'baruttaare' (they come).";
        sentence5NotesHi = "'itihaasavannu' में द्वितीया विभक्ति है (इतिहास को)। 'kaanalu' कृदंत क्रिया है (देखने के लिए)।";

        vocabHighlight = [
          { word: "ಸ್ಮಾರಕ", transliteration: "smaaraka", meaning: isEng ? "Monument" : "स्मारक" },
          { word: "ಮರುಸೃಷ್ಟಿ", transliteration: "marusrusti", meaning: isEng ? "Recreation" : "पुनर्सृष्टि" },
          { word: "ವಿಶ್ವವಿದ್ಯಾಲಯ", transliteration: "vishwavidyaalaya", meaning: isEng ? "University" : "विश्वविद्यालय" }
        ];
        break;

      case 9: // Bengaluru Karaga
        sentence1Kn = "ಬೆಂಗಳೂರು ಕರಗವು ಈ ನಗರದ ಅತ್ಯಂತ ಪುರಾತನ ಹಾಗೂ ಐತಿಹಾಸಿಕ ಧಾರ್ಮಿಕ ಉತ್ಸವವಾಗಿದೆ.";
        sentence1Tr = "Bengalooru Karagavu ee nagarada atyanta puraatana haagu aitihasika dhaarmika utsavavaagide.";
        sentence1En = "Bengaluru Karaga is one of the oldest and most historically significant religious festivals celebrated in Bengaluru city.";
        sentence1Hi = "बेंगलुरु करगा इस शहर का सबसे पुराना और ऐतिहासिक धार्मिक उत्सव है।";
        sentence1NotesEn = "Subject 'Karagavu' (Karaga indeed) + genitive 'nagarada' (of city) + adjective 'puraatana' (ancient) + 'utsavavaagide' (is festival).";
        sentence1NotesHi = "'Karagavu' कर्ता कारक रूप है। 'nagarada' में संबंध कारक है (शहर का)।";

        sentence2Kn = "ಇದು ಮುಖ್ಯವಾಗಿ ಬೆಂಗಳೂರಿನ ತಿಗಳ ಸಮುದಾಯದವರಿಂದ ಭಕ್ತಿಯಿಂದ ಆಚರಿಸಲ್ಪಡುತ್ತದೆ.";
        sentence2Tr = "Idu mukhyavaagi Bengaloorina Tigala samudaayadavarinda bhaktiyinda aacharisalpaduttade.";
        sentence2En = "This holy ritual is primarily organized and celebrated with extreme devotion by the Tigala community of Bengaluru.";
        sentence2Hi = "यह मुख्य रूप से बेंगलुरु के 'तिगला' समुदाय के लोगों द्वारा पूरी श्रद्धा के साथ मनाया जाता है।";
        sentence2NotesEn = "Genitive 'Bengaloorina' (of Bengaluru) + instrumental plural 'samudaayadavarinda' (by community people) + passive verb 'aacharisalpaduttade' (is celebrated).";
        sentence2NotesHi = "'samudaayadavarinda' (समुदाय के लोगों द्वारा) में करण कारक है।";

        sentence3Kn = "ಕರಗ ಹೊರುವ ಪೂಜಾರಿಯು ಸ್ತ್ರೀ ವೇಷ ಧರಿಸಿ ತಲೆಯ ಮೇಲೆ ಹೂವಿನ ಕರಗವನ್ನು ಹೊರುತ್ತಾನೆ.";
        sentence3Tr = "Karaga horuva poojaariyu stree veesha dharisi taleya meele hoovina karagavannu horuttaane.";
        sentence3En = "The designated priest carrying the Karaga dresses in feminine attire and balances a tall, floral dome-like structure on his head.";
        sentence3Hi = "करगा ले जाने वाले पुजारी महिला वेश धारण करते हैं और अपने सिर पर फूलों से सुसज्जित पवित्र कलश (करगा) को संभालते हैं।";
        sentence3NotesEn = "Participle 'horuva' (carrying) + subject 'poojaariyu' (priest indeed) + verbal participle 'dharisi' (having worn) + genitive 'taleya' (of head) + postposition 'meele' (over) + accusative 'karagavannu' (karaga).";
        sentence3NotesHi = "'hoovina' का अर्थ 'फूलों का' है। 'karagavannu' में द्वितीय विभक्ति है (करगा को)।";

        sentence4Kn = "ರಾತ್ರಿಯಿಡೀ ಸಾಗುವ ಭವ್ಯ ಮೆರವಣಿಗೆಯು ಧರ್ಮರಾಯಸ್ವಾಮಿ ದೇವಸ್ಥಾನದಿಂದ ಆರಂಭವಾಗುತ್ತದೆ.";
        sentence4Tr = "Raatriyidee saaguva bhavya meravanigeyu Dharmaraayaswaami deevasthaanadinda aarambhavaaguttade.";
        sentence4En = "The grand, night-long procession starts with rituals from the historic Dharmarayaswamy Temple in the old city.";
        sentence4Hi = "रात भर चलने वाला भव्य जुलूस 'धर्मरायस्वामी मंदिर' से शुरू होता है।";
        sentence4NotesEn = "Adverb 'raatriyidee' (all night long) + active participle 'saaguva' (that proceeds) + ablative 'deevasthaanadinda' (from temple) + verb 'aarambhavaaguttade' (starts).";
        sentence4NotesHi = "'deevasthaanadinda' में अपादान कारक है (मंदिर से)। 'raatriyidee' का अर्थ 'रात भर' है।";

        sentence5Kn = "ಈ ಕರಗ ಉತ್ಸವವು ನಗರದಲ್ಲಿ ಕೋಮು ಸೌಹಾರ್ದತೆಯ ಸುಂದರ ಪ್ರತೀಕವಾಗಿದೆ.";
        sentence5Tr = "Ee Karaga utsavavu nagaradalli koomu sauhaardateya sundara prateekavaagide.";
        sentence5En = "The historic Karaga festival serves as a beautiful and powerful symbol of communal harmony and peace in Bengaluru.";
        sentence5Hi = "यह करगा उत्सव शहर में सांप्रदायिक सौहार्द का एक बहुत ही सुंदर प्रतीक है।";
        sentence5NotesEn = "Locative 'nagaradalli' (in city) + genitive 'sauhaardateya' (of harmony) + 'prateekavaagide' (is symbol).";
        sentence5NotesHi = "'koomu sauhaardateya' का अर्थ है 'सांप्रदायिक सौहार्द का'। 'prateekavaagide' का अर्थ 'प्रतीक है' है।";

        vocabHighlight = [
          { word: "ಪುರಾತನ", transliteration: "puraatana", meaning: isEng ? "Ancient" : "प्राचीन" },
          { word: "ವೇಷ", transliteration: "veesha", meaning: isEng ? "Attire/Disguise" : "वेश/पोशाक" },
          { word: "ಸೌಹಾರ್ದತೆ", transliteration: "sauhaardate", meaning: isEng ? "Harmony" : "सौहार्द" }
        ];
        break;

      case 10: // Makar Sankranti
      default:
        sentence1Kn = "ಮಕರ ಸಂಕ್ರಾಂತಿಯು ರೈತರು ಬೆಳೆದ ಹೊಸ ಬೆಳೆಗಳನ್ನು ಸಂಭ್ರಮಿಸುವ ಸುಗ್ಗಿಯ ಹಬ್ಬವಾಗಿದೆ.";
        sentence1Tr = "Makara Sankraantiyu raitaru beleda hosa belegalannu sambhramisuva suggiya habbavaagide.";
        sentence1En = "Makar Sankranti is a traditional harvest festival celebrated to express gratitude for the new crops grown by hardworking farmers.";
        sentence1Hi = "मकर संक्रांति किसानों द्वारा उगाई गई नई फसलों का जश्न मनाने वाला एक फसल कटाई (सुग्गी) का त्योहार है।";
        sentence1NotesEn = "Relative participle 'beleda' (grown) + accusative plural 'belegalannu' (crops) + active participle 'sambhramisuva' (celebrating) + genitive 'suggiya' (of harvest) + 'habbavaagide' (is festival).";
        sentence1NotesHi = "'beleda' का अर्थ 'उगाई गई' है। 'belegalannu' का अर्थ है 'फसलों को'। 'suggia' का अर्थ 'फसल कटाई' है।";

        sentence2Kn = "ಈ ದಿನ ಜನರು ಎಲ್ಲರಿಗೂ ಎಳ್ಳು-ಬಲ್ಲವನ್ನು ಹಂಚಿ ಒಳ್ಳೆಯ ಮಾತುಗಳನ್ನಾಡಲು ಬಯಸುತ್ತಾರೆ.";
        sentence2Tr = "Ee dina janaru ellarigoo ellu-bellavannu hanchi olleya maatugalannaadalu bayasuttaare.";
        sentence2En = "On this day, people distribute the traditional mix of sesame seeds and jaggery (Ellu-Bella) and exchange sweet words.";
        sentence2Hi = "इस दिन लोग सभी को तिल-गुड़ (एल्लू-बेल्ला) बांटते हैं और मीठे व अच्छे वचन बोलने का संकल्प लेते हैं।";
        sentence2NotesEn = "Dative 'ellarigoo' (to everyone indeed) + accusative 'ellu-bellavannu' (sesame-jaggery) + infinitive 'maatugalannaadalu' (to speak words) + verb 'bayasuttaare' (they wish).";
        sentence2NotesHi = "'ellu-bellavannu' का अर्थ 'तिल-गुड़ को' है। 'olley maatu' का अर्थ 'अच्छी बातें' है।";

        sentence3Kn = "ಹಸುಗಳನ್ನು ತೊಳೆದು, ಸಿಂಗರಿಸಿ, ಕೆಂಡ ಹಾಯಿಸುವ ಸಾಹಸ ಕೃತ್ಯವನ್ನು ಮಾಡಲಾಗುತ್ತದೆ.";
        sentence3Tr = "Hasugalannu toledu, singarisi, kenda haayisuva saahasa krutyavannu maadalaaguttade.";
        sentence3En = "In rural Karnataka, cows are bathed, beautifully decorated, and made to leap over fire pits in a thrilling ritual (Kenda Haayisuvudu).";
        sentence3Hi = "कर्नाटक के गांवों में गाय-बैलों को नहलाया और सजाया जाता है, और फिर उन्हें धधकती आग (कैंडा) के ऊपर से कुदाने का साहसिक कार्य किया जाता है।";
        sentence3NotesEn = "Accusative plural 'hasugalannu' (cows) + verbal participles 'toledu, singarisi' (having washed, having decorated) + active participle 'haayisuva' (crossing) + subject 'krutyavannu' (act) + passive.";
        sentence3NotesHi = "'hasugalannu' (गायों को) द्वितीय बहुवचन है। 'kenda haayisuvudu' एक पारंपरिक खेल/अनुष्ठान है।";

        sentence4Kn = "ಸೂರ್ಯನು ಧನು ರಾಶಿಯಿಂದ ಮಕರ ರಾಶಿಗೆ ಪ್ರವೇಶಿಸುವ ಪುಣ್ಯಕಾಲ ಇದಾಗಿದೆ.";
        sentence4Tr = "Sooryanu Dhanu raashiyinda Makara raashige praveeshisuva punyakaala idaagide.";
        sentence4En = "This day marks the highly auspicious transition of the Sun from Sagittarius (Dhanu) to Capricorn (Makara).";
        sentence4Hi = "यह वह पुण्यकाल है जब सूर्य धनु राशि से मकर राशि में प्रवेश करते हैं।";
        sentence4NotesEn = "Ablative 'raashiyinda' (from zodiac/sign) + dative 'raashige' (to zodiac/sign) + relative participle 'praveeshisuva' (entering) + 'punyakaala' (auspicious time) + 'idaagide' (is this).";
        sentence4NotesHi = "'raashiyinda' में अपादान कारक है (राशि से)। 'raashige' में संप्रदान कारक है (राशि में)।";

        sentence5Kn = "ಇದು ಸುಗ್ಗಿ ಕಾಲದ ಸಂತೋಷ ಮತ್ತು ನೆಮ್ಮದಿಯ ಸಂಕೇತವಾಗಿದೆ.";
        sentence5Tr = "Idu suggi kaalada santoosha mattu nemmadiya sankeetavaagide.";
        sentence5En = "This beautiful festival serves as a grand symbol of prosperity, happiness, and peace during the harvest season.";
        sentence5Hi = "यह त्योहार फसल कटाई के समय मिलने वाली खुशी और शांति का एक सुंदर प्रतीक है।";
        sentence5NotesEn = "Genitive 'kaalada' (of time/season) + genitive 'nemmadiya' (of peace) + 'sankeetavaagide' (is symbol).";
        sentence5NotesHi = "'santoosha' का अर्थ 'खुशी' है और 'nemmadiya' का अर्थ 'शांति/संतोष का' है।";

        vocabHighlight = [
          { word: "ಸುಗ್ಗಿ", transliteration: "suggi", meaning: isEng ? "Harvest" : "फसल कटाई" },
          { word: "ಕೆಂಡ", transliteration: "kenda", meaning: isEng ? "Embers/Fire" : "धधकते कोयले/आग" },
          { word: "ನೆಮ್ಮದಿ", transliteration: "nemmadi", meaning: isEng ? "Peace of Mind" : "मन की शांति" }
        ];
        break;
    }
  } else if (topic.cat === "Nature & Wildlife") {
    let subType = "general";
    if (topic.id === 33) subType = "river";
    else if (topic.id === 34 || topic.id === 40) subType = "birds";
    else if (topic.id === 35) subType = "monkey";
    else if (topic.id === 36 || topic.id === 39) subType = "hills";

    if (subType === "river") {
      sentence1Kn = "ಕಾವೇರಿ ನದಿ ಪ್ರವಾಹವು ಕರ್ನಾಟಕದ ಪವಿತ್ರ ಜೀವನಾಡಿ ಮತ್ತು ನೈಸರ್ಗಿಕ ಸಮೃದ್ಧಿಯ ಭವ್ಯ ಮೂಲವಾಗಿದೆ.";
      sentence1Tr = "Kaaveeri nadi pravaahavu Karnaatakada pavitra jeevanaadi mattu naisargika samruddhiya bhavya moolavaagide.";
      sentence1En = "The flowing Kaveri River is the sacred lifeline of Karnataka and a majestic source of natural abundance.";
      sentence1Hi = "बहती हुई कावेरी नदी कर्नाटक की पवित्र जीवनरेखा और प्राकृतिक समृद्धि का एक भव्य स्रोत है।";
      sentence1NotesEn = "Genitive 'Karnaatakada' (of Karnataka) + 'jeevanaadi' (lifeline) + 'moolavaagide' (is source).";
      sentence1NotesHi = "'Karnaatakada' का अर्थ 'कर्नाटक की' है। 'jeevanaadi' जीवनरेखा को कहते हैं।";

      sentence2Kn = "ಇದು ತಲಕಾವೇರಿಯಲ್ಲಿ ಉಗಮಿಸಿ, ಕೃಷಿ ಮತ್ತು ಕುಡಿಯುವ ನೀರನ್ನು ಒದಗಿಸುವ ಮೂಲಕ ಕೋಟ್ಯಂತರ ಜೀವಗಳಿಗೆ ಆಧಾರವಾಗಿದೆ.";
      sentence2Tr = "Idu Talakaaveeriyalli ugamisi, krushi mattu kudiyuva neerannu odagisuva moolaka kootyantara jeevagalige aadhaaravaagide.";
      sentence2En = "Originating in Talakaveri, it supports millions of lives by providing water for agriculture and drinking.";
      sentence2Hi = "यह तलकावेरी में उत्पन्न होकर, कृषि और पीने का पानी प्रदान करके करोड़ों जीवन का आधार बनती है।";
      sentence2NotesEn = "Locative 'Talakaaveeriyalli' + past participle 'ugamisi' (having originated) + dative plural 'jevagalige' (to lives).";
      sentence2NotesHi = "'Talakaaveeriyalli' में अधिकरण है। 'aadhaaravaagide' का अर्थ 'आधार है' है।";
    } else if (subType === "birds") {
      sentence1Kn = `${topic.titleKn} ನಮ್ಮ ಅತ್ಯಂತ ಸುಂದರ ಮತ್ತು ಅಪರೂಪದ ಪಕ್ಷಿ ಸಂಕುಲಗಳ ಸುರಕ್ಷಿತ ಆಶ್ರಯ ತಾಣವಾಗಿದೆ.`;
      sentence1Tr = `${topic.tr} namma atyanta sundara mattu aparoopada pakshi sankulagala surakshita aashraya taanavaagide.`;
      sentence1En = `${topic.titleEn} is a safe and scenic conservation sanctuary for our highly beautiful and rare bird species.`;
      sentence1Hi = `${topic.titleHi} हमारे अत्यंत सुंदर और दुर्लभ पक्षी प्रजातियों के लिए एक सुरक्षित और सुंदर आश्रय स्थल है।`;
      sentence1NotesEn = "Genitive plural 'sankulagala' (of species/groups) + 'aashraya taanavaagide' (is shelter spot).";
      sentence1NotesHi = "'sankulagala' संबंध बहुवचन है (समूहों का)। 'taanavaagide' का अर्थ 'स्थल है' है।";

      sentence2Kn = "ಇಲ್ಲಿನ ಮರಗಳಲ್ಲಿ ದೇಶ-ವಿದೇಶಗಳ ವಿವಿಧ ವರ್ಣರಂಜಿತ ವಲಸೆ ಹಕ್ಕಿಗಳು ಬಂದು ಗೂಡು ಕಟ್ಟಿ ಮರಿ ಮಾಡುತ್ತವೆ.";
      sentence2Tr = "Illina maragalalli deesha-videeshagala vividha varnaranjita valase hakkigalu bandu goodu katti mari maaduttave.";
      sentence2En = "On the trees here, diverse colorful migratory birds from various lands build nests and raise their chicks.";
      sentence2Hi = "यहाँ के पेड़ों पर विभिन्न देशों के रंग-बिरंगे प्रवासी पक्षी आकर घोंसला बनाते हैं और बच्चों को जन्म देते हैं।";
      sentence2NotesEn = "Locative plural 'maragalalli' (in trees) + adjective 'valase' (migratory) + verb 'mari maaduttave' (they make chicks).";
      sentence2NotesHi = "'maragalalli' का अर्थ 'पेड़ों पर' है। 'valase' प्रवासी को दर्शाता है।";
    } else if (subType === "monkey") {
      sentence1Kn = "ಶರಾವತಿ ಸಿಂಹ ಮುಖದ ಮಂಗಗಳು ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ ದಟ್ಟ ಕಾಡುಗಳಲ್ಲಿ ಮಾತ್ರ ಕಂಡುಬರುವ ವಿಶಿಷ್ಟ ಜೀವಿಗಳಾಗಿವೆ.";
      sentence1Tr = "Sharaavati simha mukhada mangagalu pashchima ghattagala datta kaadugalalli maatra kandubaruva vishishta jeevigalaagive.";
      sentence1En = "The lion-tailed macaques of Sharavati are unique creatures found exclusively in the dense rainforests of the Western Ghats.";
      sentence1Hi = "शरावती के सिंह-पूंछ वाले बंदर पश्चिमी घाट के घने जंगलों में पाए जाने वाले अनूठे जीव हैं।";
      sentence1NotesEn = "Genitive 'ghattagala' (of ghats) + 'maatra' (only) + 'jeevigalaagive' (are creatures).";
      sentence1NotesHi = "'kaadugalalli' का अर्थ है 'जंगलों में'। 'jeevigalaagive' का अर्थ 'जीव हैं' है।";

      sentence2Kn = "ಈ ವಿಶಿಷ್ಟ ಕೋತಿಗಳು ಮರಗಳ ಮೇಲೆಯೇ ವಾಸಿಸುತ್ತಾ ಹಣ್ಣು ಮತ್ತು ಚಿಗುರೆಲೆಗಳನ್ನು ತಿಂದು ಬದುಕುತ್ತವೆ.";
      sentence2Tr = "Ee vishishta kotigalu maragala meeleyee vaasisuttaa hannu mattu chigurelegalannu tindu badukuttave.";
      sentence2En = "These unique monkeys live entirely on high treetops, surviving on forest fruits and tender leaves.";
      sentence2Hi = "ये अनोखे बंदर पेड़ों पर ही रहते हैं और जंगली फल तथा कोमल पत्तियां खाकर जीवित रहते हैं।";
      sentence2NotesEn = "Locative 'maragala meele' + emphatic particle '-ee' (on treetops itself) + adverbial participle 'vaasisuttaa' (while living).";
      sentence2NotesHi = "'maragala meele' का अर्थ है 'पेड़ों पर'। 'tindu' का अर्थ 'खाकर' है।";
    } else if (subType === "hills") {
      sentence1Kn = `${topic.titleKn} ಪಶ್ಚಿಮ ಘಟ್ಟಗಳ ದಟ್ಟ ಹಸಿರು, ಮಂಜು ಮತ್ತು ನೈಸರ್ಗಿಕ ಅದ್ಭುತಗಳ ಅದ್ಭುತ ತಾಣವಾಗಿದೆ.`;
      sentence1Tr = `${topic.tr} pashchima ghattagala datta hasiru, manju mattu naisargika adbhutagala adbhuta taanavaagide.`;
      sentence1En = `${topic.titleEn} is an exceptional spot comprising dense greenery, floating mist, and the scenic wonders of the Western Ghats.`;
      sentence1Hi = `${topic.titleHi} पश्चिमी घाट की हरी-भरी वादियों, कोहरे और प्राकृतिक अजूबों का एक अद्भुत स्थल है।`;
      sentence1NotesEn = "Genitive 'ghattagala' + genitive 'adbhutagala' + 'taanavaagide' (is destination).";
      sentence1NotesHi = "'manju' का अर्थ कोहरा है। 'adbhutagala' का अर्थ 'अजूबों का' है।";

      sentence2Kn = "ಇಲ್ಲಿನ ಎತ್ತರದ ಶಿಖರಗಳು ಮತ್ತು ಸುಂದರ ಜಲಪಾತಗಳು ಪ್ರಕೃತಿ ಪ್ರೇಮಿಗಳ ಮನಸ್ಸಿಗೆ ಅಪಾರ ಶಾಂತಿ ನೀಡುತ್ತವೆ.";
      sentence2Tr = "Illina ettarada shikharagalu mattu sundara jalapaatagalu prakriti preemigala manassige apaara shaanti needuttave.";
      sentence2En = "The lofty peaks and cascading waterfalls here offer immense peace and rejuvenation to nature lovers.";
      sentence2Hi = "यहाँ की ऊँची चोटियाँ और सुंदर झरने प्रकृति प्रेमियों के मन को अपार शांति प्रदान करते हैं।";
      sentence2NotesEn = "Subject plural 'shikharagalu' (peaks) + dative 'manassige' (to mind) + verb 'needuttave' (they give).";
      sentence2NotesHi = "'shikharagalu' का अर्थ 'चोटियाँ' है। 'manassige' का अर्थ है 'मन को' (संप्रदान कारक)।";
    } else {
      sentence1Kn = `${topic.titleKn} ಕರ್ನಾಟಕದ ವನ್ಯಜೀವಿಗಳು ಮತ್ತು ದಟ್ಟವಾದ ಅರಣ್ಯ ಸಂಪತ್ತಿನ ಅತ್ಯಂತ ಹೆಮ್ಮೆಯ ತಾಣವಾಗಿದೆ.`;
      sentence1Tr = `${topic.tr} karnaatakada vanyajeevigalu mattu dattavaada aranya sampattina atyanta hemmeya taanavaagide.`;
      sentence1En = `${topic.titleEn} is a highly prestigious sanctuary protecting the rich wildlife and dense forest wealth of Karnataka.`;
      sentence1Hi = `${topic.titleHi} कर्नाटक के समृद्ध वन्यजीवों और घने वन संपदा का एक अत्यंत गौरवशाली स्थल है।`;
      sentence1NotesEn = "Genitive 'sampattina' (of wealth) + genitive 'hemmeya' (of pride) + 'taanavaagide' (is place).";
      sentence1NotesHi = "'vanyajeevigalu' का अर्थ वन्यजीव है। 'sampattina' का अर्थ 'संपत्ति का' है।";

      sentence2Kn = "ಇಲ್ಲಿ ಹುಲಿಗಳು, ಆನೆಗಳು ಮತ್ತು ನೂರಾರು ವನ್ಯ ಪ್ರಾಣಿಗಳು ಕಾಡಿನ ಮುಕ್ತ ವಾತಾವರಣದಲ್ಲಿ ಸ್ವಚ್ಛಂದವಾಗಿ ವಾಸಿಸುತ್ತವೆ.";
      sentence2Tr = "Illi huligalu, aanegalu mattu nooraaru vanya praanigalu kaadina mukta vaataavaranadalli swachchandavaagi vaasisuttave.";
      sentence2En = "Tigers, wild elephants, and hundreds of forest animals live freely and happily in their open natural environment here.";
      sentence2Hi = "यहाँ बाघ, हाथी और सैकड़ों जंगली जानवर जंगल के खुले वातावरण में स्वतंत्र रूप से निवास करते हैं।";
      sentence2NotesEn = "Subject plurals 'huligalu, aanegalu' + locative 'vaataavaranadalli' (in environment) + verb 'vaasisuttave'.";
      sentence2NotesHi = "'huligalu' बाघों को कहते हैं। 'vaataavaranadalli' में अधिकरण कारक है (वातावरण में)।";
    }

    sentence3Kn = "ಇಲ್ಲಿನ ಹಸಿರು ಪರಿಸರ ಮತ್ತು ಶುದ್ಧ ಗಾಳಿಯು ಪ್ರವಾಸಿಗರಿಗೆ ಹೊಸ ಚೈತನ್ಯವನ್ನು ತುಂಬುತ್ತವೆ.";
    sentence3Tr = "Illina hasiru parisara mattu shuddha gaaliyu pravaasigarige hosa chaitanyavannu tumbuttave.";
    sentence3En = "The surrounding green environment and pure air infuse fresh energy and vitality into visitors.";
    sentence3Hi = "यहाँ का हरा-भरा वातावरण और शुद्ध हवा पर्यटकों में एक नई ऊर्जा का संचार करती है।";
    sentence3NotesEn = "Subject 'parisara mattu gaaliyu' + dative plural 'pravaasigarige' (to tourists) + verb 'tumbuttave' (they fill).";
    sentence3NotesHi = "'parisara' का अर्थ वातावरण है। 'gaaliyu' का अर्थ हवा है। 'tumbuttave' का अर्थ 'भरती हैं' है।";

    sentence4Kn = "ಪ್ರಕೃತಿಯನ್ನು ರಕ್ಷಿಸುವುದು ನಮ್ಮೆಲ್ಲರ ಆದ್ಯ ಕರ್ತವ್ಯ ಮತ್ತು ಹೊಣೆಗಾರಿಕೆಯಾಗಿದೆ.";
    sentence4Tr = "Prakritiyannu rakshisuvudu nammellara aadya kartavya mattu honegaarikayaagide.";
    sentence4En = "Preserving nature and forests is the supreme duty and core responsibility of all of us.";
    sentence4Hi = "प्रकृति की रक्षा करना हम सभी का परम कर्तव्य और मुख्य जिम्मेदारी है।";
    sentence4NotesEn = "Accusative 'prakritiyannu' + gerund 'rakshisuvudu' (protecting) + genitive pronoun 'nammellara' (of all of us).";
    sentence4NotesHi = "'rakshisuvudu' क्रियार्थक संज्ञा है (रक्षा करना)। 'honegaarikayaagide' का अर्थ 'जिम्मेदारी है' है।";

    sentence5Kn = "ನಾವು ಪರಿಸರ ಸಮತೋಲನವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಲು ಸದಾ ಜಾಗೃತರಾಗಿರಬೇಕು.";
    sentence5Tr = "Naavu parisara samatolanavannu kaapaadikollalu sadaa jaagrutaraagirabeeku.";
    sentence5En = "We must constantly remain highly conscious and active to maintain ecological balance.";
    sentence5Hi = "हमें पर्यावरण संतुलन बनाए रखने के लिए हमेशा जागरूक रहना चाहिए।";
    sentence5NotesEn = "Infinitive 'kaapaadikollalu' (to protect) + adverb 'sadaa' (always) + obligatory verb ending '-beeku'.";
    sentence5NotesHi = "'samatolanavannu' का अर्थ 'संतुलन को' है। 'jaagrutaraagirabeeku' का अर्थ 'जागरूक रहना चाहिए' है।";

    vocabHighlight = [
      { word: "ಜೀವವೈವಿಧ್ಯತೆ", transliteration: "jeevavaividhyate", meaning: isEng ? "Biodiversity" : "जैव विविधता" },
      { word: "ಜೀವನಾಡಿ", transliteration: "jeevanaadi", meaning: isEng ? "Lifeline" : "जीवनरेखा" },
      { word: "ಸಮತೋಲನ", transliteration: "samatoolana", meaning: isEng ? "Balance" : "संतुलन" }
    ];

  } else if (topic.cat === "Great Personalities") {
    let subType = "general";
    if (topic.id === 41) subType = "kuvempu";
    else if (topic.id === 42) subType = "visvesvaraya";
    else if (topic.id === 43) subType = "purandaradasa";
    else if (topic.id === 44 || topic.id === 49) subType = "queen";
    else if (topic.id === 45) subType = "rayanna";
    else if (topic.id === 46) subType = "rajkumar";
    else if (topic.id === 47) subType = "basavanna";
    else if (topic.id === 48) subType = "kengal";
    else if (topic.id === 50) subType = "cariappa";

    if (subType === "kuvempu") {
      sentence1Kn = "ರಾಷ್ಟ್ರಕವಿ ಕುವೆಂಪು ಅವರು ಕನ್ನಡದ ಅತ್ಯಂತ ಶ್ರೇಷ್ಠ ಕವಿ ಮತ್ತು ಪ್ರಖ್ಯಾತ ಸಾಹಿತಿಗಳಲ್ಲಿ ಒಬ್ಬರಾಗಿದ್ದಾರೆ.";
      sentence1Tr = "Raashtrakavi Kuvempu avaru kannadada atyanta shreeshta kavi mattu prakhyaata saahitigalalli obbaraagiddaare.";
      sentence1En = "Rashtrakavi Kuvempu is revered as one of the greatest poets and highly prominent writers of Kannada literature.";
      sentence1Hi = "राष्ट्रकवि कुवेम्पू कन्नड़ साहित्य के सबसे महान कवियों और प्रसिद्ध साहित्यकारों में से एक हैं।";
      sentence1NotesEn = "Respectful pronoun 'avaru' + genitive 'kannadada' + locative plural 'saahitigalalli' (among writers).";
      sentence1NotesHi = "'avaru' आदरसूचक सर्वनाम है। 'saahitigalalli' का अर्थ 'साहित्यकारों में' है।";

      sentence2Kn = "ಇವರು ಬರೆದ ಜಯ ಭಾರತ ಜನನಿಯ ತನುಜಾತೆ ಎಂಬ ಗೀತೆಯು ನಮ್ಮ ಹೆಮ್ಮೆಯ ರಾಜ್ಯಗೀತೆಯಾಗಿದೆ.";
      sentence2Tr = "Ivaru bareda Jaya Bhaarata Jananiya Tanujaate emba geeteyu namma hemmeya raajyageeteyaagide.";
      sentence2En = "The patriotic poem 'Jaya Bharata Jananiya Tanujate' penned by him is our proud official state anthem.";
      sentence2Hi = "उनके द्वारा रचित देशभक्ति गीत 'जय भारत जननिया तनुजाते' हमारा गौरवशाली राज्यगीत है।";
      sentence2NotesEn = "Adjective clause 'ivaru bareda' (written by him) + 'emba' (called/named) + 'raajyageeteyaagide' (is state anthem).";
      sentence2NotesHi = "'ivaru' का अर्थ 'इन्होंने/उनके' है। 'raajyageeteyaagide' का अर्थ 'राज्यगीत है' है।";
    } else if (subType === "visvesvaraya") {
      sentence1Kn = "ಸರ್ ಎಂ. ವಿಶ್ವೇಶ್ವರಯ್ಯನವರು ಭಾರತ ಕಂಡ ಅತ್ಯಂತ ಶ್ರೇಷ್ಠ ಇಂಜಿನಿಯರ್ ಮತ್ತು ಮುತ್ಸದ್ದಿಯಾಗಿದ್ದಾರೆ.";
      sentence1Tr = "Sir M. Visvesvarayanavaru Bhaarata kanda atyanta shreeshta engineer mattu mutsaddiyaagiddaare.";
      sentence1En = "Sir M. Visvesvaraya is highly celebrated as one of the greatest engineers and statesmen India has ever seen.";
      sentence1Hi = "सर एम. विश्वेश्वरैया भारत के सबसे महान इंजीनियर और दूरदर्शी नीतिनिर्माता (मुत्सद्दी) थे।";
      sentence1NotesEn = "Subject 'Visvesvarayanavaru' (respectful suffix '-navaru') + 'engineer mattu mutsaddiyaagiddaare' (is engineer and statesman).";
      sentence1NotesHi = "'-navaru' आदरसूचक प्रत्यय है। 'mutsaddiyaagiddaare' का अर्थ 'नीतिनिर्माता/राजनेता हैं' है।";

      sentence2Kn = "ಇವರು ಮೈಸೂರಿನ ಬಳಿ ಕೃಷ್ಣರಾಜಸಾಗರ ಅಣೆಕಟ್ಟನ್ನು ಕಟ್ಟಿ ಕಾವೇರಿ ನೀರನ್ನು ಕೃಷಿಗೆ ಒದಗಿಸಿದರು.";
      sentence2Tr = "Ivaru Maisoorina bali Krishnaraajasaagara anekattannu katti Kaaveeri neerannu krushige odagisidaru.";
      sentence2En = "He built the historic Krishnarajasagara Dam near Mysore, successfully channelizing Kaveri water for agriculture.";
      sentence2Hi = "उन्होंने मैसूर के पास कृष्णराजसागर बांध का निर्माण किया और कृषि के लिए कावेरी का पानी उपलब्ध कराया।";
      sentence2NotesEn = "Accusative 'anekattannu' (dam) + verbal participle 'katti' (having built) + dative 'krushige' (to agriculture).";
      sentence2NotesHi = "'anekattannu' का अर्थ 'बांध को' है। 'katti' का अर्थ 'बनाकर/निर्माण करके' है।";
    } else if (subType === "purandaradasa") {
      sentence1Kn = "ಪುರಂದರದಾಸರನ್ನು ಕರ್ನಾಟಕ ಸಂಗೀತ ಪದ್ಧತಿಯ ಪಿತಾಮಹ ಎಂದು ಜಗತ್ತಿನಾದ್ಯಂತ ಗೌರವಿಸಲಾಗುತ್ತದೆ.";
      sentence1Tr = "Purandaradaasarannu Karnaataka sangeeta paddhatiya pitaamaha endu jagattinaadyanta gauravisalaaguttade.";
      sentence1En = "Purandara Dasa is globally revered and respected as the Father of Carnatic Classical Music.";
      sentence1Hi = "संत पुरंदर दास को दुनिया भर में कर्नाटक शास्त्रीय संगीत के पितामह के रूप में सम्मानित किया जाता है।";
      sentence1NotesEn = "Accusative name 'Purandaradaasarannu' + passive verb 'gauravisalaaguttade' (is respected/honored).";
      sentence1NotesHi = "'Purandaradaasarannu' द्वितीय विभक्ति है (पुरंदर दास को)। 'pitaamaha' का अर्थ दादा/पितामह है।";

      sentence2Kn = "ಇವರು ಸಾವಿರಾರು ಭಕ್ತಿ ಕೀರ್ತನೆಗಳನ್ನು ಕನ್ನಡದಲ್ಲಿ ಬರೆಯುವ ಮೂಲಕ ಸಮಾಜದಲ್ಲಿ ಧರ್ಮ ಜಾಗೃತಿ ಮೂಡಿಸಿದರು.";
      sentence2Tr = "Ivaru saaviraaru bhakti keertanegalannu kannadadalli bareyuva moolaka samaajadalli dharma jaagruthi moodisidaru.";
      sentence2En = "He composed thousands of devotional hymns in simple Kannada, awakening moral values in society.";
      sentence2Hi = "उन्होंने कन्नड़ में हजारों bhakti गीतों (कीर्तनों) की रचना करके समाज में नैतिक जागरूकता पैदा की।";
      sentence2NotesEn = "Accusative plural 'keertanegalannu' + locative 'kannadadalli' + gerund 'moodisidaru' (they raised/created).";
      sentence2NotesHi = "'keertanegalannu' का अर्थ 'कीर्तनों को' है। 'samaajadalli' का अर्थ 'समाज में' है।";
    } else if (subType === "queen") {
      sentence1Kn = `${topic.titleKn} ಅವರು ದೇಶದ ಸ್ವಾತಂತ್ರ್ಯಕ್ಕಾಗಿ ಬ್ರಿಟಿಷರ ವಿರುದ್ಧ ಧೈರ್ಯದಿಂದ ಹೋರಾಡಿದ ವೀರ ಮಹಿಳೆಯಾಗಿದ್ದಾರೆ.`;
      sentence1Tr = `${topic.tr} avaru deeshada swaatantryakkaagi Britishara viruddha dhairya-dinda hooraadida veera mahileyaagiddaare.`;
      sentence1En = `${topic.titleEn} is a legendary heroic queen who fought with ultimate courage against the British for our nation's freedom.`;
      sentence1Hi = `${topic.titleHi} देश की आजादी के लिए अंग्रेजों के खिलाफ वीरता से लड़ने वाली एक महान वीरांगना हैं।`;
      sentence1NotesEn = "Dative 'swaatantryakkaagi' (for freedom) + genitive plural 'Britishara' + past-participle 'hooraadida' (who fought).";
      sentence1NotesHi = "'swaatantryakkaagi' में संप्रदान कारक है (आजादी के लिए)। 'viruddha' का अर्थ 'खिलाफ' है।";

      sentence2Kn = "ತಮ್ಮ ಮಾತೃಭೂಮಿಯ ಗೌರವವನ್ನು ರಕ್ಷಿಸಲು ಪ್ರಾಣವನ್ನೇ ತ್ಯಾಗ ಮಾಡಿದ ಇವರ ಇತಿಹಾಸ ನಮ್ಮ ಹೆಮ್ಮೆಯಾಗಿದೆ.";
      sentence2Tr = "Tamma maatrubhoomiya gauravavannu rakshisalu praanavannee tyaaga maadida ivara itihaasavu namma hemmeyaagide.";
      sentence2En = "Sacrificing her very life to protect the pride of her motherland, her history is our source of eternal pride.";
      sentence2Hi = "अपनी मातृभूमि के सम्मान की रक्षा के लिए अपने प्राणों का बलिदान देने वाली उनका इतिहास हमारा गौरव है।";
      sentence2NotesEn = "Infinitive 'rakshisalu' (to protect) + emphatic 'praanavannee' (life itself) + 'hemmeyaagide' (is pride).";
      sentence2NotesHi = "'gauravavannu' का अर्थ 'सम्मान को' है। 'tyaaga maadida' का अर्थ है 'त्याग करने वाली'।";
    } else if (subType === "rayanna") {
      sentence1Kn = "ಸಂಗೊಳ್ಳಿ ರಾಯಣ್ಣ ಕಿತ್ತೂರು ಸಾಮ್ರಾಜ್ಯದ ಸ್ವಾತಂತ್ರ್ಯಕ್ಕಾಗಿ ಹೋರಾಡಿದ ಅಪ್ರತಿಮ ವೀರ ಸೇನಾನಿಯಾಗಿದ್ದರು.";
      sentence1Tr = "Sangolli Raayanna Kittooru saamraajyada swaatantryakkaagi hooraadida apratima veera seenaaniyaagiddaru.";
      sentence1En = "Sangolli Rayanna was an incomparable brave military commander who fought for the freedom of the Kittur kingdom.";
      sentence1Hi = "संगोल्ली रायन्ना कित्तूर साम्राज्य की स्वतंत्रता के लिए लड़ने वाले एक अद्वितीय वीर सेनानी थे।";
      sentence1NotesEn = "Genitive 'saamraajyada' + 'veera seenaaniyaagiddaru' (was a brave military commander/general).";
      sentence1NotesHi = "'saamraajyada' का अर्थ 'साम્રાज्य की' है। 'seenaaniyaagiddaru' का अर्थ है 'सेनानी थे'।";

      sentence2Kn = "ಇವರು ಬ್ರಿಟಿಷ್ ಈಸ್ಟ್ ಇಂಡಿಯಾ ಕಂಪನಿಯ ವಿರುದ್ಧ ಗೆರಿಲ್ಲಾ ಸಮರ ತಂತ್ರಗಳನ್ನು ನಡೆಸಿ ಧಾವಂತ ಹುಟ್ಟಿಸಿದರು.";
      sentence2Tr = "Ivaru British East India Companyya viruddha guerrilla samara tantragalannu nadesi dhaavanta huttisidaru.";
      sentence2En = "He launched highly effective guerrilla warfare strategies against the British, striking intense fear into them.";
      sentence2Hi = "उन्होंने ब्रिटिश ईस्ट इंडिया कंपनी के खिलाफ गुरिल्ला युद्ध रणनीति अपनाकर अंग्रेजों में दहशत पैदा कर दी।";
      sentence2NotesEn = "Accusative plural 'tantragalannu' (techniques/strategies) + verbal participle 'nadesi' (having conducted).";
      sentence2NotesHi = "'viruddha' का अर्थ विरुद्ध/खिलाफ है। 'tantragalannu' युद्ध तकनीकों को दर्शाता है।";
    } else if (subType === "rajkumar") {
      sentence1Kn = "ಡಾ. ರಾಜ್ ಕುಮಾರ್ ಕನ್ನಡ ಚಿತ್ರರಂಗದ ಅಪ್ರತಿಮ ನಟ ಮತ್ತು ನಟ ಸಾರ್ವಭೌಮ ಎಂದು ಕರೆಯಲ್ಪಡುವ ಧ್ರುವತಾರೆಯಾಗಿದ್ದಾರೆ.";
      sentence1Tr = "Dr. Raaj Kumaar kannada chitrarangada apratima nata mattu Nata Saarvabhauma endu kareyalpaduva dhruvataareyaagiddaare.";
      sentence1En = "Dr. Rajkumar is a legendary star of Kannada cinema, widely acclaimed as the sovereign king of acting (Nata Sarvabhauma).";
      sentence1Hi = "डॉ. राजकुमार कन्नड़ सिनेमा के एक अद्वितीय अभिनेता हैं, जिन्हें 'नट सार्वभौम' (अभिनेताओं के सम्राट) के रूप में जाना जाता है।";
      sentence1NotesEn = "Genitive 'chitrarangada' (of cinema) + passive participle 'kareyalpaduva' (who is called/referred as).";
      sentence1NotesHi = "'chitrarangada' का अर्थ है 'सिनेमा क्षेत्र का'। 'dhruvataareyaagiddaare' का अर्थ 'ध्रुवतारा हैं' है।";

      sentence2Kn = "ಅವರ ಅದ್ಭುತ ನಟನೆ, ಸುಮಧುರ ಗಾಯನ ಮತ್ತು ನಿರಾಡಂಬರ ಸರಳತೆಯ ಜೀವನ ಕನ್ನಡಿಗರಿಗೆ ದೊಡ್ಡ ಆದರ್ಶವಾಗಿದೆ.";
      sentence2Tr = "Avara adbhuta natane, sumadhura gaayana mattu niraadambara saralateya jeevana Kannadigarige doddha aadarshavaagide.";
      sentence2En = "His exceptional acting, melodious singing, and exemplary simple life serve as a great ideal for Kannada people.";
      sentence2Hi = "उनका अद्भुत अभिनय, सुरीला गायन और सादगीपूर्ण जीवन कन्नड़ लोगों के लिए एक बहुत बड़ा आदर्श है।";
      sentence2NotesEn = "Genitive 'saralateya' (of simplicity) + dative plural 'Kannadigarige' (to Kannada people) + 'aadarshavaagide' (is ideal).";
      sentence2NotesHi = "'saralateya' का अर्थ 'सादगी का' है। 'Kannadigarige' का अर्थ 'कन्नड़ लोगों के लिए' है।";
    } else if (subType === "basavanna") {
      sentence1Kn = "ಜಗದ್ಗುರು ಬಸವೇಶ್ವರರು ಹನ್ನೆರಡನೇ ಶತಮಾನದ ಮಹಾನ್ ಸಾಮಾಜಿಕ ಕ್ರಾಂತಿಕಾರಿ ಮತ್ತು ಅಪ್ರತಿಮ ದಾರ್ಶನಿಕರಾಗಿದ್ದಾರೆ.";
      sentence1Tr = "Jagadguru Basaveshwararu hanneradane shatamaanada mahaan saamaajika kraantikaari mattu apratima daarshanikaraagiddaare.";
      sentence1En = "Jagadguru Basaveshwara is revered as a magnificent 12th-century social reformer and incomparable philosopher.";
      sentence1Hi = "जगतगुरु बसवेश्वर बारहवीं शताब्दी के एक महान सामाजिक क्रांतिकारी और अद्वितीय दार्शनिक थे।";
      sentence1NotesEn = "Genitive 'shatamaanada' (of century) + 'saamaajika kraantikaari' (social revolutionary).";
      sentence1NotesHi = "'shatamaanada' में संबंध कारक है (शताब्दी का)। 'daarshanika' का अर्थ 'दार्शनिक' है।";

      sentence2Kn = "ಇವರ ಕಾಯಕವೇ ಕೈಲಾಸ ಎಂಬ ತತ್ವ ಮತ್ತು ವಚನಗಳು ಇಂದಿಗೂ ಜಗತ್ತಿಗೆ ಮಾರ್ಗದರ್ಶಕವಾಗಿವೆ.";
      sentence2Tr = "Ivara Kaayakavee Kailasa emba tatva mattu vachanagalu indigoo jagattige maargadarshakavaagive.";
      sentence2En = "His supreme philosophy of 'Work is Worship' and his sacred Vachanas continue to guide the world today.";
      sentence2Hi = "उनका सिद्धांत 'कष्ट/कार्य ही पूजा है' (कायकवे कैलास) और उनके वचन आज भी दुनिया के लिए मार्गदर्शक हैं।";
      sentence2NotesEn = "Emphatic noun 'kaayakavee' (work itself) + dative 'jagattige' (to the world) + plural 'maargadarshakavaagive' (are guides).";
      sentence2NotesHi = "'kaayakavee' का अर्थ 'कार्य ही' है। 'vachanagalu' वचन साहित्य (बहुवचन) को दर्शाता है।";
    } else if (subType === "kengal") {
      sentence1Kn = "ಕೆಂಗಲ್ ಹನುಮಂತಯ್ಯನವರು ಕರ್ನಾಟಕದ ಎರಡನೇ ಮುಖ್ಯಮಂತ್ರಿ ಮತ್ತು ಅತ್ಯಂತ ಪ್ರಭಾವಶಾಲಿ ರಾಜಕೀಯ ಧುರಂಧರರಾಗಿದ್ದರು.";
      sentence1Tr = "Kengal Hanumantaiahnavaru Karnaatakada eradanee mukhyamantri mattu atyanta prabhaavashali raajakeeya dhurandhararaagiddaru.";
      sentence1En = "Kengal Hanumanthaiah was the second Chief Minister of Karnataka and a highly influential, visionary political leader.";
      sentence1Hi = "केँगल हनुमंतैया कर्नाटक के दूसरे मुख्यमंत्री और एक अत्यंत प्रभावशाली राजनीतिक नेता थे।";
      sentence1NotesEn = "Ordinal number 'eradanee' (second) + 'mukhyamantri' (Chief Minister) + past tense 'dhurandhararaagiddaru' (was stalwart).";
      sentence1NotesHi = "'mukhyamantri' का अर्थ मुख्यमंत्री है। 'dhurandhararaagiddaru' का अर्थ 'दिग्गज/धुरंधर थे' है।";

      sentence2Kn = "ಬೆಂಗಳೂರಿನಲ್ಲಿರುವ ಭವ್ಯವಾದ ವಿಧಾನ ಸೌಧ ಕಟ್ಟಡವನ್ನು ನಿರ್ಮಿಸಿದ ಹೆಗ್ಗಳಿಕೆ ಮತ್ತು ಕೀರ್ತಿ ಇವರಿಗೆ ಸಲ್ಲುತ್ತದೆ.";
      sentence2Tr = "Bengaloorinalliruva bhavyavaada Vidhana Soudha kattadavannu nirmisida heggalike mattu keerti ivarige salluttade.";
      sentence2En = "The entire credit and honor of constructing the magnificent Vidhana Soudha building in Bengaluru belongs to him.";
      sentence2Hi = "बेंगलुरु में स्थित भव्य विधान सौध भवन का निर्माण करने का गौरव और श्रेय उन्हीं को जाता है।";
      sentence2NotesEn = "Locative 'Bengaloorinalliruva' (which is in Bengaluru) + dative pronoun 'ivarige' (to him) + verb 'salluttade' (it reaches/belongs).";
      sentence2NotesHi = "'nirmisida' का अर्थ है 'निर्माण करने का'। 'ivarige' में संप्रदान कारक है (इन्हें/उनको)।";
    } else if (subType === "cariappa") {
      sentence1Kn = "ಫೀಲ್ಡ್ ಮಾರ್ಷಲ್ ಕೆ. ಎಂ. ಕಾರ್ಯಪ್ಪನವರು ಭಾರತೀಯ ಭೂಸೇನೆಯ ಮೊದಲ ಭಾರತೀಯ ಕಮಾಂಡರ್-ಇನ್-ಚೀಫ್ ಆಗಿದ್ದರು.";
      sentence1Tr = "Field Marshal K. M. Cariappanavaru Bhaarateeya bhooseeneya modala Bhaarateeya Commander-in-Chief aagiddaru.";
      sentence1En = "Field Marshal K.M. Cariappa made history as the very first Indian Commander-in-Chief of the Indian Army.";
      sentence1Hi = "फील्ड मार्शल के.एम. करियप्पा भारतीय थल सेना के पहले भारतीय कमांडर-इन-चीफ थे।";
      sentence1NotesEn = "Genitive 'bhooseeneya' (of land army) + past continuous 'Commander-in-Chief aagiddaru' (was Commander-in-Chief).";
      sentence1NotesHi = "'bhooseeneya' का अर्थ थल सेना की है। 'aagiddaru' का अर्थ 'थे' है।";

      sentence2Kn = "ಕೊಡಗಿನ ಹೆಮ್ಮೆಯ ಪುತ್ರರಾದ ಇವರ ನಿಸ್ವಾರ್ಥ ಸೇವೆ, ಶಿಸ್ತು ಮತ್ತು ದೇಶಪ್ರೇಮ ಸದಾ ಅನುಕರಣೀಯವಾಗಿದೆ.";
      sentence2Tr = "Kodagina hemmeya putraraada ivara niswaartha seeve, shishtu mattu deeshapreemavu sadaa anukaraneeyavaagide.";
      sentence2En = "The selfless service, discipline, and intense patriotism of this proud son of Coorg are forever worthy of emulation.";
      sentence2Hi = "कूर्ग (कोडगु) के गौरवशाली सपूत करियप्पा की निस्वार्थ सेवा, अनुशासन और देशभक्ति हमेशा अनुकरणीय है।";
      sentence2NotesEn = "Genitive 'Kodagina' + subject 'seeve, shishtu mattu deeshapreemavu' + 'anukaraneeyavaagide' (is exemplary/imitable).";
      sentence2NotesHi = "'Kodagina' का अर्थ 'कूर्ग का' है। 'anukaraneeyavaagide' का अर्थ 'अनुकरणीय है' है।";
    } else {
      sentence1Kn = `${topic.titleKn} ನಮ್ಮ ಇತಿಹಾಸ ಮತ್ತು ಸಮಾಜಕ್ಕೆ ದೊಡ್ಡ ದಾರಿದೀಪವಾಗಿದ್ದಾರೆ.`;
      sentence1Tr = `${topic.tr} namma itihaasa mattu samaajakke doddha daarideepavaagiddaare.`;
      sentence1En = `${topic.titleEn} stands as an ultimate guiding light for our historic heritage and contemporary society.`;
      sentence1Hi = `${topic.titleHi} हमारे इतिहास और समाज के लिए एक महान मार्गदर्शक प्रकाशस्तंभ रहे हैं।`;
      sentence1NotesEn = "Dative 'samaajakke' (to society) + compound 'daarideepavaagiddaare' (is guiding light).";
      sentence1NotesHi = "'samaajakke' संप्रदान कारक है। 'daarideepa' मार्गदर्शक दीपक को दर्शाता है।";

      sentence2Kn = "ಇವರ ಶ್ರೇಷ್ಠ ಸಾಧನೆಗಳು ಮತ್ತು ಮೌಲ್ಯಗಳು ಇಂದಿನ ಸಮಾಜದ ಯುವ ಜನಾಂಗಕ್ಕೆ ಅತ್ಯಂತ ಮುಖ್ಯವಾಗಿವೆ.";
      sentence2Tr = "Ivara shreeshta saadhanegalu mattu maulyagalu indina samaajada yuva janaangakke atyanta mukhya-vaagive.";
      sentence2En = "Their noble achievements and core values hold immense relevance and importance for today's younger generation.";
      sentence2Hi = "उनकी महान उपलब्धियाँ और जीवन मूल्य आज के समाज की युवा पीढ़ी के लिए अत्यंत महत्वपूर्ण हैं।";
      sentence2NotesEn = "Genitive 'samaajada' + dative 'janaangakke' (to generation) + plural predicate 'mukhya-vaagive' (are important).";
      sentence2NotesHi = "'saadhanegalu' उपलब्धियों को दर्शाता है। 'yuva janaangakke' का अर्थ 'युवा पीढ़ी के लिए' है।";
    }

    sentence3Kn = "ಅವರ ಆದರ್ಶ ಜೀವನ ಮತ್ತು ಬೋಧನೆಗಳು ಪ್ರತಿಯೊಬ್ಬ ನಾಗರಿಕನಿಗೆ ಸನ್ಮಾರ್ಗವನ್ನು ತೋರಿಸುತ್ತವೆ.";
    sentence3Tr = "Avara aadarsha jeevana mattu boodhanegalu pratiyobba naagarikanige sanmaargavannu toorisuttave.";
    sentence3En = "Their exemplary life and timeless teachings show the righteous path to every single citizen.";
    sentence3Hi = "उनका आदर्श जीवन और शिक्षाएं प्रत्येक नागरिक को सन्मार्ग (सही रास्ता) दिखाती हैं।";
    sentence3NotesEn = "Dative 'naagarikanige' (to citizen) + accusative 'sanmaargavannu' (righteous path) + verb 'toorisuttave' (they show).";
    sentence3NotesHi = "'naagarikanige' संप्रदान एकवचन है। 'sanmaargavannu' का अर्थ 'सन्मार्ग को' है।";

    sentence4Kn = "ಇಂತಹ ಮಹಾನ್ ವ್ಯಕ್ತಿಗಳ ಕೊಡುಗೆಯನ್ನು ಗೌರವಿಸುವುದು ಮತ್ತು ನೆನೆಯುವುದು ನಮಗೆ ಸದಾ ಪ್ರೇರಣೆಯಾಗಿದೆ.";
    sentence4Tr = "Intaha mahaan vyaktigala kodugeyannu gauravisuvudu mattu neneyuvudu namage sadaa preeraneyagide.";
    sentence4En = "Remembering and honoring the contributions of such colossal personalities is a source of eternal inspiration to us.";
    sentence4Hi = "ऐसे महान व्यक्तित्वों के योगदान का सम्मान करना और उन्हें याद रखना हमारे लिए हमेशा प्रेरणादायक है।";
    sentence4NotesEn = "Genitive plural 'vyaktigala' + gerunds 'gauravisuvudu, neneyuvudu' + dative pronoun 'namage' (to us).";
    sentence4NotesHi = "'namage' का अर्थ 'हमारे लिए' है। 'preeraneyagide' का अर्थ 'प्रेरणा है' है।";

    sentence5Kn = "ನಾವು ಅವರ ಉನ್ನತ ಮೌಲ್ಯಗಳನ್ನು ನಮ್ಮ ಜೀವನದಲ್ಲಿ ಅಳವಡಿಸಿಕೊಂಡು ಮುನ್ನಡೆಯಬೇಕು.";
    sentence5Tr = "Naavu avara unnata maulyagalannu namma jeevanadalli alavadiskondu munnadeyabeeku.";
    sentence5En = "We must actively integrate their high values into our own daily lives and move forward.";
    sentence5Hi = "हमें उनके उच्च जीवन मूल्यों को अपने जीवन में अपनाकर आगे बढ़ना चाहिए।";
    sentence5NotesEn = "Locative 'jeevanadalli' (in life) + past participle 'alavadiskondu' (having adopted) + verb 'munnadeyabeeku' (must lead forward).";
    sentence5NotesHi = "'jeevanadalli' में अधिकरण कारक है (जीवन में)। 'munnadeyabeeku' का अर्थ 'आगे बढ़ना चाहिए' है।";

    vocabHighlight = [
      { word: "ಆದರ್ಶ", transliteration: "aadarsha", meaning: isEng ? "Ideal / Model" : "आदर्श" },
      { word: "ದೇಶಪ್ರೇಮ", transliteration: "deeshapreema", meaning: isEng ? "Patriotism" : "देशभक्ति" },
      { word: "ಸೇವೆ", transliteration: "seeve", meaning: isEng ? "Service" : "सेवा" }
    ];

  } else if (topic.cat === "Modern Karnataka" || topic.cat === "Daily Life & Activities" || topic.cat === "Art & Literature" || topic.cat === "Science & Education") {
    // Highly tailored context-aware generator for these categories to prevent repetitions!
    let introKeywordKn = "";
    let introKeywordEn = "";
    let introKeywordHi = "";
    let introKeywordTr = "";

    let focusDetailKn = "";
    let focusDetailEn = "";
    let focusDetailHi = "";
    let focusDetailTr = "";

    let detailNotesEn = "";
    let detailNotesHi = "";

    if (topic.id === 51 || topic.id === 54 || topic.id === 60) { // IT & Biotech
      introKeywordKn = "ಕರ್ನಾಟಕದ ತಾಂತ್ರಿಕ ಕ್ರಾಂತಿ, ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಆರ್ಥಿಕ ಯಶಸ್ಸಿನ ಹೆಮ್ಮೆಯ ಸಂಕೇತವಾಗಿದೆ";
      introKeywordTr = "Karnaatakada taantrika kraanti, maahiti tantrajnaana mattu aarthika yashassina hemmeya sankeetavaagide";
      introKeywordEn = "is the proud symbol of Karnataka's technological revolution, IT dominance, and economic success";
      introKeywordHi = "कर्नाटक की तकनीकी क्रांति, सूचना प्रौद्योगिकी और आर्थिक सफलता का एक गौरवशाली प्रतीक है";

      focusDetailKn = "ಇಲ್ಲಿನ ಸುಪ್ರಸಿದ್ಧ ಸಾಫ್ಟ್‌ವೇರ್ ಪಾರ್ಕ್‌ಗಳು ಮತ್ತು ಸಾವಿರಾರು ಪ್ರತಿಭಾವಂತ ಇಂಜಿನಿಯರ್‌ಗಳು ಜಾಗತಿಕ ತಂತ್ರಜ್ಞಾನ ಕ್ಷೇತ್ರವನ್ನು ಮುನ್ನಡೆಸುತ್ತಿದ್ದಾರೆ.";
      focusDetailTr = "Illina suprasiddha software park-galu mattu saaviraaru pratibhaavanta engineer-galu jaagatika tantrajnaana ksheetravannu munnadesuttiddaare.";
      focusDetailEn = "The local world-famous software parks and thousands of talented engineers successfully lead the global tech space.";
      focusDetailHi = "यहाँ के विश्व प्रसिद्ध सॉफ्टवेयर पार्क और हजारों प्रतिभाशाली इंजीनियर वैश्विक तकनीकी क्षेत्र का नेतृत्व कर रहे हैं।";
      detailNotesEn = "Subject plural 'engineer-galu' + accusative 'ksheetravannu' (field) + continuous verb 'munnadesuttiddaare' (they are leading).";
      detailNotesHi = "'park-galu' बहुवचन रूप है। 'munnadesuttiddaare' का अर्थ 'नेतृत्व कर रहे हैं' है।";
    } else if (topic.id === 52 || topic.id === 58) { // Metro & Traffic
      introKeywordKn = "ಬೆಂಗಳೂರಿನ ಸಾರಿಗೆ ವ್ಯವಸ್ಥೆ, ಲಕ್ಷಾಂತರ ಜನರ ಪ್ರಯಾಣ ಮತ್ತು ನಗರದ ಮೂಲಸೌಕರ್ಯದ ಮುಖ್ಯ ಭಾಗವಾಗಿದೆ";
      introKeywordTr = "Bengaloorina saarige vyavasthe, lakshaantara janara prayaana mattu nagarada moolasaukaryada mukhya bhaagavaagide";
      introKeywordEn = "is an essential part of Bengaluru's transport system, daily passenger commute, and urban infrastructure";
      introKeywordHi = "बेंगलुरु की परिवहन प्रणाली, लाखों लोगों की यात्रा और शहरी बुनियादी ढांचे का एक मुख्य हिस्सा है";

      focusDetailKn = "ನಗರದ ವಾಹನ ದಟ್ಟಣೆಯನ್ನು ಗಣನೀಯವಾಗಿ ಕಡಿಮೆ ಮಾಡಲು ಮತ್ತು ಸುರಕ್ಷಿತ ಪ್ರಯಾಣ ಒದಗಿಸಲು ಇದು ಅತ್ಯಂತ ಸಹಕಾರಿಯಾಗಿದೆ.";
      focusDetailTr = "Nagarada vaahana dattaneyannu gananeeyavaagi kadime maadalu mattu surakshita prayaana odagisuva moolaka sahakaariyaagide.";
      focusDetailEn = "It plays an incredibly helpful role in significantly reducing traffic congestion and ensuring safe daily transit.";
      focusDetailHi = "यह शहर के ट्रैफिक जाम को काफी कम करने और सुरक्षित यात्रा प्रदान करने में बहुत मददगार है।";
      detailNotesEn = "Infinitive 'kadime maadalu' (to reduce/decrease) + active participle 'odagisuva' (providing) + adjective 'sahakaariyaagide'.";
      detailNotesHi = "'dattaneyannu' का अर्थ 'भीड़/जाम को' है। 'kadime maadalu' का अर्थ 'कम करने के लिए' है।";
    } else if (topic.id === 53 || topic.id === 59 || topic.id === 84) { // ISRO, HAL, Space
      introKeywordKn = "ಭಾರತದ ಬಾಹ್ಯಾಕಾಶ ಸಂಶೋಧನೆ, ವೈಜ್ಞಾನಿಕ ಸಾಧನೆ ಮತ್ತು ರಕ್ಷಣಾ ತಂತ್ರಜ್ಞಾನದ ಪ್ರಮುಖ ಹೆಮ್ಮೆಯಾಗಿದೆ";
      introKeywordTr = "Bhaaratada baahyaakaasha samshoodhane, vaijnaanika saadhane mattu rakshanaa tantrajnaanada pramukha hemmeyaagide";
      introKeywordEn = "is a premier source of pride for India's space research, scientific breakthroughs, and defense aviation";
      introKeywordHi = "भारत के अंतरिक्ष अनुसंधान, वैज्ञानिक उपलब्धियों और रक्षा विमानन तकनीक का एक प्रमुख गौरव है";

      focusDetailKn = "ಇಲ್ಲಿನ ಪ್ರತಿಭಾವಂತ ವಿಜ್ಞಾನಿಗಳು ಚಂದ್ರಯಾನ ಮತ್ತು ಉಪಗ್ರಹ ಉಡಾವಣೆಗಳ ಮೂಲಕ ದೇಶದ ಕೀರ್ತಿಯನ್ನು ಜಗತ್ತಿಗೆ ಸಾರಿದ್ದಾರೆ.";
      focusDetailTr = "Illina pratibhaavanta vijnaanigalu Chandrayaana mattu upagraha udaavanegala moolaka deeshada keertiyannu jagattige saariddaare.";
      focusDetailEn = "The brilliant local scientists have proclaimed the nation's glory globally through successful Chandrayaan and satellite launches.";
      focusDetailHi = "यहाँ के प्रतिभाशाली वैज्ञानिकों ने चंद्रयान और उपग्रह प्रक्षेपण के माध्यम से देश का मान दुनिया भर में बढ़ाया है।";
      detailNotesEn = "Subject plural 'vijnaanigalu' (scientists) + instrumental 'moolaka' (through) + present perfect verb 'saariddaare'.";
      detailNotesHi = "'vijnaanigalu' का अर्थ वैज्ञानिक है। 'udaavane' का अर्थ प्रक्षेपण है।";
    } else if (topic.id === 55 || topic.id === 57) { // Parks (Lalbagh, Cubbon)
      introKeywordKn = "ಬೆಂಗಳೂರು ನಗರದ ಹಸಿರು ವಾತಾವರಣ, ಶುದ್ಧ ಗಾಳಿ ಮತ್ತು ಪ್ರಕೃತಿಯ ಸೌಂದರ್ಯದ ಪ್ರಮುಖ ತಾಣವಾಗಿದೆ";
      introKeywordTr = "Bengalooru nagarada hasiru vaataavarana, shuddha gaali mattu prakritiya saundaryada pramukha taanavaagide";
      introKeywordEn = "is a prominent hotspot of rich greenery, pure fresh air, and scenic botanical beauty in Bengaluru city";
      introKeywordHi = "बेंगलुरु शहर के हरे-भरे वातावरण, शुद्ध हवा और प्राकृतिक सुंदरता का एक प्रमुख स्थल है";

      focusDetailKn = "ನೂರಾರು ವರ್ಷಗಳ ಹಳೆಯ ಮರಗಳು ಮತ್ತು ಅಪರೂಪದ ಸಸ್ಯಕಾಶಿಗಳನ್ನು ಹೊಂದಿರುವ ಈ ಉದ್ಯಾನಗಳು ನಗರದ ಪ್ರಮುಖ ಶ್ವಾಸಕೋಶಗಳಾಗಿವೆ.";
      focusDetailTr = "Nooraaru varshagala haleya maragalu mattu aparoopada sasyakaashigalannu hondiruva ee udyaanagalu nagarada pramukha shwaasakoshagalaagive.";
      focusDetailEn = "Housing centuries-old trees and rare floral collections, these beautiful parks act as the green lungs of the city.";
      focusDetailHi = "सैकड़ों साल पुराने पेड़ों और दुर्लभ वनस्पतियों से युक्त ये उद्यान शहर के प्रमुख फेफड़ों (श्वासकोश) के रूप में कार्य करते हैं।";
      detailNotesEn = "Adjective clause 'hondiruva' (having/possessing) + plural predicate 'shwaasakoshagalaagive' (have become lungs).";
      detailNotesHi = "'shwaasakoshagalaagive' का अर्थ 'फेफड़े हैं' होता है। 'udyaanagalu' उद्यानों को दर्शाता है।";
    } else if (topic.id === 56 || topic.id === 98) { // Vidhana Soudha, Policy
      introKeywordKn = "ನಮ್ಮ ರಾಜ್ಯದ ಶ್ರೇಷ್ಠ ಆಡಳಿತ, ಪ್ರಜಾಪ್ರಭುತ್ವದ ಮೌಲ್ಯಗಳು ಮತ್ತು ಭವಿಷ್ಯದ ನೀತಿಯ ಪ್ರಮುಖ ಕನ್ನಡಿಯಾಗಿದೆ";
      introKeywordTr = "Namma raajyada shreeshta aadaalita, prajaaprabhutvada maulyagalu mattu bhavishyada neetiya pramukha kannideyaagide";
      introKeywordEn = "is the ultimate reflection of our state's rich administration, democratic values, and future-forward policies";
      introKeywordHi = "हमारे राज्य के उत्कृष्ट शासन, लोकतांत्रिक मूल्यों और भविष्य की नीतियों का एक प्रमुख दर्पण है";

      focusDetailKn = "ಜನರ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಹೊಸ ಯೋಜನೆಗಳು ಮತ್ತು ಉತ್ತಮ ಶಾಸನಗಳನ್ನು ರೂಪಿಸುವಲ್ಲಿ ಇದು ಪ್ರಮುಖ ಕೇಂದ್ರವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.";
      focusDetailTr = "Janara kalyaanakkaagi hosa yojanegalu mattu uttama shaasanagalannu roopisuvalalli idu pramukha keendravaagi kaaryanirvahisuttade.";
      focusDetailEn = "It acts as the primary hub for designing outstanding new welfare schemes and progressive laws for public benefit.";
      focusDetailHi = "यह लोगों के कल्याण के लिए नई योजनाओं और अच्छे कानूनों को तैयार करने के मुख्य केंद्र के रूप में कार्य करता है।";
      detailNotesEn = "Dative 'kalyaanakkaagi' (for welfare) + locative gerund 'roopisuvalalli' (in shaping) + adverb 'keendravaagi' (as center).";
      detailNotesHi = "'shaasanagalannu' का अर्थ कानूनों को है। 'kaaryanirvahisuttade' का अर्थ 'कार्य करता है' है।";
    } else if (topic.cat === "Daily Life & Activities" || topic.id === 100) { // Daily life / Family
      introKeywordKn = "ನಮ್ಮ ದೈನಂದಿನ ವೈಯಕ್ತಿಕ ಜೀವನ, ಶಿಸ್ತು ಮತ್ತು ಕೌಟುಂಬಿಕ ಮೌಲ್ಯಗಳ ಅತ್ಯಂತ ಪ್ರೀತಿಯ ಭಾಗವಾಗಿದೆ";
      introKeywordTr = "Namma dainandina vaiyaktika jeevana, shishtu mattu koutumbika maulyagala atyanta preetiya bhaagavaagide";
      introKeywordEn = "is an incredibly dear and essential part of our daily personal routines, self-discipline, and family values";
      introKeywordHi = "हमारे दैनिक व्यक्तिगत जीवन, अनुशासन और पारिवारिक मूल्यों का एक अत्यंत प्रिय हिस्सा है";

      focusDetailKn = "ಇದು ನಮಗೆ ಉತ್ತಮ ಹವ್ಯಾಸಗಳನ್ನು ಬೆಳೆಸಿಕೊಳ್ಳಲು, ಹಿರಿಯರನ್ನು ಗೌರವಿಸಲು ಮತ್ತು ಜವಾಬ್ದಾರಿಯುತವಾಗಿ ಬದುಕಲು ಕಲಿಸುತ್ತದೆ.";
      focusDetailTr = "Idu namage uttama havyaasagalannu belesikollalu, hiriyarannu gauravisalu mattu javaabdaariyuttaagi badukalu kalisuttade.";
      focusDetailEn = "It successfully teaches us to cultivate healthy habits, respect our elders, and live our lives with high responsibility.";
      focusDetailHi = "यह हमें अच्छी आदतें विकसित करने, बड़ों का सम्मान करने और जिम्मेदारी से जीना सिखाता है।";
      detailNotesEn = "Infinitives 'belesikollalu' (to grow), 'gauravisalu' (to respect), 'badukalu' (to live) + verb 'kalisuttade' (it teaches).";
      detailNotesHi = "'belesikollalu' का अर्थ विकसित करना है। 'kalisuttade' का अर्थ 'सिखाता है' है।";
    } else if (topic.cat === "Art & Literature") { // Arts
      introKeywordKn = "ಕನ್ನಡ ನಾಡಿನ ಸಾಂಸ್ಕೃತಿಕ ಹಿರಿಮೆ, ವೈವಿಧ್ಯಮಯ ಜಾನಪದ ಕಲೆ ಮತ್ತು ಭವ್ಯ ಪರಂಪರೆಯ ಹೆಮ್ಮೆಯಾಗಿದೆ";
      introKeywordTr = "Kannada naadina saamskritika hirime, vaividhyamayada jaanapada kale mattu bhavya parampareya hemmeyaagide";
      introKeywordEn = "is the proud representation of the cultural grandeur, diverse folk arts, and glorious heritage of Karnataka";
      introKeywordHi = "कन्नड़ भूमि के सांस्कृतिक गौरव, विविध लोक कलाओं और भव्य विरासत की एक अनूठी शान है";

      if (topic.id === 71) { // Yakshagana
        focusDetailKn = "ಕರಾವಳಿಯ ಪ್ರಸಿದ್ಧ ಯಕ್ಷಗಾನ ಕಲೆಯ ಆಕರ್ಷಕ ವೇಷಭೂಷಣಗಳು, ನೃತ್ಯ ಮತ್ತು ಭಾಗವತರ ಸಂಗೀತ ಎಲ್ಲರನ್ನೂ ಮಂತ್ರಮುಗ್ಧಗೊಳಿಸುತ್ತವೆ.";
        focusDetailTr = "Karaavaliya suprasiddha Yakshagaana kaleya aakarshaka veeshabhooshanagalu, nritya mattu bhaagavatara sangeeta ellarannoo mantramugdhagolisuttave.";
        focusDetailEn = "Coastal Karnataka's famous Yakshagana's stunning costumes, vibrant dance steps, and Bhagavata singing spellbind everyone.";
        focusDetailHi = "तटीय क्षेत्र के प्रसिद्ध यक्षगान के आकर्षक परिधान, नृत्य और भागवत संगीत हर किसी को मंत्रमुग्ध कर देते हैं।";
      } else if (topic.id === 78) { // Channapatna Toys
        focusDetailKn = "ಚನ್ನಪಟ್ಟಣದ ಸಾಂಪ್ರದಾಯಿಕ ಮರದ ಆಟಿಕೆಗಳನ್ನು ನೈಸರ್ಗಿಕ ಬಣ್ಣಗಳನ್ನು ಬಳಸಿ ಮಾಡಲಾಗುತ್ತಿದ್ದು, ಇವು ಜಗತ್ಪ್ರಸಿದ್ಧವಾಗಿವೆ.";
        focusDetailTr = "Channapattanada saampradaayika marada aatikegalannu naisargika bannagalannu balasi maadalaaguttiddu, ivu jagatprasiddhavaagive.";
        focusDetailEn = "Channapatna's traditional wooden toys are prepared using fully organic vegetable dyes and are highly famous globally.";
        focusDetailHi = "चन्नापटना के पारंपरिक लकड़ी के खिलौनों को प्राकृतिक रंगों का उपयोग करके बनाया जाता है और ये दुनिया भर में प्रसिद्ध हैं।";
      } else {
        focusDetailKn = "ಈ ಅದ್ಭುತ ಕಲಾ ಪ್ರಕಾರಗಳು ಮತ್ತು ಸಾಹಿತ್ಯ ಕೃತಿಗಳು ನಮ್ಮ ಶ್ರೀಮಂತ ಇತಿಹಾಸವನ್ನು ಯುವ ಪೀಳಿಗೆಗೆ ಯಶಸ್ವಿಯಾಗಿ ಪರಿಚಯಿಸುತ್ತವೆ.";
        focusDetailTr = "Ee adbhuta kalaa prakaaragalu mattu saahitya krutigal namma sreemanta itihaasavannu yuva peeligege yashassivaagi parichayisuttave.";
        focusDetailEn = "These outstanding art forms and literary works successfully introduce our rich history to the younger generation.";
        focusDetailHi = "ये अद्भुत कला रूप और साहित्यिक रचनाएँ हमारी समृद्ध विरासत से युवा पीढ़ी को सफलतापूर्वक परिचित कराती हैं।";
      }
      detailNotesEn = "Genitive 'saahitya krutigal' (of literary works) + dative 'peeligege' (to generation) + verb 'parichayisuttave' (they introduce).";
      detailNotesHi = "'parichayisuttave' का अर्थ 'परिचय कराती हैं' है। 'peeligege' संप्रदान एकवचन है।";
    } else { // Science & Education
      introKeywordKn = "ವಿದ್ಯಾರ್ಥಿಗಳ ಸರ್ವಾಂಗೀಣ ವಿಕಾಸ, ಜ್ಞಾನಾರ್ಜನೆ ಮತ್ತು ವೈಜ್ಞಾನಿಕ ಮನೋಭಾವವನ್ನು ಬೆಳೆಸುವ ಅತ್ಯಗತ್ಯ ಬುನಾದಿಯಾಗಿದೆ";
      introKeywordTr = "Vidyaarthigala sarvaangeena vikaasa, jnaanaarjane mattu vaijnaanika manoobhaavavannu belesuva atyagatyada bunaadiyaagide";
      introKeywordEn = "is the most essential foundation for the overall growth, knowledge acquisition, and scientific temper of students";
      introKeywordHi = "छात्रों के सर्वांगीण विकास, ज्ञानार्जन और वैज्ञानिक दृष्टिकोण विकसित करने की एक अत्यंत आवश्यक आधारशिला है";

      if (topic.id === 81) { // CV Raman
        focusDetailKn = "ಭಾರತದ ಹೆಮ್ಮೆಯ ವಿಜ್ಞಾನಿ ಸರ್ ಸಿ. ವಿ. ರಾಮನ್ ಅವರು ಆವಿಷ್ಕರಿಸಿದ ರಾಮನ್ ಪರಿಣಾಮವು ಇಡೀ ಜಗತ್ತಿಗೆ ನೊಬೆಲ್ ಪ್ರಶಸ್ತಿಯ ಮೂಲಕ ಬೆಳಕಿನ ರಹಸ್ಯವನ್ನು ತೋರಿಸಿತು.";
        focusDetailTr = "Bhaarateeya hemmeya vijnaani Sir C. V. Raman avaru aavishkarisida Raman Effect idee jagattige Nobel prashastiya moolaka belakina rahasyavannu toorisitu.";
        focusDetailEn = "The Raman Effect discovered by India's proud scientist Sir C.V. Raman revealed the secrets of light scattering, winning a Nobel Prize.";
        focusDetailHi = "भारत के गौरवशाली वैज्ञानिक सर सी.वी. रमन द्वारा खोजे गए 'रमन प्रभाव' ने नोबेल पुरस्कार के माध्यम से दुनिया को प्रकाश का रहस्य दिखाया।";
      } else if (topic.id === 82) { // IISc
        focusDetailKn = "ಬೆಂಗಳೂರಿನಲ್ಲಿರುವ ಭಾರತೀಯ ವಿಜ್ಞಾನ ಸಂಸ್ಥೆಯು ಜಗತ್ತಿನ ಅತ್ಯುನ್ನತ ಮತ್ತು ಹೆಮ್ಮೆಯ ಸಂಶೋಧನಾ ಕೇಂದ್ರಗಳಲ್ಲಿ ಒಂದಾಗಿ ದೇಶದ ಹೆಸರು ಎತ್ತಿಹಿಡಿದಿದೆ.";
        focusDetailTr = "Bengaloorinalliruva Bhaarateeya Vijnaana Samsthe-yu jagattina atyunnata mattu hemmeya samshoodhana keendragalalli ondagi deeshada hesaru ettihididide.";
        focusDetailEn = "The Indian Institute of Science in Bengaluru stands tall as one of the premier global research institutes, lifting our nation's pride.";
        focusDetailHi = "बेंगलुरु में स्थित भारतीय विज्ञान संस्थान (IISc) दुनिया के सर्वोच्च और गौरवशाली अनुसंधान केंद्रों में से एक के रूप में देश का मान बढ़ाता है।";
      } else {
        focusDetailKn = "ವೈಜ್ಞಾನಿಕ ತಂತ್ರಜ್ಞಾನದ ಅಧ್ಯಯನ ಮತ್ತು ಆಧುನಿಕ ಶಿಕ್ಷಣ ಪದ್ಧತಿಯು ದೇಶದ ಸೃಜನಶೀಲ ಪ್ರಗತಿಗೆ ಅತ್ಯಗತ್ಯ ಮಾರ್ಗಗಳಾಗಿವೆ.";
        focusDetailTr = "Vaijnaanika tantrajnaanada adhyayana mattu aadhunika shikshana paddhatiyu deeshada srujanaasheela pragatige atyagatyada maargagalaagive.";
        focusDetailEn = "The systematic study of science, technology, and modern educational frameworks is crucial for the creative progress of our nation.";
        focusDetailHi = "वैज्ञानिक तकनीक का अध्ययन और आधुनिक शिक्षा प्रणाली देश की रचनात्मक प्रगति के लिए अत्यंत आवश्यक मार्ग हैं।";
      }
      detailNotesEn = "Genitive 'tantrajnaanada' (of technology) + dative 'pragatige' (to progress) + plural predicate 'maargagalaagive' (have become paths).";
      detailNotesHi = "'shikshana paddhatiyu' का अर्थ शिक्षा प्रणाली है। 'maargagalaagive' का अर्थ 'मार्ग हैं' है।";
    }

    sentence1Kn = `${topic.titleKn} ನಮ್ಮ ${introKeywordKn}.`;
    sentence1Tr = `${topic.tr} namma ${introKeywordTr}.`;
    sentence1En = `${topic.titleEn} ${introKeywordEn}.`;
    sentence1Hi = `${topic.titleHi} हमारे ${introKeywordHi}।`;
    sentence1NotesEn = "Genitive pronoun 'namma' (our) + dative 'pragatige' (to progress) + nominal predicate ending in '-aagide' (has become).";
    sentence1NotesHi = "'namma' संबंधवाचक सर्वनाम है (हमारा/हमारे)। '-aagide' प्रत्यय 'है' का अर्थ प्रकट करता है।";

    sentence2Kn = focusDetailKn;
    sentence2Tr = focusDetailTr;
    sentence2En = focusDetailEn;
    sentence2Hi = focusDetailHi;
    sentence2NotesEn = detailNotesEn || "Subject + object (accusative) + verbal adverb/participle + auxiliary continuous verb.";
    sentence2NotesHi = detailNotesHi || "कर्ता + कर्म (द्वितीया विभक्ति) + पूर्वकालिक क्रिया + मुख्य क्रिया (सहायक क्रिया सहित)।";

    sentence3Kn = "ಇದು ನಮ್ಮ ಒಟ್ಟಾರೆ ಮಾನಸಿಕ, ಬೌದ್ಧಿಕ ಮತ್ತು ವ್ಯಕ್ತಿತ್ವ ವಿಕಾಸಕ್ಕೆ ಅತ್ಯಂತ ಮಹತ್ವದ ತಳಹದಿಯಾಗಿದೆ.";
    sentence3Tr = "Idu namma ottaare maanasika, bouddhika mattu vyaktitva vikaasakke atyanta mahatvada talahadiyaagide.";
    sentence3En = "This stands as a highly significant cornerstone for our comprehensive mental, intellectual, and personality development.";
    sentence3Hi = "यह हमारे समग्र मानसिक, बौद्धिक और व्यक्तित्व विकास के लिए एक अत्यंत महत्वपूर्ण आधारशिला है।";
    sentence3NotesEn = "Genitive 'vyaktitva' (of personality) + dative 'vikaasakke' (to growth) + 'talahadiyaagide' (is foundation).";
    sentence3NotesHi = "'vikaasakke' में संप्रदान कारक है (विकास के लिए)। 'talahadiyaagide' का अर्थ 'आधार/नींव है' है।";

    sentence4Kn = "ಇಂದಿನ ಆಧುನಿಕ ಯುಗದಲ್ಲಿ ಈ ಜ್ಞಾನ ಮತ್ತು ನಮ್ಮ ಸಾಂಸ್ಕೃತಿಕ ಬೇರುಗಳನ್ನು ಉಳಿಸುವುದು ನಮ್ಮ ಆದ್ಯ ಕರ್ತವ್ಯವಾಗಿದೆ.";
    sentence4Tr = "Indina aadhunika yugadalli ee jnaana mattu namma saamskritika beerugalannu ulisuvudu namma aadya kartavyavaagide.";
    sentence4En = "In this contemporary modern era, preserving this knowledge and our cultural roots is our absolute priority duty.";
    sentence4Hi = "आज के आधुनिक युग में इस ज्ञान और अपनी सांस्कृतिक जड़ों को बचाए रखना हमारा प्राथमिक कर्तव्य है।";
    sentence4NotesEn = "Locative 'yugadalli' (in era) + accusative plural 'beerugalannu' (roots) + gerund 'ulisuvudu' (saving).";
    sentence4NotesHi = "'yugadalli' में अधिकरण कारक है (युग में)। 'ulisuvudu' का अर्थ है 'बचाना/सुरक्षित रखना'।";

    sentence5Kn = "ನಾವು ಉನ್ನತ ಯೋಚನೆಗಳೊಂದಿಗೆ ನಮ್ಮ ಸುಂದರ ಭವಿಷ್ಯವನ್ನು ನಿರ್ಮಿಸಲು ಸದಾ ಶ್ರಮಿಸಬೇಕು.";
    sentence5Tr = "Naavu unnata yoochenegalondige namma sundara bhavishyavannu nirmisalu sadaa shramisabeeku.";
    sentence5En = "We must constantly work hard with noble thoughts to build a bright and beautiful future for ourselves.";
    sentence5Hi = "हमें उच्च विचारों के साथ अपने सुंदर भविष्य का निर्माण करने के लिए हमेशा कड़ी मेहनत करनी चाहिए।";
    sentence5NotesEn = "Instrumental plural 'yoochenegalondige' (with thoughts) + infinitive 'nirmisalu' (to build) + modal 'shramisabeeku' (must work hard).";
    sentence5NotesHi = "'yoochenegalondige' का अर्थ विचारों के साथ है। 'shramisabeeku' का अर्थ 'परिश्रम करना चाहिए' है।";

    vocabHighlight = [
      { word: "ಯಶಸ್ಸು", transliteration: "yashassu", meaning: isEng ? "Success" : "सफलता" },
      { word: "ಉದ್ಯಾನ", transliteration: "udyaana", meaning: isEng ? "Garden/Park" : "उद्यान/बागीचा" },
      { word: "ಅಧ್ಯಯನ", transliteration: "adhyayana", meaning: isEng ? "Study/Learning" : "अध्ययन" }
    ];
  } else if (topic.cat === "Tourism & Places") {
    sentence1Kn = `${topic.titleKn} ಕರ್ನಾಟಕ ರಾಜ್ಯದ ಅತ್ಯಂತ ಅದ್ಭುತವಾದ ಮತ್ತು ಐತಿಹಾಸಿಕ ಪ್ರವಾಸಿ ಸ್ಥಳವಾಗಿದೆ.`;
    sentence1Tr = `${topic.tr} karnaataka raajyada atyanta adbhutavaada mattu aitihasika pravaasi sthalavaagide.`;
    sentence1En = `${topic.titleEn} is an absolutely wonderful and highly historical tourist destination in Karnataka state.`;
    sentence1Hi = `${topic.titleHi} *कर्नाटक* राज्य का एक अत्यंत अद्भुत और ऐतिहासिक पर्यटन स्थल है।`;
    sentence1NotesEn = "Genitive compound 'karnaataka raajyada' (of Karnataka state) + 'adbhutavaada' (wonderful) + 'sthalavaagide' (is place).";
    sentence1NotesHi = "'karnaataka raajyada' में संबंध कारक '-da' है (कर्नाटक राज्य का)। 'sthalavaagide' का अर्थ है 'स्थान है'।";

    sentence2Kn = "ಇಲ್ಲಿನ ಸುಂದರವಾದ ವಾಸ್ತುಶಿಲ್ಪ ಮತ್ತು ಪ್ರಕೃತಿ ನೋಡುಗರ ಕಣ್ಣುಗಳಿಗೆ ತಂಪು ನೀಡುತ್ತದೆ.";
    sentence2Tr = "Illina sundaravaada vaastushilpa mattu prakriti noodugara kannugalige tampu needuttade.";
    sentence2En = "The local beautiful architecture and surrounding nature bring soothing peace to visitors' eyes.";
    sentence2Hi = "यहाँ की सुंदर वास्तुकला और प्रकृति दर्शकों की आँखों को ठंडक प्रदान करती है।";
    sentence2NotesEn = "Adverb 'illina' (of here) + dative plural 'kannugalige' (to eyes) + singular verb 'needuttade' (it gives).";
    sentence2NotesHi = "'illina' का अर्थ है 'यहाँ का/की'। 'kannugalige' संप्रदान बहुवचन है (आँखों को)। 'needuttade' का अर्थ है 'देता/देती है'।";

    sentence3Kn = "ಪ್ರತಿ ವರ್ಷ ಸಾವಿರಾರು ಜನರು ದೇಶ-ವಿದೇಶಗಳಿಂದ ಈ ಸ್ಥಳಕ್ಕೆ ಭೇಟಿ ನೀಡುತ್ತಾರೆ.";
    sentence3Tr = "Prati varsha saaviraaru janaru deesha-videeshagalinda ee sthalakke bheeti needuttaare.";
    sentence3En = "Every year, thousands of people from across the country and globe visit this place.";
    sentence3Hi = "हर साल देश-विदेश से हजारों लोग इस स्थान का दौरा करते हैं।";
    sentence3NotesEn = "Ablative/instrumental 'videeshagalinda' (from foreign lands) + dative singular 'sthalakke' (to the place) + verb 'needuttaare' (they give/perform).";
    sentence3NotesHi = "'sthalakke' संप्रदान कारक है (स्थान को/के लिए)। 'bheeti' का अर्थ है 'यात्रा/दौरा'। 'needuttaare' का अर्थ है 'देते हैं'।";

    sentence4Kn = "ಇಲ್ಲಿನ ಪ್ರಾಚೀನ ಇತಿಹಾಸವು ನಮಗೆ ಹೆಮ್ಮೆ ತರುತ್ತದೆ.";
    sentence4Tr = "Illina praacheena itihaasavu namage hemme taruttade.";
    sentence4En = "The ancient historical roots of this location bring great pride to us.";
    sentence4Hi = "यहाँ का प्राचीन इतिहास हमें गर्व का अनुभव कराता है।";
    sentence4NotesEn = "Emphatic subject 'itihaasavu' (history indeed) + dative pronoun 'namage' (to us) + verb 'taruttade' (it brings).";
    sentence4NotesHi = "'itihaasavu' कर्ता कारक का बलवाचक रूप है (इतिहास ही)। 'namage' का अर्थ है 'हमें'। 'taruttade' का अर्थ है 'लाता है'।";

    sentence5Kn = "ನಾವು ನಮ್ಮ ಐತಿಹಾಸಿಕ ತಾಣಗಳನ್ನು ಅತ್ಯಂತ ಎಚ್ಚರಿಕೆಯಿಂದ ಕಾಪಾಡಿಕೊಳ್ಳಬೇಕು.";
    sentence5Tr = "Naavu namma aitihasika taanagalannu atyanta echcharikeyinda kaapaadikollabeeku.";
    sentence5En = "We must preserve our historical heritage destinations with utmost care.";
    sentence5Hi = "हमें अपने ऐतिहासिक स्थलों को बड़े ही ध्यान से संरक्षित रखना चाहिए।";
    sentence5NotesEn = "Subject 'naavu' (we) + accusative plural 'taanagalannu' (heritage locations) + modal obligation verb ending '-beeku' in 'kaapaadikollabeeku' (must protect).";
    sentence5NotesHi = "'naavu' का अर्थ है 'हम'। 'taanagalannu' का अर्थ है 'स्थानों को'। '-beeku' प्रत्यय 'चाहिए' का अर्थ प्रकट करता है।";

    vocabHighlight = [
      { word: "ಪ್ರವಾಸಿಗ", transliteration: "praavaasiga", meaning: isEng ? "Tourist" : "पर्यटक" },
      { word: "ವಾಸ್ತುಶಿಲ್ಪ", transliteration: "vaastushilpa", meaning: isEng ? "Architecture" : "वास्तुकला" },
      { word: "ಇತಿಹಾಸ", transliteration: "itihaasa", meaning: isEng ? "History" : "इतिहास" }
    ];

  } else if (topic.cat === "Food & Cuisine") {
    sentence1Kn = `${topic.titleKn} ಕನ್ನಡ ಸಂಸ್ಕೃತಿಯ ಅತ್ಯಂತ ಪ್ರಸಿದ್ಧ ಹಾಗೂ ರುಚಿಕರವಾದ ಸಾಂಪ್ರದಾಯಿಕ ಆಹಾರವಾಗಿದೆ.`;
    sentence1Tr = `${topic.tr} kannada samskritiya atyanta prasiddha haagu ruchikaravaada saampradaayika aahaaravaagide.`;
    sentence1En = `${topic.titleEn} is an extremely famous and delicious traditional culinary item of Kannada culture.`;
    sentence1Hi = `${topic.titleHi} कन्नड़ संस्कृति का एक अत्यंत प्रसिद्ध और स्वादिष्ट पारंपरिक भोजन है।`;
    sentence1NotesEn = "Genitive 'samskritiya' (of culture) + 'ruchikaravaada' (tasty) + 'aahaaravaagide' (is food).";
    sentence1NotesHi = "'samskritiya' संबंध कारक है (संस्कृति का)। 'aahaaravaagide' का अर्थ है 'भोजन है'।";

    sentence2Kn = "ಇದನ್ನು ತಯಾರಿಸಲು ಅನೇಕ ಬಗೆಯ ಉತ್ತಮ ಪದಾರ್ಥಗಳನ್ನು ಬಳಸಲಾಗುತ್ತದೆ.";
    sentence2Tr = "Idannu tayaarisalu aneka bageya uttama padaarthagalannu balasalaaguttade.";
    sentence2En = "To prepare this, several high-quality ingredients and spices are blended together.";
    sentence2Hi = "इसे तैयार करने के लिए कई प्रकार की बेहतरीन सामग्रियों का उपयोग किया जाता है।";
    sentence2NotesEn = "Infinitive 'tayaarisalu' (to prepare) + accusative plural 'padaarthagalannu' (ingredients) + passive verb 'balasalaaguttade' (is used).";
    sentence2NotesHi = "'tayaarisalu' का अर्थ है 'तैयार करने के लिए'। 'padaarthagalannu' द्वितीय बहुवचन है (साम सामग्रियों को)।";

    sentence3Kn = "ಕನ್ನಡಿಗರು ತಮ್ಮ ಅತಿಥಿಗಳಿಗೆ ಅತ್ಯಂತ ಪ್ರೀತಿಯಿಂದ ಈ ವಿಶೇಷ ಖಾದ್ಯವನ್ನು ಬಡಿಸುತ್ತಾರೆ.";
    sentence3Tr = "Kannadigaru tamma atithigalige atyanta preetiyinda ee visheesha khaadyavannu badisuttaare.";
    sentence3En = "Kannada people serve this special dish to their guests with utmost love and hospitality.";
    sentence3Hi = "कन्नड़ लोग अपने मेहमानों को बड़े ही प्यार से यह विशेष व्यंजन परोसते हैं।";
    sentence3NotesEn = "Plural noun 'kannadigaru' (Kannada people) + dative plural 'atithigalige' (to guests) + instrumental 'preetiyinda' (with love) + verb 'badisuttaare' (they serve).";
    sentence3NotesHi = "'kannadigaru' का अर्थ है 'कन्नड़ लोग'। 'atithigalige' का अर्थ है 'मेहमानों को'। 'badisuttaare' का अर्थ है 'परोसते हैं'।";

    sentence4Kn = "ಇದರ ಅದ್ಭುತ ಸುವಾಸನೆ ಮತ್ತು ವಿಶಿಷ್ಟ ರುಚಿ ಎಲ್ಲರ ಮನಸ್ಸನ್ನು ಸೆಳೆಯುತ್ತದೆ.";
    sentence4Tr = "Idara adbhuta suvaasane mattu vishishta ruchi ellara manassannu seleyuttade.";
    sentence4En = "Its wonderful aroma and unique rich taste capture everyone's hearts and minds.";
    sentence4Hi = "इसकी अद्भुत सुगंध और अनूठा स्वाद सभी के मन को आकर्षित करता है।";
    sentence4NotesEn = "Genitive pronoun 'idara' (its) + accusative 'manassannu' (mind) + singular verb 'seleyuttade' (it attracts).";
    sentence4NotesHi = "'idara' का अर्थ है 'इसका'। 'manassannu' का अर्थ है 'मन को'। 'seleyuttade' का अर्थ है 'खींचता है'।";

    sentence5Kn = "ಇದು ಕೇವಲ ಆಹಾರವಲ್ಲ, ಇದು ನಮ್ಮ ಶ್ರೀಮಂತ ಪರಂಪರೆಯ ಭಾಗವಾಗಿದೆ.";
    sentence5Tr = "Idu keevala aahaaravalla, idu namma sreemanta parampareya bhaagavaagide.";
    sentence5En = "This is not just food; it represents an integral part of our prosperous heritage.";
    sentence5Hi = "यह केवल भोजन नहीं है, यह हमारी समृद्ध विरासत का एक हिस्सा है।";
    sentence5NotesEn = "Negative compound 'aahaaravalla' (not food alone) + genitive 'parampareya' (of heritage) + 'bhaagavaagide' (is part).";
    sentence5NotesHi = "'aahaaravalla' का संधि विच्छेद 'aahaara + alla' है (भोजन नहीं है)। 'bhaagavaagide' का अर्थ है 'हिस्सा है'।";

    vocabHighlight = [
      { word: "ಆಹಾರ", transliteration: "aahaara", meaning: isEng ? "Food" : "भोजन" },
      { word: "ರುಚಿ", transliteration: "ruchi", meaning: isEng ? "Taste/Flavour" : "स्वाद" },
      { word: "ಪದಾರ್ಥಗಳು", transliteration: "padaarthagalu", meaning: isEng ? "Ingredients" : "सामग्रियां" }
    ];

  } else if (topic.cat === "Nature & Wildlife") {
    sentence1Kn = `${topic.titleKn} ಕರ್ನಾಟಕದ ಅದ್ಭುತ ಜೀವವೈವಿಧ್ಯತೆ ಮತ್ತು ನೈಸರ್ಗಿಕ ಸೌಂದರ್ಯದ ತಾಣವಾಗಿದೆ.`;
    sentence1Tr = `${topic.tr} karnaatakada adbhuta jeevavaividhyate mattu naisargika saundaryada taanavaagide.`;
    sentence1En = `${topic.titleEn} is a magnificent hub of biodiversity and pristine natural beauty in Karnataka.`;
    sentence1Hi = `${topic.titleHi} *कर्नाटक* की अद्भुत जैव विविधता और प्राकृतिक सुंदरता का एक प्रमुख स्थल है।`;
    sentence1NotesEn = "Genitive 'karnaatakada' (of Karnataka) + 'jeevavaividhyate' (biodiversity) + genitive 'saundaryada' (of beauty) + 'taanavaagide' (is place).";
    sentence1NotesHi = "'jeevavaividhyate' का अर्थ 'जैव विविधता' है। 'saundaryada' में संबंध कारक है। 'taanavaagide' का अर्थ 'स्थल है' होता है।";

    sentence2Kn = "ಇಲ್ಲಿ ಅನೇಕ ಅಪರೂಪದ ಪ್ರಾಣಿ ಮತ್ತು ಪಕ್ಷಿ ಸಂಕುಲಗಳು ವಾಸಿಸುತ್ತವೆ.";
    sentence2Tr = "Illi aneka aparoopada praani mattu pakshi sankulagalu vaasisuttave.";
    sentence2En = "Several rare species of wild animals and colorful birds inhabit this ecosystem.";
    sentence2Hi = "यहाँ कई दुर्लभ वन्यजीव और पक्षी प्रजातियाँ निवास करती हैं।";
    sentence2NotesEn = "Adverb 'illi' (here) + genitive 'aparoopada' (of rare) + plural subject 'sankulagalu' (species/groups) + neuter plural verb 'vaasisuttave' (they inhabit).";
    sentence2NotesHi = "'illi' का अर्थ 'यहाँ' है। 'sankulagalu' का अर्थ 'प्रजातियाँ/समूह' है। क्रिया 'vaasisuttave' नपुंसकलिंग बहुवचन है (रहते हैं)।";

    sentence3Kn = "ದಟ್ಟವಾದ ಕಾಡುಗಳು ಮತ್ತು ಹರಿಯುವ ತೊರೆಗಳು ಈ ಜಾಗಕ್ಕೆ ವಿಶೇಷ ಮೆರುಗು ನೀಡುತ್ತವೆ.";
    sentence3Tr = "Dattavaada kaadugalu mattu hariyuva toregalu ee jaagakke visheesha merugu needuttave.";
    sentence3En = "Dense tropical forests and flowing fresh streams add a magical allure to this place.";
    sentence3Hi = "घने जंगल और बहती धाराएँ इस स्थान को एक विशेष आकर्षण प्रदान करती हैं।";
    sentence3NotesEn = "Subject 'kaadugalu' (forests) + participle 'hariyuva' (flowing) + dative 'jaagakke' (to place) + verb 'needuttave' (they give).";
    sentence3NotesHi = "'kaadugalu' का अर्थ 'जंगल' है। 'jaagakke' में संप्रदान कारक है (स्थान को)। 'needuttave' का अर्थ 'प्रदान करते हैं' है।";

    sentence4Kn = "ಪ್ರಕೃತಿಯನ್ನು ಸಂರಕ್ಷಿಸುವುದು ಪ್ರತಿಯೊಬ್ಬ ನಾಗರಿಕನ ಮುಖ್ಯ ಕರ್ತವ್ಯವಾಗಿದೆ.";
    sentence4Tr = "Prakritiyannu samrakshisuvudu pratiyobba naagarikana mukhya kartavyavaagide.";
    sentence4En = "Preserving nature and wildlife is the paramount duty of every responsible citizen.";
    sentence4Hi = "प्रकृति का संरक्षण करना प्रत्येक नागरिक का मुख्य कर्तव्य है।";
    sentence4NotesEn = "Accusative 'prakritiyannu' (nature) + gerund 'samrakshisuvudu' (protecting) + genitive 'naagarikana' (of citizen) + 'kartavyavaagide' (is duty).";
    sentence4NotesHi = "'prakritiyannu' का अर्थ 'प्रकृति को' है। 'samrakshisuvudu' एक कृदंत संज्ञा है (संरक्षण करना)। 'naagarikana' का अर्थ 'नागरिक का' है।";

    sentence5Kn = "ನಾವು ಪರಿಸರ ಸಮತೋಲನವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಲು ಸದಾ ಶ್ರಮಿಸಬೇಕು.";
    sentence5Tr = "Naavu parisara samatolanavannu kaapaadikollalu sadaa shramisabeeku.";
    sentence5En = "We must constantly strive to maintain the ecological balance of our planet.";
    sentence5Hi = "हमें पर्यावरण संतुलन बनाए रखने के लिए हमेशा प्रयास करना चाहिए।";
    sentence5NotesEn = "Subject 'naavu' (we) + accusative 'samatolanavannu' (balance) + infinitive 'kaapaadikollalu' (to protect) + modal verb 'shramisabeeku' (must strive).";
    sentence5NotesHi = "'parisara' का अर्थ 'पर्यावरण' है। 'samatolanavannu' का अर्थ 'संतुलन को' है। 'shramisabeeku' का अर्थ 'प्रयास करना चाहिए' है।";

    vocabHighlight = [
      { word: "ಪ್ರಕೃತಿ", transliteration: "prakriti", meaning: isEng ? "Nature" : "प्रकृति" },
      { word: "ಕಾಡು", transliteration: "kaadu", meaning: isEng ? "Forest" : "जंगल" },
      { word: "ಪ್ರಾಣಿ", transliteration: "praani", meaning: isEng ? "Animal" : "जानवर" }
    ];

  } else {
    // General Categories 5-10: History, Education, Personality, Modern, Daily Life, Art & Lit
    sentence1Kn = `${topic.titleKn} ನಮ್ಮ ನಾಡಿನ ಮತ್ತು ಸಮಾಜದ ಪ್ರಗತಿಯಲ್ಲಿ ಮಹತ್ವದ ಪಾತ್ರವನ್ನು ಹೊಂದಿದೆ.`;
    sentence1Tr = `${topic.tr} namma naadina mattu samaajada pragatiyalli mahatvada paatravannu hondide.`;
    sentence1En = `${topic.titleEn} holds a highly significant and critical role in the progress of our land and society.`;
    sentence1Hi = `${topic.titleHi} हमारे देश और समाज की प्रगति में एक महत्वपूर्ण भूमिका निभाता है।`;
    sentence1NotesEn = "Genitive 'naadina' (of land) + 'samaajada' (of society) + locative 'prgatiyalli' (in progress) + accusative 'paatravannu' (role) + verb 'hondide' (it has).";
    sentence1NotesHi = "'naadina' का अर्थ 'देश/भूमि का' है। 'pragatiyalli' में अधिकरण कारक है (प्रगति में)। 'paatravannu' का अर्थ 'भूमिका को' है।";

    sentence2Kn = "ಇದು ಜ್ಞಾನ, ಕಲೆ ಹಾಗೂ ಸಂಸ್ಕೃತಿಯನ್ನು ಆಳವಾಗಿ ವಿಸ್ತರಿಸಲು ನೆರವಾಗುತ್ತದೆ.";
    sentence2Tr = "Idu jnaana, kale haagu samskritiyannu aalavaagi vistarisalu neravaaguttade.";
    sentence2En = "This effectively helps in deeply expanding our knowledge, arts, and cultural horizons.";
    sentence2Hi = "यह ज्ञान, कला and संस्कृति को गहराई से विस्तारित करने में मदद करता है।";
    sentence2NotesEn = "Subject 'idu' (this) + accusative 'samskritiyannu' (culture) + infinitive 'vistarisalu' (to expand) + verb 'neravaaguttade' (helps).";
    sentence2NotesHi = "'jnaana' का अर्थ 'ज्ञान' है। 'samskritiyannu' में द्वितीया विभक्ति है (संस्कृति को)। 'neravaaguttade' का अर्थ 'सहायक होता है' है।";

    sentence3Kn = "ಹಿರಿಯರು ನಮಗೆ ಕಲಿಸಿದ ಉತ್ತಮ ಮೌಲ್ಯಗಳು ಈ ಜ್ಞಾನಕ್ಕೆ ಬುನಾದಿಯಾಗಿದೆ.";
    sentence3Tr = "Hiriyaru namage kalisida uttama maulyagalu ee jnaanakke bunaadiyaagide.";
    sentence3En = "The outstanding noble values taught to us by our elders are the foundation of this wisdom.";
    sentence3Hi = "बुजुर्गों द्वारा हमें सिखाए गए अच्छे मूल्य इस ज्ञान की आधारशिला हैं।";
    sentence3NotesEn = "Subject plural 'hiriyaru' (elders) + dative pronoun 'namage' (to us) + adjective 'uttama' (good) + dative 'jnaanakke' (to knowledge) + 'bunaadiyaagide' (is foundation).";
    sentence3NotesHi = "'hiriyaru' का अर्थ 'बुजुर्ग/पूर्वज' है। 'maulyagalu' का अर्थ 'मूल्य' है। 'bunaadiyaagide' का अर्थ 'नींव/आधार है' है।";

    sentence4Kn = "ಯುವ ಪೀಳಿಗೆಯು ಇದನ್ನು ಗೌರವದಿಂದ ಕಾಪಾಡಿಕೊಂಡು ಮುನ್ನಡೆಸಬೇಕು.";
    sentence4Tr = "Yuva peelige-yu idannu gauravadinda kaapaadikondu munnadesabeeku.";
    sentence4En = "The younger generation must preserve this with respect and carry it forward.";
    sentence4Hi = "युवा पीढ़ी को इसे सम्मान के साथ सुरक्षित रखना चाहिए और आगे बढ़ाना चाहिए।";
    sentence4NotesEn = "Subject 'peelige-yu' (generation indeed) + instrumental 'gauravadinda' (with respect) + modal verb 'munnadesabeeku' (must lead forward).";
    sentence4NotesHi = "'peelige-yu' का अर्थ 'पीढ़ी' है। 'gauravadinda' में करण कारक है (सम्मान से)। 'munnadesabeeku' का अर्थ 'आगे ले जाना चाहिए' है।";

    sentence5Kn = "ಇದು ನಮ್ಮ ಒಟ್ಟಾರೆ ವಿಕಾಸಕ್ಕೆ ಮತ್ತು ಸುಂದರ ಭವಿಷ್ಯಕ್ಕೆ ಅತಿ ಅಗತ್ಯವಾಗಿದೆ.";
    sentence5Tr = "Idu namma ottaare vikaasakke mattu sundara bhavishyakke ati agatyavaagide.";
    sentence5En = "This is extremely essential for our overall evolution and a brighter future.";
    sentence5Hi = "यह हमारे समग्र विकास और उज्ज्वल भविष्य के लिए अत्यंत आवश्यक है।";
    sentence5NotesEn = "Dative 'vikaasakke' (to evolution) + dative 'bhavishyakke' (to future) + adjective 'ati' (very) + 'agatyavaagide' (is necessary).";
    sentence5NotesHi = "'vikaasakke' का अर्थ 'विकास के लिए' है। 'bhavishyakke' का अर्थ 'भविष्य के लिए' है। 'agatyavaagide' का अर्थ 'आवश्यक है' है।";

    vocabHighlight = [
      { word: "ಜ್ಞಾನ", transliteration: "jnaana", meaning: isEng ? "Knowledge/Wisdom" : "ज्ञान" },
      { word: "ಗೌರವ", transliteration: "gaurava", meaning: isEng ? "Respect/Pride" : "सम्मान" },
      { word: "ಭವಿಷ್ಯ", transliteration: "bhavishya", meaning: isEng ? "Future" : "भविष्य" }
    ];
  }

  // Build Essay paragraphs and sentences
  const kannadaParagraph = `${sentence1Kn} ${sentence2Kn} ${sentence3Kn} ${sentence4Kn} ${sentence5Kn}`;
  const translation = isEng 
    ? `${sentence1En} ${sentence2En} ${sentence3En} ${sentence4En} ${sentence5En}`
    : `${sentence1Hi} ${sentence2Hi} ${sentence3Hi} ${sentence4Hi} ${sentence5Hi}`;

  const sentences = [
    {
      kannadaSentence: sentence1Kn,
      transliteration: sentence1Tr,
      translation: isEng ? sentence1En : sentence1Hi,
      grammarNotes: isEng ? sentence1NotesEn : sentence1NotesHi
    },
    {
      kannadaSentence: sentence2Kn,
      transliteration: sentence2Tr,
      translation: isEng ? sentence2En : sentence2Hi,
      grammarNotes: isEng ? sentence2NotesEn : sentence2NotesHi
    },
    {
      kannadaSentence: sentence3Kn,
      transliteration: sentence3Tr,
      translation: isEng ? sentence3En : sentence3Hi,
      grammarNotes: isEng ? sentence3NotesEn : sentence3NotesHi
    },
    {
      kannadaSentence: sentence4Kn,
      transliteration: sentence4Tr,
      translation: isEng ? sentence4En : sentence4Hi,
      grammarNotes: isEng ? sentence4NotesEn : sentence4NotesHi
    },
    {
      kannadaSentence: sentence5Kn,
      transliteration: sentence5Tr,
      translation: isEng ? sentence5En : sentence5Hi,
      grammarNotes: isEng ? sentence5NotesEn : sentence5NotesHi
    }
  ];

  return {
    id: topic.id,
    category: topic.cat,
    title: topic.titleKn,
    titleTranslation: isEng ? topic.titleEn : topic.titleHi,
    titleTransliteration: topic.tr,
    paragraphs: [
      {
        kannadaParagraph,
        translation,
        sentences
      }
    ],
    vocabHighlight
  };
}
