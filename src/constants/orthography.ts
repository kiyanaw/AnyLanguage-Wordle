import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  "a",
  "c",
  "h",
  "i",
  "k",
  "m",
  "n",
  "o",
  "p",
  "s",
  "t",
  "w",
  "x",
  "y",
  "â",
  "ê",
  "î",
  "ô",
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
