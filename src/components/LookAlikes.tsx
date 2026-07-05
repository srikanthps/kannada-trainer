import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Volume2,
  HelpCircle,
  CheckCircle2,
  XCircle,
  Eye,
  BookOpen,
  Trophy,
  Brain,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Info,
  ChevronLeft,
  ChevronRight,
  PenTool
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { KANNADA_ALPHABETS } from '../data/alphabets';

interface LookAlikeChar {
  char: string;
  transliteration: string;
  name: string;
  pronounced: string;
  keyFeature: string;
}

interface LookAlikeGroup {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  characters: LookAlikeChar[];
  distinctionRule: string;
}

interface ProgressiveChar {
  char: string;
  transliteration: string;
  name: string;
  pronounced: string;
  strokeDescription: string;
  transitionFromPrev: string;
}

interface ProgressiveGroup {
  id: string;
  title: string;
  description: string;
  theme: string;
  characters: ProgressiveChar[];
}

const LOOK_ALIKE_GROUPS: LookAlikeGroup[] = [
  {
    id: 'ra-ta',
    title: 'ರ (ra) vs ತ (ta)',
    description: 'Frequently confused because of the identical circular outer boundary.',
    difficulty: 'Beginner',
    distinctionRule: 'ರ (ra) is a plain, unbroken circle. ತ (ta) folds inwards at the left side, introducing a small horizontal indentation.',
    characters: [
      {
        char: 'ರ',
        transliteration: 'ra',
        name: 'Ra',
        pronounced: 'like "ru" in "run"',
        keyFeature: 'Perfect clean circle with a top tick (Tala-kattu).'
      },
      {
        char: 'ತ',
        transliteration: 'ta',
        name: 'Ta',
        pronounced: 'soft dental "t", like "tu" in "tuba"',
        keyFeature: 'Has an inward loop fold on the left middle boundary.'
      }
    ]
  },
  {
    id: 'ma-ya',
    title: 'ಮ (ma) vs ಯ (ya)',
    description: 'The size of the initial loop completely changes the phoneme.',
    difficulty: 'Beginner',
    distinctionRule: 'ಮ (ma) has a tiny starting loop on the left. ಯ (ya) has a massive, wide open loop/curve on the left.',
    characters: [
      {
        char: 'ಮ',
        transliteration: 'ma',
        name: 'Ma',
        pronounced: 'like "mu" in "mud"',
        keyFeature: 'Tiny prefix loop. The letter body is compact.'
      },
      {
        char: 'ಯ',
        transliteration: 'ya',
        name: 'Ya',
        pronounced: 'like "yu" in "yummy"',
        keyFeature: 'Huge prefix curve, nearly double the size of ಮ loop.'
      }
    ]
  },
  {
    id: 'pa-va-pha',
    title: 'ಪ (pa) vs ವ (va) vs ಫ (pha)',
    description: 'Minor strokes and closures change a soft sound into an aspirated one.',
    difficulty: 'Intermediate',
    distinctionRule: 'ಪ (pa) is open at the top right. ವ (va) is completely closed at the top left. ಫ (pha) is structurally like ಪ but has a vertical aspiration slash at the bottom.',
    characters: [
      {
        char: 'ಪ',
        transliteration: 'pa',
        name: 'Pa',
        pronounced: 'like "pu" in "punch"',
        keyFeature: 'Open at the top right. Classic "U" shaped start.'
      },
      {
        char: 'ವ',
        transliteration: 'va',
        name: 'Va',
        pronounced: 'v/w fluid sound, like "va" in "vast"',
        keyFeature: 'Closed loop on the left, turning it into a round capsule.'
      },
      {
        char: 'ಫ',
        transliteration: 'pha',
        name: 'Pha',
        pronounced: 'strongly aspirated "p-ha", like "p" in "puff"',
        keyFeature: 'Open top like ಪ but has a strong vertical stroke underneath.'
      }
    ]
  },
  {
    id: 'da-dha',
    title: 'ದ (da) vs ಧ (dha)',
    description: 'Distinguishing aspirated from unaspirated through bottom strokes.',
    difficulty: 'Intermediate',
    distinctionRule: 'ದ (da) has a smooth curved bottom outline. ಧ (dha) has an added vertical aspiration stroke at the absolute bottom and often includes a focal center dot.',
    characters: [
      {
        char: 'ದ',
        transliteration: 'da',
        name: 'Da',
        pronounced: 'soft dental "d", like "the" (without "th" buzz)',
        keyFeature: 'Clean bottom curve without any descending lines.'
      },
      {
        char: 'ಧ',
        transliteration: 'dha',
        name: 'Dha',
        pronounced: 'aspirated dental "d", like "ad-here"',
        keyFeature: 'Has a prominent vertical tail descending below and a middle dot.'
      }
    ]
  },
  {
    id: 'ba-o-oo-au',
    title: 'ಬ (ba) vs ಒ (o) vs ಓ (oo) vs ಔ (au)',
    description: 'Vowels vs Consonants that share starting circular segments.',
    difficulty: 'Advanced',
    distinctionRule: 'ಬ (ba) is a consonant with a top tick. ಒ (o), ಓ (oo), and ಔ (au) are standalone vowels that lack the top tick and carry additional curly flags at the upper right.',
    characters: [
      {
        char: 'ಬ',
        transliteration: 'ba',
        name: 'Ba',
        pronounced: 'like "bu" in "butter"',
        keyFeature: 'Consonant. Clean closed bottom loop with top talakattu tick.'
      },
      {
        char: 'ಒ',
        transliteration: 'o',
        name: 'O',
        pronounced: 'short vowel "o", like "o" in "omit"',
        keyFeature: 'Vowel. Open loop beginning with no top tick, and simple rear turn.'
      },
      {
        char: 'ಓ',
        transliteration: 'ō',
        name: 'Oo',
        pronounced: 'long vowel "oo", like "o" in "vote"',
        keyFeature: 'Vowel. Identical to ಒ but features an upward vertical swirl hook.'
      },
      {
        char: 'ಔ',
        transliteration: 'au',
        name: 'Au',
        pronounced: 'diphthong vowel "au", like "ou" in "out"',
        keyFeature: 'Vowel. Features a double horizontal wave cap at the top right.'
      }
    ]
  },
  {
    id: 'gha-sha',
    title: 'ಘ (gha) vs ಷ (sha)',
    description: 'Very similar dual-curve consonants with minor interior features.',
    difficulty: 'Advanced',
    distinctionRule: 'ಘ (gha) has an aspiration stroke underneath and no internal markings. ಷ (sha) lacks the bottom tick but has an internal diagonal strike-through.',
    characters: [
      {
        char: 'ಘ',
        transliteration: 'gha',
        name: 'Gha',
        pronounced: 'aspirated "g", like "log-hut"',
        keyFeature: 'Double hump curve, top tick, and an active bottom aspiration line.'
      },
      {
        char: 'ಷ',
        transliteration: 'sha',
        name: 'Sha',
        pronounced: 'retroflex "sh", curl tongue back',
        keyFeature: 'Double hump curve with a prominent internal diagonal line crossing.'
      }
    ]
  },
  {
    id: 'la-u',
    title: 'ಲ (la) vs ಉ (u)',
    description: 'A lateral consonant vs a basic high-front vowel.',
    difficulty: 'Intermediate',
    distinctionRule: 'ಲ (la) finishes with a simple flat ending. ಉ (u) curls outwards into an active climbing tail on the right side.',
    characters: [
      {
        char: 'ಲ',
        transliteration: 'la',
        name: 'La',
        pronounced: 'like "lu" in "lunch"',
        keyFeature: 'Consonant. Elegant loop that simply drops off at the top right.'
      },
      {
        char: 'ಉ',
        transliteration: 'u',
        name: 'U',
        pronounced: 'short vowel "u", like "u" in "push"',
        keyFeature: 'Vowel. Sweeps into a long, ascending curly tail on the right.'
      }
    ]
  }
];

const PROGRESSIVE_GROUPS: ProgressiveGroup[] = [
  {
    id: 'cup-loop',
    title: 'The Cup-and-Loop Base',
    description: 'These characters are built on an open or closed bowl/cup shape. Master this shape first to unlock 6 general consonants.',
    theme: 'U-shape Bowl Base',
    characters: [
      {
        char: 'ಪ',
        transliteration: 'pa',
        name: 'Pa',
        pronounced: 'like "pu" in "puck" - soft unaspirated labial p',
        strokeDescription: 'Start at the top left, curve down to form an open U-cup, and end with the horizontal bar and top tick.',
        transitionFromPrev: 'Primary baseline character for the open cup-shaped family.'
      },
      {
        char: 'ಫ',
        transliteration: 'pha',
        name: 'Pha',
        pronounced: 'aspirated p, like "ph" in "potholder"',
        strokeDescription: 'Draw a complete ಪ shape, then add a sharp vertical slice/stroke projecting below the middle bottom curve.',
        transitionFromPrev: 'Simply add a vertical aspiration line below the center of ಪ.'
      },
      {
        char: 'ವ',
        transliteration: 'va',
        name: 'Va',
        pronounced: 'soft v/w sound, like "va" in "vase"',
        strokeDescription: 'Draw a circle/loop at the starting left point, sweep right into a broad shape, and cap with a top tick.',
        transitionFromPrev: 'Close the open left entry of ಪ into a complete closed loop.'
      },
      {
        char: 'ಸ',
        transliteration: 'sa',
        name: 'Sa',
        pronounced: 'as in "sun" - clean sibilant',
        strokeDescription: 'Write ವ, but construct a neat horizontal looping wave tail extension on the outside left wall.',
        transitionFromPrev: 'Add a sideways horizontal knot/tail on the left side of ವ.'
      },
      {
        char: 'ಹ',
        transliteration: 'ha',
        name: 'Ha',
        pronounced: 'as in "hut" - voiced glottal h',
        strokeDescription: 'Write ವ, but loop the bottom right corner inwards to make a tiny clockwise spiral ending.',
        transitionFromPrev: 'Curl the bottom-right leg of ವ inward into a small loop.'
      },
      {
        char: 'ನ',
        transliteration: 'na',
        name: 'Na',
        pronounced: 'dental n, like "nu" in "nut"',
        strokeDescription: 'Draw a small loop at the left, drop down slightly, sweep broad right, and finish with a top tick.',
        transitionFromPrev: 'Extend the loop to sweep broadly with a larger baseline.'
      }
    ]
  },
  {
    id: 'circular-roots',
    title: 'The Circular & Oval Root',
    description: 'These characters are grounded on a single perfect circle or loop base. Notice how minor indentations or internal marks shift the phonetics.',
    theme: 'Circular base',
    characters: [
      {
        char: 'ರ',
        transliteration: 'ra',
        name: 'Ra',
        pronounced: 'tapped r, like "ra" in "run"',
        strokeDescription: 'Draw a clean, flawless circle. End with the top horizontal line and a tick on the top edge.',
        transitionFromPrev: 'Primary base. Just a clean loop/circle with a top tick.'
      },
      {
        char: 'ತ',
        transliteration: 'ta',
        name: 'Ta',
        pronounced: 'soft dental t, like "th" in "with"',
        strokeDescription: 'Draw the circle, but at the left middle boundary, pull the line sharply inwards to create a small fold/notch.',
        transitionFromPrev: 'Indent the outer left border of ರ inwards.'
      },
      {
        char: 'ಠ',
        transliteration: 'ṭha',
        name: 'Tha (retroflex)',
        pronounced: 'aspirated retroflex t, curl tongue back, like "th" in "anthill"',
        strokeDescription: 'Draw a perfect circle like ರ, but place a single distinct dot or small hollow ring in the very center.',
        transitionFromPrev: 'Inside ರ, add a single dot in the middle.'
      },
      {
        char: 'ಥ',
        transliteration: 'tha (dental)',
        name: 'Tha (dental)',
        pronounced: 'aspirated dental t, like "th" in "thin" but with breath',
        strokeDescription: 'Draw a circle with an inward left fold (like ತ), but add a dot inside and a vertical slice below.',
        transitionFromPrev: 'Combine the fold of ತ, the central dot of ಠ, and add a bottom aspiration tick.'
      },
      {
        char: 'ಕ',
        transliteration: 'ka',
        name: 'Ka',
        pronounced: 'unaspirated k, like "cu" in "cup"',
        strokeDescription: 'Draw two vertical looping halves that intersect like an slanted number "8", then cap with the top tick.',
        transitionFromPrev: 'Turn the single circular border of ರ into a double loop resembling a vertical figure-eight.'
      }
    ]
  },
  {
    id: 'double-hump',
    title: 'The Double-Hump & Flat Base',
    description: 'This group features double-arched waveforms, reminiscent of camel humps. Subtle additions of slashes, dots, and loop sizes define the consonant.',
    theme: 'Camel Humps waveform',
    characters: [
      {
        char: 'ಯ',
        transliteration: 'ya',
        name: 'Ya',
        pronounced: 'like "yu" in "yummy"',
        strokeDescription: 'Draw a huge open loop/cup on the left, then two adjacent rolling horizontal humps heading right, ended with the top tick.',
        transitionFromPrev: 'Primary base. Notice the very wide cup-like curve on the left.'
      },
      {
        char: 'ಮ',
        transliteration: 'ma',
        name: 'Ma',
        pronounced: 'like "mu" in "mud"',
        strokeDescription: 'Shrink the left loop into a tiny bead at the bottom left, then draw the same two adjacent humps and top tick.',
        transitionFromPrev: 'Pinch/shrink the giant left loop of ಯ into a tiny starting bead.'
      },
      {
        char: 'ಘ',
        transliteration: 'gha',
        name: 'Gha',
        pronounced: 'strongly aspirated g, like "gh" in "dog-house"',
        strokeDescription: 'Write the double humps, but keep the initial loop small, adding a vertical aspiration stroke below.',
        transitionFromPrev: 'Keep the double hump of ಮ but remove the starting loop, adding a vertical line below.'
      },
      {
        char: 'ಷ',
        transliteration: 'ṣa',
        name: 'Sha (retroflex)',
        pronounced: 'sh sound with tongue curled back, like "sh" in "shore"',
        strokeDescription: 'Write the double humps exactly like ಘ, but omit the bottom tick and add a clean diagonal slash across the middle.',
        transitionFromPrev: 'Add a diagonal slice across the middle hump of the ಘ/ಮ structure.'
      },
      {
        char: 'ಧ',
        transliteration: 'dha',
        name: 'Dha',
        pronounced: 'aspirated dental d, like "dh" in "adhere"',
        strokeDescription: 'Draw a circular neck on the left leading down, then double humps with a bottom stroke and a center dot.',
        transitionFromPrev: 'Draw a downward circular loop on the left and place a dot in the middle of the humps.'
      },
      {
        char: 'ದ',
        transliteration: 'da',
        name: 'Da (dental)',
        pronounced: 'soft dental d, like "th" in "then"',
        strokeDescription: 'Draw a left loop, head down and curve right, then draw double humps with a top tick.',
        transitionFromPrev: 'Dental equivalent, simplifying the humps into a continuous wave.'
      }
    ]
  },
  {
    id: 'arches-crests',
    title: 'The Rounded Arch & Box Family',
    description: 'Built on high, clean arches. Learning these consonants together helps you transition from open forms into box-like loops.',
    theme: 'Smooth arching curves',
    characters: [
      {
        char: 'ಗ',
        transliteration: 'ga',
        name: 'Ga',
        pronounced: 'unaspirated g, like "gu" in "gum"',
        strokeDescription: 'Draw a single, clean vertical arch (like an upside-down U) and cap with the top tick.',
        transitionFromPrev: 'Primary base. The simplest arch in the entire alphabet.'
      },
      {
        char: 'ಬ',
        transliteration: 'ba',
        name: 'Ba',
        pronounced: 'unaspirated b, like "bu" in "bus"',
        strokeDescription: 'Bring the left leg of the arch down and circle around, completing it into a neat oval box with a top tick.',
        transitionFromPrev: 'Close the open bottom-left leg of ಗ to form a complete oval box.'
      },
      {
        char: 'ಭ',
        transliteration: 'bha',
        name: 'Bha',
        pronounced: 'aspirated b, like "bh" in "abhor"',
        strokeDescription: 'Write ಬ but loop the top left downwards into a central notch, then add a vertical aspiration line below.',
        transitionFromPrev: 'Modify ಬ by looping the top wall down and adding a bottom slash.'
      },
      {
        char: 'ಲ',
        transliteration: 'la',
        name: 'La',
        pronounced: 'like "lu" in "lunch"',
        strokeDescription: 'Draw two adjacent high arches/humps sitting side by side with flat bottom ends.',
        transitionFromPrev: 'Expand the single arch of ಗ into two side-by-side arches.'
      },
      {
        char: 'ಳ',
        transliteration: 'ḷa',
        name: 'La (retroflex)',
        pronounced: 'retroflex l, curl tongue back to touch palate',
        strokeDescription: 'Draw the two arches of ಲ, but close them into overlapping circular spirals facing inwards.',
        transitionFromPrev: 'Curl and loop both arches of ಲ into closed circular knots.'
      },
      {
        char: 'ಶ',
        transliteration: 'śa',
        name: 'Sha (palatal)',
        pronounced: 'soft sh sound, like "sh" in "sugar"',
        strokeDescription: 'Draw three descending cursive rolling loops in a beautiful decorative side-by-side chain.',
        transitionFromPrev: 'Extend the twin arches of ಲ into a cascading sequence of three decorative loops.'
      }
    ]
  },
  {
    id: 'waves-bridges',
    title: 'The Waves & Loop-Bridges',
    description: 'These consonants are drawn using a starting base loop that bridges across horizontally, requiring steady hand coordination.',
    theme: 'Loop-to-bridge pathways',
    characters: [
      {
        char: 'ಚ',
        transliteration: 'ca',
        name: 'Ca',
        pronounced: 'unaspirated ch, like "chu" in "chunky"',
        strokeDescription: 'Draw a circular loop at the bottom, rise up, draw a straight horizontal bridge to the right, and cap with a top tick.',
        transitionFromPrev: 'Primary base. Loop at bottom, bridge at top.'
      },
      {
        char: 'ಖ',
        transliteration: 'kha',
        name: 'Kha',
        pronounced: 'strongly aspirated k, like "kh" in "block-head"',
        strokeDescription: 'Draw a horizontal loop at the bottom, curve up, map a secondary deep loop to the right and top tick.',
        transitionFromPrev: 'Replace the flat horizontal bridge of ಚ with a secondary vertical loop.'
      },
      {
        char: 'ಜ',
        transliteration: 'ja',
        name: 'Ja',
        pronounced: 'unaspirated j, like "ju" in "justice"',
        strokeDescription: 'Draw a left loop, snake down and curl up like "3", and draw a horizontal cross-bridge in the middle.',
        transitionFromPrev: 'Draw a wave resembling a horizontal number 3 with a middle bridge.'
      },
      {
        char: 'ಞ',
        transliteration: 'ña',
        name: 'Nya',
        pronounced: 'nasal y, like "ny" in "canyon"',
        strokeDescription: 'Draw the ಜ shape of "3", but pull a long horizontal tail extension further rightward.',
        transitionFromPrev: 'Add a trailing right-hand tail wing to the base of ಜ.'
      },
      {
        char: 'ಣ',
         transliteration: 'ṇa',
        name: 'Na (retroflex)',
        pronounced: 'retroflex n, curl tongue back, like "n" in "under"',
        strokeDescription: 'Draw three continuous high waves side-by-side horizontally, terminating with a straight vertical downward bar.',
        transitionFromPrev: 'Form three vertical loop crests in a row before ending.'
      }
    ]
  },
  {
    id: 'snake-serpent',
    title: 'The "S" Serpent & Knots',
    description: 'This family relies on a curvy, serpentine "S"-shaped stroke. Master the flow of this S-curve to write these retroflex consonants.',
    theme: 'S-curve serpentine flow',
    characters: [
      {
        char: 'ಡ',
        transliteration: 'ḍa',
        name: 'Da (retroflex)',
        pronounced: 'retroflex d, tongue curled back, like "du" in "duck"',
        strokeDescription: 'Draw a beautiful, flowing letter "S" with a top tick.',
        transitionFromPrev: 'Primary base. A clean snake-like S shape with a tick.'
      },
      {
        char: 'ಢ',
        transliteration: 'ḍha',
        name: 'Dha (retroflex)',
        pronounced: 'aspirated retroflex d, tongue curled back, like "dh" in "red-haired"',
        strokeDescription: 'Draw the "S" of ಡ, but close the final bottom tail into a secure loop or knot.',
        transitionFromPrev: 'Tie a small clockwise loop/knot at the final tail of ಡ.'
      },
      {
        char: 'ಙ',
        transliteration: 'ṅa',
        name: 'Nga',
        pronounced: 'nasal ng sound, like "ng" in "sing"',
        strokeDescription: 'Draw the "S" of ಡ exactly, then add a single distinct dot on its right hand side.',
        transitionFromPrev: 'Place a dot on the right side of ಡ.'
      },
      {
        char: 'ಟ',
        transliteration: 'ṭa',
        name: 'Ta (retroflex)',
        pronounced: 'retroflex t, tongue curled back, like "t" in "table" (Indian English)',
        strokeDescription: 'Draw a broad curve open on the right (like a backwards C), with a single dot in the middle.',
        transitionFromPrev: 'Open the curves of ಡ into a wide backwards-C shape with a center dot.'
      },
      {
        char: 'ಝ',
        transliteration: 'jha',
        name: 'Jha',
        pronounced: 'aspirated j, like "jh" in "sledge-hammer"',
        strokeDescription: 'Start with a small loop, draw double vertical crests with an angled tuck, and pull a long trailing right leg and vertical stroke.',
        transitionFromPrev: 'Double crests with a sharp downward angle notch and right hand tail.'
      },
      {
        char: 'ಛ',
        transliteration: 'cha',
        name: 'Cha',
        pronounced: 'aspirated ch, like "ch" in "match"',
        strokeDescription: 'Draw a small loop, drop down, curve up like a deep spoon, add a vertical stroke underneath and top tick.',
        transitionFromPrev: 'Create a deep upward bowl from the start loop, adding a vertical aspiration slash underneath.'
      }
    ]
  }
];

const LOOK_ALIKE_GROUPS_HI: Record<string, Partial<LookAlikeGroup>> = {
  'ra-ta': {
    title: 'ರ (ra) बनाम ತ (ta)',
    description: 'र और त में अक्सर भ्रम होता है क्योंकि दोनों की बाहरी गोलाकार आकृति सामान्य रूप से समान होती है।',
    distinctionRule: 'ರ (ra) एक साधारण, बिना कटा हुआ चक्र है। ತ (ta) अपनी बाईं ओर भीतर की तरफ मुड़ता है, जिससे एक छोटा सा क्षैतिज मोड़ बनता है।',
    characters: [
      {
        char: 'ರ',
        transliteration: 'ra',
        name: 'र (Ra)',
        pronounced: 'हिंदी के "र" की तरह (जैसे "रथ")।',
        keyFeature: 'एकदम गोल चक्र जिसके शीर्ष पर एक टिक (टीका) होता है।'
      } as LookAlikeChar,
      {
        char: 'ತ',
        transliteration: 'ta',
        name: 'त (Ta)',
        pronounced: 'दंत्य "त", जैसे "तरबूज" में।',
        keyFeature: 'इसकी बाईं ओर की सीमा पर भीतर की तरफ एक मोड़ होता है।'
      } as LookAlikeChar
    ]
  },
  'ma-ya': {
    title: 'ಮ (ma) बनाम ಯ (ya)',
    description: 'बाईं ओर के शुरुआती लूप का आकार अक्षर की ध्वनि को पूरी तरह बदल देता है।',
    distinctionRule: 'ಮ (ma) के बाईं ओर एक बहुत छोटा प्रारंभिक लूप होता है। ಯ (ya) के बाईं ओर एक बड़ा खुला लूप या वक्र होता है।',
    characters: [
      {
        char: 'ಮ',
        transliteration: 'ma',
        name: 'म (Ma)',
        pronounced: 'हिंदी के "म" की तरह (जैसे "मटर")।',
        keyFeature: 'बाईं ओर बहुत छोटा प्रारंभिक बिंदु/लूप। अक्षर का शरीर छोटा और घना है।'
      } as LookAlikeChar,
      {
        char: 'ಯ',
        transliteration: 'ya',
        name: 'य (Ya)',
        pronounced: 'हिंदी के "य" की तरह (जैसे "यज्ञ")।',
        keyFeature: 'बाईं ओर बहुत बड़ा घुमावدار क्षेत्र, जो ಮ के लूप से लगभग दोगुना बड़ा है।'
      } as LookAlikeChar
    ]
  },
  'pa-va-pha': {
    title: 'ಪ (pa) बनाम ವ (va) बनाम ಫ (pha)',
    description: 'छोटे स्ट्रोक और घुमावदार बंद हिस्से कोमल ध्वनि को महाप्राण में बदल देते हैं।',
    distinctionRule: 'ಪ (pa) ऊपर दाईं ओर खुला है। ವ (va) ऊपर बाईं ओर पूरी तरह बंद है। ಫ (pha) संरचना में ಪ की तरह ही है लेकिन इसके नीचे एक खड़ी रेखा (महाप्राण सूचक) होती है।',
    characters: [
      {
        char: 'ಪ',
        transliteration: 'pa',
        name: 'प (Pa)',
        pronounced: 'हिंदी के "प" की तरह (जैसे "पतंग")।',
        keyFeature: 'ऊपर दाईं ओर खुला हिस्सा। अंग्रेजी के "U" अक्षर जैसा आकार।'
      } as LookAlikeChar,
      {
        char: 'ವ',
        transliteration: 'va',
        name: 'व (Va)',
        pronounced: 'हिंदी के "व" की तरह (जैसे "वन")।',
        keyFeature: 'बाईं ओर पूरी तरह बंद गोल घेरा जो इसे एक सुंदर वलय का आकार देता है।'
      } as LookAlikeChar,
      {
        char: 'ಫ',
        transliteration: 'pha',
        name: 'फ (Pha)',
        pronounced: 'हिंदी के "फ" की तरह (जैसे "फल")।',
        keyFeature: 'प (ಪ) की तरह ऊपर से खुला परंतु नीचे एक खड़ी रेखा का जोड़।'
      } as LookAlikeChar
    ]
  },
  'da-dha': {
    title: 'ದ (da) बनाम ಧ (dha)',
    description: 'नीचे के स्ट्रोक द्वारा अल्पप्राण और महाप्राण ध्वनियों का अंतर पहचानना।',
    distinctionRule: 'ದ (da) का नीचे का हिस्सा चिकना और घुमावदार होता है। ಧ (dha) के बिल्कुल नीचे महाप्राण सूचक खड़ी रेखा होती है और अक्सर बीच में एक बिंदु होता है।',
    characters: [
      {
        char: 'ದ',
        transliteration: 'da',
        name: 'द (Da)',
        pronounced: 'हिंदी के "द" की तरह (जैसे "दरवाजा")।',
        keyFeature: 'नीचे कोई बिना कटी हुई रेखा नहीं है, सुंदर चिकना वक्र।'
      } as LookAlikeChar,
      {
        char: 'ಧ',
        transliteration: 'dha',
        name: 'ध (Dha)',
        pronounced: 'हिंदी के "ध" की तरह (जैसे "धनुष")।',
        keyFeature: 'नीचे की तरफ एक स्पष्ट खड़ी रेखा और बीच में एक बिंदु।'
      } as LookAlikeChar
    ]
  },
  'ba-o-oo-au': {
    title: 'ಬ (ba) बनाम ಒ (o) बनाम ಓ (oo) बनाम ಔ (au)',
    description: 'शुरुआती गोलाकार हिस्से वाले स्वर बनाम व्यंजन।',
    distinctionRule: 'ಬ (ba) एक व्यंजन है जिसके ऊपर टिक (Tala-kattu) होता है। ಒ (o), ಓ (oo), और ಔ (au) स्वतंत्र स्वर हैं जिनके ऊपर कोई टिक नहीं होता और वे दाईं ओर अतिरिक्त वक्राकार पूँछ धारण करते हैं।',
    characters: [
      {
        char: 'ಬ',
        transliteration: 'ba',
        name: 'ब (Ba)',
        pronounced: 'हिंदी के "ब" की तरह (जैसे "बकरी")।',
        keyFeature: 'व्यंजन। ऊपर टिक के साथ बंद अंडाकार आकृति।'
      } as LookAlikeChar,
      {
        char: 'ಒ',
        transliteration: 'o',
        name: 'ओ (O - ह्रस्व)',
        pronounced: 'हिंदी की लघु "ओ" जैसी अल्प ध्वनि।',
        keyFeature: 'स्वर। बिना किसी ऊपर की टिक के ऊपर खुला हुआ।'
      } as LookAlikeChar,
      {
        char: 'ಓ',
        transliteration: 'ō',
        name: 'ओ (Oo - दीर्घ)',
        pronounced: 'सामान्य हिंदी का दीर्घ "ओ" स्वर।',
        keyFeature: 'स्वर। ఒ के समान ही है परंतु इसके ऊपर एक उठती हुई मुकुट रेखा है।'
      } as LookAlikeChar,
      {
        char: 'ಔ',
        transliteration: 'au',
        name: 'औ (Au)',
        pronounced: 'हिंदी स्वर "औ" की तरह (जैसे "औषध")।',
        keyFeature: 'स्वर। ऊपर दाईं ओर दोहरी लहरदार रेखा।'
      } as LookAlikeChar
    ]
  },
  'gha-sha': {
    title: 'ಘ (gha) बनाम ಷ (sha)',
    description: 'बहुत मिलते-जुलते दोहरे कूबड़ वाले व्यंजन जिनमें सूक्ष्म आंतरिक अंतर होता है।',
    distinctionRule: 'ಘ (gha) के नीचे एक खड़ी रेखा (महाप्राण) होती है और अंदर कोई रेखा नहीं होती। ಷ (sha) में नीचे कोई रेखा नहीं होती परंतु अंदर एक तिरछी काटने वाली रेखा होती है।',
    characters: [
      {
        char: 'ಘ',
        transliteration: 'gha',
        name: 'घ (Gha)',
        pronounced: 'हिंदी के "घ" की तरह (जैसे "घर")।',
        keyFeature: 'दोहरा घुमावदार कूबड़, ऊपर टिक और नीचे एक खड़ी रेखा।'
      } as LookAlikeChar,
      {
        char: 'ಷ',
        transliteration: 'sha',
        name: 'ष (Sha)',
        pronounced: 'मूर्धन्य "ष" की तरह (जैसे "षट्कोण")।',
        keyFeature: 'दोहरे कूबड़ वाली आकृति जिसके पेट में एक तिरछी रेखा होती है।'
      } as LookAlikeChar
    ]
  },
  'la-u': {
    title: 'ಲ (la) बनाम ಉ (u)',
    description: 'एक अंतस्थ व्यंजन बनाम एक बुनियादी स्वर।',
    distinctionRule: 'ಲ (la) एक साधारण समतल सिरे पर समाप्त होता है। ಉ (u) दाईं ओर एक लंबी, ऊपर उठती हुई घुमावदार पूँछ पर समाप्त होता है।',
    characters: [
      {
        char: 'ಲ',
        transliteration: 'la',
        name: 'ल (La)',
        pronounced: 'हिंदी के "ल" की तरह (जैसे "लड़का")।',
        keyFeature: 'व्यंजन। सुंदर वलय जो ऊपर दाईं ओर बस समाप्त हो जाता है।'
      } as LookAlikeChar,
      {
        char: 'ಉ',
        transliteration: 'u',
        name: 'उ (U)',
        pronounced: 'हिंदी स्वर "उ" की तरह (जैसे "उल्लू")।',
        keyFeature: 'स्वर। दाईं ओर एक उठती हुई घुमावदार पूँछ।'
      } as LookAlikeChar
    ]
  }
};

const PROGRESSIVE_GROUPS_HI: Record<string, Partial<ProgressiveGroup>> = {
  'cup-loop': {
    title: 'प्याले और लूप का आधार',
    description: 'ये अक्षर एक खुले या बंद प्याले/U-आकार पर आधारित हैं। सबसे पहले इस मूल आकार को समझें ताकि 6 व्यंजन आसानी से याद हो सकें।',
    theme: 'U-आकार कटोरी आधार',
    characters: [
      {
        char: 'ಪ',
        transliteration: 'pa',
        name: 'प (Pa)',
        pronounced: 'प की तरह साधारण अल्पप्राण ओष्ठ्य ध्वनि।',
        strokeDescription: 'ऊपर बाईं ओर से शुरू करें, नीचे लाकर U-प्याला बनाएं, और ऊपर क्षैतिज रेखा तथा टिक के साथ पूरा करें।',
        transitionFromPrev: 'इस परिवार का बुनियादी प्रारंभिक वर्ण।'
      } as ProgressiveChar,
      {
        char: 'ಫ',
        transliteration: 'pha',
        name: 'फ (Pha)',
        pronounced: 'फ की तरह महाप्राण ओष्ठ्य ध्वनि।',
        strokeDescription: 'ಪ की पूरी आकृति बनाएं, फिर नीचे मध्य में एक खड़ी रेखा जोड़ें।',
        transitionFromPrev: 'प (ಪ) के ठीक नीचे बीच में एक खड़ी रेखा लगा दें।'
      } as ProgressiveChar,
      {
        char: 'ವ',
        transliteration: 'va',
        name: 'व (Va)',
        pronounced: 'व की तरह ध्वनि।',
        strokeDescription: 'बाईं ओर एक पूरा बंद घेरा बनाएं और ऊपर दाईं ओर ले जाते हुए ऊपर टिक पर समाप्त करें।',
        transitionFromPrev: 'प (ಪ) के खुले हुए बाएं मुंह को बंद गोल लूप में तब्दील करें।'
      } as ProgressiveChar,
      {
        char: 'ಸ',
        transliteration: 'sa',
        name: 'स (Sa)',
        pronounced: 'स की तरह दंत्य ऊष्म ध्वनि।',
        strokeDescription: 'ವ बनाएं, लेकिन बाईं दीवार के बाहरी हिस्से पर एक घुमावदार क्षैतिज पूँछ जोड़ें।',
        transitionFromPrev: 'व (ವ) के बाईं ओर एक क्षैतिज गाँठ/पूँछ जोड़ें।'
      } as ProgressiveChar,
      {
        char: 'ಹ',
        transliteration: 'ha',
        name: 'ह (Ha)',
        pronounced: 'ह की तरह कंठ्य महाप्राण ध्वनि।',
        strokeDescription: 'ವ बनाएं, लेकिन नीचे दाईं कोने को भीतर की ओर मोड़कर एक छोटा गोलाकार लूप बनाएं।',
        transitionFromPrev: 'व (ವ) के निचले-दाएं पैर को भीतर की ओर घुमाकर छोटा लूप दें।'
      } as ProgressiveChar,
      {
        char: 'ನ',
        transliteration: 'na',
        name: 'न (Na)',
        pronounced: 'न की तरह दंत्य नासिक्य ध्वनि।',
        strokeDescription: 'बाईं ओर एक छोटा लूप बनाएं, थोड़ा नीचे जाकर दाईं ओर चौड़ा वक्र बनाएं और ऊपर टिक दें।',
        transitionFromPrev: 'बाईं ओर मुख्य मोड़ को चौड़े लंबे आधार के साथ फैलाएं।'
      } as ProgressiveChar
    ]
  },
  'circular-roots': {
    title: 'गोलाकार और अंडाकार मूल',
    description: 'ये अक्षर एक शुद्ध गोलाकार लूप पर आधारित हैं। ध्यान दें कि छोटे से मोड़ या मध्य बिंदु ध्वनि को पूरी तरह बदल देते हैं।',
    theme: 'गोलाकार आधार',
    characters: [
      {
        char: 'ರ',
        transliteration: 'ra',
        name: 'र (Ra)',
        pronounced: 'लुंठित र की तरह (जैसे रथ)।',
        strokeDescription: 'एकदम शुद्ध, साफ गोल चक्र बनाएं और ऊपर टिक से बंद करें।',
        transitionFromPrev: 'प्राथमिक आधार। ऊपर एक टिक के साथ बस एक साफ गोल चक्र।'
      } as ProgressiveChar,
      {
        char: 'ತ',
        transliteration: 'ta',
        name: 'त (Ta)',
        pronounced: 'सॉफ्ट दंत्य त की तरह (जैसे तरबूज)।',
        strokeDescription: 'चक्र बनाएं, लेकिन बाईं ओर मध्य में रेखा को भीतर की तरफ दबाकर एक स्पष्ट मोड़ दें।',
        transitionFromPrev: 'र (ರ) की बाईं बाहरी सीमा को अंदर दबाकर मोड़ दें।'
      } as ProgressiveChar,
      {
        char: 'ಠ',
        transliteration: 'ṭha',
        name: 'ठ (Tha - मूर्धन्य)',
        pronounced: 'ठ की तरह मूर्धन्य महाप्राण ध्वनि।',
        strokeDescription: 'ರ जैसी गोल आकृति बनाएं, लेकिन इसके ठीक केंद्र में एक स्पष्ट बिंदु या छोटा चक्र रखें।',
        transitionFromPrev: 'र (ರ) के आंतरिक केंद्र में एक स्पष्ट बिंदु (बिंदी) जोड़ें।'
      } as ProgressiveChar,
      {
        char: 'ಥ',
        transliteration: 'tha',
        name: 'थ (Tha - दंत्य)',
        pronounced: 'थ की तरह दंत्य महाप्राण ध्वनि।',
        strokeDescription: 'त (ತ) की तरह अंदर का मोड़ बनाएं, परंतु केंद्र में बिंदु और नीचे एक खड़ी रेखा भी जोड़ें।',
        transitionFromPrev: 'त (ತ) का मोड़, ठ (ಠ) का बिंदु और नीचे महाप्राण वाली रेखा को आपस में मिलाएं।'
      } as ProgressiveChar,
      {
        char: 'ಕ',
        transliteration: 'ka',
        name: 'क (Ka)',
        pronounced: 'क की तरह अल्पप्राण ध्वनि।',
        strokeDescription: 'दो ऊर्ध्वाधर लूप बनाएं जो आपस में एक घुमावदार "8" की तरह कटें, और ऊपर टिक से जोड़ें।',
        transitionFromPrev: 'र (ರ) की एकहरी दीवार को जोड़कर खड़े आठ (8) जैसा आकार दें।'
      } as ProgressiveChar
    ]
  },
  'double-hump': {
    title: 'दोहरा कूबड़ परिवार',
    description: 'यह वर्ग दोहरे मेहराब वाले आकार पर केंद्रित है। रेखाओं, बिंदुओं और प्रारंभिक आकारों से व्यंजन का भेद होता है।',
    theme: 'कूबड़ आकार',
    characters: [
      {
        char: 'ಯ',
        transliteration: 'ya',
        name: 'य (Ya)',
        pronounced: 'य की तरह।',
        strokeDescription: 'बाईं ओर एक वलय बनाकर आगे दाईं ओर दो कूबड़ देते हुए ऊपर टिक पर समाप्त करें।',
        transitionFromPrev: 'प्राथमिक आधार। ध्यान दें कि इसका बायां घेरा बहुत चौड़ा और खुला है।'
      } as ProgressiveChar,
      {
        char: 'ಮ',
        transliteration: 'ma',
        name: 'म (Ma)',
        pronounced: 'म की तरह।',
        strokeDescription: 'बाएं हाथ वाले बड़े खुले हिस्से को संकुचित कर एक छोटा सा लूप बना दें, फिर कूबड़ बनाएं।',
        transitionFromPrev: 'य (ಯ) के बड़े बाएं घेरे को सिकोड़कर बिल्कुल छोटा शुरुआती बिंदु बना दें।'
      } as ProgressiveChar,
      {
        char: 'ಘ',
        transliteration: 'gha',
        name: 'घ (Gha)',
        pronounced: 'घ की तरह महाप्राण।',
        strokeDescription: 'दो लगातार कूबड़ बनाएं लेकिन प्रारंभिक गोल हिस्से को छोटा रखें और नीचे की ओर एक खड़ी रेखा जोड़ें।',
        transitionFromPrev: 'म (ಮ) के कूबड़ बनाए रखें लेकिन प्रारंभिक छोटा लूप हटाएं और नीचे खड़ी रेखा दें।'
      } as ProgressiveChar,
      {
        char: 'ಷ',
        transliteration: 'ṣa',
        name: 'ष (Sha)',
        pronounced: 'ष की तरह मूर्धन्य ध्वनि।',
        strokeDescription: 'ಘ की तरह दोनों कूबड़ बनाएं, परंतु नीचे की खड़ी रेखा हटाकर पेट के बीच एक तिरछी रेखा खींचें।',
        transitionFromPrev: 'म/घ की तरह दिखने वाली आकृति के पेट में एक तिरछी रेखा (कट) लगा दें।'
      } as ProgressiveChar,
      {
        char: 'ಧ',
        transliteration: 'dha',
        name: 'ध (Dha)',
        pronounced: 'ध की तरह दंत्य ध्वनि।',
        strokeDescription: 'बाईं ओर नीचे जाता हुआ एक लूप बनाएं, फिर दो कूबड़ देकर नीचे खड़ी रेखा और केंद्र में बिंदु लगाएं।',
        transitionFromPrev: 'बाईं ओर एक नीचे जाता हुआ वलय बनाएं और कूबड़ के ठीक बीच में एक बिंदु रखें।'
      } as ProgressiveChar,
      {
        char: 'ದ',
        transliteration: 'da',
        name: 'द (Da)',
        pronounced: 'द की तरह दंत्य ध्वनि।',
        strokeDescription: 'बाएं लूप से शुरू करें, नीचे जाकर वक्राकार मोड़ देते हुए ऊपर टिक के साथ पूरा करें।',
        transitionFromPrev: 'ध (ಧ) की तुलना में सरल रूप, बिना किसी बिंदु या खड़ी रेखा के चिकना वक्र।'
      } as ProgressiveChar
    ]
  },
  'arches-crests': {
    title: 'मेहराब और गोल बक्सा परिवार',
    description: 'ये अक्षर ऊंचे, मेहराबदार वक्रों पर निर्मित हैं। इन्हें एक साथ सीखने से कोमल आकारों से बक्सेदार गोल लूप सीखना आसान हो जाता है।',
    theme: 'मेहराबदार सुंदर वक्र',
    characters: [
      {
        char: 'ಗ',
        transliteration: 'ga',
        name: 'ग (Ga)',
        pronounced: 'ग की तरह।',
        strokeDescription: 'एक अकेला ऊंचा मेहराब (उल्टे U जैसा) बनाएं और ऊपर टिक दें।',
        transitionFromPrev: 'प्राथमिक आधार। वर्णमाला का सबसे सरल मेहराब।'
      } as ProgressiveChar,
      {
        char: 'ಬ',
        transliteration: 'ba',
        name: 'ब (Ba)',
        pronounced: 'ब की तरह।',
        strokeDescription: 'मेहराब के बाएं हिस्से को नीचे लाकर गोल घुमाते हुए आपस में जोड़कर बक्सेदार अंडाकार रूप दें और ऊपर टिक दें।',
        transitionFromPrev: 'ग (ಗ) के खुले हुए निचले-बाएं पैर को बंद बंद घेरा बनाकर बक्सा बनाएं।'
      } as ProgressiveChar,
      {
        char: 'ഭ',
        transliteration: 'bha',
        name: 'भ (Bha)',
        pronounced: 'भ की तरह।',
        strokeDescription: 'ಬ की तरह बनाएं पर शीर्ष पर एक छोटा नीचे की ओर जाता लूप जोड़ें तथा नीचे एक खड़ी रेखा खींचें।',
        transitionFromPrev: 'ब (ಬ) के ऊपरी हिस्से को अंदर मोड़ें और नीचे महाप्राण सूचक खड़ी रेखा जोड़ें।'
      } as ProgressiveChar,
      {
        char: 'ಲ',
        transliteration: 'la',
        name: 'ल (La)',
        pronounced: 'ल की तरह।',
        strokeDescription: 'दो लगातार एक जैसे मेहराब पास-पास खड़े करें जो बिना घुमाव के नीचे समाप्त हों।',
        transitionFromPrev: 'ग (ಗ) के एकल मेहराब को फैलाकर दो बराबर मेहराबों की जोड़ी बनाएं।'
      } as ProgressiveChar,
      {
        char: 'ಳ',
        transliteration: 'ḷa',
        name: 'ळ (La - मूर्धन्य)',
        pronounced: 'ढ़ और ल का मिश्रित मूर्धन्य रूप।',
        strokeDescription: 'ಲ के दोनों मेहराबों को अंदर की तरफ घुमाकर गोलाकार गाँठों में बदल दें।',
        transitionFromPrev: 'ल (ಲ) के दोनों खुले किनारों को अंदर घुमाकर दो गोल लूप प्रदान करें।'
      } as ProgressiveChar,
      {
        char: 'ಶ',
        transliteration: 'śa',
        name: 'श (Sha)',
        pronounced: 'श की तरह तालव्य ध्वनि।',
        strokeDescription: 'तीन लगातार नीचे की ओर बहते हुए लहरदार सुंदर गोल छल्लों की एक माला बनाएं।',
        transitionFromPrev: 'ल (ಲ) के दोहरे मेहराब को और बढ़ाकर तीन मनमोहक लूप की माला बनाएं।'
      } as ProgressiveChar
    ]
  },
  'waves-bridges': {
    title: 'लहरें और लूप-पुल वर्ग',
    description: 'ये अक्षर एक निचले लूप से शुरू होकर क्षैतिज रास्ते पर जाते हैं और इनके लिए हाथ का सुंदर संतुलन चाहिए।',
    theme: 'लूप-से-सेतु मार्ग',
    characters: [
      {
        char: 'ಚ',
        transliteration: 'ca',
        name: 'च (Ca)',
        pronounced: 'च की तरह अल्पप्राण ध्वनि।',
        strokeDescription: 'नीचे एक गोल चक्र बनाएं, ऊपर आएं, एक सपाट सीधी क्षैतिज रेखा दाईं ओर ले जाएं, फिर ऊपर टिक दें।',
        transitionFromPrev: 'प्राथमिक आकार। नीचे लूप, ऊपर सीधा सेतु पथ।'
      } as ProgressiveChar,
      {
        char: 'ಖ',
        transliteration: 'kha',
        name: 'ख (Kha)',
        pronounced: 'ख की तरह महाप्राण ध्वनि।',
        strokeDescription: 'नीचे एक घुमावदार लूप बनाएं, ऊपर उठें, दाईं ओर एक दूसरा बड़ा गोल लूप बनाएं और ऊपर टिक से जोड़ें।',
        transitionFromPrev: 'च (ಚ) के सीधे सपाट पुल की जगह एक बड़ा घुमावदार गोल लूप या गाँठ लगाएं।'
      } as ProgressiveChar,
      {
        char: 'ಜ',
        transliteration: 'ja',
        name: 'ज (Ja)',
        pronounced: 'ज की तरह।',
        strokeDescription: 'बाएं लूप से शुरू करें, गणित के "3" की तरह नीचे-ऊपर लहर बनाएं, और बीच में एक सीधी क्षैतिज पुल रेखा जोड़ें।',
        transitionFromPrev: 'क्षैतिज ३ (3) जैसा आकार बनाकर बीच में एक सेतु स्थापित करें।'
      } as ProgressiveChar,
      {
        char: 'ಞ',
        transliteration: 'ña',
        name: 'ञ (Nya)',
        pronounced: 'ञ की तरह नासिक्य स्पर्श ध्वनि।',
        strokeDescription: 'ಜ की तरह "3" घुमाव बनाएं, लेकिन दाईं ओर नीचे वाली रेखा को और लंबा खींचकर ऊपर ले जाएं।',
        transitionFromPrev: 'ज (ಜ) के निचले दाईं ओर एक उड़ता हुआ लंबा पंख/पूँछ जोड़ दें।'
      } as ProgressiveChar,
      {
        char: 'ಣ',
         transliteration: 'ṇa',
        name: 'ण (Na - मूर्धन्य)',
        pronounced: 'ण की तरह मूर्धन्य नासिक्य।',
        strokeDescription: 'लगातार तीन खड़ी लहरें (पहाड़ की तरह) बराबर चौड़ाई की बनाएं और अंतिम हिस्से को नीचे खड़ी रेखा से बंद करें।',
        transitionFromPrev: 'तीन खड़े सुंदर लूप शिखर एक कतार में बनाकर नीचे सीधा दंडात्मक स्ट्रोक जोड़ें।'
      } as ProgressiveChar
    ]
  },
  'snake-serpent': {
    title: 'सर्पिलाकार घुमाव और गाँठें',
    description: 'इस परिवार के अक्षर अंग्रेजी के "S" अक्षर जैसे लहरदार सुंदर घुमाव पर आधारित हैं। इन्हें समझने से मूर्धन्य ध्वनियां आसान हो जाती हैं।',
    theme: 'S-आकार का बहाव',
    characters: [
      {
        char: 'ಡ',
        transliteration: 'ḍa',
        name: 'ड (Da - मूर्धन्य)',
        pronounced: 'ड की तरह मूर्धन्य ध्वनि।',
        strokeDescription: 'अंग्रेजी के सुंदर "S" अक्षर जैसा आकार बनाएं और ऊपर टिक दें।',
        transitionFromPrev: 'प्राथमिक आधार। ऊपर एक टिक के साथ बस एक सुंदर सांप जैसा S आकार।'
      } as ProgressiveChar,
      {
        char: 'ಢ',
        transliteration: 'ḍha',
        name: 'ढ (Dha - मूर्धन्य)',
        pronounced: 'ढ की तरह महाप्राण ध्वनि।',
        strokeDescription: 'ಡ का S रूप बनाएं, लेकिन नीचे समाप्त होने वाले किनारे को घुमाकर एक छोटा बंद लूप या गाँठ दें।',
        transitionFromPrev: 'ड (ಡ) के नीचे समाप्त होने वाली पूँछ में एक छोटी गोल गाँठ बाँध दें।'
      } as ProgressiveChar,
      {
        char: 'ಙ',
        transliteration: 'ṅa',
        name: 'ङ (Nga)',
        pronounced: 'ङ की तरह नासिक्य ध्वनि (जैसे गंगा में अं)।',
        strokeDescription: 'ಡ का S आकार पूरा ठीक बनाएं, फिर इसकी दाईं कोहनी की बगल में एक स्पष्ट अकेला बिंदु लगाएं।',
        transitionFromPrev: 'ड (ಡ) के ठीक दाईं ओर सामने की तरफ एक बिंदी स्थापित करें।'
      } as ProgressiveChar,
      {
        char: 'ಟ',
        transliteration: 'ṭa',
        name: 'ट (Ta - मूर्धन्य)',
        pronounced: 'ट की तरह मूर्धन्य।',
        strokeDescription: 'दाईं ओर खुला हुआ एक चौड़ा वक्र (उलटा C) बनाएं, जिसके ठीक पेट में एक बिंदु लगाएं।',
        transitionFromPrev: 'ड (ಡ) के घुमावों को खोलकर एक चौड़ा उलटा C आकार बनाएं जिसके बीच में एक बिंदु हो।'
      } as ProgressiveChar,
      {
        char: 'ಝ',
        transliteration: 'jha',
        name: 'झ (Jha)',
        pronounced: 'झ की तरह।',
        strokeDescription: 'शुरुआती छोटे छल्ले से शुरू कर दो ऊंचे शिखर बनाएं, नीचे कोणीय घुमाव दें और दाईं ओर लंबी टाँग निकालें।',
        transitionFromPrev: 'मध्य में नुकीले कोणीय काट के साथ उठे हुए मेहराब और दाईं टाँग।'
      } as ProgressiveChar,
      {
        char: 'ಛ',
        transliteration: 'cha',
        name: 'छ (Cha)',
        pronounced: 'छ की तरह महाप्राण।',
        strokeDescription: 'शुरुआती छल्ले से नीचे गहरा चम्मच जैसा गहरा बर्तन रूप बनाएं और नीचे खड़ी रेखा तथा ऊपर टिक दें।',
        transitionFromPrev: 'निचले तल पर गहरा कटोरा बनाते हुए नीचे महाप्राण सूचक खड़ी रेखा जोड़ें।'
      } as ProgressiveChar
    ]
  }
};

interface LookAlikesProps {
  fontSize?: 'normal' | 'large' | 'xl' | 'xxl' | 'max';
}

export const LookAlikes: React.FC<LookAlikesProps> = ({ fontSize = 'large' }) => {
  const { t, getTranslatedChar, referenceLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState<'study' | 'sequence' | 'quiz'>('sequence');
  const [selectedGroupId, setSelectedGroupId] = useState<string>('all');

  const localizedLookAlikeGroups = useMemo(() => {
    if (referenceLanguage !== 'hi') return LOOK_ALIKE_GROUPS;
    return LOOK_ALIKE_GROUPS.map((group) => {
      const trans = LOOK_ALIKE_GROUPS_HI[group.id];
      if (!trans) return group;
      return {
        ...group,
        title: trans.title || group.title,
        description: trans.description || group.description,
        distinctionRule: trans.distinctionRule || group.distinctionRule,
        characters: group.characters.map((char, idx) => {
          const transChar = trans.characters?.[idx];
          if (!transChar) return char;
          return {
            ...char,
            name: transChar.name || char.name,
            pronounced: transChar.pronounced || char.pronounced,
            keyFeature: transChar.keyFeature || char.keyFeature
          };
        })
      };
    });
  }, [referenceLanguage]);

  const localizedProgressiveGroups = useMemo(() => {
    if (referenceLanguage !== 'hi') return PROGRESSIVE_GROUPS;
    return PROGRESSIVE_GROUPS.map((group) => {
      const trans = PROGRESSIVE_GROUPS_HI[group.id];
      if (!trans) return group;
      return {
        ...group,
        title: trans.title || group.title,
        description: trans.description || group.description,
        theme: trans.theme || group.theme,
        characters: group.characters.map((char, idx) => {
          const transChar = trans.characters?.[idx];
          if (!transChar) return char;
          return {
            ...char,
            name: transChar.name || char.name,
            pronounced: transChar.pronounced || char.pronounced,
            strokeDescription: transChar.strokeDescription || char.strokeDescription,
            transitionFromPrev: transChar.transitionFromPrev || char.transitionFromPrev
          };
        })
      };
    });
  }, [referenceLanguage]);

  // Writing sequence states
  const [selectedSeqGroupId, setSelectedSeqGroupId] = useState<string>('cup-loop');
  const [selectedSeqCharIndex, setSelectedSeqCharIndex] = useState<number>(0);
  const [practicedChars, setPracticedChars] = useState<string[]>([]);

  // Memoized current active sequence group
  const currentSeqGroup = useMemo(() => {
    return localizedProgressiveGroups.find((g) => g.id === selectedSeqGroupId) || localizedProgressiveGroups[0];
  }, [selectedSeqGroupId, localizedProgressiveGroups]);

  // Memoized current active sequence char
  const currentSeqChar = useMemo(() => {
    return currentSeqGroup.characters[selectedSeqCharIndex] || currentSeqGroup.characters[0];
  }, [currentSeqGroup, selectedSeqCharIndex]);

  const handleTogglePracticed = (char: string) => {
    setPracticedChars((prev) =>
      prev.includes(char) ? prev.filter((c) => c !== char) : [...prev, char]
    );
  };

  const handleNextSeqChar = () => {
    if (selectedSeqCharIndex < currentSeqGroup.characters.length - 1) {
      setSelectedSeqCharIndex((prev) => prev + 1);
    } else {
      const currentIdx = localizedProgressiveGroups.findIndex((g) => g.id === selectedSeqGroupId);
      if (currentIdx < localizedProgressiveGroups.length - 1) {
        const nextGroupId = localizedProgressiveGroups[currentIdx + 1].id;
        setSelectedSeqGroupId(nextGroupId);
        setSelectedSeqCharIndex(0);
        playSound(localizedProgressiveGroups[currentIdx + 1].characters[0].char);
      } else {
        // Complete sweep! Let's loop back to index 0 of first group
        setSelectedSeqGroupId(localizedProgressiveGroups[0].id);
        setSelectedSeqCharIndex(0);
        playSound(localizedProgressiveGroups[0].characters[0].char);
      }
    }
  };

  const handlePrevSeqChar = () => {
    if (selectedSeqCharIndex > 0) {
      setSelectedSeqCharIndex((prev) => prev - 1);
    } else {
      const currentIdx = localizedProgressiveGroups.findIndex((g) => g.id === selectedSeqGroupId);
      if (currentIdx > 0) {
        const prevGroup = localizedProgressiveGroups[currentIdx - 1];
        setSelectedSeqGroupId(prevGroup.id);
        setSelectedSeqCharIndex(prevGroup.characters.length - 1);
        playSound(prevGroup.characters[prevGroup.characters.length - 1].char);
      }
    }
  };
  
  // Quiz State
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizTotal, setQuizTotal] = useState<number>(0);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; selected: string; correct: string } | null>(null);
  
  // Sound helper
  const playSound = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'kn-IN';
      u.rate = 0.72;
      window.speechSynthesis.speak(u);
    }
  };

  // Current selected study group
  const currentGroup = useMemo(() => {
    return localizedLookAlikeGroups.find((g) => g.id === selectedGroupId) || localizedLookAlikeGroups[0];
  }, [selectedGroupId, localizedLookAlikeGroups]);

  // Generate a random look-alike question
  const generateQuizQuestion = () => {
    // Pick a random group
    const randomGroup = localizedLookAlikeGroups[Math.floor(Math.random() * localizedLookAlikeGroups.length)];
    // Pick a random char from that group as local target
    const targetChar = randomGroup.characters[Math.floor(Math.random() * randomGroup.characters.length)];
    
    return {
      group: randomGroup,
      target: targetChar,
      options: randomGroup.characters // All characters in this group are the option set
    };
  };

  // Live active quiz question
  const [currentQuestion, setCurrentQuestion] = useState(generateQuizQuestion);

  const handleNextQuestion = () => {
    setFeedback(null);
    setCurrentQuestion(generateQuizQuestion());
  };

  const handleAnswerSubmit = (option: LookAlikeChar) => {
    if (feedback) return; // Prevent double clicks
    
    const isCorrect = option.char === currentQuestion.target.char;
    setFeedback({
      isCorrect,
      selected: option.char,
      correct: currentQuestion.target.char
    });

    setQuizTotal((prev) => prev + 1);
    if (isCorrect) {
      setQuizScore((prev) => prev + 1);
    }
    
    // Announce the correct sound
    playSound(currentQuestion.target.char);
  };

  // Font size multiplier mappings to preserve 2-feet distance reading comfort
  const getGiantSizeClass = () => {
    switch (fontSize) {
      case 'normal': return 'text-[5rem]';
      case 'large': return 'text-[6.5rem]';
      case 'xl': return 'text-[7.5rem]';
      case 'xxl': return 'text-[8.5rem]';
      case 'max': return 'text-[9.5rem]';
      default: return 'text-[6.5rem]';
    }
  };

  const getTextSizeClass = () => {
    switch (fontSize) {
      case 'normal': return 'text-xs md:text-sm';
      case 'large': return 'text-sm md:text-base';
      case 'xl': return 'text-base md:text-lg font-medium';
      case 'xxl': return 'text-lg md:text-xl font-semibold leading-relaxed';
      case 'max': return 'text-xl md:text-2xl font-bold leading-loose';
      default: return 'text-sm md:text-base';
    }
  };

  const getSubTitleSizeClass = () => {
    switch (fontSize) {
      case 'normal': return 'text-[10px]';
      case 'large': return 'text-xs';
      case 'xl': return 'text-sm font-bold text-[#7B241C]';
      case 'xxl': return 'text-base font-black text-[#7B241C]';
      case 'max': return 'text-lg font-black text-[#7B241C] tracking-wide';
      default: return 'text-xs';
    }
  };

  return (
    <div id="look-alikes-container" className="space-y-6">
      
      {/* Tab selectors */}
      <div className="flex flex-wrap md:flex-nowrap border-2 border-[#2D2926] p-1 bg-[#F5EFEB]/30 rounded max-w-2xl mx-auto gap-0.5 select-none">
        <button
          id="lookalikes-sequence-tab"
          onClick={() => setActiveTab('sequence')}
          className={`flex-1 py-2 text-xs font-bold font-mono tracking-wider transition-all cursor-pointer uppercase text-center ${
            activeTab === 'sequence'
              ? 'bg-[#7B241C] text-white shadow border border-[#2D2926]'
              : 'text-[#2D2926]/70 hover:text-[#2D2926] hover:bg-white/50'
          }`}
        >
          <span className="flex items-center justify-center gap-2 px-1">
            <PenTool className="h-4 w-4 shrink-0 text-yellow-450" /> {t('writingSequenceTab')}
          </span>
        </button>
        <button
          id="lookalikes-study-tab"
          onClick={() => setActiveTab('study')}
          className={`flex-1 py-2 text-xs font-bold font-mono tracking-wider transition-all cursor-pointer uppercase text-center ${
            activeTab === 'study'
              ? 'bg-[#7B241C] text-white shadow border border-[#2D2926]'
              : 'text-[#2D2926]/70 hover:text-[#2D2926] hover:bg-white/50'
          }`}
        >
          <span className="flex items-center justify-center gap-2 px-1">
            <BookOpen className="h-4 w-4 shrink-0" /> {t('visualCatalogTab')}
          </span>
        </button>
        <button
          id="lookalikes-quiz-tab"
          onClick={() => {
            setActiveTab('quiz');
            handleNextQuestion();
          }}
          className={`flex-1 py-2 text-xs font-bold font-mono tracking-wider transition-all cursor-pointer uppercase text-center ${
            activeTab === 'quiz'
              ? 'bg-[#7B241C] text-white shadow border border-[#2D2926]'
              : 'text-[#2D2926]/70 hover:text-[#2D2926] hover:bg-white/50'
          }`}
        >
          <span className="flex items-center justify-center gap-2 px-1">
            <Brain className="h-4 w-4 shrink-0" /> {t('distortionQuizTab')}
          </span>
        </button>
      </div>

      {/* 1. PROGRESSIVE WRITING SEQUENCE TAB */}
      {activeTab === 'sequence' && (
        <div className="space-y-6">
          {/* Progress bar tracking */}
          <div className="bg-[#F5EFEB] border-2 border-[#2D2926] p-4 shadow-[3px_3px_0px_0px_rgba(45,41,38,1)] flex flex-col md:flex-row md:items-center md:justify-between gap-4 select-none rounded">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7B241C] font-mono block">Consonants Writing Journey</span>
              <h4 className="text-base font-serif font-black text-[#2D2926]">
                You have mastered {practicedChars.length} of 34 total consonants ({((practicedChars.length / 34) * 100).toFixed(0)}%)
              </h4>
            </div>
            <div className="flex-1 max-w-md w-full bg-[#2D2926]/10 h-3 border border-[#2D2926]/20 relative overflow-hidden rounded-full">
              <div 
                className="bg-emerald-600 h-full transition-all duration-300"
                style={{ width: `${(practicedChars.length / 34) * 100}%` }}
              />
            </div>
          </div>

          {/* Group navigation row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 select-none">
            {localizedProgressiveGroups.map((g, idx) => {
              const isSelected = selectedSeqGroupId === g.id;
              const practicedInGroup = g.characters.filter((c) => practicedChars.includes(c.char)).length;
              return (
                <button
                  key={g.id}
                  onClick={() => {
                    setSelectedSeqGroupId(g.id);
                    setSelectedSeqCharIndex(0);
                    playSound(g.characters[0].char);
                  }}
                  className={`border-2 p-3 text-left transition-all cursor-pointer rounded flex flex-col justify-between h-[96px] ${
                    isSelected
                      ? 'bg-[#7B241C] text-white border-[#2D2926] shadow-[2px_2px_0px_0px_rgba(45,41,38,1)]'
                      : 'bg-white text-[#2D2926] border-[#2D2926]/25 hover:border-[#2D2926]/60 hover:bg-[#F5EFEB]/20'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono tracking-wider opacity-60 uppercase block">Group {idx + 1}</span>
                    <span className="text-[11px] font-serif font-black block leading-tight">{g.title}</span>
                  </div>
                  <div className="flex items-center justify-between w-full pt-1 border-t border-current/15 text-[10px] font-mono">
                    <span className="opacity-75">{g.theme}</span>
                    <span className="font-bold">{practicedInGroup}/{g.characters.length}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Core progressive dashboard */}
          <div className="bg-white border-2 border-[#2D2926] p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(45,41,38,1)] space-y-6 rounded">
            {/* Cluster headline */}
            <div className="border-b border-[#2D2926]/10 pb-4">
              <h4 className="text-lg font-serif font-black text-[#2D2926]">{currentSeqGroup.title}</h4>
              <p className="text-xs font-serif italic text-[#2D2926]/75 mt-0.5">{currentSeqGroup.description}</p>
            </div>

            {/* Sequence indicator line (steps timeline) */}
            <div className="bg-[#F5EFEB]/50 border border-[#2D2926]/15 p-2 rounded flex items-center gap-2 overflow-x-auto select-none">
              <span className="text-[9px] font-bold uppercase tracking-wider font-mono text-[#2D2926]/40 px-2 shrink-0">Progressive Step Sequence:</span>
              <div className="flex items-center gap-1">
                {currentSeqGroup.characters.map((item, idx) => {
                  const isCur = selectedSeqCharIndex === idx;
                  const isPracticed = practicedChars.includes(item.char);
                  return (
                    <React.Fragment key={item.char}>
                      {idx > 0 && <span className="text-[#2D2926]/30 text-xs font-mono font-bold select-none px-1">→</span>}
                      <button
                        onClick={() => {
                          setSelectedSeqCharIndex(idx);
                          playSound(item.char);
                        }}
                        className={`p-1 min-w-[2.25rem] min-h-[2.25rem] border-2 flex flex-col items-center justify-center font-bold transition-all relative cursor-pointer text-sm md:text-base font-kannada rounded ${
                          isCur
                            ? 'bg-[#7B241C] text-white border-[#2D2926] scale-110 shadow'
                            : 'bg-white text-[#2D2926] border-[#2D2926]/20 hover:border-[#2D2926]'
                        }`}
                      >
                        {item.char}
                        {isPracticed && (
                          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 border border-white rounded-full flex items-center justify-center text-[7px] text-white font-serif">✓</span>
                        )}
                      </button>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Main Interactive Dual Panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              
              {/* LEFT COLUMN: GIGANTIC WRITING SHEET CANVAS */}
              <div className="border-2 border-[#2D2926] bg-[#F5EFEB]/10 rounded overflow-hidden relative shadow-sm flex flex-col justify-between min-h-[380px]">
                {/* Background double calligraphy lines */}
                <div className="absolute inset-y-0 inset-x-0 flex flex-col justify-center gap-9 pointer-events-none select-none opacity-20">
                  <div className="border-t border-dashed border-[#7B241C]" />
                  <div className="border-t border-indigo-650" />
                  <div className="border-t border-indigo-650" />
                  <div className="border-t border-dashed border-[#7B241C]" />
                </div>

                <div className="p-3 bg-[#2D2926]/5 border-b border-[#2D2926]/10 flex justify-between items-center select-none z-10 w-full">
                  <span className="text-[10px] font-mono text-[#2D2926]/60 font-bold uppercase tracking-wider">Reference Calligraphy Plate</span>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => playSound(currentSeqChar.char)}
                      className="px-2.5 py-1 bg-[#7B241C]/5 border border-[#7B241C]/25 text-[#7B241C] hover:bg-[#7B241C] hover:text-white rounded text-[10px] font-mono font-bold flex items-center gap-1 cursor-pointer transition-colors"
                      title="Audio Pronunciation"
                    >
                      <Volume2 className="h-3 w-3 shrink-0" /> Pronounce
                    </button>
                    <span className="text-[10px] font-mono font-bold bg-[#7B241C]/10 text-[#7B241C] px-2 py-0.5 rounded uppercase">
                      /{currentSeqChar.transliteration}/
                    </span>
                  </div>
                </div>

                {/* Massive letter container */}
                <div className="flex-1 flex flex-col items-center justify-center py-10 z-10 select-all">
                  <span className={`font-kannada font-black text-[#2D2926] select-all leading-none transition-all drop-shadow-sm select-all ${getGiantSizeClass()}`}>
                    {currentSeqChar.char}
                  </span>
                  <span className="text-sm font-mono tracking-widest text-[#7B241C] font-extrabold uppercase mt-4">
                    {currentSeqChar.name} Consonant
                  </span>
                </div>

                <div className="p-3 bg-white/70 border-t border-[#2D2926]/10 text-center select-none z-10 w-full">
                  <span className="text-[10px] font-serif italic text-[#2D2926]/60">Tip: Practice copying/tracing this shape onto any sketchpad or paper grid.</span>
                </div>
              </div>

              {/* RIGHT COLUMN: PROGRESSIVE STROKES & COGNITIVE WRITING TUTOR */}
              <div className="space-y-4">
                
                {/* 1. Minimal Cognitive Load Translation Rule */}
                <div className="bg-[#7B241C]/5 border-2 border-[#7B241C]/20 p-4.5 rounded space-y-1.5 shadow-sm relative overflow-hidden">
                  <div className="absolute right-4 top-2 text-[#7B241C]/5 pointer-events-none select-none">
                    <Sparkles className="h-20 w-20" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7B241C] font-mono block">Incremental Transition Formula (No Fatigue)</span>
                  <p className="text-sm font-serif font-black text-[#2D2926] leading-relaxed">
                    {currentSeqChar.transitionFromPrev}
                  </p>
                </div>

                {/* 2. Structured Stroke breakdown step by step */}
                <div className="bg-[#F5EFEB]/30 border-2 border-[#2D2926]/15 p-4.5 rounded space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D2926]/50 font-mono block">Stroke Construction Sequence</span>
                  <p className="text-xs font-serif leading-relaxed text-[#2D2926]/85 font-medium bg-white p-3 border border-[#2D2926]/10 rounded">
                    {currentSeqChar.strokeDescription}
                  </p>
                </div>

                {/* 3. Speaking details */}
                <div className="bg-[#2D2926]/5 border border-[#2D2926]/15 p-4 rounded space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D2926]/60 font-mono block">Phonetic Target sound</span>
                  <p className="text-xs font-serif italic text-[#2D2926]/90">
                    "{currentSeqChar.pronounced}"
                  </p>
                </div>

                {/* Core Buttons and Completion state */}
                <div className="pt-4 border-t border-[#2D2926]/10 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleTogglePracticed(currentSeqChar.char)}
                    className={`flex-1 py-3 px-4 border-2 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 rounded ${
                      practicedChars.includes(currentSeqChar.char)
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-800 shadow-[2px_2px_0px_0px_rgba(5,150,105,1)] scale-[1.01]'
                        : 'bg-white border-[#2D2926] text-[#2D2926] hover:bg-[#F5EFEB]/40 hover:shadow-[2px_2px_0px_0px_rgba(45,41,38,1)]'
                    }`}
                  >
                    <span>{practicedChars.includes(currentSeqChar.char) ? '✍️ Written! (Click to redo)' : '✍️ Practiced Writing on Paper'}</span>
                  </button>

                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={handlePrevSeqChar}
                      className="p-3 border-2 border-[#2D2926] bg-white text-[#2D2926] hover:bg-[#F5EFEB]/40 rounded cursor-pointer transition-all"
                      title="Previous Consonant Step"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={handleNextSeqChar}
                      className="py-3 px-5 border-2 border-[#2D2926] bg-[#7B241C] text-white hover:bg-[#601b15] hover:shadow-[3px_3px_0px_0px_rgba(45,41,38,1)] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-all rounded"
                      title="Next Consonant Step"
                    >
                      Next Step <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

      {/* 2. LOOK ALIKES VISUAL CATALOG TAB */}
      {activeTab === 'study' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Quick sidebar selections */}
          <div className="space-y-2 lg:col-span-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#2D2926]/60 font-mono block mb-1">
              Confusion Clusters ({localizedLookAlikeGroups.length})
            </span>
            <div className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 select-none">
              
              {/* Special toggle to show ALL together */}
              <button
                id="lookalike-sidebar-tab-all"
                onClick={() => setSelectedGroupId('all')}
                className={`px-4 py-3 text-left text-xs font-mono font-bold uppercase transition-all cursor-pointer shrink-0 border-2 ${
                  selectedGroupId === 'all'
                    ? 'bg-[#7B241C] text-white border-[#2D2926] shadow-[2px_2px_0px_0px_rgba(45,41,38,1)]'
                    : 'bg-white text-[#2D2926] border-[#2D2926]/20 hover:border-[#2D2926]/60'
                }`}
              >
                <div className="flex justify-between items-center gap-2">
                  <span>Show All Clusters 📋</span>
                  <span className="text-[9px] px-1 bg-yellow-100 text-yellow-850 border border-yellow-300 rounded leading-none select-none font-bold">ALL</span>
                </div>
              </button>

              {localizedLookAlikeGroups.map((group) => (
                <button
                  key={group.id}
                  id={`lookalike-sidebar-tab-${group.id}`}
                  onClick={() => setSelectedGroupId(group.id)}
                  className={`px-4 py-3 text-left text-xs font-mono font-bold uppercase transition-all cursor-pointer shrink-0 border-2 ${
                    selectedGroupId === group.id
                      ? 'bg-[#7B241C] text-white border-[#2D2926] shadow-[2px_2px_0px_0px_rgba(45,41,38,1)]'
                      : 'bg-white text-[#2D2926] border-[#2D2926]/20 hover:border-[#2D2926]/60'
                  }`}
                >
                  <div className="flex justify-between items-center gap-2">
                    <span>{group.title}</span>
                    <span className={`text-[9px] px-1 py-0.5 rounded leading-none ${
                      group.difficulty === 'Beginner' ? 'bg-emerald-100 text-emerald-800' :
                      group.difficulty === 'Intermediate' ? 'bg-amber-100 text-amber-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {group.difficulty[0]}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Core visual inspection card */}
          <div className="lg:col-span-3 space-y-6">
            {selectedGroupId === 'all' ? (
              <div className="space-y-8">
                {/* General Header explaining writing drills */}
                <div className="bg-[#7B241C]/5 border-2 border-[#2D2926] p-5 shadow-[4px_4px_0px_0px_rgba(45,41,38,1)] relative overflow-hidden rounded">
                  <div className="absolute right-4 top-4 text-[#7B241C]/10 select-none pointer-events-none">
                    <Eye className="h-20 w-20" />
                  </div>
                  <h4 className="text-lg font-serif font-black text-[#2D2926] flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-[#7B241C] shrink-0" />
                    Complete Look-Alike Clusters Matrix
                  </h4>
                  <p className="text-xs font-serif italic text-[#2D2926]/85 mt-1 max-w-2xl leading-relaxed">
                    Grab a sketchpad or a sheet of real notebook paper! Below is the complete matrix of all visually confusable pairs and clusters. Contrast their details side-by-side, trace the strokes, and click each character to listen to the exact pronounciation to map your muscle memory and phonetics simultaneously.
                  </p>
                </div>

                {/* Render ALL look alike groups stacked */}
                {localizedLookAlikeGroups.map((group) => (
                  <div key={group.id} className="bg-white border-2 border-[#2D2926] p-6 shadow-[4px_4px_0px_0px_rgba(45,41,38,1)] space-y-4 rounded">
                    {/* Header */}
                    <div className="border-b border-[#2D2926]/10 pb-3">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h5 className="text-base font-serif font-black text-[#2D2926]">{group.title} Confusion Set</h5>
                        <span className={`text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded font-mono ${
                          group.difficulty === 'Beginner' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' :
                          group.difficulty === 'Intermediate' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
                          'bg-red-50 text-red-800 border border-red-200'
                        }`}>
                          {group.difficulty}
                        </span>
                      </div>
                      <p className="text-xs font-serif italic text-[#2D2926]/60 mt-0.5">{group.description}</p>
                    </div>

                    {/* Side by side characters */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {group.characters.map((item, index) => (
                        <div key={item.char} className="border-2 border-[#2D2926] bg-[#F5EFEB]/10 p-5 relative rounded hover:bg-white transition-all flex flex-col justify-between min-h-[220px] group/card">
                          {/* Top row */}
                          <div className="flex justify-between items-start">
                            <span className="text-[10px] font-mono text-[#2D2926]/40 font-bold bg-[#2D2926]/5 px-2 py-0.5 rounded">
                              Character {index + 1}
                            </span>
                            <button
                              onClick={() => playSound(item.char)}
                              id={`speak-lookalike-all-btn-${item.char}`}
                              className="p-1 px-2.5 bg-[#7B241C]/5 border border-[#7B241C]/20 hover:bg-[#7B241C] text-[#7B241C] hover:text-white rounded text-xs font-mono font-bold flex items-center gap-1 transition-all cursor-pointer"
                              title={`Listen to pronunciation for ${item.char}`}
                            >
                              <Volume2 className="h-3.5 w-3.5" /> Pronounce
                            </button>
                          </div>

                          {/* Giant display */}
                          <div className="text-center py-4 select-all">
                            <span className={`font-kannada font-black text-[#2D2926] select-all leading-none block transition-transform group-hover/card:scale-105 ${getGiantSizeClass()}`}>
                              {item.char}
                            </span>
                            <span className="text-xl font-mono text-[#7B241C] font-black tracking-tight mt-1.5 block">
                              /{item.transliteration}/
                            </span>
                          </div>

                          {/* Descriptive feature at bottom */}
                          <div className="border-t border-[#2D2926]/10 pt-3 space-y-2 mt-1">
                            <div className="space-y-0.5">
                              <span className="text-[9px] font-bold uppercase tracking-widest font-mono text-[#2D2926]/50 block">Structure Identification Cues</span>
                              <p className="text-xs font-serif font-medium text-emerald-950">
                                {item.keyFeature}
                              </p>
                            </div>
                            <div className="space-y-0.5">
                              <span className="text-[9px] font-bold uppercase tracking-widest font-mono text-[#7B241C] block">Phonetic Target</span>
                              <p className="text-xs font-serif italic text-[#2D2926]/80">
                                Pronounced: {item.pronounced}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* distinction rule */}
                    <div className="bg-[#7B241C]/5 border border-[#7B241C]/20 p-4 text-xs font-serif leading-relaxed italic text-[#2D2926]/90 flex items-start gap-2.5 rounded">
                      <div className="p-1.5 bg-[#7B241C]/10 text-[#7B241C] rounded shrink-0">
                        <Info className="h-4 w-4" />
                      </div>
                      <div>
                        <strong className="font-mono text-[10px] uppercase tracking-wider not-italic text-[#7B241C] block mb-0.5">Distinction Rule & Golden Formula</strong>
                        {group.distinctionRule}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white border-2 border-[#2D2926] p-6 shadow-[4px_4px_0px_0px_rgba(45,41,38,1)] space-y-6 rounded">
                
                {/* Group Introduction */}
                <div className="border-b border-[#2D2926]/10 pb-4 space-y-1">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2.1 py-0.5 rounded font-mono ${
                    currentGroup.difficulty === 'Beginner' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' :
                    currentGroup.difficulty === 'Intermediate' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
                    'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {currentGroup.difficulty} Complexity Cluster
                  </span>
                  <h4 className="text-xl font-serif font-black text-[#2D2926] pt-1">{currentGroup.title} Confusion Guide</h4>
                  <p className="text-xs font-serif italic text-[#2D2926]/70">{currentGroup.description}</p>
                </div>

                {/* SIDE-BY-SIDE GIANT DISPLAY */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {currentGroup.characters.map((item, index) => (
                    <div
                      key={item.char}
                      className="border-2 border-[#2D2926] bg-[#F5EFEB]/20 p-6 flex flex-col justify-between items-center relative rounded hover:bg-white hover:shadow-[3px_3px_0px_0px_rgba(45,41,38,1)] transition-all group"
                    >
                      {/* Character Index Watermark */}
                      <span className="absolute top-3 left-3 text-[10px] font-mono text-[#2D2926]/40">
                        Option #{index + 1}
                      </span>

                      <button
                        onClick={() => playSound(item.char)}
                        id={`speak-lookalike-btn-${item.char}`}
                        className="absolute top-3 right-3 p-1.5 bg-[#7B241C]/5 border border-[#7B241C]/20 hover:bg-[#7B241C] text-[#7B241C] hover:text-white rounded transition-all cursor-pointer"
                        title="Listen block sound"
                      >
                        <Volume2 className="h-4 w-4" />
                      </button>

                      {/* MASSIVE CANVASES */}
                      <div className="py-6 text-center select-all">
                        <span className={`font-kannada font-black text-[#2D2926] select-all leading-none transition-all block ${getGiantSizeClass()}`}>
                          {item.char}
                        </span>
                        <span className="text-2xl font-mono text-[#7B241C] font-bold mt-2 block tracking-tight">
                          /{item.transliteration}/
                        </span>
                        <span className="text-xs font-mono text-[#2D2926]/50 uppercase tracking-widest block font-bold">
                          {item.name}
                        </span>
                      </div>

                      {/* Visual descriptions and cues */}
                      <div className="w-full border-t border-[#2D2926]/10 pt-4 space-y-2 mt-2">
                        <div className="space-y-0.5">
                          <span className={`${getSubTitleSizeClass()} font-bold uppercase tracking-widest font-mono text-[#2D2926]/50 block`}>How to Pronounce</span>
                          <p className={`${getTextSizeClass()} font-serif text-[#2D2926] leading-relaxed italic`}>
                            {item.pronounced}
                          </p>
                        </div>
                        <div className="space-y-0.5">
                          <span className={`${getSubTitleSizeClass()} font-bold uppercase tracking-widest font-mono text-[#7B241C] block`}>Structure Identification</span>
                          <p className={`${getTextSizeClass()} font-serif text-emerald-950 font-medium`}>
                            {item.keyFeature}
                          </p>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>

                {/* Distinction rule callout board */}
                <div className="bg-[#7B241C]/5 border-2 border-[#7B241C]/20 p-5 rounded flex gap-4 items-start">
                  <div className="p-2.5 bg-[#7B241C]/10 text-[#7B241C] rounded shrink-0">
                    <Info className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#7B241C] font-mono block">Distinction Rule & Golden Formula</span>
                    <p className="text-sm font-serif italic text-[#2D2926] leading-relaxed">
                      {currentGroup.distinctionRule}
                    </p>
                  </div>
                </div>

              </div>
            )}
          </div>

        </div>
      )}

      {/* 3. INTERACTIVE MINI QUIZ SECTION */}
      {activeTab === 'quiz' && (
        <div className="max-w-xl mx-auto">
          <div className="bg-white border-2 border-[#2D2926] p-6 shadow-[4px_4px_0px_0px_rgba(45,41,38,1)] space-y-6">
            
            {/* Scoreboard and title */}
            <div className="flex justify-between items-center border-b border-[#2D2926]/10 pb-4">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-[#7B241C]" />
                <h4 className="text-base font-mono font-bold uppercase tracking-wider text-[#2D2926]">Distortion Game</h4>
              </div>
              <div className="flex gap-2">
                <span className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 font-mono font-bold rounded">
                  Score: {quizScore} / {quizTotal}
                </span>
                {quizTotal > 0 && (
                  <span className="text-xs bg-[#2D2926]/5 text-[#2D2926]/70 border border-[#2D2926]/10 px-2.5 py-1 font-mono rounded">
                    Accuracy: {((quizScore / quizTotal) * 100).toFixed(0)}%
                  </span>
                )}
              </div>
            </div>

            {/* Main testing area */}
            <div className="text-center space-y-4 py-4">
              <span className="text-[10px] font-bold uppercase tracking-widest font-mono text-[#2D2926]/50 rounded border border-[#2D2926]/15 bg-[#2D2926]/5 px-3 py-1 inline-block">
                Identify the correct character
              </span>
              
              {/* Giant inspectable letter */}
              <div className="flex justify-center items-center py-4">
                <motion.div
                  key={currentQuestion.target.char}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={`font-kannada font-black text-[#2D2926] select-none leading-none select-none ${getGiantSizeClass()}`}
                >
                  {currentQuestion.target.char}
                </motion.div>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-serif italic text-[#2D2926]/70">
                  This letter belongs to a look-alike set featuring similar outlines!
                </p>
                <div className="flex justify-center items-center gap-1.5 text-xs text-[#7B241C] font-semibold font-mono uppercase bg-[#7B241C]/5 border border-[#7B241C]/15 py-1 px-3.5 inline-flex rounded-full select-none">
                  Cluster: {currentQuestion.group.title}
                </div>
              </div>
            </div>

            {/* Answer Options buttons */}
            <div className="grid grid-cols-2 gap-3 pb-2 select-none">
              {currentQuestion.options.map((option) => {
                const isSelected = feedback?.selected === option.char;
                const isCorrect = option.char === currentQuestion.target.char;
                
                let buttonStyle = 'bg-white border-[#2D2926] text-[#2D2926] hover:bg-[#F5EFEB]/40 hover:shadow-[2px_2px_0px_0px_rgba(45,41,38,1)]';
                if (feedback) {
                  if (isCorrect) {
                    buttonStyle = 'bg-emerald-50 text-emerald-800 border-emerald-600 scale-[1.02] shadow-[2px_2px_0px_0px_rgba(5,150,105,1)]';
                  } else if (isSelected) {
                    buttonStyle = 'bg-red-50 text-red-800 border-red-600 opacity-80';
                  } else {
                    buttonStyle = 'bg-white border-[#2D2926]/20 text-[#2D2926]/30 cursor-not-allowed';
                  }
                }

                return (
                  <button
                    key={option.char}
                    id={`quiz-option-${option.char}`}
                    disabled={!!feedback}
                    onClick={() => handleAnswerSubmit(option)}
                    className={`p-4 border-2 text-center transition-all flex flex-col items-center justify-between min-h-[110px] cursor-pointer rounded ${buttonStyle}`}
                  >
                    <span className="text-4xl font-kannada font-bold block">{option.char}</span>
                    <div className="space-y-0.5 mt-2">
                      <span className="text-xs font-mono font-bold tracking-tight text-[#7B241C] block">
                        /{option.transliteration}/
                      </span>
                      <span className="text-[10px] uppercase font-mono text-[#2D2926]/40 font-bold block">
                        {option.name}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Feedback details */}
            <AnimatePresence>
              {feedback && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="bg-[#F5EFEB]/30 border-2 border-[#2D2926] p-5 space-y-3 relative overflow-hidden"
                >
                  <div className="flex items-center gap-2">
                    {feedback.isCorrect ? (
                      <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-800 uppercase bg-emerald-100 border border-emerald-300 px-3 py-1 rounded">
                        <CheckCircle2 className="h-4 w-4" /> correct answer!
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-red-800 uppercase bg-red-100 border border-red-300 px-3 py-1 rounded">
                        <XCircle className="h-4 w-4" /> missed it
                      </span>
                    )}

                    <button
                      onClick={() => playSound(currentQuestion.target.char)}
                      className="p-1 px-3 bg-[#7B241C]/5 border border-[#7B241C]/25 text-[#7B241C] hover:bg-[#7B241C] hover:text-white rounded text-xs font-mono font-bold flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Volume2 className="h-3.5 w-3.5" /> Listen Sound
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#7B241C] font-mono block">Mnemonic Guide & Tip</span>
                    <p className="text-sm font-serif italic text-[#2D2926] leading-relaxed">
                      {currentQuestion.group.distinctionRule}
                    </p>
                    <div className="bg-white/60 p-3 border border-[#2D2926]/10 text-xs font-serif leading-relaxed text-[#2D2926]/90 mt-1">
                      <strong>💡 Quick Breakdown:</strong> {currentQuestion.target.keyFeature} Pronounced as <em>{currentQuestion.target.pronounced}</em>.
                    </div>
                  </div>

                  <div className="flex justify-end pt-2 border-t border-[#2D2926]/10">
                    <button
                      id="next-quiz-question-btn"
                      onClick={handleNextQuestion}
                      className="py-2 px-5 bg-[#7B241C] hover:bg-[#601b15] text-white border-2 border-[#2D2926] hover:shadow-[3px_3px_0px_0px_rgba(45,41,38,1)] text-xs font-bold uppercase tracking-widest flex items-center gap-2 cursor-pointer transition-all"
                    >
                      Next Question <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      )}

    </div>
  );
};
