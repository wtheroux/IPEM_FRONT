import { Routes, Route } from 'react-router-dom'
import { MainPage } from '@modules/vacation/pages'

export const Pages = () => (
  <Routes>
    <Route path='/vacation' element={<MainPage />} />
  </Routes>
)
