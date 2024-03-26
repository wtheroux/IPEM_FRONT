import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Calendar } from '@modules/info/pages'

export const Pages = () => {
  const [selectedDate, setSelectedDay] = useState(new Date())
  return (
    <Routes>
      <Route
        path='/info'
        element={<Calendar selectedDate={selectedDate} selectDate={date => setSelectedDay(date)} />}
      />
    </Routes>
  )
}
