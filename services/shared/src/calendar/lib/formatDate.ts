import { createDate } from './createDate'

export const formatDate = (date: Date, format: string) => {
  const d = createDate({ date })

  return format
    .replace(/\bYYYY\b/, d.year.toString())
    .replace(/\bWW\b/, d.week.toString().padStart(2, '0'))
    .replace(/\bW\b/, d.week.toString())
    .replace(/\bDDDD\b/, d.day)
    .replace(/\bDDD\b/, d.dayShort)
    .replace(/\bDD\b/, d.dayNumber.toString().padStart(2, '0'))
    .replace(/\bD\b/, d.dayNumber.toString())
    .replace(/\bMMMM\b/, d.month)
    .replace(/\bMM\b/, d.monthNumber.toString().padStart(2, '0'))
    .replace(/\bM\b/, d.monthNumber.toString())
}
