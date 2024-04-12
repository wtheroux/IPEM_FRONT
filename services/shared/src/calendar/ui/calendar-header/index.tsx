import React from 'react'
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
          <svg width='10' height='15' viewBox='0 0 5 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M4.8003 9.11849C4.53403 9.38475 4.10233 9.38475 3.83606 9.11849L0.1997 5.48212C-0.0665664 5.21586 -0.0665664 4.78415 0.1997 4.51789L3.83606 0.881524C4.10233 0.615257 4.53403 0.615257 4.8003 0.881524C5.06657 1.14779 5.06657 1.57949 4.8003 1.84576L1.64605 5.00001L4.8003 8.15425C5.06657 8.42052 5.06657 8.85222 4.8003 9.11849Z'
              fill='#1677ff'
            />
          </svg>
        </div>
        <div aria-hidden className={styles.calendar__header__arrow__right} onClick={() => onClickArrow('right')}>
          <svg width='10' height='15' viewBox='0 0 5 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M4.8003 9.11849C4.53403 9.38475 4.10233 9.38475 3.83606 9.11849L0.1997 5.48212C-0.0665664 5.21586 -0.0665664 4.78415 0.1997 4.51789L3.83606 0.881524C4.10233 0.615257 4.53403 0.615257 4.8003 0.881524C5.06657 1.14779 5.06657 1.57949 4.8003 1.84576L1.64605 5.00001L4.8003 8.15425C5.06657 8.42052 5.06657 8.85222 4.8003 9.11849Z'
              fill='#1677ff'
            />
          </svg>
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
