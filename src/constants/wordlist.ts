import { CONFIG } from './config'

// cat *stems.txt | cut -d' ' -f1 | grep -o -w '\w\{5,5\}' > wordle-5.txt
export const WORDS = [
  'akask',
  'amisk',
  'acâhk',
  'wîsti',
  'anohc',
  'apisi',
  'môswa',
  'apisk',
  'atâhk',
  'môswa',
  'atihk',
  'atimâ',
  'pîsim',
  'atimo',
  'ayîki',
  'ayîki',
  'ayîki',
  'pîsim',
  'âhkik',
  'âhpin',
  'pîsim',
  'êyiko',
  'wîsti',
  'pîsim',
  'môswa',
  'pîsim',
  'iyini',
  'pimîs',
  'pihêw',
  'pimiy',
  'pîsim',
  'kayâs',
  'âyâna',
  'kayâs',
  'kêhtê',
  'amisk',
  'kêhtê',
  'kêhtê',
  'kihci',
  'kihci',
  'kihci',
  'kihci',
  'kihci',
  'kihci',
  'kîsik',
  'kihci',
  'mihti',
  'kihci',
  'kihci',
  'kihci',
  'kihci',
  'pîsim',
  'kîsik',
  'pîsim',
  'pîsim',
  'mihko',
  'pîsim',
  'pîsim',
  'sihta',
  'mâcîs',
  'mâkwa',
  'mâski',
  'mîtos',
  'mihko',
  'mihti',
  'pîsim',
  'minôs',
  'minôs',
  'minôs',
  'miyay',
  'nâpêw',
  'mosci',
  'namês',
  'sihta',
  'nâpês',
  'askiy',
  'mihko',
  'nipîs',
  'niski',
  'pîsim',
  'nîpin',
  'nîpîs',
  'pîsim',
  'pîsim',
  'wâpos',
  'atâhk',
  'pîsim',
  'pîsim',
  'pîsim',
  'pîsim',
  'pîsim',
  'osâwi',
  'osâwi',
  'osâwi',
  'osâwi',
  'kîsik',
  'paskê',
  'pîsim',
  'pîsim',
  'pâhkw',
  'pîsim',
  'mihko',
  'mihti',
  'pihko',
  'pîsim',
  'pîsim',
  'pimîs',
  'pîsim',
  'pîsim',
  'pipik',
  'pipon',
  'pipon',
  'pipon',
  'pîsim',
  'pisîs',
  'pîsim',
  'pôsîs',
  'pwâta',
  'sakâs',
  'pîsim',
  'sêhkê',
  'sihta',
  'sikâk',
  'sîsîp',
  'sîwâs',
  'sôkâs',
  'pîsim',
  'pîsim',
  'pîsim',
  'wîsti',
  'wâcis',
  'minôs',
  'mîmês',
  'wâpos',
  'wâpos',
  'wâwis',
  'pîsim',
  'pîsim',
  'wiyin',
  'wîhki',
  'wîsti',
  'yâpêw',
  'atihk',
  'yâwêw',
  'pîsim',
  'pîsim',
  'yôtin',
  'yôtin',
  'nacâs',
  'natay',
  'nikot',
  'nimis',
  'nisis',
  'nisit',
  'nisîm',
  'nisoy',
  'nisôs',
  'nitâs',
  'nitâs',
  'nitêh',
  'nitêm',
  'nitiy',
  'nitôn',
  'niyaw',
  'nîkis',
  'nîpit',
  'nîtim',
  'nîwas',
  'wiyaw',
  'macâs',
  'matay',
  'mikot',
  'misoy',
  'mitâs',
  'mitâs',
  'mitiy',
  'mitôn',
  'miyaw',
  'acici',
  'acici',
  'akoci',
  'apini',
  'apwêw',
  'askâw',
  'astâw',
  'astêw',
  'apini',
  'itwêw',
  'kâtêw',
  'wîkiw',
  'âhcîw',
  'nîpin',
  'pipon',
  'nakîw',
  'cîwêw',
  'êskêw',
  'ihkin',
  'ihtâw',
  'ihtiw',
  'astâw',
  'kitow',
  'ispâw',
  'itwêw',
  'îkatê',
  'îkatê',
  'îkatê',
  'îkatê',
  'îkatê',
  'îkatê',
  'îkatê',
  'tôtam',
  'kakwê',
  'kakwê',
  'kakwê',
  'tôtam',
  'kapâw',
  'kaski',
  'kayâs',
  'kayâs',
  'kitow',
  'kocîw',
  'kâsâw',
  'kâsôw',
  'kâtâw',
  'kâtêw',
  'kâtêw',
  'kâwâw',
  'kêcîw',
  'kêhcê',
  'kêhtê',
  'kihci',
  'kihci',
  'kihci',
  'kihci',
  'kihci',
  'itwêw',
  'kihci',
  'kihci',
  'kihci',
  'kihci',
  'kihci',
  'kihci',
  'kihci',
  'kihci',
  'kihci',
  'kihci',
  'kihci',
  'kihci',
  'kihci',
  'wîkiw',
  'pêhêw',
  'kipiw',
  'kisci',
  'kisci',
  'kisin',
  'kisîw',
  'kitâw',
  'kitow',
  'ôhpîw',
  'kîhêw',
  'mowêw',
  'kîmîw',
  'kîpan',
  'kîpîw',
  'kîpîw',
  'yôtin',
  'pipon',
  'yôtin',
  'kîwêw',
  'kocîw',
  'kôkîw',
  'astâw',
  'astâw',
  'itwêw',
  'tôtam',
  'macan',
  'itwêw',
  'mahki',
  'tôtam',
  'tôtam',
  'manîw',
  'matêw',
  'matwê',
  'matwê',
  'kitow',
  'matwê',
  'mâtow',
  'matwê',
  'matwê',
  'nipâw',
  'matwê',
  'nipâw',
  'mâcîw',
  'mâham',
  'mâski',
  'mâtow',
  'pipon',
  'tôtam',
  'mêkiw',
  'mêkwâ',
  'mêkwâ',
  'mêkwâ',
  'mêkwâ',
  'mêkwâ',
  'mêkwâ',
  'mêsci',
  'mihko',
  'mihko',
  'mihko',
  'mikiw',
  'misâw',
  'kitow',
  'mîciw',
  'pônam',
  'tawâw',
  'yôtin',
  'miyêw',
  'tawâw',
  'tôtam',
  'wîkiw',
  'miyôw',
  'mîciw',
  'mînôw',
  'mîsîw',
  'mosci',
  'mosci',
  'mosci',
  'mosci',
  'mosci',
  'mêkiw',
  'mosci',
  'miyêw',
  'mosci',
  'mosci',
  'mosci',
  'mosci',
  'mosci',
  'mosci',
  'mowêw',
  'môhcw',
  'môhêw',
  'mômêw',
  'itwêw',
  'tôtam',
  'môsko',
  'nahîw',
  'nakîw',
  'tôtam',
  'nakîw',
  'nâtam',
  'nâtêw',
  'wîhêw',
  'nêmow',
  'nêyâw',
  'nihtâ',
  'nihtâ',
  'nihtâ',
  'nihtâ',
  'nihtâ',
  'nihtâ',
  'nihtâ',
  'nihtâ',
  'nihtâ',
  'nihtâ',
  'nihtâ',
  'nihtâ',
  'nihtâ',
  'nihtâ',
  'nihtâ',
  'nihtâ',
  'yôtin',
  'nipâw',
  'nipiw',
  'nisto',
  'nisto',
  'niyâw',
  'nîhci',
  'nîhci',
  'nîhci',
  'nîkân',
  'nîkân',
  'nîkân',
  'nîmâw',
  'nîmiw',
  'nîpin',
  'nôhêw',
  'nôhtê',
  'nôhtê',
  'nôhtê',
  'kîwêw',
  'nôhtê',
  'mâtow',
  'nôhtê',
  'nôhtê',
  'nôhtê',
  'nipâw',
  'nôhtê',
  'nôniw',
  'nôtin',
  'ohcîw',
  'ohpîw',
  'ohpîw',
  'ohtêw',
  'ohtin',
  'osâmi',
  'pônam',
  'osâwi',
  'osâwi',
  'osâwi',
  'osâwi',
  'osiko',
  'osiko',
  'oswêw',
  'otami',
  'otami',
  'otami',
  'pêhêw',
  'tôtam',
  'papâm',
  'papâm',
  'papâm',
  'papâm',
  'piciw',
  'pasow',
  'pâhkw',
  'pâkan',
  'pâkâw',
  'pâsam',
  'pâsci',
  'pâsci',
  'ohpîw',
  'pâsci',
  'pâsow',
  'kîwêw',
  'nâtam',
  'nâtêw',
  'nipâw',
  'pêhêw',
  'pêhow',
  'pêtâw',
  'piciw',
  'nakîw',
  'têhci',
  'têhci',
  'pipon',
  'pisci',
  'pisci',
  'pisci',
  'pisci',
  'pisci',
  'tôtam',
  'pisci',
  'pisin',
  'wîkiw',
  'pîmâw',
  'pîwan',
  'yôtin',
  'pômêw',
  'pônam',
  'pônêw',
  'mâtow',
  'nôhêw',
  'nôniw',
  'yêhêw',
  'pôsiw',
  'pôyow',
  'sakâw',
  'itwêw',
  'tawâw',
  'sâwan',
  'yôtin',
  'sêham',
  'sêhkê',
  'sêkôw',
  'sêsâw',
  'sêwêw',
  'sikiw',
  'sipwê',
  'sipwê',
  'sînam',
  'sînêw',
  'sîpan',
  'sîpîw',
  'sîwâw',
  'tahko',
  'miyêw',
  'astâw',
  'tasôw',
  'tawâw',
  'tâwiw',
  'têham',
  'tênam',
  'mâham',
  'miyêw',
  'nipâw',
  'tôtam',
  'timîw',
  'tômâw',
  'tôtam',
  'wapâw',
  'wâkâw',
  'wîhêw',
  'wâkâw',
  'wâpan',
  'wâpan',
  'wâpâw',
  'wâpiw',
  'wâsâw',
  'wâyâw',
  'wêhci',
  'wîhêw',
  'wîkiw',
  'wîpâw',
  'wîwiw',
  'yâwâw',
  'yâwêw',
  'yêhêw',
  'yôtin',
  'acici',
  'akâmi',
  'akâwâ',
  'akinê',
  'âkwâc',
  'amisk',
  'anihi',
  'anima',
  'anisi',
  'anita',
  'anitê',
  'aniyê',
  'anohc',
  'anoht',
  'asici',
  'âsitê',
  'âskaw',
  'askiy',
  'âskiy',
  'askoc',
  'âsônê',
  'âsowê',
  'aspin',
  'âspîs',
  'âstam',
  'âtiht',
  'awasi',
  'awêkâ',
  'awîna',
  'awîta',
  'awîtê',
  'ayahk',
  'ayihk',
  'âyihk',
  'ayisk',
  'cihkê',
  'êcika',
  'êhâha',
  'êhâhâ',
  'êhêhê',
  'êkamâ',
  'êkâya',
  'êkosi',
  'êkota',
  'êkotê',
  'êskwa',
  'êtokê',
  'êwako',
  'êyiwê',
  'îkatê',
  'iskwa',
  'ispic',
  'itowa',
  'kanak',
  'kaski',
  'katâc',
  'kayâm',
  'kayâs',
  'kêkâc',
  'kêkât',
  'kêkoc',
  'kihci',
  'kîmôc',
  'kipoc',
  'kîsâc',
  'kisik',
  'kîsik',
  'kisip',
  'kîwâc',
  'kiyâm',
  'kotak',
  'mahci',
  'mahti',
  'mayaw',
  'mêkwâ',
  'misit',
  'mohci',
  'môsak',
  'mosci',
  'mosis',
  'mowac',
  'mwâsi',
  'namôy',
  'nâpêw',
  'nâsic',
  'nâtam',
  'nawac',
  'nawat',
  'nâway',
  'nêwâw',
  'nîkân',
  'nîpin',
  'nipiy',
  'nisto',
  'nistw',
  'niyâk',
  'ohpim',
  'omisi',
  'opîma',
  'osâwi',
  'oskac',
  'otâhk',
  'pahki',
  'paskê',
  'pâtos',
  'payâk',
  'pêyak',
  'pimic',
  'pipon',
  'pisik',
  'pîsim',
  'pîtos',
  'piyis',
  'pôsko',
  'sâkôc',
  'sâsay',
  'sêhkê',
  'sêkwâ',
  'sêmâk',
  'sîsîp',
  'sôhki',
  'tahki',
  'tahto',
  'tâpic',
  'tâpwê',
  'tawâw',
  'tâwic',
  'tipân',
  'wâhay',
  'wahwâ',
  'wakîc',
  'wâpan',
  'wâskâ',
  'wasko',
  'wâwâc',
  'wâwîs',
  'wayês',
  'wîpac',
  'wîpat',
  'yâhki',
  'yâkwâ',
  'yâyaw',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
