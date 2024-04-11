import { Routes, Route } from 'react-router-dom'

export const Pages = () => (
  <Routes>
    <Route path='/info' element={<>hello, info</>} />
  </Routes>
)
