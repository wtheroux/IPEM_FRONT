import { getWeekNumber } from './getWeekNumber'

interface CreateDateParams {
  date?: Date
}

export const createDate = (params?: CreateDateParams) => {
  const locale = 'default'

  const d = params?.date ?? new Date()
  const dayNumber = d.getDate()
  const day = d.toLocaleDateString(locale, { weekday: 'long' })
  const dayNumberInWeek = d.getDay() + 1
  const dayShort = d.toLocaleDateString(locale, { weekday: 'short' })
  const year = d.getFullYear()
  const month = d.toLocaleDateString(locale, { month: 'long' })
  const monthNumber = d.getMonth() + 1
  const monthIndex = d.getMonth()
  const timestamp = d.getTime()
  const week = getWeekNumber(d)

  return {
    date: d,
    dayNumber,
    day,
    dayNumberInWeek,
    dayShort,
    year,
    month,
    monthNumber,
    monthIndex,
    timestamp,
    week
  }
}
