import { useState } from 'react'
import { Calendar } from 'ipem-shared'

export const MainPage = () => {
  const [date, setDate] = useState(new Date())

  return <Calendar selectedDate={date} selectDate={setDate} />
}
