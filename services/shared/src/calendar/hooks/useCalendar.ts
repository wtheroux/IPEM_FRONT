import { useCallback, useMemo, useState } from 'react'

import {
  getMonthesNames,
  createMonth,
  getWeekDaysNames,
  getMonthNumberOfDays,
  createDate,
  getDaysOfMonth
} from '../lib'

interface UseCalendarParams {
  selectedDate: Date
}

export const useCalendar = ({ selectedDate: date }: UseCalendarParams) => {
  const [mode, setMode] = useState<'month' | 'years'>('month')
  const [selectedDay, setSelectedDay] = useState(createDate({ date }))
  const [selectedMonth, setSelectedMonth] = useState(
    createMonth({ date: new Date(selectedDay.year, selectedDay.monthIndex) })
  )
  const [selectedYear, setSelectedYear] = useState(selectedDay.year)

  const monthesNames = useMemo(() => getMonthesNames(), [])
  const weekDaysNames = useMemo(() => getWeekDaysNames(), [])

  const calendarDays = useMemo(() => {
    if (mode === 'month') {
      const monthNumberOfDays = getMonthNumberOfDays(selectedMonth.monthIndex, selectedYear)

      const days = selectedMonth.createMonthDays()
      return getDaysOfMonth(days, monthNumberOfDays)
    } else {
      return []
    }
  }, [mode, selectedMonth, selectedYear])

  const yearCalendarDays = useMemo(() => {
    if (mode === 'years') {
      const result = []
      for (let i = 0; i < 12; i++) {
        const monthNumberOfDays = getMonthNumberOfDays(i, selectedYear)

        const days = createMonth({
          date: new Date(selectedYear, i)
        }).createMonthDays()

        result.push(getDaysOfMonth(days, monthNumberOfDays))
      }
      return result
    } else {
      return []
    }
  }, [mode, selectedYear])

  const onClickArrow = useCallback(
    (direction: 'right' | 'left') => {
      if (mode === 'years' && direction === 'left') {
        return setSelectedYear(selectedYear - 1)
      }

      if (mode === 'years' && direction === 'right') {
        return setSelectedYear(selectedYear + 1)
      }

      if (mode === 'month') {
        const monthIndex = direction === 'left' ? selectedMonth.monthIndex - 1 : selectedMonth.monthIndex + 1
        if (monthIndex === -1) {
          const year = selectedYear - 1
          setSelectedYear(year)
          return setSelectedMonth(createMonth({ date: new Date(selectedYear - 1, 11) }))
        }

        if (monthIndex === 12) {
          const year = selectedYear + 1
          setSelectedYear(year)
          return setSelectedMonth(createMonth({ date: new Date(year, 0) }))
        }

        setSelectedMonth(createMonth({ date: new Date(selectedYear, monthIndex) }))
      }
    },
    [mode, selectedMonth.monthIndex, selectedYear]
  )

  const setSelectedMonthByIndex = (monthIndex: number) => {
    setSelectedMonth(createMonth({ date: new Date(selectedYear, monthIndex) }))
  }

  return {
    state: {
      mode,
      calendarDays,
      weekDaysNames,
      monthesNames,
      selectedDay,
      selectedMonth,
      selectedYear,
      yearCalendarDays
    },
    functions: {
      onClickArrow,
      setMode,
      setSelectedDay,
      setSelectedMonthByIndex,
      setSelectedYear
    }
  }
}
