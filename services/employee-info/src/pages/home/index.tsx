import React from 'react'

import { checkDateIsEqual, checkIsToday } from './lib'
import { useCalendar } from './hooks/useCalendar'

import styles from './Calendar.module.scss'

interface CalendarProps {
  locale?: string
  selectedDate: Date
  selectDate: (date: Date) => void
  firstWeekDayNumber?: number
}

export const Calendar: React.FC<CalendarProps> = ({
  locale = 'default',
  selectedDate: date,
  selectDate,
  firstWeekDayNumber = 2
}) => {
  const { functions, state } = useCalendar({
    locale,
    selectedDate: date,
    firstWeekDayNumber
  })

  console.log(state)

  return (
    <div className={styles.calendar}>
      <div className={styles.calendar__header}>
        <div className={styles.calendar_header_arroe_wrapper}>
          <div
            aria-hidden
            className={styles.calendar__header__arrow__left}
            onClick={() => functions.onClickArrow('left')}
          />
          <div
            aria-hidden
            className={styles.calendar__header__arrow__right}
            onClick={() => functions.onClickArrow('right')}
          />
        </div>
        {state.mode === 'days' && (
          <div aria-hidden onClick={() => functions.setMode('years')}>
            {state.monthesNames[state.selectedMonth.monthIndex].month} {state.selectedYear}
          </div>
        )}
        {state.mode === 'years' && <div>{state.selectedYear}</div>}
      </div>
      <div className={styles.calendar__body}>
        {state.mode === 'days' && (
          <>
            <div className={styles.calendar__week__names}>
              {state.weekDaysNames.map(weekDaysName => (
                <div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
              ))}
            </div>
            <div className={styles.calendar__days}>
              {state.calendarDays.map(day => {
                const isToday = checkIsToday(day.date)
                const isSelectedDay = checkDateIsEqual(day.date, state.selectedDay.date)
                const isAdditionalDay = day.monthIndex !== state.selectedMonth.monthIndex

                return (
                  <div
                    key={`${day.dayNumber}-${day.monthIndex}`}
                    aria-hidden
                    onClick={() => {
                      functions.setSelectedDay(day)
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
        )}

        {state.mode === 'years' && (
          <div className={styles.calendar__pick__items__container}>
            {state.yearCalendarDays.map((month, index) => (
              <div className={styles.calendar__mounth__wrapper}>
                <div className={styles.calendar__week__names}>
                  {
                    <div
                      key={state.monthesNames[index].month}
                      onClick={() => {
                        functions.setSelectedMonthByIndex(index)
                        functions.setMode('days')
                      }}
                    >
                      {state.monthesNames[index].month}
                    </div>
                  }
                </div>
                <div className={styles.calendar__week__names}>
                  {state.weekDaysNames.map(weekDaysName => (
                    <div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
                  ))}
                </div>
                <div className={styles.calendar__days}>
                  {month.map(day => {
                    if (day.dayNumber === '-') {
                      return <div>{day.dayNumber}</div>
                    }
                    // //@ts-ignore
                    // const isToday = checkIsToday(day.date)
                    // //@ts-ignore
                    // const isSelectedDay = checkDateIsEqual(day.date, state.selectedDay.date)

                    const isAdditionalDay = day.monthIndex !== index

                    return (
                      <div
                        key={`${day.dayNumber}-${day.monthIndex}`}
                        aria-hidden
                        onClick={() => {
                          // //@ts-ignore
                          // functions.setSelectedDay(day)
                          // //@ts-ignores
                          // selectDate(day.date)
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
        )}
      </div>
    </div>
  )
}
