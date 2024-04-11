import React from 'react'
import { useCalendar } from './hooks/useCalendar'
import { CalendarHeader, CalendarMonth, CalendarYear } from './ui'
import styles from './styles.module.scss'

interface CalendarProps {
  selectedDate: Date
  selectDate: (date: Date) => void
}

export const Calendar: React.FC<CalendarProps> = ({ selectedDate: date, selectDate }) => {
  const { functions, state } = useCalendar({
    selectedDate: date
  })

  return (
    <div className={styles.calendar}>
      <CalendarHeader
        mode={state.mode}
        selectedYear={state.selectedYear}
        selectedMonth={state.monthesNames[state.selectedMonth.monthIndex].month}
        onClickArrow={functions.onClickArrow}
        setMode={functions.setMode}
      />
      <div className={styles.calendar__body}>
        {state.mode === 'month' && (
          <CalendarMonth
            weekDaysNames={state.weekDaysNames}
            calendarDays={state.calendarDays}
            selectedDay={state.selectedDay.date}
            monthIndex={state.selectedMonth.monthIndex}
            setSelectedDay={functions.setSelectedDay}
            selectDate={selectDate}
          />
        )}

        {state.mode === 'years' && (
          <CalendarYear
            weekDaysNames={state.weekDaysNames}
            yearCalendarDays={state.yearCalendarDays}
            selectedDay={state.selectedDay.date}
            monthesNames={state.monthesNames}
            setSelectedDay={functions.setSelectedDay}
            selectDate={selectDate}
            setSelectedMonthByIndex={functions.setSelectedMonthByIndex}
            setMode={functions.setMode}
          />
        )}
      </div>
    </div>
  )
}
