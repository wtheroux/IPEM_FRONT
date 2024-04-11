const DAYS_IN_WEEK = 7
const FIRST_WEEK_DAY_NUMBER = 2

export interface Days {
  date: Date
  dayNumber: number
  day: string
  dayNumberInWeek: number
  dayShort: string
  year: number
  month: string
  monthNumber: number
  monthIndex: number
  timestamp: number
  week: number
}

export const getDaysOfMonth = (days: Days[], monthNumberOfDays: number) => {
  const firstDay = days[0]
  const lastDay = days[monthNumberOfDays - 1]
  const shiftIndex = FIRST_WEEK_DAY_NUMBER - 1

  const numberOfPrevDays =
    firstDay.dayNumberInWeek - 1 - shiftIndex < 0
      ? DAYS_IN_WEEK - (FIRST_WEEK_DAY_NUMBER - firstDay.dayNumberInWeek)
      : firstDay.dayNumberInWeek - 1 - shiftIndex

  const numberOfNextDays =
    DAYS_IN_WEEK - lastDay.dayNumberInWeek + shiftIndex > 6
      ? DAYS_IN_WEEK - lastDay.dayNumberInWeek - (DAYS_IN_WEEK - shiftIndex)
      : DAYS_IN_WEEK - lastDay.dayNumberInWeek + shiftIndex

  const totalCalendarDays = days.length + numberOfPrevDays + numberOfNextDays

  const result = []

  for (let i = 0; i < numberOfPrevDays; i += 1) {
    result[i] = null
  }

  for (let i = numberOfPrevDays; i < totalCalendarDays - numberOfNextDays; i += 1) {
    result[i] = days[i - numberOfPrevDays]
  }

  for (let i = totalCalendarDays - numberOfNextDays; i < totalCalendarDays; i += 1) {
    result[i] = null
  }

  return result
}
