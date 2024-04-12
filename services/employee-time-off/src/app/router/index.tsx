import { Routes, Route } from 'react-router-dom'
import { MainPage } from '@modules/time-off/pages'

export const Pages = () => (
  <Routes>
    <Route path='/time-off' element={<MainPage />} />
  </Routes>
)
