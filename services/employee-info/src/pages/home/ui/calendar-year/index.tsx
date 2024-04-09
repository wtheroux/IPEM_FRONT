import React from 'react'

import styles from '../../styles.module.scss'
import { checkDateIsEqual, checkIsToday } from '../../lib'
import type { Days } from '../../lib'

interface CalendarYearProps {
  weekDaysNames: {
    day: string
    dayShort: string
  }[]
  yearCalendarDays: (Days | null)[][]
  selectedDay: Date
  monthesNames: {
    month: string
    monthIndex: number
  }[]
  setSelectedDay: (value: React.SetStateAction<Days>) => void
  selectDate: (day: Date) => void
  setSelectedMonthByIndex: (index: number) => void
  setMode: React.Dispatch<React.SetStateAction<'month' | 'years'>>
}

export const CalendarYear: React.FC<CalendarYearProps> = ({
  weekDaysNames,
  yearCalendarDays,
  selectedDay,
  monthesNames,
  setSelectedDay,
  selectDate,
  setSelectedMonthByIndex,
  setMode
}) => (
  <div className={styles.calendar__pick__items__container}>
    {yearCalendarDays.map((month, index) => (
      <div className={styles.calendar__mounth__wrapper} key={'wrapper-' + index}>
        <div className={styles.calendar__week__names}>
          {
            <div
              key={monthesNames[index].month}
              onClick={() => {
                setSelectedMonthByIndex(index)
                setMode('month')
              }}
              style={{ cursor: 'pointer' }}
            >
              {monthesNames[index].month}
            </div>
          }
        </div>
        <div className={styles.calendar__week__names}>
          {weekDaysNames.map(weekDaysName => (
            <div key={weekDaysName.dayShort + index}>{weekDaysName.dayShort}</div>
          ))}
        </div>
        <div className={styles.calendar__days}>
          {month.map((day, i) => {
            if (day === null) {
              return <div key={index - i} />
            }
            const isToday = checkIsToday(day.date)
            const isSelectedDay = checkDateIsEqual(day.date, selectedDay)

            const isAdditionalDay = day.monthIndex !== index

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
      </div>
    ))}
  </div>
)
