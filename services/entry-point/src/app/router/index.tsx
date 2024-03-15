import React from 'react'
import { Routes, Route } from 'react-router-dom'
const Info = React.lazy(() => import('remote-modules-employee-info/Info'))
const TimeOff = React.lazy(() => import('remote-modules-employee-time-off/TimeOff'))
const Vacantion = React.lazy(() => import('remote-modules-employee-vacation/Vacation'))

export const Pages = () => (
  <Routes>
    <Route path='/' element={<div>Hello</div>} />
    <Route path='/info/*' element={<Info />} />
    <Route path='/time-off/*' element={<TimeOff />} />
    <Route path='/vacation/*' element={<Vacantion />} />
  </Routes>
)
