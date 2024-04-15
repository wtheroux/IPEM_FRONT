import React from 'react'
import { Arrow } from '../images'
import styles from './styles.module.scss'

interface HeaderProps {
  mode: 'month' | 'years'
  selectedYear: number
  selectedMonth: string
  onClickArrow: (direction: 'left' | 'right') => void
  setMode: React.Dispatch<React.SetStateAction<'month' | 'years'>>
}

export const CalendarHeader: React.FC<HeaderProps> = React.memo(
  ({ mode, selectedYear, selectedMonth, onClickArrow, setMode }) => (
    <div className={styles.calendar__header}>
      <div className={styles.calendar_header_arrow_wrapper}>
        <div aria-hidden className={styles.calendar__header__arrow__left} onClick={() => onClickArrow('left')}>
          <Arrow />
        </div>
        <div aria-hidden className={styles.calendar__header__arrow__right} onClick={() => onClickArrow('right')}>
          <Arrow />
        </div>
      </div>
      {mode === 'month' && (
        <div aria-hidden onClick={() => setMode('years')} style={{ cursor: 'pointer' }}>
          {selectedMonth} {selectedYear}
        </div>
      )}
      {mode === 'years' && <div>{selectedYear}</div>}
    </div>
  )
)
