import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Overview } from './overview'
import { MainLayout } from '../widgets'

const Info = React.lazy(() => import('remote-modules-employee-info/Info'))
const TimeOff = React.lazy(() => import('remote-modules-employee-time-off/TimeOff'))
const Vacantion = React.lazy(() => import('remote-modules-employee-vacation/Vacation'))

export const Pages = () => (
  <MainLayout>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Overview />} />
        <Route path='/info/*' element={<Info />} />
        <Route path='/time-off/*' element={<TimeOff />} />
        <Route path='/vacation/*' element={<Vacantion />} />
      </Routes>
    </Suspense>
  </MainLayout>
)
