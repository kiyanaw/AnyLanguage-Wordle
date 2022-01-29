import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'â',
  'c',
  'ê',
  'h',
  'i',
  'î',
  'k',
  'm',
  'n',
  'o',
  'ô',
  'p',
  's',
  't',
  'w',
  'x',
  'y',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
