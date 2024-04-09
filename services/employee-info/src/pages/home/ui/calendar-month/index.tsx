import React from 'react'

import styles from '../../styles.module.scss'
import { checkDateIsEqual, checkIsToday } from '../../lib'
import type { Days } from '../../lib'

interface CalendarMonthProps {
  weekDaysNames: {
    day: string
    dayShort: string
  }[]
  calendarDays: (Days | null)[]
  selectedDay: Date
  monthIndex: number
  setSelectedDay: (value: React.SetStateAction<Days>) => void
  selectDate: (day: Date) => void
}

export const CalendarMonth: React.FC<CalendarMonthProps> = ({
  weekDaysNames,
  calendarDays,
  selectedDay,
  monthIndex,
  setSelectedDay,
  selectDate
}) => (
  <>
    <div className={styles.calendar__week__names}>
      {weekDaysNames.map(weekDaysName => (
        <div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
      ))}
    </div>
    <div className={styles.calendar__days}>
      {calendarDays.map((day, index) => {
        if (day === null) return <div key={index} />
        const isToday = checkIsToday(day.date)
        const isSelectedDay = checkDateIsEqual(day.date, selectedDay)
        const isAdditionalDay = day.monthIndex !== monthIndex

        return (
          <div
            key={`${day.dayNumber}-${day.monthIndex}`}
            aria-hidden
            onClick={() => {
              setSelectedDay(day)
              selectDate(day.date)
            }}
            className={[
              styles.calendar__day,
              isToday ? styles.calendar__today__item : '',
              isSelectedDay ? styles.calendar__selected__item : '',
              isAdditionalDay ? styles.calendar__additional__day : ''
            ].join(' ')}
          >
            {day.dayNumber}
          </div>
        )
      })}
    </div>
  </>
)
